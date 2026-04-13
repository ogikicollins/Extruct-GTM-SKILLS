---
name: post-engagers
description: >
  Extract people who engage (comment, react, repost) on a LinkedIn post, enrich
  their profile / email / company data, and land them in a local SQLite CRM
  (content.db → crm.db) as the source of truth. Extruct people-table upload is
  optional. Triggers on: "post engagers", "linkedin engagers", "who commented on",
  "who liked", "who reacted", "linkedin post engagers", "scrape post",
  "extract engagers", "post commenters".
---

# LinkedIn Post Engagers

Turn LinkedIn post engagement into a prospecting list. The canonical sink is
`content.db` (raw interactions) → `crm.db` (unified CRM). Uploading to an
Extruct people table is an optional side output, not the default.

## Assumed repo layout

This skill expects the repo to follow the `revops/` convention:

```
revops/
  content/
    fetch_interactions.py    # scrape post → content.db
    enrich_profiles.py       # member_id / profile_urn via AnySite
    enrich_emails.py         # Fullenrich v2 bulk
    enrich_companies.py      # Extruct firmographics
  etl/
    content_to_crm.py        # content.db → crm.db raw_content_*
    crm_to_attio_content.py  # (optional) crm.db → Attio
  lib/
    classify.py              # segment classifier (owns segment taxonomy)
    config.py                # CONTENT_DB_PATH, CRM_DB_PATH, load_env
    fullenrich.py, extruct.py, attio.py
  db/
    content.db
    crm.db
```

Segment classification lives in `revops/lib/classify.py` — **do not** reimplement
or inline a regex table in this skill. `fetch_interactions.py` calls it automatically.

## Related skills

```
post-engagers → (crm.db lands engagers) → email-generation → campaign-sending
```

Downstream skills read from `crm.db` / `content.db`, not from an intermediate CSV.

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| LinkedIn post URL(s) | User provides | yes |
| Engagement types | comments / reactions / reposts (default: all) | no |
| Enrichment stages to run | profiles / emails / companies (default: all) | no |
| Push to Attio? | yes/no (default: no) | no |
| Upload to Extruct people table? | yes/no (default: no) | no |

## Workflow

### Step 1: Collect post URLs

Get the LinkedIn post URL(s) from the user. Accept one or multiple. Each URL
will be passed directly to `fetch_interactions.py`, which extracts the URN.

Check whether any of the URNs already exist in `content.db` — if so, re-running
fetch will upsert and pick up new engagers since last run.

```sql
SELECT urn, author_name, comment_count, reaction_count, share_count, fetched_at
FROM content_posts WHERE urn IN (...);
```

### Step 2: Scrape engagers → content.db

Run the fetch script per post. It uses AnySite MCP (`get_linkedin_post_comments`,
`get_linkedin_post_reactions`, `get_linkedin_post_reposts`), classifies segments
via `lib.classify`, and writes to `content_posts` + `content_interactions`.

```bash
python3 revops/content/fetch_interactions.py "<post_url>"
# or scrape a single interaction type:
python3 revops/content/fetch_interactions.py --urn <URN> --type comments
```

If the user has a different scraping provider (Apify, RapidAPI, Phantombuster,
self-hosted), adapt `fetch_interactions.py` to call that provider — do **not**
bypass the script and write to `content.db` from a notebook. The schema, upsert
logic, and segment classification all live there.

### Step 3: Enrichment stages (in order)

Each stage is idempotent and only hits rows missing the target field. Run them
sequentially — later stages depend on earlier fields (emails need profiles,
companies need domain).

```bash
python3 revops/content/enrich_profiles.py    # AnySite user endpoint → member_id, profile_urn
python3 revops/content/enrich_emails.py      # Fullenrich → email, email_status, domain
python3 revops/content/enrich_companies.py   # Extruct → firmographics by domain
```

Useful flags:
- `--dry-run` on every stage to preview before paying for credits.
- `--limit N` to cap batch size.
- `enrich_emails.py --segment "Founders / CEOs" --segment "Sales Leadership"`
  to restrict email spend to decision makers.

Before running email enrichment, show the user the segment breakdown so they
can decide which segments to include:

```sql
SELECT segment, COUNT(*) AS n
FROM content_interactions
WHERE post_id IN (SELECT id FROM content_posts WHERE urn IN (...))
GROUP BY segment ORDER BY n DESC;
```

Confirm selection before calling Fullenrich — email credits cost real money.

### Step 4: Sync content.db → crm.db

```bash
python3 revops/etl/content_to_crm.py --post <URN>   # single post
python3 revops/etl/content_to_crm.py                # all
```

This populates `raw_content_posts` and `raw_content_interactions` in `crm.db`.
The `stg_people` / `mart_people` views then merge engagers with LinkedIn
connections, campaign contacts, and Attio records automatically — no further
action needed for the unified view.

### Step 5 (optional): Push to Attio

Only if the user explicitly asks to sync to Attio:

```bash
python3 revops/etl/crm_to_attio_content.py --dry-run
python3 revops/etl/crm_to_attio_content.py
```

### Step 6 (optional): Upload to an Extruct people table

Only when the user wants engagers in an Extruct generic table — e.g. to feed a
separate Extruct-driven campaign flow that doesn't read from `crm.db`.
Delegate Extruct API calls to the `extruct-api` skill. Pull rows from
`mart_people` (or `content_interactions` filtered by post URN) rather than
re-deriving from scratch.

Suggested columns:

```json
{
  "name": "{user-provided name or 'Post Engagers — {post_author} — {date}'}",
  "kind": "generic",
  "column_configs": [
    {"kind": "input", "name": "Full Name", "key": "full_name"},
    {"kind": "input", "name": "LinkedIn URL", "key": "linkedin_url"},
    {"kind": "input", "name": "Job Title", "key": "job_title"},
    {"kind": "input", "name": "Segment", "key": "segment"},
    {"kind": "input", "name": "Engagement Type", "key": "engagement_type"},
    {"kind": "input", "name": "Source Post", "key": "source_post"},
    {"kind": "input", "name": "Company", "key": "company"},
    {"kind": "input", "name": "Domain", "key": "domain"},
    {"kind": "input", "name": "Email", "key": "email"}
  ]
}
```

Deduplicate by `linkedin_url` against the target table before uploading.

## Verification checklist

After the chain completes, sanity-check before declaring done:

```sql
-- in content.db
SELECT interaction_type, COUNT(*) FROM content_interactions
  WHERE post_id = (SELECT id FROM content_posts WHERE urn = ?) GROUP BY 1;
SELECT COUNT(*) filter (WHERE email IS NOT NULL AND email != '') AS with_email,
       COUNT(*) AS total
  FROM content_interactions WHERE post_id = ...;

-- in crm.db
SELECT COUNT(*) FROM raw_content_interactions WHERE post_id = ...;
SELECT COUNT(*) FROM mart_people WHERE interaction_count > 0;
```

## Tips

- **Multiple posts = richer list.** Scrape 3–5 recent posts from the same
  author; engagers who hit on 2+ posts are the warmest leads. `stg_engagement`
  already aggregates per person.
- **Filter before enriching emails.** Emails are the expensive stage — restrict
  by segment to avoid paying for students, recruiters, bots.
- **Re-run safely.** Every script is idempotent; fetch upserts, enrichment only
  touches null fields, sync uses `ON CONFLICT DO UPDATE`.
- **Don't hand-edit `content.db` or `crm.db` raw tables.** Go through the
  scripts so the schema, classifiers, and upsert rules stay consistent.

## Output

| Output | Location |
|--------|----------|
| Raw post + engagers | `revops/db/content.db` (`content_posts`, `content_interactions`) |
| Unified CRM view | `revops/db/crm.db` (`raw_content_*`, `stg_people`, `mart_people`) |
| Attio records (optional) | Pushed via `crm_to_attio_content.py` |
| Extruct people table (optional) | `https://app.extruct.ai/tables/{table_id}` |

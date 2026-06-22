---
name: growthflare-layer-2
description: >
  Master orchestration skill for Layer 2 Activation of the SELLL.io Revenue Engine.
  Five-phase pipeline: Intelligence Gates → Signal Intelligence → Account Intelligence
  → Contact Intelligence → Outreach Intelligence → Campaign Output.
  Eliminates bad-fit accounts before spending credits, scores contacts individually,
  warm-path detects before going cold, pre-wires personalization variables,
  time-zone-optimizes send times, and produces a reply-probability-ranked CSV
  ready for Instantly. Target: 5–8% reply rate vs. industry average 0.5–1%.
  Triggers on: "build the list", "run layer 2", "activation", "build campaign",
  "find prospects", "build H5 list", "start the engine", "run the pipeline",
  "build outbound list for SELLL", "layer 2", "find leads", "build the campaign".
---

# Layer 2: Activation — SELLL.io Revenue Engine (v2.0)

> Architecture: 5 Phases | 18 Steps | 2 Human Review Gates | Target reply rate: 5–8%

Most outbound teams optimize for list quality. This system optimizes for **conversation quality** — the probability that the right person receives the right message at exactly the right moment, already knowing who we are.

The difference between a 1% reply rate and a 5% reply rate is almost never the email. It is everything that happens before the email arrives.

---

## Phase 0.0 — Layer 1 Context Load & Validation

**Before any phase runs, load and validate all Layer 1 files. Layer 2 is not a standalone system — it is the activation of everything Layer 1 built. Running Layer 2 without complete Layer 1 context produces fragmented, under-personalized output.**

See `engine/l1-l2-bridge.md` for the complete data map showing which L1 output drives which L2 decision.

### Files to Load

| File | What Layer 2 Takes From It | Consumed By |
|------|---------------------------|------------|
| `IDEAL-CUSTOMER-PROFILE.md` | Firmographic disqualifiers, technographic fit signals, vertical ranking | Gate 0B, Phase 2E Dim 1+2 |
| `OUTREACH-SEQUENCE.md` | 3 persona sequences, merge field list, subject line options | Phase 3A, Phase 4C, Phase 4D |
| `context/selll_context.md` | Personas, proof library, DNC list, pricing, value proposition | Gate 0B, Phase 3A, Phase 4B, Phase 4D |
| `context/b2b-saas/hypothesis_set.md` | Hypothesis search angles, urgency windows, confidence scores | Phase 1A, Phase 1B, Phase 1C, Phase 2E Dim 6 |
| `context/b2b-saas/enrichment-columns.md` | Column specs for all 7 hypotheses | Phase 2A, Phase 2B, Phase 2C |
| `brain/proof-library.md` | Situation/outcome/quote for each proof point | Phase 4B |
| `brain/voc-library.md` | Buyer language by pain category + vertical | Phase 4D (`v_pain_statement`) |
| `brain/competitive-battlecards.md` | Competitor weaknesses, displacement positioning | Phase 4C (displacement variant), Phase 4D (`v_competitor_name`) |
| `brain/tone-dna.md` | Voice rules, email tone constraints | Phase 4D, `ai-personalization` validation |
| `brain/copywriting-library.md` | Subject formulas, hook patterns, CTA variants, quality checklist | Phase 4C, Phase 4D, Phase 5B |
| `brain/trigger-playbooks.md` | Signal playbooks, Compound Signal Detector | Phase 1C, Phase 2D |
| `brain/deliverability-rules.md` | Warmup limits, bounce thresholds, fatigue guard rules | Phase 3F, Phase 4F |
| `brain/linkedin-profile.md` | ICP Engagers column (Content Performance Tracker) | Phase 3C |
| `engine/fatigue-suppressed.md` | Permanently suppressed contacts | Gate 0B, Phase 3F |
| `engine/re-engagement-queue.md` | Warm "not now" contacts + trigger statuses | Gate 0C |
| `engine/state.md` | Domain warmup status, active campaigns, Layer 1 completion flag | Gate 0A, Phase 4F |

### Validation Checklist

Run these checks before proceeding to Phase 0 Gates. If any check fails — fix the Layer 1 gap first.

```
LAYER 1 CONTEXT VALIDATION
════════════════════════════════════════════════════════
[ ] IDEAL-CUSTOMER-PROFILE.md — Firmographic table present?
[ ] IDEAL-CUSTOMER-PROFILE.md — Technographic profile present?
[ ] selll_context.md — All 3 persona profiles defined?
[ ] selll_context.md — Proof library has 3+ clients with outcomes?
[ ] selll_context.md — DNC list checked (even if empty)?
[ ] hypothesis_set.md — Selected hypothesis has search angles filled?
[ ] hypothesis_set.md — Confidence score current (updated from last campaign)?
[ ] enrichment-columns.md — Column specs exist for selected hypothesis?
[ ] brain/proof-library.md — All proof points have situation/outcome/quote?
[ ] brain/deliverability-rules.md — Warmup status checked in engine/state.md?
[ ] engine/fatigue-suppressed.md — File exists and has been checked?
[ ] engine/re-engagement-queue.md — Queue reviewed for any TRIGGERED contacts?

CONTEXT LOADED SUMMARY:
  ICP: [employee range] | [ARR range] | [verticals]
  Active Hypothesis: [H#] — [name] | Urgency window: [N] days
  Compound hypothesis pairing: [H# + H#] or None
  Personas: [3] defined | Sequences: [7] variants available
  Proof points: [N] in library
  DNC entries: [N]
  Fatigue-suppressed: [N] contacts
  Re-engagement TRIGGERED: [N] contacts (→ route NOW before cold list)
  Domain warmup status: [Warming / Warmed / Not started]
  Daily send capacity: [N] emails/day
════════════════════════════════════════════════════════
```

**If re-engagement TRIGGERED count > 0:** Handle those contacts through `re-engagement/SKILL.md` BEFORE running the cold campaign. Warm contacts always take priority over cold.

**If domain warmup status = "Not started":** Layer 2 can still run to build the CSV. But no emails send until warmup is complete. CRITICAL urgency accounts route to LinkedIn-first via Expandi during the warmup window.

---

## Hypothesis Selection

Present the 7 hypotheses with current confidence scores from `hypothesis_set.md`.

| Hypothesis | Signal | Confidence | Urgency Window | Recommended For |
|-----------|--------|-----------|---------------|----------------|
| H5 New VP Sales | VP/CRO joined 15–45 days ago | HIGH | 45 days | Default first campaign |
| H1 Post-Raise | Series A/B in last 90 days | MEDIUM | 90 days | Pair with H5 for compound |
| H2 SDR Hiring | Active SDR/BDR job post | MEDIUM | 30 days | Fast-expiring signal |
| H4 Broken Sequences | Using Apollo/generic stack | MEDIUM | No window | Evergreen |
| H3 Founder Ceiling | Founder still in deals | MEDIUM | No window | Evergreen |
| H7 Stuck Audit | Competitor frustration signal | LOW | No window | Displacement angle |
| H6 Lean Rebuild | Post-restructure | LOW | No window | Rebuild angle |

**Compound signal option:** Select 2 hypotheses to run together. Accounts matching both get CRITICAL priority and a compound email angle. See `trigger-playbooks.md` → Compound Signal Detector.

---

# PHASE 0: INTELLIGENCE GATES

> Goal: Eliminate bad-fit accounts before spending a single enrichment credit.
> Cost of skipping: wasted credits + bad-fit contacts diluting deliverability + cold-sequencing existing clients.

---

## Gate 0A — CRM Deduplication

**Pull from HubSpot BEFORE running any Extruct queries.**

Categories to check and action for each:

| HubSpot Status | Action |
|---------------|--------|
| Current client | HARD REMOVE — cold emailing a client is a relationship-ending mistake |
| Active opportunity (any stage) | HARD REMOVE — they're already in the pipeline |
| Lost deal (< 6 months) | HARD REMOVE — too recent, needs re-engagement via deal-nurture skill |
| Lost deal (6–18 months) | FLAG — route to `re-engagement-queue.md`, NOT cold sequence |
| Lost deal (> 18 months) | ALLOW — sufficient time has passed |
| Previous prospect, no reply | Check fatigue-suppressed.md — may still qualify |
| Previous prospect, replied "not now" | FLAG — route to re-engagement sequence, NOT cold |
| No record | ALLOW — genuine new prospect |

**Output:** Deduplicated domain list with HubSpot status column added.

**Rule:** If HubSpot API is not yet configured, manually paste the domain list from active clients and opportunities before proceeding. Never skip this gate.

---

## Gate 0B — Anti-ICP Hard Filter

Hard disqualify ANY company matching these conditions regardless of their signals or scores.
These companies will never buy. Do not spend credits on them.

> Source: `IDEAL-CUSTOMER-PROFILE.md` → Firmographic Criteria → Red Flag column + `selll_context.md` → DNC List.
> If the ICP changes (e.g., employee ceiling raised to 250), update this gate to match. `engine/l1-l2-bridge.md` documents all downstream impact.

| Disqualifier | Threshold | L1 Source |
|-------------|-----------|----------|
| Too large | > 200 employees | ICP Firmographic → "Under 15 or over 300 employees" red flag |
| Too small | < 15 employees | ICP Firmographic → same |
| ARR too high | > $50M estimated | ICP Firmographic → "Revenue over $50M" red flag |
| ARR too low | < $500K estimated | ICP Firmographic → "Revenue under $1M" red flag |
| Consumer product | B2C SaaS | ICP → "Pure B2C, ecommerce, or retail" exclusion |
| Competitor | Belkins, CIENCE, Kalungi, any outbound agency | `selll_context.md` → Competitive Landscape |
| No sales function | Pure PLG, no SDRs, no outbound | ICP → "0 sales hires" red flag |
| Geographic mismatch | Outside US/UK/CA/AU | ICP Firmographic → Geography |
| Red flag technographic | Marketo/Pardot, custom in-house prospecting tools | ICP → Technographic → Red flag tech signals |
| Already on DNC | In `selll_context.md` DNC list | `selll_context.md` → DNC List (permanent exclusion) |
| In fatigue-suppressed | In `engine/fatigue-suppressed.md` < 12 months | `engine/fatigue-suppressed.md` |

**How to apply:** Add a `disqualified` boolean column and `disqualification_reason` text column to the raw list BEFORE uploading to Extruct. Remove all disqualified companies before the enrichment phase.

**Credit savings:** Eliminating 20–30% of companies before enrichment = 300–500 research_pro credits saved per campaign.

---

## Gate 0C — Re-Engagement Queue Cross-Check

Pull `engine/re-engagement-queue.md`. For every company on the raw list:

- If company is in the re-engagement queue with status "Not Now" → **do NOT add to cold sequence**. Route to the warm re-engagement workflow instead. These contacts already know who SELLL is — a cold email treating them as strangers destroys that relationship.
- If company is in re-engagement queue with a specific trigger condition that has now been met (e.g., "re-engage when they hire VP Sales" and they just did) → **CRITICAL flag** — this is the highest-priority outreach. Route immediately to warm re-engagement with the new signal referenced.
- If company is not in the re-engagement queue → proceed normally.

---

## Gate 0D — Credit Cost Estimate

Before running any enrichment, present the cost to the user:

```
═══════════════════════════════════════════════
CREDIT ESTIMATE — [Hypothesis] Campaign
═══════════════════════════════════════════════
Raw companies from search:        ~[N]
After CRM deduplication:          ~[N] (removed ~[X])
After anti-ICP filter:            ~[N] (removed ~[X])

ENRICHMENT COST:
Base columns (11):                ~[N × 11] credits
hypothesis_confirmed gate:        ~[N × 1] credits
Hypothesis-specific cols (3–5):   ~[N × 4] credits (post-filter only)
Additional intelligence cols:     ~[N × 3] credits

TOTAL ESTIMATED CREDITS:          ~[N] research_pro credits
ESTIMATED ENRICHMENT TIME:        ~[X] minutes at [N] companies

Proceed with enrichment? (Y/N)
═══════════════════════════════════════════════
```

**Pause here. Wait for user confirmation before spending credits.**

---

# PHASE 1: SIGNAL INTELLIGENCE

> Goal: Build the highest-signal raw company list from multiple sources, ranked by signal freshness.

---

## Step 1A — Multi-Source List Building

Run 4 parallel source strategies. Deduplicate across all sources by domain.

### Source 1: Extruct Semantic Search (primary)

Run 3 queries using the search angles from `hypothesis_set.md` for the selected hypothesis.

**H5 Query Set (New VP Sales — default):**

```
Query 1 — Role-signal angle:
"B2B SaaS companies with 25–150 employees that recently hired a VP of Sales,
Head of Sales, or CRO within the last 60 days. Series A or Series B.
US, UK, Canada, or Australia. Selling B2B, not consumer."

Query 2 — Company-stage angle:
"Software companies between $2M and $30M ARR that have a small sales team
of 2–10 people and recently brought in new sales leadership to scale their
outbound motion. Looking for companies with recent C-suite or VP-level sales hires."

Query 3 — Problem-signal angle:
"B2B SaaS companies that are actively building or rebuilding their outbound
sales infrastructure. Companies with SDRs, a sequencer in their stack, and
recent leadership changes in the sales function."
```

### Source 2: Extruct Lookalike Search

Use proven SELLL wins as seed companies to find similar companies:
- Seed from `selll_context.md` → Proof Library → Devolon domain
- Seed from `selll_context.md` → Proof Library → Holz Concepts domain
- Run lookalike for each seed, combine results

### Source 3: Extruct Deep Search (precision qualification)

```
Deep Search criteria for H5:
Criterion 1: "Has a VP Sales, CRO, or Head of Sales who joined in the last 90 days"
Criterion 2: "Is a B2B SaaS company with 25–150 employees"
Criterion 3: "Has raised Series A or Series B funding, or is bootstrapped with $5M+ ARR"
Criterion 4: "Has an active outbound sales motion (SDRs, sequencer, or BDR team)"
```

### Source 4: Signal-Specific External Sources (hypothesis-dependent)

| Hypothesis | Additional Source | What to Pull |
|-----------|------------------|-------------|
| H5 | LinkedIn "new position" notifications for VP Sales/CRO roles | Fresh hires in last 30 days |
| H1 | Crunchbase "recently funded" filter + TechCrunch new funding alerts | Raises in last 90 days |
| H2 | LinkedIn Jobs filter for SDR/BDR postings | Active posts < 30 days |
| H7 | G2 "recent reviews" for Belkins/CIENCE/Kalungi | Negative reviews last 90 days |
| H4 | BuiltWith or Sifdata for Apollo/Outreach users | Confirmed stack signal |

Collect domains from Source 4 and add to the master list before deduplication.

---

## Step 1B — Signal Freshness Validation

For every company on the raw list, calculate the **urgency window remaining**.

This is not a score modifier — it is a sort key. The companies with the least urgency window remaining get the first sending slots, regardless of score.

| Hypothesis | Signal Date Field | Urgency Window | Days Remaining Calculation |
|-----------|-----------------|----------------|---------------------------|
| H5 | `vp_sales_start_date` | 45 days from start | 45 − days_since_hire |
| H1 | `last_funding_date` | 90 days from raise | 90 − days_since_raise |
| H2 | `sdr_job_post_date` | 30 days from post | 30 − days_since_post |
| H4, H3, H6, H7 | N/A | Evergreen | Sort by score only |

**Urgency bands:**

| Days Remaining | Urgency Band | Priority |
|---------------|-------------|----------|
| 0–10 days | 🔴 CRITICAL | Send TODAY |
| 11–20 days | 🟠 HIGH | Send this week |
| 21–35 days | 🟡 MEDIUM | Send within 2 weeks |
| 36+ days | 🔵 STANDARD | Normal queue |

**Key insight:** A Tier 2 account with 8 days of urgency window remaining outranks a Tier 1 account with 40 days remaining for sending slot priority. Score determines treatment. Urgency determines timing.

---

## Step 1C — Compound Signal Pre-Scan

Before enrichment, scan the raw list for companies that appear in both the H5 list AND the H1 list (or any two hypothesis lists running simultaneously).

Companies appearing in 2+ hypothesis lists:
- Flag as `compound_signal = True`
- Assign highest urgency band regardless of individual signal freshness
- These accounts will receive the compound signal email angle from `trigger-playbooks.md` → Compound Signal Detector

---

## Step 1D — List Deduplication and Upload

1. Merge all sources, deduplicate by domain
2. Apply Phase 0 filters (remove disqualified, CRM dupes)
3. Add columns: `urgency_band`, `urgency_days_remaining`, `compound_signal`, `source_list`
4. Upload to Extruct: **`SELLL — [Hypothesis] — [Date]`**

**Expected list size after filters:** 150–400 companies

Present to user: "Raw list: [N] companies. After filters: [N] companies. Estimated credits: [N]. Proceed?"

---

# PHASE 2: ACCOUNT INTELLIGENCE

> Goal: Know everything about every company before spending contact-search credits. Eliminate more waste. Score with precision.

---

## Step 2A — Base Enrichment

Run base columns from `enrichment-columns.md` on all companies.

**Columns (11):** arr_estimate, funding_stage, last_funding_date, last_funding_amount, employee_count_actual, sdr_team_size, sequencer_tool, crm_tool, has_revops, primary_vertical, hypothesis_confirmed

Run `hypothesis_confirmed` as the quality gate:
- `Yes` → proceed to hypothesis-specific columns
- `Unclear` → proceed with 10-point score penalty
- `No` → remove from pipeline (save remaining credits)

---

## Step 2B — Hypothesis-Specific Enrichment

Run hypothesis-specific columns (from `enrichment-columns.md`) on confirmed + unclear companies only.

---

## Step 2C — Intelligence Layer Enrichment

These columns run on ALL confirmed companies regardless of hypothesis. They power the Outreach Intelligence phase.

### Competitor Usage Check
```
name: competitor_client
format: select
labels: [Belkins, CIENCE, Kalungi, SDRx, LeadIQ, Seamless, None Found, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine if they are currently using or have recently
  used an outbound agency or managed SDR service.
  Check: LinkedIn reviews, G2 reviews by their employees, LinkedIn posts by
  sales team members mentioning agency partnerships, job posts mentioning
  "currently working with [agency]."
  Return the agency name if found. None Found if no agency detected. Unknown if inconclusive.
```

### G2 / Review Pain Signal
```
name: competitor_frustration_signal
format: text
agent: research_pro
prompt: >
  Search G2, Capterra, and LinkedIn for reviews or posts by employees of {input}
  that express frustration with a current outbound agency or managed SDR service,
  OR frustration with their current outbound reply rates or pipeline.
  Summarize findings in 1–2 sentences including the specific complaint.
  If nothing found, return "No frustration signal found."
```

### Buying Journey Stage
```
name: buying_journey_stage
format: select
labels: [Unaware, Awareness, Active Pain, Active Evaluation, Decision Ready, Unknown]
agent: research_pro
prompt: >
  Research {input}'s recent LinkedIn activity, G2 reviews, and press to determine
  where they are in their buying journey for an outbound sales system:
  - Unaware: no signals they know they have an outbound problem
  - Awareness: some signals of outbound challenges (low pipeline mentioned, SDRs struggling)
  - Active Pain: explicit posts/reviews expressing outbound frustration
  - Active Evaluation: researching solutions (G2 browsing, demo requests visible)
  - Decision Ready: comparing vendors, explicit "we need to fix this" posts or reviews
  Return ONLY one of the labels.
```

### Contact HQ Timezone
```
name: hq_timezone
format: select
labels: [ET, CT, MT, PT, GMT, CET, AEST, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine the time zone of their headquarters or primary office.
  Check their website "About" or "Contact" page, LinkedIn company location.
  Return the timezone abbreviation: ET, CT, MT, PT, GMT, CET, AEST, or Unknown.
```

### LinkedIn CEO/Founder Activity
```
name: exec_linkedin_signal
format: text
agent: research_pro
prompt: >
  Find the CEO or most senior sales leader at {input} on LinkedIn.
  Summarize their last 2 posts in 1 sentence each.
  Focus specifically on: pipeline problems, outbound struggles, team growth,
  revenue goals, or anything that confirms the hypothesis signal.
  If no recent posts found, return "No recent LinkedIn activity."
```

### SDR Productivity Proxy
```
name: sdr_productivity_signal
format: select
labels: [High — structured process, Medium — some process, Low — likely manual, Unknown]
agent: research_pro
prompt: >
  Research {input}'s SDR team structure.
  Signals of LOW productivity: SDRs doing manual list research, no sequencer found,
  low glassdoor ratings mentioning "no process," SDR tenure < 6 months.
  Signals of HIGH productivity: RevOps present, sequencer confirmed, playbooks mentioned in job posts.
  Return: High, Medium, Low, or Unknown.
```

---

## Step 2D — Compound Signal Re-Detection (Post-Enrichment)

After enrichment, re-scan every company for multiple hypothesis signals NOW in the data:

```
IF (hypothesis = H5 AND last_funding_date < 90 days ago) → add H1 tag → compound H1+H5
IF (hypothesis = H5 AND sdr_job_posts_active = Yes) → add H2 tag → compound H2+H5
IF (hypothesis = H1 AND vp_sales_start_date < 45 days ago) → add H5 tag → compound H1+H5
IF (hypothesis = H4 AND competitor_frustration_signal found) → add H7 tag → compound H4+H7
IF (3+ hypotheses active) → TRIPLE COMPOUND → highest urgency → manual personalization required
```

Update `compound_signal` column with the detected combination (e.g., "H1+H5").

---

## Step 2E — Lead Scoring (Enhanced 7-Dimension Model)

Score every company 0–100 across 7 dimensions. Previous model had 6. The 7th dimension is **Buying Intent** — the clearest signal of conversion probability.

| Dimension | Weight | Top Score When |
|-----------|--------|---------------|
| 1. Firmographic Fit | 20 pts | B2B SaaS, $2M–$30M ARR, 25–150 employees |
| 2. Technographic Fit | 10 pts | Sequencer + CRM in stack, no RevOps gap covered |
| 3. Pain Alignment | 20 pts | Hypothesis confirmed + additional pain signals |
| 4. Budget Capacity | 15 pts | Funding recency + ARR in sweet spot |
| 5. Contact Access | 10 pts | Decision maker found, email available |
| 6. Timing Signal | 15 pts | Signal in active urgency window |
| 7. Buying Intent | 10 pts | G2 activity, pain post, competitor frustration |

### Dimension 1: Firmographic Fit (20 pts)
| Signal | Points |
|--------|--------|
| B2B SaaS product confirmed | +8 |
| ARR $2M–$30M confirmed | +6 |
| 25–150 employees | +4 |
| Series A or B | +2 |
| Bootstrapped with $5M+ ARR | +2 |

### Dimension 2: Technographic Fit (10 pts)
| Signal | Points |
|--------|--------|
| Sequencer in stack (Apollo/Outreach/Salesloft/Lemlist) | +6 |
| CRM confirmed (HubSpot/Salesforce) | +3 |
| No RevOps but has SDRs (RevOps gap) | +1 bonus |

### Dimension 3: Pain Alignment (20 pts)
| Signal | Points |
|--------|--------|
| `hypothesis_confirmed = Yes` | +14 |
| `hypothesis_confirmed = Unclear` | +7 |
| SDR team confirmed (1–6 SDRs) | +3 |
| `sdr_productivity_signal = Low` | +2 |
| `exec_linkedin_signal` mentions pain | +1 |

### Dimension 4: Budget Capacity (15 pts)
| Signal | Points |
|--------|--------|
| Raised funding in last 90 days | +12 |
| Raised in last 6 months | +8 |
| Raised in last 12 months | +5 |
| Bootstrapped + $10M+ ARR | +10 |
| ARR $5M–$30M estimate | +3 |

### Dimension 5: Contact Access (10 pts)
| Signal | Points |
|--------|--------|
| Decision maker identified and email verified | +10 |
| Decision maker identified, email pending | +5 |
| No decision maker found | +0 |

### Dimension 6: Timing Signal (15 pts)
| Hypothesis | Signal | Points |
|-----------|--------|--------|
| H5 | VP Sales started 1–15 days ago | +15 |
| H5 | VP Sales started 16–30 days ago | +12 |
| H5 | VP Sales started 31–45 days ago | +8 |
| H5 | VP Sales started 46–90 days ago | +4 |
| H1 | Raise within 45 days | +15 |
| H1 | Raise within 90 days | +10 |
| H2 | SDR job post < 14 days | +15 |
| H2 | SDR job post 15–30 days | +8 |
| H3/H4/H6/H7 | Signal confirmed (evergreen) | +8 |

### Dimension 7: Buying Intent (10 pts)
| Signal | Points |
|--------|--------|
| `competitor_frustration_signal` found | +5 |
| `buying_journey_stage = Active Pain` | +4 |
| `buying_journey_stage = Active Evaluation` | +7 |
| `buying_journey_stage = Decision Ready` | +10 |
| `exec_linkedin_signal` mentions evaluating solutions | +3 |

### Compound Signal Bonus
| Compound | Bonus |
|----------|-------|
| 2 hypotheses confirmed | +5 bonus points |
| 3+ hypotheses confirmed | +10 bonus points |

### Hard Score Reducers
These reduce the score regardless of positives:
| Anti-Signal | Penalty |
|------------|---------|
| `competitor_client` found (using agency currently) | −10 |
| `has_revops = Yes` AND `sdr_team_size > 8` | −5 (may not need us) |
| `buying_journey_stage = Unaware` | −5 |

### Tier Assignment:

| Score | Tier | Treatment |
|-------|------|-----------|
| 75–100 | **Tier 1 Priority** | Full: email + LinkedIn + cold call + Loom + multi-thread + manual personalization |
| 60–74 | **Tier 1 Standard** | Full treatment but template-personalized |
| 40–59 | **Tier 2** | Email + LinkedIn only |
| < 40 | **Tier 3** | Signal watch — add to `signal-monitor`, no active outreach |

---

## ⛔ HUMAN REVIEW GATE 1

**Present to user before any contact search begins:**

```
═══════════════════════════════════════════════
ACCOUNT INTELLIGENCE COMPLETE — REVIEW REQUIRED
═══════════════════════════════════════════════
Total enriched: [N]
hypothesis_confirmed = Yes: [N]
hypothesis_confirmed = Unclear: [N]
Removed (No + filters): [N]

TIER BREAKDOWN:
Tier 1 Priority (75+): [N] accounts
Tier 1 Standard (60–74): [N] accounts
Tier 2 (40–59): [N] accounts
Tier 3 (< 40): [N] → signal watch

BUYING INTENT SIGNALS:
Decision Ready: [N] accounts
Active Evaluation: [N]
Active Pain: [N]

COMPOUND SIGNALS: [N] accounts
  H1+H5: [N] | H2+H5: [N] | H4+H7: [N]

COMPETITOR CLIENTS DETECTED: [N] (score reduced)

URGENCY BREAKDOWN:
🔴 CRITICAL (< 10 days window): [N] — send this week
🟠 HIGH (11–20 days): [N]
🟡 MEDIUM (21–35 days): [N]

TOP 10 ACCOUNTS FOR SPOT-CHECK:
[Table: Company | Score | Tier | Urgency | Intent | Compound]

Review questions:
1. Any companies to manually promote or demote?
2. Any companies you recognise and want to remove?
3. Happy to proceed to contact finding?
═══════════════════════════════════════════════
```

---

# PHASE 3: CONTACT INTELLIGENCE

> Goal: Find the right person, score their individual reply likelihood, detect warm paths, and get their verified contact details.

---

## Step 3A — People Search (Thread Assignment)

**Skill:** `people-search`

Run for Tier 1 (Priority + Standard) and Tier 2 companies.

### Thread Strategy by Tier:

| Tier | Thread A | Thread B | Thread C |
|------|---------|---------|---------|
| Tier 1 Priority | Decision maker | Senior champion | Economic buyer (if different) |
| Tier 1 Standard | Decision maker | Senior champion | — |
| Tier 2 | Decision maker only | — | — |

### Role Lists by Hypothesis:

| Hypothesis | Thread A (Decision Maker) | Thread B (Champion) | Thread C (Economic Buyer) |
|-----------|--------------------------|---------------------|--------------------------|
| H5 | The specific new VP Sales hire | Senior SDR or SDR Manager (feels the pain) | CEO (if new VP needs approval) |
| H1 | CRO or VP Sales | Head of RevOps | CFO (budget approval) |
| H2 | VP Sales or CRO | SDR Manager | CEO or CFO |
| H3 | CEO / Founder | COO or VP Ops | — |
| H4 | CRO or VP Sales | RevOps Manager | CEO |
| H6 | VP Sales or CRO | Head of RevOps | CEO |
| H7 | CRO or VP Sales | RevOps Manager | — |

### Persona Assignment:

> Source: `selll_context.md` → Persona Profiles. If a new persona is added in L1, add it here and create a matching sequence variant. See `engine/l1-l2-bridge.md` → selll_context.md for impact map.

| Title Contains | Persona | Sequence to Assign | L1 Source |
|---------------|---------|-------------------|----|
| CRO, Chief Revenue Officer, VP Revenue | Persona 1 — Established CRO/VP | `CRO_v1` | selll_context.md → Persona 1 |
| CEO, Founder, President, Co-Founder | Persona 2 — Scaling Founder | `Founder_v1` | selll_context.md → Persona 2 |
| VP Sales, Head of Sales, Sales Director — new role < 90 days | Persona 3 — New VP Sales | `VPSales_v1` | selll_context.md → Persona 3 |
| VP Sales, Head of Sales — tenure > 90 days | Persona 1 — Established CRO/VP | `CRO_v1` | selll_context.md → Persona 1 |
| RevOps, Head of Sales Operations | Persona 1 — Established CRO/VP | `CRO_v1` | selll_context.md → Persona 1 |

---

## Step 3B — Contact Intelligence Scoring

For every contact found, assign a **Contact Score (0–50)**. This is separate from the company score and determines the personalization level.

| Contact Signal | Points |
|---------------|--------|
| Posts on LinkedIn 1+ times per week | +15 |
| Has posted about pipeline, outbound, or GTM pain in last 30 days | +12 |
| Has > 500 LinkedIn connections (active networker) | +5 |
| Profile updated in last 30 days (active on platform) | +5 |
| Has commented on industry content recently | +5 |
| LinkedIn "Open to opportunities" (signal: paying attention to market) | +3 |
| Profile has detailed experience section (engaged LinkedIn user) | +3 |
| No LinkedIn posts in last 90 days | −10 |
| Profile appears inactive (last post > 180 days) | −15 |

**Contact Score → Personalization Level:**

| Contact Score | Personalization Level | Action |
|--------------|----------------------|--------|
| 35–50 | Priority Manual | Flag for Aaron's personal review. Write bespoke opener referencing specific post. |
| 20–34 | Template+ | Use sequence template with 2–3 personalization variables filled from enrichment data |
| 10–19 | Template | Use standard sequence with basic personalization |
| < 10 | Template / Consider LinkedIn-first | Low LinkedIn activity — DM may work better than email as first touch |

---

## Step 3C — Warm Path Detection

Before any contact goes into a cold sequence, check for a warm path.

A warm path changes the outreach from cold to warm and lifts reply rates by 20–40%.

**Warm path types (check in order):**

| Path Type | Check | Action if Found |
|-----------|-------|----------------|
| 1st degree LinkedIn connection | Aaron is directly connected to this person | Lead with a connection message, not cold email |
| Shared connection (2nd degree) | Mutual connection can intro | Request intro via mutual before emailing |
| Post engager | Contact engaged with Aaron's LinkedIn content | Reference the engagement in Email 1 |
| Client connection | Contact is connected to a SELLL client | Ask the client for an intro or warm mention |
| Event attendee | Both Aaron and contact at same upcoming event | Meet in person before or instead of emailing |

**How to check:**
- 1st/2nd degree: Review LinkedIn people-search results — LinkedIn shows connection degree
- Post engager: Cross-reference against `brain/linkedin-profile.md` Content Performance Tracker → ICP Engagers column
- Client connection: Ask current clients if they know the prospect (only for Tier 1 Priority)

**Warm path routing:**

| Warm Path | Protocol |
|-----------|----------|
| 1st degree connection | Skip cold email. Send direct LinkedIn message using warm DM template from `brain/linkedin-profile.md` |
| 2nd degree / mutual | Request intro first. Only start cold email if intro not granted within 5 days |
| Post engager | Reference the engagement in Email 1 subject line and opener |
| No warm path | Proceed to cold sequence (with pre-engagement protocol in Phase 4) |

Add `warm_path_type` and `warm_path_detail` columns to the contact CSV.

---

## Step 3D — Email Search (Waterfall)

**Skill:** `email-search`

```
Contact identified (name + LinkedIn URL + domain)
           │
           ▼
      PROSPEO (primary)
      Input: LinkedIn URL → name + domain fallback
      Hit rate: 60–70%
           │
      ┌────┴────┐
    FOUND    NOT FOUND
      │           │
      ▼           ▼
   Validate   FULLENRICH (waterfall, 15+ providers)
              Additional hit rate: 20–25%
                    │
               ┌────┴────┐
             FOUND    NOT FOUND
               │           │
               ▼           ▼
            Validate   Apollo free tier check
                       (last resort, low confidence)
                             │
                        ┌────┴────┐
                      FOUND    NOT FOUND
                        │           │
                        ▼           ▼
                  Low confidence  LinkedIn-only
                  flag + verify   (DM track)
```

**Combined target hit rate:** 82–90%

**Phone numbers:** Prospeo returns direct dials for ~35% of contacts → add to `engine/call-queue.md` with pre-generated Day 3 call script from `cold-call/SKILL.md`

---

## Step 3E — Time Zone Detection

For every contact, calculate their local timezone from enrichment data:

**Priority order:**
1. Contact's LinkedIn "Location" field → map to timezone
2. Company HQ timezone (`hq_timezone` enrichment column)
3. Country default (US without state → ET)

**Add columns to contact record:**
- `contact_timezone` (ET/CT/MT/PT/GMT/CET/AEST)
- `optimal_send_time_utc` (7:30 AM local → converted to UTC for Instantly scheduler)

---

## Step 3F — Email Verification + Fatigue Guard

**Skill:** `email-verification`

**Verification rules:**

| Status | Action |
|--------|--------|
| Valid | Keep |
| Catch-all | Always remove — catch-all domains bounce at 8–15%, destroys deliverability |
| Invalid | Remove |
| Unknown | Remove |
| Role-based (info@, sales@, hello@) | Remove — run alternate people-search for individual |

**Fatigue Guard (runs before verification):**

1. Pull `engine/fatigue-suppressed.md`
2. For every contact email:
   - In fatigue list + < 12 months + 0 engagement → REMOVE permanently
   - In fatigue list + role changed → KEEP (reset)
   - In fatigue list + referral context → KEEP (1 email only, mention referral)
   - Not in fatigue list → proceed

3. After verification, add any new fatigued contacts to `fatigue-suppressed.md`

**Target:** < 1.5% estimated bounce rate. If > 1.5%: do not proceed — investigate list quality.

---

## Step 3G — Alternative Contact Discovery

For any Tier 1 company where Thread A has no verified email after the waterfall:

1. Try an alternative Thread A role (e.g., if VP Sales not found, try "Head of Revenue" or "Director of Sales")
2. Try the CEO if company is < 50 employees (CEO often handles sales at this size)
3. Try Thread B (champion contact) as temporary Thread A, note in account card
4. If still no email: LinkedIn-only approach — add to the warm DM queue instead of email sequence
5. Never leave a Tier 1 account with no contact. There is always a path in.

---

# PHASE 4: OUTREACH INTELLIGENCE

> Goal: Prepare every contact for the highest-probability-of-reply outreach before a single email is sent. This phase is what separates 1% reply rates from 5–8%.

---

## Step 4A — Pre-Engagement Protocol

**Run 48–72 hours before Email 1 sends.**

For every Tier 1 account, pre-engagement on LinkedIn warms the contact before the email arrives cold.

> **Fully automated via Expandi.** See `skills/growthflare/linkedin-automation/SKILL.md` for setup.
> Protocol rules: `brain/pre-engagement-protocol.md`. Expandi configuration: `linkedin-automation/SKILL.md`.

**Pre-engagement schedule per contact:**

| Day | Action | Automated By |
|-----|--------|-------------|
| T−3 | Follow the contact on LinkedIn | Expandi — runs automatically at campaign start − 3 days |
| T−2 | Like their most recent LinkedIn post | Expandi — runs automatically on Day 2 |
| T−1 | Comment on relevant post (GTM/sales/pipeline/outbound topic only) | Claude generates comment → queued in `engine/comment-queue/[date].md` → Aaron approves batch (~5 min) → Expandi posts |
| T0 | Email 1 sends. Contact has seen Aaron's name twice on notifications. Open rate impact: +15–25%. | Instantly |

**Output from this step:** Pre-engagement schedule table (contact → start date for Expandi campaign). Added to `engine/comment-queue/[campaign-date].md`.

**If the contact responds to the comment or DM:** Expandi fires webhook → n8n pauses Email 1 in Instantly → route to warm DM sequence in Expandi. See `linkedin-automation/SKILL.md` → Step 5 (Engagement Monitoring).

---

## Step 4B — Proof Point Matching Engine

Assign the single best proof point to every contact based on a multidimensional match.

> Source: `brain/proof-library.md` — full situation/action/outcome/quote for each client. The matching logic below uses `proof-library.md` as its data. If a new proof point is added to L1, update this matching matrix.
> Note: Confirm Devolon client name and Stefan Golz quote in `brain/proof-library.md` before any live send.

The default (Persona → Proof) is too blunt. A Fintech CRO with 3 SDRs should get a different proof point than a DevTools founder with no SDRs.

**Matching matrix (pulls outcomes from `brain/proof-library.md`):**

| Contact Situation | Best Proof Point | Proof Library Key |
|------------------|-----------------|------------------|
| New VP Sales, any vertical | Holz Concepts — Stefan Golz: new CRO, 90-day mandate, hit pipeline targets on time | `proof-library.md` → Holz Concepts |
| Founder still in deals, any vertical | Flow Meditation — Ellie Nash: founder exited day-to-day selling entirely | `proof-library.md` → Flow Meditation |
| SDR productivity issue (3+ SDRs, high research time) | Devolon — 35 → 200+ daily conversations, same headcount, 90 days | `proof-library.md` → Devolon |
| Fintech + any persona | Devolon (closest vertical until Fintech client won) | `proof-library.md` → Devolon |
| Post-raise, < 6 months | Holz Concepts OR Devolon depending on team size (< 5 SDRs = Holz, 5+ = Devolon) | `proof-library.md` |
| DevTools, PLG trying to add enterprise | Flow Meditation (founder motion → system) | `proof-library.md` → Flow Meditation |
| Company with Belkins/CIENCE frustration | Holz Concepts — displacement framing ("not another agency") | `proof-library.md` → Holz Concepts |
| No perfect match | Use size proxy: "a company at your exact stage with [N] SDRs" | Generic — honest |

**Add column:** `assigned_proof_point` — the proof point name + one-sentence context
**Add column:** `proof_match_reason` — why this proof point was chosen (for personalization copy)

---

## Step 4C — Sequence Branch Selection

Within each persona sequence, select the specific variant based on what we know about this contact. More specific = higher reply rate.

**H5 sequence variants (example):**

| Condition | Sequence Variant | Key Difference |
|-----------|-----------------|---------------|
| VP Sales + LinkedIn post about "lots to untangle" | `VPSales_PostReference` | Email 1 references the specific post |
| VP Sales + post-raise (compound H1+H5) | `VPSales_PostRaise_Compound` | Both signals referenced in Email 1 |
| VP Sales + competitor frustration signal | `VPSales_Displacement` | Lead with displacement angle |
| VP Sales + no LinkedIn activity | `VPSales_v1` | Standard version |

**Add column:** `sequence_variant` — the exact variant code that maps to an email template in `OUTREACH-SEQUENCE.md`

---

## Step 4D — Personalization Variable Extraction

For every contact, extract the exact variables needed to populate the email templates.

These variables fill the merge fields in Instantly. Without them pre-filled, automation fails and emails arrive with `{{blank}}` fields.

**Universal variables (all contacts):**

| Variable | Source | Example |
|----------|--------|---------|
| `{{first_name}}` | people-search | Sarah |
| `{{company_name}}` | enrichment | DataFlow Analytics |
| `{{company_size}}` | `employee_count_actual` | 65-person |
| `{{proof_person}}` | `assigned_proof_point` | Stefan Golz |
| `{{proof_company}}` | `assigned_proof_point` | Holz Concepts |
| `{{proof_outcome}}` | proof library | hit first pipeline targets in 90 days |
| `{{calendar_link}}` | fixed | https://cal.com/collins-ogiki-x4fokk/30min |

**Hypothesis-specific variables:**

| Hypothesis | Variable | Source | Example |
|-----------|----------|--------|---------|
| H5 | `{{days_in_role}}` | `vp_sales_start_date` | 22 |
| H5 | `{{previous_signal}}` | `exec_linkedin_signal` | "lots to untangle" |
| H1 | `{{raise_amount}}` | `last_funding_amount` | $8M |
| H1 | `{{raise_stage}}` | `funding_stage` | Series A |
| H2 | `{{sdr_count}}` | `sdr_team_size` | 3 |
| H4 | `{{sequencer_name}}` | `sequencer_tool` | Apollo |
| Any | `{{competitor_name}}` | `competitor_client` | Belkins |
| Any | `{{vertical}}` | `primary_vertical` | Fintech |

Add all variables as individual columns in the campaign CSV. Instantly merges them automatically.

**Flag any missing variables:** If a required variable is blank for a contact, flag for manual fill before import. Do not import contacts with empty required variables.

---

## Step 4E — Daily Slot Allocation

With domain warmup constraints, sending capacity is limited. Allocate slots by priority order.

**First, get the current daily send limit:**
- Check `engine/state.md` → sending domain warmup status
- Apply the limit from `brain/deliverability-rules.md` → 8-week warmup table

**Allocation priority order within the daily limit:**

| Priority | Segment | Slots Allocated |
|----------|---------|----------------|
| 1 | Tier 1 Priority + CRITICAL urgency (< 10 days window) | First 30% of daily slots |
| 2 | Tier 1 Priority + HIGH urgency (11–20 days) | Next 25% |
| 3 | Tier 1 Standard + any urgency | Next 25% |
| 4 | Tier 2 Thread A | Remaining 20% |
| 5 | Thread B (multi-thread) | Only if Tier 1 Thread A has all received Email 1 |

**Add column:** `send_day_allocation` — Day 1 / Day 2 / Day 3 etc. (which day this contact's Email 1 sends)

**Example:** 40 slots/day, 200 Tier 1 contacts → first emails send across 5 days, ordered by urgency within each day.

---

## Step 4F — Reply Probability Score

Combine company score, contact score, and outreach intelligence into a single **Reply Probability Score (0–100)**.

This is NOT the same as the lead score. It predicts the probability of receiving a positive reply from THIS specific contact at THIS specific company.

```
Reply Probability = 
  (Company Lead Score × 0.35)
+ (Contact Intelligence Score × 0.30)
+ (Buying Intent Score × 0.20)
+ (Warm Path Bonus × 0.10)
+ (Urgency Window Bonus × 0.05)
```

**Interpretation:**

| Reply Probability | Label | Action |
|------------------|-------|--------|
| 70–100 | 🔴 HOT PROSPECT | Manual bespoke email from Aaron. Not template. |
| 50–69 | 🟠 HIGH PROBABILITY | Template+ with all variables filled + pre-engagement required |
| 35–49 | 🟡 STANDARD | Standard template personalization |
| < 35 | 🔵 LOW | Include in campaign but do not prioritize manual attention |

**Top 10% by Reply Probability = Priority Personalization List.** Present this list to Aaron separately. These are the accounts worth 20 minutes of personal attention each.

---

# PHASE 5: OUTPUT & ACTIVATION

---

## Step 5A — Campaign CSV (52-Column Schema — 6 Groups)

Build the final Instantly-ready CSV with every variable pre-filled.

```
CONTACT FIELDS:
first_name | last_name | email | job_title | linkedin_url | phone

COMPANY FIELDS:
company_name | domain | employee_count | arr_estimate | funding_stage
primary_vertical | hq_timezone | sdr_team_size | sequencer_tool | crm_tool

INTELLIGENCE FIELDS:
hypothesis | compound_signal | lead_score | contact_score | reply_probability
tier | urgency_band | urgency_days_remaining | buying_journey_stage
competitor_client | warm_path_type

OUTREACH FIELDS:
thread | persona | sequence_variant | assigned_proof_point | proof_match_reason
pre_engagement_scheduled | send_day_allocation | optimal_send_time_utc

PERSONALIZATION VARIABLES (v_ prefix = Instantly merge field):
v_first_name | v_company_name | v_company_size | v_days_in_role
v_raise_amount | v_raise_stage | v_sdr_count | v_sequencer_name
v_proof_person | v_proof_company | v_proof_outcome | v_previous_signal | v_competitor_name

METADATA:
campaign_name | sending_domain | campaign_date | added_by
```

**Save to:** `claude-code-gtm/csv/campaigns/[hypothesis]-[date]-verified.csv`

---

## Step 5B — Priority Personalization List

Separate CSV for the top 10% by Reply Probability. These contacts get bespoke emails, not templates.

For each Priority Personalization contact, pre-generate:
1. A specific subject line referencing their exact situation
2. A 3-sentence email opener written from their specific LinkedIn activity / signal
3. The personalization hook ("I saw your post about X" / "Congrats on the X raise" / "You referenced Y in your post last week")

**Save to:** `claude-code-gtm/csv/campaigns/[hypothesis]-[date]-priority-personal.csv`

---

## Step 5C — Pre-Engagement Schedule

For every Tier 1 contact, a LinkedIn pre-engagement schedule:

```
PRE-ENGAGEMENT SCHEDULE — [Campaign Name]
Generated: [Date]
Action window: [Date] to [Date]

| Contact | Company | LinkedIn URL | T-3 Action | T-2 Action | T-1 Action | Email 1 Sends |
|---------|---------|-------------|-----------|-----------|-----------|--------------|
| Sarah Kim | DataFlow | linkedin.com/in/... | Follow | Like latest post | Comment on "lots to untangle" post | [Date] |
```

**Time required:** ~5 minutes per 20 contacts for T−3 and T−2. T−1 comments require more thought — 2–3 minutes each.

---

## Step 5D — Account Cards (Tier 1)

Create `engine/accounts/[company-slug].md` for every Tier 1 company using `brain/account-card-template.md`.

Pre-fill from enrichment data:
- Company profile (all enrichment columns)
- Contact map (Thread A + B + C with LinkedIn URLs)
- Signal history (the trigger event + date)
- Hypothesis match (with compound tags)
- Lead score + reply probability
- Pre-engagement schedule reference

---

## Step 5E — Call Queue (Contacts with Phone)

For every contact with a verified phone number:

1. Add to `engine/call-queue.md`
2. Pre-generate the Day 3 call script from `cold-call/SKILL.md`
3. Personalize script with: company name, hypothesis signal, most relevant proof point, persona-specific Day 3 script variant
4. Sort by reply probability (highest first)

---

## ⛔ HUMAN REVIEW GATE 2 (Final)

```
═══════════════════════════════════════════════
LAYER 2 COMPLETE — FINAL REVIEW BEFORE LAUNCH
═══════════════════════════════════════════════

CAMPAIGN: SELLL — [Hypothesis] — [Date]
CSV FILE: csv/campaigns/[filename]

FINAL NUMBERS:
Total contacts in CSV: [N]
  Tier 1 Priority: [N]
  Tier 1 Standard: [N]
  Tier 2: [N]
Contacts with phone (call queue): [N]
Priority Personalization list: [N] (top 10%)
LinkedIn-only (no email): [N]

QUALITY METRICS:
Estimated bounce rate: [X]% (target < 1.5%)
Email hit rate: [X]% (target > 80%)
Contacts with all variables filled: [N] / [N]
Contacts missing variables: [N] → [flag these for manual fill]

URGENCY DISTRIBUTION:
🔴 CRITICAL (send this week): [N] contacts
🟠 HIGH (send in 2 weeks): [N]
🟡 MEDIUM (send in 3 weeks): [N]

INTELLIGENCE SUMMARY:
Compound signals: [N] accounts
Decision Ready / Active Evaluation: [N] accounts
Competitor frustration signals: [N] accounts
Warm paths detected: [N] contacts

CAMPAIGN QUALITY FORECAST:
Based on H[X] historical performance + current brain data:
Expected reply rate: [X]% (H5 brain confidence: HIGH)
Expected meetings from this list: [N] (at [X]% reply → meeting rate)
Expected pipeline: $[X]K (at [N] meetings × 40% close × $15K)

PRE-ENGAGEMENT ACTIONS REQUIRED:
□ [N] contacts need LinkedIn follow (T−3) starting [Date]
□ [N] contacts need LinkedIn like (T−2) starting [Date]
□ [N] contacts need comment (T−1) — see priority-personal list

BEFORE LAYER 3 LAUNCHES:
□ Sending domain warmup status: [X weeks] → sends allowed: [N]/day
□ Instantly API key: [confirmed / pending]
□ Sequences configured in Instantly: [yes / no]
□ Priority Personalization list: [N] bespoke emails to write

Confirm launch? (Y/N)
═══════════════════════════════════════════════
```

---

## Step 5F — First 24-Hour Monitoring Protocol

After the first batch of Email 1s send, monitor these signals within 24 hours:

| Signal | Threshold | Action |
|--------|-----------|--------|
| Bounce rate | > 0.5% in first 24h | Pause campaign immediately, investigate list |
| Spam complaints | Any | Pause campaign immediately, check content |
| Open rate | < 20% | Check subject line, sending time, domain health |
| Open rate | > 45% | Excellent — note subject line in Proven Performers |
| HOT replies | Any | Reply-routing → meeting-automation within 2h |
| Hard NO replies | Any | reply-routing → DNC update |
| OOO replies | > 15% of opens | Check if batch went out right before a holiday |

**Check at:** 6 hours after first send, then at 24 hours.

---

## Step 5G — Post-Campaign Feedback Loop Plan

Plan this before the campaign launches so it happens automatically:

1. **After 2 weeks:** Pull all positive replies → add their company domains to a "responder seed list"
2. **After 4 weeks:** Run a new lookalike search using the responder seed list → these are the highest-confidence ICP companies for the NEXT campaign
3. **After campaign closes:** Run learning-loops.md → Friday brain update protocol → update H5 confidence score based on actual reply and meeting rates
4. **Add winning buyer language:** Any memorable phrase from positive replies → `brain/voc-library.md`

---

## Step 5H — Campaign Handoff: Layer 2 → Email Generation → Instantly

This is the final step of Layer 2. It documents how the verified campaign CSV flows from Layer 2 output through to live Instantly campaign.

```
Layer 2 output (this skill)
       │
       ▼
[hypothesis]-[YYYY-MM-DD]-verified.csv
       │
       ├──→ ai-personalization skill (reply_prob ≥ 70 contacts)
       │         Generates: v_bespoke_opener, v_subject_bespoke, v_loom_url (HeyGen)
       │         Writes back to CSV columns before upload
       │
       ├──→ video-outreach skill (Tier 1, reply_prob 35–69)
       │         Generates: v_loom_url (HeyGen standard template script)
       │         Writes back to CSV columns before upload
       │
       ▼
CSV is now fully populated (all 62 columns filled)
       │
       ▼
Instantly Campaign Setup:
  1. Create new campaign: "SELLL — [Hypothesis] [Persona] — [YYYY-MM-DD]"
  2. Sending domain: team.selll.io (NEVER selll.io)
  3. Upload verified CSV (import contacts)
  4. Set Campaign Variables (not per-row): {{sender_name}}, {{sender_title}}, {{calendar_link}}
  5. Select sequence template matching sequence_variant column in CSV
  6. Set sending schedule: Mon–Thu, 7:30–11:00 AM per contact's local timezone (use optimal_send_time_utc column)
  7. Enable reply detection: webhook to n8n (inbox-reply skill auto-fires on every reply)
  8. Enable open tracking: webhook to n8n (ghost-positive detection)
  9. Daily send limit: 40 emails per sending domain during warmup; 100+ at full warmup
 10. Set sequence step delays matching sequence timing (Email 1 = Day 1, Email 2 = Day 4, etc.)

Pre-launch checklist:
  ☐ All 62 CSV columns populated (no blanks in required fields)
  ☐ v_loom_url populated for all Tier 1 contacts (or text fallback confirmed armed)
  ☐ v_bespoke_opener populated for reply_prob ≥ 70 contacts
  ☐ proof_person confirmed (Devolon name must be verified before first send — see proof-library.md)
  ☐ sending_domain column = team.selll.io (verify no row has selll.io)
  ☐ Campaign variables set in Instantly: sender_name, sender_title, calendar_link
  ☐ Webhook configured: Instantly → n8n → inbox-reply skill
  ☐ Pre-engagement Expandi campaign loaded and started (T−3 must start 3 days before Email 1)
  ☐ HubSpot campaign created and linked to this Instantly campaign (for CRM sync)

Once live: hand off to signal-monitor (passive monitoring) + inbox-reply (webhook-driven).
Layer 2 is complete. The campaign is live and self-managing.
```

---

## Layer 2 Run Log

| Date | Hypothesis | Raw List | After Gates | Tier 1 | Tier 2 | Hit Rate | Bounce Est. | Bespoke List | CSV | Status |
|------|-----------|---------|------------|--------|--------|---------|------------|-------------|-----|--------|
| 2026-06-21 | H5 + H1/H2/H3/H4/H7 compounds | 12 | 9 | 8 | 1 | 100% (sim) | 0.43% | 2 | H5-2026-06-21-verified.csv | ✅ TEST RUN COMPLETE — awaiting domain warmup + API keys |

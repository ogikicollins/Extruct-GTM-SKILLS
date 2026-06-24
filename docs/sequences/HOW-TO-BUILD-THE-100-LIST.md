# How to Build the 100-Prospect List
> Target: 100 hyper-targeted prospects across 3 signals | Verticals: DevTools + MarTech/SalesTech

---

## Vertical Focus

**Why only 2 verticals:**
- **DevTools**: PLG companies hitting the enterprise ceiling → VP Sales hire = admission they have the gap → highest urgency signal
- **MarTech/SalesTech**: Tool-stack-without-intelligence problem → they KNOW what good looks like and know they're not there → most motivated buyers

Every other vertical (Fintech, HR Tech) has longer buying cycles. Start here, expand in Month 2.

---

## The 100 Split

| Signal | Count | Source | Sequence |
|---|---|---|---|
| A — SDR/VP Sales hiring (DevTools + MarTech) | 50 | LinkedIn Jobs via Apify | `signal-a-sdr-hiring.md` |
| B — ProductHunt launch (B2B, last 60 days) | 30 | ProductHunt directly | `signal-b-ph-launch.md` |
| C — New VP Sales in role < 60 days | 20 | LinkedIn / Apollo filter | `signal-c-new-vp-sales.md` |

---

## Step 1 — Build Signal A (50 prospects)

**Run the Apify LinkedIn Jobs Scraper:**

1. Go to [console.apify.com](https://console.apify.com) → Actors → Search "LinkedIn Jobs Scraper"
2. Use Actor: `apify/linkedin-jobs-scraper`
3. Input:
```json
{
  "queries": [
    "sales development representative developer tools",
    "SDR manager martech SaaS",
    "VP Sales developer tools startup",
    "Head of Revenue SaaS startup",
    "sales development representative marketing technology"
  ],
  "location": "United States",
  "maxItems": 200
}
```
4. Run → wait ~5 minutes → Download results as JSON

**From the results, filter for:**
- Company size: 10–200 employees (check LinkedIn company page)
- Posted: last 30 days
- Verticals: words like "developer", "API", "platform", "data", "analytics", "marketing software", "sales tech"

**Enrich each company with Hunter:**
```
POST https://n8n-production-6b270.up.railway.app/webhook/enrich-company
Body: {"company_name": "Acme Corp"}
```
Returns: best decision maker email + title + confidence score.

**Target titles to accept (in order of priority):**
1. VP Sales / VP Revenue / CRO
2. CEO / Co-Founder (if no VP Sales exists)
3. Head of Sales / Head of Revenue
4. Director of Sales

**Discard if:** confidence < 60%, title is SDR/AE/individual contributor, company > 300 employees.

---

## Step 2 — Build Signal B (30 prospects)

**Find ProductHunt launches manually (30 min):**

1. Go to [producthunt.com/topics/business-tools](https://www.producthunt.com/topics/business-tools)
2. Also check: `/topics/developer-tools`, `/topics/marketing`, `/topics/sales`, `/topics/analytics`
3. Filter: launched in last 60 days
4. Criteria: B2B product, 100+ upvotes, has a website with a clear sales/pricing page
5. Click each product → find the Maker → click through to their LinkedIn

**Per prospect:**
- Get the maker's first name, last name, LinkedIn URL
- Get the company domain from the PH listing
- Run through Hunter enricher → get verified email
- If Hunter can't find it: try `firstname@companydomain.com` format (most common for founders)

**Skip if:** consumer product, no business model visible, or it's a side project with <50 upvotes.

---

## Step 3 — Build Signal C (20 prospects)

**Apollo.io method (fastest):**
1. Apollo → Search People
2. Filters:
   - Title: "VP Sales" OR "CRO" OR "Head of Revenue" OR "VP of Revenue"
   - Changed jobs: last 90 days
   - Industry: Computer Software OR Internet OR Information Technology
   - Company size: 11–200
3. Export 30 (some will bounce or duplicate) → keep best 20

**ICP score each before adding:**
- Must be at a company with an existing product/revenue (not pre-launch)
- Must have been in role < 60 days (check LinkedIn "Started" date)
- Company must be B2B (not consumer)

---

## Step 4 — Apollo Import Format

**Required CSV columns for Apollo import:**
```
first_name, last_name, email, title, company, company_domain, signal_type, personalization_note
```

**`signal_type` values:** `SDR_HIRING` | `PH_LAUNCH` | `NEW_VP_SALES`

**`personalization_note` (fill per prospect — one sentence):**
- SDR Hiring: "Saw you're hiring a [job title] — [company] is building the team before the system."
- PH Launch: "Congrats on the [product name] launch on ProductHunt."
- New VP Sales: "Congrats on joining [company] as [title] — [X] days in, the audit has probably started."

---

## Step 5 — Apollo Sequence Assignment

| Segment | Sequence to assign | Apollo tag |
|---|---|---|
| SDR Hiring (DevTools) | `SELLL — SDR Hiring Signal` | `signal-a-devtools` |
| SDR Hiring (MarTech) | `SELLL — SDR Hiring Signal` | `signal-a-martech` |
| PH Launch | `SELLL — ProductHunt Launch Signal` | `signal-b-ph` |
| New VP Sales | `SELLL — New VP Sales Signal` | `signal-c-newvp` |

**Max sends per day:** 40 (across all sequences) — stay under Apollo free tier limits.

---

## Quality Bar (Before Any Prospect Goes Into Apollo)

Every contact must pass:
- [ ] Verified email (Hunter confidence ≥ 70% OR manually confirmed format)
- [ ] Senior title (VP, Head, Director, CRO, CEO — no individual contributors)
- [ ] Company is B2B with an active product
- [ ] Company is 10–200 employees
- [ ] Signal is specific and recent (< 60 days for all three signal types)
- [ ] Has a personalization note filled in

A list of 80 that passes this bar outperforms a list of 200 that doesn't.

---

## Hunter Enricher Webhook Reference

```
POST https://n8n-production-6b270.up.railway.app/webhook/enrich-company
Content-Type: application/json

Body:
{
  "company_name": "Acme Corp"
}

Returns:
{
  "found": true,
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane@acmecorp.com",
  "title": "VP Sales",
  "company": "Acme Corp",
  "domain": "acmecorp.com",
  "confidence": 94,
  "all_contacts_count": 12
}
```

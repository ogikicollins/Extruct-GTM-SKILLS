# Structural Chat — Seamless.ai Search Fields (copy-paste ready)
Run as 9 separate searches (one per vertical row below), each using the same universal filters plus that row's industry/keyword combo. Export and combine into one 1,500-row list, then de-dupe and suppress before upload.

---

## Universal filters — use on every search

**Job Title (include — match any):**
```
VP Customer Support, VP Customer Service, VP Customer Care, VP Customer Experience, VP Customer Success, SVP Customer Support, SVP Customer Experience, EVP Customer Experience, Chief Customer Officer, Chief Experience Officer, Head of Customer Support, Head of Customer Experience, Head of Support, Director of Customer Success, Director of Client Services, Director of Support Operations, Member Experience Lead, Manager of Customer Support
```

**Job Title (exclude — match any, even if "VP" appears):**
```
Sales, Account Executive, Engineer, Engineering, Human Resources, Recruiter, Talent Acquisition, Finance, Marketing, Product Manager, Software Engineer, Solutions Engineer
```
*(If a title contains both an included term and an excluded term — e.g. "VP of Sales Support" — exclude it. Sales/Engineering/HR/Finance/Marketing as the lead word loses, Customer/Support/Service as the lead word wins.)*

**Department (Seamless "Department" filter):**
```
Include: Support, Operations
Exclude: Sales, Engineering, Human Resources, Finance, Marketing
```
Leave "IT" out of the Department filter entirely — in the last pull it was the 2nd-largest department (125/390) but a mixed bag of genuine support-adjacent hybrid roles and pure infrastructure/engineering leaders. The title include/exclude list above already catches the legitimate hybrid titles; trusting Seamless's IT bucket wholesale would let the engineering-heavy half back in.

**Seniority Level:**
```
VP, SVP, EVP, C-Suite/Chief, Head
```
(Add **Director** only when running the smaller-company searches — property management, mortgage, subscription commerce — where Director is realistically the functional ceiling.)

**Company Employee Count:**
```
11-50, 51-200, 201-500, 501-1,000
```
Do **not** include 1,000+.

**Company Revenue:**
```
$1M-$10M, $10M-$50M, $50M-$75M
```
Do **not** include $300M+ or $1B+ bands. (For the deliberate $75M–$300M displacement-exception carve-out, run one separate small search — see "Exception batch" below — don't blend it into the main pulls.)

**Location:**
```
United States
```
Then manually spot-check company address on any result before it's finalized — the Country field was wrong on 26 of 390 rows (6.7%) in the last pull (Germany/UK/Israel/France/China/Sweden/Japan/Norway/Canada addresses tagged "United States").

---

## Per-vertical searches (SIC code + industry + keyword) with row targets

Seamless's Advanced Search supports SIC code filtering directly — use it as the **primary** filter for each vertical below instead of the generic Industry category, which was too broad last time (it's what let "Pharmaceuticals" catch drug manufacturers instead of telehealth/pharmacy companies, and "Computer Software" catch unrelated SaaS). Keep the Industry category as a loose secondary filter and the keyword as a tertiary tiebreaker.

| # | Vertical | Target rows | SIC codes (primary filter) | Company Industry (secondary) | Keyword (tertiary) |
|---|---|---|---|---|---|
| 1 | Fintech / neobanks | 200 | 6020, 6022, 6099, 6141, 6199, 7372 *(see caution on 6211 below)* | Financial Services, Banking, Fintech | neobank, payments, fintech, digital bank |
| 2 | Property management & residential real estate | 175 | **6531, 6512** (bread and butter — brokerages/managers/agents, apartment operators), 6552 (homebuilders/developers, secondary priority), 6510, 6513, 6514 | Real Estate, Real Estate Management | property management, residential, multifamily, HOA |
| 3 | Mortgage & loan servicing | 150 | 6162, 6163 (mortgage bankers/loan brokers — most precise), 6020, 6035, 6036, 6120, 6141, 6153 *(see caution on 6159 below)* | Financial Services, Banking, Real Estate | mortgage, loan servicing, loan origination |
| 4 | Utilities & telecom | 200 | 4811, 4812, 4813, 4899, 4911, 4924, 4941, 4991 | Utilities, Telecommunications | *(none needed)* |
| 5 | Broadband & cable ISPs | 100 | 4813, 4822, 4841, 4899, 7372 | Telecommunications, Internet | broadband, fiber, cable, ISP |
| 6 | Healthcare & telehealth / online pharmacy / dermatology | 200 | 8011, 8049, 8099, 7372 (telehealth/dermatology), 5912, 5122 (online pharmacy) *(see caution on 8062 below)* | Hospital & Health Care, Pharmaceuticals, Medical Practice | telehealth, telemedicine, online pharmacy, dermatology, specialty pharmacy |
| 7 | Travel & hospitality | 175 | 7011 (hotels), 7389 + 4724 (booking/OTA/travel agencies), 4512, 4522 (budget airlines), 7514, 7515 (car rental), 4400, 4481, 4489 (cruise) | Leisure/Travel & Tourism, Hospitality | OTA, booking, budget airline, car rental, cruise (optional) |
| 8 | Subscription commerce & streaming | 150 | 5961 (subscription boxes), 7812, 7822, 7929 (streaming content), 4833, 4899, 7372 | Entertainment, Internet, Computer Software | subscription, streaming, membership box |
| 9 | Secondary/comparison batch (Kyle's 2-3 secondary verticals) | 150 | *(no SIC list provided — stays Industry + keyword only, since this is explicitly a comparison bucket, not a primary ICP vertical)* | Retail, Computer Software | Retail: exclude e-commerce, online store, DTC, Shopify. Software: customer support platform, helpdesk |

**Total: 1,500**

### Cautions on specific SIC codes — don't include blind

- **7372 (Prepackaged Software) appears in 4 verticals above.** On its own this SIC code means "any software company" — it's exactly the over-broad category that let unrelated SaaS into the last list and fed the "we built it ourselves" objection. **Never run 7372 by itself; always pair it with that vertical's keyword filter** (telehealth/telemedicine for #6, broadband/fiber/ISP for #5, neobank/payments/fintech for #1, subscription/streaming for #8).
- **8062 (General Medical and Surgical Hospitals), included in the healthcare cluster you sent, is left out of the table above on purpose.** Large hospital systems run on this SIC code almost universally exceed the 1,000-employee/$75M-revenue caps — the employee/revenue filters would need to do all the real work here, and hospital systems that slip through anyway skew toward the "already has something in place" objection given how mature their support ops usually are. Add it back in only if you want hospital systems specifically (they'd need the $75M-$300M exception-batch treatment, not the primary pull).
- **6211 (Security Brokers, Dealers, and Flotation Companies), included in your fintech list, is a traditional Wall Street brokerage code, not a neobank/payments-fintech one.** Left out of the primary fintech SIC filter above — it would pull broker-dealers that don't match the "digital-first fintech" framing the ICP actually wants. Add it back only if you want to deliberately test traditional finance as a sub-segment.
- **6159 (Federal-Sponsored Credit Agencies), appearing in both your real-estate and mortgage lists, covers quasi-governmental entities (Fannie Mae/Freddie Mac-adjacent).** These are enormous, not Series A/B-shaped businesses. Left out of both vertical filters above for the same reason as 8062 — the size caps would need to do the filtering, and it's not a natural fit for this GTM motion regardless.
- **4899 (Communications Services, NEC) is a catch-all that appears in 3 verticals** (utilities/telecom, broadband, subscription/streaming) — expect real overlap between those three searches' results. The de-dupe step in Phase 5 handles this, just don't be surprised by it.

---

## Exception batch — run separately, flag before upload, don't blend

| Vertical | Target rows | Revenue | Note |
|---|---|---|---|
| Any of the 9 above | ~150 (optional, additive — outside the 1,500 if you want to keep the primary count clean) | $75M-$300M | Only keep results where the company is a known/likely active bot evaluator or has a visibly deployed (and reviewably imperfect) chat widget — check the Technologies filter below before including any of these. |

---

## Technology filters — split greenfield vs. displacement (new, wasn't used last time)

Run each vertical search twice more if capacity allows, using Seamless's **Technologies** filter:

- **Greenfield sub-segment:** Technologies **does NOT include** Intercom, Zendesk, Drift, Ada, Forethought, LiveChat, Freshchat.
- **Displacement sub-segment:** Technologies **includes** any of the above.

Tag the export (add a column, e.g. "Segment: Greenfield" / "Segment: Displacement") before it goes to Loyd for list upload, so the two get split into separate Nooks sequences — reps should know which talk track applies before dialing rather than discovering it live.

---

## How to build this in Seamless.ai, full step-by-step walkthrough

*Note: exact field labels can shift with Seamless's UI updates — I don't have live access to confirm the current interface, so treat these as the general workflow and adjust to whatever you actually see on screen.*

### Phase 1 — Before you touch a filter
1. Log into Seamless.ai.
2. Check your credit/reveal balance (Settings → Billing or Plan). 1,500 revealed contacts is a real credit spend — confirm the balance covers it, or plan to pull in batches across billing cycles.
3. Open the search/prospecting tool (commonly labeled "Search for Leads," "Prospector," or "Build a List").

### Phase 2 — Build the base filter once
4. Set **Location** → United States.
5. Set **Job Title → Include**, paste the include list from above.
6. Set **Job Title → Exclude** (or "NOT" / "Exclude keywords," depending on your plan's UI), paste the exclude list.
7. Set **Department → Include**: Support, Operations. Set **Exclude** if the field allows it: Sales, Engineering, Human Resources, Finance, Marketing. (If Seamless only allows include, not exclude, on Department, skip Exclude here — the title exclude list is already doing that job.)
8. Set **Seniority Level** → VP, SVP, EVP, C-Suite/Chief, Head.
9. Set **Company Employee Count** → check the 11-50, 51-200, 201-500, and 501-1,000 bands. Leave 1,000+ unchecked.
10. Set **Company Revenue** → check $1M-$10M, $10M-$50M, $50M-$75M. Leave $300M+ and $1B+ unchecked.
11. **Save this as a template/saved search** if your plan has that option — name it "Structural Chat — Base ICP Filter." If saved searches aren't available, keep this doc open and re-enter these 7 fields identically for each of the 9 runs below; don't rely on memory for consistency.

### Phase 3 — Run each vertical, one at a time

For each row, add the **SIC code filter first** (Seamless's Advanced Search supports SIC lookup directly), then Industry and Keyword as secondary/tertiary refinement, on top of the base filter. Run, review the result count against the target, and export before moving to the next.

12. **Vertical 1 — Fintech / neobanks (target 200):** SIC = 6020, 6022, 6099, 6141, 6199, 7372 (do not add 6211 — traditional broker-dealer, not neobank/payments fintech). Industry = Financial Services, Banking, Fintech. Keyword = neobank, payments, fintech, digital bank (required alongside 7372 so it doesn't pull generic software companies). Run → review results (spot-check 5-10 for real support/CX titles and plausible company size) → cap/select up to 200 → reveal → export as `structural-fintech-200.csv`.
13. **Vertical 2 — Property management & residential real estate (target 175):** SIC = 6531, 6512 as the primary two (brokerages/managers/agents, apartment operators — "bread and butter" per the SIC guidance), plus 6552 (homebuilders/developers, secondary priority), 6510, 6513, 6514. Industry = Real Estate, Real Estate Management. Keyword = property management, residential, multifamily, HOA. Add Seniority → Director for this one, since Director is often the functional ceiling at smaller property management firms. Run → review → export as `structural-propmgmt-175.csv`.
14. **Vertical 3 — Mortgage & loan servicing (target 150):** SIC = 6162, 6163 as the primary two (mortgage bankers, loan brokers — the most precise codes for this), plus 6020, 6035, 6036, 6120, 6141, 6153 (do not add 6159 — Fannie Mae/Freddie Mac-adjacent, too large for this GTM motion). Industry = Financial Services, Banking, Real Estate. Keyword = mortgage, loan servicing, loan origination. Run → review → export as `structural-mortgage-150.csv`.
15. **Vertical 4 — Utilities & telecom (target 200):** SIC = 4811, 4812, 4813, 4899, 4911, 4924, 4941, 4991. Industry = Utilities, Telecommunications. No extra keyword needed. Run → review — this vertical over-delivered last time (31% of the old list), so double-check you're not pulling far past 200 before exporting. Export as `structural-utilities-200.csv`.
16. **Vertical 5 — Broadband & cable ISPs (target 100):** SIC = 4813, 4822, 4841, 4899, 7372 (pair 7372 with the keyword below, not alone). Industry = Telecommunications, Internet. Keyword = broadband, fiber, cable, ISP. Run → review → export as `structural-broadband-100.csv`.
17. **Vertical 6 — Healthcare & telehealth / online pharmacy / dermatology (target 200):** SIC = 8011, 8049, 8099, 7372 for telehealth/dermatology, plus 5912, 5122 for online pharmacy (do not add 8062, general hospitals — almost always exceeds the employee/revenue caps and skews toward "already has something in place"). Industry = Hospital & Health Care, Pharmaceuticals, Medical Practice. Keyword = telehealth, telemedicine, online pharmacy, dermatology, specialty pharmacy. Keyword match matters most here — Industry alone caught mostly drug manufacturers last time, not telehealth companies. Run → review closely → export as `structural-healthtech-200.csv`.
18. **Vertical 7 — Travel & hospitality (target 175):** SIC = 7011 (hotels), 7389 + 4724 (booking/OTA/travel agencies), 4512, 4522 (budget airlines), 7514, 7515 (car rental), 4400, 4481, 4489 (cruise) — this vertical covers several sub-segments, so consider running it as up to 4 smaller sub-searches (hotels, OTA/booking, air, car/cruise) if you want visibility into which one performs best. Industry = Leisure/Travel & Tourism, Hospitality. Keyword optional (OTA, booking, budget airline, car rental, cruise). Run → review → export as `structural-travel-175.csv`.
19. **Vertical 8 — Subscription commerce & streaming (target 150):** SIC = 5961 (subscription boxes), 7812, 7822, 7929 (streaming content), 4833, 4899, 7372 (pair with keyword, not alone). Industry = Entertainment, Internet, Computer Software. Keyword = subscription, streaming, membership box. Add Seniority → Director here too, subscription-commerce companies skew smaller. Run → review → export as `structural-subscription-150.csv`.
20. **Vertical 9 — Secondary/comparison batch (target 150):** No SIC list for this one — it's explicitly a comparison bucket, stays Industry + keyword only. Industry = Retail, Computer Software. For Retail, add an exclude keyword for e-commerce, online store, DTC, Shopify to avoid the excluded pure-e-commerce category. For Software, keyword = customer support platform, helpdesk. Run → review → export as `structural-secondary-150.csv`.

### Phase 4 — Optional: greenfield vs. displacement split
21. For any vertical you have capacity to run twice, re-run it with the same filters plus **Technologies excludes** Intercom/Zendesk/Drift/Ada/Forethought/LiveChat/Freshchat → export as the greenfield sub-segment.
22. Re-run once more with **Technologies includes** any of those same tools → export as the displacement sub-segment.
23. Add a "Segment" column to each of these exports (Greenfield / Displacement) before merging, so Loyd can route them into separate Nooks sequences with the matching talk track.

### Phase 5 — Merge, clean, and verify
24. Combine all 9 (or more) CSV exports into one master file with identical columns.
25. De-dupe by company + email, capping at 2 contacts per company.
26. Remove any row whose domain matches `STRUCTURAL-SUPPRESSION-LIST.md`.
27. Remove any row whose company already appears in `STRUCTURAL-CHAT-CALLS-CLEAN.csv` (already dialed this week).
28. Sort by employee count and revenue, descending, and hand-check the top 20 rows for data-quality errors — this is exactly where the last pull's bad data (Walmart Investment Co. tagged as a 350-employee company) would have been caught before it ever reached a dialer.
29. Confirm the final row count lands near 1,500 after de-dupe/suppression; if it falls noticeably short, go back and widen the keyword filters on whichever vertical(s) under-delivered rather than loosening the revenue/employee/title filters.

### Phase 6 — Handoff
30. Rename the final file following the existing convention, e.g. `Structural Chat - CS People v2` (dated).
31. Hand it to Loyd for the Nooks/HubSpot upload, split into lists per his existing process (mobile numbers first, then direct dials).
32. Log the new list version, row count, and vertical breakdown into the account card so it's part of the record for the next diagnostic pass.

**If your Seamless plan limits searches or credit reveals per session:** run vertical 1 (fintech) first as a test batch, sanity-check the output against this spec, confirm it looks right, then scale to the remaining 8 rather than pulling all 1,500 blind.

**Offer:** once you've exported the 9 CSVs from Seamless, share them here and I can merge, de-dupe, cross-check against the suppression list and already-dialed companies, and hand back one clean final file — the same way I built the clean 105-row call list earlier.

## Before this goes to Nooks

1. De-dupe: max 2 contacts per company.
2. Suppress every domain in `STRUCTURAL-SUPPRESSION-LIST.md`.
3. Cross-check against companies already dialed in `STRUCTURAL-CHAT-CALLS-CLEAN.csv` — don't re-pull the 105 companies worked this week.
4. Spot-check the 20 largest companies by employee count/revenue in the final export by hand — Seamless's firmographic data has been wrong on subsidiaries/regional entities before (e.g. "Wal-Mart Investment Co. Ltd." showing as a 350-employee company in the last pull).

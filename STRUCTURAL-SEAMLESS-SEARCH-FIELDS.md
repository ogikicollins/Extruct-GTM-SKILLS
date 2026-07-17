# Structural Chat — Seamless.ai Search Fields (copy-paste ready)
**Updated 2026-07-17: consolidated into ONE search instead of 9 separate vertical pulls, per request — simpler to run, at the cost of not being able to force an even mix across verticals up front. Check the resulting vertical mix after the pull (see Phase 4) rather than controlling it during the search.**

---

## Universal filters — the whole search

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
Leave "IT" out of the Department filter entirely — it's a mixed bag of genuine support-adjacent hybrid roles and pure infrastructure/engineering leaders. The title include/exclude list above already catches the legitimate hybrid titles.

**Seniority Level:**
```
VP, SVP, EVP, C-Suite/Chief, Head
```
Add **Director** to the same single search if the total result count comes in short of 1,500 — don't run it separately, just widen this one field and re-pull.

**Company Employee Count:**
```
11-50, 51-200, 201-500, 501-1,000
```
Do **not** include 1,000+.

**Company Revenue:**
```
$1M-$10M, $10M-$50M, $50M-$75M
```
Do **not** include $300M+ or $1B+ bands.

**Location:**
```
United States
```
Manually spot-check company address on any result before it's finalized — the Country field was wrong on 26 of 390 rows (6.7%) in the last pull (Germany/UK/Israel/France/China/Sweden/Japan/Norway/Canada addresses tagged "United States").

---

## SIC codes — one combined list for the single search

All 9 verticals' SIC codes merged into one list, four codes deliberately dropped (see cautions below).

```
4400, 4481, 4489, 4512, 4522, 4724, 4811, 4812, 4813, 4822, 4833, 4841, 4899, 4911, 4924, 4941, 4991, 5122, 5912, 5961, 6020, 6022, 6035, 6036, 6099, 6120, 6141, 6153, 6162, 6163, 6199, 6510, 6512, 6513, 6514, 6531, 6552, 7011, 7372, 7389, 7514, 7515, 7812, 7822, 7929, 8011, 8049, 8099
```

**Dropped on purpose — don't add these back without a reason:**
- **6211** (Security Brokers, Dealers, Flotation Companies) — traditional Wall Street brokerage, not neobank/payments fintech.
- **6159** (Federal-Sponsored Credit Agencies) — Fannie Mae/Freddie Mac-adjacent, far too large for this GTM motion.
- **8062** (General Medical and Surgical Hospitals) — hospital systems almost always blow through the employee/revenue caps and skew toward "already has something in place."
- None of the codes above overlap with those three, so nothing further to strip.

**On 7372 (Prepackaged Software):** it's in the list because several verticals (fintech, broadband, healthtech, subscription/streaming) legitimately include software-delivered versions of that business. On its own it just means "any software company" — the same over-broad trap that let unrelated SaaS into the last list. Since everything is one search now, this risk is handled by the **Keyword** filter below rather than per-vertical pairing — make sure the keyword list stays attached to the search, don't run SIC codes with keywords turned off.

**Company Industry (secondary filter, combine all):**
```
Financial Services, Banking, Fintech, Real Estate, Real Estate Management, Utilities, Telecommunications, Internet, Hospital & Health Care, Pharmaceuticals, Medical Practice, Leisure/Travel & Tourism, Hospitality, Entertainment, Computer Software, Retail
```

**Keyword (include — match any):**
```
neobank, payments, fintech, digital bank, property management, residential, multifamily, HOA, mortgage, loan servicing, loan origination, broadband, fiber, cable, ISP, telehealth, telemedicine, online pharmacy, dermatology, specialty pharmacy, OTA, booking, budget airline, car rental, cruise, subscription, streaming, membership box, customer support platform, helpdesk
```

**Keyword (exclude):**
```
e-commerce, online store, DTC, Shopify
```
(Keeps pure e-commerce/DTC retail out, per the ICP's explicit exclusion, while still allowing the Retail industry tag through for the non-e-commerce companies in it.)

**Target: 1,500 results total.**

---

## Reference — the vertical mix to check after the pull

Not enforced during the search anymore, but worth sorting the export by Industry/SIC afterward and comparing against this rough target so no single vertical dominates the way Utilities/Telecom did last time (31% of the old list from one unbounded pull):

| Vertical | Rough target share |
|---|---|
| Fintech / neobanks | ~13% (200) |
| Property management & residential real estate | ~12% (175) |
| Mortgage & loan servicing | ~10% (150) |
| Utilities & telecom | ~13% (200) |
| Broadband & cable ISPs | ~7% (100) |
| Healthcare & telehealth / online pharmacy / dermatology | ~13% (200) |
| Travel & hospitality | ~12% (175) |
| Subscription commerce & streaming | ~10% (150) |
| Retail / Computer Software (secondary/comparison) | ~10% (150) |

If one vertical comes back wildly overrepresented (Utilities/Telecom is the most likely repeat offender given last time's pattern), it's fine to manually trim the excess rows for that vertical out of the export before it goes to Nooks, rather than re-running the whole search.

---

## Technology filters — optional greenfield vs. displacement tagging

Seamless's **Technologies** field can flag which companies already run a chat tool:
- **Greenfield:** Technologies does NOT include Intercom, Zendesk, Drift, Ada, Forethought, LiveChat, Freshchat.
- **Displacement:** Technologies includes any of the above.

Since this is one combined search now, the simplest way to use this: export the single 1,500-row list first, then check the Technologies column per row (if populated) and tag a "Segment" column afterward, rather than running the whole search twice. If Seamless's Technologies data isn't populated for most rows (it was blank on 100% of rows in the last pull), this may not be usable yet — worth confirming before relying on it.

---

## Exception batch — larger companies, run and flag separately

| Target rows | Revenue | Note |
|---|---|---|
| ~150 (optional, outside the 1,500) | $75M-$300M | Same title/department/keyword filters, just the higher revenue band. Keep it in a separate export and flag it — only use these for companies with a visible active-evaluation or displacement signal, not as general volume. |

---

## How to build this in Seamless.ai, step by step

*Exact field labels can shift with Seamless's UI updates — I don't have live access to confirm the current interface, so adjust to whatever you actually see on screen.*

### Phase 1 — Before you touch a filter
1. Log into Seamless.ai.
2. Check your credit/reveal balance — 1,500 revealed contacts is a real spend.
3. Open the search/prospecting tool.

### Phase 2 — Build the one search
4. Location → United States.
5. Job Title → Include list, then Exclude list.
6. Department → Include: Support, Operations. Exclude (if available): Sales, Engineering, HR, Finance, Marketing.
7. Seniority → VP, SVP, EVP, C-Suite/Chief, Head.
8. Employee Count → 11-50, 51-200, 201-500, 501-1,000 (not 1,000+).
9. Revenue → $1M-$10M, $10M-$50M, $50M-$75M (not $300M+ or $1B+).
10. SIC Codes → paste the combined 48-code list above.
11. Company Industry → paste the combined industry list.
12. Keyword Include → paste the combined keyword list.
13. Keyword Exclude → e-commerce, online store, DTC, Shopify.

### Phase 3 — Run it
14. Run the search. Review the total result count against the 1,500 target.
15. If short of 1,500: widen Seniority to include Director, or loosen the Employee/Revenue bands slightly — don't drop the title/department discipline, that's the highest-leverage filter.
16. If well over 1,500: sort by relevance/match strength if Seamless offers it, and take the top 1,500 rather than randomly truncating.
17. Reveal and export the full result set to one CSV.

### Phase 4 — Check the mix, clean, and verify
18. Sort the export by Industry/SIC and eyeball the distribution against the reference table above. Manually trim any vertical that's wildly overrepresented (watch for Utilities/Telecom repeating last time's 31% dominance).
19. De-dupe by company + email, capping at 2 contacts per company.
20. Remove any row whose domain matches `STRUCTURAL-SUPPRESSION-LIST.md`.
21. Remove any row whose company already appears in `STRUCTURAL-CHAT-CALLS-CLEAN.csv` (already dialed this week).
22. Sort by employee count and revenue, descending, and hand-check the top 20 rows for data-quality errors — this is exactly where the last pull's bad data (Walmart Investment Co. tagged as a 350-employee company) would have been caught.

### Phase 5 — Handoff
23. Rename the final file following the existing convention, e.g. `Structural Chat - CS People v2` (dated).
24. Hand it to Loyd for the Nooks/HubSpot upload, split per his existing process (mobile numbers first, then direct dials).
25. Log the new list version, row count, and vertical breakdown into the account card.

**Offer:** once you've exported the CSV from Seamless, share it here and I can check the vertical mix, de-dupe, cross-check against the suppression list and already-dialed companies, and hand back one clean final file — the same way I built the clean 105-row call list earlier.

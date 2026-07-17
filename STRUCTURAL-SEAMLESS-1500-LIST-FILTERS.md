# Structural Chat — Seamless.ai Filter Spec for the Next 1,500-Prospect List
Built 2026-07-17 from a reverse-engineered audit of the actual 07/14 pull (390 rows, "Structural Chat - CS People" list) cross-referenced against the OFFICIAL ICP and the real call-outcome data from the 7/10–7/17 call log.

---

## What the 07/14 list actually was (measured, not assumed)

| Dimension | What was actually pulled |
|---|---|
| Seniority | 379/390 (97%) VP-level. Very disciplined — keep this. |
| Departments | Support 155, IT 125, Sales 45, Operations 36, Marketing 12, Finance 6, HR 6, Engineering 5 |
| Employee bands | Exactly three Seamless bands: 125 (51–200), 350 (201–500), 750 (501–1,000) — no 1–50 band, no >1,000 |
| Revenue bands | 2.5M, 17M, 35M, 500K, 75M, 300M, 750M, 1B+ — spans the entire range with no cap |
| Industries | Telecommunications 119 (31%), Retail 63 (16%), Utilities 54 (14%), Hospitality 27, Pharmaceuticals 23, Leisure/Travel 23, Computer Software 15, then a long tail |
| Country field | Says "United States" on **every single row**, including 26 rows (6.7%) whose actual company address is in Germany, UK, Israel, France, China, Sweden, Japan, Norway, or Canada |
| Technologies field | Populated on **zero** rows — tech-stack filtering (chat widget present/absent, which vendor) wasn't used at all |
| Unique companies | 354 of 390 rows — close to 1:1, with 36 companies multi-threaded to a 2nd contact |

## Three real problems this created, tied directly to call outcomes

1. **Revenue was never capped.** 145/390 rows (37%) are $300M+ revenue, including 50 rows (13%) north of $1B — Walmart Investment Co., Direct TV, Neiman Marcus Houston Galleria are literally in this list. The OFFICIAL ICP says "primarily <$50M ARR / Series A-B," large only as an exception for active-evaluation/displacement signals. This wasn't enforced as a list filter, it was left to call-time judgment. Enterprise accounts this large are also the most likely to already have a mature support stack — a plausible contributor to the 39% "already has something in place" objection rate found in the call data.

2. **Titles were VP-disciplined but department wasn't function-disciplined.** 39 titles (10%) contain "Sales," 7 contain "Engineer," 11 contain "Marketing," 6 "Finance." The battle card explicitly says "Avoid: Engineering/technical roles" as personas, but nothing in the actual pull enforced that. This lines up almost exactly with the **26% "wrong contact reached" failure rate** in the real call data — reps hitting sales reps, engineers, and recently-departed staff instead of the support/CX owner.

3. **4 of the 10 official ICP verticals are close to absent.** Property management & residential real estate, mortgage & loan servicing, online pharmacy/telehealth specifically (vs. general "Pharmaceuticals," which mostly means drug manufacturers here), and fintech/neobanks (1 row tagged "Financial Services" out of 390) barely show up. Telecom alone is 31% of the list. Given Kyle's direction that fintech is the analytically-prioritized segment, this list under-delivers on it almost entirely.

---

## Recommended filter spec — 1,500 prospects

### 1. Titles (keep the discipline, tighten the net)
- **Seniority: VP and above only** (VP, SVP, EVP, Chief *, Head of *, Director as a fallback only for smaller companies under 200 employees where "Director of Support" is the functional ceiling).
- **Title must contain one of:** Customer Support, Customer Service, Customer Care, Customer Experience, Customer Success, Client Services, Member Experience, Support Operations, CX, CS.
- **Hard title exclusion, even at VP level:** any title where "Sales," "Engineering," "Human Resources," "Finance," "Marketing," "IT," or "Product" is the *primary* function word and "Customer/Support/Service" is absent or clearly secondary. (A title like "VP, Marketing and Customer Care" is a judgment call — keep it, since Customer Care is named; a title like "VP of Sales Support" should be excluded — "Sales" is the function, "Support" just modifies it.)
- This is the single highest-leverage change: it targets the exact 26% failure mode the call data already proved.

### 2. Employee count
- **10–1,000 employees**, per the OFFICIAL ICP — add Seamless's smaller band(s) (1–50 / 51–200) that the 07/14 pull skipped entirely, since it only pulled 51–200/201–500/501–1,000.
- Exclude 1,000+ outright at the list-filter level (no enterprise-exception carve-out here — that exception should stay a call-time judgment call per the displacement/defended framework, not a list-building default).

### 3. Revenue — the biggest gap to close
- **Hard cap: exclude $300M+ and $1B+ revenue bands entirely.** That removes the Walmart/Direct TV/Neiman Marcus-class accounts that never should have been in a Series-A/B-focused list.
- Primary range: $500K–$75M (matches "<$50M ARR primarily, Series A-B").
- Allow a small, deliberate allocation (~10% of volume, call it 150 of 1,500) in the $75M–$300M band, explicitly reserved for the two official exception cases: actively evaluating a support bot, or unhappy with an existing deployment — this should be a manually-flagged subset, not blended in silently.

### 4. Industry — explicit allocation across all 10 approved verticals

The 07/14 list let industry weighting happen by accident (Telecom ballooned to 31%). For 1,500, allocate on purpose:

| Vertical | Target rows | Note |
|---|---|---|
| Fintech / neobanks | 200 | Virtually absent last time; Kyle flagged this as the analytically-prioritized segment — don't let it default to zero again. Cross-check every pull against `STRUCTURAL-SUPPRESSION-LIST.md` (22 Uncork Capital portfolio domains) before finalizing. |
| Property management & residential real estate | 175 | Absent last time |
| Mortgage & loan servicing | 150 | Absent last time |
| Utilities & telecom | 200 | Was 31% of last list — dial back to ~13% of the new one, still substantial |
| Broadband & cable ISPs | 100 | Overlaps with telecom in Seamless's industry taxonomy — use company keyword ("broadband," "fiber," "cable") in addition to the Industry field |
| Healthcare & telehealth / online pharmacy / dermatology-specialty telehealth | 200 | Filter company name/description for "telehealth," "pharmacy," "dermatology," not just the generic "Pharmaceuticals" or "Hospital & Health Care" industry tags, which mostly caught drug manufacturers last time |
| Travel & hospitality | 175 | Was healthy last time (50 rows/13%) — hold roughly steady |
| Subscription commerce & streaming | 150 | Thin last time (Entertainment only 4 rows) |
| Buffer / secondary-vertical comparison (Kyle's "2-3 secondary verticals for signal comparison") | 150 | Retail (non-e-commerce, e.g. brick-and-mortar chains with real support volume) or Computer Software companies actively building support tooling — for A/B signal only, not primary volume |

**Hard exclusion, unchanged:** pure e-commerce, and any title/company primarily engineering-facing.

### 5. Location
- US-based only, but **do not trust the Country column** — it read "United States" on every single row of the last pull including 26 rows in Germany, Israel, UK, France, China, Sweden, Japan, Norway, and Canada. Cross-check company address/state field, and spot-check the top 20 largest companies in any new pull by hand before it goes to Nooks.

### 6. Technology / buying-signal filters (new — wasn't used at all last time)
The onboarding doc's buying signals include "no chat widget on site today" (greenfield) and "evaluating/running an LLM bot with reliability issues" (displacement) — both are things Seamless's Technologies field can filter on, and it was blank on every row of the last pull, meaning this signal was never actually used:
- Pull a **greenfield segment**: companies with no Intercom/Zendesk/Drift/Ada/Forethought detected — a clean, easy pitch.
- Pull a **displacement segment**: companies actively running one of those tools — the harder, higher-value sell per Paul's own framework, now live in the script.
- Recommend splitting these into separate sub-lists/sequences so reps know which talk track applies before they dial, rather than discovering it live on the call.

### 7. De-duplication and suppression
- Cap at 2 contacts per company max (matches the natural 354-unique-of-390 ratio already in use).
- Suppress every domain on `STRUCTURAL-SUPPRESSION-LIST.md` before the list goes anywhere — the account card still flags this as unverified against actual dialed lists.
- Cross-check against contacts already dialed in `STRUCTURAL-CHAT-CALLS-CLEAN.csv` to avoid re-pulling the 105 companies already worked this week.

---

## Net effect

This isn't a bigger version of the same list — it's a tighter one aimed at fixing the two things the real call data already proved are costing meetings: wrong-contact rate (title/department discipline) and revenue ceiling (the enterprise accounts that are least likely to convert and most likely to already have something in place). Vertical allocation is deliberate instead of accidental, closing the fintech, real estate, mortgage, and telehealth gaps Kyle's prioritization signal calls for.

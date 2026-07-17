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

## Per-vertical searches (industry + keyword) with row targets

| # | Vertical | Target rows | Company Industry filter | Additional Keyword filter |
|---|---|---|---|---|
| 1 | Fintech / neobanks | 200 | Financial Services, Banking, Fintech | "neobank", "payments", "fintech", "digital bank" |
| 2 | Property management & residential real estate | 175 | Real Estate, Real Estate Management | "property management", "residential", "multifamily", "HOA" |
| 3 | Mortgage & loan servicing | 150 | Financial Services, Banking, Real Estate | "mortgage", "loan servicing", "loan origination" |
| 4 | Utilities & telecom | 200 | Utilities, Telecommunications | *(no extra keyword needed — Industry field alone is precise here)* |
| 5 | Broadband & cable ISPs | 100 | Telecommunications, Internet | "broadband", "fiber", "cable", "ISP" |
| 6 | Healthcare & telehealth / online pharmacy / dermatology | 200 | Hospital & Health Care, Pharmaceuticals, Medical Practice | "telehealth", "telemedicine", "online pharmacy", "dermatology", "specialty pharmacy" *(company must match a keyword, not just the Industry tag — Industry alone caught mostly drug manufacturers last time)* |
| 7 | Travel & hospitality | 175 | Leisure/Travel & Tourism, Hospitality | "OTA", "booking", "budget airline", "car rental", "cruise" (optional — Industry field performed fine on its own last time) |
| 8 | Subscription commerce & streaming | 150 | Entertainment, Internet, Computer Software | "subscription", "streaming", "membership box" |
| 9 | Secondary/comparison batch (Kyle's 2-3 secondary verticals) | 150 | Retail, Computer Software | Retail: exclude "e-commerce," "online store," "DTC," "Shopify" (avoid the excluded pure e-commerce category). Software: "customer support platform", "helpdesk" *(companies building support tooling themselves — comparison signal only)* |

**Total: 1,500**

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

## Before this goes to Nooks

1. De-dupe: max 2 contacts per company.
2. Suppress every domain in `STRUCTURAL-SUPPRESSION-LIST.md`.
3. Cross-check against companies already dialed in `STRUCTURAL-CHAT-CALLS-CLEAN.csv` — don't re-pull the 105 companies worked this week.
4. Spot-check the 20 largest companies by employee count/revenue in the final export by hand — Seamless's firmographic data has been wrong on subsidiaries/regional entities before (e.g. "Wal-Mart Investment Co. Ltd." showing as a 350-employee company in the last pull).

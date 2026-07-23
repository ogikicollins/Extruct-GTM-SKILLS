# TopServ Digital — Seamless.ai Sample Pull Filter Spec
Built 2026-07-23 from the confirmed ICP in `TOPSERV-GTM-STRATEGY.md` (onboarding doc + OSP/TopServ onboarding call). This is a **validation sample**, not the launch list — pull small, QA hard, then scale once the pattern holds.

---

## Sample size & structure

Pull **~35–40 companies per vertical** across the four confirmed Tier 1 trades, ~150 total. Keep verticals in separate Seamless searches/exports (don't blend) so you can eyeball quality per trade before combining:

| Vertical | Sample size | NAICS |
|---|---|---|
| HVAC | 35–40 | 238220 |
| Plumbing | 35–40 | 238220 (same code as HVAC — split by keyword, not NAICS, since Seamless files both under Plumbing/HVAC contractors) |
| Electrical | 35–40 | 238210 |
| Roofing | 35–40 | 238160 |

Don't pull Tier 2/3 (windows, garage doors, concrete coating) yet — validate Tier 1 first.

---

## Filter recipe (apply to every vertical search)

**Job Titles**
- Include: `CEO`, `Owner`, `President`, `Founder`
- Management Level: `CXO` / Owner-level
- Run **General Manager as a separate, tagged sub-sample** (10–15 rows, not blended into the main 35–40) — this title wasn't confirmed as included or excluded by TopServ, so treat it as a hypothesis to test rather than assume. Compare contact-quality/response on this sub-sample before deciding whether to fold it into the main filter going forward.

**Location**
- Person Locations: United States
- Company Locations: United States
- **Do not trust Seamless's Country field at face value** — spot-check the top 10 largest companies in each vertical sample by hand (a lesson from the Structural pulls, where 6.7% of "United States" rows were actually international).

**Industry & Keywords**
- Industry: Home Services / Construction & Contracting (whichever Seamless bucket the NAICS code maps to)
- Company Keywords Contain ANY Of (per vertical):
  - HVAC search: `HVAC`, `Heating and Air Conditioning`, `Heating and Cooling`
  - Plumbing search: `Plumbing`, `Plumber`
  - Electrical search: `Electrical`, `Electrician`
  - Roofing search: `Roofing`, `Roofer`
- **Exclude keywords (all searches):** `Water Restoration`, `Water Damage`, `Restoration`, `Franchise` (franchise won't catch everything — confirmed exclusion, but flag for manual review too since keyword matching is unreliable for business-structure)

**Revenue**
- $1.5M – $5M (confirmed floor is $1.5M, not $1M — this is the one place the earlier draft dashboard needs correcting)

**Company Type**
- Private (not public — see prior flag, this was wrong in the initial dashboard config)

**# Employees**
- 10–50, as a proxy for "3–5+ service techs" (not a directly filterable Seamless field). Flag this explicitly in the sample review: **check whether the 10–50 band actually correlates with 3–5+ techs**, or whether it needs tightening/widening once you can eyeball a few company websites/LinkedIn pages in the sample.

**Founded Year**
- Before 2023 (3+ years in business as of 2026)

**Retail Locations**
- Leave unfiltered — doesn't apply to dispatch-based home service businesses.

---

## QA checklist before this sample goes anywhere

Run this on the raw export, not after it's already been merged into a bigger list — catching problems small is cheap, catching them at 1,500 rows is not (see the Structural 07/14 list post-mortem for what happens when this step gets skipped):

1. **Revenue band check** — confirm nothing snuck in above $5M or below $1.5M. Seamless revenue bands don't always align cleanly to custom ranges.
2. **Company Type check** — confirm every row actually shows Private; if any Public rows appear, the filter didn't apply correctly.
3. **Title-to-authority check** — for a sample of 10 rows per vertical, manually verify the person named is actually the owner/founder (LinkedIn or company About page), not a data-entry artifact or a departed employee.
4. **Water restoration / franchise leakage** — manually scan company names/descriptions for restoration or franchise signals the keyword exclusion might have missed.
5. **Employee-count-to-tech-count sanity check** — pick 5 companies per vertical, look up their site or LinkedIn, and see whether the 10–50 employee band is actually landing in the 3–5+ tech range TopServ cares about.
6. **No suppression run yet** — TopServ's exclusion list, GHL segment, and past-client list haven't landed yet (open item in the strategy doc). This sample is pre-suppression by necessity; **do not treat it as launch-ready** — it's for filter validation only. Once TopServ's lists arrive, re-pull or re-suppress before anything reaches Nooks/Parakeet.

---

## What "good" looks like

If the sample comes back clean — private companies, $1.5–5M revenue, owner/founder named, right trade, no restoration/franchise leakage, employee count plausibly tracking tech count — this filter recipe is ready to scale to the full launch list size once TopServ's suppression data arrives. If any of the 6 QA checks fail on more than ~10-15% of rows, tighten that specific filter before scaling rather than pulling a bigger batch on the same recipe.

# Structural Chat — PEO/EOR List Enrichment in Seamless (precision targeting)
**Updated 2026-07-18: consolidated into ONE search instead of multiple group/tier passes, per request — simpler to run. Multiple leads per company get narrowed to one afterward, in the export, rather than prevented during the search.**

For the uploaded company list from `STRUCTURAL-PEO-EOR-TARGET-LIST.md`.

---

## The one search

Run this against your uploaded company list, no splitting by PEO/EOR/founder-led:

**Job Title (include — match any):**
```
Chief Service Officer, Chief Client Officer, Chief Customer Officer, VP Client Services, VP Client Experience, Head of Client Services, Head of Client Experience, VP Customer Experience, VP Customer Success, Head of Customer Experience, Head of Customer Success, COO, Chief Operating Officer, CEO, Chief Executive Officer, Founder, Co-Founder
```

This one list covers every company type at once — PEOs pick up the Chief Service/Client/Customer Officer or VP/Head of Client Services/Experience titles, EORs pick up the VP/Head of Customer Experience/Success titles, and Nextep/Sequoia One pick up CEO/Founder — all from the same search, no separate passes needed.

**Industry:** skip it — the uploaded company list already defines the universe, Industry has nothing left to filter.

**Revenue:** skip it — this list was hand-curated by fit, not by size (Insperity is a public company and still a confirmed Top 10 target).

Run → reveal → export.

---

## Narrowing to one contact per company

Because the title list is OR'd, some companies will return more than one match (e.g. both a Chief Customer Officer and a COO at the same company). To get to exactly one per company in the export:

**Priority order — keep the highest, discard the rest:**
1. Chief Service Officer / Chief Client Officer / Chief Customer Officer (PEO) or VP/Head of Customer Experience/Success (EOR) — the actual pain-owner
2. VP/Head of Client Services or Client Experience (PEO fallback)
3. CEO / Chief Executive Officer / Founder / Co-Founder (only relevant at Nextep/Sequoia One, or anywhere else it's the only match)
4. COO / Chief Operating Officer — lowest priority, keep only if nothing above exists for that company

Sort the export by company name, apply this ranking, delete everything below the top match per company.

**Fastest path:** export the raw result set and share it here — I'll run the priority ranking programmatically and hand back exactly one contact per company, the same way I cleaned up the call list and the Seamless source list earlier.

---

## After narrowing

1. Spot-check the ~25-29 remaining titles against LinkedIn before this goes to a dialer — small enough to do by hand.
2. Confirm no domain overlap with `STRUCTURAL-SUPPRESSION-LIST.md` (checked clean for all 29 on 2026-07-17 — re-check if the uploaded list has changed since).
3. Load into **both call and email**, as its own separate sequence — don't fold it into the main 1,500-list sequences. Tag it clearly (e.g. "Structural Chat — PEO/EOR Experiment") so results stay readable on their own.

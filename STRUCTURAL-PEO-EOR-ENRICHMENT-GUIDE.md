# Structural Chat — PEO/EOR List Enrichment in Seamless (precision targeting)
For the uploaded company list from `STRUCTURAL-PEO-EOR-TARGET-LIST.md`. This is account-based enrichment (you already have the exact 10/20/29 companies), not a broad market search — so the process is different from the main 1,500-list build: instead of one big filtered search, you run a few small, precise passes against the same uploaded list, using different title logic per company type.

*Exact field labels can shift with Seamless's UI updates — I don't have live access to confirm the current interface, so adjust to whatever you actually see on screen.*

---

## Step 1 — Split the uploaded list into 3 groups (mentally or as tags)

You don't need 3 separate uploads — one uploaded company list is fine — but keep track of which companies fall into which group, since each gets a different title search:

**Group A — Standard PEOs (title ladder):** Justworks, TriNet, Insperity, ADP TotalSource, Paychex PEO, CoAdvantage, Vensure, ExtensisHR, G&A Partners, BBSI, PrestigePEO, Engage PEO, Questco *(13 companies — everything tagged "US PEO" except Nextep and Sequoia One)*

**Group B — Founder-led PEOs (CEO-first):** Nextep, Sequoia One *(Paul's own note: at these two, the CEO is often the only real door — don't burn enrichment credits on the general ladder here, go straight to CEO/Founder)*

**Group C — Standard EORs (title ladder):** Remote, Multiplier, Atlas HXM, WorkMotion, Horizons/Remote People, RemoFirst, Native Teams, Plane, Papaya Global, Safeguard Global *(everything tagged "Global EOR" except the 3 AI-native ones)*

**Group D — AI-native EORs (CPO, hold for later):** Velocity Global/Pebl, G-P, Borderless AI — these are already excluded from the active Top 10/20 test batch (per `STRUCTURAL-PEO-EOR-TARGET-LIST.md`), so skip enrichment on these for now unless you're deliberately expanding the batch. If you do activate them later, target CPO/Chief Product Officer specifically — and remember Paul's framing note: approach that persona around liability, not efficiency, since that's where builder-culture resistance lives.

---

## Step 2 — Run Pass 1: Group A (Standard PEO ladder)

In Seamless, open your uploaded company list, filter to just the Group A companies (or run against the whole list — the title filter will naturally return zero for non-matching companies), and set:

**Job Title (include — match any, OR logic so it auto-falls-back within one search):**
```
Chief Service Officer, Chief Client Officer, Chief Customer Officer, VP Client Services, VP Client Experience, Head of Client Services, Head of Client Experience, COO, Chief Operating Officer
```

This one list handles the fallback automatically — for a company with no Chief Service/Client/Customer Officer, Seamless will still surface whoever holds the VP/Head-of-Client-Experience title there, or COO if neither exists. You don't need three separate searches per company.

**Seniority:** leave broad (C-Suite, VP, Head) — since the company set is already curated, you don't need the tight seniority filter from the main 1,500-list build.

Run → reveal → export. Cap at 2 contacts per company if more than one person matches (e.g. both a VP Client Experience and a COO show up) — keep both as primary/backup.

---

## Step 3 — Run Pass 2: Group B (Nextep, Sequoia One — CEO-first)

Filter the uploaded list to just these 2 companies. Set:

**Job Title (include):**
```
CEO, Chief Executive Officer, Founder, Co-Founder
```

Run → reveal → export. Expect exactly 1 contact per company here — that's the point, per Paul's own note that CEO is often the only real door at founder-led shops. Don't over-invest enrichment effort trying to find a second contact underneath the CEO at these two.

---

## Step 4 — Run Pass 3: Group C (Standard EOR ladder)

Filter to the Group C companies. Set:

**Job Title (include):**
```
VP Customer Experience, VP Customer Success, Head of Customer Experience, Head of Customer Success, COO, Chief Operating Officer
```

Run → reveal → export. Same fallback logic as Pass 1 — one OR'd list, Seamless surfaces whichever title actually exists at each company.

---

## Step 5 — Combine, narrow to ONE contact per company, and QC

**Because the title filters in each pass are OR'd, a single company can return multiple matches** (e.g. a Chief Customer Officer, a COO, and a VP Client Experience all at once). To get to exactly one contact per company, apply a strict priority order and discard everything below the highest match at each company:

- **Groups A/C priority:** 1) Chief Service/Client/Customer Officer (PEO) or VP/Head of Customer Experience/Success (EOR) → 2) VP/Head of Client Services or Client Experience (PEO fallback) → 3) COO, lowest priority, only if nothing above exists.
- **Group B priority:** CEO over Co-Founder/Founder if the same person holds both; if two different people, keep the CEO.

Two ways to apply this:
1. **Fix it at the source:** run each tier as its own search, filtered each time to only the companies that got zero hits in the previous tier — this way no company ever collects more than one match.
2. **Clean up after the fact:** sort the export by company name, keep only the row matching the highest-priority tier per company, delete the rest.

1. Combine the pass exports into one sheet, then narrow per the rule above.
2. **Spot-check every remaining title against LinkedIn before this goes to a dialer** — with only ~25 companies in play, this is small enough to verify by hand, and Seamless data can be stale.
3. Confirm no domain overlap with `STRUCTURAL-SUPPRESSION-LIST.md` — already checked clean for all 29 companies on 2026-07-17, but re-check if your uploaded list has grown or changed since then.
4. Final target: exactly 1 contact per company — this is a precision batch, not a volume batch.

---

## Step 6 — Load and launch

Per what's already been told to Paul: load this into **both call and email**, as its own separate sequence — don't fold it into the main 1,500-list sequences, so results from this experiment stay readable on their own. Tag it clearly (e.g. "Structural Chat — PEO/EOR Experiment") so it's easy to pull performance on later without it muddying the main relaunch numbers.

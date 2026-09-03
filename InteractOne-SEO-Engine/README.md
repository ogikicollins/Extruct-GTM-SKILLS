# InteractOne eCommerce SEO — GTM Revenue Engine

Built by SELLL.io as a GTM Engineering deliverable.
Client: InteractOne, Inc. (Cincinnati, OH) · Service line: eCommerce SEO
Target page: https://interactone.com/services/search-engine-optimization/
Built: 2026-09-03 · Owner after handoff: InteractOne (Brian Dwyer)

Companion research (read first): `../COMPANY-RESEARCH.md`, `../INTERACTONE-SEO-GTM-STRATEGY.md`

---

## What this is

A complete, signal-triggered B2B outbound machine that finds B2B/industrial eCommerce companies losing organic traffic, sends them a personalized technical teardown, books audit calls, and converts audits into SEO retainers. It runs the same at 3 AM as 3 PM. After the 90-day build, InteractOne owns every list, template, workflow, and account.

It is tuned to one hard constraint from the research: **InteractOne is ~18 people.** The engine is throttled to generate 3-5 qualified opportunities/month, not 50. Volume knobs are documented; do not turn them up past delivery capacity.

---

## The engine

```
LAYER 1 · INTELLIGENCE   ICP, 3 personas, 6 pain hypotheses, competitor map     → 01-INTELLIGENCE.md
LAYER 2 · ACTIVATION     List queries, enrichment, tiering, contacts, emails     → 02-ACTIVATION.md
LAYER 3 · OUTREACH       Prompt template, 3 sequences, teardown script, infra    → 03-OUTREACH.md
LAYER 4 · PIPELINE       Lead scoring, reply routing, meeting booking, dossiers  → 04-PIPELINE.md
LAYER 5 · CLOSE          Audit-first close, nurture, proposal, objections, onboard→ 05-CLOSE.md
LAYER 6 · OPTIMIZE       Weekly report, feedback loops, hypothesis refinement    → 06-OPTIMIZE.md

AMPLIFIERS               Video teardown (core), founder LinkedIn, referral,      → 03-OUTREACH.md §7
                         multi-thread, re-engagement, cold call
TECH + AUTOMATION        Tools, API keys, 5 n8n workflows, monthly cost          → 07-TECH-STACK-AND-AUTOMATION.md
BUILD PLAN               Week-by-week, owners, blockers                          → 08-90-DAY-BUILD-PLAN.md
STATE                    Live status, pipeline counts, layer status             → engine-state.md
```

---

## How to run

**Mode A — Full build (now):** work 01 → 08 in order. Weeks 1-2 build Layers 1-2, weeks 3-4 launch Layer 3, week 5+ Layers 4-6 run continuously. See `08-90-DAY-BUILD-PLAN.md`.

**Mode B — Resume (ongoing):** open `engine-state.md`, read the layer status table, run whatever is due (daily: inbox + scoring; Thursday: signal monitor; Friday: revenue report).

**Mode C — Single layer:** jump to the layer file and run its checklist.

**Mode D — Triage:** deal stalling or campaign underperforming → jump to the relevant layer, act, log in `engine-state.md`.

---

## Non-negotiable principles

1. **Signal-triggered, not schedule-triggered.** Every send is anchored to a real event (replatform, traffic drop, new hire, core update). No "it's Tuesday" sends.
2. **The CTA is the teardown, never "a quick call."** A free 5-minute Loom showing 3 real issues + a traffic-gap dollar figure. The call is step two.
3. **Human-in-the-loop on irreversible actions.** The engine drafts every email and every proposal. A person sends. Nothing auto-fires to a prospect.
4. **Never say "eCommerce SEO agency."** Compete on "B2B/industrial large-catalog programmatic SEO + migration recovery" — a category with few credible names.
5. **Throttle to capacity.** If positive replies exceed ~8/week, slow sending.
6. **Source every claim.** Every signal has a source; every metric has a denominator; every proof point is a real InteractOne win.
7. **No em-dashes in any prospect-facing copy.** Plain text. One ask per email.

---

## Success definition (Day 90)

| Metric | Target |
|---|---|
| Contacts in campaign | 600-900 |
| Positive reply rate | 4-7% |
| Teardowns delivered | 40-60 |
| Audit calls held | 15-25 |
| Paid audits sold | 6-10 ($25-70K) |
| Retainers signed | 3-5 |
| New retainer MRR | $20-45K |
| Pipeline created | $300-600K annualized |

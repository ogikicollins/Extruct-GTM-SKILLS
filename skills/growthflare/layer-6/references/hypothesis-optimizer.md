# Hypothesis Optimizer — Technical Reference
> Component of: Layer 6 Optimize — Phase 2 (Monthly Deep Review)
> Updated: 2026-06-22

---

## Purpose

The hypothesis set is the most important intelligence asset in the engine. Each hypothesis represents a buying window — a specific moment when a B2B SaaS buyer is most likely to buy. The hypothesis optimizer tracks performance by hypothesis and makes automated decisions: keep running, refine, or retire.

The engine starts with 7 hypotheses (H1-H7). Over time, some retire. New ones are added. The active set stays lean — 4-6 hypotheses running at any time is optimal. More than that fragments attention.

---

## Hypothesis Performance Scoring

Each hypothesis gets a performance score every 30 days:

```
Hypothesis Performance Score (HPS) = 0 to 100

Components:
  Reply rate score (40%):    (actual reply %) / (benchmark 5%) × 40
  HOT conversion rate (30%): (HOT replies / total replies) × 30
  Meeting conversion (20%):  (meetings / HOT replies) × 20
  Close rate contribution (10%): (wins with this hypothesis / total wins) × 10

HPS thresholds:
  70-100: ACTIVE — keep running at full scale
  50-69:  REFINE — underperforming, try a variant or new angle
  30-49:  TEST — not pulling weight, limited to 20-contact test batches
  < 30:   RETIRE — pause, log learnings, archive sequence variant
```

---

## Hypothesis Performance Tracker

```markdown
HYPOTHESIS PERFORMANCE — Updated: [Date]
═══════════════════════════════════════════════════════════════════════════════════════

H5 — New VP Sales Window (Day 1-45)
  Status: ✅ ACTIVE (HPS: [score]) | Primary hypothesis
  Sends this month: [N] | Reply rate: [%] | HOT rate: [%] | Meetings: [N]
  Best variant: [VPSales_PostRaise_Compound] ([%] reply) | Worst: [VPSales_v1] ([%])
  Best urgency window: Day 1-15 ([%] reply) vs Day 16-30 ([%]) vs Day 31-45 ([%])
  Latest learning: [e.g., "Day 31-45 contacts reply 40% less than Day 1-15 — deprioritize"]
  Next action: [e.g., "Keep running. Increase Day 1-15 proportion of list to 60%"]

H1 — Post-Series A Window (Day 1-90 post-raise)
  Status: ✅ ACTIVE (HPS: [score]) | Best as compound with H5
  Sends this month: [N] | Reply rate: [%] | HOT rate: [%] | Meetings: [N]
  Best variant: [VPSales_PostRaise_Compound] | Compound H5+H1 vs H1 alone: [X]x better
  Latest learning: [e.g., "Standalone H1 underperforms H5+H1 by 3x — always compound"]
  Next action: [e.g., "Stop standalone H1 sends. H1 as compound modifier only"]

H4 — Sequencer Frustration
  Status: 🔄 REFINE (HPS: [score])
  Sends this month: [N] | Reply rate: [%] | HOT rate: [%] | Meetings: [N]
  Best persona: CRO ([%]) vs VP Sales ([%])
  Latest learning: [e.g., "H4 works best when we can reference a specific pain post — otherwise weak"]
  Next action: [e.g., "Only send H4 when LinkedIn pain post is confirmed. Drop generic H4"]

H7 — Competitor Frustration
  Status: ✅ ACTIVE (HPS: [score]) | Best as Displacement Injection
  Sends this month: [N] | Reply rate: [%] | HOT rate: [%] | Meetings: [N]
  Trigger source: LinkedIn posts (Belkins/Apollo/Outreach mentions)
  Latest learning: [e.g., "H7 as out-of-sequence injection outperforms H7 as Email 1 by 5x"]
  Next action: [e.g., "Only use H7 as Displacement Injection. Not as campaign opener"]

H2 — SDR Hiring Signal
  Status: 🧪 TEST (HPS: [score])
  Sends this month: [N] | Reply rate: [%] | HOT rate: [%] | Meetings: [N]
  Window: Job post < 14 days → fast signal decay
  Latest learning: [e.g., "H2 window too short — by the time list is built, signal is 3 weeks old"]
  Next action: [e.g., "Build real-time H2 alert: new SDR job post → immediate add to queue. Not batch"]

H3 — Founder Led Sales Ceiling
  Status: ❌ PAUSED (HPS: [score]) | Low volume, weak signal
  Sends this month: [N] | Reply rate: [%] | Meetings: [N]
  Latest learning: [e.g., "Founders don't respond to 'you're too busy' framing. Too aggressive"]
  Next action: [e.g., "Rework H3 angle: not 'you're doing too much' but 'what the next stage looks like'"]
  Reactivation criteria: HPS test ≥ 50 after new variant

H6 — Board/Investor Pressure
  Status: ❌ PAUSED (HPS: [score]) | Requires very specific trigger data not yet available
  Note: Revisit when board meeting schedules become detectable via signal monitoring
```

---

## Hypothesis Retirement Process

When a hypothesis drops below HPS 30 for 2 consecutive months:

```
Step 1: Final 20-contact test
  - New variant tried (different angle, different persona match)
  - 14-day measurement period

Step 2: Retire decision
  - If HPS still < 30: retire
  - If HPS recovers ≥ 50: restore to TEST status

Step 3: Archive
  - Sequence variant archived in sequences/archive/[H-code]-retired-[date].md
  - Hypothesis entry in hypothesis_set.md marked "RETIRED [date]" with reason
  - Institutional memory: why it failed, what was learned
  - Signal monitoring: keep watching for the hypothesis signal (might be seasonal)

Step 4: Learning capture
  - What did we learn about this buyer segment?
  - What angle failed and why?
  - Is there a different hypothesis that covers the same signal better?
  → Added to brain/institutional-memory/campaigns.md
```

---

## New Hypothesis Generation Protocol

When the quarterly review identifies a new buying window:

```
Step 1: Signal identification
  - What observable event creates urgency to buy?
  - How long is the window from signal to close?
  - Which persona does this affect?
  - How often does this signal occur? (volume check)

Step 2: Hypothesis specification
  H[N]: [Name]
  Signal: [What to detect]
  Detection method: [LinkedIn post / Crunchbase / job board / news]
  Window duration: [days]
  Urgency level: [CRITICAL / HIGH / MEDIUM]
  Primary persona: [P1/P2/P3]
  Best sequence variant: [existing / needs new variant]
  Compound potential: [does it stack with H5/H1?]
  Expected reply rate: [based on window freshness and persona fit]
  Proof point alignment: [which proof point maps to this signal]

Step 3: 20-contact test
  - Build 20-contact list matching new hypothesis signal
  - Run new or adapted sequence variant
  - Measure for 30 days

Step 4: Promotion decision
  - HPS ≥ 50 after test: promote to TEST status → full scale in 60 days
  - HPS < 50 after test: archive signal observation, do not proceed
```

---

## Hypothesis Compound Matrix

Tracks all confirmed compound combinations and their performance vs. standalone:

| Primary | + Compound | Reply Rate vs. Standalone | HOT Rate | Status |
|---------|-----------|--------------------------|---------|--------|
| H5 | + H1 | +[X]% | +[Y]% | ✅ Confirmed winner |
| H5 | + H7 | +[X]% | +[Y]% | ✅ Confirmed winner |
| H5 | + H1 + H7 | +[X]% | +[Y]% | ✅ TRIPLE COMPOUND |
| H1 | standalone | baseline | baseline | 🔄 Use as compound only |
| H4 | + LinkedIn pain post | +[X]% | +[Y]% | ✅ Add post detection |
| H2 | + Day 1-7 window | +[X]% | +[Y]% | 🧪 Testing |

Updated monthly when new compound combinations detected.

---

## Subject Line Performance Bank

The engine maintains a ranked subject line bank, updated weekly:

```
TOP 10 SUBJECT LINES (by open rate — rolling 30 days):

1. "Day [N] — [Company]"                    Open: [%] | Works for: H5, all personas
2. "saw your [topic] post — [Name]"          Open: [%] | Works for: H4, H7, post-detected
3. "what brought you to [Competitor] — [N]" Open: [%] | Works for: H7 displacement
4. "Week 2 and the [audit/challenge]"        Open: [%] | Works for: H5 PostReference
5. "[Client] went from [X] to [Y]"           Open: [%] | Works for: H1, social proof
6. "the [N]-SDR problem"                     Open: [%] | Works for: H4, larger teams
7. "what [N] months from now looks like"     Open: [%] | Works for: all (nurture)
8. "[Company name] + one specific signal"    Open: [%] | Works for: personalized
9. "the audit most [persona] skip"           Open: [%] | Works for: CRO, H4
10. "before you build the playbook"          Open: [%] | Works for: H5, H2

BOTTOM 5 (to replace — below 25% open):
1. "[topic] at [Company]"                   Open: [%] | Replace with: [suggestion]
...
```

Updated automatically by Layer 6 weekly run. Winning subjects added to sequences/spintax-engine.md automatically after Aaron approves.

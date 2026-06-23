---
name: SELLL-layer-6
description: >
  Layer 6 — Optimize. The intelligence flywheel that makes every layer smarter
  over time. Runs weekly optimization, monthly deep review, and quarterly
  strategy. Every win sharpens the ICP. Every loss strengthens the objection
  bank. Every campaign teaches the hypothesis set. Every client builds the
  proof library. The engine compounds — campaigns in month 6 outperform month 1
  by 3-5x because the brain gets smarter every week. Triggers on: "optimize",
  "weekly review", "optimize the engine", "what's working", "improve results",
  "layer 6", "intelligence flywheel", "engine upgrade", "hypothesis retire",
  "brain update".
---

# Layer 6 — Optimize: The Intelligence Flywheel
> Version: 1.0 | Built: 2026-06-22
> Receives from: All layers (every event is intelligence)
> Feeds into: All layers (every optimization improves all prior layers)
> Aaron's time per week: 30 minutes (Friday review)
> Automation level: 90% automated — Aaron reviews reports, approves updates

---

## The Compounding Effect

```
Month 1 campaign: hypothesis H5, VPSales_v1 — 2.1% reply rate
  ↓ Layer 6 learns: Day 22-31 contacts underperform Day 1-15 by 40%
  ↓ Layer 1 update: H5 scoring weights adjusted (Day 31-45 scored lower)
  ↓ Layer 2 update: Day 31-45 contacts deprioritized in Tier 1

Month 3 campaign: H5 optimized — 4.2% reply rate (+100%)
  ↓ Layer 6 learns: PostReference variant beats v1 by 38% for VP Sales
  ↓ Layer 2 update: LinkedIn post detection promoted to Phase 1 signal
  ↓ Layer 3 update: PostReference variant now default if post detected

Month 6 campaign: H5 fully optimized — 6.1% reply rate (+190% vs Month 1)

This is the flywheel. Every data point makes the next campaign better.
Without Layer 6, the engine plateaus at Month 1 performance. With it, it
compounds continuously.
```

---

## Layer 6 Architecture

```
WEEKLY:  Pull data → analyze → optimization actions → approve → implement
MONTHLY: Deep review → brain update → ICP refinement → copy winners propagation
QUARTERLY: Vertical expansion decision → new hypothesis generation → brain v.next
ONGOING: Intelligence collection from all layers → flywheel always running
```

---

## Intelligence Sources (What Layer 6 Reads)

| Source | Data | Feeds Into |
|--------|------|-----------|
| Layer 2 output (campaign CSVs) | Scoring distributions, enrichment patterns | ICP refinement |
| Layer 3 BIS data | What events correlate with HOT replies | BIS delta table optimization |
| Layer 3 reply data | Which email, which subject, which sequence → which reply type | Sequence optimization |
| Layer 4 DHS data | Which deal stage durations correlate with wins/losses | Proposal timing |
| Layer 4 call log | Which call scripts get connects | Call script optimization |
| Layer 5 win data | Client profile of won deals | ICP tightening |
| Layer 5 churn data | Client profile of churned/lost | ICP exclusion rules |
| Layer 5 CHS data | What predicts healthy vs. risky clients | Layer 4 deal scoring |
| Institutional memory | Win/loss patterns accumulated over time | All layers |
| LinkedIn content engagement | Which post types generate engagers | LEM optimization |

---

## Phase 1: Weekly Optimization Protocol

Every Friday. Takes 30 minutes total for Aaron.

### Step 1A — Weekly Pull (Auto, 06:00 UTC Friday)

```
n8n workflow: selllo-weekly-optimization

Data pull (with failure fallback — each source is independent):
  1. Instantly API: campaign metrics for all active campaigns (last 7 days)
     → On API failure: section = "[data unavailable — Instantly unreachable]"
  2. HubSpot API: deal activity, stage changes, wins/losses
     → On API failure: section = "[data unavailable — HubSpot unreachable]"
  3. Expandi API: LinkedIn engagement rates
     → On API failure: section = "[data unavailable — Expandi unreachable]"
  4. clients.md: CHS updates (local file — always available)
  5. call-log.md: call outcomes this week (local file — always available)
  6. engine/referrals.md: referrals received / asks sent (local file — always available)

  Failure handling: if any API call returns an error or timeout > 10s:
    → Log the failure in the report section header
    → Continue with all other sources (never abort the full pull for one API failure)
    → Add to report footer: "⚠️ Data gaps this week: [list of unavailable sources]"

Claude API analysis prompt (system instruction when any section is unavailable):
  "If any data section shows [data unavailable], analyze only available data.
   Explicitly note the gap in the relevant section header.
   Do not draw conclusions from missing sections or extrapolate from prior weeks
   to fill gaps — report what is known and flag what is not."

Claude API analysis prompt:
  SYSTEM: You are analyzing GTM performance for SELLL.io's SELLL
          Revenue Engine. Generate a weekly optimization report that tells
          Aaron exactly what to do differently next week. Be specific —
          reference exact subject lines, exact sequences, exact hypotheses.
          Do not pad. Every sentence must be load-bearing.

  USER:   [All data assembled by n8n — campaign metrics, deal data, call data]
          [Previous report for trend comparison]

Output: Weekly optimization report → engine/reports/[date]-weekly-report.md
        Delivered to Slack #selllo-pipeline
```

### Step 1B — Weekly Report Structure

```
WEEKLY OPTIMIZATION REPORT — [Date]
══════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY (3 lines):
  → Outreach: [N sent] | [%] open | [%] reply | [N] positive | [N] HOT
  → Pipeline: [N] meetings | [N] proposals | [$N] weighted | [N] deals won
  → Trend vs. last week: [metric deltas with ↑↓ arrows]

═══════════════════════════════════════════════════════════════════════

SECTION 1: CAMPAIGN PERFORMANCE

Hypothesis Performance:
  H5 (New VP Sales):   [N sent] | [%] open | [%] reply | Verdict: ✅/🔄/❌
  H1 (Post-Raise):     [N sent] | [%] open | [%] reply | Verdict: ✅/🔄/❌
  H4 (Sequencer Frust):[N sent] | [%] open | [%] reply | Verdict: ✅/🔄/❌
  [etc for active hypotheses]

Sequence Variant Performance:
  VPSales_PostRaise_Compound: [N] | [%] reply — BEST performer this week
  VPSales_v1:                 [N] | [%] reply
  VPSales_PostReference:      [N] | [%] reply
  [etc]

Subject Line Performance (top 5 and bottom 5):
  ✅ BEST:  "[subject]" — [N%] open | from [sequence/hypothesis]
  ✅ BEST:  "[subject]" — [N%] open
  ...
  ❌ WORST: "[subject]" — [N%] open | ACTION: replace with [suggestion]
  ❌ WORST: "[subject]" — [N%] open

Email Performance by Number:
  Email 1: [%] open, [%] reply (industry: 15%, target: 35-55%)
  Email 2: [%] open, [%] reply
  Email 3: [%] open, [%] reply
  ...

BIS Correlations (any pattern this week?):
  [N] contacts crossed BIS 70+ → [N] replied ([%] conversion from 70+)
  [N] Ghost Positives fired → [N] replied post-GP ([%] conversion)
  CED accounts: [N] → meetings [N] ([%] conversion from CED)

═══════════════════════════════════════════════════════════════════════

SECTION 2: PIPELINE HEALTH

  [Pipeline forecast from Layer 4 — embedded here]

  Won this week:      [N] | $[N] ACV
  Lost this week:     [N] | $[N] ACV | Reasons: [from losses.md]
  Stalled (7+ days):  [N] | [Names] | DHS: [scores]

═══════════════════════════════════════════════════════════════════════

SECTION 3: SIGNAL INTELLIGENCE

  New signals this week: [N accounts detected with new trigger]
  Signal queue: [current state of signal-queue.md]
  Re-engagement triggers: [any NOT_NOW accounts hit their trigger date?]
  LinkedIn content: [best post this week — engagement rate + engagers identified]

═══════════════════════════════════════════════════════════════════════

SECTION 4: CLIENT HEALTH

  Active clients: [N]
  CHS distribution: 🟢 [N] | 🟡 [N] | 🔴 [N]
  Expansion opportunities flagged: [N]
  Referrals asked this week: [N] | Referrals received: [N]

═══════════════════════════════════════════════════════════════════════

SECTION 5: NEXT WEEK ACTIONS (most important section)

  MUST DO:
  1. [Action] — [Specific data behind it]
     e.g.: "Replace Email 3 VPSales_v1 subject line — 14% open vs. 48% benchmark.
            Proposed: 'what month 3 looks like at [Company]'"
  2. [Action] — [Data]

  TEST:
  1. [A/B test to run next week] — [Test design + how to measure]
     e.g.: "Test compound subject line vs. single signal — run H5 PostRaise_Compound
            with and without raise amount in subject. 20 contacts each. Measure: open rate."

  STOP:
  1. [What to pause and why]
     e.g.: "Pause H4 CRO_v1 — 0.6% reply after 45 sends. Below 1% threshold."

  SCALE:
  1. [What's working well — do more of it]
     e.g.: "Scale VPSales_PostReference — 7.2% reply. Add 30 more H5 Day 1-15 contacts."

  NEW SIGNALS:
  [N] accounts to add to next campaign (from signal queue)
══════════════════════════════════════════════════════════════════════
```

### Step 1C — Aaron's Friday 30-Minute Protocol

```
06:00 UTC: n8n sends report to Slack
08:00-08:30 Aaron's timezone: Friday optimization window

Aaron's actions:
  □ Read executive summary (2 min)
  □ Review MUST DO actions — approve or modify (5 min)
  □ Review TEST actions — approve A/B tests for next week (3 min)
  □ Review STOP actions — approve hypothesis pauses (2 min)
  □ Review SCALE actions — approve volume increases (2 min)
  □ Approve any brain updates flagged (10 min)
  □ Reply to Slack with: "Approved / approved except [X] / [change]" (1 min)

n8n receives Aaron's approval:
  → Implements approved changes automatically
  → Updates hypothesis performance scores
  → Updates subject line bank
  → Queues A/B test
  → Updates engine/state.md weekly summary row

STEP 4 — BRAIN FILE UPDATES (CRITICAL — this is what makes intelligence permanent):

Approving in Slack is NOT sufficient. n8n implements tracking changes (scores, queues,
test schedules) automatically, but actual brain file content — ICP criteria, hypothesis
scoring, voc-library entries, proof points, objection counters — must be edited in the
files themselves.

After replying "Approved" in Slack, open Claude Code and execute each approved brain update:

  For each "brain update" item from the report:
    → Identify the exact file and section to change (report specifies this)
    → Use Claude Code Edit tool to make the targeted change
    → Changes that require brain file updates (common examples):
         - Hypothesis window tightened (H5 Day 1-15 only) → hypothesis_set.md
         - New buyer phrase added → voc-library.md
         - New objection counter → objection-bank.md
         - ICP tighter (H1 window 60d not 90d) → IDEAL-CUSTOMER-PROFILE.md
         - Subject line promoted to spintax pool → spintax-engine.md
         - Proof point confirmed + updated → proof-library.md

  Time budget for brain file updates: included in the 10 min "Approve brain updates" slot.

  After all edits complete: run `git add -A && git commit` to preserve the brain state.
  The intelligence is only as permanent as the last commit.
```

---

## Phase 2: Monthly Deep Review

First Friday of each month. Takes 60-90 minutes for Aaron.

### Step 2A — Monthly Intelligence Pull

```
n8n workflow: selllo-monthly-review (runs monthly Day 1 06:00 UTC)

Data pull extends weekly pull to include:
  - 30-day trend vs. prior 30-day period
  - All wins and losses for the month
  - Hypothesis performance across full month (not just week)
  - ICP accuracy: were scored Tier 1 leads actually Tier 1?
  - Brain file usage: which proof points got used vs. which didn't
  - Subject line winners: top 10 by open rate for the month
  - Reply classification distribution: HOT/WARM/NOT_NOW/HARD_NO breakdown
```

### Step 2B — Monthly Brain Upgrade

```
Every month, at least 2 brain files should be updated based on new data.

Brain update triggers:
  - New proof point: any new client reaches Day 90 → proof-library.md updated
  - Objection pattern: same objection appeared 3+ times → objection-bank.md updated
  - Subject line winner: a subject line beats benchmark by 30%+ → add to winning bank
  - Buyer language: reply text contains new phrasing → voc-library.md updated
  - Competitor intel: competitor mentioned in 2+ deals → competitive-battlecards.md updated
  - Discovery pattern: same question/answer pattern on 3+ calls → discovery-framework.md updated

Monthly brain update prompt (Claude API):
  Input: 30-day aggregated data from all sources
  Output: "Brain Update Memo" — what to add/update/remove in each brain file
  Aaron reviews → approves → n8n implements (or Aaron implements manually for nuanced changes)
```

### Step 2C — ICP Refinement

```
Monthly ICP accuracy check:
  Take all leads scored in the last 30 days:
    □ How many Tier 1 Priority contacts replied? (target: 5-8%)
    □ How many Tier 1 Standard replied? (target: 3-5%)
    □ How many Tier 2 replied? (target: 1-2%)
    □ What do the HOT accounts have in common that standard replies don't?
    □ What do the HARD_NO accounts have in common?

  Adjustments:
    If Tier 2 reply rate is > 3%: consider moving some criteria to Tier 1
    If Tier 1 HOT-converters share a specific trait: add to gate criteria
    If a disqualifier from Gate 0B is causing false positives: adjust threshold
    If a new signal correlates strongly with HOT replies: add to hypothesis set

  ICP update log in: IDEAL-CUSTOMER-PROFILE.md (append, never overwrite)
```

### Step 2D — Copy Testing Results Propagation

```
Each A/B test approved in weekly optimization generates data.
Monthly: aggregate all A/B test results:

  For each test:
    Winner: subject line / email body / CTA variation that won
    Loser: retired
    Confidence: [% open/reply delta + sample size]

  Winners propagated to:
    - Active sequences (replace underperforming versions)
    - Spintax engine: add winner to spintax pool (sequences/spintax-engine.md)
    - Brain file: subject line bank (if open rate > 50%)
    - New campaign templates: future campaigns default to winner
```

---

## Phase 3: Quarterly Strategy Review

Every 90 days. 60-90 minute session with Aaron.

### Step 3A — Quarterly Intelligence Report

```
n8n generates quarterly report:
  - Revenue generated (total ACV × close rate)
  - Pipeline generated (weighted forecast)
  - Hypothesis performance ranking: best to worst over 90 days
  - Vertical performance: which verticals have best reply rates + close rates
  - ICP accuracy over time: is the scoring model improving?
  - Team leverage ratio: deals managed per hour of Aaron's time
  - System health: all KPIs vs. SELLL targets

Delivered: first Monday of each quarter
```

### Step 3B — Vertical Expansion Decision

```
After first 90 days, evaluate vertical expansion:

Criteria for expanding to a new vertical:
  □ Current primary vertical (fintech/data/martech) reply rate: ≥ 4%?
  □ At least 1 closed win in primary vertical?
  □ Brain has at least 1 proof point in target vertical?
  □ At least 1 hypothesis maps to target vertical (H5 is universal)?
  □ New vertical has clear signal sources (LinkedIn job posts, funding data)?

Decision matrix:
  All 5 criteria: ✅ → Expand to new vertical
  3-4 criteria: 🔄 → Build 1 proof point in new vertical first, then expand
  < 3 criteria: ❌ → Deepen current vertical, revisit in 90 days

Expansion process:
  1. Brain update: add vertical file (brain/verticals/[new-vertical].md)
  2. ICP adjustment: add vertical-specific criteria
  3. Hypothesis set: confirm which H1-H7 apply to new vertical
  4. First 20-contact campaign in new vertical
  5. Report results at 30 days
```

### Step 3C — New Hypothesis Generation

```
Every quarter: evaluate if a new hypothesis (H8, H9, etc.) is needed.

Hypothesis generation criteria:
  - 3+ deals closed with a new buying signal pattern not in H1-H7
  - New market event creates a universal buying window (e.g., new regulation, platform shutdown)
  - Client requests suggest a new signal category

New hypothesis format (from hypothesis-building skill):
  H[N]: [Name]
  Signal: [What to detect]
  Window: [How long the signal is fresh]
  Urgency: [CRITICAL/HIGH/MEDIUM]
  Persona alignment: [which persona]
  Sequence variant: [new variant needed or existing variant works]
  Test plan: [20-contact test before full deployment]
```

---

## Phase 4: The Full Intelligence Flywheel

How every layer feeds every other layer, creating compounding returns.

```
THE SELLL INTELLIGENCE FLYWHEEL

L1 Intelligence  ←──────────────────── L6 Optimize
    │                                        ↑
    │ Hypothesis set                         │ Win/loss patterns
    │ ICP + scoring weights                  │ ICP refinement
    │ Proof library                          │ Brain updates
    ↓                                        │
L2 Activation  ──────────────────────── → L5 Close + Expand
    │                                        ↑
    │ Scored contact list                    │ New client proof points
    │ 62-column campaign CSV                 │ Referral leads skip L2-L3
    │ Tier 1/2 assignment                    │ Client win patterns
    ↓                                        │
L3 Campaign Execution ────────────────── → L4 Pipeline
    │                                        ↑
    │ HOT/MEETING_REQUEST                    │ DHS history
    │ BIS data                               │ Deal stage velocity data
    │ Ghost Positive data                    │ Proposal open rates
    │ CED data                               │ Call outcomes
    ↓                                        │
    └──────────────────── L6 Optimize ───────┘

Each loop:
  L3 data → L6 analyzes → L1 updated → L2 builds better list → L3 better results
  L4 data → L6 analyzes → L3 updated → better replies → L4 stronger pipeline
  L5 data → L6 analyzes → L1 updated → new proof points → L2/L3/L4 better conversion
```

### Flywheel Feedback Loops (Specific)

```
LOOP 1: Campaign → ICP (Monthly)
  L3 HOT replies + L4 wins → Which contacts became customers?
  → Extract shared ICP attributes → Update IDEAL-CUSTOMER-PROFILE.md
  → L2 now scores based on proven-buyer attributes, not assumptions

LOOP 2: Email Data → Sequence (Weekly)
  L3 open/reply data → Which subject lines and hooks get replies?
  → Update sequences with winner subject lines + openers
  → L3 next campaign uses better copy from day 1

LOOP 3: Discovery Data → Proof (Per win)
  L4 discovery call notes → What pain did the buyer confirm?
  L5 client results → What outcome was delivered?
  → Update brain/proof-library.md with specific, verified proof point
  → L3 sequences use better proof from next campaign

LOOP 4: Objections → Counter (Monthly)
  L4 sales calls → What objections appear most often?
  → Update brain/objection-bank.md with new counters
  → L4 close sequences pre-empt objections more effectively

LOOP 5: Reply Language → VOC (Per HOT)
  L3 HOT replies → What language do buyers use when they're interested?
  → Update brain/voc-library.md with new buyer phrases
  → L3 email copy adopts buyer language in Email 2/3/4

LOOP 6: Win Data → Lookalike (Per win)
  L5 closed client → What does this company look like?
  → Build lookalike seed list in Layer 2
  → L2 targets more companies that look like this client

LOOP 7: Call Data → Timing (Monthly)
  L4 cold-call skill → What times have best connect rates?
  → Update cold-call skill with optimal call windows
  → L4 call queue re-orders by time-of-day success data

LOOP 8: Hypothesis Data → Scoring (Monthly)
  L3 performance by hypothesis → Which H scores have best reply rates?
  → Adjust Layer 2 compound bonus weights
  → L2 scores double-compound H5+H1 higher based on proven performance
```

---

## Phase 5: Amplifier Optimization

Layer 6 also optimizes the three amplifiers.

### Cold Call Optimization

```
Weekly from call-log.md:
  - Connect rate by time of day → update optimal call windows
  - Connect rate by company size → refine which Tier 1 contacts to call
  - Conversion rate by script variant → promote winners, retire losers
  - Voicemail callback rate → optimize voicemail script

Monthly update: skills/selll/cold-call/SKILL.md → call times + script ranking
```

### LinkedIn Content Optimization

```
Weekly from linkedin-content + post-engagers:
  - Post engagement rate by type (Case Study / Insight / Framework)
  - Engager → DM conversion rate by post type
  - Engager to ICP match rate
  - Best posting time for Aaron's audience

Monthly update: brain/linkedin-content-calendar.md → next month's posts
  promote: post types with highest engager conversion rate
  retire: post types with < 2% engagement OR < 10% engager-to-ICP match
```

### Referral Engine Optimization

```
Monthly from referrals.md:
  - Ask → referral give rate (target: 30-50%)
  - Referral → meeting rate (target: 60-80%)
  - Referral → close rate (target: 30-50%)
  - Best ask type by client profile
  - Best timing (Day 45 vs. Day 90 vs. post-results)

Monthly update: skills/selll/referral-engine/SKILL.md → timing + ask type ranking
```

---

## Phase 6: Engine Version Control

Every major update gets a version bump. This prevents regression.

```
Brain version tracking (in brain/BRAIN.md):
  v1.0: Initial build (June 2026)
  v2.0: Einstein upgrade (June 2026)
  v2.1: [First quarterly optimization — September 2026]
  v3.0: [Major overhaul when new vertical added]

What triggers a version bump:
  Minor (v2.1, v2.2): monthly brain update — proof point, subject line, objection
  Major (v3.0): new vertical added, new hypothesis category, or complete ICP revision
  Emergency (v2.1e): critical deliverability issue or major sequence failure

Version notes in engine/state.md:
  "Brain v2.1 — 2026-09-01: H5 scoring weights adjusted, Email 3 PostReference
   subject line updated, Stefan Golz proof confirmed and added verbatim"
```

---

## Layer 6 Automation Map

| What | Automated | Aaron Does |
|------|-----------|-----------|
| Weekly metrics pull | ✅ Fully auto | Nothing |
| Weekly optimization report | ✅ Claude generates | Review + approve actions |
| A/B test design | ✅ Claude designs | Approve + confirm test parameters |
| Copy winner propagation | ✅ Auto on approval | Approve |
| Monthly brain update memo | ✅ Claude generates | Approve + implement nuanced changes |
| ICP refinement | ✅ Claude analyzes | Review + approve adjustments |
| Vertical expansion analysis | ✅ Claude generates | Make the strategic decision |
| New hypothesis generation | ✅ Claude drafts | Test plan approval |
| Quarterly strategy report | ✅ Claude generates | Review + strategic input |
| Flywheel feedback loops | ✅ n8n orchestrates | Nothing |

---

## n8n Workflows (Layer 6)

| Workflow | Trigger | Actions |
|----------|---------|---------|
| `selllo-weekly-optimization` | Every Friday 06:00 UTC | Pull all data, Claude analysis, report to Slack |
| `selllo-monthly-review` | First Friday each month | Deep pull, brain update memo, ICP accuracy |
| `selllo-quarterly-strategy` | First Monday each quarter | Full intelligence report, expansion analysis |
| `selllo-ab-test-result` | 7 days after A/B test starts | Compare variants, declare winner, propagate |
| `selllo-flywheel-loop` | On each HOT reply, win, loss, discovery | Extract intelligence, update relevant brain files |
| `selllo-brain-version` | On major brain update | Bump version, log in BRAIN.md + state.md |

---

## KPI Benchmark Evolution

Layer 6 tracks whether benchmarks are being achieved — and tightens them as the engine matures:

| Metric | Month 1 Target | Month 3 Target | Month 6 Target | Month 12 Target |
|--------|---------------|---------------|----------------|----------------|
| Email reply rate | 2-3% | 3-5% | 4-6% | 5-8% |
| HOT reply rate | 20-30% of replies | 30-40% | 35-45% | 40-50% |
| Reply → meeting | 30-40% | 40-50% | 45-55% | 50-60% |
| Meeting → opportunity | 30% | 35% | 40% | 45% |
| Opportunity → close | 20% | 25% | 30% | 35% |
| Days cold → close | 90-120 | 75-90 | 60-75 | 45-60 |
| Pipeline coverage | 2x | 3x | 4x | 5x |
| Referral % of pipeline | 0% | 10% | 20% | 30% |

Benchmarks logged weekly in engine/reports. Layer 6 compares actuals vs. evolving targets.

---

## Layer 6 Run Log

| Date | Report | Key Insight | Actions Taken | Brain Version |
|------|--------|------------|---------------|--------------|
| (awaiting first campaign) | — | — | — | v2.0 |

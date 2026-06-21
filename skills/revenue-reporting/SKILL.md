---
name: revenue-reporting
description: >
  Generate the weekly revenue report: campaign performance, pipeline health,
  meetings booked, deals by stage, revenue forecast, and hypothesis-level
  analysis. Reads from the engine state, sequencer API, and deals tracker.
  Layer 6 of the Revenue Engine. Triggers on: "revenue report", "pipeline
  report", "weekly report", "how is the campaign doing", "campaign
  performance", "pipeline health", "forecast revenue", "show me the numbers",
  "GTM report", "outbound metrics", "what's our pipeline worth".
---

# Revenue Reporting

Every Friday, the engine generates a complete revenue report — campaign performance, pipeline health, meeting velocity, deal stage analysis, and a 90-day revenue forecast. This is the command center view of the entire revenue operation.

## When to Use

- Weekly (Friday cadence) as part of Layer 6 optimization
- After any campaign has been running for 7+ days
- When the user wants to understand campaign ROI or pipeline health
- Before a board or investor meeting that covers revenue/pipeline
- After running `context-building` in feedback loop mode, to validate the update

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Campaign metrics | Sequencer API (Instantly or other) | yes |
| Engine state file | `claude-code-gtm/engine/state.md` | yes |
| Lead scores | `claude-code-gtm/engine/lead-scores.csv` | yes |
| Meetings log | `claude-code-gtm/engine/meetings-log.md` | yes |
| Deal tracker | `claude-code-gtm/engine/deals.md` | yes |
| Context file | `claude-code-gtm/context/{company}_context.md` | yes |
| Previous report | `claude-code-gtm/reports/{last-date}-revenue-report.md` | recommended |

---

## Report Structure

### Section 1: Executive Summary (3 bullets)

Three numbers that tell the full story of the week:

```
→ Outreach: [N emails sent] | [N% open rate] | [N% reply rate] | [N positive replies]
→ Pipeline: [N meetings booked] | [N deals in active stage] | [$N estimated pipeline value]
→ Trend: [Up/Flat/Down vs. last week] | [Top performing hypothesis] | [Biggest blocker this week]
```

### Section 2: Campaign Performance

Pull from sequencer API. Build a table per active campaign:

```markdown
## Campaign Performance

| Campaign | Sent | Opens | Open % | Replies | Reply % | Pos. Replies | Mtgs Booked |
|----------|------|-------|--------|---------|---------|-------------|-------------|
| [Name]   | N    | N     | N%     | N       | N%      | N           | N           |

**Industry benchmarks (for context):**
- Average cold email open rate: 25–35%
- Average cold email reply rate: 0.5–2%
- Growthflare target: 3–5% reply rate, ≥ 30% positive reply rate
```

**Hypothesis Performance Table:**

Break down reply rates by which hypothesis angle was used in the email (requires hypothesis field in the email CSV):

```markdown
| Hypothesis | Emails Sent | Reply Rate | Pos. Reply Rate | Verdict |
|------------|-------------|-----------|----------------|---------|
| #1 [name]  | N           | N%        | N%             | ✅ Active |
| #2 [name]  | N           | N%        | N%             | 🔄 Refine |
| #3 [name]  | N           | N%        | N%             | ❌ Retire |
```

Verdicts:
- ✅ **Active**: Reply rate ≥ 3% AND positive reply rate ≥ 30% — keep running
- 🔄 **Refine**: Reply rate 1–3% OR positive rate 15–30% — adjust messaging, retest
- ❌ **Retire**: Reply rate < 1% OR positive rate < 15% after 50+ sends — pause and replace

**Persona Performance Table:**

Break down performance by persona (CRO / Founder / VP Sales):

```markdown
| Persona         | Emails Sent | Reply Rate | Mtgs Booked | Best Subject Line |
|-----------------|-------------|-----------|-------------|-------------------|
| CRO / VP Sales  | N           | N%        | N           | "[subject]"       |
| Scaling Founder | N           | N%        | N           | "[subject]"       |
| New VP Sales    | N           | N%        | N           | "[subject]"       |
```

**Subject Line A/B Test Results:**

```markdown
| Subject A | Subject B | Winner | Open Rate Δ |
|-----------|-----------|--------|-------------|
| [text]    | [text]    | A/B    | +N%         |
```

### Section 3: Pipeline Health

Read from `lead-scores.csv` and `state.md`:

```markdown
## Pipeline Health

| Stage          | Count | Avg Score | % of Total |
|----------------|-------|-----------|-----------|
| 🔴 HOT (80+)   | N     | N         | N%        |
| 🟠 WARM (60–79)| N     | N         | N%        |
| 🟡 ACTIVE      | N     | N         | N%        |
| 🔵 COOL        | N     | N         | N%        |
| ❌ Suppressed  | N     | -         | N%        |

**Pipeline Velocity:** [N new accounts entered pipeline this week] | [N accounts exited (won/lost/suppressed)]

**Leakage Points:**
- [Stage with highest drop-off]
- [Most common exit reason]
```

### Section 4: Meeting Velocity

Read from `meetings-log.md`:

```markdown
## Meeting Velocity

| Metric                        | This Week | Last Week | Trend |
|-------------------------------|-----------|-----------|-------|
| Meetings booked               | N         | N         | ↑/↓/→ |
| Reply-to-meeting rate         | N%        | N%        | ↑/↓/→ |
| Avg time reply → meeting booked| Nh        | Nh        | ↑/↓/→ |
| Pre-call dossiers delivered   | N         | N         | ✅/⚠️ |

**This Week's Meetings:**
| Company | Contact | Date | Stage | Outcome |
|---------|---------|------|-------|---------|
| [Name]  | [Name]  | date | disco | [pending/progressed/stalled/lost] |
```

### Section 5: Deal Stage Analysis

Read from `deals.md`:

```markdown
## Active Deals

| Company | Contact | Stage | Value (est) | Last Touch | Days Since Touch | Next Action |
|---------|---------|-------|-------------|-----------|-----------------|-------------|
| [Name]  | [Name]  | Eval  | $N          | date      | N days          | [action]    |

**Deals Requiring Immediate Attention:**
[Deals with 7+ days since last touch — flagged for urgent follow-up]

**Win/Loss This Week:**
- Won: [Company] — $N — [winning reason]
- Lost: [Company] — $N — [losing reason / objection]
```

### Section 6: Revenue Forecast

```markdown
## 90-Day Revenue Forecast

**Pipeline to Revenue Model:**

| Stage       | Count | Avg Value | Close Rate | Weighted Value |
|-------------|-------|-----------|-----------|---------------|
| HOT/Warm    | N     | $N        | 40%       | $N            |
| Evaluation  | N     | $N        | 25%       | $N            |
| Proposal    | N     | $N        | 50%       | $N            |
| Close       | N     | $N        | 80%       | $N            |
| **Total**   |       |           |           | **$N**        |

**Monthly Projection:**
- Month 1 (July): $N (deals in Close + some Proposal)
- Month 2 (Aug): $N (deals in Evaluation closing)
- Month 3 (Sept): $N (new pipeline from current campaigns)

**CAC Estimate:**
- Campaign spend this month: $N (sequencer + prospecting tools + time allocation)
- Meetings booked: N
- Cost per meeting: $N
- Deals expected from current pipeline: N
- Estimated CAC: $N
```

### Section 7: Optimization Actions

The most important section — what to DO differently next week:

```markdown
## Optimization Actions for Next Week

**Must Do:**
1. [Action] — [Why: data that supports it]
2. [Action] — [Why]

**Test:**
1. [Hypothesis to test] — [Test design: change X, measure Y on Z sends]

**Stop:**
1. [Hypothesis or approach to pause] — [Why: data that shows it's underperforming]

**Signal Queue:**
[N new accounts flagged by signal-monitor this week — run through Layer 2 (activation)]
```

---

## Workflow

### Step 1: Pull campaign data

Fetch from sequencer API. For Instantly:

```
GET /analytics/campaigns
```

Iterate over all active campaign IDs. Pull per-campaign and per-lead metrics. Compute rates server-side using sent/opened/replied counts.

### Step 2: Read state files

Load:
- `claude-code-gtm/engine/state.md` — pipeline counts
- `claude-code-gtm/engine/lead-scores.csv` — score distribution
- `claude-code-gtm/engine/meetings-log.md` — meeting velocity
- `claude-code-gtm/engine/deals.md` — deal stages and values
- Previous report (if exists) — for trend comparisons

### Step 3: Compute all metrics

Run calculations for each section. Flag any metric that:
- Is more than 50% below the Growthflare benchmark
- Changed by more than 30% week-over-week (positive or negative)
- Indicates a data quality issue (e.g., 0% open rate = deliverability problem)

### Step 4: Generate the report

Write the full report to:

```
claude-code-gtm/reports/{YYYY-MM-DD}-revenue-report.md
```

### Step 5: Present the summary

Present the Executive Summary (Section 1) inline. Ask the user if they want the full report or a specific section.

### Step 6: Trigger optimization actions

Based on the Optimization Actions section:
- Queue hypothesis refinements for `hypothesis-building` (refine mode)
- Queue context file update for `context-building` (feedback loop mode)
- Queue new signal targets for `signal-monitor`
- Flag deals needing urgent follow-up for `deal-nurture`

---

## Key Metrics Reference

| Metric | Growthflare Target | Industry Average |
|--------|-------------------|-----------------|
| Email open rate | 35–55% | 20–30% |
| Email reply rate | 3–5% | 0.5–1% |
| Positive reply rate | ≥ 30% of replies | 15–20% of replies |
| Reply-to-meeting rate | 40–60% | 20–30% |
| Meeting-to-opportunity rate | 30–50% | 20–35% |
| Opportunity-to-close rate | 25–40% | 15–25% |
| Time reply → meeting booked | < 2 hours | 24–48 hours |
| Pipeline coverage ratio | 3–5x quota | 2–3x |

---

## Deliverability Warning System

If any of these flags appear, surface them immediately:

```
🚨 DELIVERABILITY ALERT
- Open rate < 15% → likely spam folder or blacklisted sending domain
- Bounce rate > 3% → email list quality issue or verification failure
- Reply rate 0% after 50+ sends → message or targeting problem, not a deliverability issue
- Sudden drop in open rate (> 50% WoW) → domain reputation issue
```

Recommended action: pause campaign, warm sending domains, run email verification on list.

## Output Files

```
claude-code-gtm/reports/{date}-revenue-report.md   — full weekly report
claude-code-gtm/engine/state.md                    — updated with report summary
```

---
name: SELLL-revenue-reporting
description: >
  Generate the weekly revenue report: campaign performance by hypothesis and
  persona, pipeline health, meeting velocity, deal stage analysis, 90-day
  revenue forecast, and optimization actions for next week. Layer 6 of the
  SELLL Revenue Engine. Triggers on: "revenue report", "pipeline report",
  "weekly report", "how is the campaign doing", "campaign performance",
  "pipeline health", "forecast revenue", "show me the numbers", "GTM report",
  "outbound metrics", "what's our pipeline worth", "weekly numbers".
---

# Revenue Reporting

Every Friday the engine generates a complete revenue report. This is the command-center view of the entire operation — not a vanity metrics dashboard, but a decision-making tool that tells you exactly what to do differently next week.

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Campaign metrics | Sequencer API | yes |
| Engine state | `claude-code-gtm/engine/state.md` | yes |
| Lead scores | `claude-code-gtm/engine/lead-scores.csv` | yes |
| Meetings log | `claude-code-gtm/engine/meetings-log.md` | yes |
| Deal tracker | `claude-code-gtm/engine/deals.md` | yes |
| Context file | `claude-code-gtm/context/{company}_context.md` | yes |
| Previous report | `claude-code-gtm/reports/{last-date}-revenue-report.md` | for trend comparisons |

---

## Report Structure

### Section 1: Executive Summary

Three lines that tell the full story of the week:

```
→ Outreach: [N sent] | [N% open] | [N% reply] | [N positive replies]
→ Pipeline: [N meetings booked] | [N deals active] | [$N estimated value]
→ Trend: [↑↓→ vs. last week] | [Top hypothesis] | [Biggest blocker]
```

### Section 2: Campaign Performance

Per-campaign metrics table:

```markdown
| Campaign | Sent | Opens | Open % | Replies | Reply % | Pos. Replies | Mtgs |
|----------|------|-------|--------|---------|---------|-------------|------|
| [Name]   | N    | N     | N%     | N       | N%      | N           | N    |
```

**Benchmark line:**
- SELLL targets: 35–55% open | 3–5% reply | ≥ 30% positive of replies
- Industry average: 20–30% open | 0.5–1% reply

**Hypothesis performance:**

```markdown
| Hypothesis     | Sent | Reply % | Pos. Reply % | Verdict   |
|----------------|------|---------|--------------|-----------|
| #1 [name]      | N    | N%      | N%           | ✅ Active  |
| #2 [name]      | N    | N%      | N%           | 🔄 Refine  |
| #3 [name]      | N    | N%      | N%           | ❌ Retire  |
```

Verdicts: ✅ Active (reply ≥ 3%, pos ≥ 30%) | 🔄 Refine (reply 1–3%) | ❌ Retire (reply < 1% after 50+ sends)

**Persona performance:**

```markdown
| Persona         | Sent | Reply % | Mtgs | Best Subject Line |
|-----------------|------|---------|------|-------------------|
| CRO / VP Sales  | N    | N%      | N    | "[line]"          |
| Scaling Founder | N    | N%      | N    | "[line]"          |
| New VP Sales    | N    | N%      | N    | "[line]"          |
```

### Section 3: Pipeline Health

```markdown
| Band           | Count | Avg Score | % of Pipeline |
|----------------|-------|-----------|--------------|
| 🔴 HOT (80+)   | N     | N         | N%           |
| 🟠 WARM (60–79)| N     | N         | N%           |
| 🟡 ACTIVE      | N     | N         | N%           |
| 🔵 COOL        | N     | N         | N%           |
| ❌ Suppressed  | N     | -         | N%           |

Velocity: [N new] accounts entered | [N] exited this week
Leakage: [stage with highest drop-off] | [most common exit reason]
```

### Section 4: Meeting Velocity

```markdown
| Metric                         | This Week | Last Week | Trend |
|--------------------------------|-----------|-----------|-------|
| Meetings booked                | N         | N         | ↑/↓/→ |
| Reply-to-meeting rate          | N%        | N%        | ↑/↓/→ |
| Avg time reply → booked        | Nh        | Nh        | ↑/↓/→ |
| Pre-call briefs delivered      | N         | N         | ✅/⚠️ |

This week's meetings:
| Company | Contact | Date | Outcome |
|---------|---------|------|---------|
```

### Section 5: Deal Stage Analysis

```markdown
## Active Deals
| Company | Stage | Value (est) | Last Touch | Days Gap | Next Action |
|---------|-------|-------------|-----------|----------|-------------|

⚠️ Deals needing immediate attention (7+ days no touch):
[list]

Win/Loss this week:
- Won: [Company] — $N — [why they bought]
- Lost: [Company] — $N — [losing reason / objection to address]
```

### Section 6: Revenue Forecast (90 days)

```markdown
| Stage      | Count | Avg Value | Close Rate | Weighted Value |
|------------|-------|-----------|-----------|---------------|
| HOT + WARM | N     | $N        | 40%       | $N            |
| Evaluation | N     | $N        | 25%       | $N            |
| Proposal   | N     | $N        | 50%       | $N            |
| Close      | N     | $N        | 80%       | $N            |
| Total      |       |           |           | $N            |

Monthly projection:
- Month 1: $N
- Month 2: $N
- Month 3: $N

CAC this month: $N/meeting | $N/deal
```

### Section 7: Optimization Actions (the most important section)

```markdown
## Next Week: What to Do Differently

Must Do:
1. [Action] — [Data behind it]
2. [Action] — [Data behind it]

Test:
1. [Hypothesis to test] — [Test design]

Stop:
1. [What to pause] — [Why it's underperforming]

Signal Queue:
[N new accounts flagged by signal-monitor — add to activation]
```

---

## Workflow

### Step 1: Pull campaign data

Fetch from sequencer API for all active campaign IDs. Compute per-campaign and per-lead metrics.

### Step 2: Read all state files

Load state.md, lead-scores.csv, meetings-log.md, deals.md, and previous report.

### Step 3: Compute all metrics and week-over-week trends

Flag any metric:
- More than 50% below SELLL benchmark
- Changed more than 30% week-over-week
- Indicating data quality issues (0% open rate = deliverability alert)

### Step 4: Write the report

```
claude-code-gtm/reports/{YYYY-MM-DD}-revenue-report.md
```

### Step 5: Present executive summary inline

Ask if user wants full report or specific section.

### Step 6: Trigger optimization

- Queue hypothesis refinements for `hypothesis-building` (refine mode)
- Queue context update for `context-building` (feedback mode)
- Queue new signals for `signal-monitor`
- Flag stalled deals for `deal-nurture`

---

## Deliverability Alert System

Surface immediately if detected:

```
🚨 DELIVERABILITY ALERT
- Open rate < 15% → likely spam folder or blacklisted domain
- Bounce rate > 3% → list quality issue or verification failure
- Reply rate = 0% after 50+ sends → message or targeting problem
- Open rate drop > 50% WoW → domain reputation hit
```

Recommended response: pause campaign → warm domains → re-verify list.

## SELLL KPI Targets

| Metric | SELLL Target | Industry Average |
|--------|-------------------|-----------------|
| Open rate | 35–55% | 20–30% |
| Reply rate | 3–5% | 0.5–1% |
| Positive reply rate | ≥ 30% of replies | 15–20% |
| Reply → meeting rate | 40–60% | 20–30% |
| Meeting → opportunity | 30–50% | 20–35% |
| Opportunity → close | 25–40% | 15–25% |
| Pipeline coverage | 3–5x quota | 2–3x |

## Output Files

```
claude-code-gtm/reports/{date}-revenue-report.md   — full weekly report
claude-code-gtm/engine/state.md                    — updated with report summary
```

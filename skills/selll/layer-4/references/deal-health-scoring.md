# Deal Health Score (DHS) — Technical Reference
> Component of: Layer 4 Pipeline Intelligence — Phase 5
> Implemented via: n8n daily job `selllo-dhs-update`
> Updated: 2026-06-22

---

## What DHS Is

The Deal Health Score is the pipeline equivalent of BIS. While BIS tracks behavioral buying intent during outreach (Layer 3), DHS tracks deal momentum and health during the pipeline stage (Layer 4).

Every active deal gets a DHS score from 0-100, updated daily. DHS determines:
- Which deals Aaron touches today
- Which deals trigger automated escalation
- Which deals get weighted higher in pipeline forecast
- When Layer 4 auto-fires recovery sequences

**The core insight:** Most deals don't die dramatically — they die quietly. 10 days of no touch at the right moment costs a deal. DHS makes silence visible before it becomes a problem.

---

## DHS Calculation

```
DHS = D1_Recency + D2_Velocity + D3_DecisionMaker + D4_Budget + D5_Champion + D6_Proposal + D7_Competitor

Max: 100
```

### Dimension 1: Recency of Engagement (max 25)

```
Last touch < 3 days ago:    25 points (deal is being actively worked)
Last touch 4-6 days ago:    15 points (acceptable pace)
Last touch 7-9 days ago:    5 points (stall warning)
Last touch 10+ days ago:    0 points (stall — auto-flag)
Last touch 14+ days ago:    0 points + CRITICAL alert (deal at risk)

"Last touch" = last email sent OR call made OR reply received OR meeting held
(not just a calendar invite — actual two-way engagement)
```

### Dimension 2: Stage Velocity (max 20)

```
Deal moved forward in last 7 days:    20 points
Deal in same stage 8-14 days:         10 points (acceptable)
Deal in same stage 15-21 days:        5 points (stall warning)
Deal in same stage 22+ days:          0 points (stuck — escalate)

Note: Stage 4 (Proposal) has extended tolerance — normal to stay 21+ days
      Stage 5 (Close) has zero tolerance — 7+ days = RED
```

### Dimension 3: Decision Maker Access (max 15)

```
DM confirmed with budget authority + meeting held:   15 points
DM confirmed, meeting scheduled not yet held:         12 points
DM identified but not directly engaged:               8 points
Only champion engaged (DM unknown):                   4 points
Not confirmed at all:                                 0 points
```

### Dimension 4: Budget Signal (max 15)

```
Budget explicitly confirmed on discovery call:        15 points
Budget range implied (funding stage + company size):  10 points
Budget discussed but vague ("we have budget"):         8 points
No budget discussion yet:                              3 points
Budget concern raised as objection:                    0 points
```

### Dimension 5: Champion Engagement (max 10)

```
Champion (non-DM stakeholder) replied or engaged this week:  10 points
Champion engaged this month (not this week):                  6 points
Champion passive (in loop but not responding):                3 points
No champion identified:                                       0 points
Champion disengaged (went quiet after being active):          0 points + alert
```

### Dimension 6: Proposal Status (max 10)

```
N/A — pre-proposal stage (Stage 0-2):  N/A (dimension excluded, max redistributed)
Proposal sent, not yet viewed:          5 points
Proposal viewed once:                   7 points
Proposal viewed 2+ times:              10 points (strongest signal — buying committee)
Proposal viewed + questions received:  10 points + alert "accelerate close"
```

### Dimension 7: Competitive Threat (max 5)

```
No competitor mentioned:                                      5 points
Competitor named but we're ahead:                             3 points
Competitor named, active evaluation:                          1 point
Competitor explicitly preferred over SELLL:                   0 points + alert
```

---

## DHS Delta Events

Single events that change DHS immediately (outside daily recalculation):

| Event | DHS Delta |
|-------|----------|
| HOT reply received | Baseline set at 65 |
| Meeting booked | Baseline set at 70 |
| Discovery score ≥ 18 | +15 |
| Discovery score 12-17 | +8 |
| Proposal sent | +10 |
| Proposal viewed | +10 |
| Proposal viewed 2+ times | +10 additional |
| Contract sent | +15 |
| Reply received (any positive) | +12 |
| Cold call connected (positive) | +10 |
| 7+ days no touch | -20 |
| 10+ days no touch | -30, STALL flag |
| Competitor named | -10 |
| DM goes quiet after being active | -15 |
| Champion stops engaging | -8 |

---

## DHS Thresholds and Actions

| Score | Status | Auto-Action | Aaron Action |
|-------|--------|-------------|-------------|
| 80-100 | 🟢 GREEN | Weekly touch reminder | Review dashboard |
| 60-79 | 🟡 AMBER | Slack: "deal needs attention" | Queue nurture email or call |
| 40-59 | 🔴 RED | Slack: stall alert, call queued | Call today, send today |
| 20-39 | 💀 CRITICAL | Slack: emergency + re-engagement sequence | Immediate personal outreach |
| < 20 | ☠️ DEAD | Stage → Lost (after Aaron confirms) | Log in losses.md, close HubSpot |

---

## DHS Stage Norms

Different stages have different DHS expectations. A proposal stage at DHS 65 is healthy. A discovery stage at DHS 65 might indicate slowness.

| Stage | Healthy DHS | Warning Below | Critical Below |
|-------|-------------|--------------|---------------|
| Stage 0: HOT | 70+ | 60 | 50 |
| Stage 1: Meeting Set | 75+ | 65 | 55 |
| Stage 2: Discovery | 65+ | 55 | 40 |
| Stage 3: Evaluation | 60+ | 50 | 35 |
| Stage 4: Proposal | 65+ | 55 | 40 |
| Stage 5: Close | 70+ | 60 | 45 |

---

## n8n Workflow: selllo-dhs-update

```
Node 1: Trigger
  Schedule: daily 05:30 UTC
  Action: start run

Node 2: Get Active Deals
  API: HubSpot GET /crm/v3/objects/deals
  Filter: dealstage != "Won", dealstage != "Lost"
  Returns: all open deals with properties

Node 3: For Each Deal
  For each deal:
    a. Calculate days_since_last_touch:
         last_touch_date = HubSpot last_modified OR last_activity_date
         days_since = today - last_touch_date

    b. Calculate days_in_stage:
         stage_change_date = HubSpot hs_date_entered_[current_stage]
         days_in_stage = today - stage_change_date

    c. Calculate D1 (Recency):
         if days_since < 3: D1 = 25
         elif days_since < 7: D1 = 15
         elif days_since < 10: D1 = 5
         else: D1 = 0

    d. Calculate D2 (Velocity):
         if days_in_stage < 8: D2 = 20
         elif days_in_stage < 15: D2 = 10
         elif days_in_stage < 22: D2 = 5
         else: D2 = 0

    e. Read D3-D7 from HubSpot custom properties (set manually or by events)
    f. Sum all dimensions: DHS = D1+D2+D3+D4+D5+D6+D7
    g. Apply stage norm check

Node 4: Update HubSpot
  PATCH /crm/v3/objects/deals/{dealId}
  Properties: { dhs_score: [new score], dhs_updated: [today] }

Node 5: Update deals.md
  Read current deals.md → update DHS column for each deal → write back

Node 6: Alert Logic
  For deals with DHS < 60: send Slack stall alert
  For deals with DHS < 40 for 3+ consecutive days: emergency escalation
  For DHS that dropped > 20 in one day: sharp drop alert

Node 7: Pipeline Dashboard
  Aggregate all DHS scores + stage distribution
  Build dashboard text (see SKILL.md Phase 5A format)
  POST to Slack channel #selllo-pipeline

Node 8: Done
  Log: { run_date, deals_processed, alerts_fired, forecast_updated }
```

---

## DHS History Format (in Account Card)

Each account card includes a DHS History section:

```markdown
## DHS History

| Date | Stage | DHS | Delta | Trigger |
|------|-------|-----|-------|---------|
| 2026-06-26 | HOT | 65 | — | Deal created (HOT reply) |
| 2026-06-27 | Meeting Set | 70 | +5 | Meeting booked |
| 2026-06-28 | Meeting Set | 78 | +8 | Meeting held (discovery score 21) |
| 2026-06-29 | Evaluation | 82 | +4 | Post-call email replied |
| 2026-06-30 | Evaluation | 86 | +4 | Champion engaged (James Okafor) |
| 2026-07-01 | Proposal | 88 | +2 | Proposal sent |
| 2026-07-03 | Proposal | 93 | +5 | Proposal viewed 2× |
| 2026-07-07 | Close | 89 | -4 | No reply to Day 5 follow-up |
| 2026-07-08 | Close | 94 | +5 | Contract sent |
| 2026-07-10 | Close | 100 | +6 | Contract signed → Won ✅ |
```

---

## Integration Points

| Layer | Direction | What DHS Receives |
|-------|-----------|------------------|
| Layer 3 → Layer 4 | Inbound | HOT reply → deal created, initial DHS set |
| Layer 3 → Layer 4 | Inbound | BIS score at time of HOT → informs initial DHS |
| Layer 4 → Layer 6 | Outbound | DHS history for won/lost deals → optimization learning |
| Layer 4 → Layer 5 | Outbound | DHS = 100 (contract signed) → Layer 5 triggered |
| Layer 4 internal | Internal | DHS drives all nurture timing + cold call triggers |

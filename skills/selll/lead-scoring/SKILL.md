---
name: SELLL-lead-scoring
description: >
  Automatically score and prioritize every account in the outbound pipeline
  using behavioral signals (email opens, replies, LinkedIn engagement) and
  firmographic fit. Routes HOT leads (score 80+) to meeting-automation and
  flags cold accounts for suppression. Part of the SELLL Revenue Engine
  — Layer 4: Pipeline. Triggers on: "score leads", "lead scoring", "prioritize
  accounts", "which leads are warm", "rank prospects", "score pipeline", "who
  should we call", "lead priority", "hot leads", "which accounts to focus on".
---

# Lead Scoring

Score every account in the pipeline and route them to the right next action. Runs after `inbox-reply` and before `meeting-automation`. Turns behavioral signals into a ranked priority list so the seller always knows exactly who to call next.

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Campaign engagement (opens, clicks, replies) | Sequencer API | yes |
| Engine state | `claude-code-gtm/engine/state.md` | yes |
| Context file (ICP, personas, tier logic) | `claude-code-gtm/context/{company}_context.md` | yes |
| Tier assignments | `list-segmentation` output | yes |
| Current reply classifications | `inbox-reply` session output | recommended |

## Scoring Model (0–100)

### Behavioral Signals (50 pts max)

| Signal | Points |
|--------|--------|
| Positive reply (Interested / Meeting Request) | 50 |
| Question reply (genuine, no objection) | 35 |
| Objection reply (door not closed) | 20 |
| Email opened 3+ times | 15 |
| Email opened 2 times | 8 |
| LinkedIn connection accepted | 10 |
| LinkedIn DM replied | 30 |
| Link clicked in email | 20 |
| Email opened 1 time | 3 |
| LinkedIn post liked/commented | 5 |
| Not interested reply | -20 |
| Bounce / bad email | -30 |

**Decay rule:** Behavioral signals older than 7 days are worth 50% of their listed points.

### Firmographic Fit (25 pts max)

| Signal | Points |
|--------|--------|
| Tier 1 account | 15 |
| Tier 2 account | 8 |
| Tier 3 account | 2 |
| Primary vertical match | 5 |
| Headcount in ICP range | 3 |
| Revenue in ICP range | 2 |

### Timing Signals (15 pts max — cap at top 2)

| Signal | Points |
|--------|--------|
| Funding in last 90 days | 10 |
| New VP Sales / CRO in last 60 days | 10 |
| Active SDR / BDR job post (last 30 days) | 8 |
| RevOps job post (last 30 days) | 6 |
| LinkedIn post about GTM pain (last 30 days) | 5 |
| G2 review mentioning outbound pain | 4 |

### Contact Access (10 pts max)

| Signal | Points |
|--------|--------|
| Decision-maker found + verified | 5 |
| Decision-maker is active LinkedIn poster | 3 |
| Mutual connection available | 2 |

## Score Bands and Routing

| Score | Band | Action |
|-------|------|--------|
| 80–100 | 🔴 HOT | Route to `meeting-automation` immediately. Alert seller. |
| 60–79 | 🟠 WARM | Seller reviews within 24h. Run personalized follow-up. |
| 40–59 | 🟡 ACTIVE | Continue sequence. Check every 48h. |
| 20–39 | 🔵 COOL | Automated sequence only. No manual action. |
| 0–19 | ⚫ COLD | Evaluate for suppression after full sequence. |
| < 0 | ❌ SUPPRESS | Remove from sequences. Add to suppression list. |

## Workflow

### Step 1: Pull engagement data

Fetch per-lead metrics from sequencer API: `open_count`, `click_count`, `reply_status`, `interest_value`.

### Step 2: Load existing scores

Read `claude-code-gtm/engine/lead-scores.csv`. Schema:
```
domain, company_name, tier, current_score, previous_score, score_delta, band, last_signal, routing_action, last_scored
```

### Step 3: Compute scores and deltas

For each account: apply scoring model → compute delta vs. previous score → assign band.

Flag accounts with delta > 25 in 48h regardless of absolute score (sudden spike = escalate).

### Step 4: Output the Priority Board

```markdown
## Lead Priority Board — {date}

### 🔴 HOT (act NOW)
| Company | Contact | Score | Key Signal | Action |
|---------|---------|-------|-----------|--------|
| ...     | ...     | 92    | Replied "interested" | → meeting-automation |

### 🟠 WARM (act within 24h)
| Company | Contact | Score | Key Signal | Action |
|---------|---------|-------|-----------|--------|

### 🟡 ACTIVE (monitor)
[...accounts 40–59...]

### ❌ SUPPRESS
[...bounced or not-interested...]
```

### Step 5: Update files and trigger routing

- Write scores to `claude-code-gtm/engine/lead-scores.csv`
- Write board to `claude-code-gtm/engine/priority-board.md`
- Route HOT accounts → `meeting-automation`
- Route BOUNCED accounts → `email-search` (find alternative contact)
- Update `claude-code-gtm/engine/state.md`

## Run Cadence

| Frequency | Trigger |
|-----------|---------|
| Daily | After inbox-reply session |
| Immediate | When a HOT signal fires (positive reply) |
| Weekly | Full re-score of entire pipeline |

## Ground Rules

- Score is directional, not absolute. Delta matters as much as score.
- Never suppress without user confirmation.
- One routing action per account per day.
- Behavioral signals decay 50% after 7 days.

## Output Files

```
claude-code-gtm/engine/lead-scores.csv       — full scored account list
claude-code-gtm/engine/priority-board.md     — daily ranked priority board
claude-code-gtm/engine/state.md              — updated engine state
```

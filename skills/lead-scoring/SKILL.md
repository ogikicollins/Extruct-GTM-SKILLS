---
name: lead-scoring
description: >
  Automatically score and prioritize every account in the outbound pipeline
  using behavioral signals (email opens, replies, LinkedIn engagement) and
  firmographic fit. Routes warm accounts to meeting-automation and flags cold
  accounts for re-engagement or suppression. Fits between inbox-reply and
  meeting-automation in Layer 4 of the Revenue Engine. Triggers on: "score
  leads", "lead scoring", "prioritize accounts", "which leads are warm",
  "rank prospects", "score pipeline", "who should we call", "lead priority",
  "account scoring", "hot leads".
---

# Lead Scoring

Automatically score every account in the pipeline and route them to the right next action. Runs after inbox-reply processing and before meeting-automation. Turns behavioral signals into a ranked priority list so the seller always knows exactly who to call next.

## When to Use

- After every inbox-reply session (daily Layer 4 run)
- When the user wants to know which accounts to prioritize
- When a new campaign has been running 3+ days and has reply/engagement data
- When the user asks "who should we focus on this week?"

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Campaign data (opens, clicks, replies) | Sequencer API (Instantly or other) | yes |
| Engine state file | `claude-code-gtm/engine/state.md` | yes |
| Context file (ICP, personas, tier logic) | `claude-code-gtm/context/{company}_context.md` | yes |
| List segmentation tiers | Output from `list-segmentation` | yes |
| Reply classifications | Output from `inbox-reply` (current session) | recommended |

## Scoring Model

Every account receives a **Lead Score** from 0–100. Score is computed from four signal categories.

### Signal Category 1: Behavioral Signals (50 points max)

These signals indicate active engagement with your outreach. They are the strongest predictors of near-term intent.

| Signal | Points | Notes |
|--------|--------|-------|
| Positive reply (Interested / Meeting Request) | 50 | Maximum score — immediately route to meeting-automation |
| Question reply (genuine curiosity, no objection) | 35 | High intent — draft reply and monitor next 48h |
| Objection reply (door not closed) | 20 | Follow up with specific objection handler |
| Email opened 3+ times | 15 | Re-reading = strong consideration signal |
| Email opened 2 times | 8 | Interest signal — accelerate follow-up |
| Email opened 1 time | 3 | Minimal signal — maintain sequence |
| LinkedIn connection accepted | 10 | Warm signal — send DM within 24h |
| LinkedIn DM replied | 30 | Strong intent — propose a call |
| LinkedIn post liked/commented | 5 | Passive engagement |
| Link clicked in email | 20 | Active research signal |
| Not interested reply | -20 | Remove from pipeline, add to suppression |
| Bounce / bad email | -30 | Find alternative contact at the same company |

### Signal Category 2: Firmographic Fit (25 points max)

Read from the enrichment columns on the company table (output of `list-enrichment`). Cross-reference with the ICP in the context file.

| Fit Dimension | Points | How to Score |
|---------------|--------|-------------|
| Tier 1 account (from list-segmentation) | 15 | Confirmed Tier 1 = full 15 pts |
| Tier 2 account | 8 | Tier 2 = 8 pts |
| Tier 3 account | 2 | Tier 3 = 2 pts |
| Company in primary vertical (from ICP) | 5 | Match primary vertical = 5 pts; secondary = 2 pts |
| Employee count in ICP sweet spot | 3 | Within ICP range = 3 pts |
| Revenue in ICP sweet spot | 2 | Within ICP range = 2 pts |

### Signal Category 3: Timing Signals (15 points max)

Read from `list-enrichment` signal columns. Timing signals indicate the account is in an active buying window.

| Timing Signal | Points |
|---------------|--------|
| Raised funding in last 90 days | 10 |
| New VP Sales / CRO hired in last 60 days | 10 |
| Active SDR / BDR job post (last 30 days) | 8 |
| Revenue Operations job post (last 30 days) | 6 |
| Company posted about GTM pain on LinkedIn (last 30 days) | 5 |
| G2 review mentioning outbound pain (last 60 days) | 4 |
| Competitor just churned them (if signal available) | 8 |

Only count the top 2 timing signals per account (cap at 15).

### Signal Category 4: Contact Access (10 points max)

| Contact Signal | Points |
|----------------|--------|
| Decision-maker found and verified | 5 |
| Decision-maker is active LinkedIn poster | 3 |
| Mutual connection available | 2 |

---

## Score Bands and Routing

| Score | Band | Routing Action |
|-------|------|---------------|
| 80–100 | 🔴 HOT | Immediate: route to `meeting-automation`. Alert seller. |
| 60–79 | 🟠 WARM | Priority: seller reviews within 24h. Run personalized follow-up. |
| 40–59 | 🟡 ACTIVE | Continue sequence. Check signal changes every 48h. |
| 20–39 | 🔵 COOL | Maintain automated sequence. No manual action needed. |
| 0–19 | ⚫ COLD | Evaluate for suppression after full sequence is complete. |
| < 0 | ❌ SUPPRESS | Remove from all active sequences. Add to suppression list. |

---

## Workflow

### Step 1: Pull engagement data

Fetch engagement metrics from the sequencer API for all active campaigns:

```
GET /analytics/campaigns/{campaign_id}
```

For Instantly, pull:
- `emails_sent`, `emails_opened`, `unique_opens`, `link_clicks`, `replied`, `bounced`

Also pull per-lead engagement:
```
GET /leads?campaign_id={id}&limit=500
```

Extract per-lead: `open_count`, `click_count`, `reply_status`, `interest_value`.

### Step 2: Load existing scores

Read `claude-code-gtm/engine/lead-scores.csv` (or create it if it doesn't exist).

Schema:
```
domain, company_name, tier, current_score, previous_score, score_delta, band, last_signal, routing_action, last_scored
```

### Step 3: Compute scores

For each account in the pipeline:
1. Start from the tier base score (Firmographic Fit)
2. Add behavioral signals from sequencer data
3. Add timing signals from enrichment columns
4. Add contact access signals
5. Cap at 100, floor at -50
6. Compute delta from previous score

### Step 4: Apply routing rules

| Routing Rule | Trigger | Action |
|-------------|---------|--------|
| HOT route | Score ≥ 80 | Flag for `meeting-automation`. Create alert. |
| Objection route | Objection reply + score 20–60 | Queue for seller review with objection handler |
| Stale account | Score < 20 + full sequence complete | Queue for suppression review |
| New signal spike | Delta > 25 in 48h | Escalate to seller regardless of absolute score |
| Bounce recovery | Bounce signal | Search for alternative contact at same company |

### Step 5: Produce the priority board

Output a ranked table — the **Daily Priority Board**:

```markdown
## Lead Priority Board — {date}

### 🔴 HOT (book a meeting NOW)
| Company | Contact | Score | Key Signal | Action |
|---------|---------|-------|-----------|--------|
| Acme Corp | Sarah Chen (VP Sales) | 92 | Replied "interested, can we chat?" | → meeting-automation |
| BrightPath | Tom Reyes (CRO) | 85 | Opened 4x, clicked pricing link | → send follow-up + calendar |

### 🟠 WARM (seller action in 24h)
| Company | Contact | Score | Key Signal | Action |
|---------|---------|-------|-----------|--------|
| Nexon SaaS | Maria Patel (CEO) | 74 | LinkedIn DM replied | → personalized email |
| DataCore | Jay Kim (VP Revenue) | 68 | Series A announced + opened email 2x | → call reference + timing email |

### 🟡 ACTIVE (sequence running, monitor)
[Table of accounts 40–59]

### ❌ SUPPRESS (remove from pipeline)
[List of bounced or not-interested accounts]
```

### Step 6: Update engine state

Write updated scores to `claude-code-gtm/engine/lead-scores.csv`.

Update `claude-code-gtm/engine/state.md`:
- HOT count, WARM count, ACTIVE count
- Accounts routed to meeting-automation
- Accounts flagged for suppression

### Step 7: Trigger downstream actions

- Accounts scored HOT → immediately invoke `meeting-automation`
- Accounts with OBJECTION reply → queue objection handler response for seller review
- Accounts with BOUNCE → search for alternative contact (delegate to `email-search`)
- Accounts COLD after full sequence → propose to user: suppress or re-approach with new trigger

---

## Scoring Cadence

| Frequency | Trigger |
|-----------|---------|
| Daily | After inbox-reply session |
| Real-time | When a HOT signal fires (positive reply, meeting request) |
| Weekly | Full re-score of entire pipeline (removes stale scores) |

---

## Ground Rules

- **Score is directional, not absolute.** A 75 is "warmer than a 50" — don't over-optimize for exact numbers.
- **Delta matters as much as score.** An account that jumped from 20 to 65 in 48 hours is more interesting than one sitting at 65 for two weeks.
- **Never suppress without user confirmation.** Always present the suppression list to the user before removing accounts.
- **One routing action per account per day.** Don't trigger meeting-automation AND follow-up email on the same account in the same run.
- **Behavioral signals decay.** An open from 14 days ago is worth half the points of an open from yesterday. Apply a 50% decay to behavioral signals older than 7 days.

## Output Files

```
claude-code-gtm/engine/lead-scores.csv      — full scored account list
claude-code-gtm/engine/priority-board.md    — daily priority board (human-readable)
claude-code-gtm/engine/state.md             — updated engine state
```

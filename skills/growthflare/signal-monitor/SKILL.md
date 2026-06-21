---
name: growthflare-signal-monitor
description: >
  Monitor buying signals across the target account universe in real time:
  funding rounds, VP Sales and CRO hires, SDR job posts, LinkedIn GTM pain
  posts, competitor displacement events, and G2 intent signals. Surfaces new
  accounts that crossed the ICP threshold and adds them to the activation
  queue. Layer 6 of the Growthflare Revenue Engine. Triggers on: "monitor
  signals", "buying signals", "signal monitor", "new funding alerts", "check
  for triggers", "who raised money", "new VP Sales hires", "who is hiring
  SDRs", "trigger events", "find warm accounts", "intent signals", "who
  should we reach out to this week".
---

# Signal Monitor

The Revenue Engine does not wait for prospects to find you. It actively monitors the entire target account universe for the moment a buying trigger fires — and routes the account into the pipeline before any competitor notices. Signal monitoring is the engine's nervous system.

## Signal Categories

### Category 1: Funding Events — CRITICAL (24-hour window)

| Signal | Source |
|--------|--------|
| Series A or B announced | Crunchbase, Dealroom, press |
| SAFE or debt financing announced | Crunchbase |
| Press release: funding + "go-to-market" or "sales" | Web search |

Action: Route to Layer 2 immediately. If already in campaign, send personalized single-touch referencing the funding.

### Category 2: Leadership Changes — HIGH (48-hour window)

| Signal | Source |
|--------|--------|
| VP Sales / CRO new role (started last 60 days) | LinkedIn job changes |
| Head of Revenue / Chief Revenue Officer hired | LinkedIn |
| Previous VP Sales departed (replacement coming) | LinkedIn |
| CEO post: "strengthening the GTM team" | LinkedIn, press |

Action: Use Sequence 3 (Newly Hired VP Sales). Subject: "your first 90 days."

### Category 3: Hiring Signals — HIGH (3-day window)

| Signal | Source |
|--------|--------|
| SDR / BDR job posted | LinkedIn Jobs, Indeed |
| Revenue Operations Manager job posted | LinkedIn Jobs |
| Demand Generation role posted | LinkedIn Jobs |
| VP of Sales job posted | LinkedIn Jobs |
| Multiple sales roles posted simultaneously | LinkedIn Jobs |

Action: Reference the job post in Email 1 to show signal-awareness.

### Category 4: Pain Signals — MEDIUM (5-day window)

| Signal | Source |
|--------|--------|
| LinkedIn post: "pipeline is unpredictable" | LinkedIn search |
| LinkedIn post: "cold email isn't working" | LinkedIn search |
| LinkedIn post: "how do you build an SDR playbook?" | LinkedIn search |
| LinkedIn post: "hire vs. build pipeline debate" | LinkedIn search |
| CRO/VP post about GTM fragmentation | LinkedIn, X |

Action: Use the post as the personalization anchor in Email 1.

### Category 5: Competitor Displacement — HIGH (24–48h window)

| Signal | Source |
|--------|--------|
| G2 / Capterra 1–2 star review of a competitor | G2, Capterra |
| LinkedIn post complaining about competitor product | LinkedIn search |
| "Looking for alternatives to [competitor]" posts | LinkedIn, Reddit, G2 |
| Competitor raises prices or changes terms | Web search |
| Competitor has layoffs or product issues | Web, TechCrunch |

Action: Lead with displacement angle — reference what you heard, show the alternative.

### Category 6: Intent Signals — MEDIUM (3-day window)

| Signal | Source |
|--------|--------|
| Company researching "sales engagement software" | G2 Buyer Intent |
| Company researching "outbound prospecting tools" | Bombora, Demandbase |
| High engagement on GTM LinkedIn ads | LinkedIn Matched Audiences |

Action: Validate ICP first (≥ 60 points). If confirmed, route to Layer 2 with HIGH priority.

### Category 7: Growth Events — LOW (weekly review)

| Signal | Source |
|--------|--------|
| New product launch | Web, LinkedIn |
| Expansion to new geography | LinkedIn, press |
| New partnership announced | Web, LinkedIn |
| Headcount milestone (50th, 100th hire) | LinkedIn |

Action: Add to "Timing Signals" field in enrichment. Good personalization context, not standalone trigger.

---

## Workflow

### Step 1: Load the watch list

Read `claude-code-gtm/engine/signal-watchlist.md`.

Contains:
- Full ICP universe (all accounts from list-building — monitored even before pipeline entry)
- Accounts currently in pipeline (monitored for escalation)
- Competitor names for displacement monitoring
- Keywords to watch on LinkedIn and web

### Step 2: Run signal scans

**Funding:**
Search Crunchbase / web: `"{target company}" + "funding"` — date range: last 7 days

**Leadership changes:**
LinkedIn search: `title:"VP Sales" OR "CRO" OR "Chief Revenue"` + target companies, start date: last 60 days

**Hiring:**
LinkedIn Jobs: `"SDR" OR "BDR" OR "Revenue Operations"` + target company list, posted: last 30 days

**Pain signals:**
LinkedIn: `"pipeline" + "unpredictable" OR "cold email" + "not working"` posted by ICP contacts, last 30 days

**Competitor displacement:**
G2: competitor names, filter: 1–2 stars, last 30 days. LinkedIn: `"[competitor]" + "alternative"`, last 30 days.

### Step 3: Score signals

```markdown
| Company | Signal Type | Detail | Urgency | Score Impact | Action |
|---------|-------------|--------|---------|-------------|--------|
| Acme    | Funding     | $8M Series A | CRITICAL | +25 | → Layer 2 now |
| BrightPath | Leadership | New VP Sales | HIGH | +20 | → Email 48h |
| DataCore | Hiring | SDR job posted | HIGH | +15 | → Add to campaign |
| Nexon | Pain signal | CRO posted about pipeline pain | MEDIUM | +10 | → Personalized DM |
```

### Step 4: Route new accounts

For accounts NOT in pipeline:
1. Run 60-second ICP disqualification check (from `list-segmentation`)
2. If ICP confirmed → add to `claude-code-gtm/engine/signal-queue.md`
3. Alert user: "Signal detected at [Company] — adding to activation queue"

### Step 5: Update in-pipeline account scores

For accounts already in pipeline:
1. Add signal points to existing lead score
2. If score crosses a band boundary → alert user
3. If score crosses HOT (80+) → trigger `meeting-automation`

### Step 6: Output the weekly signal report

```markdown
## Signal Monitor Report — {date}

### 🚨 CRITICAL (act today)
| Company | Signal | Detail | Action |
|---------|--------|--------|--------|
| Acme    | Series A | $8M raised | → Personalized outreach within 24h |

### 🔴 HIGH (act this week)
| Company | Signal | Detail | Action |
|---------|--------|--------|--------|
| BrightPath | New VP Sales | Started 3 weeks ago | → Sequence 3 |

### 🟡 MEDIUM (add to queue)
[table]

New accounts added to activation queue: N
[list with ICP score and primary signal]
```

### Step 7: Update watch list and queue

- Remove disqualified / suppressed accounts
- Add newly discovered ICP-fit accounts from signal scans
- Update `last_signal` and `signal_count` per account

---

## Signal Watch List Schema

```markdown
# Signal Watch List
Last updated: {date}
Accounts monitored: N

## Active Pipeline (monitoring for escalation)
| Domain | Company | Stage | Last Signal | Signal Count |

## ICP Universe (monitoring for entry)
| Domain | Company | ICP Score | Last Signal | Days Since Added |

## Keywords to Monitor
- pipeline unpredictable
- cold email reply rate
- SDR not hitting quota
- outbound not working
- [company_name] + funding
- looking for alternatives to [competitor]

## Competitors to Monitor
| Competitor | Displacement Signal Pattern |
```

## Run Cadence

| Run Type | Frequency | Scope | Time |
|----------|-----------|-------|------|
| Critical scan | Daily | Funding + leadership only | 5 min |
| Full scan | Weekly (Thursday) | All 7 categories | 20–30 min |
| On-demand | User triggered | Specific category or company | 5–10 min |

## Signal Rules

- Act within the urgency window. Series A = 24h. VP Sales hire = 48h. After that, a competitor has likely already reached them.
- Signal is context, not a substitute for ICP fit. Run the 60-second disqualification check before routing.
- One signal = one outreach trigger. Don't hit the same account with 3 different signal emails in one week.
- Source every signal. Every alert includes a link or source. Never surface a signal from memory.
- Signals expire. Apply freshness dates: funding = 90 days, VP hire = 60 days, job post = 30 days. Stale signals are not triggers.

## Output Files

```
claude-code-gtm/engine/signal-watchlist.md    — full monitored universe
claude-code-gtm/engine/signal-queue.md        — new accounts ready for Layer 2
claude-code-gtm/engine/state.md               — updated with signal count
claude-code-gtm/reports/{date}-signals.md     — weekly signal report
```

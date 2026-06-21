---
name: signal-monitor
description: >
  Always-on signal detection system for SELLL.io. Daily monitoring for H5 (new VP Sales
  hires), H1 (new funding rounds), H2 (SDR job posts), H7 (competitor frustration signals),
  and re-engagement queue trigger conditions. Surfaces new accounts the moment signals fire
  so urgency windows are caught at maximum remaining time. Output: daily Signal Queue table
  + event bus updates. Run every morning as first task per daily-runbook.md.
  Triggers on: "monitor signals", "buying signals", "signal monitor", "new funding
  alerts", "check for triggers", "who raised money", "new VP Sales hires",
  "who is hiring SDRs", "trigger events", "find warm accounts", "signal
  alerts", "intent signals".
---

# Signal Monitor

The revenue engine does not wait for prospects to find you. It actively monitors the entire target account universe for the moment a buying trigger fires — and routes the account into the pipeline before any competitor notices. Signal monitoring is the engine's nervous system.

## When to Use

- Daily (fast run): check for high-urgency signals (new replies, funding rounds)
- Weekly (full run): scan all signal categories across the full account universe
- On-demand: user asks "who should we reach out to this week based on signals?"
- After a new hypothesis is validated: update the signal watch list to match
- Before a list-building run: pre-qualify targets based on live signals

## Signal Categories

### Category 1: Funding Events (Priority: CRITICAL)

A funding event is the single strongest buying trigger. New capital = new budget = mandate to build. Monitor for:

| Signal | Source | Urgency |
|--------|--------|---------|
| Series A or B round announced | Crunchbase, Dealroom, Tracxn | 24-hour window |
| SAFE round or debt financing announced | Crunchbase | 48-hour window |
| Company added to "recently funded" Crunchbase list | Crunchbase | 48-hour window |
| Press release mentioning funding + "go-to-market" or "sales" | Web search | 24-hour window |

**Action:** Accounts with a funding event in the last 7 days get a CRITICAL urgency flag. Route to Layer 2 immediately if not already in pipeline. If already in campaign, advance to personalized single-touch follow-up referencing the funding.

### Category 2: Leadership Changes (Priority: HIGH)

A new VP Sales, CRO, or Head of Revenue is a buying window. They need to show results in 90 days and are actively looking for solutions. Monitor for:

| Signal | Source | Urgency |
|--------|--------|---------|
| VP Sales / CRO hired in last 60 days | LinkedIn (job changes) | 48-hour window |
| "Head of Revenue" or "Chief Revenue Officer" new role | LinkedIn | 48-hour window |
| VP Marketing with revenue mandate hired | LinkedIn | 3-day window |
| Previous VP Sales departed (leaving role) | LinkedIn | 3-day window — replacement is coming |
| CEO announced "strengthening the go-to-market team" | LinkedIn / press | 3-day window |

**Action:** New VP Sales accounts get a HIGH urgency flag. The persona is Sequence 3 (Newly Hired VP Sales). Route to personalized outreach within 48 hours of detecting the signal. The subject line should reference "your first 90 days."

### Category 3: Hiring Signals (Priority: HIGH)

Open roles reveal where the company is investing and what problems they're trying to solve.

| Signal | Source | Urgency |
|--------|--------|---------|
| SDR / BDR job posted | LinkedIn Jobs, Indeed | 3-day window |
| Revenue Operations Manager job posted | LinkedIn Jobs | 3-day window |
| "Demand Generation" role posted | LinkedIn Jobs | 3-day window |
| VP of Sales posted (they're replacing one or building) | LinkedIn Jobs | 3-day window |
| Multiple sales roles posted simultaneously | LinkedIn Jobs | 48-hour window |
| "SDR Manager" or "Head of Outbound" role | LinkedIn Jobs | 3-day window |

**Action:** Hiring signal accounts get a HIGH urgency flag. Reference the job post in Email 1 to show signal-awareness: *"Saw [Company] is hiring SDRs — curious if building a pipeline system for that team is on the roadmap."*

### Category 4: Pain Signals (Priority: MEDIUM)

Prospects publicly expressing the pain you solve are self-qualifying. Monitor for:

| Signal | Source | Urgency |
|--------|--------|---------|
| LinkedIn post about "pipeline is unpredictable" | LinkedIn search | 5-day window |
| LinkedIn post about "cold email isn't working" | LinkedIn search | 5-day window |
| LinkedIn post asking "how do you build an SDR playbook?" | LinkedIn search | 5-day window |
| LinkedIn post about "hire vs. build pipeline debate" | LinkedIn search | 5-day window |
| Tweet / X post from CRO about GTM fragmentation | X search | 5-day window |
| Podcast mention of pipeline problem by a target ICP contact | Podcast transcripts / web | Weekly |

**Action:** Pain signal accounts get a MEDIUM urgency flag. Use the post content as the personalization anchor in Email 1: *"Saw your post about cold email reply rates — here's what's actually driving that gap."*

### Category 5: Competitor Displacement (Priority: HIGH)

When a competitor churns a client or loses momentum, a displacement window opens. Monitor for:

| Signal | Source | Urgency |
|--------|--------|---------|
| G2 or Capterra review criticizing a competitor (1–2 stars) | G2, Capterra | 48-hour window |
| LinkedIn post complaining about a competitor product | LinkedIn search | 48-hour window |
| "Looking for alternatives to [competitor]" posts | LinkedIn, Reddit, G2 | 24-hour window |
| Competitor raises prices or changes terms (news) | Web search | 48-hour window |
| Competitor has layoffs or product issues (news) | Web search | 24-hour window |

**Action:** Displacement accounts get a HIGH urgency flag. Lead with the displacement angle: *"Saw some noise about [Competitor] — a few of their clients have come to us this quarter. Happy to show you what we're doing differently."*

### Category 6: Intent Signals (Priority: MEDIUM)

Third-party intent platforms and behavioral signals that indicate active research.

| Signal | Source | Urgency |
|--------|--------|---------|
| Company researching "sales engagement software" on G2 | G2 Buyer Intent | 3-day window |
| Company researching "outbound prospecting tools" | Bombora, Demandbase | 3-day window |
| Company visiting SELLL/competitor pricing pages | 6sense, Clearbit | 3-day window |
| High LinkedIn ad engagement on GTM-related content | LinkedIn Matched Audiences | Weekly |

**Action:** Intent signal accounts are validated against ICP first. If ICP match ≥ 60 points, route to Layer 2 with HIGH priority. Use the intent signal as context for the outreach angle.

### Category 7: Company Growth Events (Priority: LOW-MEDIUM)

Company milestones indicate momentum and expanding budget.

| Signal | Source | Urgency |
|--------|--------|---------|
| Company announces new product launch | Web, LinkedIn | Weekly |
| Company expands to new geography | LinkedIn, press | Weekly |
| Company announces new partnership | Web, LinkedIn | Weekly |
| Company reports strong ARR growth (press, LinkedIn) | Web | Weekly |
| Company hits headcount milestone (50th hire, 100th hire) | LinkedIn | Weekly |

**Action:** Growth event accounts get a LOW urgency flag. Add to the "Timing Signals" field in enrichment. Good context for personalization but not a standalone trigger.

---

## Workflow

### Step 1: Load the watch list

Read `claude-code-gtm/engine/signal-watchlist.md`.

This file contains:
- All accounts in the ICP universe (from `list-building` output) — these are monitored even before they enter the active pipeline
- Accounts currently in the pipeline — monitor for escalation signals
- Competitor names to monitor for displacement events
- Keywords and phrases to watch on LinkedIn and web

If the file doesn't exist, create it from the company list tables in the Extruct account.

### Step 2: Run signal scans

For each signal category, execute the appropriate scan:

**Funding events:**
```
Search Crunchbase API or web for "[target companies]" + "funding" + date range: last 7 days
```

**Leadership changes:**
```
Search LinkedIn (via web or Sales Navigator) for new job announcements:
- Title contains: "VP Sales", "CRO", "Chief Revenue", "Head of Revenue", "VP Revenue"
- Company: [target accounts]
- Start date: last 60 days
```

**Hiring signals:**
```
Search LinkedIn Jobs for:
- "SDR" OR "BDR" OR "Business Development Representative" + company list
- "Revenue Operations" + company list
- Date posted: last 30 days
```

**Pain signals:**
```
LinkedIn search: "pipeline" + "unpredictable" OR "cold email" + "not working" OR "SDR" + "building"
Filter: posted by people at ICP companies in the last 30 days
```

**Competitor displacement:**
```
G2 search: competitor names, filter: 1-2 star reviews, last 30 days
LinkedIn search: "[competitor name]" + "alternative" OR "looking for" + last 30 days
```

Use web search or LinkedIn web scraping where API access is not available. Delegate to available web tools.

### Step 3: Score each signal

Assign urgency and score each detected signal:

```markdown
| Company | Signal Type | Signal Detail | Urgency | Score Impact | Action |
|---------|-------------|--------------|---------|-------------|--------|
| Acme Corp | Funding | $8M Series A announced | CRITICAL | +25 | → Layer 2 now |
| BrightPath | Leadership | New VP Sales started 3 weeks ago | HIGH | +20 | → Email within 48h |
| DataCore | Hiring | SDR job posted 5 days ago | HIGH | +15 | → Add to campaign |
| Nexon SaaS | Pain signal | CRO posted about pipeline pain | MEDIUM | +10 | → Personalized DM |
```

### Step 4: Route new accounts to Layer 2

For accounts NOT currently in the pipeline:
1. Check if they pass the ICP 60-second disqualification check (from `list-segmentation` tiering criteria)
2. If ICP match confirmed → add to `claude-code-gtm/engine/signal-queue.md`
3. Alert the user: "Signal detected at [Company] — adding to activation queue"

### Step 5: Update scores for in-pipeline accounts

For accounts already in the pipeline:
1. Add the signal points to their lead score (from `lead-scoring` model)
2. If score crosses a band boundary (e.g., COOL → WARM) → escalate and alert user
3. If score crosses HOT threshold (80+) → trigger `meeting-automation`

### Step 6: Update the watch list

After each run:
- Remove accounts that have been disqualified or suppressed
- Add newly discovered ICP-fit accounts from signal scans
- Update `last_signal` and `signal_count` per account

### Step 7: Report signals to user

Present the weekly signal summary:

```markdown
## Signal Monitor Report — {date}

### 🚨 CRITICAL (act today)
| Company | Signal | Detail | Recommended Action |
|---------|--------|--------|-------------------|
| Acme Corp | Series A | $8M raised, hiring SDRs | → Personalized outreach within 24h |

### 🔴 HIGH (act this week)
| Company | Signal | Detail | Recommended Action |
|---------|--------|--------|-------------------|
| BrightPath | New VP Sales | Started 3 weeks ago | → Sequence 3 (VP Sales persona) |

### 🟡 MEDIUM (add to queue)
[Table of medium signals]

### New Accounts Added to Activation Queue: N
[List with ICP score and primary signal]
```

---

## Signal Watch List Schema

```markdown
# Signal Watch List

Last updated: {date}
Accounts monitored: N

## Active Pipeline (monitoring for escalation)
| Domain | Company | Stage | Last Signal | Signal Count |
|--------|---------|-------|------------|-------------|

## ICP Universe (monitoring for entry)
| Domain | Company | ICP Score | Last Signal | Days Since Added |
|--------|---------|----------|------------|-----------------|

## Keywords to Monitor (LinkedIn + Web)
- pipeline unpredictable
- cold email reply rate
- SDR not hitting quota
- outbound not working
- [company_name] + funding
- looking for alternatives to [competitor]

## Competitors to Monitor
| Competitor | Displacement Signal Pattern |
|------------|---------------------------|
| [Name]     | [Signal to watch for]     |
```

---

## Run Cadence

| Run Type | Frequency | Scope | Time to Run |
|----------|-----------|-------|-------------|
| Critical scan | Daily | Funding + leadership changes only | 5 min |
| Full scan | Weekly (Thursday) | All 7 signal categories | 20–30 min |
| On-demand | User triggered | Specific signal category or company | 5–10 min |

## Output Files

```
claude-code-gtm/engine/signal-watchlist.md     — full monitored universe
claude-code-gtm/engine/signal-queue.md         — new accounts ready for Layer 2
claude-code-gtm/engine/state.md                — updated with signal count
claude-code-gtm/reports/{date}-signals.md      — weekly signal report
```

## Ground Rules

- **Act within the urgency window.** A Series A is a 24-hour window. A VP Sales hire is a 48-hour window. After that, a competitor has likely already reached them.
- **Signal is context, not replacement for ICP fit.** A company with a great signal but below-ICP firmographics is still a bad-fit prospect. Run the ICP disqualification check first.
- **One signal → one outreach trigger.** Don't hit the same account with 3 different signal-triggered emails in the same week. Pick the strongest signal.
- **Source every signal.** Every alert includes a link or source. Never surface a signal from memory or assumption.
- **Signals expire.** A Series A raised 6 months ago is no longer a trigger. A VP Sales hired 4 months ago is no longer in their "first 90 days" window. Enforce signal freshness dates per category.

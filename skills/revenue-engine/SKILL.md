---
name: revenue-engine
description: >
  The Growthflare Revenue Engine — a 100% automated B2B outbound system that
  books and closes deals on autopilot. Orchestrates all GTM skills into a
  single end-to-end pipeline: intelligence → activation → outreach → pipeline
  → close → optimize. Run this when the user wants to launch or run their
  full revenue machine, automate their outbound from scratch, or get a
  step-by-step build plan. Triggers on: "revenue engine", "outbound engine",
  "build the engine", "automate outbound", "revenue machine", "growthflare",
  "full pipeline", "book deals on autopilot", "run the engine", "end to end
  outbound", "launch outbound".
---

# Growthflare Revenue Engine

> Built by Aaron Shepard, Growthflare — "The machine that sells while you sleep."

The Revenue Engine is the master orchestrator. It does not replace any individual skill — it sequences them, passes outputs between them, tracks state across runs, and ensures nothing falls through the cracks. One command. Six layers. Fully automated.

## The Six Layers

```
LAYER 1: INTELLIGENCE    → Know your market before you touch it
LAYER 2: ACTIVATION      → Build the right list and find the right people
LAYER 3: OUTREACH        → Launch personalized, signal-triggered campaigns
LAYER 4: PIPELINE        → Score, reply, book, and track every conversation
LAYER 5: CLOSE           → Nurture every warm lead until the deal is won
LAYER 6: OPTIMIZE        → Learn from every campaign and compound the results
```

Each layer is powered by atomic skills. The engine sequences them, carries outputs forward, and tracks the state of every account at every stage.

## Engine State File

The engine maintains a live state file at:

```
claude-code-gtm/engine/state.md
```

This file tracks:
- Current phase and active layer
- List of accounts in each stage (prospecting, outreach, replied, meeting-booked, nurture, closed, lost)
- Campaign performance (open rate, reply rate, positive reply rate, meetings booked)
- Last run timestamp per layer
- Next scheduled action per layer

Read this file at the start of every session. Update it at the end of every layer.

## Modes

### Mode A: Full Build (first-time setup)

For users launching the Revenue Engine from scratch. Run all six layers in sequence.

```
Layer 1 → Layer 2 → Layer 3 → Layer 4 → Layer 5 → Layer 6
```

Timeline: 90-day build. Weeks 1–2: Layers 1–2. Weeks 3–4: Layer 3. Week 5+: Layers 4–6 run continuously.

### Mode B: Resume (ongoing operation)

For users who have already completed setup. Read the state file and identify which layers need to run:

- Signal monitor fired → pull new accounts into Layer 2
- Campaign live → check Layer 4 (inbox, scoring, meetings)
- Meetings booked → activate Layer 5 (deal nurture)
- Weekly cadence → run Layer 6 (reporting + optimization)

Ask the user: "Which layer do you want to run today, or shall I check the state file and pick up where we left off?"

### Mode C: Single Layer

User wants to run one specific layer. Route to the appropriate skill(s) and return.

---

## Layer 1: Intelligence

**Goal:** Map the market. Define the ICP. Build hypotheses. Know what signals to watch.

**Skills to run (in order):**

1. `context-building` — Create or update the company context file. This is the foundation. Every downstream skill reads from it. Confirm: product one-liner, ICP profiles, win cases, proof library, voice rules.

2. `hypothesis-building` — Generate 3–7 testable pain hypotheses from the context file. Each hypothesis becomes a list-building angle, an email angle, and a segmentation tier.

3. `market-research` — (Optional but recommended for new verticals) Validate hypotheses with external research. Surfaces pain patterns, competitor weaknesses, and language the ICP actually uses.

4. `competitor-monitoring` — Map the 3–5 competitors your ICP is currently using. Understand displacement scenarios. Feed findings into context file.

**Layer 1 output:**
- `claude-code-gtm/context/{company}_context.md` (complete)
- `claude-code-gtm/context/{vertical-slug}/hypothesis_set.md`
- Competitor map (added to context file)

**State update:** Mark Layer 1 complete. Log vertical, hypothesis count, and key ICP signals.

---

## Layer 2: Activation

**Goal:** Build the list. Find the people. Get verified contact data.

**Skills to run (in order):**

1. `list-building` — Use hypothesis search angles to build a company list (200–2,000 targets depending on stage). Run lookalike, semantic, and deep search methods. Deduplicate. Remove DNC domains.

2. `list-enrichment` — Add enrichment columns to the company list: tech stack, headcount, funding, growth signals, open roles, recent news. These columns drive segmentation.

3. `enrichment-design` — Design custom signal columns specific to the vertical and hypotheses (e.g., "has Apollo + Outreach stack", "SDR job posted in last 30 days", "recently raised Series A").

4. `list-segmentation` — Score and tier every company (Tier 1 = A+/A, Tier 2 = B, Tier 3 = C). Only Tier 1 and Tier 2 enter the outreach pipeline. Tier 3 goes to nurture list.

5. `people-search` — For Tier 1 and Tier 2 companies, find the target decision-makers (titles from context file ICP). Find 1–3 contacts per company.

6. `email-search` — Find verified email addresses for each contact. Use Prospeo and FullEnrich waterfall. Store all results.

7. `email-verification` — Verify every email before it enters a campaign. Remove risky, catch-all, and invalid addresses. Target: < 2% bounce rate.

**Layer 2 output:**
- Company table with enrichment columns and tier scores
- Contact table with verified emails
- Tier 1 list (ready for personalized outreach)
- Tier 2 list (ready for semi-personalized outreach)

**State update:** Log list size, tier breakdown, verified email count, and contact-to-company ratio.

---

## Layer 3: Outreach

**Goal:** Launch the campaign. Send personalized, signal-triggered emails at scale.

**Skills to run (in order):**

1. `email-prompt-building` — Build the email prompt template from the context file. Wire up: voice rules, product value prop, proof library, active hypotheses, and personalization variables. One template per persona (match ICP personas from context file).

2. `email-generation` — Generate fully personalized emails for every contact in the Tier 1 and Tier 2 lists. Each email uses the contact's hypothesis match, enrichment signals, and proof points. Output: CSV with all email columns ready for upload.

3. `atomic-message` — For LinkedIn touchpoints (Day 0, Day 5, Day 10 in the sequence), generate atomic connection request notes and DMs for each contact. Short, specific, signal-anchored.

4. `email-response-simulation` — Run the generated emails through 3 persona reviewers before sending. Catch anything that sounds generic, over-sold, or off-voice. Revise before launch.

5. `campaign-sending` — Upload verified emails to the sequencer (Instantly or other). Create campaigns by region/timezone. Map all personalization variables. Confirm pre-send checklist. **Never auto-activate** — present checklist and let user launch.

**Layer 3 output:**
- Generated email CSV (archived in `claude-code-gtm/campaigns/{slug}/emails.csv`)
- Simulation report
- Campaign ID and upload confirmation
- Pre-send checklist (user activates manually)

**State update:** Log campaign ID, email count uploaded, send start date, and sending schedule.

---

## Layer 4: Pipeline

**Goal:** Capture every positive signal. Score leads. Book meetings. Nothing leaks.

**Skills to run (in order, on a recurring schedule):**

1. `inbox-reply` — Fetch all unread replies from the sequencer inbox. Classify intent: Interested / Objection / Meeting Request / Not Interested / Auto-reply / Question / Referral. Draft and send contextual replies. Update lead interest status.

2. `lead-scoring` — After inbox reply processing, re-score every account in the pipeline. Flag accounts that have crossed into "warm" territory (positive reply, multiple email opens, LinkedIn engagement). Route warm accounts to meeting booking.

3. `meeting-automation` — For "Meeting Request" and "Interested" classifications, auto-draft a meeting confirmation email with calendar link. Log the booked meeting in the engine state. Trigger Layer 5 (deal nurture) automatically.

4. `account-research` — For every meeting booked, run a pre-call deep research dossier on the account. Buyer map, org structure, live signals, entry angle. Deliver to the seller 24 hours before the call.

**Layer 4 run cadence:** Daily (inbox + lead scoring). Per-meeting (account research 24h before call).

**Layer 4 output:**
- Reply classifications and sent responses
- Updated lead interest scores in sequencer
- Meeting confirmations sent
- Pre-call dossiers in `claude-code-gtm/accounts/{slug}/account-brief.md`

**State update:** Log reply count, intent breakdown, meetings booked, dossiers completed.

---

## Layer 5: Close

**Goal:** Nurture every warm lead from first meeting to signed contract.

**Skills to run (in order, triggered by meeting-booked event):**

1. `deal-nurture` — Launch a post-meeting nurture sequence for every account that has had a discovery call. Sequence structure: follow-up summary → value reinforcement → case study → proposal trigger → close. Adapts tone based on deal stage signals (interest level, next steps mentioned, objections raised).

2. `post-engagers` — For accounts in active deal stage, find and engage with the decision-maker's recent LinkedIn posts. Signal presence. Stay top-of-mind without spamming email.

3. `inbox-reply` — Handle all nurture-phase replies (deal questions, pricing, objections, champion updates). Escalate to the seller when the deal is in active negotiation.

**Layer 5 run cadence:** Per-account (triggered when a meeting is booked). Weekly check-in on all open deals.

**Layer 5 output:**
- Nurture email sequences (drafted, not auto-sent — seller reviews before sending)
- LinkedIn engagement log
- Deal stage updates in engine state

**State update:** Log accounts in nurture, deal stage per account, next action per account.

---

## Layer 6: Optimize

**Goal:** Make the machine smarter every week. More signal. Better targeting. Higher reply rates.

**Skills to run (in order, weekly):**

1. `revenue-reporting` — Pull campaign metrics from the sequencer. Build the weekly revenue report: pipeline generated, meetings booked, deals in stage, revenue forecast, campaign performance by hypothesis and persona.

2. `context-building` (feedback loop mode) — Import campaign results into the context file. Promote validated hypotheses. Retire dead angles. Update proof library with new win cases.

3. `signal-monitor` — Check for new buying signals across the target account universe: recent funding rounds, new VP Sales hires, SDR job posts, LinkedIn posts about GTM pain. Surface new accounts that have crossed the ICP threshold and auto-add to the prospecting queue.

4. `hypothesis-building` (refine mode) — Refine hypotheses based on campaign results. Merge angles that overlap. Split angles that are too broad. Update search angles for the next list-building run.

**Layer 6 run cadence:** Weekly (reporting + context update + hypothesis refine). Daily (signal monitor).

**Layer 6 output:**
- Weekly revenue report (`claude-code-gtm/reports/{date}-revenue-report.md`)
- Updated context file
- New accounts flagged for activation (added to Layer 2 queue)
- Refined hypothesis set

**State update:** Log report date, top-performing hypothesis, new accounts flagged, and optimization actions taken.

---

## Running the Engine: Session Start Protocol

Every time the user invokes the revenue engine:

1. Read `claude-code-gtm/engine/state.md`
2. Identify the current active layer and pending actions
3. Present a one-line status: *"Engine running. Layer 4 active. 47 emails in inbox, 3 meetings booked this week, 8 deals in nurture. What do you want to run?"*
4. If no state file exists: enter Mode A (Full Build) and start Layer 1

**Never run a layer if its dependencies are not complete.** Layer 3 requires Layer 2 output. Layer 4 requires a live campaign. Layer 5 requires a booked meeting. Layer 6 requires at least one campaign result.

---

## Engine Architecture (Skill Map)

```
┌─────────────────────────────────────────────────────────┐
│                  GROWTHFLARE REVENUE ENGINE             │
│                        (revenue-engine)                 │
├─────────────────────────────────────────────────────────┤
│  L1: INTELLIGENCE                                       │
│      context-building → hypothesis-building             │
│      market-research → competitor-monitoring            │
├─────────────────────────────────────────────────────────┤
│  L2: ACTIVATION                                         │
│      list-building → list-enrichment → enrichment-design│
│      list-segmentation → people-search                  │
│      email-search → email-verification                  │
├─────────────────────────────────────────────────────────┤
│  L3: OUTREACH                                           │
│      email-prompt-building → email-generation           │
│      atomic-message → email-response-simulation         │
│      campaign-sending                                   │
├─────────────────────────────────────────────────────────┤
│  L4: PIPELINE (daily)                                   │
│      inbox-reply → lead-scoring                         │
│      meeting-automation → account-research              │
├─────────────────────────────────────────────────────────┤
│  L5: CLOSE (per meeting)                                │
│      deal-nurture → post-engagers → inbox-reply         │
├─────────────────────────────────────────────────────────┤
│  L6: OPTIMIZE (weekly)                                  │
│      revenue-reporting → context-building (feedback)    │
│      signal-monitor → hypothesis-building (refine)      │
└─────────────────────────────────────────────────────────┘
```

---

## Engine Principles

**Systems over heroics.** The engine does not depend on any individual's effort. It runs the same quality of work at 3 AM as at 3 PM.

**Signal-triggered, not schedule-triggered.** Every outreach action is triggered by a real buying signal (job post, funding, leadership change, content engagement). Not a calendar reminder.

**Everything is owned by the client.** After 90 days, the client owns every list, every email template, every campaign, and every system. The engine runs without dependency on Growthflare.

**Compound results.** Each campaign feeds the next. Hypotheses improve. Lists get tighter. Reply rates compound. Month 3 outperforms Month 1 by design.

**Human in the loop on irreversible actions.** Emails are never auto-sent without user confirmation. Meetings are never booked without user review. The engine drafts; humans decide. Speed with control.

---

## Engine State File Schema

```markdown
# Revenue Engine State
Last updated: {date}

## Active Layer
{Layer N: name}

## Account Pipeline
| Stage         | Count | Last Updated |
|---------------|-------|-------------|
| Prospecting   | N     | date        |
| In Campaign   | N     | date        |
| Replied       | N     | date        |
| Meeting Booked| N     | date        |
| In Nurture    | N     | date        |
| Closed Won    | N     | date        |
| Closed Lost   | N     | date        |

## Campaign Performance (Current)
- Campaign ID: {id}
- Emails sent: N
- Open rate: N%
- Reply rate: N%
- Positive reply rate: N%
- Meetings booked: N
- Revenue in pipeline: $N

## Layer Status
| Layer | Status    | Last Run | Next Action |
|-------|-----------|----------|-------------|
| L1    | Complete  | date     | -           |
| L2    | Complete  | date     | -           |
| L3    | Active    | date     | check inbox |
| L4    | Active    | date     | run daily   |
| L5    | Active    | date     | 3 deals open|
| L6    | Active    | date     | run Friday  |

## Next Scheduled Actions
- [ ] Daily: Run inbox-reply + lead-scoring
- [ ] Thursday: Run signal-monitor
- [ ] Friday: Run revenue-reporting
- [ ] Next week: Refine hypotheses from campaign data
```

---

## First-Time Setup Checklist

Before running the engine for the first time, confirm these prerequisites:

```
- [ ] Company context file created (context-building)
- [ ] API keys set: EXTRUCT_API_KEY, INSTANTLY_API_KEY (or sequencer of choice)
- [ ] Sending domains configured and warmed (in sequencer)
- [ ] CRM connected (HubSpot / Salesforce) for deal logging
- [ ] Calendar link ready (Calendly / Cal.com) for meeting booking
- [ ] ICP confirmed with decision-maker access (LinkedIn Sales Navigator recommended)
- [ ] DNC list loaded into context file
- [ ] Target vertical confirmed (drives Layer 1)
```

Missing any of these? The engine will ask for them during Layer 1 setup.

---

*Growthflare Revenue Engine — Built to compound. Designed to run without you.*

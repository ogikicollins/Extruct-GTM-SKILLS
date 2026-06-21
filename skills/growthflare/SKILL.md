---
name: growthflare
description: >
  The Growthflare Revenue Engine — a 100% automated B2B outbound system that
  books and closes deals on autopilot. Built by Aaron Shepard, Growthflare.
  Orchestrates six core layers plus six meeting amplifiers: Intelligence →
  Activation → Outreach → Pipeline → Close → Optimize, amplified by cold
  calling, LinkedIn content, video outreach, referrals, multi-threading, and
  re-engagement. Run this as the master command for any revenue operation.
  Triggers on: "revenue engine", "growthflare", "outbound engine", "build the
  machine", "automate outbound", "revenue machine", "book deals on autopilot",
  "full pipeline", "run the engine", "end to end outbound", "launch outbound",
  "close deals automatically", "sales on autopilot", "get more meetings".
---

# Growthflare Revenue Engine

> *"The machine that sells while you sleep."*
> — Aaron Shepard, Founder, Growthflare

---

## What This Is

The Growthflare Revenue Engine is a six-layer B2B outbound system that runs continuously, 24/7, to find the right prospects at the right moment, engage them with the right message, book meetings automatically, and close deals without requiring a full sales team.

It is not a tool. It is not a template. It is a **compounding machine** — one that gets better every week as it learns from every campaign, every reply, and every won and lost deal.

**Version 2:** Six core layers plus six meeting amplifiers that stack on top of Layer 3 and Layer 4 to multiply meeting volume by 2–3x.

---

## The Six Layers

```
┌─────────────────────────────────────────────────────────────────┐
│                  GROWTHFLARE REVENUE ENGINE                     │
├──────────────────────────┬──────────────────────────────────────┤
│  LAYER 1 · INTELLIGENCE  │  Know your market before you touch   │
│  LAYER 2 · ACTIVATION    │  Right list. Right people. Right data │
│  LAYER 3 · OUTREACH      │  Personalized. Signal-triggered. Fast │
│  LAYER 4 · PIPELINE      │  Score, reply, book, track           │
│  LAYER 5 · CLOSE         │  Nurture every warm lead to signed   │
│  LAYER 6 · OPTIMIZE      │  Learn. Compound. Accelerate.        │
└──────────────────────────┴──────────────────────────────────────┘
```

---

## Engine Modes

### Mode A: Full Build (first-time setup)

Run all six layers in sequence. This is the 90-day build.

```
Layer 1 → Layer 2 → Layer 3 → Layer 4 → Layer 5 → Layer 6
```

- Weeks 1–2: Layers 1 and 2 (foundation + list)
- Weeks 3–4: Layer 3 (campaign live)
- Week 5+: Layers 4, 5, 6 run continuously

### Mode B: Resume (ongoing operation)

Read the engine state file. Identify which layers need to run today. Present a status briefing and ask which layer to activate.

### Mode C: Single Layer

User wants to run one specific layer. Route directly.

### Mode D: Emergency Triage

User has a deal stalling, a campaign underperforming, or a signal they need to act on immediately. Skip to the relevant layer and act.

---

## Session Start Protocol

Every time you run the Growthflare engine:

1. Check if `claude-code-gtm/engine/state.md` exists
2. If yes: read it and present the **Engine Status Briefing**
3. If no: enter Mode A and start Layer 1

**Engine Status Briefing format:**
```
GROWTHFLARE ENGINE — {date}

PIPELINE:  {N} accounts in campaign | {N} warm | {N} meetings booked | {N} deals open
CAMPAIGN:  {N%} open rate | {N%} reply rate | {N} positive replies this week
DEALS:     ${N} estimated pipeline value | {N} in close stage
SIGNALS:   {N} new trigger events detected | {N} accounts flagged for activation
NEXT:      {What the engine recommends running today}
```

---

## Layer 1: Intelligence

**Goal:** Map the market. Define the ICP. Build testable pain hypotheses.

**Skills (in order):**

| Step | Skill | What It Does |
|------|-------|-------------|
| 1 | `context-building` | Create the company context file: product, ICP, win cases, proof library, voice |
| 2 | `hypothesis-building` | Generate 3–7 pain hypotheses that become list angles and email angles |
| 3 | `market-research` | (Optional) Validate hypotheses with external research for new verticals |
| 4 | `competitor-monitoring` | Map competitors the ICP uses. Surface displacement scenarios. |

**Output:**
- `claude-code-gtm/context/{company}_context.md`
- `claude-code-gtm/context/{vertical}/hypothesis_set.md`

**Completion signal:** Context file has all 6 sections filled. Hypothesis set has 3+ hypotheses with search angles.

---

## Layer 2: Activation

**Goal:** Build the right list, find the right people, get verified contact data.

**Skills (in order):**

| Step | Skill | What It Does |
|------|-------|-------------|
| 1 | `list-building` | Build company list (200–2,000 targets) via semantic, lookalike, and deep search |
| 2 | `list-enrichment` | Add signal columns: tech stack, funding, headcount, open roles, news |
| 3 | `enrichment-design` | Design custom columns specific to the vertical and hypotheses |
| 4 | `list-segmentation` | Score and tier every company: Tier 1 (A+/A) → Tier 2 (B) → Tier 3 (C) |
| 5 | `people-search` | Find 1–3 decision-makers per Tier 1 and Tier 2 company |
| 6 | `email-search` | Find verified emails via Prospeo + FullEnrich waterfall |
| 7 | `email-verification` | Verify every address. Target: < 2% bounce rate. |

**Output:**
- Company table with tiers and enrichment
- Contact table with verified emails (Tier 1: fully personalized, Tier 2: semi-personalized)
- Tier 3: nurture list only

**Completion signal:** Verified email list ready. Contact-to-company ratio ≥ 1.5. Bounce risk flagged.

---

## Layer 3: Outreach

**Goal:** Launch personalized, signal-triggered campaigns at scale.

**Skills (in order):**

| Step | Skill | What It Does |
|------|-------|-------------|
| 1 | `email-prompt-building` | Build the email prompt template from context file (voice, proof, hypotheses, personas) |
| 2 | `email-generation` | Generate fully personalized emails for every contact — one per hypothesis match |
| 3 | `atomic-message` | Generate LinkedIn connection notes and DMs for the sequence touchpoints |
| 4 | `email-response-simulation` | Test emails against 3 personas. Catch generic, off-voice, or low-signal copy. |
| 5 | `campaign-sending` | Upload to sequencer, map variables, confirm pre-send checklist. User activates. |

**Sequence structure (multi-channel, base):**
```
Day 0   → LinkedIn connection request (atomic-message)
Day 1   → Email 1: The Hook (trigger-anchored opening)
Day 3   → Email 2: The Value Add (data point + low-friction ask)
Day 3   → [Tier 1 only] Cold call — script from cold-call skill
Day 5   → LinkedIn: comment on their recent post (atomic-message)
Day 7   → Email 3: The Social Proof — OR Loom video (video-outreach for top 20–30 Tier 1)
Day 8   → [Tier 1 only] Cold call follow-up — voicemail if no answer
Day 10  → LinkedIn DM (reference emails, new angle — atomic-message)
Day 14  → Email 4: The Different Angle (multi-channel orchestration angle)
Day 18  → LinkedIn: share relevant content (tag only if directly relevant)
Day 21  → Email 5: The Breakup (calendar link, low-pressure close)
```

**Amplifiers active in Layer 3:**
- `multi-thread`: For Tier 1 accounts, Thread B (Champion) launches Day 2 offset; Thread C (Economic Buyer) launches Day 5 offset
- `video-outreach`: Replaces Email 3 for top 20–30 Tier 1 accounts per batch
- `cold-call`: Adds phone touch on Day 3 and Day 8 for all Tier 1 accounts
- `linkedin-content`: Runs in parallel (3 posts/week); post-engagers are routed directly to warm DM sequence, bypassing the cold email sequence entirely

**Output:**
- Email CSV archived: `claude-code-gtm/campaigns/{slug}/emails.csv`
- Campaign live in sequencer
- Pre-send checklist confirmed by user

**Completion signal:** Campaign active. Sending schedule confirmed. First emails going out.

---

## Layer 4: Pipeline

**Goal:** Capture every positive signal. Score every lead. Book meetings. Nothing leaks.

**Skills (run daily):**

| Step | Skill | What It Does |
|------|-------|-------------|
| 1 | `inbox-reply` | Fetch unread replies. Classify intent. Draft and send contextual responses. |
| 2 | `growthflare/lead-scoring` | Score all accounts from behavioral + firmographic + timing signals |
| 3 | `growthflare/meeting-automation` | For HOT leads: draft booking email. Confirm meeting. Trigger account research. |
| 4 | `account-research` | Pre-call dossier 24h before every meeting: buyer map, signals, entry angle |

**Daily run output:**
- Reply classifications and sent responses
- Updated lead score board: `claude-code-gtm/engine/lead-scores.csv`
- Priority board: `claude-code-gtm/engine/priority-board.md`
- Meeting log: `claude-code-gtm/engine/meetings-log.md`
- Pre-call dossiers: `claude-code-gtm/accounts/{slug}/account-brief.md`

**Completion signal:** All unread replies processed. Lead scores updated. HOT leads routed to meetings.

---

## Layer 5: Close

**Goal:** Nurture every warm lead from first meeting to signed contract.

**Skills (triggered per meeting):**

| Step | Skill | What It Does |
|------|-------|-------------|
| 1 | `growthflare/deal-nurture` | Build and run post-meeting sequence: summary → value → case study → proposal → close |
| 2 | `post-engagers` | Engage with decision-maker's LinkedIn posts during active deal stage |
| 3 | `inbox-reply` | Handle deal-stage replies: objections, pricing questions, champion updates |

**Deal stages:**
```
Stage 1: Post-Discovery  → call happened, interest confirmed, next step agreed
Stage 2: Evaluation      → internal evaluation, business case building
Stage 3: Proposal        → proposal sent, awaiting feedback
Stage 4: Close           → contract out or decision imminent
Stage 5: Stalled         → 7+ days no response → re-engagement sequence
Stage 6: Lost            → log reason, exit sequence, update hypothesis validation
```

**Nurture rules:**
- Seller sends nurture emails from personal inbox — NOT the campaign sequencer
- 1 email per 2-3 days in nurture stage (not cold-outreach cadence)
- Every email references something the prospect said on the call
- Seller always reviews before sending

**Completion signal:** All open deals have an active nurture sequence. Weekly deal review run. Stalled deals flagged.

---

## Layer 6: Optimize

**Goal:** Make the machine smarter every week. More signal. Better targeting. Higher reply rates. Compounding results.

**Skills (run weekly):**

| Step | Skill | What It Does |
|------|-------|-------------|
| 1 | `growthflare/revenue-reporting` | Weekly report: campaign metrics, pipeline health, meetings, deals, forecast |
| 2 | `context-building` (feedback mode) | Import campaign results. Promote validated hypotheses. Retire dead angles. |
| 3 | `growthflare/signal-monitor` | Scan for new buying signals. Flag new accounts for activation. |
| 4 | `hypothesis-building` (refine mode) | Refine hypotheses from campaign data. Update search angles. |

**Compounding loop:**
```
Campaign results → validate/retire hypotheses → better list queries next time
→ tighter targeting → higher reply rates → more meetings → more data
→ validate/retire again → tighter targeting → ...
```

**Amplifiers active in Layer 6:**
- `re-engagement`: Signal monitor flags suppressed accounts with new trigger events; re-engagement sequences fire within urgency window
- `referral-engine`: Weekly referral review — identify clients at Day 30–90, generate referral asks, log referrals as separate pipeline source
- `linkedin-content`: Weekly post performance reviewed; ICP-fit engagers from the week routed into warm DM sequences

**Weekly output:**
- Revenue report: `claude-code-gtm/reports/{date}-revenue-report.md`
- Updated context file (new proof points, validated hypotheses)
- Signal queue: `claude-code-gtm/engine/signal-queue.md`
- Re-engagement queue: `claude-code-gtm/engine/re-engagement-queue.md`
- LinkedIn warm leads: `claude-code-gtm/engine/linkedin-warm-leads.md`
- Referral tracker: `claude-code-gtm/engine/referrals.md`
- Refined hypothesis set

---

## The Six Meeting Amplifiers

Built on top of Layers 3 and 4. Each amplifier is optional but stacks — run all six and meeting volume is 2–3x the email-only baseline.

```
┌─────────────────────────────────────────────────────────────────┐
│                  MEETING AMPLIFIERS                             │
├─────────────────────┬───────────────────────────────────────────┤
│  cold-call          │  +30–50% meetings — phone layer on Day 3  │
│                     │  and Day 8 for Tier 1 only                │
├─────────────────────┼───────────────────────────────────────────┤
│  linkedin-content   │  +30–50% meetings — 3 posts/week feed     │
│                     │  warm DMs at 3–5x cold reply rate         │
├─────────────────────┼───────────────────────────────────────────┤
│  video-outreach     │  +20–40% meetings — Loom replaces Email 3 │
│                     │  for top 20–30 Tier 1 accounts per batch  │
├─────────────────────┼───────────────────────────────────────────┤
│  referral-engine    │  +50–80% per referral — systematic ask    │
│                     │  after every client win, converts 5–10x   │
├─────────────────────┼───────────────────────────────────────────┤
│  multi-thread       │  +40–60% meetings — 2–3 parallel threads  │
│                     │  per Tier 1 account, coordinated timing   │
├─────────────────────┼───────────────────────────────────────────┤
│  re-engagement      │  +15–25% pipeline — suppressed list fired │
│                     │  back when a trigger event occurs         │
└─────────────────────┴───────────────────────────────────────────┘
```

### When to activate each amplifier

| Amplifier | Activate When | Layer It Plugs Into |
|-----------|--------------|---------------------|
| `cold-call` | Campaign is live, Tier 1 list is confirmed | Layer 3 → Day 3 and Day 8 |
| `linkedin-content` | Week 1 of engine build | Runs continuously in parallel |
| `video-outreach` | Tier 1 list confirmed, Email 1–2 sent | Layer 3 → replaces Email 3 |
| `referral-engine` | First client win logged | Layer 5 → triggers at Day 30+ |
| `multi-thread` | Layer 2 complete, 2+ contacts per Tier 1 account found | Layer 2 → Layer 3 |
| `re-engagement` | First campaign completes (suppressed list exists) | Layer 6 → weekly monitoring |

---

## Engine Architecture (Complete Skill Map)

```
growthflare/
├── SKILL.md                        ← YOU ARE HERE (master orchestrator)
│
│  CORE LAYERS
├── lead-scoring/SKILL.md           ← L4: Score accounts, route HOT leads
├── meeting-automation/SKILL.md     ← L4: Book meetings from positive replies
├── deal-nurture/SKILL.md           ← L5: Post-meeting sequences to close
├── revenue-reporting/SKILL.md      ← L6: Weekly performance report + forecast
├── signal-monitor/SKILL.md         ← L6: Real-time buying signal detection
│
│  MEETING AMPLIFIERS
├── cold-call/SKILL.md              ← +30–50% meetings via phone (Day 3 + Day 8)
├── linkedin-content/SKILL.md       ← +30–50% via content → warm DM pipeline
├── video-outreach/SKILL.md         ← +20–40% via Loom for top Tier 1 accounts
├── referral-engine/SKILL.md        ← +50–80% per referral, 5–10x close rate
├── multi-thread/SKILL.md           ← +40–60% via 2–3 parallel threads per account
├── re-engagement/SKILL.md          ← +15–25% pipeline from suppressed list
│
└── references/
    ├── engine-state-schema.md       ← State file format + field definitions
    ├── kpi-benchmarks.md            ← Growthflare targets vs. industry averages
```

---

## Engine State File

Every layer reads and updates the engine state:

```
claude-code-gtm/engine/state.md
```

Schema: see [references/engine-state-schema.md](references/engine-state-schema.md)

Key files maintained by the engine:

```
claude-code-gtm/
├── context/
│   └── {company}_context.md           ← Company voice, ICP, proofs, hypotheses
├── context/{vertical}/
│   └── hypothesis_set.md              ← Testable pain hypotheses
├── engine/
│   ├── state.md                       ← Live engine status
│   ├── lead-scores.csv                ← All accounts scored (0–100)
│   ├── priority-board.md              ← Daily HOT/WARM/ACTIVE board
│   ├── meetings-log.md                ← All meetings tracked
│   ├── deals.md                       ← Open deals by stage
│   ├── signal-watchlist.md            ← Full account universe for monitoring
│   └── signal-queue.md                ← New accounts ready for activation
├── campaigns/
│   └── {slug}/
│       └── emails.csv                 ← Generated email CSV per campaign
├── accounts/
│   └── {slug}/
│       └── account-brief.md           ← Pre-call dossier per account
├── nurture/
│   └── {slug}/
│       └── sequence.md                ← Deal nurture sequence per account
└── reports/
    └── {date}-revenue-report.md       ← Weekly revenue reports
```

---

## Principles

**1. Signal-triggered, not schedule-triggered.**
Every outreach action is triggered by a real buying signal — funding, hiring, leadership change, content engagement. Not a calendar reminder. Not "it's Tuesday."

**2. Systems over heroics.**
The engine does not depend on any individual's effort, memory, or motivation. It runs the same quality of work at 3 AM as at 3 PM.

**3. Compound results.**
Each campaign feeds the next. Hypotheses improve. Lists get tighter. Reply rates compound. Month 3 outperforms Month 1 by design.

**4. Human-in-the-loop on irreversible actions.**
Emails are never auto-sent without user confirmation. Meetings are never booked without user review. The engine drafts; humans decide. Speed with control — never unilateral action.

**5. Everything is owned by the client.**
After the build, every list, template, campaign, and system belongs to the client. No vendor lock-in. No dependency on Growthflare to run.

**6. Source every claim.**
Every signal has a source. Every metric has a denominator. Every proof point traces to a real win case. No fabrication. No padding.

---

## Metrics the Engine Tracks

### Core Pipeline Metrics

| Metric | Growthflare Target | Industry Average |
|--------|-------------------|-----------------|
| Email open rate | 35–55% | 20–30% |
| Email reply rate | 3–5% | 0.5–1% |
| Positive reply rate | ≥ 30% of replies | 15–20% |
| Reply-to-meeting rate | 40–60% | 20–30% |
| Time reply → meeting booked | < 2 hours | 24–48 hours |
| Meeting-to-opportunity rate | 30–50% | 20–35% |
| Opportunity-to-close rate | 25–40% | 15–25% |
| Pipeline coverage ratio | 3–5x quota | 2–3x |

### Amplifier Metrics

| Amplifier | Key Metric | Target |
|-----------|-----------|--------|
| Cold call | Call → meeting rate | 10–20% of dials |
| LinkedIn content | Warm DM reply rate | > 30% |
| Video outreach | Video → reply rate | 8–15% |
| Referral engine | Referral → meeting rate | 60–80% |
| Multi-thread | Meeting rate lift vs. single-thread | +40–60% |
| Re-engagement | Re-engage reply rate vs. fresh cold | 40–60% of baseline |

### Pipeline Source Mix (target by Month 3)

| Source | % of Total Pipeline |
|--------|-------------------|
| Cold email sequences | 40–50% |
| Multi-thread accounts | 15–20% |
| LinkedIn warm DMs (content) | 15–20% |
| Cold calls | 10–15% |
| Referrals | 10–15% |
| Re-engagement | 5–10% |

---

## First-Time Setup Checklist

```
Prerequisites before running the engine:

APIs and Tools:
- [ ] EXTRUCT_API_KEY set (list building, enrichment, people search)
- [ ] INSTANTLY_API_KEY set (or sequencer of choice)
- [ ] LinkedIn Sales Navigator access (for people search and signal monitoring)
- [ ] Calendly or Cal.com link (for meeting booking)

Sending Infrastructure:
- [ ] 2–3 sending domains configured and warmed (not your primary domain)
- [ ] Sending schedule configured (Tues–Thurs, 7–9 AM or 4–6 PM local time)
- [ ] DKIM, SPF, DMARC set up on all sending domains
- [ ] Unsubscribe mechanism active

Context:
- [ ] Company context file created (Layer 1: context-building)
- [ ] ICP defined with at least 2 personas
- [ ] At least 1 win case documented in context file
- [ ] DNC list loaded (existing customers, partners, competitors)
- [ ] Calendar link ready for meeting booking

Missing anything? The engine will prompt for each during Layer 1.
```

---

*Growthflare Revenue Engine v2.0 — Built to compound. Designed to run without you.*

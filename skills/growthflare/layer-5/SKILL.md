---
name: growthflare-layer-5
description: >
  Layer 5 — Close + Expand. Converts signed contracts into long-term revenue
  relationships and referral machines. Covers: client onboarding, first 30-day
  activation, results harvest, referral ask automation, case study generation,
  upsell/expand protocol, client health scoring, and annual renewal. Every
  client becomes a case study. Every case study generates referrals. Every
  referral converts at 5-10x cold outreach. Triggers on: "new client",
  "client onboarding", "client success", "expand", "upsell", "renewal",
  "referral", "case study", "layer 5", "close", "contract signed".
---

# Layer 5 — Close + Expand
> Version: 1.0 | Built: 2026-06-22
> Receives from: Layer 4 (contract signed → client created)
> Feeds into: Layer 1 (new proof points), Layer 2 (referral leads), Layer 6 (wins intelligence)
> Aaron's time per client per week: 30 minutes (after system is running)
> Automation level: 75% automated — Aaron runs check-in calls + referral conversations

---

## Layer 5 Architecture

```
LAYER 4 OUTPUT                     LAYER 5 CLIENT JOURNEY
─────────────────                  ──────────────────────────────────────────────────────
Contract signed         ─────────► Phase 1: Onboarding (Day 0-7)
                                   Phase 2: Activation (Day 8-30) — system build
                                   Phase 3: Results Harvest (Day 31-90) — first wins
                                   Phase 4: Expand Revenue (Day 91+) — grow the account
                                   Phase 5: Client Advocacy — referrals + case studies
                                              ↓
                                   Layer 1: New proof library entry
                                   Layer 2: Referral contacts enter pipeline
                                   Layer 6: Win intelligence → flywheel
```

---

## Client Health Score (CHS) — 0 to 100

Every active client gets a CHS, updated weekly. CHS determines when to expand, when to intervene, and when to ask for referrals.

| Dimension | Max | Scoring |
|-----------|-----|---------|
| Results delivery vs. promise | 30 | On target = 30, behind = 15, significantly behind = 0 |
| Client engagement | 20 | Proactive in system + check-ins = 20, passive = 10, disengaged = 0 |
| NPS sentiment | 20 | Positive check-in language = 20, neutral = 10, concern raised = 0 |
| Action item completion | 15 | All client actions on track = 15, some delays = 8, stuck = 0 |
| Expand readiness | 15 | Expanding use cases = 15, steady state = 8, reducing = 0 |

**CHS thresholds:**
- 80-100: GREEN — healthy, schedule referral ask
- 60-79: AMBER — check in proactively, address any concerns
- 40-59: RED — at risk, immediate intervention
- < 40: CRITICAL — churn risk, escalate to Aaron personally

---

## Phase 1: Onboarding (Day 0-7)

Triggered automatically when Layer 4 fires the contract-signed webhook.

### Step 1A — Welcome Protocol (Day 0)

```
n8n onboarding trigger:
  T+0:   Create entry in engine/clients.md
  T+5m:  Send welcome email (Aaron's personal email, NOT sequencer):

    Subject: Welcome to SELLL — let's build the machine

    [Name],

    Contract is signed. We're building.

    Here's what the next 7 days look like:

    Day 1:   Kickoff call — 45 minutes. I'll walk you through the full 90-day
             build plan and we'll agree on what you handle vs. what we handle.
             [calendar link for kickoff — 48h from now]

    Day 3:   Your team gives us access to:
             □ HubSpot (read access for current contact list)
             □ Instantly or current sequencer (for domain warmup data)
             □ LinkedIn (Aaron's account for Expandi setup)
             □ Company website and product docs

    Day 7:   ICP workshop — 60 minutes. We'll define the exact targeting layer
             for your first campaign.

    If you have any questions before the kickoff call, just reply here.

    Aaron

  T+5m:  HubSpot: deal_stage → "Won", create client object
  T+5m:  Create engine/accounts/[slug].md client record
  T+5m:  Add to engine/clients.md
  T+5m:  Slack: 🎉 CLIENT ONBOARDING STARTED — [Company] / [Contact]
                  Kickoff call: scheduled in email
                  CHS: 75 (new client baseline)
```

### Step 1B — Kickoff Call (Day 1-2)

Aaron runs the kickoff call. After the call, he logs it in Slack (one message).

n8n actions on kickoff log:
```
  1. Extract: client goals, success metrics, key contacts at client company,
              access status (HubSpot/LinkedIn/sequencer), preferred comms
  2. Create 90-day build plan (from template) with client-specific details
  3. Deliver to Slack: "90-day plan for [Company] — review + share with client?"
  4. Update clients.md: kickoff_complete = true, goals = [extracted]
  5. Set CHS checkpoints: Day 30, Day 60, Day 90 (n8n timers armed)
```

### Step 1C — Access + Setup (Day 3-7)

```
Day 3 reminder (auto):
  Slack + email to client: "Reminder: access sharing needed by [Day 3 date].
  Instructions: [link to access guide]"

When access confirmed (Aaron marks in Slack):
  → Expandi setup initiated
  → HubSpot list review started
  → Domain warmup check (team.[clientdomain]) if not using SELLL domain
  → ICP workshop scheduled (Day 7)

Day 7: ICP Workshop (60 min, Aaron facilitates)
  Output: client-specific ICP definition, refined from SELLL's master ICP
  Logged in: engine/accounts/[slug].md → ICP section
```

---

## Phase 2: Activation (Day 8-30)

The 90-day build: ICP → brain → sequences → campaign launch.

### Step 2A — System Build (Day 8-30)

```
SELLL builds (Aaron + engine):
  Week 2 (Day 8-14):
    □ Client context file created: claude-code-gtm/context/[client]-context.md
    □ ICP calibrated to client's exact vertical + buyer
    □ Hypothesis set customized (which H1-H7 apply, in which order)
    □ Proof library seeded with client's prior wins/case studies
    □ Tone-DNA calibrated to client founder's voice
    □ Sending domain warmed: client.selll.io OR client's own domain
    □ Week 2 check-in call (30 min)

  Week 3 (Day 15-21):
    □ Sequence variants written (VPSales/CRO/Founder × 3 hypotheses)
    □ Email copy reviewed + approved by client
    □ Expandi pre-engagement sequences built
    □ HeyGen video recorded (if client opted in)
    □ Week 3 check-in call (30 min)

  Week 4 (Day 22-28):
    □ Campaign CSV built: first 20-30 contacts
    □ All contacts scored + verified
    □ Pre-launch checklist run (15-item gate from Layer 3)
    □ Campaign loaded in Instantly
    □ Webhooks activated
    □ Week 4 check-in + pre-launch review

  Day 28-30:
    □ Campaign launch (Layer 3 goes live for client)
    □ First emails sent
    □ Dashboard live
    □ Day 30 milestone check-in
```

### Step 2B — Progress Updates (Automated)

```
Every Monday during build (n8n timer):
  Pull: tasks completed, tasks pending, % of build complete
  Send to client (Slack or email):

  Subject: Week [N] Build Update — [Company]

  "Quick update on where we are:

  ✅ Done this week:
    → [Task 1]
    → [Task 2]

  🔧 In progress:
    → [Task 3]

  📅 Next week:
    → [Task 4]
    → [Task 5 — needs your input: [what]]

  We're on track for [campaign launch date].

  Aaron"
```

### Step 2C — Day 30 Milestone Check-In

```
Auto-prompt (n8n Day 30 timer):
  Slack to Aaron: "Day 30 check-in for [Company]. Review:
    □ Campaign launched? (Y/N)
    □ First emails sent?
    □ First opens / replies?
    □ Client satisfaction (1-10)?
    □ Any concerns?
    □ CHS update"

Aaron logs in Slack → n8n updates clients.md + CHS
```

---

## Phase 3: Results Harvest (Day 31-90)

This is where the engine delivers. The system is live and generating pipeline for the client.

### Step 3A — Campaign Performance for Client

```
Every Friday (during active client campaign):
  n8n pulls client campaign metrics from Instantly API
  Generates client-facing weekly summary:

  Subject: Week [N] Outbound Performance — [Company]

  "Here's how your outbound engine performed this week:

  📊 This Week:
    Emails sent: [N]
    Open rate: [N]% (target: 35-55%)
    Reply rate: [N]% (target: 3-5%)
    Positive replies: [N]
    Meetings booked: [N]

  📅 Since Launch:
    Total contacts reached: [N]
    Pipeline generated: $[N] (estimated)
    Meetings booked: [N]

  📈 What's next:
    [Any sequence adjustments being made]
    [Any new signals detected]

  See full dashboard: [Slack channel or dashboard link]

  Aaron"
```

### Step 3B — First Win Capture (Day 31-90)

The most important moment in the client relationship. When the first meeting is booked or the first deal is in evaluation:

```
Trigger: Client's first qualified meeting booked through the system

n8n actions:
  1. Slack to Aaron: "🎯 FIRST WIN — [Company]. [Client contact's name] booked
     a meeting through the system. Time to capture this before they celebrate
     and move on."

  2. Generate win-capture email for Aaron to review + send:

     Subject: congratulations — first meeting is in the diary

     "[Client name],

     I saw [prospect name] from [prospect company] just booked.

     That's the system working.

     Quick ask: when you're done with that meeting, I'd love 10 minutes to hear
     what happened from your side — what you said, how they responded, what
     worked. That goes straight back into the engine for your next 100 outreach.

     Aaron"

  3. Arm: first-win proof library update (see Step 3C)
  4. Arm: Day 45 referral ask (see Phase 5)
```

### Step 3C — Proof Library Update

```
After client has 2-3 wins from the system:
  Aaron runs proof-library update:
    1. Capture: before-state (what the client had before SELLL)
    2. Capture: what was built (ICP, hypothesis, system components)
    3. Capture: results (reply rate, meetings booked, pipeline generated)
    4. Capture: quote (verbatim — must be confirmed before use)
    5. Write new proof point entry: brain/proof-library.md

  This becomes:
    - Proof point for future sequences
    - Case study source
    - Referral conversation asset
```

### Step 3D — Day 60 Business Review

```
Day 60 meeting (Aaron + client, 45 minutes):
  Agenda:
    1. Results vs. promised outcomes (30 min)
    2. What's working best (10 min)
    3. What to optimize next (10 min)
    4. Soft referral plant: "We're working with a few more companies at your
       stage — we're quite selective. If you know anyone dealing with the same
       pipeline challenge, we'd value an introduction."

  Post-meeting:
    1. Log outcome in clients.md
    2. Update CHS
    3. If results > 80% of promised: arm Day 75 direct referral ask
    4. If results < 60% of promised: escalate to recovery protocol
```

### Step 3E — Day 90 Build Complete Review

```
Day 90 is the "end of the build" — the system is fully installed and running independently.

Day 90 agenda (Aaron + client, 60 minutes):
  1. Full system demonstration
  2. Results documentation (capture everything in writing)
  3. Next 90 days options:
     a. Continue retainer ($3K/month — system maintenance + optimization)
     b. Expand (new vertical, new hypothesis, new campaign)
     c. Additional seat (second person running Growthflare in another department)

  Auto-prompt from n8n 7 days before Day 90:
    "Day 90 review coming up for [Company].
     Prep: review results, draft renewal/expand options, arm referral ask."
```

---

## Phase 4: Expand Revenue (Day 91+)

Every happy client is an expansion opportunity. The goal: grow ACV without cold outreach.

### Step 4A — Expansion Triggers

```
CHS ≥ 80 triggers monthly expansion check:
  n8n monthly check (Day 30, 60, 90, 120...):
    Evaluate:
      □ New vertical opportunity? (client's company expanded to new buyer)
      □ New hypothesis available? (new signal in their market)
      □ New headcount? (client hired 2nd SDR or 2nd sales hire)
      □ New product? (client launched new offering needing new sequence)
      □ Multi-team expansion? (sales + marketing both running Growthflare)

    If any trigger: Slack to Aaron: "EXPAND SIGNAL — [Company]
                                     [Trigger description]
                                     Suggested: [expansion offer]"
```

### Step 4B — Expansion Offer Types

| Trigger | Expansion Offer | ACV Delta |
|---------|----------------|----------|
| 2nd SDR hired | 2nd-seat Growthflare setup + new sequence set | +$8K setup + $1.5K/mo |
| New vertical | Vertical expansion campaign (new ICP + hypotheses) | +$6K setup + $1.5K/mo |
| New hypothesis emerges | Hypothesis expansion — new signal campaign | +$4K setup |
| Marketing team wants pipeline | B2B marketing variant of Growthflare | +$12K setup + $2.5K/mo |
| Company acquires or merges | Acquired entity needs its own system | New full engagement |
| Client promotes internally | New buyer at a different company | Referral (no charge) → new deal |

### Step 4C — Expansion Sequence

```
Expansion conversation (Day 90+ review or triggered by CHS):

1. Document the expansion need in clients.md
2. Claude generates expansion brief:
   — What additional pain exists (from existing knowledge)
   — What the expansion scope would be
   — ROI for the expansion (additional pipeline generated)
3. Aaron presents in next check-in
4. If agreed: new contract addendum → Layer 4 deal created → tracked separately
5. Total ACV updated in HubSpot
```

### Step 4D — Annual Renewal

```
n8n arms renewal process 60 days before contract end:

  Day -60: Slack: "RENEWAL APPROACHING — [Company] contract ends [date].
                   CHS: [score]. Start renewal conversation by [date -30]."

  Day -30: Aaron initiates renewal conversation:
    — Review year's results
    — Propose renewal + any expansion
    — Lock in 12-month renewal at same rate (or 5% increase)

  Day -14: If no renewal signed: escalation
    — Slack: "RENEWAL AT RISK — [Company]"
    — Senior attention: Aaron personal call

  Day 0: Contract end:
    — If renewed: update clients.md, HubSpot
    — If not renewed: churn analysis → Layer 6 intelligence
```

---

## Phase 5: Client Advocacy

Every client at CHS ≥ 75 for 30+ days is an advocacy opportunity.

### Step 5A — Referral Ask Protocol

```
Triggered by: Day 45 timer (if CHS ≥ 75) OR Day 90 business review

Best moments to ask (from referral-engine skill):
  1. Day 45: First clear win (first results visible)
  2. Day 90: Build complete (they've seen the full system)
  3. Any time they post publicly about SELLL or pipeline results
  4. When they close a deal using the system

Auto-prompt from n8n on Day 45 (if CHS ≥ 75):
  "REFERRAL ASK READY — [Company] / [Contact]. CHS: [score]. Day 45.
   First win captured: [Y/N]. Suggested ask type: [1/2/3/4 from referral-engine].
   Draft: [pre-written referral ask from referral-engine/SKILL.md]
   Aaron reviews → approves → sends"

Referral intake tracked in: engine/referrals.md
Referred contacts skip Layers 2-3 entirely → enter Layer 4 directly
```

### Step 5B — Case Study Generation

```
Triggered by: Day 90 review completion OR significant results milestone

n8n arms case study when:
  1. Client completes 90-day build
  2. Results are ≥ 70% of promised outcome
  3. Client gives verbal permission

Claude API case study generation:
  Inputs: proof library entry for this client, discovery notes, weekly results summaries
  Outputs:
    A. Long-form case study (PDF format, 2 pages) — for proposals
    B. LinkedIn post version (case study post template from linkedin-content skill)
    C. Email proof point (updated proof-library.md entry)
    D. One-sentence proof statement (for cold email sequences)

Client approval gate: Aaron sends draft → client approves → publish

Published assets:
  brain/proof-library.md → updated entry
  brain/institutional-memory/wins.md → win pattern logged
  LinkedIn: published via linkedin-content skill
  Proposal template: new case study section armed for future proposals
```

### Step 5C — LinkedIn Testimonial Ask

```
Best timing: Day 60+ when results are visible AND client is active on LinkedIn.

Template (Aaron sends):
  "Hi [Name],

  The results you've been seeing — would you be willing to write a quick LinkedIn
  post about what the system has done for [Company]?

  No need to mention us specifically if you'd rather keep it general. But if you're
  happy to tag SELLL, it goes a long way for us at this stage.

  Either way — it's been great building this with you.

  Aaron"

When client posts: n8n detects LinkedIn mention → Slack celebration + BIS-style impact score
```

---

## Layer 5 Automation Map

| What | Automated | Aaron Does |
|------|-----------|-----------|
| Welcome email (contract signed) | ✅ Auto | Review + send |
| clients.md entry | ✅ Fully auto | Nothing |
| Weekly progress updates to client | ✅ Claude generates | Review + send |
| Weekly performance report to client | ✅ Auto Fridays | Review before send |
| Day 30/60/90 check-in prompts | ✅ n8n timers | Run the call |
| First win capture prompt | ✅ n8n trigger | Run the conversation |
| Proof library update | ✅ Template generated | Confirm data |
| Renewal reminder | ✅ n8n timer 60d before | Run renewal conversation |
| Expansion opportunity detection | ✅ Monthly CHS check | Approve + present |
| Referral ask prompt + draft | ✅ Generated | Review + send |
| Case study generation | ✅ Claude generates | Client approval |
| CHS weekly update | ✅ n8n weekly | Nothing |

---

## Files Created / Updated by Layer 5

```
engine/clients.md                          — active client tracker (created here)
engine/referrals.md                        — referral tracker (updated here)
engine/accounts/[slug].md                  — updated with client progress
brain/proof-library.md                     — new proof point per closed client
brain/institutional-memory/wins.md         — win pattern per client
claude-code-gtm/context/[client]-context.md — client-specific engine context
```

---

## n8n Workflows (Layer 5)

| Workflow | Trigger | Actions |
|----------|---------|---------|
| `selllo-client-onboarding` | Contract signed (Layer 4) | Welcome email, clients.md, HubSpot |
| `selllo-client-chs-update` | Weekly Sunday 06:00 UTC | Recalculate CHS, alerts |
| `selllo-client-milestone` | Day 30/45/60/90 timers | Prompt Aaron for check-in |
| `selllo-referral-arm` | Day 45 + CHS ≥ 75 | Arm referral ask, generate draft |
| `selllo-renewal-arm` | 60 days before contract end | Renewal conversation prompt |
| `selllo-expansion-check` | Monthly + CHS event | Expansion trigger evaluation |
| `selllo-case-study-arm` | Day 90 + results ≥ 70% | Case study generation trigger |

---

## Layer 5 Client Tracker

See: `engine/clients.md`

---

## Layer 5 Run Log

| Date | Client | Phase | CHS | ACV | Referrals | Expand Revenue |
|------|--------|-------|-----|-----|-----------|---------------|
| (awaiting first client) | — | — | — | — | — | — |

---
name: SELLL-layer-4
description: >
  Layer 4 — Pipeline Intelligence. Manages every deal from first HOT signal
  through signed contract. Receives deals from Layer 3, scores deal health
  in real time, auto-generates proposals, runs multi-stage nurture sequences,
  manages cold call amplifier, and delivers a daily pipeline Slack dashboard.
  The pipeline never stalls silently — every stuck deal triggers an automated
  escalation. Triggers on: "pipeline", "manage deals", "deal stuck",
  "pipeline review", "proposal", "close the deal", "deal health", "layer 4",
  "pipeline intelligence", "active deals".
---

# Layer 4 — Pipeline Intelligence
> Version: 1.0 | Built: 2026-06-22
> Receives from: Layer 3 (HOT/MEETING_REQUEST → deal created)
> Feeds into: Layer 5 (contract signed → client activation)
> Aaron's daily time while running: 15 minutes
> Automation level: 85% automated — Aaron handles calls, reviews proposals, approves key send

---

## Layer 4 Architecture

```
LAYER 3 OUTPUT                     LAYER 4 PIPELINE
─────────────────                  ──────────────────────────────────────────────
HOT reply (ADB filed)   ────────►  Phase 1: Deal Intake
MEETING_REQUEST          ────────►  Phase 1: Deal Intake
Discovery ≥ 18/25       ────────►  Phase 2: Post-Discovery Nurture
                                   Phase 3: Proposal Intelligence
                                   Phase 4: Close Assist
                                   Phase 5: Pipeline Health Intelligence
                                              ↓
                                   LAYER 5: Close + Expand (contract signed)
```

---

## Deal Stages

```
Stage 0: HOT          — positive reply received, meeting not yet booked
Stage 1: Meeting Set  — meeting confirmed, pre-call prep in progress
Stage 2: Discovery    — discovery call complete, scored (qualified / nurture / lost)
Stage 3: Evaluation   — prospect evaluating internally, proposal pending
Stage 4: Proposal     — proposal sent, awaiting feedback / decision
Stage 5: Close        — contract out, decision imminent
Stage 6: Won          — contract signed → triggers Layer 5
Stage 7: Lost         — deal closed lost → triggers institutional memory update
Stage 8: Stalled      — 10+ days no movement → triggers escalation protocol
```

---

## Deal Health Score (DHS) — 0 to 100

The pipeline equivalent of BIS. Every deal gets a DHS updated daily by n8n.

| Dimension | Max | Scoring |
|-----------|-----|---------|
| Recency of engagement | 25 | Last touch < 3 days = 25, 4-6 days = 15, 7+ days = 5, 14+ = 0 |
| Stage velocity | 20 | Moving forward = 20, stalled 7-10d = 10, stalled 10d+ = 0 |
| Decision maker confirmed | 15 | DM confirmed + authority verified = 15, DM only = 8, unknown = 0 |
| Budget signal | 15 | Budget confirmed = 15, implied = 8, unknown = 0 |
| Champion engaged | 10 | Champion replied/engaged this week = 10, passive = 5, none = 0 |
| Proposal opened/viewed | 10 | Proposal viewed 2+ times = 10, once = 5, not yet = 0 |
| Competitor threat | 5 | None known = 5, one competitor named = 3, active evaluation = 0 |

**DHS thresholds:**
- 80–100: GREEN — deal on track, weekly touch only
- 60–79: AMBER — deal needs attention, accelerate nurture
- 40–59: RED — stall risk, call + escalate
- < 40: CRITICAL — deal at risk of going cold, emergency re-engagement

---

## Phase 1: Deal Intake

Triggered automatically when Layer 3 classifies a reply as HOT or MEETING_REQUEST.

### Step 1A — Receive Deal Signal

```
n8n trigger: HOT_reply OR MEETING_REQUEST from Layer 3

On HOT_reply:
  → Read: account card, ADB (already in Slack from Layer 3)
  → Create deal record in HubSpot (see HubSpot fields below)
  → Create entry in engine/deals.md
  → Set deal stage: Stage 0 (HOT)
  → DHS initial: 50 (formula output at Stage 0 — Recency 25 + Velocity 20 + Competitive 5;
                     DM/Budget/Champion dimensions are all 0 until confirmed post-discovery)
  → Arm cold call for Day 3 (if Tier 1, phone number available)

On MEETING_REQUEST (calendar link already sent):
  → Read: account card, ADB
  → Create deal record in HubSpot
  → Set deal stage: Stage 1 (Meeting Set)
  → DHS initial: 50 (same formula output — meeting confirms intent but DM/Budget/Champion
                     dimensions require discovery call to score above 0)
  → Arm cold call for Day 3 post-meeting (if no-show protocol fires)
  → Calendar webhook armed for meeting confirmation

DHS Stage 0–1 note: All new deals will naturally score 45–55 at entry because Decision Maker
(15 pts), Budget Signal (15 pts), and Champion Engaged (10 pts) cannot be confirmed until after
the discovery call. This is expected and correct — do NOT treat a DHS of 50 on Day 1 as a stall
signal. Stall alerts only fire after Day 7 of no touch, not based on entry DHS alone.
```

### Step 1B — HubSpot Deal Creation

```
API call: POST /crm/v3/objects/deals
Fields created:
  dealname:          "[Company] — [Contact] — [Hypothesis]"
  dealstage:         "HOT" or "Meeting Set"
  amount:            [ACV estimate from Layer 2 data]
  closedate:         [today + 90 days estimated]
  pipeline:          "SELLL SELLL Revenue Pipeline"
  hs_deal_stage_probability: [70 for HOT, 75 for meeting set]

  Custom properties:
  reply_probability:    [from Layer 2 score]
  bis_score:            [from Layer 3 — frozen at HOT]
  dhs_score:            50 (formula output at Stage 0 — see Step 1A note)
  hypothesis:           [H1–H7 + compound]
  sequence_variant:     [from Layer 2]
  warm_path:            [from Layer 2]
  adb_filed:            true
  discovery_score:      [populated after discovery call]
  proposal_auto_generated: false (updated after Phase 3)
  days_to_close:        [tracked from deal creation]
```

### Step 1C — deals.md Entry

```
n8n writes new row to engine/deals.md:
  Company | Contact | Stage | DHS | ACV est | Last Touch | Next Action | Days in Stage
```

### Step 1D — Aaron's Deal Alert (Slack)

```
📊 NEW DEAL ENTERED PIPELINE — [Company]
─────────────────────────────────────────────────────────────────
Contact: [Name], [Title] | Stage: [HOT / Meeting Set]
ACV Estimate: $[N] | Hypothesis: [H-code]
BIS at Entry: [score] | Reply Probability: [score]
DHS: [score] (new deals start at 50 — rises after discovery confirms DM/Budget/Champion)

ADB: [link to Slack message from Layer 3]
Account card: engine/accounts/[slug].md

Next actions queued:
  □ [Day 3] Cold call script generated — engine/call-queue.md
  □ [Day 2 post-meeting] Post-call nurture sequence queued
  □ Weekly: DHS update + pipeline dashboard
```

---

## Phase 2: Post-Discovery Nurture

### Step 2A — Discovery Call Intake

After Aaron's discovery call, he logs the call summary in Slack (one message). n8n receives it and:

```
n8n action on discovery call log:
  1. Extract discovery score from Aaron's notes (0–25 rubric: Pain/Budget/Authority/Timing)
  2. Update HubSpot: discovery_score = [N]
  3. Route by score:
     ≥ 18 → Stage 3 Evaluation → trigger Phase 3 (Proposal Intelligence)
     12–17 → Stage 2 Evaluation → trigger deal-nurture Stage 2 sequence
     < 12 → Stage 7 Lost → update institutional-memory/losses.md
             reason logged, HubSpot closed-lost, Slack alert

  4. Pull persona + proof + pain from ADB and account card
  5. Auto-generate post-call nurture sequence (deal-nurture skill Stage 1)
  6. Deliver to Slack for Aaron review: "Nurture sequence for [Company] — 4 emails, approve?"
  7. Update DHS: discovery_score ≥ 18 → +15, 12–17 → +8, < 12 → deal closed
```

### Step 2B — Post-Discovery Sequence (Stages 1 & 2)

**Stage 1 email sequence fires automatically** (deal-nurture skill) when Aaron approves:

```
Day 1 (within 4h):  Email 1 — Call summary (exact pain + agreed next step)
Day 3:              LinkedIn — substantive comment on their most recent post
Day 3:              Cold call (Tier 1 only — if DHS < 70 after Day 2)
Day 5:              Email 2 — Value reinforcement (most relevant case study)
Day 7:              LinkedIn — engage post again
Day 10:             Email 3 — Business case hook (math for their CFO)
Day 14:             Email 4 — Momentum check (if no response)
```

**Personalization rules:**
- Every email references one specific thing they said on the discovery call
- Proof point = assigned from ADB (already matched to their vertical + persona)
- Subject lines: never generic. Always reference company name or their exact words
- Sender: Aaron's personal email (NOT campaign sequencer)

### Step 2C — Multi-Stakeholder Management

When CED has fired (2+ contacts engaged from Layer 3):

```
If deal has multiple stakeholders:
  Primary contact → lead nurture (Stage 1/2 as above)
  Champion contact → champion enablement email (separate thread)

  Champion enablement email (Day 2 post-discovery):
  "Hi [Champion name],
   Thanks for being part of the conversation. If [primary] is building the
   internal case, here are the three things that land best with [CEO/CFO/CRO]:
   1. [Outcome + numbers]
   2. [Risk reducer — 90-day build, defined deliverable]
   3. [Social proof — proof point relevant to their vertical]
   Happy to join a call with [primary + internal stakeholder] if that helps.
   Aaron"
```

### Step 2D — Deal Stall Detection

```
n8n daily check (runs at 06:00 UTC):
  For every deal in Stages 1-5:
    days_since_last_touch = today - last_touch_date
    
    if days_since_last_touch ≥ 7 AND DHS ≥ 40:
      → Slack: "⚠️ STALL ALERT — [Company] / [Contact]
                 [N] days since last touch. DHS: [score].
                 Stage: [N]. Next action: [suggested action from deal health]
                 Account card: engine/accounts/[slug].md"
      → Add to priority-board.md

    if days_since_last_touch ≥ 10:
      → Stage → "Stalled" (Stage 8)
      → DHS recalculated → near zero
      → Trigger Stage 5 re-engagement sequence from deal-nurture skill
      → Slack: "🚨 DEAL AT RISK — [Company] has gone quiet 10+ days"
```

---

## Phase 3: Proposal Intelligence

Triggered when discovery score ≥ 18 or when contact explicitly asks for a proposal.

### Step 3A — Auto-Proposal Generation

```
n8n trigger: discovery_score ≥ 18 OR Aaron flags "generate proposal"

Claude API call (proposal generation):
  System prompt: [from brain/proposal-template.md — CEO-ready proposal spec]
  User prompt assembled by n8n:
    CONTACT: {{full_name}}, {{title}} @ {{company_name}}
    DISCOVERY PAIN: {{extracted_pain_verbatim}}
    DISCOVERY SCORE: {{discovery_score}}/25
    TIMELINE: {{stated_timeline}}
    AUTHORITY: {{authority_status}}
    BUDGET: {{budget_signal}}
    SDR COUNT: {{sdr_team_size}}
    SEQUENCER: {{sequencer_tool}}
    ARR EST: {{arr_estimate}}
    FUNDING: {{funding_stage}}, {{days_since_funding}} days ago
    HYPOTHESIS: {{hypothesis}} — {{hypothesis_description}}
    PROOF ASSIGNED: {{assigned_proof_point}} — {{proof_outcomes}}
    ROI CALC: {{roi_calculator output for their numbers}}
    VERTICAL: {{primary_vertical}}
    WARMTH: {{warm_path_type}}

Output: Full proposal markdown →
  engine/accounts/[slug]-proposal-draft.md
  Delivered to Slack: "Proposal draft for [Company] ready — review before send"
```

### Step 3B — Proposal Contents (auto-generated)

Every proposal is 4 pages / 5 sections:

```
SECTION 1: SITUATION (1 page)
  — Their exact pain in their own words (from discovery notes)
  — What the current state is costing them (ROI calc from brain/roi-calculator.md)
  — Why now (timing signal: days in role, post-raise window, competitor frustration)

SECTION 2: THE SYSTEM WE BUILD FOR [COMPANY] (1.5 pages)
  — 90-day build plan with specific deliverables
  — What happens in Week 1, Week 4, Week 8, Day 90
  — What they own at the end (not a retainer — a built system)
  — What their team needs to do vs. what we handle

SECTION 3: PROOF (0.5 pages)
  — Single proof point matched to their situation
  — Numbers: before / after / time to result
  — One-sentence quote (paraphrase if not confirmed)

SECTION 4: INVESTMENT (0.5 pages)
  — $15,000 setup + $3,000/month retainer
  — ROI calculation using their specific numbers
  — Payback timeline
  — "What it costs to wait 30 days" calculation

SECTION 5: NEXT STEPS
  — What happens after signing (Day 1, Day 7, Day 30)
  — Contract link (DocuSign / PandaDoc)
  — Questions prompt
```

### Step 3C — Proposal Tracking

```
When proposal is sent (Aaron confirms in Slack "proposal sent to [Company]"):
  n8n updates:
    HubSpot: deal_stage → "Proposal"
    deals.md: Stage 4, last_touch = today
    DHS update: proposal_sent = true → DHS +10

When proposal is opened (DocuSign/PandaDoc webhook):
  n8n updates:
    HubSpot: proposal_viewed = true, proposal_view_date = [timestamp]
    DHS update: proposal_opened = +10
    Slack: "📄 [Contact] at [Company] opened the proposal — DHS now [score]"

When proposal is opened 2+ times:
  Slack: "📄📄 [Company] viewed proposal [N] times in [N] days
           DHS: [score] → accelerate close sequence"
```

### Step 3D — Proposal Follow-Up Sequence

Auto-fires when proposal is sent. Managed by deal-nurture Stage 3 sequence:

```
Day 2:   Email — "wanted to make sure the proposal landed" + highlight key ROI number
Day 5:   Email — "if [Company] starts in [month], live by [month + 3]" + cost of waiting
Day 5:   Cold call (Tier 1) — "walking through any questions on the proposal"
Day 10:  Email — "worth a 20-min call with your [CEO/CFO] to answer exec-level questions?"
Day 14:  Email — soft deadline (capacity / new client starting)
Day 14:  Cold call — final push
```

---

## Phase 4: Close Assist

Triggered when prospect says "yes" / requests contract.

### Step 4A — Contract Execution

```
Aaron sends contract via DocuSign / PandaDoc.
n8n monitors:
  → Contract viewed: Slack alert (as proposal above)
  → Contract signed: triggers Layer 5 onboarding
  → Contract not opened 3 days: follow-up sequence fires

Contract follow-up sequence (deal-nurture Stage 4):
  Day 1: "Contract is in your inbox — let me know if legal has any questions"
  Day 3: "Quick check-in — any modifications needed?"
  Day 7: "Last check-in on the contract. If timing shifted, just say the word."
```

### Step 4B — Executive Pull-Through

When deal is stuck at Stage 4 or 5 (champion says yes but no contract):

```
Trigger: DHS < 60 at Stage 4/5 for 7+ days

Action:
  Slack: "🔴 Close stall — [Company]. DHS [score].
           Champion confirmed. No contract.
           Recommended: executive pull-through.
           Draft: 'Would it help to bring your [CEO/CFO] into
           a 20-min call to answer exec-level questions?'"
  Aaron approves → email sends → escalates above champion if needed
```

### Step 4C — Competitive Displacement in Close

When a competitor is named during close stage:

```
Trigger: Aaron logs "[Competitor] mentioned" in deal notes

Actions:
  1. Load brain/competitive-battlecards.md — [Competitor] card
  2. Claude generates competitive positioning for this specific deal:
     — What we do that [Competitor] can't
     — Which proof point is most relevant
     — The one-liner Aaron should say on the call
  3. Delivered to Slack: "Competitive intel for [Company] close — [Competitor] named"
```

---

## Phase 5: Pipeline Health Intelligence

### Step 5A — Daily Pipeline Dashboard (Slack)

Fires every morning at 06:30 UTC.

```
📊 PIPELINE DASHBOARD — [Date]
══════════════════════════════════════════════════════
TOTAL ACTIVE DEALS: [N] | PIPELINE VALUE: $[N] (weighted)

STAGE SUMMARY:
  Stage 0 HOT:         [N] deals | [$N] value
  Stage 1 Meeting Set: [N] deals | [$N] value
  Stage 2 Discovery:   [N] deals | [$N] value
  Stage 3 Evaluation:  [N] deals | [$N] value
  Stage 4 Proposal:    [N] deals | [$N] value
  Stage 5 Close:       [N] deals | [$N] value

DHS DISTRIBUTION:
  🟢 GREEN (80+):    [N] deals — [names]
  🟡 AMBER (60-79):  [N] deals — [names]
  🔴 RED (40-59):    [N] deals — [names, all need attention today]
  💀 CRITICAL (<40): [N] deals — [names, emergency escalation]

TODAY'S ACTIONS (auto-generated):
  □ Call: [Company] (Day 3 post-discovery — script: engine/call-queue.md)
  □ Send: [Company] proposal follow-up Day 5
  □ Review: [Company] ADB before meeting at [time]
  □ Approve: [Company] nurture sequence (Slack message above)

STALLED DEALS:
  ⚠️ [Company] — [N] days no touch | Stage [N] | DHS [score]
══════════════════════════════════════════════════════
```

### Step 5B — Pipeline Forecast (Weekly)

Every Friday, n8n runs pipeline forecast and appends to revenue-reporting:

```
PIPELINE FORECAST — Week of [Date]
─────────────────────────────────────────────────────────────────
Stage         | Count | Avg ACV | Close Rate | Weighted Value | Exp Close
──────────────┼───────┼─────────┼────────────┼───────────────┼───────────
HOT/Meeting   |  [N]  | $[N]    | 35%        | $[N]          | 14-30 days
Discovery     |  [N]  | $[N]    | 30%        | $[N]          | 30-60 days
Evaluation    |  [N]  | $[N]    | 40%        | $[N]          | 30-45 days
Proposal      |  [N]  | $[N]    | 55%        | $[N]          | 7-21 days
Close         |  [N]  | $[N]    | 80%        | $[N]          | 1-7 days
──────────────┼───────┼─────────┼────────────┼───────────────┼───────────
TOTAL         |  [N]  | $[N]    |            | $[N]          |

Monthly breakdown:
  This month:   $[N] weighted | $[N] commit | $[N] stretch
  Next month:   $[N] weighted
  90-day total: $[N] weighted

CAC this quarter: $[N]/deal | Payback: [N] months
Pipeline coverage ratio: [N]x (target: 3x)
─────────────────────────────────────────────────────────────────
```

### Step 5C — DHS Auto-Update (n8n daily job)

```
n8n workflow: selllo-dhs-update (runs daily 05:30 UTC)
For each deal in deals.md:

  1. Calculate days_since_last_touch from HubSpot last_modified
  2. Calculate days_in_stage from HubSpot stage_change_date
  3. Recalculate DHS (7 dimensions, fresh score)
  4. Compare DHS to yesterday's score:
     - Delta > -20: flag in Slack ("DHS dropped sharply — [Company]")
     - Delta < 0 for 3 consecutive days: escalate
  5. Update HubSpot: dhs_score = [new]
  6. Update deals.md: DHS column
  7. Send pipeline dashboard (Step 5A) after all DHS scores updated
```

---

## Layer 4 Amplifiers

### Cold Call (Wired In)

| Trigger | Action |
|---------|--------|
| Day 3 post-HOT reply | Script generated for Tier 1 contacts. Aaron calls from engine/call-queue.md |
| Day 8 post-email sequence | Script generated, voicemail armed |
| DHS < 60 + Stage 2/3 stall | Immediate call escalation |
| Proposal viewed 2+ times, no reply Day 5 | "Walk through proposal" call queued |

Cold call skill: `skills/selll/cold-call/SKILL.md`
Call queue: `engine/call-queue.md`
Call log: `engine/call-log.md`

### LinkedIn Content (Wired In)

Active deals benefit from LinkedIn content in two ways:
1. **Social proof during nurture** — if a post goes live about a relevant case study, send it to open deals immediately: "Just published something relevant to what we discussed"
2. **Post engager routing** — if a prospect at an open deal company engages with content, BIS/DHS update fired

Slack trigger: "📣 NEW POST PUBLISHED — share with open deals? [Y/N]"

---

## Layer 4 → Layer 5 Handoff

```
Trigger: Contract signed (DocuSign/PandaDoc webhook)

n8n Layer 5 handoff:
  1. HubSpot: deal_stage → "Won", hs_deal_stage_probability = 100
  2. deals.md: Stage → "Won", close_date = today, final_acv = [contract value]
  3. Update institutional-memory/wins.md (win pattern + 10-dimension analysis)
  4. Create entry in engine/clients.md (new active client)
  5. Trigger Layer 5: client-activation protocol
  6. Trigger referral-engine: "New client — referral ask scheduled Day 45"
  7. Slack: 🎉 DEAL WON — [Company] / [Contact] / $[ACV]
             "Layer 5 activated. Client activation protocol starting."

  Layer 3 note: Stop any residual sequence for this company/contact (already done
  at HOT stage, but double-check).
```

---

## Layer 4 Automation Map

| What | Automated | Aaron Does |
|------|-----------|-----------|
| Deal intake from Layer 3 | ✅ Fully auto | Review Slack deal alert |
| HubSpot deal creation | ✅ Fully auto | Nothing |
| deals.md entry | ✅ Fully auto | Nothing |
| Discovery score routing | ✅ Routes automatically | Log discovery score |
| Post-call sequence generation | ✅ Claude generates | Approve sequence in Slack |
| Post-call sequence sending | ✅ Staged automatically | Nothing once approved |
| Proposal generation | ✅ Claude generates | Review + send |
| Proposal tracking (opened/viewed) | ✅ DocuSign webhook | Nothing |
| DHS daily update | ✅ n8n daily job | Nothing |
| Stall detection | ✅ n8n daily job | Act on Slack alert |
| Pipeline dashboard | ✅ Auto Slack daily | Review |
| Pipeline forecast | ✅ Auto weekly | Review numbers |
| Cold call queue | ✅ Generated daily | Make the calls |
| Contract follow-up sequence | ✅ Auto-fires | Nothing |
| Won → Layer 5 handoff | ✅ DocuSign webhook | Nothing |

---

## Files Created / Updated by Layer 4

```
engine/deals.md                          — live deal tracker (created here)
engine/call-queue.md                     — daily call list (updated here)
engine/call-log.md                       — call outcome log (updated here)
engine/priority-board.md                 — stalled deals / urgent actions
engine/accounts/[slug].md                — updated with deal stages + DHS history
engine/accounts/[slug]-proposal-draft.md — auto-generated proposal
brain/institutional-memory/wins.md       — won deal patterns
brain/institutional-memory/losses.md     — lost deal patterns
```

---

## n8n Workflows (Layer 4)

| Workflow | Trigger | Actions |
|----------|---------|---------|
| `selllo-deal-intake` | HOT/MEETING_REQUEST from Layer 3 | Create deal, DHS, Slack, deals.md |
| `selllo-dhs-update` | Daily 05:30 UTC | Recalculate all DHS, dashboard |
| `selllo-stall-detector` | Daily 05:30 UTC | Flag 7d/10d stalls, escalate |
| `selllo-proposal-tracking` | DocuSign/PandaDoc webhook | Log opens, update DHS |
| `selllo-contract-signed` | DocuSign signed event | Won → Layer 5 handoff |
| `selllo-pipeline-forecast` | Every Friday 06:00 UTC | Weighted forecast, Slack |

---

## Layer 4 Run Log

| Date | Deals Entered | Proposals Sent | Calls Made | Meetings | Deals Won | Pipeline Value |
|------|--------------|----------------|------------|---------|-----------|---------------|
| (awaiting first live campaign) | — | — | — | — | — | — |

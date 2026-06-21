# CRM Hygiene — SELLL.io
> Brain Layer: Execution | Updated: 2026-06-21
> Inspired by: Anfloy's MAINTAIN agent — "18,000 CRM records cleaned in 2 days"
> Runs: Daily pulse check (5 min) + Weekly deep clean (30 min)

A dirty CRM is worse than no CRM. Stale deals, wrong stages, missing fields, and duplicate contacts corrupt every report, every forecast, and every re-engagement decision the brain makes. This agent keeps the CRM clean so every other skill is working with accurate data.

---

## The Two Operating Modes

### Mode 1: Daily Pulse (5 minutes, every morning)
Scan for urgent issues that will corrupt today's work if not fixed.

### Mode 2: Weekly Deep Clean (30 minutes, every Monday)
Full hygiene pass across all active deals, contacts, and companies.

---

## Daily Pulse Checklist

Run every morning before any outreach or pipeline review:

```
□ STALE REPLY ALERTS
  Check inbox-reply log — any reply received yesterday that hasn't been routed yet?
  Action: Route immediately per reply-routing.md before any new sends go out

□ OVERDUE NEXT ACTIONS
  Any deal in state.md with a "Next Action" date that has passed?
  Action: Escalate — send the overdue email or make the overdue call today

□ MEETING BRIEFS DUE
  Any meetings scheduled for today or tomorrow without a pre-call brief generated?
  Action: Run call-intelligence.md pre-call brief generation immediately

□ BOOKING SPEED CHECK
  Any HOT reply (Category 1) from yesterday that hasn't received a booking email yet?
  Action: Send the booking email NOW — every hour of delay costs meetings

□ NEW MULTI-THREAD CONFLICTS
  Any account where one thread received a positive reply but other threads are still active?
  Action: Pause all parallel threads immediately (multi-thread rule 1)

□ DELIVERABILITY ALERT
  Open rate on yesterday's sends < 15%? Bounce rate > 1%?
  Action: Pause all campaigns, investigate before any new sends
```

---

## Weekly Deep Clean Checklist (Every Monday)

### Section 1: Deal Hygiene

```
□ STALE DEALS (5+ days without any touch)
  Pull all deals in state.md where "Last Touch" date is > 5 days ago
  For each stale deal: determine if it's stuck, ghosted, or needs a follow-up
  Action per stale deal:
    - Stuck in proposal: send a one-line check-in
    - Ghosted: determine if the deal is dead or needs a different contact
    - Missing next action: assign a specific next step with a date

□ WRONG STAGE DEALS
  Any deal where the stage in state.md doesn't match the last activity?
  Example: stage = "Proposal Sent" but no record of a proposal being sent
  Action: Correct the stage — log what actually happened

□ MISSING FIELDS
  For every deal in Stage 2+, confirm these fields are filled:
    - Estimated ACV
    - Decision maker name + title
    - Decision process (who signs)
    - Timeline (when they want to start)
    - Primary pain (stated in their words)
    - Objections raised
  Action: If any field is blank → pull from call-intelligence.md notes or ask on next touch

□ DEAL VELOCITY ALERTS
  Any deal that has been in the same stage for longer than the benchmark?
    Stage 1 (Meeting Requested → Meeting Held): > 7 days → follow up or reschedule
    Stage 2 (Discovery → Proposal): > 5 days → send proposal or get a date
    Stage 3 (Proposal → Decision): > 14 days → pressure test the timeline
    Stage 4 (Decision → Signed): > 7 days → contracts rarely need more than a week
  Action: Flag for immediate outreach. A deal that sits too long dies quietly.

□ CLOSED DEALS NOT DEBRIEFED
  Any deal marked Closed Won or Closed Lost in the last 7 days that hasn't had
  a win/loss analysis run?
  Action: Run the full analysis immediately and update wins.md or losses.md
```

---

### Section 2: Contact Hygiene

```
□ BOUNCED EMAIL ADDRESSES
  Pull any contact with a hard bounce logged in the sequencer
  Action:
    1. Remove from all active campaigns
    2. Try to find a new email via FullEnrich
    3. If new email found: re-verify before re-adding
    4. If no email found: LinkedIn-only path or remove from active pipeline

□ DEPARTED CONTACTS
  Any contact where LinkedIn shows they've left the company?
  Check: any contact in an active sequence where the LinkedIn profile shows a new employer
  Action:
    1. Suppress the departed contact immediately
    2. Research who replaced them at the company
    3. If company is still ICP-fit: warm outreach to the new person using the
       "replacement outreach" template from trigger-playbooks.md (Playbook 2 adaptation)

□ WRONG PERSON IN PIPELINE
  Any contact who replied "not my area" or redirected to someone else who we
  haven't updated yet?
  Action: Replace the primary contact in state.md with the correct person

□ DUPLICATE CONTACTS
  Any company with 2+ contacts all in separate campaigns without multi-thread coordination?
  Action: Consolidate under the multi-thread/{slug}-schedule.md framework
  Ensure Thread A / B / C are coordinated, not running independently

□ DNC VIOLATIONS
  Any contact in an active campaign who is on the DNC list in selll_context.md?
  Action: Suppress immediately, investigate how they got into the campaign
```

---

### Section 3: Pipeline Accuracy Check

```
□ PIPELINE VALUE RECONCILIATION
  Add up all estimated ACVs in state.md Stage 2+
  Does this match the weekly report pipeline number?
  If not: find the discrepancy and correct it

□ CLOSE DATE ACCURACY
  Any deal with a close date in the past that hasn't moved?
  Action: Update the close date based on the actual timeline from the last interaction

□ FORECAST CATEGORY CHECK
  Every deal Stage 2+ should have a forecast category:
    COMMIT: > 80% likely to close this period — specific close date confirmed
    BEST CASE: 50-80% — prospect engaged, timeline unclear
    PIPELINE: 25-50% — discovery done, proposal stage
    NURTURE: < 25% — conditional, timing issue, or stalled
  Action: Assign or update the category for any deal that's missing it

□ RE-ENGAGEMENT QUEUE REVIEW
  Open re-engagement-queue.md — any accounts in the queue where the trigger
  is older than the urgency window?
  Example: CRITICAL signal (24h) but re-engagement hasn't been sent in 48h
  Action: Either send the re-engagement sequence or remove from the queue if the
  trigger is expired (replace with "monitor for next trigger")
```

---

### Section 4: List Health

```
□ SUPPRESSION LIST SYNC
  Any prospect who replied with a HARD NO (Category 7) this week but
  isn't yet on the DNC list in selll_context.md?
  Action: Add to DNC immediately. Remove from all active sequences.

□ HYPOTHESIS PERFORMANCE FLAG
  Any hypothesis that has had 50+ sends with < 2% reply rate this week?
  Action: Flag for rotation — reduce list size, test a different angle
  (This is Loop 1 in learning-loops.md — just the weekly trigger)

□ DOMAIN HEALTH SNAPSHOT
  Check Google Postmaster — is the sending domain still rated HIGH?
  Check mxtoolbox.com — is the sending IP on any blacklist?
  Action: If either is degraded → escalate to deliverability-rules.md Protocol A or B
```

---

## HubSpot Field Standards

When SELLL.io's HubSpot is set up, these are the required fields for every contact and deal. The CRM hygiene agent flags any record missing these fields.

### Required Contact Fields
| Field | What It Tracks | Source |
|-------|---------------|--------|
| First Name / Last Name | Identity | Manual / enrichment |
| Company | Organization | Manual / enrichment |
| Job Title | Persona classification | Manual / enrichment |
| Email | Primary outreach address | Prospeo / FullEnrich |
| LinkedIn URL | Profile for signal monitoring | Manual / enrichment |
| Lead Score | 0–100 ICP score | lead-scoring skill |
| Tier | 1 / 2 / 3 | lead-scoring skill |
| Hypothesis | H1–H7 trigger | list-building skill |
| Persona Type | CRO / Founder / VP Sales | lead-scoring skill |
| Signal Trigger | What triggered entry | signal-monitor |
| Campaign | Which sequence they're in | email-generation |
| Last Reply Date | Most recent interaction | inbox-reply |
| Reply Category | HOT / WARM / OBJECTION / etc. | reply-routing |
| DNC | Y/N | deal-nurture / inbox-reply |

### Required Deal Fields
| Field | What It Tracks | Source |
|-------|---------------|--------|
| Deal Name | [Company] — [Persona] — [Date] | Auto-created |
| Stage | 1–6 per deal-nurture stages | deal-nurture |
| Estimated ACV | Expected annual contract value | discovery call |
| Close Date | Expected close date | discovery call |
| Primary Pain | Prospect's stated pain (their words) | call-intelligence |
| Decision Maker | Who signs the contract | discovery call |
| Decision Timeline | When they plan to decide | discovery call |
| Objections Raised | Which objections surfaced | call-intelligence |
| Competitors Mentioned | Which alternatives they're evaluating | call-intelligence |
| Proof Point Landed | Which case study they responded to | call-intelligence |
| Forecast Category | COMMIT / BEST CASE / PIPELINE / NURTURE | Manual |
| Win/Loss Reason | Why the deal closed the way it did | deal-nurture |
| Referral Ask Date | When the referral ask was sent | referral-engine |

---

## CRM Hygiene Log

| Date | Mode | Issues Found | Issues Resolved | Time Spent | Notes |
|------|------|-------------|-----------------|-----------|-------|
| 2026-06-21 | Setup | — | — | — | CRM not yet connected — hygiene begins at engine launch |

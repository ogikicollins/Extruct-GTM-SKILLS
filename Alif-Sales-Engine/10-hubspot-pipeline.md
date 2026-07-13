# HubSpot Pipeline Setup + Pre-Sale Automation
> Collins Ogiki | ALIF Agency
> Build spec for Milan + Amir. HubSpot Pro — configure this before anything else.

---

## Pipeline Stages

One pipeline: **"ALIF Outbound"**

| Stage | Definition | Probability | Auto-Action |
|-------|-----------|-------------|------------|
| Signal / Lead | Identified by Apex or signal monitor. Not yet contacted. | 5% | Auto-assign to Collins in HubSpot |
| Sequence Active | In Apex/Instantly sequence. Emails sending. | 10% | Enroll in pre-engagement LinkedIn workflow |
| Engaged | Opened email 3x+ OR clicked OR replied (any type) | 20% | Slack alert to Collins: "[Name] is engaging" |
| Positive Reply | Replied positively. Auto-response sent. | 35% | Fire AI Lead Response workflow (see `05`) |
| Meeting Booked | Calendly booking confirmed | 50% | Fire Pre-Sale Automation workflow (see `04`) |
| Meeting Held | Call happened. Score logged. | 60% | Fire post-call task sequence |
| Proposal Sent | Proposal delivered | 70% | Start 3-touch follow-up sequence |
| Verbal Yes | Prospect said yes. Contract not signed. | 85% | Fire PandaDoc contract workflow |
| WON | Contract signed | 100% | Onboarding sequence + Day-30 referral timer |
| LOST | Closed lost | 0% | Loss reason required. Re-engage timer set. |
| Nurture | Not ready now | 0% | 60–90 day re-engage sequence queued |

---

## Required Custom Properties (Add to Contact + Deal)

**Contact level:**
```
region                Select    MENA / EU / US
icp_score             Number    0–100 (from Clay)
icp_grade             Select    A+ / A / B / C / D
signal_type           Select    Funding / New CMO / Bad Ads / New Location / Other
sequence_id           Select    A / B / C / Referral / Apex
linkedin_url          Text      Auto-pulled from Apollo
linkedin_connected    Checkbox  Updated by Expandi webhook
reply_classification  Select    Positive / Objection / Not Now / Unsubscribe
reply_date            Date      Auto-set by workflow
```

**Deal level:**
```
discovery_date        Date      Auto-set on Calendly booking
discovery_score       Number    1–5 (Kaya logs manually)
qualified             Checkbox  Auto-set when score ≥ 4.0
proposal_tier         Select    Brand Sprint / Growth Retainer / Full Partner
proposal_value        Currency  Collins fills manually
proposal_currency     Select    AED / GBP / USD (auto-set by region)
loss_reason           Select    Budget / Timing / Competitor / No Pain / Wrong Fit
re_engage_date        Date      Set on Nurture or LOST
referral_ask_sent     Checkbox  Auto-set Day 30
```

---

## Key Workflows to Build (Milan)

### Workflow 1: Positive Reply → AI Response (Priority 1)
**Trigger:** Contact property `reply_classification` = "Positive"
**Actions:**
1. Enroll in "Positive Reply Fast Response" email sequence (4-minute delay)
2. Send Slack notification to `#sales-live`
3. Create task for Collins: "Call [Name] if no booking in 72h"
4. Add to Expandi "Positive Reply Connect" campaign (LinkedIn connection)
5. Update deal stage → "Positive Reply"

### Workflow 2: Calendly Booking → Pre-Sale Prep
**Trigger:** Meeting created (Calendly integration)
**Actions:**
1. Update deal stage → "Meeting Booked"
2. Send pre-call asset email to prospect (T-24h)
3. Send Slack notification: "📅 [Name] @ [Company] booked for [time]"
4. Create Asana tasks via Zapier (Collins prep + Amir ops)
5. Queue WATI WhatsApp reminder (T-60 min, MENA only)
6. Set HubSpot task: "Log discovery score after call"

### Workflow 3: Meeting Held → Proposal or Nurture
**Trigger:** Deal stage moved to "Meeting Held" by Collins
**Actions:**
1. If `discovery_score` ≥ 4.0: create task "Send proposal today"
2. If `discovery_score` < 4.0: move deal to Nurture, set `re_engage_date` = today +60 days
3. Send post-call email (template in `04-pre-sale-automation.md`)
4. Update Slack: "[Name] call held. Score: [X]. [Qualified/Not Qualified]"

### Workflow 4: No Booking After Positive Reply (72h)
**Trigger:** `reply_classification` = Positive AND `meetings_booked` = 0 AND reply date was 72h ago
**Actions:**
1. Send 72h follow-up email
2. Create task for Collins: "Call [Name] today — 72h no-book"
3. Slack alert: "⚠️ [Name] replied 72h ago. No booking. Call today."

### Workflow 5: Deal Won → Onboarding + Referral Timer
**Trigger:** Deal stage = "WON"
**Actions:**
1. Enroll in onboarding email sequence
2. Send Slack: "🏆 WON — [Company] | AED [value]"
3. Set task: "Referral ask — Day 30"
4. Create Google Sheets row in client tracker

### Workflow 6: Re-Engage Date = Today
**Trigger:** `re_engage_date` = today (daily check)
**Actions:**
1. Create task for Collins: "Re-engage [Name] today"
2. Slack alert with their context (what was said last time, how long ago)
3. Enroll in re-engagement email sequence (3 emails, warmer tone)

---

## HubSpot Views to Configure

| View | Filter | Purpose |
|------|--------|---------|
| Hot List | Engaged or Positive Reply, last 7 days | Collins' daily priority list |
| MENA Pipeline | Region = MENA | MENA-specific review |
| EU Pipeline | Region = EU | EU-specific review |
| US Pipeline | Region = US | US-specific review |
| Stalled Deals | Stage = Meeting Booked AND no activity 7d | Flag for intervention |
| Nurture Queue | Stage = Nurture AND re_engage_date within 14 days | Proactive nurture management |
| Won This Month | Stage = WON AND close date = this month | Celebrating + tracking |

---

## HubSpot Dialer Setup

HubSpot Pro includes a dialer but it's single-call. Use JustCall instead (see `08-power-dialer-research.md`). Connect JustCall → HubSpot via native integration so all calls auto-log.

**JustCall → HubSpot sync:**
- Call logged automatically on hang-up
- Disposition set by Collins from JustCall app
- Recording linked in HubSpot contact record
- AI summary populated in HubSpot notes field

---

## Week 1 Build Sequence (Once HubSpot Pro is provisioned)

| Day | Task | Who |
|-----|------|-----|
| Day 1 | Create pipeline stages + custom properties | Milan |
| Day 1 | Import Apex lead list into HubSpot | Amir |
| Day 2 | Build Workflow 1 (Positive Reply) | Milan |
| Day 2 | Build Workflow 2 (Calendly booking) | Milan |
| Day 3 | Connect Calendly → HubSpot | Milan |
| Day 3 | Connect JustCall → HubSpot | Milan |
| Day 4 | Build Workflows 3, 4, 5 | Milan |
| Day 4 | Set up all 7 pipeline views | Collins |
| Day 5 | Test all workflows with dummy data | Collins + Milan |
| Day 5 | Go live | All |

---

*HubSpot Pipeline Setup — Collins Ogiki | ALIF Agency | June 30 2026*

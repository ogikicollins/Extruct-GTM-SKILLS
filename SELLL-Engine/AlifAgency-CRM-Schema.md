# ALIF Agency — Clarify CRM Schema
> SELLL.io GTM Engineering | 2026-06-28
> Full pipeline configuration, custom fields, deal scoring, and automation triggers

---

## Pipeline Configuration

Clarify uses a Kanban-style pipeline. Configure ONE pipeline for ALIF Agency outbound: **"Revenue Engine — Outbound"**

### Stage Definitions

| Stage # | Stage Name | Definition | Auto-actions |
|---------|-----------|------------|--------------|
| 0 | Signal Detected | Company identified via signal monitor. Enrichment in progress. | n8n → Clay enrichment triggered |
| 1 | Sequence Active | Lead added to Instantly sequence. Pre-engagement started on LinkedIn. | Expandi campaign enrolled |
| 2 | Engaged | Prospect opened email 3x OR clicked OR replied (any type) | Lead score +behavioral points |
| 3 | Conversation Live | Active reply thread (Objection or Not Now routing) | Claude API draft in Slack queue |
| 4 | Discovery Scheduled | Meeting booked via Calendly | n8n → pre-call brief generated + Slack alert |
| 5 | Discovery Held | Call happened. Kaya logs qualification score. | n8n → post-call email + proposal generation |
| 6 | Proposal Sent | Proposal delivered (email + WhatsApp/LinkedIn follow-up per region) | Follow-up sequence starts |
| 7 | Verbal Commitment | Prospect said yes, contract not yet signed | n8n → contract via PandaDoc triggered |
| 8 | WON — Active Client | Contract signed. Engagement active. | Onboarding sequence + Day-30 referral timer |
| 9 | LOST | Deal closed-lost | Loss reason required. Re-engage timer or DNC set. |
| 10 | NURTURE | Not ready now. Re-engage at defined date. | Signal watch active. Re-engage email queued. |
| 11 | DNC | Do Not Contact — permanent | Global suppress in Instantly + Expandi |

---

## Custom Fields (Add to Every Deal)

### Company Fields
```
Field Name              | Type          | Source
──────────────────────────────────────────────────────────
company_name            | Text          | Clay auto-fill
domain                  | Text          | Clay auto-fill
region                  | Select        | Clay auto-fill (MENA / EU / US)
country                 | Text          | Clay auto-fill
employee_count          | Number        | Clay auto-fill
revenue_estimate        | Select        | Clay auto-fill (ranges)
funding_stage           | Select        | Clay auto-fill
last_funding_date       | Date          | Clay auto-fill
icp_segment             | Select        | Clay auto-fill (Primary / Secondary / Tertiary)
icp_score               | Number        | Clay auto-fill (0–100)
grade                   | Select        | Clay auto-fill (A+ / A / B / C / D)
tech_stack              | Text          | Clay auto-fill
instagram_handle        | Text          | Clay auto-fill
fb_ads_running          | Checkbox      | Clay auto-fill
```

### Lead/Signal Fields
```
Field Name              | Type          | Source
──────────────────────────────────────────────────────────
signal_type             | Select        | n8n signal monitor
signal_date             | Date          | n8n signal monitor
signal_source           | Text          | n8n signal monitor (Crunchbase / Magnitt / LinkedIn Jobs / etc.)
sequence_id             | Select        | Clay auto-assign (A / B / C / Referral)
instantly_campaign_id   | Text          | Instantly auto-fill
lead_source             | Select        | Cold / Referral / Inbound LinkedIn / Inbound Website
referrer_name           | Text          | Manual (if referral)
```

### Behavioral Fields (updated by n8n in real-time)
```
Field Name              | Type          | Source
──────────────────────────────────────────────────────────
email_opens             | Number        | Instantly webhook → n8n
email_clicks            | Number        | Instantly webhook → n8n
reply_type              | Select        | Claude API classification (Positive / Objection / Not Now / Unsubscribe)
reply_date              | Date          | n8n
objection_logged        | Select        | Claude API + n8n
linkedin_connected       | Checkbox      | Expandi webhook
whatsapp_sent           | Checkbox      | WATI webhook
behavioral_score        | Number        | Formula (opens×2 + clicks×5 + reply×20)
```

### Deal/Conversion Fields
```
Field Name              | Type          | Source
──────────────────────────────────────────────────────────
discovery_date          | Date          | Calendly webhook → n8n
discovery_score         | Number        | Kaya manual (1–5 per dimension, weighted)
qualified               | Checkbox      | Auto-set when discovery_score ≥ 4.0
proposal_date           | Date          | n8n auto-fill
proposal_tier           | Select        | Kaya selects (Brand Sprint / Growth Retainer / Full Partner)
proposal_value_monthly  | Currency      | Kaya manual
proposal_value_total    | Currency      | Auto-calculated
proposal_currency       | Select        | Auto-set by region (AED / GBP / USD)
expected_close_date     | Date          | Kaya estimate
contract_signed_date    | Date          | PandaDoc webhook
loss_reason             | Select        | Required on stage = Lost (Budget / Timing / Competitor / No Pain / Other)
re_engage_date          | Date          | Set on Not Now / Lost (30, 60, or 90 days)
```

### Client Success Fields (Stage 8 — WON)
```
Field Name              | Type          | Source
──────────────────────────────────────────────────────────
onboarding_date         | Date          | Auto-set on won
referral_ask_sent       | Checkbox      | n8n Day-30 trigger
referral_asks_count     | Number        | n8n tracking
referrals_generated     | Number        | Manual / n8n
case_study_requested    | Checkbox      | n8n Day-90 trigger
monthly_retainer_value  | Currency      | Kaya manual
client_health_score     | Select        | Monthly review (Green / Yellow / Red)
```

---

## Lead Scoring Model

Two-layer scoring: ICP Score (static, set at enrichment) + Behavioral Score (dynamic, updated by engagement).

**Total Score = ICP Score (0–100) + Behavioral Score (0–50)**

### Behavioral Score Triggers (auto-updated by n8n)
```
Email opened (per open)          +2 pts (max +10)
Email clicked                    +8 pts
Replied (any type)               +15 pts
LinkedIn connected               +5 pts
LinkedIn replied                 +10 pts
WhatsApp replied                 +12 pts
Booking link clicked             +20 pts
Meeting booked                   +30 pts (resets behavioral score — now in discovery)
```

### Priority Routing by Total Score
```
130–150 → HOT: Kaya personally reviews + same-day WhatsApp if no reply after Email 1
100–129 → WARM: Standard sequence, Slack alert on Day 3 no-reply
70–99   → STANDARD: Full sequence, no special routing
40–69   → COOL: Sequence runs, no manual intervention
<40     → COLD: Do not sequence; add to LinkedIn content list only
```

---

## Automation Triggers (Clarify → n8n)

Clarify supports webhook triggers on field changes and stage moves. Configure these in Clarify's "Automation" section:

```
TRIGGER 1: Stage → "Discovery Scheduled"
  → Webhook to n8n: alif-proposal-flow.json starts pre-call brief generation

TRIGGER 2: Stage → "Discovery Held" AND discovery_score logged
  → Webhook to n8n: Post-call email + proposal generation fires

TRIGGER 3: Stage → "Proposal Sent"
  → Webhook to n8n: Follow-up chain starts (region-appropriate: WhatsApp/LinkedIn/email)

TRIGGER 4: Stage → "WON — Active Client"
  → Webhook to n8n: 
      a) Onboarding email sequence fires
      b) Day-30 timer set for referral ask
      c) Google Sheets: Client added to case study tracker
      d) Slack: Win celebration sent to team channel

TRIGGER 5: Deal Age = 30 days AND Stage = "WON — Active Client"
  → Webhook to n8n: alif-referral-engine.json fires (referral ask email + WhatsApp)

TRIGGER 6: Stage → "LOST"
  → Webhook to n8n:
      a) Loss reason required before stage confirms (Clarify validation)
      b) If loss_reason = "Not Now": re_engage_date auto-set (+90 days)
      c) Learning loop: loss pattern logged to Google Sheets
      d) If contact email = suppressed: add to Instantly global suppress

TRIGGER 7: re_engage_date = Today
  → Webhook to n8n: Pull contact details → add to Instantly re-engage sequence
      (3-email warm re-engagement: "When we last spoke, [X] — wondering if timing has changed")

TRIGGER 8: email_opens ≥ 3 AND reply_type = null AND email_clicks = 0
  → Webhook to n8n: "Triple Open No Click" trigger
      → Expandi: Send LinkedIn DM immediately (don't wait for Day 3)
      → Kaya Slack alert: "[Name] opened 3x without replying — LinkedIn DM just fired"
```

---

## Pipeline Views (Configure in Clarify)

### View 1: Daily Active Pipeline
Deals in Stages 1–6, sorted by behavioral_score descending
> Kaya sees highest-engagement prospects at top every morning

### View 2: Hot List (Score > 120)
All deals with Total Score > 120, regardless of stage
> For Kaya's personal attention — reply immediately

### View 3: MENA Pipeline
Deals filtered by region = MENA
> Regional view for MENA-specific follow-up

### View 4: EU Pipeline
Deals filtered by region = EU

### View 5: US Pipeline
Deals filtered by region = US

### View 6: Referral Pending (Day 25–35)
WON deals where referral_ask_sent = false AND deal age = 25–35 days
> Pre-reminder for referral ask timing

### View 7: Re-Engage Queue
Deals in NURTURE stage where re_engage_date is within next 14 days
> Proactive nurture management

---

## Weekly CRM Hygiene Protocol (Automated)

Every Sunday at 8:00 AM GST, n8n runs the weekly CRM clean:

```
1. Pull all Stage 1 deals (Sequence Active) with last_activity > 21 days
   → Move to NURTURE if no reply, set re_engage_date +60 days

2. Pull all Stage 4 deals (Discovery Scheduled) with discovery_date > 7 days past
   → Slack alert to Kaya: "Discovery scheduled but not marked held — follow up?"

3. Pull all Stage 6 deals (Proposal Sent) with proposal_date > 14 days
   → Auto-send final breakup email (Email A5 / B5 / C5 equivalent)
   → Move to NURTURE with re_engage_date +90 days

4. Pull all WON deals with client_health_score = null AND deal age > 30 days
   → Slack reminder to Kaya: "Update health score for [client]"

5. Generate weekly report → Google Sheets + Slack digest
```

---

*Clarify CRM Schema — SELLL.io GTM Engineering | ALIF Agency | 2026-06-28*
*Update whenever a new pipeline stage, field, or automation trigger is added.*

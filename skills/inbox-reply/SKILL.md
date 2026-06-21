---
name: inbox-reply
description: >
  Fully automated reply classification and routing for the Instantly inbox.
  Webhook-triggered on every inbound reply — no manual polling required.
  Auto-routes: OOO → auto-pause sequence; Hard NO → DNC + stop all threads;
  HOT → Slack alert + meeting-automation + pause parallel threads; WARM →
  pause + draft reply; Bounce → suppression list. User confirmation required
  only for drafting substantive replies to interested prospects (HOT/WARM).
  All other classifications are handled automatically without human input.
  Integrates with: meeting-automation, multi-thread, re-engagement queue,
  HubSpot CRM, Expandi (pause LinkedIn sequence). Triggers on: "reply to
  leads", "inbox replies", "instantly inbox", "unibox", "respond to replies",
  "manage replies", "instantly replies", "check inbox", "lead replies",
  "answer leads", "reply received", "classify reply".
---

# Inbox Reply — Auto-Classification + Routing

> Webhook-triggered | Integrated with: Instantly, n8n, HubSpot, meeting-automation, multi-thread, Expandi
> No manual inbox monitoring. Every reply is classified, routed, and actioned automatically within 60 seconds.

---

## Environment

| Variable | Service |
|----------|---------|
| `INSTANTLY_API_KEY` | Instantly |
| `ANTHROPIC_API_KEY` | Claude API (reply classification) |
| `N8N_WEBHOOK_URL` | n8n automation orchestrator |
| `HUBSPOT_API_KEY` | HubSpot CRM sync |
| `SLACK_WEBHOOK_URL` | Slack alert channel |

Base URL: `https://api.instantly.ai/api/v2`

---

## Trigger: Instantly Webhook

This skill is webhook-triggered — it does NOT require manual execution.

**Setup in Instantly:** Settings → Integrations → Webhooks → Add webhook
- Event: `reply_received`
- URL: `https://[n8n-instance]/webhook/instantly-reply`
- Payload: thread_id, lead_email, campaign_id, reply_body, from_name, timestamp

When any lead replies to any campaign email, Instantly fires the webhook instantly. n8n receives it and calls this classification workflow within 60 seconds.

---

## Automation Architecture

```
Lead replies in inbox
       │
       ▼
Instantly webhook fires → n8n receives
       │
       ▼
STEP 1: Load thread context (GET /emails?search=thread:{id})
       │
       ▼
STEP 2: Claude API classifies reply intent
       │
   ┌───┴────────────────────────────────────────────────────────┐
   │                        CLASSIFICATION                       │
   ▼           ▼           ▼          ▼          ▼          ▼   │
  HOT        WARM      HARD NO      OOO       BOUNCE    QUESTION │
   │           │           │          │          │                │
   ▼           ▼           ▼          ▼          ▼               │
STEP 3: AUTO-ACTIONS (see routing table below)                   │
                                                                  │
All classifications → STEP 4: HubSpot sync + account card update │
                                                                  │
HOT + WARM → STEP 5: Draft reply (user confirms before send)     │
└────────────────────────────────────────────────────────────────┘
```

---

## Step 1 — Load Thread Context

On webhook trigger, fetch the full conversation thread:

**Get thread:** `GET /emails?search=thread:{thread_id}&sort_order=asc`

Returns: outbound emails (with personalization) + all inbound replies in chronological order.

Also pull from campaign CSV (via lead_email lookup):
- `sequence_variant`, `hypothesis`, `assigned_proof_point`, `tier`, `reply_prob`
- `thread_b_contact`, `thread_c_contact` (for pause coordination)
- Account card path: `engine/accounts/[company-slug].md`

---

## Step 2 — Classify Reply Intent (Claude API)

**Classification prompt:**

```
You are classifying a reply to a B2B cold outreach email.

OUTBOUND EMAIL:
[full thread text — outbound side only]

REPLY RECEIVED:
[inbound reply text]

Classify into EXACTLY ONE category. Respond with only the category name + one-line rationale.

Categories:
HOT         → Explicitly interested, asks questions, wants a call, says "yes", "tell me more", "how does this work"
WARM        → Soft positive or curious — not ready to book but door is open ("interesting", "maybe", "what does it look like?")
OBJECTION   → Raises a specific concern but does not close the door ("we're looking at [competitor]", "too expensive", "not the right time")
NOT_NOW     → Deferral with a stated return condition ("try me in Q3", "check back after our raise")
HARD_NO     → Clear rejection, asks to be removed, expresses frustration ("please stop", "not interested", "unsubscribe")
OOO         → Out-of-office auto-reply, vacation message, maternity/paternity leave notice
BOUNCE      → Email delivery failure, mailbox full, address not found
REFERRAL    → Redirects to someone else ("talk to Sarah Chen — she handles this")
QUESTION    → Asks a specific question without a buying signal ("how does your pricing work?")
MEETING_REQUEST → Explicitly asks to book time ("can we set up a call?", "I'm free Thursday")
```

**Output format:**
```json
{
  "classification": "HOT",
  "rationale": "Contact asked 'how do you handle the first 30 days?' and said 'this is exactly what we're evaluating'",
  "urgency": "HIGH",
  "auto_action_safe": true
}
```

---

## Step 3 — Automated Routing by Classification

### HOT (Positive — booking intent or strong interest)

**Auto-actions (no human confirmation needed):**
1. Pause entire sequence in Instantly: `POST /campaigns/pause-lead` for this lead
2. Pause any parallel threads (Thread B, Thread C) at same account: `POST /campaigns/pause-lead` for thread contacts
3. Pause LinkedIn sequence in Expandi (webhook to Expandi API): `POST /expandi/campaigns/{id}/pause-contact`
4. Post Slack alert (within 60 seconds of reply):
   ```
   🔥 HOT REPLY — [FIRST NAME] [LAST NAME] at [COMPANY]
   Classification: HOT | Urgency: HIGH
   Their message: "[reply excerpt — first 200 chars]"
   Reply prob was: [reply_prob]
   Account card: engine/accounts/[slug].md
   → Draft a reply now
   ```
5. Update HubSpot: move contact to stage "Engaged — Reply Received"
6. Update account card: add touch with full reply text

**Then:** Draft reply (Step 5 below). Aaron reviews and sends.

---

### MEETING_REQUEST (Contact asked to book directly)

**Auto-actions:**
1. Pause sequence + threads (same as HOT)
2. Post Slack alert:
   ```
   📅 MEETING REQUEST — [FIRST NAME] at [COMPANY]
   They said: "[reply excerpt]"
   → Auto-reply with calendar link, or Aaron sends personal note?
   ```
3. **Auto-send booking confirmation** (Aaron pre-approves this once, applies to all):
   ```
   [FIRST_NAME] — great. Book here: https://cal.com/collins-ogiki-x4fokk/30min

   Aaron
   ```
   Sent via `POST /emails/reply` within 60 seconds of reply detection.
4. Update HubSpot: move to stage "Meeting Requested"
5. Trigger `meeting-automation` skill pre-call brief generation

---

### OBJECTION (Concern raised, door not closed)

**Auto-actions:**
1. Pause sequence (do not continue cadence while awaiting reply to objection response)
2. Update HubSpot: stage "Objection — Awaiting Response"
3. Post Slack alert: `⚠️ OBJECTION — [company] — "[objection excerpt]" → draft response`

**Then:** Draft reply (Step 5). Aaron reviews and sends.

---

### NOT_NOW (Deferral with stated condition)

**Auto-actions:**
1. Pause sequence: `POST /campaigns/pause-lead`
2. Add to re-engagement queue: auto-write row in `engine/re-engagement-queue.md`
   - Extract stated trigger condition from reply text
   - Set trigger status: 🔵 WATCH
   - Set re-engage-by: [extracted date or "monitor signal"]
3. Add signal-monitor watchlist entry if trigger is signal-based
4. Update HubSpot: stage "Not Now — Re-Engagement Queued"
5. Set HubSpot reminder: [extracted return date]
6. Update account card: "Added to re-engagement queue [date] — trigger: [condition]"

**No Slack alert needed — fully automated.**

---

### REFERRAL (Redirected to someone else)

**Auto-actions:**
1. Pause this contact's sequence
2. Post Slack alert:
   ```
   🔗 REFERRAL — [company] — referred to [referred name/title]
   Original contact: [name]
   Their message: "[excerpt]"
   → Find [referred name] contact info + launch Thread B targeting them
   ```
3. Trigger `multi-thread` skill: find referred contact and add to Thread B campaign
4. Update account card: add referral note

---

### HARD_NO (Clear rejection / unsubscribe request)

**Auto-actions (zero human input required):**
1. Unsubscribe immediately: `POST /leads/update-interest-status` with `interest_value: unsubscribed`
2. Pause ALL sequences (Thread A, B, C): stop every active campaign at this account
3. Pause Expandi LinkedIn sequence for this contact
4. Add to fatigue-suppressed.md: permanent DNC flag
5. Update HubSpot: stage "Lost — Hard No" + add DNC tag
6. Update account card: "HARD NO — [date] — DNC. Never re-contact."
7. No Slack alert unless it's a company with active Tier 1 status (reply_prob was > 60)

---

### OOO (Out of office)

**Auto-actions (zero human input required):**
1. Parse OOO message for return date (Claude extracts: "back on July 7" → 2026-07-07)
2. Pause sequence until return date: `POST /campaigns/schedule-resume` with return date
3. Pause Expandi sequence for same window
4. Update account card: "OOO — returns [date]. Sequence resumes automatically."
5. HubSpot: add note "OOO through [date]"
6. No Slack alert.

---

### BOUNCE (Delivery failure)

**Auto-actions:**
1. Mark email as bad in Prospeo/FullEnrich waterfall: trigger email re-search for this contact
2. If alternative email found: update campaign CSV + resume sequence with new email
3. If no alternative: pause sequence, flag account card "Email bounced — no alternative found"
4. Update HubSpot: "Bad Email" tag
5. No Slack alert.

---

### QUESTION (Question without buying signal)

**Auto-actions:**
1. Pause sequence
2. Post Slack alert:
   ```
   ❓ QUESTION — [company] — "[question text]"
   → Answer the question, bridge to value. Draft a reply.
   ```
3. Draft reply (Step 5). Aaron reviews and sends.

---

## Step 4 — HubSpot Sync (All Classifications)

After every classification, auto-update HubSpot contact record:

```json
POST /crm/v3/objects/contacts/{contact_id}/properties
{
  "properties": {
    "hs_lead_status": "[mapped classification stage]",
    "last_reply_date": "[timestamp]",
    "reply_classification": "[HOT|WARM|OBJECTION|NOT_NOW|HARD_NO|OOO|BOUNCE|REFERRAL|QUESTION|MEETING_REQUEST]",
    "last_reply_excerpt": "[first 500 chars of reply]",
    "selll_sequence_status": "[Active|Paused|Completed|DNC]"
  }
}
```

Also write to account card Touch Timeline:
```
[Date] — Reply received from [name] | Classification: [X] | Auto-action: [Y]
```

---

## Step 5 — Draft Replies (HOT, WARM, OBJECTION, QUESTION)

For classifications that require a substantive response, Claude drafts a reply:

**Draft prompt:**
```
You are drafting a cold outreach reply for Aaron Shepard, founder of SELLL.io.

OUTBOUND EMAIL THREAD:
[full thread including personalization used]

CONTACT'S REPLY:
[reply text]

CLASSIFICATION: [X]

CONTEXT:
- Company: [company_name] | Tier: [tier] | Sequence: [sequence_variant]
- Assigned proof point: [proof point name]
- Contact's signal: [v_signal_detail]
- Hypothesis: [hypothesis]

VOICE RULES:
- Never start with "I"
- No "Thanks for getting back to me" or "Great to hear from you"
- Match the lead's tone and length — if they wrote 2 sentences, write 2 sentences
- Reference their specific words
- One clear next step. Not two.
- Plain text only

Write ONLY the reply body. No subject line. No signature block (it's added by Instantly).
```

**Present to Aaron:**
```
REPLY DRAFT — [FIRST NAME] [COMPANY]
Classification: [HOT / WARM / OBJECTION / QUESTION]
────────────────────────────────────────────────────
THEIR REPLY:
"[full reply]"

DRAFTED RESPONSE:
"[Claude draft]"

────────────────────────────────────────────────────
[SEND] [EDIT] [SKIP]
```

Aaron reviews, edits if needed, clicks SEND. Instantly sends via the same account that sent Email 1.

**2-hour SLA:** HOT and MEETING_REQUEST replies should be responded to within 2 hours. The Slack alert fires immediately to enable this.

---

## Step 6 — Post-Reply Actions

After send:
1. Mark thread as read: `POST /emails/threads/{thread_id}/mark-as-read`
2. Update HubSpot: move to appropriate stage
3. Log in account card: reply sent + method
4. If HOT progresses to meeting: `meeting-automation` skill takes over

---

## Classification-to-Action Reference

| Classification | Sequence | LinkedIn | HubSpot | Slack | Draft Reply | Human Needed? |
|----------------|----------|----------|---------|-------|------------|---------------|
| HOT | Pause all threads | Pause | Update stage | ✅ Alert | Yes | Review draft only |
| MEETING_REQUEST | Pause all threads | Pause | Update stage | ✅ Alert | Auto-sends | No |
| WARM | Pause | Pause | Update | ✅ Alert | Yes | Review draft only |
| OBJECTION | Pause | Pause | Update | ✅ Alert | Yes | Review draft only |
| NOT_NOW | Pause | Pause | Re-engage queue | No | No | None |
| REFERRAL | Pause | — | Update | ✅ Alert | No | Forward Thread B only |
| HARD_NO | Stop all | Stop | DNC | Only if T1 | No | None |
| OOO | Auto-resume | Pause window | Note | No | No | None |
| BOUNCE | Pause | — | Bad email tag | No | No | None |
| QUESTION | Pause | Pause | Update | ✅ Alert | Yes | Review draft only |

---

## Reference

See [references/instantly-inbox-api.md](references/instantly-inbox-api.md) for full Instantly Unibox and Reply API documentation.

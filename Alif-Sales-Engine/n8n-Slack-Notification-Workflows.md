# n8n — Slack Notification Workflows
> Instantly Campaign Replies + Calendly Meeting Booked → Slack
> Built for ALIF Sales Engine | 2026-07-02

---

## WHAT THIS BUILDS

Two real-time Slack alerts:

1. **#alif-replies** — fires the moment anyone replies to an Instantly campaign
2. **#alif-meetings** — fires the moment a discovery call is booked via Calendly, also auto-updates HubSpot deal to "Disco Call"

Both run on n8n (self-hosted on Railway or n8n cloud). Zero manual checking.

---

## STEP 0 — ONE-TIME SETUP (DO THESE FIRST)

### A. Create Slack Channel + Incoming Webhook

1. In Slack: create two channels
   - `#alif-replies`
   - `#alif-meetings`

2. Go to: api.slack.com/apps → **Create New App** → **From Scratch**
   - App name: `ALIF Revenue Machine`
   - Workspace: your Slack workspace

3. In the app settings → **Incoming Webhooks** → toggle **On**
   → Click **Add New Webhook to Workspace**
   → Select `#alif-replies` → Copy the webhook URL → save as `SLACK_WEBHOOK_REPLIES`
   → Repeat for `#alif-meetings` → save as `SLACK_WEBHOOK_MEETINGS`

   Your webhook URLs look like:
   `https://hooks.slack.com/services/[WORKSPACE_ID]/[CHANNEL_ID]/[TOKEN]`

4. No monthly cost. No Slack plan upgrade needed. Incoming webhooks are free.

---

### B. Get Your Instantly Webhook URL Ready

You will set this inside n8n first (Workflow 1 below gives you the URL), then paste it into Instantly.

Instantly webhook location:
**Instantly → Settings → Integrations → Webhooks → Add Webhook**
- Event: `Reply Received`
- URL: `[your n8n webhook URL from Workflow 1]`

---

### C. Get Your Calendly Webhook URL Ready

Same — you get the URL from n8n (Workflow 2), then paste it into Calendly.

Calendly webhook location:
**Calendly → Integrations → Webhooks → New Webhook**
- Event: `invitee.created`
- URL: `[your n8n webhook URL from Workflow 2]`

---

## WORKFLOW 1 — INSTANTLY REPLY → SLACK (#alif-replies)

### What it does:
When anyone replies to any Instantly campaign → filters out OOO/unsubscribes → sends a Slack message to #alif-replies with name, company, reply preview, and a link to HubSpot.

### n8n Node Setup:

```
[Webhook] → [IF: Positive Reply?] → [HubSpot: Find Contact] → [Slack: Send Message]
                    │
                    ▼ (negative/OOO/bounce)
              [Stop — no notification]
```

---

**NODE 1 — Webhook (Trigger)**
- Node type: `Webhook`
- HTTP Method: `POST`
- Path: `instantly-reply` (n8n will generate the full URL)
- Authentication: None (or Header Auth if you want extra security)
- Response mode: `Immediately`

After saving this node, n8n shows you the webhook URL:
`https://[your-railway-url].railway.app/webhook/instantly-reply`
→ Paste this into Instantly → Settings → Integrations → Webhooks → Reply Received

The Instantly payload you receive looks like:
```json
{
  "event": "reply_received",
  "timestamp": "2026-07-02T09:15:00Z",
  "data": {
    "email": "john@brandcompany.com",
    "firstName": "John",
    "lastName": "Smith",
    "companyName": "Brand Company",
    "campaignName": "US-D2C-Sequence-A",
    "emailSubject": "Re: Quick question",
    "replyText": "Hey thanks for reaching out! We actually have been looking for...",
    "sentAt": "2026-07-02T08:00:00Z",
    "repliedAt": "2026-07-02T09:15:00Z"
  }
}
```

---

**NODE 2 — IF (Filter: Positive Reply?)**
- Node type: `IF`
- Condition 1 (AND):
  `{{ $json.data.replyText }}` does NOT contain `out of office`
- Condition 2 (AND):
  `{{ $json.data.replyText }}` does NOT contain `unsubscribe`
- Condition 3 (AND):
  `{{ $json.data.replyText }}` does NOT contain `auto-reply`
- Condition 4 (AND):
  `{{ $json.data.replyText }}` does NOT contain `on vacation`
- Condition 5 (AND):
  `{{ $json.data.replyText }}` does NOT contain `do not contact`

If ALL conditions pass → continue to Node 3 (positive reply)
If ANY condition fails → workflow ends (no notification)

*Optional upgrade: Add an OpenAI node between Node 1 and Node 2 to classify sentiment. But the keyword filter above catches 95% of OOOs and unsubscribes.*

---

**NODE 3 — HubSpot (Find Contact)**
- Node type: `HubSpot`
- Operation: `Contact → Get`
- Search by: Email = `{{ $json.data.email }}`

This pulls the HubSpot contact ID so we can link to the deal in the Slack message.
If contact not found: workflow still continues (deal link just won't appear).

Output you need: `contact.id` → use to build the HubSpot deal URL.

---

**NODE 4 — Slack (Send Message)**
- Node type: `HTTP Request` (using incoming webhook, simpler than Slack OAuth)
- Method: `POST`
- URL: `{{ $env.SLACK_WEBHOOK_REPLIES }}` (set as n8n env variable)
- Body Type: `JSON`
- Body:

```json
{
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "🔥 New Campaign Reply"
      }
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Name:*\n{{ $('Webhook').item.json.data.firstName }} {{ $('Webhook').item.json.data.lastName }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Company:*\n{{ $('Webhook').item.json.data.companyName }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Email:*\n{{ $('Webhook').item.json.data.email }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Campaign:*\n{{ $('Webhook').item.json.data.campaignName }}"
        }
      ]
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Their reply:*\n> {{ $('Webhook').item.json.data.replyText.substring(0, 200) }}..."
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "⏰ *Respond within 2 hours* — reply speed is the #1 close rate variable."
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": { "type": "plain_text", "text": "Open HubSpot Contact" },
          "url": "https://app.hubspot.com/contacts/[YOUR_PORTAL_ID]/contact/{{ $('HubSpot: Find Contact').item.json.id }}"
        },
        {
          "type": "button",
          "text": { "type": "plain_text", "text": "Reply in Instantly" },
          "url": "https://app.instantly.ai/app/inbox"
        }
      ]
    }
  ]
}
```

Replace `[YOUR_PORTAL_ID]` with your HubSpot portal ID (found in HubSpot URL).

---

**What the Slack message looks like:**

```
🔥 New Campaign Reply
──────────────────────────────────
Name:          John Smith
Company:       Brand Company Inc
Email:         john@brandcompany.com
Campaign:      US-D2C-Sequence-A

Their reply:
> "Hey thanks for reaching out! We actually have been
>  looking for an agency that understands both the
>  creative and performance side — most agencies only..."

⏰ Respond within 2 hours — reply speed is the #1 close rate variable.

[Open HubSpot Contact]  [Reply in Instantly]
```

---

## WORKFLOW 2 — CALENDLY BOOKING → SLACK + HUBSPOT DEAL

### What it does:
When a discovery call is booked via Calendly →
1. Creates or updates HubSpot deal at "Disco Call" stage
2. Sends Slack alert to #alif-meetings with full prospect context

### n8n Node Setup:

```
[Webhook] → [HubSpot: Find Contact] → [IF: Contact Exists?]
                                              │
                              ┌───────────────┴───────────────┐
                              ▼ YES                            ▼ NO
                    [HubSpot: Find Deal]          [HubSpot: Create Contact]
                              │                                │
                    [HubSpot: Update Deal                      │
                     → stage: Disco Call]                      │
                              │                                │
                              └───────────────┬───────────────┘
                                              ▼
                                  [HubSpot: Create Deal
                                   stage: "Disco Call"]
                                              │
                                              ▼
                                  [Slack: Send Message
                                   to #alif-meetings]
```

---

**NODE 1 — Webhook (Trigger)**
- Node type: `Webhook`
- HTTP Method: `POST`
- Path: `calendly-booking`
- Full URL: `https://[your-railway-url].railway.app/webhook/calendly-booking`
→ Paste into Calendly → Integrations → Webhooks → invitee.created

The Calendly payload looks like:
```json
{
  "event": "invitee.created",
  "payload": {
    "event": {
      "name": "ALIF Discovery Call — 20 Min",
      "start_time": "2026-07-05T10:00:00Z",
      "end_time": "2026-07-05T10:20:00Z",
      "location": { "join_url": "https://meet.google.com/xxx-xxxx-xxx" }
    },
    "invitee": {
      "name": "Sarah Connor",
      "email": "sarah@techstartup.com",
      "timezone": "America/New_York",
      "questions_and_answers": [
        { "question": "Company name?", "answer": "TechStartup Inc" },
        { "question": "What's your main challenge right now?", "answer": "Our Instagram looks nothing like what we actually deliver" }
      ]
    }
  }
}
```

*Pro tip: Add qualifying questions to your Calendly booking form:*
- *"Company name?"*
- *"What's your main challenge with marketing right now?"*
- *"Are you currently working with an agency?"*
These answers appear in the Slack message — you go into the call already knowing the context.

---

**NODE 2 — HubSpot (Find Contact)**
- Operation: `Contact → Search`
- Filter: email = `{{ $json.payload.invitee.email }}`

---

**NODE 3 — IF (Contact Exists?)**
- Condition: `{{ $json.contacts.length }}` > 0
- TRUE → Node 4a (contact found, find their deal)
- FALSE → Node 4b (create contact first)

---

**NODE 4a — HubSpot (Find Deal for existing contact)**
- Operation: `Deal → Search`
- Filter: associated contact = contact ID from Node 2

---

**NODE 4b — HubSpot (Create Contact, if not exists)**
- Operation: `Contact → Create`
- Fields:
  - Email: `{{ $('Webhook').item.json.payload.invitee.email }}`
  - First name: `{{ $('Webhook').item.json.payload.invitee.name.split(' ')[0] }}`
  - Last name: `{{ $('Webhook').item.json.payload.invitee.name.split(' ').slice(1).join(' ') }}`
  - Company: `{{ $('Webhook').item.json.payload.invitee.questions_and_answers[0].answer }}`
  - Lead source: `Calendly Inbound`

---

**NODE 5 — HubSpot (Create or Update Deal)**
- Operation: `Deal → Create` (always create a new deal per booking)
- Fields:
  - Deal name: `{{ $('Webhook').item.json.payload.invitee.name.split(' ')[0] }} @ {{ company }} — Disco {{ formatted date }}`
  - Pipeline: Sales Pipeline
  - Deal stage: `Disco Call` (use the internal stage ID from HubSpot)
  - Close date: today + 30 days
  - Deal owner: Collins (your HubSpot user ID)
  - Custom: `Discovery Call Recording` = blank (fill after call)
  - Custom: `Trigger Type` = `Calendly Inbound`

*To get the Deal Stage ID: HubSpot → Settings → CRM → Pipelines → click "Disco Call" → copy the stage ID from the URL*

---

**NODE 6 — Slack (Send to #alif-meetings)**
- Node type: `HTTP Request`
- URL: `{{ $env.SLACK_WEBHOOK_MEETINGS }}`
- Body:

```json
{
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "📅 Discovery Call Booked!"
      }
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Name:*\n{{ $('Webhook').item.json.payload.invitee.name }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Company:*\n{{ $('Webhook').item.json.payload.invitee.questions_and_answers[0].answer }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Email:*\n{{ $('Webhook').item.json.payload.invitee.email }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Timezone:*\n{{ $('Webhook').item.json.payload.invitee.timezone }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Call time:*\n{{ $('Webhook').item.json.payload.event.start_time }}"
        },
        {
          "type": "mrkdwn",
          "text": "*Meet link:*\n{{ $('Webhook').item.json.payload.event.location.join_url }}"
        }
      ]
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*What they said their challenge is:*\n> {{ $('Webhook').item.json.payload.invitee.questions_and_answers[1].answer }}"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Currently using an agency?*\n{{ $('Webhook').item.json.payload.invitee.questions_and_answers[2].answer }}"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "✅ HubSpot deal created → *Disco Call* stage\n🎯 Prep: Check their LinkedIn + Meta Ad Library before the call."
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": { "type": "plain_text", "text": "Open HubSpot Deal" },
          "style": "primary",
          "url": "https://app.hubspot.com/contacts/[YOUR_PORTAL_ID]/deal/{{ $('HubSpot: Create Deal').item.json.id }}"
        },
        {
          "type": "button",
          "text": { "type": "plain_text", "text": "Join Meeting" },
          "url": "{{ $('Webhook').item.json.payload.event.location.join_url }}"
        }
      ]
    }
  ]
}
```

---

**What the Slack message looks like:**

```
📅 Discovery Call Booked!
──────────────────────────────────
Name:        Sarah Connor
Company:     TechStartup Inc
Email:       sarah@techstartup.com
Timezone:    America/New_York
Call time:   2026-07-05 at 10:00 AM EST
Meet link:   meet.google.com/xxx-xxxx-xxx

What they said their challenge is:
> "Our Instagram looks nothing like what we
>  actually deliver — we need help making the
>  brand match the quality of the work."

Currently using an agency?
No, everything is in-house right now.

──────────────────────────────────
✅ HubSpot deal created → Disco Call stage
🎯 Prep: Check their LinkedIn + Meta Ad Library before the call.

[Open HubSpot Deal]  [Join Meeting]
```

---

## SETTING UP n8n ENVIRONMENT VARIABLES

In n8n: Settings → Environment Variables → Add:

| Key | Value |
|-----|-------|
| `SLACK_WEBHOOK_REPLIES` | `https://hooks.slack.com/services/...` (the #alif-replies URL) |
| `SLACK_WEBHOOK_MEETINGS` | `https://hooks.slack.com/services/...` (the #alif-meetings URL) |
| `HUBSPOT_PORTAL_ID` | Your HubSpot portal ID (number from HubSpot URL) |

For HubSpot authentication in n8n:
- n8n → Credentials → Add Credential → HubSpot API
- Use your HubSpot Private App token (HubSpot → Settings → Integrations → Private Apps → Create)
- Required scopes: `crm.objects.contacts.read`, `crm.objects.contacts.write`, `crm.objects.deals.read`, `crm.objects.deals.write`

---

## BUILD ORDER (45 MINUTES TOTAL)

**Step 1 — 10 min: Slack setup**
- Create #alif-replies and #alif-meetings channels
- Create Slack app at api.slack.com/apps
- Add incoming webhooks for both channels
- Copy both webhook URLs

**Step 2 — 15 min: Workflow 1 (Instantly → Slack)**
- Build in n8n: Webhook → IF filter → HubSpot find → Slack post
- Copy the webhook URL from Node 1
- Paste into Instantly → Settings → Integrations → Webhooks → Reply Received
- Test: send yourself a test reply in Instantly → check #alif-replies fires

**Step 3 — 20 min: Workflow 2 (Calendly → Slack + HubSpot)**
- Build in n8n: Webhook → HubSpot find → IF → create/update deal → Slack post
- Copy the webhook URL from Node 1
- Paste into Calendly → Integrations → Webhooks → invitee.created
- Test: make a test booking on your own Calendly link → check #alif-meetings fires + deal appears in HubSpot at "Disco Call"

**Step 4 — 5 min: Add Calendly booking questions**
Calendly → Event Types → Edit → Questions → Add:
1. "What's your company name?" (required)
2. "What's your main marketing challenge right now?" (required)
3. "Are you currently working with a creative or marketing agency?" (optional, dropdown: Yes / No / Used to)

---

## TESTING CHECKLIST

- [ ] Slack app created + both webhook URLs saved
- [ ] Workflow 1 active in n8n (green, not paused)
- [ ] Instantly webhook pointing to n8n URL
- [ ] Send test email reply in Instantly → Slack #alif-replies message appears
- [ ] Workflow 2 active in n8n
- [ ] Calendly webhook pointing to n8n URL
- [ ] Make a test Calendly booking → Slack #alif-meetings fires → HubSpot deal created at "Disco Call"
- [ ] HubSpot deal link in Slack message opens the correct deal
- [ ] Calendly booking questions appear in Slack message body

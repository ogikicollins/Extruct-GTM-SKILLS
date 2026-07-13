# AI Lead Response — <5 Minute System
> Collins Ogiki | ALIF Agency
> Fixes the 43% reply → 2 booking leak. Every positive reply gets a response in under 5 minutes.

---

## The Problem in One Number

Positive replies go cold after 5 minutes. Conversion drops 80%+. Currently, replies are being handled manually. Some are waiting hours. That's where the 944 prospects went.

---

## How the System Works

```
Apex/Instantly fires reply webhook
        │
        ▼
n8n receives reply payload
        │
        ▼
Claude API classifies: POSITIVE / OBJECTION / NOT NOW / UNSUBSCRIBE
        │
        ▼ (POSITIVE only)
Claude drafts personalised response using prospect context
        │
        ├──► Slack alert to #sales-live channel (immediate)
        │    Message: Name, company, reply text, draft response, 4-min override window
        │
        └──► Auto-response sends at T+4 minutes (unless Collins overrides)
```

---

## The Slack Alert Format

Every positive reply fires this into `#sales-live` in Slack immediately:

```
🟢 POSITIVE REPLY

Name: [First Name] [Last Name]
Company: [Company Name]
Region: [MENA / EU / US]
Replied to: [Email subject / sequence step]

Their message:
"[Full reply text]"

────────────────────────────────
DRAFT RESPONSE (sends in 4 min):

[Claude-drafted response]

Calendly: https://calendly.com/alif/discovery

────────────────────────────────
[SEND NOW] [EDIT DRAFT] [HOLD]
```

**Default behaviour:** If Collins takes no action in 4 minutes, the draft sends automatically.
**EDIT:** Opens a Slack modal to modify before sending.
**HOLD:** Pauses the auto-send so Collins can call them instead.

---

## The Auto-Response Draft (Claude generates this)

Claude uses this template + fills in context from HubSpot:

```
Subject: Re: [original subject]

Hey [First Name],

[One sentence acknowledging specifically what they said — e.g., "Sounds like you're at the stage where you're starting to invest properly in paid."]

Happy to jump on a quick call — here's my calendar: [Calendly link]

20 minutes. No deck. Just a straight conversation about whether what we do is relevant to where [Company Name] is right now.

Collins
ALIF Agency
```

**What Claude is instructed to avoid:** Generic openers ("Thanks for getting back to me!"), long explanations, multiple CTAs, corporate language.

---

## Claude API System Prompt (for this specific call)

```
You write follow-up emails for Collins Ogiki, Head of Sales at ALIF Agency Dubai.

ALIF is a boutique creative + performance agency. Services: brand creative, paid ads (Meta/Google), social media, AI search positioning.

When given a prospect's reply, write a 3-4 sentence email response that:
1. Opens by acknowledging something SPECIFIC from their reply (not generic)
2. Offers a 20-minute call with a Calendly link
3. Positions the call as a conversation, not a pitch
4. Ends with Collins' name only — no tagline, no title

Tone: direct, confident, peer-to-peer. Short sentences. No enthusiasm. No corporate language. Never start with "Thanks for" or "Great to hear."

Variables available: {{first_name}}, {{company_name}}, {{their_reply}}, {{calendly_link}}
```

---

## Coverage Hours

| Time (GST) | Behaviour |
|------------|-----------|
| 8AM–8PM Mon–Fri | Auto-response at T+4 min, Slack alert to Collins |
| 8PM–8AM | Auto-response at T+60 sec (no delay needed — they won't see it for hours anyway), Slack alert flagged for morning |
| Weekend | Auto-response sends, Collins reviews Monday morning |

---

## Follow-Up After Auto-Response (If No Booking in 24h)

**T+24 hours — automatic follow-up email:**
```
Hey [First Name] — just making sure my last message didn't get buried.

Calendar link: [Calendly]

20 minutes. Happy to make it work around your schedule.

Collins
```

**T+72 hours — Collins calls manually.**
Use Warm Call Script from `02-cold-call-scripts.md`.

---

## Building This in HubSpot (Once Provisioned)

1. Workflow trigger: Contact property "Latest email reply" is known
2. Branch: If reply sentiment = Positive (HubSpot AI classification or manual tag)
3. Action: Enroll in "Positive Reply — Fast Response" sequence
4. Action: Create Slack notification (HubSpot → Slack integration)
5. Action: Set 4-minute delay
6. Action: Send follow-up email (template above)
7. If no meeting booked in 24h: enqueue 24h follow-up

---

## Expected Impact

At current volume (2,200 leads, 43% positive reply rate):

| Scenario | Bookings |
|----------|----------|
| Current (slow manual response) | 2 |
| With <5 min response | 75–140 |
| Improvement | 37–70x |

---

*AI Lead Response System — Collins Ogiki | ALIF Agency | June 30 2026*

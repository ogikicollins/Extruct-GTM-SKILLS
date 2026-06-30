# ALIF Agency — AI Lead Response System (5-Minute Response)
> Collins Ogiki | For review w/ Amir + Kaya
> Fix for the 43% reply → 2 booking conversion leak

---

## The Problem

Every positive reply that waits more than 5 minutes for a response loses 80%+ of its conversion probability. At ALIF, positive replies were being handled manually — which means some waited hours or overnight. This is where the 944 interested prospects disappeared.

---

## The System

**Goal:** Every positive reply gets an intelligent, personalised-feeling response within 60 seconds. Collins reviews and overrides if needed. Nothing waits more than 5 minutes during business hours.

---

## Tool Stack for This

**Option A (using HubSpot Pro — already being purchased):**
HubSpot Workflows → Email reply detection → AI-generated reply → Slack alert to Collins

**Option B (using n8n — already built for the engine):**
Instantly/Apex webhook → n8n → Claude API → email response + Slack alert

Use Option B immediately (it's already built). Migrate to HubSpot when provisioned.

---

## How It Works

### Step 1: Reply detected (real-time)
Instantly (or Apex's system) detects an email reply and fires a webhook to n8n.

### Step 2: Claude classifies the reply (< 3 seconds)
Claude API receives the reply body and classifies it:
- **POSITIVE** — wants to know more, asks a question, expresses interest
- **OBJECTION** — pushback but engaged
- **NOT NOW** — deferring
- **UNSUBSCRIBE** — wants off the list

### Step 3: Positive replies get an auto-response (< 60 seconds)
Claude drafts a personalised response using:
- The prospect's name
- Their company name
- What they specifically said in their reply
- A direct Calendly link
- Kaya or Collins' name as the sender

**Auto-response template (Claude drafts this, Collins reviews in Slack):**

Subject: Re: [original subject]

"Hey [First Name],

Thanks for getting back to me. [One sentence acknowledging what they said — e.g., 'Sounds like you're in the middle of scaling the brand.']

Happy to jump on a quick call — here's my calendar: [Calendly link]

Usually takes 20 minutes. No slides, no pitch deck — just a conversation about what's going on and whether ALIF is a fit.

[Collins / Kaya]"

### Step 4: Collins gets a Slack alert with the draft (immediate)

```
🟢 POSITIVE REPLY — [First Name] @ [Company]

Their reply:
"[full reply text]"

Auto-response sent ✅

If you want to personalise it before it sends — you have 4 minutes.
[Edit draft link]
```

**Default:** The response sends automatically after 4 minutes unless Collins overrides it.
**Override:** Collins clicks the edit link, updates the draft, sends manually.

### Step 5: If no booking after 24 hours — auto-follow-up fires
If the prospect received the auto-response but hasn't booked, a follow-up fires:

"Hey [First Name] — just checking you got my last message. Here's the calendar link again if it got buried: [link]. Takes 20 minutes. Collins"

### Step 6: If no booking after 72 hours — Collins calls them
The phone is the third touch. Not automated. Collins calls personally using Script 1 (Warm Call) from the Cold Call Scripts doc.

---

## Response Coverage Hours

| Hours | Channel | Handler |
|-------|---------|---------|
| 8AM–7PM GST (Mon–Fri) | Email auto-response | Claude API → 4-min review window → auto-send |
| 8AM–7PM GST | Slack alert | Collins reviews every reply |
| Outside hours | Email auto-response | Sends immediately (no delay — replies at 2am in Dubai are often from EU/US) |
| Outside hours | Slack alert | Collins sees it when he wakes up |

---

## Business Hours Logic

Add a HubSpot / n8n condition:

- If reply received between 8AM–7PM GST → response sends within 60 seconds
- If reply received outside hours → response sends within 60 seconds (still immediate — but Collins reviews next morning)
- If reply received Friday after 5PM → flag for Collins Saturday morning review

---

## Setting This Up in HubSpot (when provisioned)

1. Create a workflow trigger: "Contact replied to email sequence"
2. Add action: "Enroll in AI Lead Response sequence"
3. Add action: "Create Slack notification" → #sales-leads channel
4. Add action: "Send reply email" (use the template above, personalised with contact tokens)
5. Set delay: 4-minute window for manual override
6. If no calendar booking within 24h → enroll in "Booked Follow-Up" sequence

---

## Expected Impact

Based on the current funnel numbers:

| Metric | Current | With 5-min response |
|--------|---------|---------------------|
| Positive replies | ~946 | ~946 |
| Response time | Unknown (hours/days) | <5 minutes |
| Reply-to-booking rate | 0.2% | 8–15% (industry avg for fast response) |
| Bookings from same campaign | 2 | 75–140 |

This one fix — response speed — is worth more than any new leads Apex can generate.

---

*AI Lead Response System — Collins Ogiki | ALIF Agency | June 30 2026*

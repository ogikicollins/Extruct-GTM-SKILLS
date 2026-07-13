# LinkedIn Automation Plan
> Collins Ogiki | ALIF Agency
> Two motions: auto-connect positive repliers + pre-engagement before email

---

## Motion 1: Auto-Connect Positive Repliers

**Logic:** Someone who replied to your email already knows your name. A connection request at this moment converts at 60%+ (vs. 20–30% cold). Once connected, you have a permanent channel that never goes to spam.

**Trigger:** Claude classifies reply as POSITIVE → n8n looks up LinkedIn URL from HubSpot/Clay → Expandi queues connection request within 24h

**Connection request message:**

Option A (if they mentioned the email in their reply):
```
Hey [First Name] — we've been emailing. Figured I'd connect here too in case it's easier. Collins
```

Option B (standard):
```
Hey [First Name] — came across [Company Name] and thought there was something worth sharing. Good to connect. Collins, ALIF
```

**Follow-up DM after connecting (T+48h if no booking yet):**
```
Hey [First Name] — appreciate the connect. 
Sent you a calendar link via email — just want to make sure it didn't get buried. 
Here it is directly: [Calendly link]
```

---

## Motion 2: Pre-Engagement Before Email

**Logic:** Prospects who've seen your profile and interacted with your content before receiving your email have 3x higher open rates and 2x higher reply rates.

**Sequence (runs T-3 to T-0 relative to email send date):**

| Day | Action | Platform |
|-----|--------|---------|
| T-3 | View prospect's LinkedIn profile | Expandi |
| T-2 | Like their most recent post | Expandi |
| T-1 | Send connection request (no note) | Expandi |
| T-0 | Email 1 sends — they recognise the name | Instantly |
| T+3 | If email opened but no reply → LinkedIn DM fires | Expandi |

**Connection request: no note.** Connection acceptance rate is higher with no note than with a generic note. Save the message for after they connect.

---

## Expandi Campaign Structure

| Campaign | Segment | Actions | Daily Limit |
|---------|---------|---------|------------|
| MENA Pre-Engagement | MENA ICP leads from Clay | View + Like + Connect | 20 connects/day |
| EU Pre-Engagement | EU ICP leads | View + Connect | 20 connects/day |
| US Pre-Engagement | US ICP leads | View only (connect rate is lower cold) | 80 views/day |
| Positive Reply Connect | All positive repliers | Connect + DM sequence | As triggered |
| No Booking Follow-Up | Connected, no booking 72h | 1 DM with Calendly link | As triggered |

**Total daily LinkedIn actions:** 80 views + 40 connections + 30 DMs = 150 actions/day (within LinkedIn safety threshold)

---

## Kaya's LinkedIn Content (Warm Layer)

Kaya posts 3x/week. This is not optional — it's part of the outreach system.

**Why it matters for outreach:** Prospects who see Kaya's content before receiving an email from Collins are 40% more likely to reply. The content makes ALIF feel like a known entity, not a stranger.

**Content pillars:**
1. **Performance insight** — "The ad creative mistake costing most Dubai brands 30% of their ROAS" (specific, data-driven, speaks to their pain)
2. **Case study excerpt** — one result, one client (with permission), one lesson (e.g., "How Holz Concepts increased AOV by 40% without increasing ad spend")
3. **Industry observation** — what's changing in their market that they should know about (e.g., "ChatGPT now handles 20% of product searches in the UAE — here's what that means for your brand")

**Sequence connection:** All ICP prospects in active Instantly sequences are added to Expandi's "post engagement" campaign — Expandi serves Kaya's posts to them through LinkedIn's targeting system.

---

## What Milan Needs to Build

1. n8n node: When Claude classifies POSITIVE → lookup `linkedin_url` field in HubSpot → POST to Expandi API → add to "Positive Reply Connect" campaign
2. Expandi webhook: When connection accepted → trigger DM sequence → update HubSpot field `linkedin_connected = true`
3. HubSpot automation: If `linkedin_connected = true` AND `meetings_booked = 0` → add to 72h no-booking DM sequence

---

## Tracking

| Metric | Weekly Target |
|--------|---------------|
| Connection requests sent | 100+ |
| Acceptance rate | >35% |
| DM reply rate (post-connect) | >15% |
| LinkedIn → booking attributions | Track in HubSpot source field |

---

*LinkedIn Automation Plan — Collins Ogiki | ALIF Agency | June 30 2026*

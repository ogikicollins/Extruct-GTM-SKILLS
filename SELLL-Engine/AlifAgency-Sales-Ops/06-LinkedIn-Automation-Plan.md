# ALIF Agency — LinkedIn Automation Plan
> Collins Ogiki | For review w/ Amir + Kaya
> Auto-connect positive email repliers + parallel LinkedIn outreach

---

## Two LinkedIn Motions

### Motion 1: Auto-Connect Positive Email Repliers
When a prospect replies positively to an email campaign → automatically find and connect with them on LinkedIn within 24 hours.

### Motion 2: LinkedIn-First Outreach (Parallel to Email)
Profile views + connection requests run 3 days before the first email sends, warming the prospect before they see the cold email.

---

## Motion 1: Auto-Connect Positive Repliers

**The logic:** Someone replied to your email — they know who you are. A LinkedIn connection request at this moment has a >60% acceptance rate (vs. 20–30% cold). Once connected, you have a second channel that never goes to spam.

**Workflow (n8n or HubSpot → Expandi):**

1. Positive reply classified by Claude API
2. n8n looks up prospect's LinkedIn URL (from Clay enrichment data, or Apollo field)
3. If LinkedIn URL found → Expandi queues a connection request within 24h
4. Connection request message:

**Template A — referencing the email:**
"Hey [First Name] — we've been emailing back and forth about [ALIF]. Figured I'd connect here too in case this is easier. Collins"

**Template B — no email reference (if LinkedIn URL found without email match):**
"Hey [First Name] — came across [company name] and thought there might be something relevant to share. Would be good to connect. Collins, ALIF Agency"

5. If connected → send a LinkedIn DM within 48h:
"Hey [First Name] — appreciate the connect. Sent you a calendar link via email — just want to make sure it didn't get buried. Drop me a message here if easier. [Calendly link]"

---

## Motion 2: Pre-Engagement Before Email

**The logic:** A prospect who has seen your profile twice and liked your content before getting your email has a 3x higher open rate and 2x higher reply rate.

**Sequence (Expandi — already configured in the engine):**

Day -3 (3 days before email): View their LinkedIn profile
Day -2: Like their most recent post
Day -1: Send connection request (no note — higher acceptance rate)
Day 0: Email 1 sends (they recognise the name from LinkedIn)
Day 3: If email opened but no reply → LinkedIn DM fires

**Daily limits (to stay within LinkedIn's safety thresholds):**
- Profile views: 80/day
- Connection requests: 20/day
- Messages to 1st connections: 40/day
- Total actions: 100/day

---

## Expandi Campaign Setup

**Campaign 1: MENA — Pre-Engagement**
- Segment: All MENA ICP leads from Clay (region = MENA)
- Actions: Profile view → Post like → Connection request
- Timing: T-3, T-2, T-1 before email

**Campaign 2: EU — Pre-Engagement**
- Segment: EU ICP leads
- Actions: Profile view → Connection request (no post like — more formal)

**Campaign 3: US — Pre-Engagement**
- Segment: US ICP leads
- Actions: Profile view only (US has highest connection request ignore rates — view first, request after reply)

**Campaign 4: Positive Reply → Connection**
- Trigger: Positive reply classified by Claude → n8n → Expandi
- Message: Template A above

**Campaign 5: Connected but No Booking (72h)**
- Trigger: Connected after positive reply, no Calendly booking in 72h
- Message: "Hey [First Name] — just wanted to make sure the calendar link I sent came through: [link]. Takes 20 minutes. Collins"

---

## Kaya's LinkedIn Content (Supports Both Motions)

Kaya posts 3x/week on LinkedIn. This content is the warm layer that makes cold outreach feel less cold.

**Content pillars (based on ICP pain):**
1. **Performance / Ads** — "Why your ROAS drops after 30 days" / "The creative refresh framework we use with clients"
2. **Brand building in competitive markets** — Dubai/MENA-specific insights
3. **Behind the work** — Case study snippets (Devolon, Holz Concepts, Flow Meditation)

**Connection between content and outreach:**
- Prospects in active sequences are targeted by Expandi to view + like Kaya's posts
- After they engage with content → likelihood of accepting the connection request and replying to the email increases significantly
- Collins tracks: did prospects who engaged with Kaya's content book at a higher rate?

---

## Metrics to Track Weekly

| Metric | Target |
|--------|--------|
| Connection requests sent | 80–100/day |
| Connection acceptance rate | >35% |
| DMs sent (to connected) | 30–40/day |
| DM reply rate | >15% |
| LinkedIn → Calendly bookings | Track separately from email |
| Positive reply → LinkedIn connected | >60% |

---

## What Milan Needs to Build (Developer)

1. **n8n node:** When Claude classifies reply as POSITIVE → look up LinkedIn URL in HubSpot contact record → POST to Expandi API to add to Campaign 4 queue
2. **Expandi webhook:** When connection accepted → trigger DM sequence
3. **HubSpot field:** `linkedin_connected` checkbox — auto-updated by Expandi webhook

---

*LinkedIn Automation Plan — Collins Ogiki | ALIF Agency | June 30 2026*

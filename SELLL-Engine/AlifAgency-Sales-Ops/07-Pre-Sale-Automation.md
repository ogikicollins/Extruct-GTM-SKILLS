# ALIF Agency — Pre-Sale Automation Plan
> Collins Ogiki | For review w/ Amir + Kaya
> Asana tasks triggered on booking + pre-call asset delivery system

---

## Goal

Every time a prospect books a discovery call, a set of pre-call preparation tasks fire automatically. This ensures:
1. Collins is always prepared — no scrambling before a call
2. The prospect receives something before the call that builds anticipation and reduces no-shows
3. Nothing is forgotten regardless of how many calls are booked in a week

---

## Trigger

**Calendly booking confirmed → HubSpot Workflow fires → Zapier/n8n → Asana tasks created**

(Until HubSpot is provisioned: Calendly → n8n webhook → Asana API)

---

## Auto-Created Asana Tasks on Every Booking

When a prospect books, the following tasks are created in the "alif sales" Asana project, assigned to the correct person, due before the call time:

### For Collins (due: 1 hour before call)
- [ ] **Prospect brief** — Pull company Instagram, last 3 FB/Meta ads, website PageSpeed score, LinkedIn profile. Write 3 bullet points of observations. (10 min)
- [ ] **ICP score check** — Find the prospect's record in HubSpot. Confirm ICP score, region, and which email sequence they came from.
- [ ] **Case study match** — Based on their vertical, identify which ALIF case study to reference: Devolon (tech/B2B), Holz Concepts (retail/premium), Flow Meditation (wellness/D2C)
- [ ] **One specific hook** — Identify one thing specific to their business to open the call with (a recent post, a product launch, a campaign they're running)
- [ ] **Discovery scorecard ready** — Open the discovery framework scoring rubric before the call. Have it on screen.

### For Amir (due: 2 hours before call)
- [ ] **CRM record check** — Confirm the prospect is in HubSpot with correct fields: company name, region, email, phone, signal type
- [ ] **Calendly confirmation verified** — Did the prospect receive their confirmation email + 24h reminder?
- [ ] **WhatsApp reminder queued** — If MENA prospect, confirm the 1-hour WhatsApp reminder is scheduled in WATI

### For Collins + Amir (due: 30 min before call)
- [ ] **Pre-call brief sent to Kaya** — If Kaya is joining the call, she receives the brief in Slack

---

## Pre-Call Asset: What the Prospect Receives Before the Call

**Sent automatically 24 hours before the call (HubSpot workflow):**

Subject: "Before our call tomorrow — [First Name]"

"Hey [First Name],

Looking forward to speaking tomorrow at [time].

To make it worth your 20 minutes, I'll come prepared with a few specific observations about [company name] — I'll have looked at your [ads / social / website] beforehand.

Nothing formal. Just want to make sure the conversation is useful from minute one.

See you then.
Collins, ALIF Agency"

**Why send this:**
1. Shows professionalism before the call even starts
2. Creates anticipation — they now expect something specific
3. Reduces no-show rate by reminding them there's value waiting for them

---

## Post-Call Asana Tasks (triggered when Collins marks call as "held" in HubSpot)

- [ ] **Log discovery score in HubSpot** (Collins — due within 15 min of call end)
- [ ] **Send post-call email** (Collins — due within 2 hours of call end)
- [ ] **Update HubSpot stage** (Collins — due within 15 min)
- [ ] **If qualified (≥4.0): generate proposal** (Collins — due within 4 hours of call end)
- [ ] **If not qualified: move to Nurture + set re-engage date** (Collins — due within 1 hour)

---

## HubSpot Workflow: Booking → Asana (Milan to build)

**Trigger:** Calendly booking received (HubSpot Calendly integration)

**Actions:**
1. Create contact in HubSpot if not exists
2. Update deal stage → "Discovery Scheduled"
3. POST to Zapier/n8n: `{ prospect_name, company, email, meeting_time, calendly_uuid }`
4. Zapier creates Asana tasks in "alif sales" project with due dates = meeting_time minus offsets
5. Send prospect the pre-call asset email (24h before)
6. Queue WATI WhatsApp reminder (1h before, MENA only)

---

## Metrics

| Metric | Track |
|--------|-------|
| Pre-call prep completed on time | % of calls where tasks done before call |
| Pre-call asset email sent | % of bookings |
| WhatsApp reminder sent (MENA) | % of MENA bookings |
| Show rate (with vs. without pre-call asset) | Compare after 30 bookings |

---

*Pre-Sale Automation Plan — Collins Ogiki | ALIF Agency | June 30 2026*

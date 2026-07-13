# Pre-Sale Automation Plan
> Collins Ogiki | ALIF Agency
> Every booking triggers a prep chain. No call happens unprepared.

---

## Trigger

Calendly booking confirmed → HubSpot Workflow fires → Asana tasks created → prospect receives pre-call asset

---

## Asana Tasks Created on Every Booking

**Assigned to Collins — due 1 hour before call:**

- [ ] Open prospect's HubSpot record. Screenshot ICP score, region, which email sequence, what they said in reply.
- [ ] Pull their last 3 ads from Facebook Ad Library. Screenshot them.
- [ ] Check their website on PageSpeed Insights. Note mobile score.
- [ ] Find their Instagram. Note follower count and last post date.
- [ ] Write 3 bullet points: what I know about their situation, what I think their pain is, one specific thing to open with.
- [ ] Match case study: Devolon (B2B/tech), Holz Concepts (retail/premium), Flow Meditation (wellness/D2C).
- [ ] Open discovery scorecard. Have it visible during the call.

**Assigned to Amir — due 2 hours before call:**

- [ ] Confirm prospect is in HubSpot with: name, company, email, region, phone, signal type.
- [ ] Verify Calendly confirmation email was sent and received.
- [ ] Queue WATI WhatsApp reminder for 1 hour before call (MENA prospects only).
- [ ] If Kaya is joining: send her the brief via Slack.

---

## What the Prospect Receives Before the Call

**Sent automatically: 24 hours before (HubSpot Workflow)**

Subject: Before we speak tomorrow, [First Name]

```
Hey [First Name],

Looking forward to speaking tomorrow at [time GST].

To make it worth your 20 minutes, I'll come prepared with a few specific observations 
about [Company Name] — I'll have looked at your [ads / social / website] beforehand.

Nothing formal. Just want to make sure the conversation is useful from minute one.

See you then.

Collins
ALIF Agency
```

**Sent automatically: 1 hour before (WATI — MENA only)**

Template: `alif_precall_reminder`
```
Hey {{1}} — Collins from ALIF here. We're speaking in an hour.
Looking forward to it. Calendar link if you need to reschedule: {{2}}
```

---

## HubSpot Workflow Spec (Milan builds this)

**Trigger:** Calendly meeting created (via HubSpot–Calendly integration)

**Actions in sequence:**
1. Create/update contact record with meeting details
2. Update deal stage → "Discovery Scheduled"
3. Set custom property: `discovery_date` = meeting start time
4. Enroll in "Pre-Call Asset" email sequence (sends at T-24h)
5. Send Slack message to `#sales-live`: "📅 Meeting booked — [Name] @ [Company] — [Time]"
6. Create Asana tasks via Zapier (see task list above)
7. If region = MENA: trigger WATI template at T-60 min

**Zapier connection:** HubSpot → Zapier → Asana
- Project: "alif sales"
- Assignees: Collins (prep tasks), Amir (ops tasks)
- Due dates: relative to meeting time (T-1h for Collins, T-2h for Amir)

---

## Post-Call Tasks (triggered when Collins marks meeting as "held" in HubSpot)

**Collins — due within 15 minutes of call end:**
- [ ] Log discovery score (1–5 per dimension) in HubSpot
- [ ] Update deal stage: Discovery Held
- [ ] Write 2-sentence call summary in HubSpot notes

**Collins — due within 2 hours of call end:**
- [ ] If score ≥ 4.0: generate proposal in PandaDoc. Send today.
- [ ] If score < 4.0: move deal to Nurture. Set re-engage date (60 or 90 days). Log loss reason.
- [ ] Send post-call email regardless of outcome:

```
Subject: Good speaking with you, [First Name]

Hey [First Name],

Thanks for the time today.

[One sentence summary of what they told you about their situation.]

[If qualified: "I'll have a proposal to you within the next few hours based on what we discussed."]
[If not yet qualified: "Let me put together something specific for [their stated pain] and send it over."]

Collins
```

---

## Why This System Exists

Without this: Collins scrambles before calls, prospects feel it, show rates drop, discovery calls are generic, proposals miss the mark.

With this: Every call has a specific opening observation, every proposal references what the prospect actually said, every no-show has a recovery system triggered automatically.

---

*Pre-Sale Automation — Collins Ogiki | ALIF Agency | June 30 2026*

# Reply Routing — SELLL.io
> Brain Layer: Conversational | Updated: 2026-06-21
> The event bus decision layer: every reply gets classified and routed to the right workflow automatically.

Every email reply falls into one of 12 categories. The category determines the exact next action. There is no "I'll figure this out later" — the brain routes instantly and the response goes out within 2 hours of the reply for positive signals, within 24 hours for everything else.

---

## Reply Classification Matrix

| Category | Signal Phrase Examples | Urgency | Workflow Triggered |
|----------|----------------------|---------|-------------------|
| 1. HOT — Ready to book | "yes", "let's talk", "book something", "I'm interested", "when are you free", "send me the calendar" | CRITICAL: 2h | meeting-automation → booking email |
| 2. WARM — Interested, not ready | "can you send more info", "tell me more", "what does that look like", "sounds interesting" | HIGH: 4h | nurture email + Loom video |
| 3. CONDITIONAL — Needs something | "I'd need to see a case study", "can you show me the ROI", "who else in [vertical] have you worked with" | HIGH: 4h | specific asset delivery email |
| 4. OBJECTING — Pushback | "we already use X", "we tried that before", "we build in-house", "we have no budget" | HIGH: same day | objection-bank counter + keep sequence alive |
| 5. REDIRECT — Wrong person | "not my area", "you should talk to [Name]", "reach out to our RevOps team" | MEDIUM: 24h | people-search update + warm intro email to new contact |
| 6. NOT NOW — Soft no | "not the right time", "maybe next quarter", "we're focused on other things" | MEDIUM: 24h | suppressed + signal watch + re-engagement queue |
| 7. HARD NO — Clear no | "not interested", "remove me from your list", "don't contact me again" | IMMEDIATE | suppressed + DNC list update, all threads paused |
| 8. OUT OF OFFICE | auto-reply with return date | LOW | reschedule to day after return date |
| 9. QUESTION — Wants details | "how much does this cost", "how long does it take", "do you work with [vertical]" | HIGH: 4h | specific answer email + soft CTA |
| 10. REFERRAL — Sent elsewhere | "you should talk to my colleague [Name] at [Company]" | HIGH: same day | referral intake → account-research → same-day outreach to new contact |
| 11. FORWARDED — Internal pass | "forwarding to [Name] who handles this" | HIGH: same day | immediate warm follow-up to new contact, reference the forward |
| 12. GHOST POSITIVE — No text, click only | email opened 3+ times, link clicked, no reply | MEDIUM: 24h | follow-up email referencing action |
| 13. BOUNCE — Email delivery failure | "mailbox not found", "user unknown", "550 5.1.1" | IMMEDIATE | re-search email via waterfall (Prospeo → FullEnrich) + update CSV |
| 14. MEETING REQUEST — Direct booking | "can we schedule", "send me a time", "I'll grab a slot", direct Calendly/Cal link click | CRITICAL: <60s | auto-sends calendar link via n8n within 60 seconds (webhook-triggered) |

> **Inbox-reply SKILL.md mapping:** The `inbox-reply` skill (webhook-driven) uses 10 event codes — HOT, WARM, OOO, HARD_NO, NOT_NOW, BOUNCE, REFERRAL, MEETING_REQUEST, OBJECTION, QUESTION. Cross-reference: CONDITIONAL (cat 3) → WARM in inbox-reply; REDIRECT (cat 5) → REFERRAL in inbox-reply; FORWARDED (cat 11) → REFERRAL in inbox-reply. GHOST POSITIVE is detected via separate email-open webhook, not reply classification.

---

## Full Routing Playbooks

---

### Category 1: HOT — Ready to Book

**Detection:** Any phrase indicating openness to a conversation. Err on the side of assuming positive intent.

**Response time:** Within 2 hours. Speed is the entire advantage. Reply-to-meeting speed benchmark: <2h (industry average: 24-48h).

**Action sequence:**
1. Classify as HOT immediately
2. Pause ALL other sequences touching this account (multi-thread, LinkedIn, ads)
3. Send booking email within 2 hours (template below)
4. Update `state.md`: score +40 (behavioral), stage → "Meeting Requested"
5. Alert: if meeting not booked within 24h of sending calendar link, send a one-line follow-up

**Booking email template:**
```
Subject: [reply to existing thread — same subject]

[Name],

Great — here's my calendar: https://cal.com/collins-ogiki-x4fokk/30min

30 minutes is enough to understand your situation and show you what we've built for similar teams. Looking forward to it.

Aaron
```

**Common mistake:** Over-explaining in the booking email. They said yes. Send the link. Stop writing.

---

### Category 2: WARM — Interested, Not Ready to Book

**Detection:** Engagement without commitment. They want more before deciding.

**Response time:** Within 4 hours.

**Action sequence:**
1. Send the nurture email (below) with one specific asset (Loom or case study)
2. Continue the email sequence normally — do NOT suppress
3. Tag account as WARM in `lead-scores.csv` (+10 behavioral score)
4. If they open the asset and don't reply within 5 days → send a one-question follow-up

**Nurture email template:**
```
Subject: [reply to existing thread]

[Name],

Here's the 90-second Loom I recorded specifically for [Company] — it covers exactly what this looks like in practice: [LOOM URL]

If it makes sense after watching, here's my calendar: https://cal.com/collins-ogiki-x4fokk/30min

Happy to answer questions over email too if that's easier.

Aaron
```

---

### Category 3: CONDITIONAL — Needs a Specific Asset

**Detection:** They're interested but need one specific thing before moving forward.

**Response time:** Within 4 hours. The asset must be in the email — not "I'll send it later."

**Common conditions and responses:**

| They ask for | Send this |
|-------------|-----------|
| Case study from their vertical | Closest available case study + "Here's our most relevant proof point — [Company] is in [adjacent vertical] and had the exact same situation..." |
| ROI calculation | roi-calculator.md → run their numbers → put the result in the email |
| References | "Happy to connect you with [client name, with permission] — I'll reach out to them and let you know when they're available" |
| More info on the process | Link to the 90-day build process description + brief email summary |
| Proposal | "I'll put together a scoped proposal by [tomorrow]. Two quick questions first..." |

**Action sequence:**
1. Deliver the requested asset in the reply (don't make them wait)
2. End the email with a soft ask: "Does that answer the question, or is there something else you'd want to see?"
3. Tag as CONDITIONAL in `state.md`
4. If no reply in 5 days → send one follow-up checking if the asset was useful

---

### Category 4: OBJECTING — Pushback

**Detection:** They're engaged enough to push back — this is not a no, it's a friction point.

**Response time:** Same day.

**Action sequence:**
1. Identify the objection number from `objection-bank.md`
2. Deploy the counter from the bank, verbatim or paraphrased
3. Add one proof point immediately after the counter
4. End with a question that moves forward: "Does that make sense / want to see the case study / worth a quick call to dig in?"
5. Log the objection in the Pattern Tracker in `objection-bank.md`
6. Continue the sequence — do NOT suppress

**Critical rule:** Never be defensive. An objection is a buying signal. They wouldn't push back if they weren't considering it.

---

### Category 5: REDIRECT — Wrong Person

**Detection:** They tell you someone else handles this. Common for new VP Sales hires who aren't the final decision maker yet.

**Response time:** Within 24 hours.

**Action sequence:**
1. Reply to the current contact: thank them, confirm the new contact name
2. Run `people-search` on the new name/role at this company
3. Find email for the new contact (Prospeo waterfall)
4. Send warm outreach to the new contact using this template:
```
Subject: [Original contact first name] suggested I reach out

[New contact name],

[Original contact name] at [Company] suggested I get in touch about [problem area].

[One sentence on SELLL's relevance to their situation based on role]

Worth 15 minutes this week?

Aaron
```
5. Update multi-thread schedule: Thread A = new contact. Previous contact becomes Thread B.
6. Log in `state.md`: new contact added, original contact moved to secondary

---

### Category 6: NOT NOW — Soft No

**Detection:** They're open but the timing is wrong. This is the most common reply type.

**Response time:** Within 24 hours.

**Action sequence:**
1. Reply with a graceful acknowledgement (template below)
2. Ask ONE clarifying question: "Is it a timing thing, or is there something specific that doesn't feel like the right fit?"
3. Based on answer: suppress + add to signal-watch OR get a specific future date
4. Add to `re-engagement-queue.md` with note: "Not now as of [date]. Monitor for: [signal most likely to trigger re-engagement]"
5. Set a signal alert for this company in `signal-monitor`

**Acknowledgement template:**
```
Subject: [reply to existing thread]

[Name],

Completely understand — timing is everything with this.

Quick question: is it a timing thing, or is there something specific that doesn't feel like the right fit for [Company] right now?

Either answer is helpful — just want to make sure I follow up at the right moment.

Aaron
```

---

### Category 7: HARD NO

**Detection:** Explicit disinterest or unsubscribe request.

**Response time:** Immediate.

**Action sequence:**
1. Add to DNC list in `selll_context.md` immediately
2. Pause ALL sequences touching this company: email, LinkedIn, ads, multi-thread
3. Reply with a one-line acknowledgement:
```
Understood — I'll remove you from our list. Good luck with [Company].

Aaron
```
4. Log in `institutional-memory/losses.md`: company, contact, date, which email in sequence triggered the hard no

**Hard rule:** Never re-contact a hard no. Not in 6 months. Not when a new VP joins. Not ever. The DNC list is permanent.

---

### Category 8: Out of Office

**Detection:** Auto-reply. May include return date.

**Action sequence:**
1. Pause the sequence
2. If return date is provided: reschedule Email 2 (or next email in sequence) for the day after the return date
3. If no return date: pause for 14 days, then resume
4. Do NOT send any emails while the contact is OOO

---

### Category 9: Question — Wants Details

**Detection:** They ask a specific question rather than booking or objecting.

**Response time:** Within 4 hours.

**Action sequence:**
1. Answer the question directly in the first sentence — no preamble
2. Keep the answer to 3 sentences or less
3. End with a soft CTA: calendar link or "want to dig in on a quick call?"
4. Continue the sequence normally

**Common questions and one-line answers:**

| Question | One-line answer |
|----------|----------------|
| "How much does this cost?" | "$15K setup + $3K/month — includes a dedicated human SDR. Happy to run the ROI math before the number makes sense." |
| "How long does the build take?" | "90 days from kickoff to fully operational system." |
| "Do you work with [vertical]?" | "Yes — here's our most relevant proof point: [closest client]." |
| "What tools do you need from us?" | "We work within your existing stack: HubSpot or Salesforce + your email domain. No new tools required." |
| "Can you work with our Outreach setup?" | "Yes — we integrate with whatever sequencer you're using. Outreach, Instantly, Lemlist — all compatible." |

---

### Category 10: Referral — Sent Elsewhere

**Detection:** They offer to connect you with another person at a different company.

**Response time:** Same day — referrals are the highest-value pipeline source.

**Action sequence:**
1. Reply warmly, immediately:
```
[Name] — that would be incredibly helpful. Even a quick "you should talk to Aaron at SELLL" would mean a lot. I'll take it from there.
Aaron
```
2. Run `referral-engine` intake: get the 4 intake questions from the referring contact
3. Do account-research on the referred company
4. Send warm outreach to the referred contact within 24h (referral email template from referral-engine SKILL.md)
5. Log in `referrals.md`

---

### Category 11: Forwarded — Internal Pass

**Detection:** They forward your email to a colleague within the same company.

**Response time:** Same day — the internal conversation is already happening, be in it.

**Action sequence:**
1. If the new contact emails you directly: treat as a WARM or HOT reply based on tone
2. If no email from new contact within 24h: send a warm direct email to the new contact:
```
Subject: [Original contact first name] forwarded me your way

[New contact name],

[Original contact name] forwarded our conversation — looks like [pain area] is relevant to what you're working on.

[Same hook that was in the original email, personalized to their role]

Worth a quick call?

Aaron
```
3. Add the new contact as Thread B if they're at the same company and different role
4. Update `multi-thread/{slug}-schedule.md`

---

### Category 12: Ghost Positive

**Detection:** Email opened 3+ times OR link clicked, but no reply.

**Response time:** Within 24 hours.

**Action sequence:**
1. This is a behavioral buying signal — treat as WARM
2. Add +10 to behavioral score in `lead-scores.csv`
3. Send a one-line follow-up:
```
[Name],

Noticed you checked out [the Devolon case study / the Loom / the email] — happy to answer any questions.

Worth 15 minutes?

Aaron
```
4. If still no reply after one follow-up: continue the sequence normally, do not ghost-chase further

---

## Reply Routing Speed Rules

| Reply Type | Response Deadline | Why |
|-----------|------------------|-----|
| Category 1 (HOT) | 2 hours | First-mover advantage on booking. Speed = higher show rate. |
| Category 2, 3, 4 | 4 hours | Momentum is highest when they just replied |
| Category 5, 6, 10, 11 | Same day | Don't let the conversation go cold |
| Category 7, 8, 9, 12 | 24 hours | Operational, not urgent |

**Speed benchmark:** Reply-to-booking email = < 2 hours. Industry average: 24–48 hours. This is a 12–24x advantage on close probability.

---

## Reply Log

Updated by `inbox-reply` skill after every reply processed.

| Date | Company | Contact | Reply Type | Category | Response Sent | Outcome | Time to Response |
|------|---------|---------|-----------|---------|--------------|---------|-----------------|
| (engine not yet launched) | | | | | | | |

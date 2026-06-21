---
name: meeting-automation
description: >
  Automate the meeting booking flow from positive reply to confirmed calendar
  invite. Drafts context-aware booking emails, proposes times, handles
  rescheduling, sends pre-call prep to both parties, and triggers account-
  research for the pre-call dossier. Fits after lead-scoring in Layer 4 of
  the Revenue Engine. Triggers on: "book a meeting", "meeting automation",
  "schedule a call", "confirm the meeting", "send calendar link", "booking
  email", "prospect wants to meet", "set up the call", "meeting follow-up",
  "pre-call prep".
---

# Meeting Automation

Convert every positive reply into a confirmed meeting — fast, without friction, and with a pre-call research dossier ready before the seller picks up the phone. The goal: zero meetings lost to slow follow-up, scheduling friction, or cold calls with no context.

## When to Use

- When `lead-scoring` routes an account as HOT (score ≥ 80)
- When `inbox-reply` classifies a reply as "Interested" or "Meeting Request"
- When the user wants to confirm and log a meeting that has already been booked verbally or via email
- When a previously booked meeting needs to be rescheduled

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Reply thread (lead's message + full thread) | `inbox-reply` output or Instantly API | yes |
| Contact record (name, company, role, email) | `lead-scores.csv` or email table | yes |
| Context file (voice, proof points, meeting agenda template) | `claude-code-gtm/context/{company}_context.md` | yes |
| Calendar link | User provides (Calendly / Cal.com / Google Calendar) | yes |
| Account research dossier | `account-research` output (if available) | recommended |

## Meeting Booking Flow

### Step 1: Classify the booking intent

Read the lead's reply from the inbox-reply output. Determine which booking scenario applies:

```
Scenario A: Lead explicitly asked for a meeting
  → "Let's chat", "Book time with me", "Happy to hop on a call" → send booking email immediately

Scenario B: Lead is interested but didn't request a meeting
  → "This sounds interesting, tell me more" → reply with value + soft ask for time

Scenario C: Lead proposed specific times
  → They gave you 2-3 time slots → confirm one immediately, no calendar link needed

Scenario D: Meeting was already booked (user logging it manually)
  → Skip to Step 4 (pre-call prep)

Scenario E: Rescheduling request
  → Prospect needs to move the call → re-send calendar link with brief apology-free acknowledgment
```

### Step 2: Draft the booking email

Write a booking email that:
- References the lead's specific reply (not a template opener)
- Matches their reply length and tone (short reply = short booking email)
- Contains a single, clear CTA (calendar link or proposed times)
- Does not oversell — the meeting is already sold. Don't re-pitch.
- Sends from the same email account that has been in conversation

**Booking Email Templates by Scenario:**

**Scenario A — Explicit meeting request:**
```
[Name],

Great — here's my calendar: [link]

Pick whatever works for you. Looking forward to it.

[Your name]
```

**Scenario B — Interested but no meeting request:**
```
[Name],

Happy to show you exactly how this works for a team like [Company]'s.

15 minutes this week — here's my calendar: [link]

[Your name]
```

**Scenario C — Lead proposed times:**
```
[Name],

[Proposed day/time] works perfectly.

I'll send a calendar invite to this email. Looking forward to it.

[Your name]
```

**Scenario E — Reschedule:**
```
[Name],

No problem — here's my updated calendar: [link]

[Your name]
```

**Voice rules (apply to all):**
- Never start with "I"
- No filler phrases: "Great to hear from you", "Thanks for getting back to me", "Hope this finds you well"
- Plain text only (no HTML, no signature logo)
- One sentence maximum before the CTA
- Never attach anything to the booking email

### Step 3: Send the booking email

Send via the same Instantly API thread:

```
POST /emails/reply
{
  "eaccount": "{sending_account}",
  "reply_to_uuid": "{lead_last_message_id}",
  "subject": "Re: {thread_subject}",
  "body": { "text": "{booking_email_text}" }
}
```

Present the draft to the user for confirmation before sending. Report send status.

### Step 4: Log the meeting

Once a meeting is confirmed (either by calendar booking notification or user confirmation):

1. Update `claude-code-gtm/engine/state.md`:
   - Move account from "Replied" to "Meeting Booked" stage
   - Log: contact name, company, meeting date/time, deal context

2. Update lead interest status in Instantly:
   ```
   POST /leads/update-interest-status
   { "lead_email": "{email}", "interest_value": "Meeting Booked" }
   ```

3. Add meeting record to `claude-code-gtm/engine/meetings-log.md`:
   ```
   | Date | Company | Contact | Role | Meeting Time | Context | Outcome |
   ```

### Step 5: Trigger pre-call preparation

24 hours before the meeting (or immediately if < 24 hours away):

**Action 1: Trigger account-research**

Delegate to `account-research` to build a pre-call dossier for the account. The dossier should include:
- What the company does (resolved entity tree)
- The buyer's profile (role, tenure, LinkedIn activity)
- Live signals (recent news, open roles, leadership changes)
- Tech stack (what tools they're currently using)
- Entry angle (the strongest reason to buy, given all signals)
- Competitive context (which competitor they're likely coming from or comparing against)

Output: `claude-code-gtm/accounts/{slug}/account-brief.md`

**Action 2: Generate the meeting prep brief**

Build a meeting prep brief for the seller. Structure:

```markdown
# Pre-Call Brief: [Company] — [Date/Time]

## The 60-Second Company Summary
[What they do, size, stage, key context]

## The Buyer
**Name:** [Name]
**Role:** [Title, tenure]
**LinkedIn activity:** [What they post about, what they care about]
**Why they replied:** [The signal or message that triggered their response]

## Why Now
[Top 2-3 timing signals — funding, hire, job post, competitor event]

## Tech Stack
[CRM, sequencer, prospecting tool, ads — what SELLL/your product slots beside]

## Likely Objections (prep answers)
1. [Objection] → [Counter from context file]
2. [Objection] → [Counter from context file]

## Suggested Opening
"[Company-specific opening line based on the best entry angle]"

## Proof Point to Lead With
[Best PS / case study match from the Proof Library, given their vertical and pain]

## Meeting Agenda (suggested)
1. Their world: What's driving the growth priority?
2. Current motion: How are they generating pipeline today?
3. The gap: Where is the system breaking?
4. SELLL fit: Show the intelligence layer / system overview
5. Next step: Agree on a specific next action before hanging up
```

**Action 3: Send a meeting confirmation to the prospect (optional)**

If the user wants to send a confirmation email, draft one 24 hours before:

```
[Name],

Looking forward to our call [day] at [time].

Here's what I'll cover in 15 minutes:
- The intelligence layer that tells you which accounts to target and when
- How Devolon went from 35 manual activities to 200+ automated conversations
- What a 90-day build would look like for [Company]

If you want to move or have questions before then: https://cal.com/collins-ogiki-x4fokk/30min or reply here.

[Your name]
```

### Step 6: Post-meeting capture

After the meeting occurs, ask the user to provide:
1. Meeting notes or outcome (paste or upload)
2. Deal stage (Progressed / Stalled / Lost / Won)
3. Next agreed action and date

Then:
- Update the meeting log with outcome
- Move account to correct pipeline stage in state file
- If "Progressed" → trigger `deal-nurture`
- If "Won" → log as Closed Won, update context file with win case
- If "Lost" → log reason, update context file hypothesis validation

---

## Meeting Booking Metrics

Track in `claude-code-gtm/engine/meetings-log.md`:

| Metric | Definition |
|--------|-----------|
| Reply-to-meeting rate | % of positive replies that convert to booked meetings |
| Meeting-to-opportunity rate | % of booked meetings that progress to active deal |
| Pre-call brief delivery | % of meetings with dossier delivered 24h+ before call |
| Booking speed | Time from positive reply to meeting confirmed (target: < 2 hours) |

---

## Ground Rules

- **Speed is everything.** A positive reply that waits 24 hours converts at half the rate of one that waits 2 hours. The booking email goes out within the same session.
- **Never oversell in the booking email.** The meeting is already sold. The booking email is logistics, not persuasion.
- **One CTA only.** Calendar link OR proposed times — never both. Never add a Loom video to the booking email.
- **Human approval before send.** Always present the booking email draft and the confirmation to the user before sending. The sequencer sends — the seller approves.
- **No ghost meetings.** Every booked meeting is logged. If it doesn't show in the log, it doesn't exist.
- **Trigger deal-nurture automatically.** The moment a meeting outcome is logged as "Progressed," automatically trigger the `deal-nurture` skill. Don't let the deal go cold.

## Output Files

```
claude-code-gtm/engine/meetings-log.md         — all meetings tracked
claude-code-gtm/engine/state.md                — updated pipeline stage
claude-code-gtm/accounts/{slug}/account-brief.md  — pre-call dossier
```

---

## No-Show Protocol

> Added: 2026-06-21 | Fires when a booked meeting does not occur at the scheduled time

A no-show is not a rejection. It is a scheduling failure — 80% of the time caused by the prospect's day going sideways, not by a change in interest. The protocol recovers the meeting in 3 steps.

**Do not suppress the contact. Do not move them back to the cold sequence. Do not assume they are no longer interested.**

### Step 1: +15 Minutes (Buffer Email)

Send exactly 15 minutes after the scheduled start time if no contact has been made:

```
Subject: [reply to the booking thread — same subject]

[Name],

We had a call at [time] — just checking if something came up on your end.

Happy to reschedule: https://cal.com/collins-ogiki-x4fokk/30min

Or reply and I'll send a new invite.

Aaron
```

**Tone rule:** Assume they're just running late or had an emergency. No frustration, no "I've been waiting." Neutral, easy, one-line CTA.

### Step 2: Same Day (EOD — Reschedule Email)

If no reply to the Step 1 email by end of day:

```
Subject: [reply to the booking thread]

[Name],

Left the time open in case anything changed.

A couple of options this week:
[Day 1] at [Time A] or [Time B]
[Day 2] at [Time A] or [Time B]

Or grab any slot here: https://cal.com/collins-ogiki-x4fokk/30min

Aaron
```

**Rule:** Offer specific times — don't only send the calendar link. Specific times reduce friction for busy buyers.

### Step 3: +48 Hours (Final Follow-Up)

If still no reply after 48 hours:

```
Subject: still worth connecting

[Name],

One more try — happy to make the timing work on your end.

https://cal.com/collins-ogiki-x4fokk/30min

Aaron
```

**This is the last no-show follow-up.** After Step 3, evaluate based on where they were in the pipeline:

| Prior Stage | Action After 3 No-Show Emails |
|-------------|-------------------------------|
| Discovery stage | Resume email sequence from where it paused. Do NOT start over. |
| Post-discovery (proposal pending) | Apply proposal-ghosting protocol from `brain/proposal-template.md` |
| 2nd no-show from same contact | One final: "Timing clearly isn't right — I'll check back in [X weeks]. Good luck with [thing they mentioned]." Then re-engagement queue. |

### No-Show Log

Update meetings-log.md with no-show status:

| Date | Company | Contact | Scheduled Time | No-Show Step | Follow-Up Sent | Rebooked | Notes |
|------|---------|---------|---------------|-------------|---------------|---------|-------|

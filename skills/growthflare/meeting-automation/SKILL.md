---
name: growthflare-meeting-automation
description: >
  Convert positive replies into confirmed meetings automatically. Drafts
  context-aware booking emails, handles rescheduling, sends pre-call prep,
  and triggers account-research for the pre-call dossier. Part of the
  Growthflare Revenue Engine — Layer 4: Pipeline. Triggers on: "book a
  meeting", "meeting automation", "schedule a call", "confirm the meeting",
  "send calendar link", "booking email", "prospect wants to meet", "set up
  the call", "they replied positively", "pre-call prep".
---

# Meeting Automation

Every positive reply becomes a confirmed meeting — fast. Zero meetings lost to slow follow-up or scheduling friction.

## The Speed Rule

A positive reply that waits 24 hours converts at half the rate of one answered in 2 hours. The booking email goes out in the **same session** as the reply is classified.

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Reply thread | `inbox-reply` output or sequencer API | yes |
| Contact record | `lead-scores.csv` or email table | yes |
| Context file | `claude-code-gtm/context/{company}_context.md` | yes |
| Calendar link | User provides (Calendly / Cal.com) | yes |

## Booking Scenarios

```
Scenario A: Lead explicitly requested a meeting → send calendar link now
Scenario B: Lead is interested but didn't ask for a meeting → value + soft time ask
Scenario C: Lead proposed specific times → confirm one immediately
Scenario D: Meeting already booked (user logging it) → skip to Step 4
Scenario E: Rescheduling → resend calendar link, no apology needed
```

## Booking Email Templates

All booking emails follow these rules:
- Reference the lead's specific reply — never a template opener
- Match their reply length and tone
- Single CTA: calendar link OR confirm a time — never both
- No re-pitching. The meeting is sold.
- Never start with "I"
- No greetings: "Great to hear from you", "Thanks for replying"

**Scenario A:**
```
[Name],

Great — here's my calendar: [link]

Pick whatever works. Looking forward to it.

[Your name]
```

**Scenario B:**
```
[Name],

Happy to show you exactly how this works for a team like [Company]'s.

15 minutes this week — here's my calendar: [link]

[Your name]
```

**Scenario C:**
```
[Name],

[Their proposed time] works. I'll send a calendar invite.

[Your name]
```

**Scenario E:**
```
[Name],

No problem — updated calendar here: [link]

[Your name]
```

## Workflow

### Step 1: Classify booking intent

Determine scenario (A/B/C/D/E) from the reply thread.

### Step 2: Draft and present booking email

Generate the booking email using the appropriate template. Present to user for confirmation. **Never send without user approval.**

### Step 3: Send via sequencer API

```
POST /emails/reply
{
  "eaccount": "{sending_account}",
  "reply_to_uuid": "{lead_last_message_id}",
  "subject": "Re: {thread_subject}",
  "body": { "text": "{booking_email}" }
}
```

### Step 4: Log the meeting

When a meeting is confirmed (calendar notification or user confirmation):

1. Move account from "Replied" → "Meeting Booked" in `claude-code-gtm/engine/state.md`
2. Update lead interest status in sequencer: `"interest_value": "Meeting Booked"`
3. Add record to `claude-code-gtm/engine/meetings-log.md`:
   ```
   | Date | Company | Contact | Role | Meeting Time | Context | Outcome |
   ```

### Step 5: Pre-call preparation (24h before)

**Action 1 — Trigger `account-research`:**
Build a pre-call dossier: entity tree, buyer map, live signals, tech stack, entry angle, competitive context. Output: `claude-code-gtm/accounts/{slug}/account-brief.md`

**Action 2 — Generate meeting prep brief:**

```markdown
# Pre-Call Brief: [Company] — [Date/Time]

## 60-Second Company Summary
[What they do, size, stage, key context]

## The Buyer
Name: [Name] | Role: [Title, tenure] | Active on LinkedIn: [Y/N]
Why they replied: [The signal or message that triggered their response]

## Why Now
[Top 2–3 timing signals]

## Tech Stack
[CRM, sequencer, prospecting tool — what your product slots beside]

## Likely Objections
1. [Objection] → [Counter from context file]
2. [Objection] → [Counter]

## Opening Line
"[Company-specific opening line based on entry angle]"

## Proof Point to Lead With
[Best case study match for their vertical and pain from Proof Library]

## Suggested Agenda
1. Their world: what's driving the growth priority?
2. Current motion: how are they generating pipeline today?
3. The gap: where is the system breaking?
4. Show the solution: intelligence layer + system walkthrough
5. Next step: agree on a specific action before hanging up
```

### Step 6: Post-meeting capture

After the call, ask the user for:
- Meeting notes or outcome
- Deal stage: Progressed / Stalled / Lost / Won
- Next agreed action and date

Then:
- Update `meetings-log.md` with outcome
- Move account to correct stage in `state.md`
- If "Progressed" → trigger `growthflare/deal-nurture`
- If "Won" → log as Closed Won, update context file with new win case
- If "Lost" → log reason, update hypothesis validation

## Metrics

| Metric | Target |
|--------|--------|
| Reply → booking email sent | < 2 hours |
| Booking email → meeting confirmed | < 48 hours |
| Pre-call brief delivered | 24h+ before call |
| Meeting-to-opportunity rate | 30–50% |

## Output Files

```
claude-code-gtm/engine/meetings-log.md          — all meetings
claude-code-gtm/engine/state.md                 — updated pipeline
claude-code-gtm/accounts/{slug}/account-brief.md — pre-call dossier
```

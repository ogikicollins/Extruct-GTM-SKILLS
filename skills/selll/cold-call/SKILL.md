---
name: SELLL-cold-call
description: >
  Generate 30-second cold call scripts and voicemail drops for Tier 1
  accounts. Triggered after Email 1 on Day 3 and again on Day 8 for
  non-responders. Each script is personalized to the contact's role, company
  signals, and the hypothesis that drove their selection. Includes objection
  handlers, voicemail scripts, and a call log. Adds 30–50% more meetings on
  top of email-only sequences. Part of the SELLL Revenue Engine — Layer
  3+ amplifier. Triggers on: "cold call", "call script", "phone outreach",
  "voicemail script", "call Tier 1", "call prospects", "phone sequence",
  "add calling to the campaign", "dial script".
---

# Cold Call

Add a phone layer to the outbound sequence. Email gets you in the inbox — a call gets you on the phone. For Tier 1 accounts (score 60+), a well-timed call on Day 3 and Day 8 lifts meeting rates by 30–50% over email-only sequences.

The call is not a pitch. It is a 30-second pattern interrupt that earns the right to send one more email.

## When to Run

- Day 3 of the outreach sequence — after Email 1 has landed
- Day 8 — after Email 2, before Email 3 (social proof)
- Immediately after a HOT lead signal (positive email open 3x+ or LinkedIn engagement)
- As a standalone re-activation call for WARM leads that have gone quiet

**Only call Tier 1 accounts.** Tier 2 and below stay email + LinkedIn only.

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Contact record (name, title, company, phone) | `email-search` output or contact table | yes |
| Company signals (hypothesis match, timing signal) | `list-enrichment` columns | yes |
| Email sent (Email 1 content) | Campaign CSV | yes |
| Context file (voice, proof points, personas) | `claude-code-gtm/context/{company}_context.md` | yes |
| Previous call outcome (if Day 8 follow-up) | Call log | if Day 8 run |

## Script Architecture

Every call follows the same 4-part structure. Total time: 27–35 seconds.

```
[1] HOOK (5 sec)     — one specific, non-generic reason for calling
[2] BRIDGE (8 sec)   — connect the hook to a pain they recognize
[3] ASK (7 sec)      — one micro-commitment, not a meeting request
[4] CLOSE (5 sec)    — confirm or offer to send a follow-up
```

**The rule:** Never ask for a meeting on the first call. Ask for permission to send one more email, or ask one qualifying question. The meeting ask happens in the follow-up email triggered by the call.

---

## Script Templates by Persona

### Persona 1: CRO / VP Sales

**Day 3 Script (after Email 1):**

```
"Hey [Name], [Your name] calling from SELLL.

Sent you a note earlier this week about your outbound stack — specifically how most Apollo + Outreach setups cap reply rates at under 1% because there's no signal layer behind the emails.

Quick question — is predictable pipeline something you're actively trying to solve right now, or is that further down the roadmap?

[PAUSE — let them answer]

[IF YES] Perfect. I'll send you a 3-minute Loom tonight — shows exactly what we built for Devolon. Fair?

[IF NO / NOT NOW] Totally fair — when would be a better time to revisit this?
```

**Day 8 Script (no reply to Emails 1–2):**

```
"Hey [Name], [Your name] from SELLL — tried you a few days back.

One thing I didn't mention in the emails: we helped Devolon go from 35 manual daily activities to 200+ fully automated conversations without adding headcount.

Worth 15 minutes if that's the direction you're trying to move — yes or no?

[PAUSE]

[IF YES] Great — I'll text you a calendar link. What's the best number?

[IF NO] No worries — who on your team would be more relevant for this conversation?
```

---

### Persona 2: Scaling Founder (CEO)

**Day 3 Script:**

```
"Hey [Name], [Your name] from SELLL.

Sent you a note earlier this week. Quick question — at [Company]'s stage, are you still in most of the deals yourself, or have you managed to step back from the selling?

[PAUSE]

[IF STILL SELLING] That's exactly what I figured — most founders at $5M ARR are. We built a system that takes that off the founder's plate entirely. Worth 15 minutes?

[IF STEPPED BACK] Amazing — most founders struggle with that transition. Happy to share what we built to make it stick. 15 minutes?
```

**Day 8 Script:**

```
"Hey [Name], [Your name] from SELLL — tried you last week.

One thing I should've said in the emails: the 90-day build means you own the system at the end. Not a retainer you're locked into. One build, you keep it.

Worth a quick call to see if it's the right timing for [Company]?
```

---

### Persona 3: Newly Hired VP Sales

**Day 3 Script:**

```
"Hey [Name], [Your name] from SELLL.

Congrats on the new role at [Company] — saw you started recently.

Quick question: in your first 30 days, have you found the outbound motion already set up and working, or is it something you're rebuilding from scratch?

[PAUSE]

[IF REBUILDING] That's exactly what I figured — that's the situation we built SELLL for. Can I send you a 3-minute overview of what we do in 90 days?

[IF WORKING WELL] Good to hear — I'll leave you alone then. If anything changes on the pipeline side, I'm easy to find.
```

**Day 8 Script:**

```
"Hey [Name], [Your name] from SELLL — tried you a few days back.

One thing worth knowing: Stefan Golz came in as CRO at Holz Concepts in exactly the same situation — inheriting a broken stack with a 90-day mandate. We built the system in parallel with his onboarding. He hit his first pipeline targets on time.

Worth a quick comparison call to see if the timing works for [Company]?
```

---

## Voicemail Scripts

Leave a voicemail only on the Day 8 call (not Day 3 — too early). Keep to 20 seconds maximum.

**CRO / VP Sales voicemail:**
```
"Hey [Name], [Your name] from SELLL — [phone number]. Sent you a couple notes about your outbound stack this week. Specifically about the reply rate gap between standard Apollo sequences and intent-triggered outreach. Worth 15 minutes — call me back or text that number and I'll send over a calendar link."
```

**Founder voicemail:**
```
"Hey [Name], [Your name] from SELLL — [phone number]. Quick note about what happens after founder-led sales hits its ceiling at [Company]. I have a specific system we built for exactly this stage. Worth a call — text me back or I'll follow up by email."
```

**VP Sales voicemail:**
```
"Hey [Name], [Your name] from SELLL — [phone number]. Congrats again on the new role. Have a specific framework for rebuilding outbound in the first 90 days that's relevant to where [Company] is right now. Call me back or text that number."
```

---

## Post-Call Actions

### If they said YES (interested, want follow-up):

Immediately send a **post-call email** (within 30 minutes):

```
Subject: as promised

[Name],

Great speaking with you — here's the [Loom / case study / calendar link] I mentioned.

https://cal.com/collins-ogiki-x4fokk/30min

[Your name]
```

Update lead score in `lead-scores.csv`: add 35 points (phone conversation = strong intent signal).
Route account to `meeting-automation`.

### If they asked a question / raised an objection:

Answer it briefly on the call, then send a **follow-up email** with the full answer:

```
Subject: the answer to your question

[Name],

You asked [their question] on the call just now. Here's the full answer:

[2–3 sentence answer referencing proof point from context file]

Worth 15 minutes to walk through the rest?

https://cal.com/collins-ogiki-x4fokk/30min

[Your name]
```

### If no answer (went to voicemail):

Log the attempt. If Day 8 call: leave voicemail. Send a **call-referenced email** the same day:

```
Subject: tried you just now

[Name],

Tried you by phone just now — left a quick note.

[One new fact or proof point not in the previous emails]

15 minutes this week: https://cal.com/collins-ogiki-x4fokk/30min

[Your name]
```

### If not interested:

```
"Totally understood — thanks for the honesty. If [Company]'s pipeline priorities shift, I'm easy to find."
```

Log as Not Interested. Do not call again. Remove from call list.

---

## Workflow

### Step 1: Build the call list

Pull all Tier 1 accounts from `lead-scores.csv` where:
- Score ≥ 40 (ACTIVE or above)
- Day in sequence = 3 or 8
- Phone number available

If phone numbers are missing: delegate to `email-search` to find direct dials or LinkedIn phone data.

### Step 2: Generate scripts

For each contact:
1. Identify persona (CRO / Founder / VP Sales) from role field
2. Identify strongest signal (from `list-enrichment` columns)
3. Select Day 3 or Day 8 template
4. Personalize: swap in company name, specific signal, most relevant proof point
5. Generate voicemail script (Day 8 only)
6. Generate post-call email template (ready to send immediately after call)

Output: `claude-code-gtm/engine/call-queue.md` — the day's call list with scripts.

### Step 3: Present the call queue

```markdown
## Call Queue — {date}

Total calls: N | Tier 1 only | Day 3: N | Day 8: N

| Priority | Company | Contact | Role | Phone | Script | Signal |
|----------|---------|---------|------|-------|--------|--------|
| 1 | Acme | Sarah Chen | VP Sales | +1... | Day 3 CRO | New SDR hire |
| 2 | BrightPath | Tom Reyes | CRO | +1... | Day 8 CRO | Series A |
```

Seller works the queue top to bottom. Highest-scored accounts first.

### Step 4: Log outcomes

After each call, user logs the outcome:
- **Interested** → route to `meeting-automation`
- **Voicemail** → send call-referenced email
- **Objection** → send objection-handler email
- **Not interested** → suppress
- **Wrong number** → search for alternative contact

Update `claude-code-gtm/engine/call-log.md`:
```
| Date | Company | Contact | Attempt | Outcome | Follow-up Sent | Score Update |
```

Update lead score in `lead-scores.csv`.

---

## Call Metrics

Track in `revenue-reporting`:

| Metric | Target | Measure |
|--------|--------|---------|
| Call connect rate | 15–25% | Connects / dials |
| Call → interested rate | 20–35% of connects | Interested / connects |
| Call → meeting rate | 10–20% of dials | Meetings / total dials |
| Voicemail callback rate | 3–8% | Callbacks / voicemails |
| Best call time | 7:30–9 AM or 4:30–6 PM local | Track by connect rate |

## Output Files

```
claude-code-gtm/engine/call-queue.md     — daily prioritized call list with scripts
claude-code-gtm/engine/call-log.md       — outcome log per call
```

---
name: deal-nurture
description: >
  Build and run post-meeting nurture sequences that move deals from discovery
  to signed contract. Adapts tone, content, and cadence to deal stage, buyer
  persona, and objections raised. Covers: post-call follow-up, value
  reinforcement, case study delivery, proposal timing, and close triggers.
  Layer 5 of the Revenue Engine. Triggers on: "nurture the deal", "follow up
  after the meeting", "deal nurture", "post-meeting sequence", "move the deal
  forward", "proposal follow-up", "close the deal", "deal stuck", "deal
  follow-up", "post-discovery nurture".
---

# Deal Nurture

Turn every discovery call into a closed deal. The deal-nurture skill builds and manages the post-meeting sequence for every active opportunity — customized to the buyer's persona, the deal stage, and the specific objections or interests raised in the call. It is triggered by `meeting-automation` after a call outcome is logged as "Progressed."

## When to Use

- Immediately after a discovery call where the outcome is "Progressed" or "Positive"
- When a deal has gone quiet and the user wants to re-engage without spamming
- When a deal is stuck at a specific stage (proposal sent, evaluation, executive sign-off)
- When a new stakeholder enters the deal (champion found an economic buyer)
- When the user asks "how do we move this deal forward?"

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Meeting notes / call outcome | User provides after call | yes |
| Account brief | `claude-code-gtm/accounts/{slug}/account-brief.md` | yes |
| Context file (voice, proof library, personas) | `claude-code-gtm/context/{company}_context.md` | yes |
| Deal stage | User provides: Discovery → Evaluation → Proposal → Close | yes |
| Buyer persona | CRO / Founder / VP Sales (matched from context file personas) | yes |
| Objections raised on call | User provides from meeting notes | recommended |

## Deal Stages

```
Stage 1: POST-DISCOVERY   → Call happened, interest confirmed, next step agreed
Stage 2: EVALUATION       → Prospect is internally evaluating (comparing options, building business case)
Stage 3: PROPOSAL         → Proposal delivered, waiting for feedback or decision
Stage 4: CLOSE            → Decision imminent — contract, legal, or final approval pending
Stage 5: STALLED          → No response in 7+ days after a positive earlier stage
Stage 6: LOST             → Deal closed lost (log reason, exit sequence)
```

---

## Sequence by Stage

### Stage 1: Post-Discovery Sequence (Days 1–14)

Triggered immediately after the discovery call. Goal: summarize the call, confirm next step, and deliver the "why us" proof before momentum fades.

**Email 1 — Day 1 (Call Summary)**

Send within 4 hours of the call ending.

```
[Name],

Thanks for the time today.

Here's what I took away:

→ [Key pain point they named]
→ [Current situation / workaround they described]
→ [Outcome they're trying to reach]

Based on that, the most relevant thing I can show you is [specific product capability or case study].

For next steps — [agreed next action, e.g., "I'll send you the Devolon case study and loop back Thursday to answer any questions"].

[Your name]
```

**Email 2 — Day 3 (Value Reinforcement)**

Deliver the most relevant proof point for their pain + persona.

```
[Name],

Quick follow-up.

[Case study or result directly relevant to the pain they named on the call] — [Company] went from [before state] to [after state] in 90 days.

The piece that's most relevant to [Company]'s situation is [specific element they care about].

Still planning to [agreed next step]?

[Your name]
```

**Email 3 — Day 7 (Business Case Hook)**

Help them build the internal case for buying.

```
[Name],

If you're pulling this together for [CEO / board / CFO], here's the math we typically show:

[Pain cost in dollars or hours — e.g., "At $70K OTE per SDR, 50% of time on list-building = $35K/year in misallocated labor per rep."]

[Solution ROI — e.g., "Our system replaces that labor. For a 3-person SDR team, that's $105K/year reclaimed. The 90-day build pays back in under 90 days."]

Happy to build this out as a one-pager if it helps the conversation internally.

[Your name]
```

**LinkedIn Touchpoint — Day 5**

Engage with their most recent LinkedIn post. Leave a substantive comment relevant to what they shared on the call. Never pitch in the comment.

**Email 4 — Day 14 (Momentum Check)**

If no response to Emails 1–3:

```
[Name],

Checking in on whether [agreed next step] is still on track.

No pressure — if the timing shifted or priorities changed, just let me know and I'll adjust accordingly.

[Your name]
```

---

### Stage 2: Evaluation Sequence (Days 1–21)

The prospect is internally evaluating. They may be comparing vendors, building a business case, or waiting for budget approval. Goal: stay top-of-mind, equip the champion, handle objections.

**Email 1 — Day 1 (Champion Enablement)**

```
[Name],

If you're presenting this internally, here are the three things that typically land best with [CRO / CFO / CEO]:

1. [Key outcome with numbers — e.g., "200+ daily conversations without headcount increase"]
2. [Risk reducer — e.g., "90-day build with a defined deliverable — not an open-ended retainer"]
3. [Social proof — e.g., "Stefan Golz at Holz Concepts: 'The intelligence they gathered about our ICP was worth the engagement alone.'"]

Happy to join a call with your [CRO / CEO] if that would help.

[Your name]
```

**Email 2 — Day 5 (Competitor Displacement)**

If they are evaluating a competitor, surface the displacement angle from the context file.

```
[Name],

One thing worth knowing if you're comparing options:

[Competitor name] is [honest assessment — not a smear]. Where we're different: [specific capability that's relevant to their stated pain].

The best way to see the difference is [specific demo element or metric].

Still on track for [agreed timeline]?

[Your name]
```

**Email 3 — Day 10 (Objection Pre-empt)**

Address the most likely objection for their persona before they raise it.

```
[Name],

One question that usually comes up at this stage: [common objection for their persona].

Here's how we think about it: [answer from context file objection handler].

[Case study or proof point that directly refutes the objection].

Anything specific I can put together to make the decision easier?

[Your name]
```

**LinkedIn Touchpoint — Day 7, Day 14**

Engage with their posts. The prospect should see your name in their notifications without being pitched in email.

**Email 4 — Day 21 (Evaluation Close)**

```
[Name],

Where are you landing on this?

If there's something specific blocking the decision — timing, budget, internal alignment, or something we haven't addressed — I'd rather know now so I can help.

[Your name]
```

---

### Stage 3: Proposal Follow-Up Sequence (Days 1–14)

Proposal has been sent. Goal: get a response, answer questions, and drive to a decision date.

**Email 1 — Day 2 (Proposal Check-In)**

Send 48 hours after proposal delivery.

```
[Name],

Wanted to make sure the proposal landed — sometimes these hit spam.

The key numbers are on page [N]: [the most important ROI or scope element]. Happy to walk through any of it on a quick call.

[Your name]
```

**Email 2 — Day 5 (Reinforce the Decision)**

```
[Name],

If [Company] starts the 90-day build in [month], the system will be live and generating pipeline by [projected month].

The cost of waiting 30 days is [specific opportunity cost — e.g., "roughly $X in pipeline that won't enter the system until a month later"].

What questions do you have before we move forward?

[Your name]
```

**Email 3 — Day 10 (Executive Reach)**

If you know who the economic buyer is and the champion hasn't moved the deal:

```
[Name],

Would it be helpful to bring [CEO / CFO / CRO] into a 20-minute call to answer any questions at the executive level?

Some of our best engagements start with that conversation — it gets everyone aligned faster.

[Your name]
```

**Email 4 — Day 14 (Soft Deadline)**

```
[Name],

I want to be straightforward: we have [limited capacity / a new client starting] in [month], and I want to make sure [Company] is locked in before that slot fills.

Is there anything standing between you and a go/no-go decision?

[Your name]
```

---

### Stage 4: Close Sequence (Days 1–7)

Decision is imminent. Contract is out or about to go out. Goal: remove friction, answer final objections, get the signature.

**Email 1 — Day 1 (Contract Follow-Up)**

```
[Name],

Contract is on its way / is in your inbox.

Let me know if legal has any redlines or if you'd like me to walk through the terms — usually takes 10 minutes.

[Your name]
```

**Email 2 — Day 3 (Friction Removal)**

```
[Name],

Checking in on the contract. If anything needs to be modified or there are questions on your side, fastest path is usually a quick call.

Happy to set something up this week.

[Your name]
```

**Email 3 — Day 7 (Final Push)**

```
[Name],

Last check-in on this — after this I'll assume the timing shifted and won't keep following up.

If there's a specific blocker I can help with, just say the word.

[Your name]
```

---

### Stage 5: Re-Engagement (Deal Stalled)

The deal has gone quiet for 7+ days. No response to emails. Use this sequence to restart the conversation without burning the relationship.

**Email 1 — New Angle**

```
[Name],

Haven't heard back in a while — I'll take that as a sign the timing shifted.

One thing worth mentioning before I close out: [new development — new case study, new capability, new urgency signal relevant to their company].

If the situation has changed on your end, I'd love to reconnect. If not, no worries at all.

[Your name]
```

**Email 2 — Breakup (if no response to above)**

```
[Name],

Going to close out this conversation for now.

If [Company]'s GTM priorities shift or you're ready to revisit a systematic approach to pipeline, I'm easy to find.

Rooting for you either way.

[Your name]
```

---

## Workflow

### Step 1: Read the meeting notes

Ask the user to paste or upload:
- Key pain points surfaced on the call
- Objections raised
- Agreed next step and timeline
- Stakeholders on the call (and any new contacts mentioned)

### Step 2: Identify the deal stage and persona

Match to one of the 6 deal stages above. Confirm the buyer persona (CRO / Founder / VP Sales) from the context file.

### Step 3: Pull the right proof points

Read the context file Proof Library. Select 2–3 proof points that match:
- The buyer's persona
- The pain they named on the call
- The vertical / company profile

### Step 4: Build the sequence

Generate the full email sequence for the identified stage. Every email gets:
- A specific subject line (no generic "Following up")
- A personalized opening anchored to what they said on the call
- One proof point maximum per email
- One CTA per email
- Match voice rules from context file

### Step 5: Review and approve

Present the full sequence to the user. Seller reviews, edits, and approves before anything is sent. Label each email with its send date.

### Step 6: Log and track

Add the deal to `claude-code-gtm/engine/deals.md`:

```
| Company | Contact | Stage | Last Touch | Next Action | Close Date (est) | Deal Value (est) |
```

Update `claude-code-gtm/engine/state.md` with new deals in nurture.

### Step 7: Weekly deal review

Every Friday, present the open deal list and flag:
- Deals with no touch in 5+ days → escalate to user
- Deals that crossed a stage → update sequence
- Deals that have gone quiet 10+ days → trigger Stage 5 (Re-engagement)

---

## Sequence Rules (All Stages)

- **Maximum 1 email per 2 days** in nurture stage. This is not a cold outreach sequence.
- **Always reference the call.** Every nurture email should include one specific reference to what the prospect said. No generic templates.
- **Never re-pitch the full product.** The meeting already happened. Nurture emails reinforce, answer, and advance — not re-sell.
- **Short beats long.** Nurture emails should be 3–6 sentences. The prospect is already warm. They don't need a re-education.
- **One ask per email.** Never include a calendar link AND a case study link AND a question in the same email.
- **Seller sends, not the sequencer.** Nurture emails are sent from the seller's personal inbox — not from the campaign sequencer. They are individual human emails, not automated sequences.

## Output Files

```
claude-code-gtm/engine/deals.md                    — open deal tracker
claude-code-gtm/engine/state.md                    — updated pipeline stage
claude-code-gtm/nurture/{slug}/sequence.md         — generated nurture sequence per deal
```

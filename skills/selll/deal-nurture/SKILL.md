---
name: SELLL-deal-nurture
description: >
  Build and run post-meeting nurture sequences that move deals from discovery
  to signed contract. Adapts tone, content, and cadence to deal stage and
  buyer persona. Covers: post-call follow-up, value reinforcement, case study
  delivery, proposal timing, close triggers, and re-engagement for stalled
  deals. Part of the SELLL Revenue Engine — Layer 5: Close. Triggers
  on: "nurture the deal", "follow up after the meeting", "deal nurture",
  "post-meeting sequence", "move the deal forward", "proposal follow-up",
  "close the deal", "deal stuck", "deal follow-up", "post-discovery nurture".
---

# Deal Nurture

Turn every discovery call into a closed deal. Triggered by `meeting-automation` when a call outcome is logged as "Progressed." Adapts every sequence to the exact buyer, stage, and objections raised on the call.

## Deal Stages

```
Stage 1: Post-Discovery  → Call happened, interest confirmed, next step agreed
Stage 2: Evaluation      → Internal evaluation, business case building
Stage 3: Proposal        → Proposal sent, awaiting feedback or decision
Stage 4: Close           → Contract out or decision imminent
Stage 5: Stalled         → 7+ days no response after positive earlier stage
Stage 6: Lost            → Deal closed lost (log reason, exit)
```

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Meeting notes / call outcome | User provides after call | yes |
| Account brief | `claude-code-gtm/accounts/{slug}/account-brief.md` | yes |
| Context file (voice, proof library, personas) | `claude-code-gtm/context/{company}_context.md` | yes |
| Deal stage | User provides | yes |
| Buyer persona | CRO / Founder / VP Sales from context file | yes |
| Objections raised on call | From meeting notes | recommended |

---

## Stage 1: Post-Discovery (Days 1–14)

### Email 1 — Day 1: Call Summary (send within 4 hours)

```
Subject: Notes from today

[Name],

Thanks for the time today.

Here's what I took away:

→ [Key pain they named]
→ [Current situation / workaround they described]
→ [Outcome they're trying to reach]

Most relevant thing I can show you: [specific capability or case study].

For next steps — [agreed next action, e.g., "sending you the Devolon brief and reconnecting Thursday"].

[Your name]
```

### Email 2 — Day 3: Value Reinforcement

```
Subject: [Case study company] → [outcome]

[Name],

[Case study or result directly relevant to their stated pain] — [Company] went from [before] to [after] in 90 days.

Most relevant to [Company]'s situation: [specific element they care about].

Still on track for [agreed next step]?

[Your name]
```

### Email 3 — Day 7: Business Case Hook

```
Subject: The math for your CFO

[Name],

If you're pulling this together for the board: [pain cost in dollars/hours — e.g., "At $70K OTE, 50% SDR time on list-building = $35K/year per rep in wasted labor."]

[Solution ROI — e.g., "Our system replaces that labor. For a 3-person SDR team: $105K/year reclaimed. The 90-day build pays back in under 90 days."]

Happy to build this as a one-pager if it helps internally.

[Your name]
```

*LinkedIn: Day 5 — substantive comment on their post. No pitch.*

### Email 4 — Day 14: Momentum Check (if no response)

```
[Name],

Checking in — is [agreed next step] still on track?

If timing shifted, just say the word.

[Your name]
```

---

## Stage 2: Evaluation (Days 1–21)

### Email 1 — Day 1: Champion Enablement

```
[Name],

If you're presenting this internally, here are the three things that land best with [CRO / CFO / CEO]:

1. [Outcome + numbers]
2. [Risk reducer — e.g., "90-day build, defined deliverable, not an open-ended retainer"]
3. [Social proof — relevant quote from Proof Library]

Happy to join a call with your [CRO / CEO] if that helps.

[Your name]
```

### Email 2 — Day 5: Competitor Displacement

```
[Name],

One thing worth knowing if you're comparing options:

[Competitor] is [honest, factual description]. Where we're different: [specific capability relevant to their pain].

Best way to see the difference: [specific demo or metric].

Still on track for [agreed timeline]?

[Your name]
```

### Email 3 — Day 10: Objection Pre-empt

Address the most likely objection for their persona before they raise it.

```
[Name],

One question that usually comes up at this stage: [common objection].

Here's how we think about it: [answer from context file].

[Proof point that directly refutes the objection].

Anything I can put together to make the decision easier?

[Your name]
```

### Email 4 — Day 21: Evaluation Close

```
[Name],

Where are you landing on this?

If there's something specific blocking the decision — timing, budget, internal alignment, or anything we haven't addressed — I'd rather know now.

[Your name]
```

*LinkedIn: Day 7 and Day 14 — engage with their posts.*

---

## Stage 3: Proposal (Days 1–14)

### Email 1 — Day 2: Proposal Check-In

```
[Name],

Wanted to make sure the proposal landed.

Key numbers are on page [N]: [the most important ROI or scope element]. Happy to walk through any of it.

[Your name]
```

### Email 2 — Day 5: Urgency + Timeline

```
[Name],

If [Company] starts the build in [month], the system will be live and generating pipeline by [month].

Cost of waiting 30 days: [specific opportunity cost].

What questions do you have before we move forward?

[Your name]
```

### Email 3 — Day 10: Executive Pull-Through

```
[Name],

Would it help to bring your [CEO / CFO / CRO] into a 20-minute call to answer questions at the executive level?

[Your name]
```

### Email 4 — Day 14: Soft Deadline

```
[Name],

Being upfront: we have [limited capacity / a new client starting] in [month]. Want to make sure [Company] is locked in before that slot fills.

Is there anything between you and a go/no-go decision?

[Your name]
```

---

## Stage 4: Close (Days 1–7)

### Email 1 — Day 1: Contract Follow-Up

```
[Name],

Contract is in your inbox. Let me know if legal has any redlines or if you want to walk through the terms — usually 10 minutes.

[Your name]
```

### Email 2 — Day 3: Friction Removal

```
[Name],

Checking in on the contract. If anything needs modification, fastest path is a quick call.

[Your name]
```

### Email 3 — Day 7: Final Push

```
[Name],

Last check-in. After this I'll assume the timing shifted.

If there's a specific blocker I can help with, just say the word.

[Your name]
```

---

## Stage 5: Re-Engagement (Stalled)

### Email 1 — New Angle

```
[Name],

Haven't heard back — going to assume timing shifted.

One thing worth mentioning before I close this out: [new development — case study, capability, or signal relevant to their company].

If the situation changed on your end, I'd love to reconnect.

[Your name]
```

### Email 2 — Breakup

```
[Name],

Going to close out this conversation for now.

If [Company]'s GTM priorities shift, I'm easy to find.

Rooting for you either way.

[Your name]
```

---

## Workflow

1. Read meeting notes → identify stage and persona
2. Pull matching proof points from context file Proof Library
3. Generate full sequence for the stage — every email personalized to what they said on the call
4. Present full sequence to user for review and approval
5. Label emails with send dates — seller sends from personal inbox
6. Log deal: `claude-code-gtm/engine/deals.md`
7. Weekly deal review: flag any deal 5+ days without touch

## Sequence Rules

- Max 1 email per 2–3 days in nurture (not cold outreach cadence)
- Seller sends from personal inbox — NOT the campaign sequencer
- Every email references something the prospect said on the call
- Never re-pitch the full product — reinforce, answer, advance
- Short beats long — 3–6 sentences per email
- One CTA per email, never two
- Seller always reviews before sending

## Deal Review (Weekly)

Every Friday, check `deals.md` and flag:
- Deals with 5+ days since last touch → seller action required
- Deals that crossed a stage → update sequence
- Deals quiet 10+ days → trigger Stage 5 re-engagement

## Output Files

```
claude-code-gtm/engine/deals.md                — open deal tracker
claude-code-gtm/engine/state.md                — updated pipeline stage
claude-code-gtm/nurture/{slug}/sequence.md     — nurture sequence per deal
```

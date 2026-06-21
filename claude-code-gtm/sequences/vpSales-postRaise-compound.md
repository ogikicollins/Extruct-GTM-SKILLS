# VPSales_PostRaise_Compound — New VP Sales + Post-Raise Compound Sequence
> Variant: `VPSales_PostRaise_Compound`
> Persona: Persona 3 — New VP Sales / Head of Sales
> Trigger: H1+H5 compound signal confirmed | Raise < 90 days + VP Sales started < 45 days
> Emails: 5 | Duration: 22 days
> Sending name: Aaron Shepard (Tier 1 Priority only — this variant never sends from SDR name)

---

## What This Sequence Is Doing

This is the highest-signal scenario in the entire system. Two things are simultaneously true:
1. The company raised capital recently — board expectations are now set, the runway is on a timer
2. A new VP Sales just joined — they have a 45-day window to prove the role was worth the hire

These two forces compound each other. The board wants pipeline. The VP wants credibility. Neither has time for a slow build.

This sequence speaks directly to that compound pressure — without being predatory about it. We acknowledge the situation because we've seen it repeatedly, and our proof point mirrors it exactly. Every email earns its place by being more relevant than the last.

**Compound rule:** If the raise was more than 6 months ago or the VP Sales has been in the role more than 45 days, default to `VPSales_v1` — the compound urgency is no longer fresh.

---

## Email 1 — Two Signals, One Moment
**Send: Day 1 (after pre-engagement complete)**
**Subject: `{{raise_stage}} + Day {{days_in_role}} — {{company_name}}`**

```
{{first_name}},

Two things are true at {{company_name}} right now.

You closed {{raise_amount}} in {{raise_stage}} — which means the board's expectations are already set and the clock is running. And you're Day {{days_in_role}} into a VP Sales role on a motion that was built for a different stage.

The companies that use this window — when capital is fresh and leadership is still establishing — to rebuild the outbound infrastructure almost always hit their early targets. The ones that wait to be certain before acting tend to spend the capital on headcount and still miss the number.

Nothing to sell. Genuinely curious how you're thinking about the first 90 days.

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 114**
**Why it works: The subject line references both signals — the prospect sees their own situation reflected before they even open the email. The observation in the body is specific, non-salesy, and demonstrates we understand the board dynamic without being cynical about it.**

---

## Email 2 — The Compound Proof
**Send: Day 4**
**Subject: `How {{proof_company}} used the same window`**

```
{{first_name}},

{{proof_person}} joined {{proof_company}} as {{proof_role}} {{proof_months_post_raise}} months after their funding round.

Same position you're in: board expectations already set, motion not built for the new stage, team working hard but at the wrong targets.

We rebuilt the intelligence layer — ICP definition, signal selection, sequence architecture — without changing the headcount or the tools. We started with three weeks of research before a single email went out.

{{proof_outcome}}.

The window between a new raise and a board's first serious pipeline question is narrow. For most companies at your stage, it's about 90 days.

I can show you what that rebuild looks like, specifically for {{company_name}}. Worth 20 minutes?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Word count: 120**
**Why it works: The proof person mirrors the exact compound situation (post-raise + new VP). The 90-day window creates real urgency without being manipulative — it's factually accurate.**

---

## Email 3 — Compound Loom
**Send: Day 8**
**Subject: `The window — 5 min, recorded for {{company_name}}`**

```
{{first_name}},

I put together a short walkthrough for {{company_name}}.

It covers: what the outbound motion at a post-{{raise_stage}} company with {{sdr_count}} SDRs typically needs to produce to satisfy board expectations in month three, where the leverage is, and what {{proof_company}}'s trajectory looked like — specifically from raise-close to first pipeline milestone.

{{loom_url_company_specific}}

No pitch, no deck. Just the context that's relevant to where {{company_name}} is right now.

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 84**
**Dependency: Loom must reference the raise stage and the board expectation timeline — not just the standard system overview. Record a separate Loom for H1+H5 compound prospects.**

---

## Email 4 — The Board Question
**Send: Day 15**
**Subject: `The question you'll get in month three`**

```
{{first_name}},

At some point in month three, someone will ask what the outbound motion has produced since the {{raise_stage}} closed.

The VP Sales teams that answer with real numbers — meetings created, pipeline generated, conversion rate — get more runway and more trust. The ones who answer with "we're still building the foundation" get pressure, regardless of how reasonable the explanation is.

At {{company_size}} with {{sdr_count}} SDRs, the infrastructure exists to produce real numbers by month three — if what feeds it is right. ICP, signal selection, message architecture. That's the work that determines whether activity converts.

Day {{days_in_role}} is still the right time to build this. Month three is not.

I have one slot next week: {{calendar_link}}

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 123**
**Why it works: Speaks directly to a fear every post-raise VP Sales carries — the board review. Frames the SELLL engagement as the solution to that fear without manufacturing false urgency.**

---

## Email 5 — Graceful Exit
**Send: Day 22**
**Subject: `Closing the loop, {{first_name}}`**

```
{{first_name}},

Last email from me.

If the timing's off or this isn't the priority right now — I completely understand where Day {{days_in_role}} puts you.

If it becomes the priority — before the board asks rather than after — I'm easy to find. {{sender_name}}, SELLL.io.

One thing I'll leave you with: {{proof_person}} took the call three weeks before his board review. He said later that the timing was the thing. {{proof_company}} {{proof_outcome}}.

Good luck with the build.

{{sender_name}}
```

**Word count: 88**
**Why it works: "Before the board asks rather than after" is the most important six words in this sequence — it's the decision the VP is actually making right now. The exit leaves it with them without pressure.**

---

## SDR Operating Notes

**This variant is Tier 1 Priority only — always sent from Aaron's name.**
**SDRs manage the execution. Aaron owns the relationship once they reply.**

**Before Email 1:**
- Verify `{{raise_amount}}` and `{{raise_stage}}` from enrichment — double-check on Crunchbase
- Verify `{{days_in_role}}` from vp_sales_start_date — this changes daily, recalculate on the day of send
- Verify `{{proof_months_post_raise}}` from proof-library.md matches the compound proof case
- Confirm urgency: if VP Sales has been in role > 38 days, escalate to Aaron before sending — window is almost closed

**The compound Loom (Email 3) must cover:**
1. What board expectations look like at post-{{raise_stage}} stage
2. What the outbound infrastructure needs to produce to satisfy them by month 3
3. The proof company trajectory from raise-close to first pipeline number
4. Specific mention of {{company_name}} and why this timing matters

**If they reply to Email 1:** Route immediately to Aaron. This variant's prospects are the highest-priority contacts in the entire pipeline.

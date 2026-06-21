# VPSales_Displacement — Competitor Displacement Sequence
> Variant: `VPSales_Displacement`
> Persona: Persona 3 — New VP Sales / Head of Sales (also works for Persona 1 CRO)
> Trigger: H7 confirmed | competitor_frustration_signal detected | competitor_client found
> Emails: 5 | Duration: 22 days
> Sending name: Aaron Shepard (Tier 1) / SDR name (Tier 2)

---

## What This Sequence Is Doing

The prospect has either:
a) Used an agency (Belkins, CIENCE, Kalungi, etc.) and left signals of frustration (G2 reviews, LinkedIn posts), OR
b) Is currently using an agency and enrichment suggests low satisfaction

This is both the highest opportunity and the highest risk sequence. Done right — empathetic, non-attacking, specific about the failure mode — it positions SELLL as a fundamentally different model. Done wrong — generic, predatory, "we're better than them" — it gets deleted immediately and destroys credibility.

**Critical rule:** Never name the competitor in a way that sounds like a jab. The framing is always: "it's a structural problem with how agencies work" not "{{competitor_name}} is bad." We're pointing at a model failure, not a company failure.

---

## Email 1 — Acknowledge, Don't Attack
**Send: Day 1 (after pre-engagement complete)**
**Subject: `After {{competitor_name}} — {{company_name}}`**

```
{{first_name}},

Working with {{competitor_name}} and not getting what was expected is one of the most common patterns we see.

Not a jab at them — it's a structural problem with how most outbound agencies work. They run their playbook on your ICP. The ICP was never theirs to define. So the sequences launch on intelligence that was built for a generic buyer, not your specific one.

The result is usually the same: high activity, low conversion, and six months later a harder internal conversation about whether outbound even works.

I'd rather show you one thing we do differently than tell you about it.

Interested?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 108**
**Why it works: "Not a jab at them" is the most important line in Email 1. It immediately separates this from every other displacement email they've ever received. The failure mode described is so accurate that the prospect will mentally confirm it while reading.**

---

## Email 2 — The Structural Difference
**Send: Day 4**
**Subject: `Why the {{competitor_name}} model usually fails`**

```
{{first_name}},

Most outbound agencies fail for the same structural reason.

They start with the sequence. We start with three weeks of intelligence — ICP mapping, signal selection, competitive positioning, message architecture. That work is what determines whether the sequence performs. Skip it, and you're putting a high-quality delivery system on top of a broken foundation.

With {{competitor_name}}, the execution was probably fine. What fed it wasn't.

{{proof_person}} came off a similar experience before we worked together. His words after month one: {{proof_person_quote}}

{{proof_outcome}}.

Want to see what the intelligence-first model looks like in practice? 20 minutes.

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Word count: 112**
**Why it works: The "three weeks of intelligence before a single email goes out" is the clearest differentiator and it's presented as a process observation, not a sales claim. The proof quote is the clincher — someone who came off the exact same experience and felt the difference.**

---

## Email 3 — The Model (Loom)
**Send: Day 8**
**Subject: `What different actually looks like — 4 min`**

```
{{first_name}},

I recorded a short video for {{company_name}} — specifically on the intelligence-first model and how it differs from what you experienced with {{competitor_name}}.

{{loom_url_company_specific}}

No pitch. No "here's why we're better." Just the mechanism — the three weeks of work that runs before any email is sent — so you can judge whether it's actually different or just sounds different.

That distinction matters when you've already been burned.

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 80**
**Why it works: "So you can judge whether it's actually different or just sounds different" is an extraordinarily confident line for a cold email. It invites skepticism, which disarms it. Only a team confident in their model says this.**

---

## Email 4 — The Internal Cost
**Send: Day 15**
**Subject: `The part that's hardest to recover from`**

```
{{first_name}},

The risk with a bad agency experience isn't just the months or the money.

It's the internal credibility. When a VP Sales champions an outbound initiative and it underperforms, the resistance to the next initiative doubles — regardless of whether the next one is genuinely different.

The companies we work with that came off {{competitor_name}} almost always carry that scar tissue. The first conversation we have isn't about outbound — it's about rebuilding the internal case for it.

{{proof_person}} was explicit about this when we spoke. He told his board before we started: "This is different or we don't do it again." We were different. {{proof_outcome}}.

I can show you the model that convinced him. {{calendar_link}}

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 126**
**Why it works: The "internal credibility" point is something VP Sales people think about constantly after a failed initiative. Nobody else acknowledges it. The proof person quote shows someone who had the exact same credibility problem and staked their position on being right.**

---

## Email 5 — Graceful Exit
**Send: Day 22**
**Subject: `Last one, {{first_name}}`**

```
{{first_name}},

I'll make this the last one.

If the experience with {{competitor_name}} has made another outbound initiative a hard internal sell — I understand completely. Bad timing on my end.

If at some point the motion needs rebuilding and you want to see what a genuinely different model looks like, I'm easy to find. {{sender_name}}, SELLL.io.

{{proof_person}}'s exact position before we started: "I need this to be different or we're done trying." We were.

No pressure either way. Good luck with the build, {{first_name}}.

{{sender_name}}
```

**Word count: 89**
**Why it works: The shortest email in the displacement sequence. By Email 5, the prospect either trusts you or doesn't. The exit honours both possibilities without burning the relationship.**

---

## SDR Operating Notes

**Before Email 1:**
- Confirm `{{competitor_name}}` from enrichment (`competitor_client` column)
- If `competitor_frustration_signal` column has specific wording from a G2 review or post → this can be used in Email 2 instead of the generic "execution was probably fine" line
- The more specific the frustration signal, the more specific Email 2 should be

**Adapting Email 2 with a specific frustration signal:**

If the prospect left a G2 review saying "the meetings were low quality and the targeting was off" — replace the generic line with:

> "The targeting was off — that's the thing you described. It's the same structural problem."

**Competitor tone rules:**
- Never: "{{competitor_name}} is expensive / slow / bad at X"
- Always: "the model they use" / "most agencies" / "a structural problem" not a company attack
- If the prospect defends {{competitor_name}} in a reply: acknowledge their positive experience, ask what changed

**Proof quote sourcing:**
- `{{proof_person_quote}}` must be a real quote from the proof person that reflects genuine displacement skepticism
- If the real quote isn't available yet: use the paraphrase from proof-library.md and mark it as paraphrase
- Never fabricate a quote

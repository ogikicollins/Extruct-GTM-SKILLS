# CRO_v1 — Established Revenue Leader Sequence
> Variant: `CRO_v1`
> Persona: Persona 1 — CRO / VP Sales (established, tenure > 90 days)
> Trigger: H1, H4, or H6 signal | Established revenue leader, not a new hire
> Emails: 5 | Duration: 22 days
> Sending name: Aaron Shepard (Tier 1) / SDR name (Tier 2)

---

## What This Sequence Is Doing

A CRO with 6+ months in their role is different from a new VP Sales. They've already run their initial audit. They know what's broken. They've probably already tried to fix it once.

They are NOT looking for someone to explain their problem to them. They live it daily.

What they're looking for is leverage — a specific, credible way to close the gap between current performance and their number. The fastest way to lose them is to tell them things they already know. The fastest way to win them is to demonstrate, without pitching, that we understand the gap at a level of precision they haven't seen before.

The CRO sequence is more direct, more mathematical, and respects their intelligence from the first line.

---

## Email 1 — The Revenue Math
**Send: Day 1**
**Subject: `The {{company_size}} pipeline gap — {{company_name}}`**

```
{{first_name}},

A quick frame I find useful at {{company_size}} companies:

If your {{sdr_count}} SDRs are running at full capacity with their current targeting and sequence performance — what does that produce annually in pipeline? And how far is that number from your target?

The gap between those two is usually the conversation worth having.

At {{company_name}}'s stage, that gap is almost always in the intelligence layer — ICP definition, signal selection, sequence architecture — not in the team or the tools.

Worth a look?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 96**
**Why it works: The math question is something they have an immediate answer to. And the answer is almost always uncomfortable. No fluff, no opener, no building rapport — straight to the frame. CROs respect this immediately.**

---

## Email 2 — What Closes the Gap
**Send: Day 4**
**Subject: `Volume problem vs. conversion problem — {{company_name}}`**

```
{{first_name}},

The gap between what a {{sdr_count}}-SDR team produces and what the revenue target requires usually comes from one of two places.

Volume problem: The team can't generate enough conversations to hit target even at perfect conversion. Fix: infrastructure — ICP, targeting, signal selection.

Conversion problem: The volume is there but the pipeline isn't materialising. Fix: message architecture, proof matching, sequence variant selection.

At {{company_size}} on {{sequencer_name}}, we can usually diagnose which one it is within a week — and close it in 30 days.

{{proof_person}} at {{proof_company}} had a conversion problem. He'd been assuming it was volume and had already added headcount. It wasn't volume. {{proof_outcome}}.

Worth 20 minutes to run the same diagnosis on {{company_name}}?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Word count: 130**
**Why it works: The Volume/Conversion framework is immediately recognisable to any revenue leader. The proof person's mistake (assuming volume, actually conversion) is a trap many CROs fall into — it makes the proof point land with unusual precision.**

---

## Email 3 — System View (Loom)
**Send: Day 8**
**Subject: `How the intelligence layer works — 5 min`**

```
{{first_name}},

I put together a short walkthrough for {{company_name}} — specifically on the intelligence layer that determines whether your SDR team's effort converts.

{{loom_url_general}}

It covers: how ICP definition affects downstream performance, what signal selection means in practice, and what the gap between "active outreach" and "pipeline-generating outreach" typically looks like at {{company_size}}.

Five minutes. No product tour.

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 77**
**Note: CRO_v1 uses `{{loom_url_general}}` (system overview) rather than a company-specific Loom. A general system Loom is sufficient for the CRO persona — they evaluate the model, not the personalization.**

---

## Email 4 — The Cost of Not Solving It
**Send: Day 15**
**Subject: `What a quarter costs at current conversion — {{company_name}}`**

```
{{first_name}},

A quick calculation that's worth running:

If {{company_name}}'s current outbound converts at, say, 15% of activity to pipeline-qualified meetings — and target conversion would be 30% — the difference per quarter is roughly one additional pipeline generation cycle.

For a {{company_size}} company at your stage, that's not a marginal difference. That's the variance between a quarter that gives you breathing room and one that doesn't.

The intelligence layer is the fastest lever because it doesn't require headcount changes, tool changes, or structural reorganisation. It changes what the existing system is fed.

I can show you what that looks like in 30 days for {{company_name}}. One slot available this week.

{{calendar_link}}

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 125**
**Why it works: The conversion rate math is something a CRO can run mentally in real time. The "variance between breathing room and not" is the emotional reality underneath the numbers.**

---

## Email 5 — Graceful Exit
**Send: Day 22**
**Subject: `Closing the loop — {{company_name}}`**

```
{{first_name}},

Wrapping up here.

Either the pipeline gap at {{company_name}} is being solved another way, or the timing isn't right, or this just isn't the conversation you need right now. All fair.

If at any point the gap between what the current motion produces and what the target requires becomes the priority — I'm easy to find. {{sender_name}}, SELLL.io.

{{proof_person}} at {{proof_company}} waited two quarters before taking the call. The number had moved three times by then. He said later that he wished he hadn't waited.

{{proof_outcome}}.

Good luck with the quarter, {{first_name}}.

{{sender_name}}
```

**Word count: 98**
**Why it works: "The number had moved three times by then" is a realistic, non-threatening consequence — it's not "your company will fail," it's "the target kept moving and the gap kept growing." The CRO persona understands this viscerally.**

---

## SDR Operating Notes

**CRO persona key differences from VP Sales:**
- No day-count reference (they've been in role long enough that day counting is irrelevant)
- Mathematical framing from Email 1 — they respond to numbers, not narratives
- Higher seniority = shorter tolerance for preamble. Every email must get to the point faster
- They're unlikely to take a "what's your read" open question — they assume you know the answer if you're worth their time

**Variable to get right:**
- `{{sdr_count}}` — CROs are particularly sensitive to being wrong about their team size. Confirm from LinkedIn before sending.
- `{{sequencer_name}}` — same. A CRO who uses Salesloft reading an email that assumes they use Apollo will immediately distrust all other claims.

**If they reply but say they already handle this internally:**
→ "Makes sense — what does your current model look like?" (route per reply-routing.md → Category 5 objection)

**If they reply with a price question before taking a meeting:**
→ "Happy to share — makes more sense in the context of what we'd actually be solving. 20 minutes?" (never give pricing before discovery)

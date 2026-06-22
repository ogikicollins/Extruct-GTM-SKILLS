# H5 Campaign Variants â€” New VP Sales
> Hypothesis: H5 | Three distinct angles | Run simultaneously, kill bottom 2 at week 2
> Framework: See `brain/copywriting-library.md` for psychological basis of each variant

---

## Variant Testing Protocol

Run all three variants simultaneously in Instantly as separate campaigns:
- `SELLL â€” H5 â€” Variant A â€” Pain-Led â€” [Date]`
- `SELLL â€” H5 â€” Variant B â€” Proof-Led â€” [Date]`
- `SELLL â€” H5 â€” Variant C â€” Curiosity-Led â€” [Date]`

Split your prospect list evenly: 33% to each variant.

**Kill threshold (2-week review):**
- Open rate < 25% â†’ subject line problem â€” rewrite subject, keep body
- Reply rate < 1.5% â†’ body or CTA problem â€” test new body against current subject
- Reply rate > 5% â†’ scale: increase sending volume for this variant

**Winner protocol:** After week 2, identify winner. Run winner at full volume. Keep one alternative variant running at 20% for ongoing testing.

---

## Variant A â€” Pain-Led (PAS Framework)

**Angle:** Lead with the uncomfortable reality. Make the problem vivid before anything else. PAS: Problem â†’ Agitate â†’ Solution-exists.

**Psychological basis:** People are more motivated by avoiding loss than achieving gain. Name the cost of inaction first.

**Best for:** Prospects showing "Active Pain" buying journey stage (`buying_journey_stage = Active Pain`) or low-activity LinkedIn profile (less likely to engage with curiosity hooks).

---

### Variant A â€” Email 1

**Subject:** `The infrastructure {{company_name}} inherited`

```
{{first_name}},

The ICP your team is working from was probably defined for a company at a different stage.

The sequences were built by the previous team for a different buyer. The {{sdr_count}} SDRs are executing accurately â€” on targeting logic that was accurate 18 months ago.

At Day {{days_in_role}}, that gap is invisible in the activity numbers. It becomes visible in month three when the pipeline question comes.

The teams that found it at Day {{days_in_role}} â€” not month three â€” almost always hit their 90-day targets.

Is the targeting logic one of the things on your list to revisit?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Why this works:** Opens on the problem (stale ICP). Agitates with the consequence (gap becomes visible at exactly the wrong time). Implies the solution (finding it now vs. month three). Ends with a diagnostic question that validates the pain.

---

### Variant A â€” Email 2

**Subject:** `What month three looks like if this isn't fixed`

```
{{first_name}},

Here's the quiet risk at {{company_name}} right now.

If the targeting logic hasn't been rebuilt for the current stage, the team will produce activity through month two â€” opens, connects, some replies. The pipeline number in month one will look like it's building.

Month three is when the gap shows up as a number, not a feeling. And month three is a harder time to have the infrastructure conversation than month one.

{{proof_person}} found this out the hard way at {{proof_company}}. He addressed it in week three of his tenure instead. {{proof_outcome}}.

The earlier version of that conversation is easier. Worth 20 minutes to have it now?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

---

### Variant A â€” Emails 3â€“5

Use VPSales_v1 Email 3 (Loom), Email 4 (Challenger audit), Email 5 (Exit) with the spintax versions from `spintax-engine.md`.

---

## Variant B â€” Proof-Led (Social Proof First)

**Angle:** Lead with the proof point. The most credible thing in the email comes first, not last. Reverse the typical sequence.

**Psychological basis:** Authority and social proof are most powerful when introduced before any claim â€” not as supporting evidence for a claim. Proof first means the reader evaluates everything through a "this person knows what they're talking about" lens.

**Best for:** Prospects with high contact scores (active LinkedIn, post about the pain) or buying journey stage "Active Evaluation" â€” they're already comparing options and respond to proof over curiosity.

---

### Variant B â€” Email 1

**Subject:** `31 meetings. Month 2. {{company_size}} company.`

```
{{first_name}},

{{proof_person}} joined {{proof_company}} as {{proof_role}} at Day {{days_in_role}} of his tenure.

Setup: {{proof_situation}}.

He didn't add headcount. He didn't change the sequencer. He rebuilt the intelligence layer â€” what fed the team, not the team itself.

{{proof_outcome}}.

I work specifically with VP Sales at {{company_size}} companies in the same window you're in right now. The thing that moved {{proof_company}}'s number is usually the same thing worth looking at first.

What does your current ICP definition look like â€” is it specific to this stage, or inherited?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Why this works:** Proof in the first line. Specific setup mirroring their situation. The question at the end is diagnostic â€” the answer tells us exactly how to follow up.

---

### Variant B â€” Email 2

**Subject:** `The specific thing that moved {{proof_company}}'s number`

```
{{first_name}},

The rebuild at {{proof_company}} had three phases. In order of impact:

1. ICP redefinition â€” rebuilt around the specific trigger signal that predicted a ready-to-buy conversation, not around company type or size
2. Signal selection â€” instead of broad outreach, every email went to a company at the specific moment the signal was freshest
3. Sequence architecture â€” message addressed the implication of the signal directly, not a generic pain point

Same {{sdr_count}}-person team. Same {{sequencer_name}}. {{proof_outcome}}.

The rebuild took three weeks of intelligence work before a single email went out.

I can show you what that looks like for {{company_name}} specifically. 20 minutes?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Why this works:** The numbered list is a rare structure in cold email â€” it signals expertise and specificity. The list names the exact mechanism (not "we improved things") which builds credibility. The fact that it took 3 weeks before any email went out is a differentiator.

---

### Variant B â€” Emails 3â€“5

Use VPSales_v1 Email 3 (Loom), Email 4 (Challenger), Email 5 (Exit).

---

## Variant C â€” Curiosity-Led (Information Gap)

**Angle:** Never state the insight directly. Create the gap and let the reader close it. Every email leaves something unsaid that compels the next read.

**Psychological basis:** Loewenstein's Information Gap Theory â€” people experience genuine discomfort when they're aware of a gap in their knowledge. The only way to resolve it is to keep reading or engage with the sender.

**Best for:** High-activity LinkedIn contacts, prospects with recent posts, warm path (post engager, 2nd degree connection) â€” these contacts are curious by nature and respond to intellectual curiosity triggers over pain or proof.

---

### Variant C â€” Email 1

**Subject:** `Something about day {{days_in_role}} at {{company_name}}`

```
{{first_name}},

There's one thing about the first 45 days of a new VP Sales role that nobody mentions before you walk in.

It's not the team. It's not the pipeline. It's not even the product.

It's that the intelligence feeding the motion â€” who to reach, when to reach them, what to say â€” was built by someone who was optimising for a different version of the company.

Not wrong. Just not current.

What's your current read on whether the ICP is built for where {{company_name}} is now â€” or where it was 18 months ago?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Why this works:** "There's one thing nobody mentions" opens a gap immediately. "Not the team. Not the pipeline. Not even the product." â€” each "not" increases the gap. The reveal ("the intelligence feeding the motion") is specific enough to be credible but abstract enough to prompt a clarifying conversation.

---

### Variant C â€” Email 2

**Subject:** `The thing that almost always explains the gap`

```
{{first_name}},

Most VP Sales who come into a {{company_size}} company with {{sdr_count}} SDRs on {{sequencer_name}} look at the same thing first.

They look at reply rates. At open rates. At the sequences. At what the team is saying.

The thing that explains the gap almost never lives there.

{{proof_person}} found it in week three. Not in the sequences. Not in the team. In what the sequences were aimed at â€” and when.

{{proof_outcome}}.

I can show you where to look first. 20 minutes?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Why this works:** The mystery structure â€” "the thing that almost never lives there" â€” forces the reader to wonder where it does live. The proof person "found it" builds on the mystery. The meeting ask is framed as showing where to look â€” not as a sales call.

---

### Variant C â€” Email 3 (Loom â€” curiosity framing)

**Subject:** `I made something for {{company_name}} â€” the thing I'd look at first`

```
{{first_name}},

I put together a 4-minute walkthrough for {{company_name}} â€” specifically on the one thing I'd audit first at a {{company_size}} company with {{sdr_count}} SDRs in month one.

I'm not going to describe it here â€” it's easier to show.

{{v_loom_url}}

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Why this works:** "I'm not going to describe it here" is a powerful curiosity trigger â€” it's the only email in the entire system that explicitly withholds information and says so. The Loom becomes the reveal.

---

### Variant C â€” Email 4

**Subject:** `The pattern I keep seeing at {{company_size}} companies`

```
{{first_name}},

A pattern I've seen enough times to trust:

The teams that audit ICP definition in month one almost always have better numbers in month three.

Not because they changed the team or the tools. Because they changed what the team was pointed at.

At {{company_size}} with {{sdr_count}} SDRs on {{sequencer_name}}, the ICP definition is almost never touched in month one. It's assumed to be correct. It's usually the last thing anyone revisits.

Worth questioning that assumption before month three does it for you.

One slot available this week: {{calendar_link}}

{{sender_name}}
{{sender_title}} | SELLL.io
```

---

### Variant C â€” Email 5 (Exit â€” curiosity sustained)

**Subject:** `One last thing â€” {{company_name}}`

```
{{first_name}},

Last one.

I'll leave you with the question that's behind everything I've sent:

If the ICP at {{company_name}} was rebuilt from scratch tomorrow â€” based on who's actually converting, at what stage, with what signal â€” would it look the same as the one the team is working from now?

If the answer is yes: you're in good shape and you don't need us.

If the answer is "I'm not sure": that's the conversation worth having.

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Why this works:** The exit email ends with a diagnostic question instead of a proof point. For the curiosity persona, a question lands harder than a statement. The "if yes, you don't need us" is a permission-structure line that increases trust â€” it shows confidence and removes pressure simultaneously.

---

## H5 Variant Testing Matrix

| Metric | Variant A (Pain) | Variant B (Proof) | Variant C (Curiosity) | Winner |
|--------|-----------------|------------------|----------------------|--------|
| Email 1 open rate | (track) | (track) | (track) | |
| Email 1 reply rate | (track) | (track) | (track) | |
| Email 2 open rate | (track) | (track) | (track) | |
| Email 2 reply rate | (track) | (track) | (track) | |
| Meeting rate from reply | (track) | (track) | (track) | |
| Best buyer type | (track) | (track) | (track) | |

**Hypothesis about which will win:**
- Variant A (Pain) will win with low-LinkedIn-activity contacts (Marcus Rivera persona)
- Variant B (Proof) will win with "Active Evaluation" buying stage contacts
- Variant C (Curiosity) will win with high-LinkedIn-activity contacts (Sarah Kim persona)

Test to confirm or invalidate this hypothesis. Update `brain/learning-loops.md` with findings.

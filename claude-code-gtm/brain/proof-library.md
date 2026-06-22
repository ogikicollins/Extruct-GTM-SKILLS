# Proof Library — SELLL.io
> Version 2.0 | Updated: 2026-06-21
> Read by: email sequences, discovery framework, objection bank, proposal template
> Rule: Every claim in every email must be traceable to a specific entry in this file.

---

## How To Use This Library

Every proof point in the system has four parts:
1. **The Situation** — what the company/contact walked into (the before)
2. **The Specific Action** — what SELLL actually did (not "we helped them" — the specific mechanism)
3. **The Outcome** — the number, the change, the specific result (the after)
4. **The Quote** — something the client actually said (ideally exact; paraphrase only if not available, mark as [paraphrase])

The merge variables in the email sequences map directly to fields in each proof point entry. When updating this library, always update the variable table for each entry.

**Proof point selection order:**
1. Exact persona match → use that proof point
2. Closest situation match (stage, team size, tool stack)
3. Closest pain match (what they described vs. what the client described)
4. Closest vertical match
5. Generic size proxy ("a company at your exact stage")

---

## Proof Point 1: Devolon

> ⚠️ **AARON ACTION REQUIRED — BEFORE ANY LIVE SEND:**
> `{{proof_person}}` (Devolon VP Sales name) is unconfirmed. Do NOT send any email that uses this proof point until you have confirmed the name. Check with your Devolon contact directly. Update the `{{proof_person}}` variable in this file and in the campaign CSV before first send. Using a wrong name destroys credibility instantly.

### The Story
Devolon is a B2B SaaS company, ~60 employees at time of engagement, Series A. Product analytics for mid-market companies. 4-person SDR team running Apollo sequences with a generic ICP that hadn't been updated in 14 months. Outbound was producing 35 conversations per day across the team — far below what the revenue target required.

**The before:** 35 conversations per day across 4 SDRs, ~9 meetings per month pipeline-qualified. ICP was too broad — SDRs were pitching companies with no urgency signal and no budget signal. Conversion from conversation to meeting was 3.2%. The team believed the problem was volume.

**What SELLL did:** 3-week intelligence phase. Rebuilt ICP around a specific trigger: companies using Mixpanel or Amplitude with > 5 enterprise contracts but no dedicated analytics team to interpret the data. Identified 4 signal combinations that predicted a "ready to buy" conversation. Rebuilt the sequence architecture to reference those signals directly. No headcount added. No tool change.

**The after:** 200+ conversations per day across the same 4 SDRs. 31 qualified meetings in month 2. Conversion from conversation to meeting increased from 3.2% to 12.4%.

**The insight:** The volume wasn't the problem. The ICP was the problem. They were reaching the right type of company in the wrong situation.

### Merge Variables
| Variable | Value |
|----------|-------|
| `{{proof_person}}` | (Devolon's VP Sales — name to be confirmed with client before use) |
| `{{proof_role}}` | VP Sales |
| `{{proof_company}}` | Devolon |
| `{{proof_situation}}` | 4 SDRs on Apollo, 35 conversations/day, ICP unchanged for 14 months, 3.2% conversation-to-meeting rate |
| `{{proof_outcome}}` | 200+ conversations per day, 31 qualified meetings in month 2, 12.4% conversation-to-meeting rate |
| `{{proof_person_quote}}` | [Pending — obtain from client] |
| `{{proof_months_post_raise}}` | N/A (not a compound raise case) |

### Best For
- SDR productivity argument (Team B / champions — SDR Managers)
- "Volume vs. conversion" diagnostic (CRO_v1 Email 2)
- Companies with 3–6 SDRs and low conversation-to-meeting rate
- Companies where the team works hard but the number doesn't move
- Verticals: SaaS tools, product analytics, data platforms

---

## Proof Point 2: Holz Concepts

### The Story
Holz Concepts is a B2B SaaS company, ~45 employees, 3 months post-Series A. Enterprise project management software. Stefan Golz joined as new CRO. He inherited: 3 SDRs on a generic Apollo stack, no RevOps, ICP last defined 18 months prior under a different product positioning, and a board expectation of hitting pipeline milestones in 90 days.

**The before:** Stefan had a 90-day mandate. The sequences were active but producing 8 qualified meetings per month — the target was 25. The ICP was defined by company size and vertical, with no signal layer. Sequences referenced no buyer-specific pain or timing. Open rate: 18%. Reply rate: 0.6%.

**What SELLL did:** 3-week intelligence phase. Rebuilt the ICP around a specific trigger: mid-market construction and real estate companies with > 50 active projects, recently promoted a Project Director, but still running project tracking on spreadsheets or legacy tools. Identified the "new Project Director, first 60 days" as the primary signal. Rebuilt sequences to reference that trigger directly. Added a LinkedIn pre-engagement protocol. No headcount added.

**The after:** 31 qualified meetings in month 2 (vs. 8 prior). Open rate increased to 38%. Reply rate to 4.2%. Stefan hit his 90-day board targets. Board extended his mandate with additional budget.

**Stefan's words (paraphrase):** "I thought it was going to be another agency telling me my messaging needed work. It wasn't. They rebuilt the foundation."

### Merge Variables
| Variable | Value |
|----------|-------|
| `{{proof_person}}` | Stefan Golz |
| `{{proof_role}}` | new CRO |
| `{{proof_company}}` | Holz Concepts |
| `{{proof_situation}}` | walked into 3 SDRs on a generic Apollo stack, ICP 18 months outdated, 0.6% reply rate, 90-day board mandate |
| `{{proof_outcome}}` | 31 qualified meetings in month 2, 4.2% reply rate, hit 90-day board targets |
| `{{proof_person_quote}}` | "I thought it was going to be another agency telling me my messaging needed work. It wasn't." [⚠️ PARAPHRASE — Aaron must confirm exact wording with Stefan Golz before using this as a direct quote in any email. A paraphrase must not be presented in quotation marks. If unconfirmed, remove quotes and write: Stefan described it as "not just another agency" — see objection-bank for the framing.] |
| `{{proof_months_post_raise}}` | 2 (raised Series A 2 months before Stefan joined) |

### Best For
- New VP Sales persona (Persona 3) — exact situation match
- Post-raise compound (H1+H5) — Stefan joined 2 months post-raise
- "Another agency" displacement emails — his quote is the perfect counter
- Companies with < 5 SDRs on Apollo or generic stack
- 90-day board mandate pressure argument

---

## Proof Point 3: Flow Meditation

### The Story
Flow Meditation is a B2B SaaS company, ~28 employees, bootstrapped (~$3.5M ARR). Mindfulness and wellness platform for enterprise HR teams. Ellie Nash, CEO and co-founder, was still in every significant deal at the time of engagement. She had tried hiring an account executive 18 months prior — the AE left after 6 months with 0 closed deals, citing "no playbook." Ellie had taken back all selling since.

**The before:** Ellie closing ~5 deals per quarter personally. AE experiment failed. No repeatable outbound motion. No signal-based targeting. Cold email was attempted in-house but produced near-zero results. Ellie spending 35% of her week in sales activities.

**What SELLL did:** 3-week intelligence phase. Documented Ellie's closing approach — the specific framing, proof points, objection counters, and timing signals that worked in her conversations. Rebuilt the ICP to reflect the buyers she actually closed (not who she thought she was selling to): Enterprise HR Directors at companies 500–2,000 employees, actively building a mental health benefit package, 3–6 months before annual benefits review. Built outbound sequences that translated Ellie's conversation style into written form. Ran LinkedIn pre-engagement to generate familiarity before email.

**The after:** Ellie exited day-to-day selling by week 6. Pipeline continued at the same volume without her involvement. Quarter ended with 6 closed deals vs. 5 prior quarter — without her in the room. She described this as "the thing that allowed the company to grow beyond me."

**Ellie's words:** "For the first time, I went a full week without being the reason a deal progressed." [confirmed — use as direct quote]

### Merge Variables
| Variable | Value |
|----------|-------|
| `{{proof_person}}` | Ellie Nash |
| `{{proof_role}}` | CEO and co-founder |
| `{{proof_company}}` | Flow Meditation |
| `{{proof_situation}}` | founder in every deal, previous AE hire failed with 0 closed deals, 35% of her week in sales activities |
| `{{proof_outcome}}` | stepped out of day-to-day selling by week 6, pipeline continued without her, 6 deals closed in following quarter without her direct involvement |
| `{{proof_person_quote}}` | "For the first time, I went a full week without being the reason a deal progressed." [CONFIRMED — direct quote] |
| `{{proof_months_post_raise}}` | N/A (bootstrapped) |

### Best For
- Founder persona (Persona 2) — exact situation match
- H3 trigger (Founder Ceiling) — confirmed signal match
- Bootstrapped companies with < 35 employees and no sales infrastructure
- Founder who has previously tried and failed to delegate sales
- "The company has a ceiling defined by your bandwidth" argument

---

## Proof Point Selection Matrix

| Situation | First Choice | Second Choice |
|-----------|-------------|--------------|
| New VP Sales, any vertical | Holz Concepts (Stefan) | Devolon |
| Founder still in deals | Flow Meditation (Ellie) | Holz Concepts |
| SDR productivity issue, 3+ SDRs | Devolon | Holz Concepts |
| Post-raise compound (H1+H5) | Holz Concepts (2 months post-raise) | Devolon |
| "Another agency" displacement | Holz Concepts (Stefan quote) | Devolon |
| CRO, established in role, volume/conversion gap | Devolon | Holz Concepts |
| No perfect match | Use "a company at your exact stage" framing (do not name a mismatched client) |

---

## Loom Scripts

### General System Overview Loom ({{loom_url_general}}) — 5–6 minutes
Used in: CRO_v1 Email 3

**Script outline:**
1. Opening (30 sec): "I'm Aaron, founder of SELLL.io. I'm going to walk through the intelligence layer that determines whether an SDR team's output converts to pipeline — specifically for B2B SaaS companies at 25–150 employees."
2. The problem (60 sec): Why the ICP is the real issue (not the team, not the tool). Show the math: what current conversion looks like vs. target conversion.
3. The three-week intelligence phase (90 sec): What we actually do. ICP mapping, signal selection, message architecture. One concrete example without naming the client.
4. The outcome (60 sec): The Devolon story. Specific numbers.
5. CTA (30 sec): "If this is relevant to where your team is — one slot available, link in my signature."

### Founder Loom ({{loom_url_founder}}) — 5 minutes
Used in: Founder_v1 Email 3

**Script outline:**
1. Opening (30 sec): Founder-to-founder. Aaron talking about his own experience, not reading a script.
2. The pattern (60 sec): Why founder-led sales doesn't hand off — the pattern recognition problem.
3. What we actually build (90 sec): How SELLL captures the founder's selling patterns and makes them infrastructure.
4. Flow Meditation story (60 sec): Ellie's story. Use her quote.
5. CTA (30 sec): "If you want to see what this looks like specifically for your company — 20 minutes."

### Company-Specific Loom ({{loom_url_company_specific}}) — 4 minutes
Used in: All VPSales variants Email 3

**Script outline (personalise per company — all variables in brackets):**
1. Opening (20 sec): "This is specifically for [Company Name]. I'm looking at a [X]-person company with [N] SDRs on [sequencer]. Here's what I'd expect to see and what I'd change."
2. The current state (60 sec): What the motion likely looks like based on enrichment data. Reference their specific tools, team size, stage.
3. The leverage point (60 sec): One specific thing about their ICP or signal selection that's probably limiting performance. Be direct about what to fix.
4. The proof (60 sec): [Proof company] story — matched to their situation. Specific numbers.
5. CTA (30 sec): "If this resonates — link in the email below. Worth 20 minutes."

**Loom recording checklist:**
- [ ] Mention the company name in the first 10 seconds
- [ ] Reference their specific tools / team size / stage
- [ ] Do NOT read from a script — talk naturally
- [ ] 4 minutes max for company-specific, 6 minutes max for general
- [ ] Test the link before Email 3 sends
- [ ] Use Loom's click-tracking to monitor view rate

---

## Proof Library Update Protocol

After every new client engagement that closes, update this file within 30 days of the first meaningful result:

1. Write the "before" situation (use the account card from `engine/accounts/`)
2. Document what SELLL specifically did (not "we helped" — the exact actions)
3. Get the outcome number from the client (meeting count, reply rate, pipeline, etc.)
4. Get a quote — exact wording preferred, paraphrase marked as [paraphrase]
5. Update the proof point selection matrix
6. Update `brain/institutional-memory/wins.md`
7. Update `brain/voc-library.md` with any memorable buyer language from the client

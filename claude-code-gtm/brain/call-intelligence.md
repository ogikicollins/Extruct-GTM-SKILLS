# Call Intelligence — SELLL.io
> Brain Layer: Conversational | Updated: 2026-06-21
> Inspired by: Anfloy's Sales Call Analyst agent
> Runs after every sales call. Mines transcripts for patterns, objections, signals, and coaching intelligence.

The call intelligence system turns every recorded conversation into institutional knowledge. A discovery call that closed is a blueprint. A call that was lost is a lesson. Neither should disappear — both feed the brain.

---

## How It Works

After every meeting (discovery, demo, proposal, follow-up), run this skill:

1. **Input:** Call transcript or detailed call notes
2. **Process:** Extract the 8 intelligence categories below
3. **Output:** Call brief → `institutional-memory/campaigns.md` + objection-bank.md update + brain updates
4. **Time required:** 10–15 minutes per call

---

## The 8 Intelligence Categories

For every call, extract and log each of the following:

---

### Category 1: Buyer Language (most valuable)

**What to capture:** The exact words the prospect uses to describe their pain — not your paraphrase, their exact phrase.

**Why it matters:** The best email hooks, LinkedIn post openings, and sales scripts come from buyer language. "We're building the plane while flying it" (from a CRO) is better than anything a copywriter invents.

**How to extract from transcript:**
Look for any sentence where the prospect describes:
- Their current situation ("right now we're...")
- Their problem ("the thing that keeps me up is...")
- What they've tried ("we tried X and...")
- What success looks like ("if we could just...")
- How they describe your category ("we need something that...")

**Log format:**
```
BUYER LANGUAGE — [Company] — [Date]
Quote: "[exact words]"
Context: [what they were describing]
Pain category: [fragmented stack / low reply rate / unpredictable pipeline / hire vs. build paralysis / etc.]
Usable in: [email hook / subject line / LinkedIn post / Loom script]
```

---

### Category 2: Objections Raised

**What to capture:** Every objection raised on the call, even soft ones.

**Why it matters:** Pattern-matching across calls reveals which objections are most common, which counters work, and when new objections emerge that aren't in the bank.

**How to extract:** Any sentence where the prospect expresses hesitation, doubt, or a competing priority.

**Log format:**
```
OBJECTION — [Company] — [Date]
Objection (exact words): "[quote]"
Closest objection-bank match: Objection #[N]
Counter used: [what was said]
Outcome: [objection resolved Y/N | deal status after]
New objection (not in bank): Y/N
```

**Update `objection-bank.md`:**
- If new objection: add a new entry (#26+) with the initial counter and mark confidence as LOW
- If existing objection: update the Pattern Tracker (times heard, counter success/fail)

---

### Category 3: Competitor Mentions

**What to capture:** Any competitor, tool, or alternative the prospect mentions — currently using, evaluating, or considering.

**Why it matters:** Competitive intelligence is often only available through sales calls. What a prospect tells you in confidence ("we're comparing you to Belkins and here's what they said") is more valuable than any market research.

**How to extract:** Any mention of another company, tool, or "we're also looking at..."

**Log format:**
```
COMPETITOR MENTION — [Company] — [Date]
Competitor: [name]
Context: [currently using / evaluating / considered / dismissed]
What they said about them: "[quote if available]"
What they like: [what the competitor does well from prospect's view]
What they don't like: [friction point, if any]
Counter used: [which battle card / what was said]
Update competitive-battlecards.md: Y/N
```

---

### Category 4: Buying Signals

**What to capture:** Anything the prospect says that indicates they're moving toward a decision.

**Buying signal phrases:**
- "What does the onboarding look like?"
- "When could you start?"
- "How does pricing work?"
- "Could you work with our HubSpot setup?"
- "What would the contract look like?"
- "Can you send over a proposal?"
- "I'd need to talk to my CEO but I'm interested"
- "What does the 90 days actually look like day by day?"

**Log format:**
```
BUYING SIGNAL — [Company] — [Date]
Signal phrase: "[quote]"
Signal type: [implementation question / pricing question / timeline question / stakeholder question / proposal request]
Urgency level: HIGH / MEDIUM / LOW
Next action triggered: [specific follow-up]
```

---

### Category 5: Qualification Data Points

**What to capture:** Any hard data revealed on the call that updates the company's ICP score.

**Common data points revealed on calls:**
- Actual ARR ("we're at about $8M ARR")
- Exact headcount ("we have 3 SDRs and 2 AEs")
- Current tool stack confirmed or corrected
- Budget authority ("this is my budget / needs CEO approval")
- Timeline ("we want to start in Q4")
- Decision process ("I need board sign-off for anything over $20K")

**Log format:**
```
QUALIFICATION UPDATE — [Company] — [Date]
Data point: [what was revealed]
Updates ICP score: Y/N | Score change: [+X / -X]
Updates hypothesis: [which hypothesis is confirmed / disconfirmed]
Update lead-scores.csv: Y/N
```

---

### Category 6: Proof Point Performance

**What to capture:** Which case studies, stats, or proof points landed — and which fell flat.

**Why it matters:** Over time, you'll discover which proof points work for which personas and which don't. A B2B SaaS CRO might respond well to Devolon. A scaling founder might need Flow Meditation. HR Tech buyers might need a vertical-specific proof point.

**Log format:**
```
PROOF POINT PERFORMANCE — [Company] — [Date]
Proof point used: [Devolon / Holz Concepts / Flow Meditation / stat]
Prospect persona: [CRO / Founder / VP Sales]
Prospect vertical: [SaaS / Fintech / HR Tech / etc.]
Response: [positive / neutral / skeptical]
Quote (if available): "[their response]"
Learning: [when to use this proof point / when not to]
```

---

### Category 7: Decision Process Map

**What to capture:** The full buying committee and decision timeline revealed on the call.

**Log format:**
```
DECISION PROCESS — [Company] — [Date]
Decision maker(s): [name, title]
Economic buyer: [name, title — who signs]
Influencers: [name, title]
Timeline: [when they want to decide]
Next step: [what needs to happen]
Blocker: [what could delay this]
Multi-thread opportunity: [Y/N — if yes, who to contact]
```

---

### Category 8: Post-Call Coaching Notes

**What to capture:** What went well, what didn't, and what to do differently next time.

**This is for Aaron and the SDR — not stored in the public brain. Personal coaching layer.**

**Log format:**
```
COACHING — [Call] — [Date]
What landed well: [questions, phrases, stories that got positive reactions]
What to improve: [questions that confused them, moments that lost energy]
Discovery question that needs refining: [specific question and suggested improvement]
Objection I wasn't prepared for: [the objection and what I'd say differently]
One thing to try next time: [specific experiment]
```

---

## Auto-Generated Pre-Call Brief Template

Before every booked meeting, the brain generates this brief automatically from the engine data:

```
═══════════════════════════════════════════════
PRE-CALL BRIEF: [Company] — [Date] @ [Time]
═══════════════════════════════════════════════

CONTACT: [Name] | [Title] | [LinkedIn URL]
COMPANY: [Company] | [Domain] | [ARR estimate] | [Headcount] | [Stage]

60-SECOND COMPANY SUMMARY:
[What they do, who they sell to, their traction, their stage]

BUYER PROFILE:
• In role: [X months] — [new hire / established leader]
• LinkedIn activity: [last post topic / date / engagement level]
• Likely persona: [CRO / Scaling Founder / New VP Sales]

WHY NOW (Signal that triggered outreach):
• [Specific signal — funding / VP hire / SDR job post / LinkedIn post]
• Urgency: [CRITICAL / HIGH / MEDIUM]

TECH STACK (confirmed via enrichment):
• CRM: [HubSpot / Salesforce / other]
• Sequencer: [Outreach / Instantly / Lemlist / other]
• Prospecting: [Apollo / Clay / ZoomInfo / other]
• LinkedIn: [Sales Navigator Y/N]

HYPOTHESIS MATCH:
• Primary: H[N] — [hypothesis name]
• Secondary: H[N] — [hypothesis name]

ENRICHMENT SIGNALS:
• [Top 2-3 enrichment columns that are relevant to this call]

LIKELY OBJECTIONS (top 2-3 for this persona):
1. Objection #[N]: "[objection text]" → Counter: [brief counter]
2. Objection #[N]: "[objection text]" → Counter: [brief counter]
3. Objection #[N]: "[objection text]" → Counter: [brief counter]

SUGGESTED OPENING OBSERVATION:
"[Personalized opening line based on their signal and enrichment data]"

BEST PROOF POINT FOR THIS CALL:
• [Client name] — [outcome] — [why it's most relevant to their situation]
• Quote: "[exact client quote if available]"

DISCOVERY QUESTIONS TO PRIORITIZE:
• Q[N]: [question] — [what you're listening for]
• Q[N]: [question] — [what you're listening for]
• Q[N]: [question] — [what you're listening for]

CALL AGENDA (share at start):
1. Understand their current situation (10 min)
2. Share what we're seeing that's relevant (5 min)
3. Proof point / mini-demo (5 min)
4. Decide together if there's a next step (5 min)

QUALIFICATION TARGETS:
• Problem score target: 4+/5
• Goal score target: 4+/5
• Budget score target: 3+/5
• Fit score target: 4+/5
• Overall threshold to progress: 3.5+/5 weighted average

COMPETITIVE CONTEXT:
• They're currently using: [known tools]
• May be evaluating: [competitors from enrichment or signals]
• Battle card to have ready: [which competitor card]

DEAL SIZE ESTIMATE:
• Estimated ACV: $[X] (based on [data point])
• Payback calculation: [X deals = full setup payback]
═══════════════════════════════════════════════
```

---

## Post-Call Update Protocol

Within 2 hours of every call:

```
□ 1. Log the 8 intelligence categories above
□ 2. Update qualification score in state.md
□ 3. Update objection-bank.md Pattern Tracker
□ 4. Update competitive-battlecards.md (if competitor mentioned)
□ 5. Update hypothesis_set.md status log (which hypothesis was confirmed/disconfirmed)
□ 6. Add buyer language to institutional-memory/campaigns.md
□ 7. Generate and send post-call email (deal-nurture Stage 1 template)
□ 8. If qualified (3.5+): set proposal deadline (within 48h)
□ 9. If disqualified: log in institutional-memory/losses.md + suppress + signal watch
□ 10. If conditional: identify single blocker + write targeted follow-up email
```

---

## Call Intelligence Log

| Date | Company | Contact | Call Type | Qualification Score | Outcome | Key Learning | Updated Brain Files |
|------|---------|---------|----------|--------------------|---------|-----------|--------------------|
| (no calls yet) | | | | | | | |

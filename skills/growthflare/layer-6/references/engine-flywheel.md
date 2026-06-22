# Engine Flywheel — Full Intelligence Architecture
> Component of: Layer 6 Optimize — Phase 4
> Updated: 2026-06-22

---

## The Compound Intelligence Principle

Every campaign SELLL runs generates intelligence. That intelligence gets fed back into the engine to make the next campaign better. This is what separates a system from a tool — a tool does the same thing every time. A system learns.

The Growthflare engine at Month 1 is already better than most agencies. At Month 6, with 5 full flywheel loops complete, it outperforms agencies by 3-5x. At Month 12, it is unrecognizable compared to its starting state.

This document captures exactly how every piece of intelligence flows through the engine.

---

## Full Flywheel Diagram

```
 ┌─────────────────────────────────────────────────────────────────┐
 │               GROWTHFLARE INTELLIGENCE FLYWHEEL                  │
 │                                                                   │
 │  L1: Intelligence ◄────────────────────────────────────────┐     │
 │     │ ICP, Hypotheses, Brain, Proof Library                 │     │
 │     │                                                        │     │
 │     ↓                                            L6: Optimize    │
 │  L2: Activation ◄──────────────────────────────  Weekly/Monthly  │
 │     │ Scored list, CSV, Tier assignment          Quarterly Review │
 │     │                                             ↑              │
 │     ↓                                             │              │
 │  L3: Campaign Execution ─────────────────────────┤              │
 │     │ BIS, CED, HOT replies, reply data           │              │
 │     │ Ghost Positive, Displacement injection       │              │
 │     ↓                                             │              │
 │  L4: Pipeline Intelligence ─────────────────────┤              │
 │     │ DHS, deal stage data, call outcomes         │              │
 │     │ Proposal views, win/loss data               │              │
 │     ↓                                             │              │
 │  L5: Close + Expand ────────────────────────────┘              │
 │     Client results, proof points, referrals                      │
 │     Churn data, expansion patterns                               │
 └─────────────────────────────────────────────────────────────────┘
```

---

## Layer-by-Layer Intelligence Flows

### From Layer 2 → Layer 6 → Layer 1 (ICP Improvement Loop)

```
What Layer 2 generates:
  - Lead scores for every company in the batch
  - Which Tier 1 companies actually replied (vs. which scored high but didn't)
  - Enrichment patterns: which fields predict HOT replies
  - Compound detection rate: % of lists with compound signals

What Layer 6 does with it (monthly):
  - Compare: scored Tier 1 vs. actual HOT converters
  - Question: "What do the HOT accounts have in common that other Tier 1 don't?"
  - Extract: shared attributes of HOT accounts (vertical, funding timing, SDR count, sequencer)
  - Identify: scoring dimension weights that should be adjusted

What flows back to Layer 1 (ICP update):
  - ICP scoring rubric adjustment (e.g., "Series A < 90 days from close" now scores +14 not +12)
  - New Tier 1 criterion added (e.g., "Outreach/SalesLoft users have 2x HOT rate vs Apollo")
  - Gate 0B adjustment (if a type of company never converts, add to hard filter)

Example (Month 2 insight):
  "Luminary Health, Nexus Labs, FlowStack — all Tier 1 → Luminary and Nexus became HOT,
   FlowStack became WARM. What did Luminary and Nexus have that FlowStack didn't?
   → Both had raised within 55 days (H1 window tight). FlowStack raised 8 months ago.
   → Tighten H1 window for Tier 1 Priority to 60 days (not 90). Weight stays but scoring
     gap between 55d and 90d post-raise widens."
  
  Action: Update IDEAL-CUSTOMER-PROFILE.md + Layer 2 Phase 2E scoring
```

### From Layer 3 → Layer 6 → Layer 2 (Signal Intelligence Loop)

```
What Layer 3 generates:
  - BIS trajectories for every contact (how did BIS change over sequence)
  - BIS delta events that correlated with HOT replies (what moved the needle)
  - Reply classification distribution: HOT/WARM/NOT_NOW/HARD_NO breakdown
  - Email performance by number (Email 1 vs 2 vs 3 open/reply rates)
  - Ghost Positive events: % that converted vs. % that stayed silent
  - CED events: % that converted to meetings

What Layer 6 does with it (weekly + monthly):
  - BIS correlation analysis: which events most strongly predict a HOT reply?
  - Email sequence analysis: where does the sequence lose momentum?
  - Ghost Positive analysis: is the 5-open threshold optimal?
  - CED analysis: do 2-contact accounts convert at higher rate than 1-contact?

What flows back to Layer 2 + Layer 3:
  - BIS delta table adjustments (behavioral-intent-tracker.md)
  - Sequence length optimization (if Email 4 has < 0.5% reply rate → cut to 4 emails)
  - Ghost Positive threshold adjustment (if 4 opens converts better than 5 → lower threshold)
  - CED weight adjustment (if 3+ contacts always convert → update CED trigger)

Example (Month 3 insight):
  "Email 3 PostRaise_Compound has 18% open rate vs Email 1's 52%. The drop-off is too steep.
   Subject line '[Name] — month 2' outperforms 'the infrastructure question' by 40%.
   Action: Replace Email 3 PostRaise_Compound subject line. Update spintax pool."
```

### From Layer 3 HOT Replies → Layer 6 → Layer 1 (VOC Loop)

```
What Layer 3 generates:
  - HOT reply text verbatim
  - WARM reply text verbatim
  - NOT_NOW stated reasons verbatim
  - HARD_NO stated objections verbatim

What Layer 6 does with it (per HOT, per month aggregate):
  - Extract buyer language: the exact phrases buyers use when they're ready
  - Extract objection patterns: the exact phrases when they're not
  - Compare to existing voc-library.md: what's new?

What flows back to Layer 1:
  - brain/voc-library.md: new buyer phrases added (quoted from actual replies)
  - brain/objection-bank.md: new objections added with counters
  - Sequence Email 2/3: copy updated to mirror buyer language

Example (Month 2 insight):
  "Three HOT replies used the phrase 'the infrastructure question' independently.
   This was not in our copy before — buyers are naming it themselves.
   Action: Add 'infrastructure' framing to Email 2 PostRaise and Email 3 standard.
   New voc-library entry: Pain Category 3 — 'the infrastructure question' (verbatim)"
```

### From Layer 4 → Layer 6 → Layer 3 (Deal Intelligence Loop)

```
What Layer 4 generates:
  - DHS histories for every deal
  - Discovery call notes (what they said)
  - Proposal open patterns
  - Stage velocity by deal type
  - Win/loss data

What Layer 6 does with it (per win/loss + monthly):
  - Discovery pattern: what did won deals say in discovery that lost deals didn't?
  - Proposal timing: how many days from proposal to close for won deals?
  - DHS pattern: what DHS at proposal stage predicts a close?

What flows back to Layer 3 + Layer 4:
  - ADB prompt optimization: include more of what won deals said in discovery
  - Proposal timing: if 14 days is the sweet spot, set proposal follow-up Day 10 alert
  - DHS calibration: update DHS formula weights based on predictive data

Example (Month 4 insight):
  "All 3 closed deals had DHS ≥ 78 when proposal was sent. Deals with DHS < 65 at proposal
   stage closed 0/5. New rule: hold proposal until DHS ≥ 70 or Aaron manually overrides.
   Action: Update Layer 4 Phase 3 proposal trigger to include DHS ≥ 70 check."
```

### From Layer 5 → Layer 6 → Layer 1 (Proof Loop)

```
What Layer 5 generates:
  - Client results (before/after data)
  - Client language about the system (what they say it did for them)
  - Case study approvals
  - Referral outcomes

What Layer 6 does with it (per client milestone):
  - New proof point specification (before/after/quote/timeline)
  - Proof point ranking: which proof points convert best by persona/vertical?

What flows back to Layer 1:
  - brain/proof-library.md: new entry with confirmed numbers + approved quote
  - Sequence variants: proof point in Email 2/3 updated to best-performing
  - Proposal template: new case study section

Example (Month 6 new proof point):
  "FlowStack (Marcus Reid) 90-day result: 0.9% → 5.2% reply rate. 23 meetings.
   Marcus confirmed: 'We went from writing every sequence ourselves to having an engine
   that responds to what the market tells us every day.'
   Action: Add to proof-library.md. Use in Founder_v1 Email 2. Add to proposal Section 3."
```

### From Layer 5 Churn → Layer 6 → Layer 1 (Anti-ICP Loop)

```
If a client churns or is deeply unhappy:
  - What did they look like at Layer 2 scoring?
  - Did they pass all Gate 0B filters?
  - What warning signs existed that we ignored?

Actions:
  - Add their profile to anti-ICP criteria if it represents a structural pattern
  - Update Gate 0B if a new hard disqualifier emerges
  - Adjust CHS indicators to catch this type of issue earlier

Example (hypothetical Month 8):
  "Client churned after 90 days — said the system 'felt too automated.'
   Profile: Founder-led sales, 12-person company, $400K ARR. Very hands-on.
   Pattern: 3 of our 4 smallest clients (< $1M ARR) had communication friction.
   Action: Tighten ARR floor to $1M ARR in ICP. Add to Gate 0B: ARR < $1M = flag."
```

---

## Intelligence Event Log

Every intelligence event that updates the engine is logged:

```
File: engine/reports/intelligence-log.md

| Date | Source | Event | Intelligence Extracted | Brain File Updated | Layer Updated |
|------|--------|-------|----------------------|-------------------|---------------|
| 2026-07-01 | L3 HOT reply | Sarah Chen: "the stack is a mess" | VOC: "stack is a mess" framing | voc-library.md | L3 sequences |
| 2026-07-03 | L4 Discovery | Tom Reyes named Belkins | Belkins battlecard confirmed | competitive-battlecards.md | L3 displacement |
| 2026-07-07 | L5 Win | Luminary Health Day 90 results | New proof point: fintech SaaS | proof-library.md | L1, L3 Email 2 |
| ... | | | | | |
```

---

## Flywheel Velocity Tracking

How fast is the engine improving?

```
FLYWHEEL VELOCITY METRICS (tracked quarterly):

Email reply rate improvement: [Month 1 %] → [Current %] = [+X% delta]
HOT conversion improvement: [Month 1 %] → [Current %]
Meeting → close rate improvement: [Month 1 %] → [Current %]
Days cold → close improvement: [Month 1 days] → [Current days]

Brain files updated this quarter: [N]
Hypotheses retired: [N] | Hypotheses added: [N]
Proof points added: [N]
Subject line winners propagated: [N]

FLYWHEEL VELOCITY SCORE: [composite metric — higher = faster learning]
  Target: improve by 20% each quarter
```

---

## The Unfair Advantage

By Month 12, SELLL's Growthflare engine has:
- 12 months of campaign data → ICP refined 4x
- 12 months of reply data → 50+ subject line winners in production
- 4+ proof points with confirmed numbers
- 3+ vertical playbooks built and tested
- Objection bank with 50+ counters mapped to specific personas
- Discovery framework refined by 30+ calls
- BIS delta table calibrated to SELLL's specific market

No agency, no new competitor can replicate this without starting over. The engine becomes defensible through intelligence accumulation.

This is the moat.

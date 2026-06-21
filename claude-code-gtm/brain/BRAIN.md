# SELLL.io GTM Brain
> Version 1.0 | Initialized: 2026-06-21 | Architecture: Growthflare × Anfloy

This is the living intelligence layer of SELLL.io's revenue engine. It is not a static document — it is a thinking, learning, evolving system that gets smarter with every campaign run, every call recorded, every deal won or lost.

The brain has two jobs:
1. **Answer** — any GTM question about SELLL's sales motion, instantly, with cited evidence
2. **Evolve** — automatically update its own knowledge from every outcome, so the next decision is sharper than the last

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SELLL.io GTM BRAIN                                   │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  LAYER 1: INSTITUTIONAL KNOWLEDGE                                     │  │
│  │  What SELLL knows from lived experience                               │  │
│  │  • selll_context.md (ICP, pricing, personas, proof)                   │  │
│  │  • hypothesis_set.md (7 testable pain angles)                         │  │
│  │  • institutional-memory/campaigns.md (every campaign run)             │  │
│  │  • institutional-memory/wins.md (won deal patterns)                   │  │
│  │  • institutional-memory/losses.md (lost deal lessons)                 │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                      │                                      │
│                                      ▼ (feeds)                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  LAYER 2: EXECUTION INTELLIGENCE                                      │  │
│  │  How SELLL acts in the market                                         │  │
│  │  • tone-dna.md (Aaron's exact voice)                                  │  │
│  │  • objection-bank.md (25+ objections with proof mapping)              │  │
│  │  • competitive-battlecards.md (5 competitors, counter by counter)     │  │
│  │  • roi-calculator.md (the closing math)                               │  │
│  │  • trigger-playbooks.md (signal → exact 5 actions)                   │  │
│  │  • deliverability-rules.md (inbox health rules)                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                      │                                      │
│                                      ▼ (feeds)                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  LAYER 3: CONVERSATIONAL INTELLIGENCE                                 │  │
│  │  What SELLL learns from every human interaction                       │  │
│  │  • discovery-framework.md (discovery call questions + scoring)        │  │
│  │  • call-intelligence.md (transcript analysis + objection mining)      │  │
│  │  • reply-routing.md (reply classification + workflow routing)         │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                      │                                      │
│                                      ▼ (feeds back into Layer 1)            │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  LAYER 4: LEARNING LOOPS                                              │  │
│  │  How the brain gets smarter over time                                 │  │
│  │  • learning-loops.md (6 feedback loops, update protocols)             │  │
│  │  • hypothesis_set.md (confidence scores updated from outcomes)        │  │
│  │  • lead-scores.csv (ICP scoring weights adjusted from close data)     │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## The Event Bus

All 12 skills in the engine communicate through a shared signal layer. When any skill generates new information, it propagates to every other skill that needs it.

```
SIGNAL FIRES (signal-monitor)
  │
  ├──► list-building     (company enters queue)
  ├──► lead-scoring      (score assigned immediately)
  ├──► trigger-playbooks (protocol selected by signal type)
  └──► state.md          (event logged)

EMAIL SENT (email-generation)
  │
  ├──► deliverability-rules (volume tracker updated)
  └──► state.md             (activity logged per contact)

REPLY RECEIVED (inbox-reply)
  │
  ├──► reply-routing        (reply classified → workflow triggered)
  ├──► lead-scoring         (score updated: +behavioral points)
  ├──► meeting-automation   (if positive: booking email within 2h)
  ├──► multi-thread         (if positive: pause all parallel threads)
  └──► institutional-memory (reply pattern logged)

MEETING HELD (meeting-automation)
  │
  ├──► call-intelligence    (transcript analyzed)
  ├──► discovery-framework  (qualification score assigned)
  ├──► deal-nurture         (post-call email triggered)
  └──► institutional-memory (call patterns logged)

DEAL WON (deal-nurture)
  │
  ├──► referral-engine      (referral ask queued for Day 30)
  ├──► institutional-memory/wins.md (win pattern recorded)
  ├──► learning-loops       (ICP scoring weights updated)
  └──► hypothesis_set.md    (winning hypothesis confidence +1)

DEAL LOST (deal-nurture)
  │
  ├──► institutional-memory/losses.md (loss pattern recorded)
  ├──► learning-loops       (objection bank updated)
  └──► hypothesis_set.md    (failing hypothesis confidence -1)
```

---

## Role-Based Brain Views

Different team members access different slices of the brain.

| Role | What They Access | What They Don't Need |
|------|-----------------|----------------------|
| **Aaron (Founder)** | Full brain — all layers | — |
| **Human SDR** | Tone DNA + Objection Bank + Reply Routing + Trigger Playbooks | Institutional memory, learning loops |
| **AE / Closer** | Discovery Framework + Competitive Battle Cards + ROI Calculator + Deal patterns from wins.md | Deliverability rules, list-building |
| **New Hire** | Tone DNA + Objection Bank + Discovery Framework + Campaign patterns | Learning loops, event bus |
| **Reporting** | State.md + Learning Loops outputs + Revenue reporting | Execution layer files |

---

## Brain Query Protocol

When any skill or team member needs to query the brain, use this structure:

```
QUERY: [what you need to know]
CONTEXT: [what deal/account/situation you're in]
ROLE: [which role view to apply]

Brain returns:
ANSWER: [direct answer]
SOURCE: [which brain file + specific section the answer came from]
CONFIDENCE: [HIGH = proven by multiple outcomes | MEDIUM = 1-2 data points | LOW = inferred]
RELATED: [other brain files that are relevant]
```

**Example query:**
```
QUERY: What is the best objection counter when a CRO says "we tried an agency before and it didn't work"?
CONTEXT: Holz-Concepts-style company, new VP Sales, Series B, 60 employees
ROLE: SDR

ANSWER: "That's fair — most agencies start with a generic template. We start with 3 weeks of intelligence: ICP mapping, competitive analysis, message positioning. Your positioning drives the system, not ours. Can I show you what that phase looks like?"
PROOF POINT: Holz Concepts / Stefan Golz — new CRO, inherited broken stack, hit first pipeline targets on time.
SOURCE: objection-bank.md → Objection 7 | selll_context.md → Persona 3
CONFIDENCE: HIGH (used successfully on 3+ documented deals)
```

---

## Brain Maintenance Protocol

The brain is maintained through four regular operations:

| Operation | Frequency | Trigger | Owner Skill |
|-----------|-----------|---------|-------------|
| Campaign debrief | After every campaign closes | Campaign suppression | revenue-reporting |
| Call debrief | After every sales call | Meeting outcome logged | call-intelligence |
| Win/Loss analysis | After every deal closed | Deal stage = Won or Lost | deal-nurture |
| Weekly ICP calibration | Every Friday | Scheduled | learning-loops |

**Freshness rule:** Any brain file not updated in 90 days is flagged for review. Stale knowledge is worse than no knowledge.

---

## Brain File Index

| File | Layer | Purpose | Updated By |
|------|-------|---------|-----------|
| `brain/BRAIN.md` | Architecture | This file — brain overview and event bus | Manual |
| `brain/tone-dna.md` | Execution | Aaron's writing voice | Manual (quarterly) |
| `brain/objection-bank.md` | Execution | 25+ objections + proof mapping | call-intelligence, deal-nurture |
| `brain/discovery-framework.md` | Conversational | Discovery call questions + live scoring | call-intelligence |
| `brain/reply-routing.md` | Conversational | Reply classification + workflow routing | inbox-reply |
| `brain/roi-calculator.md` | Execution | The ROI closing math | Manual (when pricing changes) |
| `brain/competitive-battlecards.md` | Execution | 5 competitors, counter by counter | call-intelligence (competitor mentions) |
| `brain/deliverability-rules.md` | Execution | Inbox health, volume rules, fatigue guard | email-generation |
| `brain/trigger-playbooks.md` | Execution | Signal → exact action protocol + compound signal detector | signal-monitor |
| `brain/learning-loops.md` | Learning | 6 feedback loops that update the brain | revenue-reporting |
| `brain/call-intelligence.md` | Conversational | Transcript analysis framework | meeting-automation |
| `brain/crm-hygiene.md` | Execution | Daily pulse + weekly deep clean | deal-nurture |
| `brain/linkedin-profile.md` | Execution | Profile optimization + content machine + signal monitoring | linkedin-content |
| `brain/institutional-memory/campaigns.md` | Knowledge | Every campaign pattern + buyer language library | revenue-reporting |
| `brain/institutional-memory/wins.md` | Knowledge | Won deal patterns | deal-nurture |
| `brain/institutional-memory/losses.md` | Knowledge | Lost deal lessons | deal-nurture |
| `brain/daily-runbook.md` | Execution | 30-min daily operating protocol | Manual (every morning) |
| `brain/proposal-template.md` | Execution | CEO-ready proposal generator | deal-nurture |
| `brain/account-card-template.md` | Execution | Per-account master view template | All skills (one card per Tier 1) |
| `brain/voc-library.md` | Knowledge | Voice of Customer — buyer quotes by pain category | call-intelligence, signal-monitor |
| `brain/verticals/fintech.md` | Intelligence | Fintech-specific ICP nuance, pain angle, objections | Manual |
| `brain/verticals/hr-tech.md` | Intelligence | HR Tech-specific playbook | Manual |
| `brain/verticals/martech.md` | Intelligence | MarTech/SalesTech-specific playbook | Manual |
| `brain/verticals/devtools.md` | Intelligence | DevTools-specific playbook | Manual |
| `brain/verticals/data-analytics.md` | Intelligence | Data & Analytics-specific playbook | Manual |
| `brain/pre-engagement-protocol.md` | Execution | LinkedIn warm-up 48–72h before Email 1 — +15–25% reply rate | growthflare-layer-2 |
| `brain/proof-library.md` | Knowledge | 3 deep proof points with full situation/action/outcome/quote + Loom scripts | deal-nurture, sequences |
| `brain/sdr-onboarding.md` | Execution | Complete SDR onboarding guide — every SDR operates the engine independently | New SDR hires |
| `brain/linkedin-content-calendar.md` | Execution | 12 drafted posts for 4-week launch calendar — pre-engagement credibility layer | Aaron (manual publish) |
| `claude-code-gtm/sequences/` (7 files) | Execution | 34 emails across 7 variants — top 0.0001% signal-orchestrated outreach | Instantly via Layer 3 |
| `brain/copywriting-library.md` | Execution | Master copy intelligence: 10 psychological frameworks, 24 subject formulas, 15 hook patterns, 12 CTA variants, 10 curiosity triggers, 15-point quality checklist, 1M Messages integration section | All sequences + SDR replies |
| `sequences/spintax-engine.md` | Execution | Full spintax syntax for all 7 sequences — 240+ unique variations per email, performance tracking table | Instantly import |
| `sequences/campaign-variants/H5-variants.md` | Execution | 3 distinct campaign angles (Pain/Proof/Curiosity) for H5 multivariate testing with kill thresholds | Layer 3 + testing protocol |

**Brain total: 34 files (16 core + 18 Einstein/v2.0 upgrades)**

---

## Engine Support Files (Not Brain Files — But Layer 2 Depends On These)

| File | Purpose | Created By |
|------|---------|-----------|
| `engine/fatigue-suppressed.md` | Contacts never re-sequenced (2+ campaigns, 0 engagement) | growthflare-layer-2 |
| `engine/re-engagement-queue.md` | Warm "not now" contacts with trigger conditions — auto-campaigned via Instantly | signal-monitor → auto |
| `engine/call-queue.md` | Phone contacts from Prospeo — sorted by reply probability | growthflare-layer-2 Phase 5E |
| `engine/accounts/` | Per-account cards for every Tier 1 company | growthflare-layer-2 Phase 5D |
| `engine/comment-queue/` | Daily LinkedIn comment approval queue (Claude-generated, 5-min Aaron review) | linkedin-automation |
| `csv/campaigns/` | Verified 52-column CSVs ready for Instantly import | growthflare-layer-2 Phase 5A |

## Automation Layer (Requires API Keys + Tools)

| Tool | Purpose | Skill |
|------|---------|-------|
| **Expandi** | LinkedIn pre-engagement (T−3/T−2/T−1), warm DMs, Thread B LinkedIn | `linkedin-automation` |
| **HeyGen** | AI video generation for Email 3 (Aaron records avatar once, system personalizes at scale) | `ai-personalization`, `video-outreach` |
| **Claude API** | Reply classification (inbox-reply webhook), bespoke email opener generation | `inbox-reply`, `ai-personalization` |
| **n8n** | Webhook orchestrator: Instantly → reply routing; HeyGen → CSV update; Expandi → warm path escalation; Day 5 Thread B timer | All automation paths |
| **HubSpot API** | CRM sync on every classification, stage update, DNC flag, OOO note | `inbox-reply` |

**Automation Stack Config:** All API keys in environment variables. See `engine/state.md` → Blockers table for keys needed.

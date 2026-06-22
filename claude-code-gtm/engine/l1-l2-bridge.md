---
name: l1-l2-bridge
description: >
  Formal data contract between Layer 1 (Intelligence) and Layer 2 (Activation).
  Documents every Layer 1 output and the exact Layer 2 phase that consumes it.
  Reading this file tells you: what Layer 1 must produce, what Layer 2 expects to
  receive, and where each piece of intelligence is used. This is the spine that
  prevents fragmented GTM flows. Any change to a Layer 1 file must be checked
  against this document to understand the downstream Layer 2 impact.
---

# Layer 1 → Layer 2 Data Bridge — SELLL.io

> "The output of Layer 1 is the input of Layer 2. They are not separate systems — they are one continuous flow."

This document is the formal interface between layers. It answers two questions:
1. What does Layer 1 produce that Layer 2 depends on?
2. Where exactly in Layer 2 is each Layer 1 output consumed?

**When to read this:** Before running Layer 2 for the first time. Before changing any Layer 1 file (to understand downstream impact). When diagnosing a Layer 2 output that feels wrong.

---

## The Flow in One View

```
LAYER 1 — Intelligence (what we know)
    │
    ├── WHO we target ──────────────────→ Gate 0B + Phase 2E Dim 1 (ICP filter + firmographic scoring)
    ├── WHY they buy ───────────────────→ Phase 1A queries + Phase 2E Dim 3 (signal search + pain scoring)
    ├── WHEN to reach out ──────────────→ Phase 1B + Phase 2E Dim 6 (urgency window + timing score)
    ├── WHAT to say ────────────────────→ Phase 4B + Phase 4C + Phase 4D (proof + sequence + variables)
    ├── HOW to say it ──────────────────→ Phase 4D + ai-personalization (voice rules + copy frameworks)
    ├── WHO is already warm ────────────→ Gate 0C + Phase 3C (re-engagement check + warm path detection)
    └── WHO to never contact again ─────→ Gate 0A + Gate 0B + Phase 3F (CRM dedup + DNC + fatigue guard)
    │
    ▼
LAYER 2 — Activation (what we do with it)
    │
    ├── Phase 0: Intelligence Gates (filter)
    ├── Phase 1: Signal Intelligence (find)
    ├── Phase 2: Account Intelligence (score)
    ├── Phase 3: Contact Intelligence (identify)
    ├── Phase 4: Outreach Intelligence (prepare)
    └── Phase 5: Output & Activation (launch)
```

---

## Complete L1 → L2 Data Map

### 1. `IDEAL-CUSTOMER-PROFILE.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Firmographic Criteria → Ideal Range | Gate 0B | Hard disqualifiers (< 15 employees, > 200 employees, etc.) |
| Firmographic Criteria → Red Flag | Gate 0B | Additional disqualifiers to check before enrichment |
| Firmographic Criteria → Ideal Range | Phase 2E Dimension 1 | Firmographic Fit scoring rubric (B2B SaaS, $2M–$30M ARR, 25–150 employees) |
| Technographic Profile → Positive signals | Phase 2E Dimension 2 | Technographic Fit scoring (sequencer in stack, CRM confirmed) |
| Technographic Profile → Red flag tech | Gate 0B | Additional hard disqualifiers (Marketo/Pardot, custom in-house tools) |
| Behavioral Signals → Events / content | Phase 3C | Warm path detection (event attendee overlap check) |
| Primary Verticals (ranked) | Phase 4B | Vertical-specific proof point selection |
| ICP Summary (buyer profile) | Phase 3A | Persona identification and sequence assignment |

**Validation check:** Before Layer 2, confirm `IDEAL-CUSTOMER-PROFILE.md` has: Firmographic Criteria table, Technographic Profile, Primary Verticals list. If any section is missing — stop. Layer 2 Gate 0B and Phase 2E scoring will be wrong.

---

### 2. `OUTREACH-SEQUENCE.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Persona 1 (CRO / VP Sales) — sequence | Phase 4C | `CRO_v1` sequence selection |
| Persona 2 (Scaling Founder) — sequence | Phase 4C | `Founder_v1` sequence selection |
| Persona 3 (New VP Sales) — sequence | Phase 4C | `VPSales_v1` sequence selection |
| Email subject line options | Phase 4D | `v_subject_line` variable options per variant |
| Merge field list | Phase 4D | Variable extraction list (which fields must be populated) |
| Email tone and structure | `ai-personalization` | Context for bespoke opener generation |

**Validation check:** Before Layer 2, confirm `OUTREACH-SEQUENCE.md` has sequences for all 3 personas with merge fields documented. The sequences in `claude-code-gtm/sequences/` are the canonical source — `OUTREACH-SEQUENCE.md` is the human-readable overview.

---

### 3. `claude-code-gtm/context/selll_context.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| ICP Definition | Gate 0B | Confirms ICP snapshot used for this campaign |
| Persona Profiles (3 personas) | Phase 3A | Persona → Sequence mapping (title → variant) |
| Proof Library (3 clients) | Phase 4B | Proof point matching matrix (client name, situation, outcome) |
| DNC List | Gate 0B | Permanent exclusion — hard remove before any search |
| Pricing & Engagement Model | Phase 4D | `v_offer_frame` variable + Thread C economic buyer pitch |
| SELLL Value Proposition | Phase 4D | `v_pain_statement` variable construction |
| Tech Stack | Phase 2B | Hypothesis-specific enrichment queries (which tools to check) |

**Validation check:** Confirm `selll_context.md` has: ICP summary, 3 persona profiles, proof library with 3+ clients, DNC list (can be empty), pricing details.

---

### 4. `claude-code-gtm/context/b2b-saas/hypothesis_set.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Hypothesis Selection Table (H1–H7) | Layer 2 Opening | Which hypothesis to run (user selects from this table) |
| H5 search angles (3 Extruct queries) | Phase 1A | Exact Extruct query strings |
| H1–H7 external signal sources | Phase 1A Source 4 | Signal-specific external data sources |
| Urgency windows per hypothesis | Phase 1B | Days remaining calculation per hypothesis |
| Confidence scores | Phase 1 | Campaign prioritization (run H5 before H6) |
| Compound signal combinations | Phase 1C + Phase 2D | Which hypothesis combinations trigger compound detection |
| H5 score modifier (Dimension 6) | Phase 2E | Timing Signal scoring rubric (authoritative source) |

**Validation check:** Confirm `hypothesis_set.md` has: all 7 hypotheses with search angles, urgency windows, and confidence scores. If a confidence score hasn't been updated from a prior campaign — update it before running.

---

### 5. `claude-code-gtm/context/b2b-saas/enrichment-columns.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Base columns (11) | Phase 2A | Columns to run on all companies |
| `hypothesis_confirmed` gate | Phase 2A | Quality gate before spending more credits |
| Hypothesis-specific columns | Phase 2B | Columns to run only after hypothesis confirmed |
| Intelligence layer columns (6) | Phase 2C | Additional signal columns (competitor, intent, stage, timezone, LinkedIn, SDR) |

**Validation check:** Confirm `enrichment-columns.md` has column specs for all 7 hypotheses with `agent: research_pro` format. Column format must match what Extruct accepts.

---

### 6. `claude-code-gtm/brain/proof-library.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Devolon proof point (situation/outcome/quote) | Phase 4B | Assigned when SDR productivity is the primary pain |
| Holz Concepts / Stefan Golz (situation/outcome/quote) | Phase 4B | Assigned for New VP Sales persona |
| Flow Meditation / Ellie Nash (situation/outcome/quote) | Phase 4B | Assigned for Founder persona |
| Proof point Loom scripts | `video-outreach` + `ai-personalization` | Video personalization scripts by persona |
| ROI numbers per proof point | Phase 4D | `v_proof_outcome` variable |

**Validation check:** Confirm `proof-library.md` has full situation/action/outcome/quote for each client. Specifically: Devolon client name confirmed, Stefan Golz quote confirmed accurate.

---

### 7. `claude-code-gtm/brain/tone-dna.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Voice rules (never start with "I", no generic openers) | `ai-personalization` | Validation rules for Claude-generated bespoke openers |
| Email tone framework | Phase 4D | Variable extraction style and length |
| Subject line rules | Phase 4C | Subject line selection within spintax variants |
| Reply tone framework | `inbox-reply` | Reply draft tone constraints |

---

### 8. `claude-code-gtm/brain/copywriting-library.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| PAS / Before-After-Bridge frameworks | `ai-personalization` | Bespoke opener structure |
| Subject line formulas (24 formulas) | Phase 4C | Subject line variant selection |
| Hook patterns (15) | Phase 4D | `v_opening_line` hook selection |
| CTA variants (12) | Phase 4D | `v_cta_variant` selection |
| 15-point quality checklist | Phase 5B | Priority Personalization List review |

---

### 9. `claude-code-gtm/brain/trigger-playbooks.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Signal → Action playbooks (7 playbooks) | Phase 1A | Signal search confirmation for each hypothesis |
| Compound Signal Detector | Phase 1C + Phase 2D | Compound pre-scan logic (2+ hypotheses = CRITICAL) |
| Urgency window definitions | Phase 1B | Days remaining calculation (authoritative source) |

---

### 10. `claude-code-gtm/brain/deliverability-rules.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Domain warmup schedule + daily send limits | Phase 4F | Send slot allocation (never exceed warmup capacity) |
| Fatigue Guard rules | Phase 3F | Which contacts to suppress |
| Bounce rate thresholds | Phase 3F | Stop gate at > 1.5% bounce rate |
| Sequence timing rules | Phase 4F | Days between emails (Email 1 → 2 → 3 gap) |

---

### 11. `claude-code-gtm/brain/voc-library.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Buyer language by pain category | Phase 4D | `v_pain_statement` exact phrasing (use their words, not ours) |
| Buyer language by vertical | Phase 4D | `v_signal_detail` construction per vertical |

---

### 12. `claude-code-gtm/brain/competitive-battlecards.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Competitor weaknesses (Belkins, CIENCE, Kalungi) | Phase 4C | `VPSales_Displacement` variant trigger |
| Displacement positioning | Phase 4D | `v_competitor_name` variable + displacement hook |

---

### 13. `claude-code-gtm/brain/linkedin-profile.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Content Performance Tracker → ICP Engagers column | Phase 3C | Warm path detection (post engager check) |

---

### 14. `claude-code-gtm/engine/fatigue-suppressed.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Suppressed contacts list | Gate 0B | Remove before any outreach attempt |
| Suppressed contacts list | Phase 3F | Fatigue Guard check before email verification |

---

### 15. `claude-code-gtm/engine/re-engagement-queue.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Active queue (trigger status) | Gate 0C | Route warm contacts to re-engagement instead of cold sequence |
| Trigger conditions met (⚡ TRIGGERED) | Gate 0C | CRITICAL priority flag — same-day action |

---

### 16. `claude-code-gtm/engine/state.md`

| L1 Section | L2 Phase | What It Drives |
|-----------|---------|---------------|
| Domain warmup status | Phase 4F | Send slot limits (emails/day based on warmup stage) |
| Active campaigns | Gate 0A | Cross-check for duplicate company outreach |
| Layer 1 completion status | Phase 0.0 | Validation gate — Layer 2 should not run if Layer 1 is incomplete |

---

## Layer 1 Completion Checklist (Must Be Green Before Layer 2 Runs)

| Layer 1 File | Must Have | Status |
|-------------|---------|--------|
| `IDEAL-CUSTOMER-PROFILE.md` | Firmographic table, technographic profile, verticals ranked | ✅ |
| `OUTREACH-SEQUENCE.md` | 3 persona sequences with merge fields | ✅ |
| `selll_context.md` | ICP summary, 3 personas, proof library, DNC list, pricing | ✅ |
| `hypothesis_set.md` | 7 hypotheses with search angles, urgency windows, confidence scores | ✅ |
| `enrichment-columns.md` | Base columns + all 7 hypothesis-specific column sets | ✅ |
| `brain/proof-library.md` | Full situation/outcome/quote for each proof point | ✅ Partial (Devolon name TBC) |
| `brain/tone-dna.md` | Voice rules, email tone, subject rules | ✅ |
| `brain/copywriting-library.md` | Frameworks A–G, subject formulas, hook patterns | ⚠️ Sections A–G pending (Aaron to paste 1M Messages) |
| `brain/trigger-playbooks.md` | 7 signal playbooks + Compound Signal Detector | ✅ |
| `brain/deliverability-rules.md` | Warmup schedule, fatigue guard, bounce thresholds | ✅ |
| `brain/voc-library.md` | Buyer language by pain category + vertical | ✅ |
| `brain/competitive-battlecards.md` | 5 competitor cards with displacement positioning | ✅ |
| `brain/linkedin-profile.md` | Content Performance Tracker → ICP Engagers section | ✅ |
| `engine/fatigue-suppressed.md` | Exists (can be empty — that's fine) | ✅ |
| `engine/re-engagement-queue.md` | Exists + trigger statuses current | ✅ |
| `engine/state.md` | Domain warmup status current | ⚠️ Warmup not started |

**Green count: 13/16 ✅ | Amber count: 3/16 ⚠️**

Amber items do NOT block Layer 2 from running in simulation. They block live send.

---

## Impact Map: If You Change a Layer 1 File

If any Layer 1 file changes, update these Layer 2 decisions:

| L1 File Changed | Layer 2 Impact | What to Re-Check |
|----------------|---------------|-----------------|
| ICP expands to 200+ employees | Gate 0B disqualifier threshold | Update Gate 0B employee cap |
| New proof point added | Phase 4B matching matrix | Add new proof to matching logic |
| New hypothesis (H8) added | Phase 1 queries + urgency window | Add H8 search angles + timing |
| Persona added or renamed | Phase 3A persona mapping | Update title → variant mapping |
| Pricing changes | Phase 4D `v_offer_frame` variable | Update the economic buyer angle |
| New competitor | Phase 2C enrichment + Phase 4C displacement | Add to `competitor_client` labels + displacement variant |
| DNC list updated | Gate 0B | Applied automatically at next run |
| Warmup capacity increases | Phase 4F slot allocation | Increase daily send ceiling |

---

# Layer 2 → Layer 3 Data Bridge

> "Layer 2 builds the machine. Layer 3 runs it."

This section documents what Layer 2 produces and exactly where Layer 3 consumes it. No gap between these layers. Every Layer 2 output has a named Layer 3 consumer.

---

## Layer 2 → Layer 3 Flow in One View

```
LAYER 2 — Activation (build the target list + prepare campaign)
    │
    ├── Verified campaign CSV (62 cols) ──────────────→ Layer 3 Phase 1B (Instantly import)
    ├── Priority Personalization List ─────────────────→ Layer 3 Phase 1C (ai-personalization trigger)
    ├── Pre-engagement schedule (T-3/T-2/T-1) ─────────→ Layer 3 Phase 1D (Expandi start)
    ├── Account cards (engine/accounts/[slug].md) ──────→ Layer 3 Phase 3B (ADB generation)
    ├── Call queue (engine/call-queue.md) ──────────────→ Layer 3 Phase 2 (cold-call track)
    ├── HeyGen video status (v_loom_url in CSV) ────────→ Layer 3 Phase 1C (video batch check)
    └── Layer 2 Run Log ─────────────────────────────→ Layer 3 Phase 1A (pre-launch verification)
         │
         ▼
    LAYER 3 — Execution (run the campaign, convert HOT leads, harvest intelligence)
```

---

## Layer 2 Outputs → Layer 3 Consumers (Full Map)

### From Layer 2 Phase 5A — Verified Campaign CSV

Every column in the CSV has a Layer 3 consumer:

| CSV Column | Layer 3 Consumer | How Used |
|-----------|----------------|---------|
| `email` | Phase 1B | Instantly lead import |
| `first_name`, `last_name` | Phase 1B | Instantly lead fields |
| `reply_probability` | BIS tracker (Step 2B) | Starting BIS score — updated in real time |
| `tier` | Thread engine (Step 2D) | Tier 1 Priority → Thread C eligible |
| `sequence_variant` | SAE (Step 2H) | Starting variant — may be swapped mid-campaign |
| `thread` | Thread engine (Step 2D) | A/B/C assignment |
| `thread_b_contact` | Thread engine (Step 2D) | Thread B auto-trigger target |
| `thread_c_contact` | Thread engine (Step 2D) | Thread C auto-trigger target |
| `v_loom_url` | Phase 1C + Email 3 | HeyGen video check; Instantly merge field |
| `v_bespoke_opener` | Phase 1C | Instantly merge field for Email 1 (Priority list) |
| `assigned_proof_point` | ADB (Phase 3B) | Proof matching in Auto-Discovery Brief |
| `hypothesis` | CED (Step 2E) + ADB | Account grouping + brief context |
| `compound_signal` | CED (Step 2E) | Pre-flagged compound accounts — CED watches these first |
| `warm_path_type` | LEM (Step 2G) | Warm contacts get LinkedIn Engagement Mirror priority |
| `hq_timezone` | Phase 2A | optimal_send_time_utc send scheduling |
| `optimal_send_time_utc` | Phase 1B | Instantly per-contact send time |
| `sending_domain` | Phase 1A verification | Must = team.selll.io on every row |
| `arr_estimate` | Thread C check (Step 2D) + ADB ROI | ACV > $30K → Thread C eligible; ROI calculation |
| `exec_linkedin_signal` | LEM (Step 2G) + T-1 comment queue | Comment generation context |
| `v_signal_detail` | ADB (Phase 3B) | Brief situation context |
| `urgency_band` | ADB (Phase 3B) + SAE (Step 2H) | Call framing + variant selection |

### From Layer 2 Phase 5B — Priority Personalization List

| Output | Layer 3 Consumer | How Used |
|--------|----------------|---------|
| Contacts with reply_prob ≥ 70 | Phase 1C (ai-personalization) | HeyGen bespoke video + bespoke opener |
| Contacts with reply_prob 35–69 Tier 1 | Phase 1C (video-outreach) | HeyGen standard template video |
| v_bespoke_opener (generated) | Phase 1B Instantly import | Instantly merge field Email 1 |
| v_loom_url (generated) | Phase 1B Instantly import | Instantly merge field Email 3 |

### From Layer 2 Phase 5C — Pre-Engagement Schedule

| Output | Layer 3 Consumer | How Used |
|--------|----------------|---------|
| T-3 date per contact | Phase 1D (Expandi) | Follow on this date |
| T-2 date per contact | Phase 1D (Expandi) | Like most recent post on this date |
| T-1 date per contact | Phase 1D (Expandi) | Queue comment for Aaron approval |
| Email 1 send date | Phase 1B (Instantly timing) | Sequence start per contact |

### From Layer 2 Phase 5D — Account Cards

| Output | Layer 3 Consumer | How Used |
|--------|----------------|---------|
| `engine/accounts/[slug].md` | ADB (Phase 3B) | Full account intelligence for brief generation |
| Company context section | ADB (Phase 3B) | Situation summary input |
| Contact intelligence section | ADB (Phase 3B) | Contact BIS history + LinkedIn activity |
| Touch timeline | Phase 2 event log | CED cross-reference |

### From Layer 2 Phase 5E — Call Queue

| Output | Layer 3 Consumer | How Used |
|--------|----------------|---------|
| `engine/call-queue.md` | Layer 3 Phase 2 (parallel cold-call track) | Contacts with phone numbers — cold-call skill runs in parallel |

---

## Layer 3 → Layer 1/2 Feedback (What Layer 3 Feeds Back)

Layer 3 is not a terminal layer — it feeds intelligence back into Layer 1 and Layer 2 to make the next campaign sharper:

| Layer 3 Output | Destination | What It Updates |
|---------------|-------------|----------------|
| Buyer language (HOT/WARM replies) | `brain/voc-library.md` (Layer 1) | VOC library — exact phrases for next campaign |
| Hypothesis performance | `hypothesis_set.md` (Layer 1) | Confidence score ± based on reply rate |
| Subject line winners/losers | `sequences/spintax-engine.md` (Layer 1) | Spintax pool promotion/removal |
| Winning proof point | `brain/proof-library.md` (Layer 1) | Proof point effectiveness tracking |
| Competitor intel from calls | `brain/competitive-battlecards.md` (Layer 1) | Battlecard updates from discovery |
| Not-now contacts + triggers | `engine/re-engagement-queue.md` (Layer 2 Gate 0C) | Pre-loaded for next campaign's Gate 0C check |
| Responder seed list | Layer 2 Phase 1A (next run) | Lookalike seed for next list-build |
| Updated ICP profile signals | `IDEAL-CUSTOMER-PROFILE.md` (Layer 1) | Refined ICP from actual close data |

---

## The Complete Engine Data Flow — Layers 1 → 2 → 3

```
┌──────────────────────────────────────────────────────────────────────┐
│ LAYER 1: Intelligence                                                │
│ ICP → Personas → Hypotheses → Sequences → Proof Library → Brain     │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ l1-l2-bridge.md (this document, Section 1)
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│ LAYER 2: Activation                                                  │
│ Gates → Signal → Account → Contact → Outreach → CSV Output          │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ l1-l2-bridge.md (this document, Section 2)
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│ LAYER 3: Campaign Execution + Intelligence                           │
│ Launch → BIS → CED → SAE → LEM → HOT Conversion → Close + Harvest  │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ Learning loops + intelligence harvest
                              ▼
        ┌────────────────┬────────────────┬──────────────────┐
        ▼                ▼                ▼                  ▼
   Layer 1 (VOC,    Layer 2 (seed    Layer 4           engine/campaigns/
  hypotheses,       list, re-engage  Pipeline)         [slug]-active.md
  battlecards)      queue, ICP)
```

---

## Section 3: Layer 3 → Layer 4 Bridge

What Layer 3 produces that Layer 4 depends on.

| Layer 3 Output | Layer 4 Consumer | How It's Used |
|---------------|-----------------|--------------|
| HOT reply classified | `selllo-deal-intake` n8n | Creates deal in HubSpot + deals.md. Initial DHS = 65 |
| MEETING_REQUEST classified | `selllo-deal-intake` n8n | Creates deal with Stage 1. Initial DHS = 70 |
| ADB (Auto-Discovery Brief) | Layer 4 Phase 2A discovery intake | Aaron's call prep — feeds post-call scoring |
| BIS score at HOT | Layer 4 DHS Dimension 1 (baseline) | Sets baseline engagement recency |
| Account card (with CED history) | Layer 4 Phase 2C multi-stakeholder | Champion list for multi-stakeholder nurture |
| Reply text verbatim | Layer 4 Phase 2A discovery notes | Claude extracts pain for nurture personalization |
| Hypothesis code + urgency | Layer 4 Phase 3B proposal generation | Shapes proposal Section 1 (situation framing) |
| warm_path_type | Layer 4 Phase 4B close assist | Informs executive pull-through approach |
| Proof assigned | Layer 4 Phase 3B proposal generation | Auto-populates proposal Section 3 proof |
| Discovery score (from meeting-automation) | Layer 4 Phase 2A routing | Routes to Proposal (≥18), Nurture (12-17), Lost (<12) |

---

## Section 4: Layer 4 → Layer 5 Bridge

What Layer 4 produces that Layer 5 depends on.

| Layer 4 Output | Layer 5 Consumer | How It's Used |
|---------------|-----------------|--------------|
| Contract signed (DocuSign webhook) | `selllo-client-onboarding` n8n | Triggers Layer 5 activation, creates clients.md entry |
| Final ACV (contract value) | Layer 5 clients.md | Sets baseline MRR + total contract value |
| Discovery notes (what they said) | Layer 5 Phase 1B kickoff | Informs 90-day plan (we already know their exact pain) |
| DHS history | Layer 5 Phase 1A clients.md | Context for onboarding relationship (was deal long/hard?) |
| Champion identified (from CED) | Layer 5 Phase 1B kickoff | Who else to include in onboarding communications |
| Competitor named (from close) | Layer 5 Phase 2A context file | Added to client-specific competitive-battlecards section |
| Proof point used to close | Layer 5 Phase 3C proof library update | Confirms which proof point was most effective for this deal |

---

## Section 5: Layer 5 → Layer 1/2/6 Bridge

What Layer 5 produces that all prior layers depend on.

| Layer 5 Output | Consumer Layer | How It's Used |
|---------------|--------------|--------------|
| Client results (before/after numbers) | Layer 1 proof-library.md | New proof point with confirmed numbers + quote |
| Client's ICP profile (what they look like) | Layer 1 IDEAL-CUSTOMER-PROFILE.md | Tightens ICP from proven-buyer attributes |
| New proof point entry | Layer 3 sequences (Email 2/3) | Proof point in active sequences updated |
| Churn analysis (if applicable) | Layer 1 Gate 0B | If churn reveals structural anti-ICP pattern → add to filter |
| Referral contacts | Layer 2 pipeline | Referrals skip Layers 2-3 → enter Layer 4 directly |
| Case study published | Layer 3 ai-personalization | Bespoke openers reference published case study |
| CHS history | Layer 6 ICP refinement | What predicts healthy vs. risky clients → ICP adjustment |
| NRR data | Layer 6 quarterly strategy | Shapes expansion priorities and pricing decisions |
| VOC from client calls | Layer 1 voc-library.md | Client language about results → sequence copy |

---

## Section 6: Full 6-Layer Data Architecture

```
FULL GROWTHFLARE REVENUE ENGINE — DATA FLOW

LAYER 1: Intelligence
  Files: IDEAL-CUSTOMER-PROFILE.md, hypothesis_set.md, brain/* (25 files)
  Produces: Targeting criteria, buying signals, proof points, voice, objection counters
     │
     ↓
LAYER 2: Activation
  Receives: All Layer 1 intelligence
  Produces: 62-column campaign CSV, scored contacts (Tier 1/2), reply probabilities
     │
     ↓
LAYER 3: Campaign Execution
  Receives: Campaign CSV + all Layer 1 context
  Produces: HOT/MEETING_REQUEST signals, BIS data, reply text, account cards (updated)
     │
     ↓
LAYER 4: Pipeline Intelligence
  Receives: HOT/MEETING_REQUEST + ADB + account card from Layer 3
  Produces: DHS-scored deals, proposals, discovery notes, won/lost outcomes
     │
     ↓
LAYER 5: Close + Expand
  Receives: Signed contract + deal data from Layer 4
  Produces: Client results, proof points, referrals, CHS data, NRR data
     │
     ↓
LAYER 6: Optimize
  Receives: Data from ALL layers (weekly pull)
  Produces: ICP updates, brain updates, sequence improvements, hypothesis scores
     │
     ↑
     └──────────── Feeds back to ALL prior layers (continuous flywheel) ──────────────┘
```

---

## Bridge Maintenance Rules

1. **Any Layer 1 file change** → check Section 1 of this bridge for downstream Layer 2 impact
2. **Any Layer 2 output change** → check Section 2 of this bridge for downstream Layer 3 impact
3. **Any new Layer 3 superpower added** → document what Layer 2 data it consumes in Section 2
4. **Any new Layer 4/5/6 field** → check Sections 3-5 for upstream dependencies
5. **Bridge version** must be updated when any consuming relationship changes: `Updated: 2026-06-22`
6. **Layer 6 optimization actions** that change Layer 1 files must be logged in `engine/reports/intelligence-log.md`

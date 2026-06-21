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

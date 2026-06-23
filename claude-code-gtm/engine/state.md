# Engine State — SELLL.io
> SELLL Revenue Engine | Last updated: 2026-06-21
> Read this file before any skill run. Update only the sections your skill owns.

---

## Engine Status

| Field | Value |
|-------|-------|
| Client | SELLL.io |
| Founder | Aaron Shepard |
| Engine launched | 2026-06-21 |
| All 6 layers built | 2026-06-22 |
| Current phase | ALL LAYERS COMPLETE ✅ — awaiting domain warmup (start NOW) + API key confirmation before first live run |
| Active campaigns | 0 |
| Context file | `claude-code-gtm/context/selll_context.md` |
| Brain | `claude-code-gtm/brain/BRAIN.md` |
| Hypothesis set | `claude-code-gtm/context/b2b-saas/hypothesis_set.md` |

---

## Layer 1: Intelligence ✅ COMPLETE

| Item | Status | Notes |
|------|--------|-------|
| ICP definition | ✅ Complete | `IDEAL-CUSTOMER-PROFILE.md` |
| 3 persona profiles | ✅ Complete | CRO, Scaling Founder, New VP Sales |
| Outreach sequences | ✅ Complete | `OUTREACH-SEQUENCE.md` |
| Pricing & engagement model | ✅ Complete | $15K setup + $3K/month, 90-day build |
| Proof library | ✅ Partial | 3 clients: Devolon, Holz Concepts, Flow Meditation — add more as wins come in |
| Hypothesis set | ✅ Complete | 7 hypotheses (H1–H7) |
| Master context file | ✅ Complete | `claude-code-gtm/context/selll_context.md` |
| Sending configuration | ⚠️ Partial | Calendar link ✅ live. Sending domain still to be set up. |
| API keys | ⚠️ Pending | EXTRUCT_API_TOKEN, INSTANTLY_API_KEY, PROSPEO_API_KEY, FULLENRICH_API_KEY needed |

## GTM Brain ✅ COMPLETE — v2.0 (Einstein Upgrade)

### Core Brain (v1.0)

| Brain File | Status | Purpose |
|-----------|--------|---------|
| `brain/BRAIN.md` | ✅ Complete | Architecture, event bus, role views, query protocol |
| `brain/tone-dna.md` | ✅ Complete | Aaron's exact voice, email/DM/post/call rules |
| `brain/objection-bank.md` | ✅ Complete | 25 objections with counters + proof mapping + pattern tracker |
| `brain/discovery-framework.md` | ✅ Complete | 20 discovery questions, live scoring rubric, pre-call brief template |
| `brain/reply-routing.md` | ✅ Complete | 12 reply types, exact workflow per type, 2h booking rule |
| `brain/roi-calculator.md` | ✅ Complete | Full ROI math engine, 3 company size models, proposal section |
| `brain/competitive-battlecards.md` | ✅ Complete | 5 competitors with pitch, weaknesses, counters, proof points |
| `brain/deliverability-rules.md` | ✅ Complete | Domain setup, warmup, health monitoring, fatigue guard |
| `brain/trigger-playbooks.md` | ✅ Complete | 7 signal playbooks + compound signal detector |
| `brain/call-intelligence.md` | ✅ Complete | 8-category post-call extraction, pre-call brief template |
| `brain/learning-loops.md` | ✅ Complete | 6 feedback loops, weekly brain update protocol |
| `brain/crm-hygiene.md` | ✅ Complete | Daily pulse + weekly deep clean, HubSpot field standards |
| `brain/linkedin-profile.md` | ✅ Complete | Profile optimization, content machine, engager detection |
| `brain/institutional-memory/campaigns.md` | ✅ Complete | Campaign debrief template, hypothesis performance, buyer language |
| `brain/institutional-memory/wins.md` | ✅ Complete | Win pattern template, 10-dimension analysis |
| `brain/institutional-memory/losses.md` | ✅ Complete | Loss pattern template, type classification, reactivation tracker |

### Einstein Upgrade (v2.0) — Added 2026-06-21

| Brain File | Status | Purpose |
|-----------|--------|---------|
| `brain/daily-runbook.md` | ✅ Complete | 30-min daily operating protocol (morning/midday/EOD/Friday) |
| `brain/proposal-template.md` | ✅ Complete | CEO-ready proposal generator with pre-proposal checklist + ghosting protocol |
| `brain/account-card-template.md` | ✅ Complete | Per-account master view — all contacts, touches, signals, notes in one place |
| `brain/voc-library.md` | ✅ Complete | Voice of Customer library — buyer quotes by pain category + vertical |
| `brain/verticals/fintech.md` | ✅ Complete | Fintech-specific ICP nuance, objections, hooks, hiring signals |
| `brain/verticals/hr-tech.md` | ✅ Complete | HR Tech-specific playbook |
| `brain/verticals/martech.md` | ✅ Complete | MarTech/SalesTech-specific playbook |
| `brain/verticals/devtools.md` | ✅ Complete | DevTools/PLG-to-enterprise playbook |
| `brain/verticals/data-analytics.md` | ✅ Complete | Data & Analytics-specific playbook |
| `trigger-playbooks.md` ++ | ✅ Updated | Compound Signal Detector added (3+ signals = CRITICAL) |
| `deliverability-rules.md` ++ | ✅ Updated | Sequence Fatigue Guard added |
| `meeting-automation SKILL.md` ++ | ✅ Updated | No-Show Protocol added (3-step ghost recovery) |

**Brain total: 25 files (16 core + 9 Einstein upgrades)**

**One remaining blocker before Layer 2:**
1. ✅ Calendar link: https://cal.com/collins-ogiki-x4fokk/30min (live across all files)
2. ⚠️ API keys: EXTRUCT_API_TOKEN, INSTANTLY_API_KEY, PROSPEO_API_KEY, FULLENRICH_API_KEY (confirm when ready)

---

## Layer 2: Activation 🏗️ BUILT v2.0 — AWAITING API KEYS

### Layer 2 Architecture (v2.0 — Upgraded 2026-06-21)

5-phase pipeline | 18 steps | 2 human review gates | target 5–8% reply rate

| Phase | Steps | Purpose |
|-------|-------|---------|
| Phase 0: Intelligence Gates | 0A–0D | CRM dedup, anti-ICP filter, re-engagement check, credit estimate |
| Phase 1: Signal Intelligence | 1A–1D | Multi-source list, freshness scoring, compound pre-scan |
| Phase 2: Account Intelligence | 2A–2H | Deep enrichment, compound re-detection, 7-dimension scoring |
| Phase 3: Contact Intelligence | 3A–3G | People search + contact scoring + warm path + email + timezone + verify |
| Phase 4: Outreach Intelligence | 4A–4F | Pre-engagement, proof matching, sequence variant, variable extraction, slot allocation, reply probability |
| Phase 5: Output & Activation | 5A–5G | 52-col CSV, priority personalization list, pre-engage schedule, account cards, call queue, monitoring protocol, feedback loop |

### Skills & Files

| Item | Status | Notes |
|------|--------|-------|
| Master orchestration skill | ✅ Built v2.0 | `skills/selll/layer-2/SKILL.md` — 5 phases, 18 steps |
| LinkedIn automation skill | ✅ Built | `skills/selll/linkedin-automation/SKILL.md` — Expandi, T−3/T−2/T−1 automated, warm path DM, Thread B outreach |
| AI personalization skill | ✅ Built | `skills/selll/ai-personalization/SKILL.md` — Claude API bespoke openers + HeyGen AI video for reply_prob ≥ 70 |
| Enrichment column specs | ✅ Built v2.0 | `context/b2b-saas/enrichment-columns.md` — 11 base + 6 intelligence + hypothesis-specific |
| Campaign CSV schema | ✅ Built v2.0 | `csv/campaigns/README.md` — 52-column schema (6 contact/company/intelligence/outreach/personalization/metadata groups) |
| List building skill | ✅ Ready | `skills/list-building/SKILL.md` |
| List enrichment skill | ✅ Ready | `skills/list-enrichment/SKILL.md` |
| Lead scoring skill | ✅ Ready | `skills/selll/lead-scoring/SKILL.md` — now 7-dimension |
| People search skill | ✅ Ready | `skills/people-search/SKILL.md` |
| Email search skill | ✅ Ready | `skills/email-search/SKILL.md` — Prospeo → FullEnrich waterfall |
| Email verification | ✅ Ready | `skills/email-verification/SKILL.md` — catch-all removal, < 1.5% bounce target |
| Fatigue guard | ✅ Built | `engine/fatigue-suppressed.md` |
| Re-engagement queue | ✅ Built | `engine/re-engagement-queue.md` — cross-checked at Gate 0C |
| Call queue | ✅ Built | `engine/call-queue.md` — phone contacts from Prospeo, sorted by reply probability |
| Account cards directory | ✅ Built | `engine/accounts/` |
| Campaign CSV directory | ✅ Built | `csv/campaigns/` |

### What Makes v2.0 Extraordinary vs. v1.0

| Capability | v1.0 | v2.0 |
|-----------|------|------|
| List sources | 1 (Extruct) | 4 (Extruct ×3 + signal-specific external) |
| CRM dedup | ✗ | ✅ Gate 0A |
| Anti-ICP filter | ✗ | ✅ Gate 0B (8 hard disqualifiers) |
| Re-engagement check | ✗ | ✅ Gate 0C |
| Credit cost estimate | ✗ | ✅ Gate 0D (user approves before spending) |
| Signal freshness scoring | ✗ | ✅ Urgency window calculation |
| Compound pre-scan | ✗ | ✅ Multi-hypothesis detection pre + post enrichment |
| Intelligence layer columns | 0 | ✅ 6 columns (competitor, intent, stage, timezone, LinkedIn, SDR productivity) |
| Scoring dimensions | 6 | ✅ 7 (+ Buying Intent dimension) |
| Contact-level scoring | ✗ | ✅ 0–50 individual reply likelihood score |
| Warm path detection | ✗ | ✅ 5 warm path types checked |
| Pre-engagement protocol | ✗ | ✅ LinkedIn T−3/T−2/T−1 before email (+ 15–25% reply rate) |
| Proof point matching | Persona → proof | ✅ Multidimensional (persona + vertical + stage + size) |
| Sequence branch selection | 1 per persona | ✅ Multiple variants per hypothesis + condition |
| Personalization variables | 1 (`signal_detail`) | ✅ 13 pre-extracted merge fields |
| Time zone optimization | ✗ | ✅ 7:30 AM local → UTC for Instantly |
| Slot allocation | ✗ | ✅ Priority order within warmup limits |
| Reply probability score | ✗ | ✅ 0–100 combined score |
| Priority personalization list | ✗ | ✅ Top 10% flagged for bespoke emails |
| First 24h monitoring | ✗ | ✅ 6 signals to watch + threshold actions |
| Post-campaign feedback loop | ✗ | ✅ Responders → next lookalike seed |
| CSV columns | 18 | ✅ 52 columns (6 groups: contact, company, intelligence, outreach, personalization variables, metadata) |

**Expected reply rate improvement:** v1.0 ~1% → v2.0 target 5–8%

### Sequence Variants (v2.0 — Built 2026-06-21)

| File | Variant Code | Persona | Trigger | Emails |
|------|-------------|---------|---------|--------|
| `sequences/vpSales-v1.md` | `VPSales_v1` | New VP Sales | H5, no post, no compound | 5 |
| `sequences/vpSales-postReference.md` | `VPSales_PostReference` | New VP Sales | H5 + LinkedIn post quote | 5 |
| `sequences/vpSales-postRaise-compound.md` | `VPSales_PostRaise_Compound` | New VP Sales | H1+H5 compound | 5 |
| `sequences/vpSales-displacement.md` | `VPSales_Displacement` | New VP Sales | H7 + competitor signal | 5 |
| `sequences/cro-v1.md` | `CRO_v1` | Established CRO / VP Sales | H1, H4, H6 | 5 |
| `sequences/founder-v1.md` | `Founder_v1` | CEO / Founder | H3 | 5 |
| `sequences/champion-thread-b.md` | `ChampionFollow_v1` | SDR Manager / RevOps | Thread B, Tier 1 | 4 |

**Total: 34 emails | All merge variables documented in `sequences/README.md`**

### New Brain Files (v2.0)

| File | Purpose |
|------|---------|
| `brain/proof-library.md` | 3 deep proof points with full situation/action/outcome/quote + Loom scripts |
| `brain/sdr-onboarding.md` | Complete SDR onboarding — any SDR can operate the engine independently |
| `brain/linkedin-content-calendar.md` | 12 drafted posts for 4-week launch — pre-engagement credibility layer |
| `skills/signal-monitor/SKILL.md` | Updated: daily signal detection protocol with re-engagement queue check |
| `skills/multi-thread/SKILL.md` | New: Thread A/B/C orchestration with pause rules and timing |
| `engine/re-engagement-queue.md` | Updated: full protocol with 3 re-engagement templates + Prism Analytics seeded |

**First list to build:** H5 (New VP Sales Window) — highest urgency, highest meeting conversion rate.
**Run command:** Ask Claude to run `SELLL-layer-2` skill.

**Stack confirmed: Free Stack v1.0 (2026-06-23)**
| Blocker | Status | Tool |
|---------|--------|------|
| Sending domain warmup | ✅ In progress | team.selll.io — 21-day minimum |
| APOLLO_API_KEY | ✅ Configured | Set in .env — 2026-06-23 |
| HUNTER_API_KEY | ✅ Configured | Set in .env — 2026-06-23 |
| HUBSPOT_ACCESS_TOKEN | ✅ Configured | pat-na1-* token set in .env |
| HUBSPOT_PORTAL_ID | ✅ Configured | 43603832 — set in .env — 2026-06-23 |
| HUBSPOT_PORTAL_ID | ⚠️ Pending | Visible in any HubSpot URL (app.hubspot.com/contacts/XXXXXXX/) |
| ANTHROPIC_API_KEY | ⚠️ Pending | console.anthropic.com → API Keys |
| N8N_INSTANCE_URL | ⚠️ Pending | Deploy n8n on railway.app (free tier) |
| SLACK_WEBHOOK_URL | ⚠️ Pending | api.slack.com → Apps → Incoming Webhooks |
| WAALAXY_WEBHOOK_URL | ⚠️ Pending | Waalaxy Chrome extension setup (LinkedIn automation) |
| PANDADOC_API_KEY | ⚠️ Pending | pandadoc.com → Settings → Integrations → API |
| DOCUSIGN_INTEGRATION_KEY | ⚠️ Pending | developers.docusign.com → Apps and Keys |

**CRITICAL account path during warmup:** While team.selll.io warms up (3 weeks), CRITICAL urgency accounts (ClearPath-style, <10 days) route to LinkedIn-first via Expandi (DM + connection request) instead of email. This is handled automatically by linkedin-automation skill when sequence_status = "Email Warmup In Progress".

---

## Layer 3: Campaign Execution + Intelligence ✅ BUILT v1.0

> Master skill: `skills/selll/layer-3/SKILL.md`
> Status: Built — awaiting API keys + domain warmup before first live run
> Aaron's daily time while running: 10 minutes

### Layer 3 Architecture

5-phase self-managing campaign execution system.

| Phase | Steps | Purpose | Automation |
|-------|-------|---------|-----------|
| Phase 1: Campaign Launch | 1A–1H | Pre-launch verification, Instantly setup, HeyGen batch, Expandi start, webhook activation | 95% automated — Aaron approves Go/No-Go |
| Phase 2: Active Execution | 2A–2I | Email cadence, BIS real-time scoring, reply routing, thread escalation, superpowers | 98% automated — Aaron: 5-min comment queue |
| Phase 3: HOT Conversion | 3A–3E | Speed-to-book, ADB, discovery call, post-call extraction, auto-proposal | HOT: 2-hour Aaron SLA. MEETING_REQUEST: 60s auto |
| Phase 4: Health Intelligence | 4A–4E | Real-time dashboard, threshold alerts, deliverability, SAE, weekly signal scan | 100% automated — alerts fire only on breach |
| Phase 5: Close + Harvest | 5A–5D | Debrief, hypothesis update, buyer language, re-engagement, responder seed | 80% automated — learning loops: 30 min Aaron |

### Layer 3 Superpowers (9 — not available in any off-the-shelf tool)

| # | Superpower | File |
|---|-----------|------|
| 1 | Behavioral Intent Score (BIS) — reply_prob updates in real time | `layer-3/references/behavioral-intent-tracker.md` |
| 2 | Compound Engagement Detector (CED) — account-level buying signal | `layer-3/references/compound-engagement-detector.md` |
| 3 | Sequence Adaptation Engine (SAE) — Email 3/4/5 variant from engagement data | `layer-3/SKILL.md` → Step 2H |
| 4 | LinkedIn Engagement Mirror (LEM) — post engagement → warm DM convergence | `layer-3/SKILL.md` → Step 2G |
| 5 | Auto-Discovery Brief (ADB) — HOT reply → 1-page brief in Slack (0 prep time) | `layer-3/references/hot-reply-protocol.md` |
| 6 | Speed-to-Book Auto-Assist — holding email if 1h SLA not met | `layer-3/references/hot-reply-protocol.md` |
| 7 | Ghost Positive Video Re-activation — 5+ opens, no reply → new HeyGen video | `layer-3/SKILL.md` → Step 2F |
| 8 | Competitor Displacement Injection — mid-campaign signal → sequence override | `layer-3/SKILL.md` → Step 4C |
| 9 | Auto-Proposal Pre-generation — discovery score ≥ 18 → draft proposal ready | `layer-3/SKILL.md` → Step 3E |

### Layer 3 Skills + Files

| Item | Status | File |
|------|--------|------|
| Master orchestration skill | ✅ Built | `skills/selll/layer-3/SKILL.md` |
| BIS technical reference | ✅ Built | `skills/selll/layer-3/references/behavioral-intent-tracker.md` |
| CED technical reference | ✅ Built | `skills/selll/layer-3/references/compound-engagement-detector.md` |
| HOT Reply Protocol reference | ✅ Built | `skills/selll/layer-3/references/hot-reply-protocol.md` |
| Campaign coordination directory | ✅ Built | `engine/campaigns/README.md` |
| inbox-reply skill (webhook) | ✅ Built | `skills/inbox-reply/SKILL.md` |
| multi-thread skill | ✅ Built | `skills/selll/multi-thread/SKILL.md` |
| meeting-automation skill | ✅ Built | `skills/selll/meeting-automation/SKILL.md` |
| signal-monitor skill | ✅ Built | `skills/selll/signal-monitor/SKILL.md` |
| deal-nurture skill | ✅ Built | `skills/selll/deal-nurture/SKILL.md` |
| revenue-reporting skill | ✅ Built | `skills/selll/revenue-reporting/SKILL.md` |
| re-engagement skill | ✅ Built | `skills/selll/re-engagement/SKILL.md` |
| ai-personalization skill | ✅ Built | `skills/selll/ai-personalization/SKILL.md` |
| video-outreach skill | ✅ Built | `skills/selll/video-outreach/SKILL.md` |
| linkedin-automation skill | ✅ Built | `skills/selll/linkedin-automation/SKILL.md` |

### Layer 3 Blockers (Free Stack v1.0 — 2026-06-23)

| Blocker | Status | Note |
|---------|--------|------|
| APOLLO_API_KEY | ✅ Configured | Set in .env — 2026-06-23 |
| WAALAXY_WEBHOOK_URL | ⚠️ Pending | Replaces Expandi — 80 invites/month free |
| LOOM_API_KEY | ⚠️ Pending | Replaces HeyGen — Ghost Positive videos (manual record) |
| ANTHROPIC_API_KEY | ⚠️ Pending | ADB + reply classification |
| HUBSPOT_ACCESS_TOKEN | ✅ Configured | pat-na1-* set in .env |
| HUBSPOT_PORTAL_ID | ✅ Configured | 43603832 — set in .env — 2026-06-23 |
| N8N_INSTANCE_URL | ⚠️ Pending | Self-hosted on Railway (free) |
| SLACK_WEBHOOK_URL | ⚠️ Pending | All engine alerts |
| team.selll.io warmup | ✅ In progress | 21-day minimum — already running |
| Aaron's Devolon VP Sales name confirmation | ⚠️ Unconfirmed | Blocks Devolon sequences |
| Stefan Golz quote confirmation | ⚠️ Unconfirmed | Paraphrase only until confirmed |

### Active Campaigns

| Campaign File | Hypothesis | Launch | Phase | Status |
|--------------|-----------|--------|-------|--------|
| (awaiting domain warmup + API keys) | — | — | — | — |

---

## Layer 4: Pipeline Intelligence ✅ BUILT v1.0

> Master skill: `skills/selll/layer-4/SKILL.md`
> Deal tracker: `engine/deals.md`
> Status: Built — awaiting first live campaign for live deal data

### Layer 4 Architecture

5-phase pipeline management from HOT reply → signed contract.

| Phase | Purpose | Automation |
|-------|---------|-----------|
| Phase 1: Deal Intake | Receives HOT/MEETING_REQUEST from Layer 3, creates deal | Fully automated |
| Phase 2: Post-Discovery Nurture | Multi-stage nurture sequences, multi-stakeholder | 85% automated |
| Phase 3: Proposal Intelligence | Auto-generates proposals, tracks opens/views | 90% automated |
| Phase 4: Close Assist | Contract execution, executive pull-through, competitive | 80% automated |
| Phase 5: Pipeline Health | Daily DHS dashboard, stall detection, forecast | Fully automated |

### Deal Health Score (DHS)

7-dimension deal health score (0-100). Updated daily by n8n `selllo-dhs-update`.
Reference: `skills/selll/layer-4/references/deal-health-scoring.md`

| Threshold | Status | Auto-Action |
|-----------|--------|-------------|
| 80-100 | 🟢 GREEN | Weekly touch only |
| 60-79 | 🟡 AMBER | Slack alert, accelerate nurture |
| 40-59 | 🔴 RED | Stall alert, call queued |
| < 40 | 💀 CRITICAL | Emergency escalation |

### Layer 4 Files

| Item | Status | File |
|------|--------|------|
| Master orchestration skill | ✅ Built | `skills/selll/layer-4/SKILL.md` |
| Deal Health Scoring reference | ✅ Built | `skills/selll/layer-4/references/deal-health-scoring.md` |
| Live deal tracker | ✅ Built | `engine/deals.md` |
| Call log | ✅ Built | `engine/call-log.md` |
| Cold Call amplifier | ✅ Wired in | `skills/selll/cold-call/SKILL.md` — Day 3/8 + DHS escalation |

### Layer 4 n8n Workflows

| Workflow | Trigger |
|----------|---------|
| `selllo-deal-intake` | HOT/MEETING_REQUEST from Layer 3 |
| `selllo-dhs-update` | Daily 05:30 UTC |
| `selllo-stall-detector` | Daily 05:30 UTC |
| `selllo-proposal-tracking` | DocuSign/PandaDoc webhook |
| `selllo-contract-signed` | DocuSign signed → Layer 5 |
| `selllo-pipeline-forecast` | Every Friday 06:00 UTC |

### Pipeline Metrics (Live)

| Metric | This Week | Last Week | 30-Day Avg | Target |
|--------|-----------|-----------|------------|--------|
| Active deals | 0 | — | — | — |
| Deals won | 0 | — | — | — |
| Pipeline value (weighted) | $0 | — | — | — |
| Avg DHS | — | — | — | 70+ |
| Stalled deals | 0 | — | — | 0 |

---

## Layer 5: Close + Expand ✅ BUILT v1.0

> Master skill: `skills/selll/layer-5/SKILL.md`
> Client tracker: `engine/clients.md`
> Status: Built — awaiting first deal close for activation

### Layer 5 Architecture

5-phase client journey from contract signed → long-term revenue + referral machine.

| Phase | Days | Purpose | Automation |
|-------|------|---------|-----------|
| Phase 1: Onboarding | Day 0-7 | Welcome, kickoff, access sharing | 75% automated |
| Phase 2: Activation | Day 8-30 | System build, ICP workshop, campaign launch | 60% automated |
| Phase 3: Results Harvest | Day 31-90 | Campaign live, proof library, referral arm | 80% automated |
| Phase 4: Expand Revenue | Day 91+ | Renewal, upsell, multi-seat, new vertical | 70% automated |
| Phase 5: Advocacy | Ongoing | Referrals, case study, testimonial | 75% automated |

### Client Health Score (CHS)

5-dimension client health score (0-100). Updated weekly by n8n `selllo-client-chs-update`.

| Threshold | Status | Aaron Action |
|-----------|--------|-------------|
| 80-100 | 🟢 GREEN | Schedule referral ask |
| 60-79 | 🟡 AMBER | Proactive check-in |
| 40-59 | 🔴 RED | Immediate intervention |
| < 40 | 💀 CRITICAL | Emergency protocol |

### Layer 5 Files

| Item | Status | File |
|------|--------|------|
| Master orchestration skill | ✅ Built | `skills/selll/layer-5/SKILL.md` |
| Client activation reference | ✅ Built | `skills/selll/layer-5/references/client-activation.md` |
| Expand protocol reference | ✅ Built | `skills/selll/layer-5/references/expand-protocol.md` |
| Active client tracker | ✅ Built | `engine/clients.md` |
| Referral engine (wired in) | ✅ Wired in | `skills/selll/referral-engine/SKILL.md` — Day 45 arm |
| Deal nurture (wired in) | ✅ Wired in | `skills/selll/deal-nurture/SKILL.md` — all stages |

### Layer 5 n8n Workflows

| Workflow | Trigger |
|----------|---------|
| `selllo-client-onboarding` | Contract signed (from Layer 4) |
| `selllo-client-chs-update` | Weekly Sunday 06:00 UTC |
| `selllo-client-milestone` | Day 30/45/60/90 timers |
| `selllo-referral-arm` | Day 45 + CHS ≥ 75 |
| `selllo-renewal-arm` | 60 days before contract end |
| `selllo-expansion-check` | Monthly + CHS event |
| `selllo-case-study-arm` | Day 90 + results ≥ 70% of promised |

### Client Metrics (Live)

| Metric | Value | Target |
|--------|-------|--------|
| Active clients | 0 | — |
| Average CHS | — | 75+ |
| Total MRR | $0 | — |
| NRR (net revenue retention) | — | 110%+ |
| Referrals generated | 0 | 30-50% of clients |

---

## Layer 6: Optimize — Intelligence Flywheel ✅ BUILT v1.0

> Master skill: `skills/selll/layer-6/SKILL.md`
> Status: Built — flywheel starts running with first campaign data

### Layer 6 Architecture

Weekly optimization + monthly deep review + quarterly strategy + continuous flywheel.

| Cadence | Protocol | Output |
|---------|---------|--------|
| Weekly (Friday) | Pull all data → Claude analysis → optimization report | MUST DO / TEST / STOP / SCALE actions |
| Monthly (1st Friday) | Deep review → brain update → ICP refinement → copy winners | Brain version bump |
| Quarterly (1st Monday) | Vertical expansion decision → new hypothesis → strategy | Vertical playbook / new H |
| Continuous | 8 intelligence feedback loops (L1→L2→L3→L4→L5→L6) | Compounding performance |

### The 8 Intelligence Feedback Loops

| Loop | From | To | What Flows |
|------|------|----|-----------|
| 1. ICP Improvement | L3/L4 HOT data | L1 ICP | Attributes of actual buyers → scoring adjustments |
| 2. Sequence Optimization | L3 email data | L2/L3 sequences | Subject line winners, copy improvements |
| 3. Discovery → Proof | L4 discovery notes | L1 proof library | Confirmed pain → verified proof points |
| 4. Objection Learning | L4 call data | L1 objection bank | New objections → new counters |
| 5. Reply Language → VOC | L3 HOT replies | L1 voc-library | Buyer phrases → sequence copy |
| 6. Win → Lookalike | L5 client data | L2 list building | Closed client profile → next list |
| 7. Call Timing | L4 call log | L4 cold-call | Best connect windows → call queue order |
| 8. Hypothesis Performance | All layers | L1 hypothesis set | HPS scores → retire/promote/generate |

### Layer 6 Files

| Item | Status | File |
|------|--------|------|
| Master orchestration skill | ✅ Built | `skills/selll/layer-6/SKILL.md` |
| Hypothesis optimizer reference | ✅ Built | `skills/selll/layer-6/references/hypothesis-optimizer.md` |
| Engine flywheel reference | ✅ Built | `skills/selll/layer-6/references/engine-flywheel.md` |

### Layer 6 n8n Workflows

| Workflow | Trigger |
|----------|---------|
| `selllo-weekly-optimization` | Every Friday 06:00 UTC |
| `selllo-monthly-review` | First Friday each month |
| `selllo-quarterly-strategy` | First Monday each quarter |
| `selllo-ab-test-result` | 7 days after test starts |
| `selllo-flywheel-loop` | On each HOT reply, win, loss, discovery |
| `selllo-brain-version` | On major brain update |

### Optimization Metrics (Live)

| Metric | Month 1 Actual | Month 3 Target | Month 6 Target | Month 12 Target |
|--------|---------------|----------------|----------------|----------------|
| Email reply rate | — | 3-5% | 4-6% | 5-8% |
| HOT conversion rate | — | 30-40% | 35-45% | 40-50% |
| Reply → meeting | — | 40-50% | 45-55% | 50-60% |
| Days cold → close | — | 75-90d | 60-75d | 45-60d |
| Brain version | v2.0 | v2.2 | v2.4 | v3.0 |

---

## Amplifier Status

| Amplifier | Status | Wired To | Activates When |
|-----------|--------|---------|---------------|
| Cold Call | ✅ Built + Wired | Layer 4 (Day 3/8 + DHS escalation) | First campaign launch |
| LinkedIn Content Machine | ✅ Built + Wired | Layer 3 LEM (post engager routing) | Week 1 of first campaign |
| Video Outreach (HeyGen) | ✅ Built + Wired | Layer 3 (reply_prob ≥ 70 + Ghost Positive) | Aaron avatar recorded |
| Referral Engine | ✅ Built + Wired | Layer 5 (Day 45 + CHS ≥ 75) | First client Day 45 |
| Multi-Thread | ✅ Built + Wired | Layer 3 (Thread B Day 5, Thread C Day 8) | First Tier 1 list |
| Re-Engagement | ✅ Built + Wired | Layer 3 (NOT_NOW → queue → trigger) | First NOT_NOW reply |

---

## DNC List

| Company | Reason | Date Added |
|---------|--------|------------|
| (none yet) | — | — |

---

## Signal Events (Recent)

| Date | Company | Signal | Urgency | Action Taken |
|------|---------|--------|---------|--------------|
| (monitoring not yet started) | — | — | — | — |

---

## Weekly Reporting

| Week | Report Generated | Key Wins | Key Issues | Next Week Priority |
|------|-----------------|----------|------------|-------------------|
| (not yet started) | — | — | — | Layer 2 Activation |

---

## Skill Ownership Map

Each skill updates only its designated section:

| Skill | Owns These Fields |
|-------|------------------|
| `list-building` | Layer 2 status, Active Campaigns |
| `lead-scoring` | Layer 2 Phase 2E scoring |
| `signal-monitor` | Signal Events table, signal-watchlist.md |
| `meeting-automation` | Layer 3 HOT reply + meeting booking |
| `deal-nurture` | Layer 4 — nurture sequence per stage |
| `layer-4` | engine/deals.md — DHS, stage, pipeline forecast |
| `layer-5` | engine/clients.md — CHS, milestones, expand |
| `revenue-reporting` | engine/reports — weekly/monthly reports |
| `layer-6` | Weekly optimization, brain versions |
| `multi-thread` | Amplifier Status — Multi-Thread |
| `referral-engine` | engine/referrals.md — Layer 5 referral pipeline |
| `re-engagement` | engine/re-engagement-queue.md |
| `video-outreach` | engine/video-log.md |
| `cold-call` | engine/call-log.md, engine/call-queue.md |

**Rule:** No skill overwrites another skill's rows. Append, don't replace.

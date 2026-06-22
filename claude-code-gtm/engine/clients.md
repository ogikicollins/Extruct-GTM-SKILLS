# Active Client Tracker — SELLL.io
> Managed by: Layer 5 Close + Expand
> Updated by: n8n workflow `selllo-client-chs-update` weekly
> Aaron reviews: weekly during client check-ins
> Read-only from: Layer 6 Optimize (monthly pull)

---

## Client Health Score (CHS) Reference

| Score | Status | Meaning | Aaron Action |
|-------|--------|---------|-------------|
| 80-100 | 🟢 GREEN | Healthy, on track, schedule referral ask | Monthly check-in |
| 60-79 | 🟡 AMBER | Needs attention, potential concern building | Bi-weekly proactive check-in |
| 40-59 | 🔴 RED | At risk, concern raised or results behind | Immediate personal call |
| < 40 | 💀 CRITICAL | Churn risk | Aaron escalates, emergency protocol |

---

## Active Clients

| Company | Primary Contact | Title | Phase | CHS | ACV | Contract Start | Day # | Next Milestone | Referral Asked | Case Study |
|---------|----------------|-------|-------|-----|-----|--------------|-------|---------------|---------------|-----------|
| (no active clients — awaiting first deal close) | | | | | | | | | | |

---

## Client Phase Reference

| Phase | Days | Focus |
|-------|------|-------|
| Phase 1: Onboarding | Day 0-7 | Kickoff, access sharing, brain calibration |
| Phase 2: Activation | Day 8-30 | System build, ICP workshop, first campaign launch |
| Phase 3: Results Harvest | Day 31-90 | Campaign live, results capture, proof library |
| Phase 4: Expand Revenue | Day 91+ | Renewal, upsell, multi-seat, new vertical |
| Phase 5: Advocacy | Ongoing | Referrals, case study, LinkedIn testimonial |

---

## CHS Distribution (live)

| Score Band | Count | Clients |
|-----------|-------|--------|
| 🟢 80-100 GREEN | 0 | — |
| 🟡 60-79 AMBER | 0 | — |
| 🔴 40-59 RED | 0 | — |
| 💀 < 40 CRITICAL | 0 | — |

---

## Upcoming Milestones

| Company | Milestone | Due Date | Status |
|---------|---------|---------|--------|
| (none yet) | | | |

---

## Referral Pipeline (from clients)

| Referral Source | Referral Contact | Company | Date Referred | Stage | Notes |
|----------------|-----------------|---------|--------------|-------|-------|
| (none yet) | | | | | |

---

## Client Revenue Tracker

| Company | Setup ACV | Retainer/mo | Total MRR Contribution | Renewal Date | Expand Revenue |
|---------|----------|------------|----------------------|-------------|---------------|
| (none yet) | | | | | |

**Total MRR:** $0
**Total ACV (setup):** $0
**Total expand revenue:** $0

---

## Before/After Documentation

For each active client, before-state captured at Day 1 kickoff:

| Company | Before: Reply Rate | Before: Meetings/mo | Before: Sequencer | Before: ICP Last Updated | Before: SDR Count |
|---------|------------------|---------------------|------------------|------------------------|-----------------|
| (none yet) | | | | | |

---

## Case Studies (Published / In Progress)

| Company | Results | Status | Published | Link |
|---------|---------|--------|-----------|------|
| Holz Concepts (Stefan Golz) | 0.6% → 4.2% reply, 31 meetings month 2 | ⚠️ Quote pending | No | — |
| Devolon | SDR productivity 35 → 200+ daily conversations | ⚠️ Name pending | No | — |
| Flow Meditation (Ellie Nash) | Founder out of deals in 90 days | Partial | No | — |

---

## Churn Record

| Company | Contract Start | Churn Date | ACV Lost | Reason | Learning | → losses.md |
|---------|--------------|-----------|---------|--------|---------|------------|
| (none yet) | | | | | | |

---

## Client Metrics (Cumulative)

| Metric | Value | Target |
|--------|-------|--------|
| Total clients (all time) | 0 | — |
| Active clients | 0 | — |
| Average CHS | — | 75+ |
| Average contract value (setup) | — | $15K |
| Average retainer | — | $3K/mo |
| Average client lifetime | — | 18+ months |
| Net Revenue Retention (NRR) | — | 110%+ |
| Referral generate rate | — | 30-50% of clients |
| Case study completion rate | — | 50%+ of clients |
| Churn rate | — | < 10%/year |

---

## Automation Notes

- **CHS updates**: `selllo-client-chs-update` runs weekly Sunday 06:00 UTC
- **Milestone prompts**: `selllo-client-milestone` fires on Day 30/45/60/90 timers
- **Referral arm**: `selllo-referral-arm` fires on Day 45 when CHS ≥ 75
- **Renewal arm**: `selllo-renewal-arm` fires 60 days before contract end date
- **Expansion check**: `selllo-expansion-check` fires monthly per active client
- **Case study arm**: `selllo-case-study-arm` fires on Day 90 if results ≥ 70% of promised

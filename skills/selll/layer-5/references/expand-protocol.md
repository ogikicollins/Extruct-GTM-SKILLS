# Expand Protocol — Revenue Growth Beyond First Contract
> Component of: Layer 5 Close + Expand — Phase 4
> Updated: 2026-06-22

---

## The Expand Principle

The cheapest deal to close is always the next one with an existing happy client. SELLL's business model has two revenue streams from every client engagement:

1. **Initial engagement**: $15K setup + $3K/month retainer (90-day build)
2. **Expansion revenue**: Every additional seat, vertical, hypothesis, or renewal

A single client at Month 12 could represent $50K+ in total revenue if expand is handled systematically. This document defines exactly when and how to expand every client account.

---

## Expansion Revenue Model

```
BASE ENGAGEMENT (Day 0-90+):
  Setup: $15,000 (one-time)
  Retainer: $3,000/month
  Year 1 base: $15K + $36K = $51K

EXPANSION PATHS:
  Vertical expansion:     +$6K setup + $1,500/month = +$6K + $18K/year
  2nd-seat expansion:     +$8K setup + $1,500/month = +$8K + $18K/year
  Marketing variant:      +$12K setup + $2,500/month = +$12K + $30K/year
  New hypothesis sprint:  +$4K (one-time, included in retainer thereafter)
  Annual renewal:         $3K/month (auto-renews, no new setup)

EXAMPLE YEAR 2 ACCOUNT (1 expansion):
  Base retainer: $3K × 12 = $36K
  Vertical expansion: $6K setup + $1.5K × 10 = $21K
  Year 2 total: $57K (vs. Year 1: $51K including setup)

NRR target: 110% (each client is worth 10% more next year than this year)
```

---

## Expansion Trigger Table

n8n checks these triggers monthly for each active client:

| Trigger | What to Look For | Expansion Offer | Timeline |
|---------|----------------|----------------|---------|
| New sales hire | Client hires 2nd SDR or new VP Sales | 2nd-seat SELLL | Offer when hire confirmed |
| New vertical | Client launches new product or enters new market | Vertical expansion | Offer at 90-day review or when announced |
| New hypothesis emerges | New market event creates urgency for client's buyers | Hypothesis sprint | Offer when signal detected |
| Marketing team request | Marketing leader asks about demand gen | B2B marketing variant | Offer at quarterly review |
| Results milestone | Client hits 2x promised meetings in 60 days | "Want to scale this?" | Offer at first-win check-in |
| CHS ≥ 85 for 30 days | Client health is excellent, relationship strong | Any relevant expansion | Natural expansion conversation |
| Client promotes | Client's VP Sales gets promoted to CRO | New CRO onboarding | Offer new sequence set for new role |
| Client M&A | Client acquires or merges with another company | Acquired entity setup | Offer at acquisition announcement |

---

## Expansion Conversation Scripts

### Type 1: New SDR Hire Expansion

**Context:** Client hired a 2nd SDR or a Head of SDR.

**Email (Aaron sends, personal):**
```
Subject: congrats on [Name] joining

[Client name],

Saw [New hire name] just joined [Company] as [title]. That's a milestone.

Quick thought: most companies at this stage try to onboard a new SDR into the
existing system. The ones that do it right build a second seat in the engine
alongside them — so the new hire is running SELLL from day 1, not trying
to learn it 90 days in.

We could build out a second seat in parallel — same infrastructure, different
targeting criteria (or same criteria, doubled volume). $8K build + $1,500/month
added to the existing retainer.

Worth a 20-minute call to sketch out what that looks like?

Aaron
```

### Type 2: Vertical Expansion

**Context:** Client is moving into a new vertical or launching a new ICP.

**Email:**
```
Subject: the [new vertical] expansion

[Client name],

You mentioned at our last check-in that [Company] is starting to move into
[new vertical]. I've been thinking about that.

The targeting logic we built for [current vertical] doesn't translate directly.
Different signals, different hypotheses, different proof points. But we can run
the same engine against [new vertical] as a parallel campaign — separate
sequences, separate tracking, separate results.

6-week build. $6K setup, $1,500/month for the additional vertical campaign.
The [current vertical] engine runs unchanged.

Does that make sense to explore at our next review?

Aaron
```

### Type 3: Results Milestone Expansion

**Context:** Client is seeing strong early results (2x target in 60 days).

**Email:**
```
Subject: let's scale this

[Client name],

You're at [N] meetings in [N] weeks. We said we'd target [N] in [N] months.

The engine has more capacity than we're using right now. We could expand the
contact volume by 50-100 contacts/week and run a second hypothesis (H[N] —
[name]) alongside H5.

The infrastructure is already built. This is an expansion, not a rebuild.
Cost: same retainer + campaign volume increase ($X/month for additional credits).

Your call. But the momentum is there if you want to push it.

Aaron
```

### Type 4: Marketing Variant

**Context:** Client's marketing leader has seen results and wants pipeline from marketing.

**Email:**
```
Subject: the marketing version

[Client name],

A few clients have asked whether SELLL works for marketing-led pipeline
(not just sales outbound). The honest answer: yes, with modifications.

The sales version targets buyers who have a current problem. The marketing version
targets buyers earlier — they don't know they have the problem yet. Different
sequences, different hypotheses, different content. Same engine underneath.

If [Marketing leader name] wants to explore this: 12-week build, $12K setup,
$2,500/month for the marketing campaign. Runs separately from your sales SELLL.

Happy to scope it out if there's appetite.

Aaron
```

---

## Annual Renewal Process

```
Day -60 (before contract end):
  n8n: Slack alert to Aaron: "RENEWAL APPROACHING — [Company]. Contract ends [date].
                              CHS: [score]. Start renewal conversation: [date -30]"

  Aaron: In next scheduled check-in, plant:
    "As we approach the end of the year, I want to make sure we have the next 12 months
     sorted. The retainer is $3K/month — I'll send a renewal contract next month.
     Any changes you'd want to make to scope for year 2?"

Day -30:
  Aaron: Send renewal contract ($3K/month, 12 months)
  — If CHS ≥ 80: offer no price increase (loyalty)
  — If expand opportunity identified: include expansion in renewal
  — If CHS 60-79: confirm renewal + have honest conversation about any concerns first

Day -14 (if not signed):
  Slack: "RENEWAL AT RISK — [Company]. Not signed. Call today."
  Aaron: Personal call (not email)

Day 0 (contract end):
  If signed: update clients.md, HubSpot, continue
  If not renewed: churn analysis → Layer 6, close in HubSpot, update institutional memory

Renewal pricing:
  Year 1: $3K/month
  Year 2: $3K/month (hold price — reward loyalty)
  Year 3: $3.5K/month (5% increase justified by inflation + value delivered)
  Year 3+: review annually
```

---

## Expansion Pipeline Tracking

Tracked in `engine/clients.md` expand section:

```
| Company | Expand Type | Offer Date | Status | ACV Added | Notes |
|---------|------------|-----------|--------|----------|-------|
| [Company] | 2nd seat | [date] | Exploring | $8K + $1.5K/mo | New SDR [Name] hired [date] |
```

---

## NRR Dashboard (Layer 6 Monthly)

```
NET REVENUE RETENTION REPORT — [Month]
────────────────────────────────────────────────────────────────────────
Active clients: [N]
MRR at period start: $[N]
MRR at period end: $[N]

Expansion revenue this month: $[N]
  - New setups (expansion): $[N]
  - Retainer increase: $[N]/month added
  - Renewals: [N] renewed, $[N] annual value locked

Churn this month: $[N] MRR lost
  - [Company] — reason: [churn category]

NRR: ([end MRR] / [start MRR]) × 100 = [%]
  Target: 110%+

NEXT ACTIONS:
  Expand opportunities to pursue this month:
  - [Company]: [trigger] → [offer type]
  - [Company]: [trigger] → [offer type]
────────────────────────────────────────────────────────────────────────
```

---

## Expand Success Benchmarks

| Metric | Target |
|--------|--------|
| % of clients with at least 1 expansion | 40% by Month 12 |
| Average time from contract to first expansion | 90-120 days |
| Expansion offer → accept rate | 30-50% |
| Annual renewal rate | 85%+ |
| NRR (net revenue retention) | 110%+ |
| Average ACV increase per client year 1 → year 2 | +20% |
| Referrals generated per client | 1-2 per client |

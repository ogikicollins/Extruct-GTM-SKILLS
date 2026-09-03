# Layer 6 — Optimize

Goal: make the engine smarter every week. Retire dead angles, double down on winners, feed new signals back into Layer 2. Month 3 should outperform Month 1 by design.

---

## 1. Weekly report (every Friday)

Pull from sequencer + `engine/` files. Template:

```
# InteractOne SEO Engine — Week of {date}

## Funnel (this week / cumulative)
Contacts added:        {n} / {N}
Emails sent:           {n} / {N}
Open rate:             {%}
Reply rate:            {%}     (target 4-7% positive)
Positive replies:      {n} / {N}
Teardowns delivered:   {n} / {N}
Audit calls held:      {n} / {N}
Paid audits sold:      {n} / {N}   ${value}
Retainers signed:      {n} / {N}   ${MRR}

## By hypothesis
| H | Sent | Pos reply % | Calls | Audits | Verdict |
|---|------|-------------|-------|--------|---------|
| H1 | ... | ... | ... | ... | keep/scale/retire |
| ... |

## By persona
| Persona | Pos reply % | Call show rate | Audit close % |

## Pipeline
Open deals: {n}   Weighted value: ${x}
Stalls flagged: {list}

## Deliverability
Bounce %: {x}   Spam complaints: {x}   Domain health: {ok/warn}

## Decisions for next week
- Scale: {hypothesis/segment}
- Retire: {hypothesis/segment}
- Test: {new angle}
- Throttle: {up/down, reason}
```

---

## 2. Feedback loops

| Loop | Cadence | Rule |
|---|---|---|
| **Hypothesis performance** | Weekly | Positive reply >4% over 50+ sends → scale list 2-3x, add video to Tier 2. <2% over 50 sends → retire, reallocate volume. |
| **Segment performance** | Weekly | Rank H1-H6 by audit-close rate, not reply rate. Shift Layer 2 build effort toward the top 2. |
| **Copy performance** | Bi-weekly | A/B subject lines and Email 1 opener. Winner becomes control. Kill any variant below control after 40 sends. |
| **Channel mix** | Monthly | Track pipeline source: cold email / LinkedIn / video-reply / referral / re-engagement. Invest where cost-per-opportunity is lowest. |
| **Objection patterns** | Monthly | If one objection appears in >30% of calls, add a pre-empt to Email 3 and the dossier. |
| **Teardown → call rate** | Weekly | If <40% of teardown-watchers book, the video ending is weak. Revise CTA. |
| **Dossier accuracy** | Per call | Rep flags any dossier fact that was wrong on the call. Fix the enrichment source. |
| **Before/after proof** | Per client at Day 90 | Every Day-90 QBR produces a new sourced case study. Add to `01-INTELLIGENCE.md` proof library. |

---

## 3. Signal monitor (runs Thursday, feeds Layer 2)

Scan the full universe + watchlist for new triggers:
- New platform migrations (BuiltWith history delta)
- New core-update losers (after each confirmed core update)
- New marketing/eCommerce leader hires (LinkedIn)
- New SEO job postings at ICP companies
- ICP contacts posting frustration about agencies / rankings / migrations (Sales Navigator alert)
- Tier 3 companies that now cross 55 on re-scoring

Output: `engine/signal-queue.csv` → these accounts enter Layer 2 enrichment → Layer 3 next batch.

---

## 4. Re-engagement

- Deferred (S6) and suppressed accounts are monitored. When a fresh trigger fires (migration, core-update hit, new leader), they re-enter at Layer 3 with a trigger-anchored Email 1 that references the new event, not the old thread.
- Re-engagement reply rate typically 40-60% of fresh cold. Cheapest pipeline in the engine.
- Log in `engine/re-engagement-log.md`.

---

## 5. KPI benchmarks (InteractOne targets vs industry)

| Metric | InteractOne target | Industry avg |
|---|---|---|
| Open rate | 45-60% | 20-30% |
| Reply rate (total) | 6-10% | 1-3% |
| Positive reply rate | 4-7% of sent | 0.5-1% |
| Teardown → call | 40-60% | n/a |
| Call → paid audit | 35-50% | n/a (proposal→close 20-35%) |
| Audit → retainer | 40-60% within 60 days | n/a |
| Cost per opportunity | < $600 | $1,000-2,500 |
| Speed reply → booked | < 2 hours | 24-48 hours |

---

## 6. Compounding model (what "better by design" looks like)

| Month | Positive reply rate | Audit calls / mo | Retainers / mo | Cumulative MRR |
|---|---|---|---|---|
| 1 | 3.0% | 3-4 | 0-1 | $0-9k |
| 2 | 4.0% | 5-7 | 1-2 | $10-25k |
| 3 | 5.0% | 6-8 | 2 | $20-45k |
| 4 | 5.5% | 7-9 | 2 | $35-65k |
| 6 | 6.5% | 8-10 | 2-3 | $60-110k |

Drivers of the lift: retired dead hypotheses, tighter Layer 2 queries, better teardown CTA, referral compounding, re-engagement volume, refreshed proof library.

---

## 7. Monthly + quarterly reviews

**Monthly (with Dwyer):** funnel review, hypothesis reallocation, capacity check (are we generating more opportunities than delivery can take? throttle accordingly), copy refresh.

**Quarterly:** re-run competitor map, re-pull TAM, decide whether to add a vertical (e.g. medical/lab supply, electrical distribution), review whether to raise sending volume or hold, update pricing against market.

---

## Layer 6 completion checklist

- [ ] Weekly report generated and sent every Friday
- [ ] Hypothesis and segment verdicts logged
- [ ] Signal monitor run Thursday, queue populated
- [ ] Re-engagement fired on any new triggers
- [ ] Proof library updated with any new Day-90 case study
- [ ] `01-INTELLIGENCE.md` hypotheses updated to reflect what is validated
- [ ] `engine-state.md` updated

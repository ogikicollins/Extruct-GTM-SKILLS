# 90-Day Build Plan

Owners: **GTM (SELLL)** builds the engine; **IO (InteractOne / Brian Dwyer)** supplies inputs and hits go. Reps deliver calls.

---

## Phase 1 — Foundation (Weeks 1-2)

| # | Task | Owner | Blocker if missing |
|---|---|---|---|
| 1 | Approve Layer 1 context, voice, positioning | IO | All copy |
| 2 | Deliver DNC list (clients, partners, active deals) | IO | List build |
| 3 | Pull 3 refreshed case-study numbers | IO | Email 3 proof |
| 4 | Procure API keys (`07 §2`) | IO + GTM | Automation |
| 5 | Buy + connect 2 cold domains, 4 mailboxes, set SPF/DKIM/DMARC | GTM | Sending |
| 6 | Start domain warmup (3 weeks) | GTM | Launch date |
| 7 | Build base universe + 6 segments (`02`) | GTM | Everything downstream |
| 8 | Enrich + tier companies, find + verify contacts | GTM | Sequences |
| 9 | Mini-audit top 20 Tier 1 accounts (`top_3_technical_issues`) | GTM | Email 1 personalization |
| 10 | Stand up n8n WF-1..WF-5, HubSpot pipeline, Cal.com event | GTM | Pipeline ops |
| 11 | Build `/programmatic-seo-teardown` landing page | IO (web team) | Email links |

**Exit criteria:** 400+ companies tiered, 600+ verified contacts, automations tested with dummy data, domains 50%+ warmed.

---

## Phase 2 — Launch (Weeks 3-4)

| # | Task | Owner |
|---|---|---|
| 12 | Generate Tier 1 + Tier 2 sequences (3 personas) | GTM |
| 13 | Record teardown Looms for first 20 Tier 1 accounts | GTM + rep |
| 14 | Run `email-response-simulation`, fix rejects | GTM |
| 15 | IO approves pre-send checklist | IO |
| 16 | Launch **H1 (post-migration) segment only**, 20 contacts/day | GTM |
| 17 | Reps on 2-hour reply SLA; daily Layer 4 run begins | Rep |
| 18 | Dwyer starts 1 LinkedIn teardown post / week | IO |
| 19 | Ramp to 60-80 contacts/day by end of week 4 if bounce < 2% | GTM |

**Exit criteria:** campaign live, first teardowns delivered, first audit calls booked, deliverability green.

---

## Phase 3 — Scale + operate (Weeks 5-8)

| # | Task | Owner |
|---|---|---|
| 20 | Add H4, H2, H6 segments to sending rotation | GTM |
| 21 | Turn on LinkedIn touch sequence + multi-thread for Tier 1 | GTM |
| 22 | First weekly reports; first hypothesis verdicts | GTM |
| 23 | First paid audits sold and delivered | Rep + delivery |
| 24 | Capture before-state on any signed retainer | Delivery |
| 25 | Cold-call amplifier on Tier 1 (Day 8 touch) | Rep |
| 26 | Publish first new results story from an early audit | IO |

**Exit criteria:** 3-4 audit calls/week, 1-2 paid audits closed, engine running on its weekly cadence without manual chase.

---

## Phase 4 — Optimize + hand off (Weeks 9-13)

| # | Task | Owner |
|---|---|---|
| 27 | Retire lowest hypothesis, reallocate volume | GTM |
| 28 | Add H3 + H5 segments | GTM |
| 29 | First retainers converting from delivered audits | Dwyer |
| 30 | Referral asks on any Day-60 green-health client | Rep |
| 31 | Re-engagement queue live (deferred + new triggers) | GTM |
| 32 | Full documentation handoff: every file, workflow, login, SOP to InteractOne | GTM |
| 33 | Train an IO owner to run the weekly + Thursday cadence | GTM |

**Exit criteria (Day 90):** InteractOne can run the engine without SELLL. Targets from `README.md` hit or on track.

---

## Critical path

```
API keys + domains (wk1) ──► warmup 3 wks ──► launch (wk3)
Base list (wk1-2) ──► enrich/tier (wk2) ──► sequences (wk3) ──► launch (wk3)
Mini-audits (wk2) ──► teardown Looms (wk3) ──► launch (wk3)
n8n + HubSpot + Cal.com (wk2) ──► Layer 4 daily (wk3+)
```

The two things that will slip the launch date: API key procurement and domain warmup. Start both on Day 1.

---

## What SELLL needs from InteractOne, in order

1. Day 1: DNC list, API key budget approval, web team briefed on landing page
2. Day 3: context/voice/positioning sign-off
3. Day 5: 3 refreshed case-study numbers
4. Week 2: rep(s) assigned, calendars connected, 2-hour reply SLA committed
5. Week 3: pre-send checklist approval (the go/no-go)
6. Ongoing: Dwyer 1 LinkedIn post/week, joins HOT calls, personal note on stalled deals

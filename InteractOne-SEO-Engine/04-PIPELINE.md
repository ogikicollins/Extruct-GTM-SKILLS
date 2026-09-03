# Layer 4 — Pipeline

Goal: capture every positive signal, score it, respond fast, book the audit call, brief InteractOne before every call. Runs daily.

---

## 1. Reply classification + routing

Fetch unread replies daily (n8n webhook → classifier, see `07-TECH-STACK`). Classify into one of these, then route:

| Class | Definition | Route | SLA |
|---|---|---|---|
| **Interested** | "send it", "yes", "tell me more", any positive | Send teardown video same day + soft calendar link | < 2 hours |
| **Meeting request** | asks to talk / picks a time | Confirm + calendar link + trigger dossier | < 1 hour |
| **Question** | asks price, scope, "who are you" | Answer in 3 sentences + reoffer teardown | < 4 hours |
| **Objection** | "have an agency", "not now", "do it in-house", "does SEO work with AI" | Objection response (see `05-CLOSE §5`) + leave door open | < 24 hours |
| **Referral** | "talk to {name}" | Thank, ask for intro, start light sequence on the named person | < 24 hours |
| **Not interested** | clear no | One-line thanks, move to suppressed, set 6-month re-check | < 24 hours |
| **Unsubscribe** | opt-out | Remove, sync DNC, confirm | < 24 hours |
| **Auto-reply / OOO** | bounce, vacation | Pause sequence, resume on return date | auto |

**Every response is drafted by the engine and sent by a person.** No auto-send to prospects.

### Response templates

**Interested:**
> Great. Here it is: {loom_link}. Three issues, rough dollar impact at the end. It is yours to share with anyone internally. If you want the full ranked fix list after watching, grab 20 minutes here: {calendar_link}.

**Question (price):**
> Fair question. The teardown is free. If you want the full picture, we do a fixed-fee technical and migration audit, usually $3.5k to $7.5k depending on catalog size, which gives you a prioritized 90-day roadmap you can run with anyone. Retainers start around $5k a month. Want the video first?

**Referral:**
> Appreciate it. Mind connecting us, or is it better if I reach out to {name} directly and mention you pointed me their way?

---

## 2. Lead scoring model (0-100)

Re-score every engaged account daily. Combines fit (from Layer 2) + behavior + timing.

```
Lead Score =
    (Layer 2 tier score      x 0.30)     # firmographic + segment fit, 0-100
  + (Behavior score          x 0.40)     # 0-100, see below
  + (Timing score            x 0.20)     # 0-100, see below
  + (Warm path bonus         x 0.10)     # 100 if referral or LinkedIn-content inbound, else 0
```

**Behavior score:**
| Signal | Points (cumulative, cap 100) |
|---|---|
| Positive reply | 60 |
| Meeting request | 90 |
| Watched teardown video (Loom notify) | +25 |
| Opened 3+ emails, no reply | 20 |
| Clicked landing page | +15 |
| LinkedIn accepted + engaged | +15 |
| Forwarded internally (visible in thread / new contact appears) | +20 |

**Timing score:**
| Signal | Points |
|---|---|
| Migration in last 3 months | 90 |
| Migration 3-6 months | 70 |
| Core update hit in last 6 weeks | 85 |
| New marketing leader < 60 days | 75 |
| Job posting for SEO role open now | 60 |
| None active | 20 |

**Thresholds:**
- **HOT (80-100):** book the call now. Dossier within 24h. Dwyer joins the call.
- **WARM (60-79):** teardown delivered, nurture via `deal-nurture` (Layer 5), 1 touch / 3 days.
- **COOL (40-59):** stays in sequence, monitor for a new signal.
- **COLD (<40):** finish sequence, then suppressed list.

---

## 3. Meeting booking

The "meeting" is a **20-minute audit-scoping call**, not a generic discovery call. Frame it that way in every confirmation.

**Flow:**
1. Positive reply or video watched → offer `{calendar_link}` (Cal.com, 20-min "SEO Teardown Review" event type).
2. On booking: auto-confirmation email (drafted, person sends) + calendar invite with a 2-line agenda ("We walk your teardown, you get the ranked fix list, we scope whether a paid audit makes sense. No slides.").
3. T-24h: reminder email + dossier delivered to InteractOne rep + Dwyer.
4. T-1h: SMS/Slack nudge to the rep.
5. No-show: same-day "want to grab another time?" + one retry in 48h, then back to nurture.

**Speed-to-lead SLA:** positive reply to booked call < 2 hours during business hours. This is the single highest-leverage metric in the engine.

---

## 4. Pre-call dossier (auto-generated 24h before every call)

Template, filled by `account-research`:

```
# Pre-Call Dossier — {company}
Call: {datetime} · Rep: {rep} · Contact: {name}, {title}

## The signal that got them here
{segment} · {signal_detail} · teardown watched: {yes/no}

## Their setup
Platform: {platform} ({version}, {age})   Catalog: ~{sku_count} SKUs
Organic: {organic_traffic} /mo, {organic_trend_12mo} over 12 mo
Paid: {paid_traffic} /mo, {paid_keywords} keywords
Estimated traffic gap: {traffic_gap_dollars} /mo

## The 3 issues we showed them (+ 2 we held back)
1-3: from teardown
4-5: {additional_issues}   ← use these live to show depth

## Buying team
{contact} — {title}, {tenure}
{contact 2} — likely economic buyer
In-house SEO: {0/1/2+}   Marketing team: {size}
Recent hire: {name/date or none}

## Competitors outranking them
{top 3 domains beating them on {head_term}}

## Entry angle for the call
{one sentence: e.g. "Lead with the faceted-nav crawl waste, it is the fastest visible win and proves the point about dev-level SEO."}

## Likely objections
{from 05-CLOSE §5, pre-selected for this account}

## The ask
Scope a fixed-fee audit ($X based on catalog size). If not ready, agree to a 30-day check-in.
```

---

## 5. Layer 4 outputs

| Artifact | Location |
|---|---|
| Reply log + classifications | `engine/reply-log.md` |
| Lead score board | `engine/lead-scores.csv` |
| Priority board (HOT/WARM/ACTIVE) | `engine/priority-board.md` |
| Meetings log | `engine/meetings-log.md` |
| Dossiers | `accounts/{slug}/dossier.md` |

**Daily run checklist:**
- [ ] All unread replies fetched and classified
- [ ] Responses drafted, reviewed, sent
- [ ] Lead scores refreshed
- [ ] HOT leads have a call booked or a booking email out
- [ ] Dossiers generated for tomorrow's calls
- [ ] `engine-state.md` pipeline counts updated

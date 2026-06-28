# ALIF Agency — Compounding Intelligence Loops
> SELLL.io GTM Engineering | 2026-06-28
> How the engine gets smarter every week and compounds pipeline without adding headcount

---

## The Core Principle

Every deal — won or lost — produces data. That data recalibrates the engine. A machine that only runs outreach is a campaign. A machine where outputs become inputs is a flywheel.

ALIF's engine has 6 compounding loops. Each loop closes a feedback cycle that most agencies leave open, meaning their Month 6 results look the same as Month 1.

---

## Loop 1: ICP Score Recalibration (Weekly)

**What happens:** Every Sunday at 8:00 AM GST, n8n pulls all deals that closed (WON or LOST) in the last 30 days and compares their ICP score at entry to their outcome.

**The analysis:**
```
Pull: all WON deals → avg ICP score at entry
Pull: all LOST deals → avg ICP score at entry
Pull: all WON deals by loss_reason = "budget" → avg ICP score
Pull: fastest-closing deals (discovery → signed ≤ 14 days) → ICP profile

If avg ICP score of WON deals > 75 consistently:
  → Lower the sequence entry threshold from 60 → 65
  → Fewer but higher-quality leads enter sequences

If deals scoring 85+ are losing on "budget":
  → Adjust budget_capacity scoring weight in Clay formula
  → Funding recency (< 90 days) becomes a harder gate

If "new CMO" signal type closes at 2x the rate of "funding" signal:
  → Prioritize CMO signals in monitor
  → Increase new_cmo signal_urgency score from 4 → 5
```

**Where this lives:**
- Google Sheets: `ICP Calibration Log` tab — weekly snapshot of score vs. outcome
- Clay: ICP Score formula updated manually by Kaya when pattern is confirmed over 3+ weeks
- Slack: Sunday 8:00 AM digest includes the calibration recommendation

**Compounding effect:** By Month 3, ALIF is only sequencing companies that look like the ones that already converted. The signal-to-noise ratio improves every cycle.

---

## Loop 2: Sequence Variant Kill / Scale (Weekly)

**What happens:** Every Sunday, n8n pulls Instantly analytics by campaign variant. For each A/B test running (spintax subject lines, different email body variants), it scores open rate, reply rate, and positive reply rate.

**The kill/scale thresholds:**
```
Open Rate < 25% after 50 sends → Kill subject line variant, replace with new test
Open Rate > 40% → Scale: make it the default, A/B test the body copy next

Reply Rate < 3% after 100 sends → Kill sequence body variant
Reply Rate > 8% → Scale to 100% of traffic for that persona segment

Positive Reply Rate < 1% → Kill the entire sequence variant
Positive Reply Rate > 3% → Scale + use it as the new base for future A/B tests
```

**Where this lives:**
- Google Sheets: `Sequence Performance` tab — subject line × body variant matrix updated weekly
- Instantly: Variants are updated manually by Kaya (or VA) based on the Slack Sunday digest
- Slack: Sunday digest flags exactly which variants to kill and which to scale

**Compounding effect:** By Month 6, only sequences with demonstrated positive-reply rates above 3% are running. The engine is no longer guessing what works — it knows.

---

## Loop 3: Objection Pattern → Counter Bank (Monthly)

**What happens:** Every month, n8n pulls all Claude API objection classification outputs from the reply router. It groups them by objection keyword clusters.

**The analysis:**
```
Pull: all OBJECTION-classified replies from last 30 days
Group by keyword: "price", "timing", "already have agency", "not priority", "decision maker"
Count frequency per group

Top 3 most-common objection types → review current counter in discovery-framework.md
If counter is not converting (objection → meeting rate < 20%):
  → Flag to Kaya: rewrite counter
  → New counter tested in Slack drafts for 2 weeks
  → Winning counter replaces old one in Claude API system prompt
```

**Where this lives:**
- Google Sheets: `Objection Tracker` tab — objection text, category, outcome (meeting booked Y/N)
- AlifAgency-Discovery-Framework.md: Counter bank updated when pattern confirmed
- Claude API system prompt for Call 2 (Objection Counter): updated with new counter copy

**Compounding effect:** By Month 4, the Claude API counter drafts are calibrated to ALIF's real objections from real prospects, not generic sales objection lists. Reply-to-meeting rate climbs as the best counters compound into the system.

---

## Loop 4: Discovery Score → Proposal Win Rate Calibration (Monthly)

**What happens:** Every month, compare discovery_score at call to proposal outcome (WON / LOST / NURTURE).

**The analysis:**
```
If discovery_score 4.0–4.4 → WON rate < 30%:
  → The 4.0 gate is too low for Kaya's close rate
  → Raise proposal threshold to 4.5 minimum
  → Below 4.5: offer a Brand Sprint trial instead of full retainer pitch

If discovery_score ≥ 4.5 → WON rate > 50%:
  → Invest more in getting to discovery — it converts
  → Fast-track ICP A+ prospects to same-day calendar links

If LOST deals have proposal_tier = "Full Partner" most often:
  → Lead with Growth Retainer tier more often in discovery
  → Anchor lower, upsell after trust is established (Month 2–3)
```

**Where this lives:**
- Google Sheets: `Discovery → Win Rate` tab — score, tier proposed, outcome, days to close
- AlifAgency-Discovery-Framework.md: Qualification threshold updated when pattern holds 2 months

**Compounding effect:** Kaya stops pitching unqualified prospects and stops pitching the wrong tier. By Month 4, discovery call → proposal → close is a predictable motion, not a coin flip.

---

## Loop 5: Content → Pipeline Attribution (Monthly)

**What happens:** Kaya posts LinkedIn content (3×/week) as designed in the GTM strategy. Every new lead captured from LinkedIn (inbound DM, profile view → connection → demo request) is tagged `lead_source = Inbound LinkedIn` in KommoCRM.

**The analysis:**
```
Monthly: pull all Inbound LinkedIn deals
Map back to which post drove the spike (check LinkedIn analytics for post publish date vs. spike date)
Identify: what post topic / format drove the most inbound

High-performing post types → double frequency
Low-performing post types → cut or reformat
```

**Where this lives:**
- Google Sheets: `Content → Pipeline` tab — post topic, publish date, inbound spike date, deals attributed
- LinkedIn content calendar: Updated monthly based on what's compounding

**Compounding effect:** Over 6 months, Kaya's content becomes increasingly targeted at the exact pain points that convert. Inbound LinkedIn leads have a 2x higher close rate than cold outbound because they arrive already believing in ALIF. By Month 6, content drives 20–30% of new pipeline at zero additional cost.

---

## Loop 6: Referral Quality Scoring (Monthly)

**What happens:** Track every referral introduced by a client. Score the ICP fit of the referral lead at entry. Compare referral ICP scores to cold outbound ICP scores.

**The analysis:**
```
Monthly: pull all referral-sourced leads from Google Sheets Referral Tracker
ICP score each referral lead in Clay (auto-scored on entry)
Compare avg referral ICP score vs. avg cold outbound ICP score

If referral avg ICP score > outbound avg ICP score by 10+ points:
  → Referral closes faster and at higher value
  → Invest more energy in client success to drive more referrals
  → Consider adding a referral incentive (service credit, priority access)

Track: referral ask → introduction conversion rate
If < 20%: rewrite referral ask email (too generic)
If > 40%: this is the highest-ROI action in the engine — scale it
```

**Where this lives:**
- Google Sheets: `Referral Tracker` tab (auto-populated by n8n referral engine)
- AlifAgency-Revenue-Engine.md: Referral layer ROI updated in monthly review

**Compounding effect:** By Month 6, referral-sourced pipeline generates 30–40% of new deals. These leads close faster (no cold skepticism), at higher value (peer-validated trust), and generate their own referrals — the true compounding mechanism.

---

## Weekly Calibration Protocol (Automated Sunday 8:00 AM GST)

Every Sunday, n8n's weekly report workflow generates and posts to Slack a single digest covering all 6 loops:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALIF REVENUE ENGINE — WEEKLY DIGEST
[Week ending Date]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PIPELINE SUMMARY
New signals detected this week: [N]
Leads added to sequences: [N]
Active conversations: [N]
Meetings booked: [N]
Proposals sent: [N]
Deals WON: [N] | LOST: [N] | NURTURE: [N]

TOP SEQUENCE PERFORMERS (Kill / Scale)
Best subject line: "[text]" — [X]% open rate
Worst subject line: "[text]" — kill after [N] more sends
Best sequence: [A/B/C] — [X]% positive reply rate

ICP CALIBRATION SIGNAL
Avg ICP score of WON deals: [N]
Avg ICP score of LOST deals: [N]
Recommendation: [raise/lower/hold threshold]

REFERRAL STATUS
Referral asks sent: [N]
Introductions received: [N]
Referral conversion rate: [X]%

ACTION ITEMS FOR KAYA
[ ] Kill subject line variant: [text]
[ ] Update Clay ICP score threshold if applicable
[ ] Review [N] deals in NURTURE re-engage queue
[ ] Health check: log score for [client names]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Flywheel: Month-by-Month Trajectory

```
MONTH 1: SETUP
  Signals: 15–25 companies/day identified
  Sequences: 60–80 companies/week enter sequences
  Pipeline: 3–5 meetings booked
  Revenue: $0 (pipeline building)
  Compounding loops: running but insufficient data for calibration

MONTH 2: CALIBRATION
  Signals: 20–35/day (signal sources now tuned)
  Sequences: 80–100/week (threshold now calibrated from Month 1 data)
  Pipeline: 6–10 meetings/month
  Revenue: 1–2 deals WON (first closes)
  Compounding loops: First ICP recalibration fires. Worst sequences killed.
  Referrals: 0–1 (too early for client referrals)

MONTH 3: MOMENTUM
  Signals: Best 2–3 signal types dominate (funding + new CMO)
  Sequences: Only proven variants running. Reply rates climbing.
  Pipeline: 10–15 meetings/month
  Revenue: 2–4 deals WON/month ($10K–$20K new MRR)
  Referrals: First 1–2 referrals from Month 1 clients
  Content: LinkedIn driving 10–15% of inbound interest
  System close rate: 25–30% (discovery to WON)

MONTH 6: COMPOUND STATE
  Signals: Fully calibrated. Only A/A+ grade leads enter sequences.
  Sequences: 3–4 proven variants at >3% positive reply rate.
  Pipeline: 15–25 meetings/month
  Revenue: 5–8 deals WON/month ($25K–$40K new MRR)
  Referrals: 30–40% of pipeline from referrals (zero outbound cost)
  Content: LinkedIn drives 20–25% of pipeline inbound
  System close rate: 35–40% (target achieved)
  Engine cost: ~$800–900/month
  Revenue generated: $25K–$40K MRR
  Payback ratio: 30–45x on engine cost
```

---

## What Kaya Does vs. What the Engine Does

The goal is ruthless time allocation. ALIF is a 6-person team. Kaya should not be doing anything the engine can do.

**Engine does (fully automated):**
- Signal detection (6 AM daily, zero human input)
- Company enrichment and ICP scoring (Clay waterfall, fully automated)
- Sequence enrollment and sending (Instantly, automated after Clay approval)
- LinkedIn pre-engagement (Expandi, automated within daily limits)
- Reply classification (Claude API, real-time)
- Objection counter drafting (Claude API, Slack queue)
- Pre-call brief generation (Claude API, on Calendly booking)
- Post-call proposal generation (PandaDoc, on discovery score logged)
- Referral asks (email + WhatsApp, Day 30, automated)
- CRM stage updates (n8n, event-triggered)
- Weekly performance digest (Sunday, automated)

**Kaya does (human-essential):**
- Approve or override ICP grade before sequence enrollment (30 seconds per lead)
- Review and send objection counters from Slack queue (5 minutes per reply)
- Run discovery calls (60 minutes per meeting)
- Log discovery score in KommoCRM after call (5 minutes)
- Review and send PandaDoc proposals (10 minutes — personalise 1–2 lines)
- Monthly: Kill/scale sequences based on Sunday digest (30 minutes)
- Monthly: ICP score calibration review (20 minutes)

**Total Kaya time per week (steady state):** 4–6 hours of sales activity.
**Engine output:** 15–25 meetings/month.
**That's the leverage.**

---

*Compounding Loops — SELLL.io GTM Engineering | ALIF Agency | 2026-06-28*
*Review monthly. Update loops when close rate crosses threshold in either direction.*

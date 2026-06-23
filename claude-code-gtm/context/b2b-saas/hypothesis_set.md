# Hypothesis Set: B2B SaaS — SELLL.io
> Layer 1: Intelligence | Last updated: 2026-06-21
> 7 testable pain angles driving list-building queries and email messaging

These are the specific hypotheses the engine tests in every campaign. Each hypothesis maps to: a list-building search angle, an enrichment signal column, a lead score modifier, and an email opening hook. When a hypothesis is confirmed by reply data, its weight increases. When it underperforms, it gets rotated out.

---

## H1: The Post-Raise Pipeline Pressure Window

**Hypothesis:** B2B SaaS companies 60–90 days after a Series A/B raise face their first board pipeline review before they've built the outbound system. The new capital creates urgency — and a budget — for a GTM system, but the clock is already running.

**Signal to find:** Crunchbase shows Series A or B announced in the last 90 days
**Enrichment column:** `days_since_funding_round` (target: 30–90 days)
**Score modifier:** +15 on Timing Signals if signal is within 30–60 days; +10 if 60–90 days
**List query:** "B2B SaaS companies with 25–150 employees that raised Series A/B in the last 90 days, US/UK/AU/CA"
**Email hook:** "Companies at this stage typically have 60–90 days before the board starts asking 'what's the pipeline growth plan?'"
**Subject line:** "Your SDRs aren't the problem" or "60 days after the raise"
**Proof point:** Devolon (SDR efficiency), Holz Concepts (new CRO, 90-day mandate)
**Confirmation signal:** Reply rate on this angle > 4% = confirmed, double the list size

---

## H2: The SDR Hiring Trap

**Hypothesis:** B2B SaaS companies posting SDR/BDR job ads are investing in headcount before infrastructure. Their SDRs will spend the first 60–90 days building list-building processes from scratch — the same failure mode as their last hire. The company needs a system before they need a person.

**Signal to find:** LinkedIn Jobs post for "SDR" or "BDR" at a B2B SaaS company with 25–150 employees
**Enrichment column:** `sdr_job_posted_days_ago` (target: < 30 days), `current_sdr_team_size`
**Score modifier:** +10 on Timing Signals if job posted < 14 days; +8 if 14–30 days
**List query:** "B2B SaaS companies with 25–150 employees that posted SDR or BDR roles in the last 30 days"
**Email hook:** "One thing worth knowing before that hire is made: SDRs who ramp fastest are plugged into a system from day one. Otherwise they spend the first 60 days building their own list-building process."
**Subject line:** "Before you make that [SDR] hire" or "The stat that surprised most sales leaders"
**Proof point:** Devolon (35 → 200+ daily activities — what plugged-in SDRs look like)
**Confirmation signal:** Reply rate > 3.5% = confirmed; < 2% = test different hook angle

---

## H3: The Founder Ceiling

**Hypothesis:** Founders at $3M–$10M ARR are personally closing the majority of deals because no one on the sales team can replicate their ICP knowledge. Every SDR they hire closes at 20–30% vs. the founder's 60–70%. They're stuck, can't scale, and know it.

**Signal to find:** CEO / Co-Founder title at company with $3M–$10M ARR, sales team of 1–4 people, company 3–7 years old
**Enrichment column:** `is_founder_led_sales` (LinkedIn: CEO posting about their own deals/customers), `sales_team_size`
**Score modifier:** +10 on Pain Alignment if founder LinkedIn shows deal-related posts; +5 if company < 5 years old with small sales team
**List query:** "B2B SaaS companies with 25–80 employees, 3–8 years old, CEO/founder actively posting on LinkedIn, 1–4 people in sales roles"
**Email hook:** "Most founders build to $5M ARR on relationships and referrals. Then growth stalls — not because the product isn't great, but because there's no repeatable system behind the revenue."
**Subject line:** "After founder-led sales hits its ceiling" or "[Company] — one question"
**Proof point:** Flow Meditation / Tristan Gribbon (founder out of day-to-day selling)
**Confirmation signal:** Reply rate > 4% = strong signal; note: founders reply less frequently but book meetings faster when they do

---

## H4: The Broken Sequence Problem

**Hypothesis:** B2B SaaS companies running Apollo or Outreach sequences are getting < 2% reply rates. They assume the problem is their messaging. The real problem is that there's no signal layer — they're sending the right message to the right person at the wrong time. Intent-triggered outreach fixes this without changing a word of copy.

**Signal to find:** Company uses Apollo + a sequencer (Outreach, Salesloft, Lemlist, Instantly) — detectable via BuiltWith or job posts
**Enrichment column:** `sequencer_tool` (Outreach/Salesloft/Lemlist/Instantly), `apollo_user` (Y/N)
**Score modifier:** +8 on Technographic Fit if both Apollo + sequencer confirmed; strong signal they've already invested in outbound but are under-performing
**List query:** "B2B SaaS companies with 25–150 employees that use Apollo.io and Outreach or Lemlist — confirmed via technographic data"
**Email hook:** "Reply rates plateau at ~0.5% with standard sequencing — not because the message is wrong, but because there's no real-time signal behind the outreach. Intent-triggered emails get 3–5x the reply rate on the same message."
**Subject line:** "What Apollo can't do alone" or "The stat that surprised most CROs"
**Proof point:** 3–5% reply rate benchmark (engine vs. industry 0.5–1%)
**Confirmation signal:** This hypothesis validates through discovery calls — if they say "we're running sequences but nothing is working," it's confirmed

---

## H5: The New VP Sales Window

**Hypothesis:** VP of Sales hires in their first 60–90 days are actively auditing the GTM stack, have a mandate to show results, don't have internal political baggage yet, and have budget authority. This is the highest-urgency entry point in the entire ICP — they will make a decision within 2–4 weeks of first contact if the timing fits their 90-day window.

**Signal to find:** LinkedIn "Changed Jobs" filter — VP Sales / Head of Sales / VP Revenue started new role < 60 days ago
**Enrichment column:** `new_vp_hire_days_ago` (target: 15–60 days — enough time to see the mess, not enough time to have a plan)
**Score modifier:** +15 for hire 1–15 days ago | +12 for 16–30 days | +8 for 31–45 days | +4 for 46–90 days (see `SELLL-layer-2` Phase 2E Dimension 6 for full scoring rubric)
**Urgency threshold:** Contacts ≤ 45 days into role = HIGH/CRITICAL urgency. Contacts 46–90 days still qualify (score +4) but receive MEDIUM urgency treatment. For 46–90 day contacts: do NOT use the `Day {{days_in_role}}` subject line — shift the angle to "the audit most new VPs skip" (Email 4 framing). They've had time to form a plan; the hook changes from urgency to insight.
**List query:** "VP Sales or Head of Sales LinkedIn profiles that show a new role start date in the last 60 days, at B2B SaaS companies with 25–150 employees"
**Email hook:** "The first 60 days as a new VP of Sales usually reveals the same things: fragmented tools, sequences nobody's touched in months, an ICP that hasn't been validated, and a team that's lost confidence in outbound."
**Subject line:** "The GTM audit you're probably 30 days into" or "Inheriting a broken stack"
**Proof point:** Holz Concepts (Stefan Golz — CRO with 90-day mandate, hit first pipeline targets on time)
**Confirmation signal:** This persona has the highest meeting conversion rate. If reply rate < 5%, the contact list is wrong — they're not new enough or senior enough

---

## H6: The Lean Rebuild

**Hypothesis:** B2B SaaS companies that ran SDR layoffs in 2023–2024 are now trying to rebuild outbound with smaller headcount and tighter budgets. They need 10x the output per rep, not 10x the reps. Automation and AI orchestration is the only way to close that gap — and they know it.

**Signal to find:** LinkedIn company page shows headcount reduction in 2023–2024 followed by new growth signals in 2025–2026; company is now hiring SDRs again (small number: 1–2 not 5–10)
**Enrichment column:** `had_headcount_reduction` (Y/N via LinkedIn headcount history), `current_sdr_count` (1–3 = lean team), `recent_new_sales_hire` (Y/N)
**Score modifier:** +8 on Pain Alignment if both headcount reduction + rebuilding signals present
**List query:** "B2B SaaS companies with 25–150 employees that had layoff news in 2023–2024 and are now posting 1–2 SDR roles"
**Email hook:** "A 2-person SDR team without a system: ~35 activities/day per rep. Same 2-person team with the SELLL system: 200+ automated conversations per day. The difference is what they're plugged into."
**Subject line:** "The math on a lean SDR team" or "Your SDRs aren't the problem"
**Proof point:** Devolon (same headcount, 6x output)
**Confirmation signal:** Reply rate > 3% = confirmed; strong for budget conversations because they're acutely cost-conscious

---

## H7: The Stuck Audit

**Hypothesis:** B2B SaaS companies that engaged a GTM consultant (Kalungi, Sales Xceleration, freelance fractional VP) received a detailed audit or strategy document — and then nothing happened. They paid $15K–$30K for a plan with no implementation path. They are pre-sold on the problem and pre-sold on the need for external help. They just need execution, not more strategy.

**Signal to find:** LinkedIn shows company worked with a known GTM consulting firm in the last 12–18 months; OR CRO has a "GTM Strategy" role in their history; OR job post looking for RevOps to "implement strategy"
**Enrichment column:** `prev_gtm_consultant` (Y/N — search for known consultancy names in LinkedIn + company blog), `revops_job_post` (Y/N)
**Score modifier:** +12 on Pain Alignment if prior consultant confirmed — they've already invested in the problem definition
**List query:** "B2B SaaS companies that have worked with Kalungi, Sales Xceleration, or similar GTM consulting firms in the last 18 months"
**Email hook:** "Most GTM audits end with a document. The companies that move fastest are the ones who find an execution partner to implement the plan that's already sitting on a shelf."
**Subject line:** "The GTM audit you're sitting on" or "After the audit comes the build"
**Proof point:** Holz Concepts (CRO got the intelligence layer + the execution)
**Confirmation signal:** This prospect already has language for the solution. If they reply, they reply fast and with detail. Low volume, very high conversion.

---

## Hypothesis Testing Protocol

After each campaign cycle (30 days minimum, 50 sends minimum per hypothesis):

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Open rate | > 40% | Subject line A/B test — likely a subject line problem |
| Reply rate | > 3% | Test different hook or different list — usually a targeting or signal problem |
| Reply → meeting | > 40% | Improve booking speed or CTA clarity |
| Meeting → deal | > 25% | Review discovery call framework or deal stage qualification |

**Rotation rule:** Any hypothesis with < 2% reply rate over 50+ sends is rotated out and replaced. Document what was tested in the engine state file.

**Graduation rule:** Any hypothesis with > 4% reply rate becomes the PRIMARY angle for that segment. Expand the list size by 3x and add Loom video outreach to the top 30 accounts.

---

## Hypothesis Status Log

| Hypothesis | Status | Reply Rate | Sample Size | Last Tested | Notes |
|------------|--------|------------|-------------|-------------|-------|
| H1: Post-Raise Pressure | Not yet tested | — | — | — | Awaiting Layer 2 launch |
| H2: SDR Hiring Trap | Not yet tested | — | — | — | Awaiting Layer 2 launch |
| H3: Founder Ceiling | Not yet tested | — | — | — | Awaiting Layer 2 launch |
| H4: Broken Sequence | Not yet tested | — | — | — | Awaiting Layer 2 launch |
| H5: New VP Sales Window | Not yet tested | — | — | — | Awaiting Layer 2 launch |
| H6: Lean Rebuild | Not yet tested | — | — | — | Awaiting Layer 2 launch |
| H7: Stuck Audit | Not yet tested | — | — | — | Awaiting Layer 2 launch |

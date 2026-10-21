# Zone & Co — GTM Engineering Lead, Round 2 Prep
Interview: **Thu Oct 22, 2026, 9:00–9:45pm Kampala (2:00–2:45pm ET)**, Zoom, with **Lucas Noble Beeck**.
Role: lead GTM Engineering, $130–150k + bonus + equity, fully remote.

Round 2 is "getting to know you beyond your resume." Expect: your story, how you work, 2–3 behavioral
(STAR) questions from the guide, a few probes on the JD's hard requirements, and your questions.

---

## 0. Fix these before the call (the risks)

1. **Clay.** The JD says "deep expertise in Clay" and you'd be *teaching* Clay to BDRs. Your CV lists Clay
   at Dela and DealFlow, but the Aug 2026 prep notes said you'd never used it. Work out which is true
   tonight. If your Clay time is light, don't claim depth. Say: "My enrichment architecture is
   tool-agnostic: waterfall, verification, field contracts. I've built it in Apollo + n8n + Claude Code,
   and in Clay I've done [the specific table you built]." Then build one waterfall table tonight so the
   specifics are real.
2. **BI (Tableau/Looker).** Nothing on your CV covers this. Bridge with the CRM reporting frameworks you
   built at CIENCE and Flow VR, plus SQL. Bonus: Zone's own ZoneReporting product runs on Power BI.
3. **Code (SQL/Python/JS).** Be concrete about what you write yourself: n8n code nodes, scrapers (the
   FMCSA scraping project), and Claude Code builds. Don't overstate it.
4. **Numbers they'll probe:** "$500k MRR" at Dela (MRR, or total contract value?), "$1.5M in 7 months"
   at Devolon, and "managed 25+ SDR teams" at CIENCE, which was only a 3-month stint. Have a one-line
   explanation ready for each.
5. **Your timeline.** The CV says Dela "Feb 2024–Present," but you've also been CSM at OSP since July
   and you run SELLL.io. Decide your one-sentence answer to "what are you doing now?" before the call.

---

## 1. "Tell me about yourself" (75 seconds)

> I've spent 11 years in outbound. I started on the phones as an SDR doing 80 to 100 dials a day, then
> led SDR teams, and for the last few years I've built the systems the teams run on. At Dela Cyber
> Security I designed the GTM system end to end: TAM mapping with signal segmentation, enrichment
> through Clay and Apollo, Smartlead sequencing, and HubSpot as the system of record. More recently,
> as a CSM for an outbound agency, I diagnosed campaign performance across client accounts, and I built
> an AI review of call transcripts that flags weak meetings before the client finds them.
> What I do best is take a messy GTM problem and turn it into a system that's governed, measured, and
> owned by the people who use it. That's why this role stands out: it isn't just building automation,
> it's turning BDRs into people who can build and run it themselves. I was one of those BDRs.

## 2. "Why Zone?" (pick 2–3)

- **The TAM is finite.** Zone only sells to NetSuite customers (~40k companies worldwide, 4,500 already
  customers). With a finite list you can't spray and burn it, so data quality, deliverability, and
  account-based signals decide the outcome. That's the kind of GTM engineering problem I like most.
- **The expansion motion.** Billing, AP, payroll, and reporting all go to the same buyer (the
  Controller or CFO). Cross-sell signals across 4,500 customers are a systems problem nobody solves
  manually.
- **The mandate.** Taking BDRs from manual prospecting to GTM engineering is what I've done for myself
  and for teams I've led.
- **The product story.** Zone is agentic inside the ERP (Zoe, Control Center). This role is the same
  idea applied to GTM.

---

## 3. STAR stories, mapped to the guide's 5 questions

Keep each one under 2 minutes, and end on a number.

| Guide question | Your story | Result to land |
|---|---|---|
| Collaboration across time zones or departments | **Devolon Oy**: built the 0-to-1 sales process across Finland and the US, automating the prospect-to-AE handoff with email notifications and a debrief before every handoff | $1.5M+ enterprise revenue in 7 months |
| Shifting priorities | **Structural Chat**: the ICP was refined mid-campaign. A hospitality prospect looked right on paper but had no back-end ordering flow, so you re-wrote the exclusion logic and then pivoted to the PEO/EOR vertical when the reply data pointed there | List quality up and wasted touches down. Use the real figures from the campaign files |
| How you organize your work | Your skill-based system: each workflow is documented as a spec (inputs, outputs, owner) before anything is built, then a weekly review of system health | "Nothing runs unmonitored." Mirror the JD's own wording |
| Above and beyond for a stakeholder | **Structural conversion diagnostic**: the client saw a 2.6% conversion rate. You audited the call logs and found wrong numbers and busy signals counted as "conversations." The true rate was 9.3% | Saved the client's confidence in the campaign, and the reporting definitions were fixed going forward |
| A process improvement | **CSM call-quality AI review**: ran every booked-meeting transcript through an AI review that flags soft-commitment meetings, so clients hear about weak meetings from you first | Rolled out as a company-wide process |

---

## 4. Technical probes and your answer frames

**"How would you build inbound lead scoring and routing in Salesforce?"**
Fit score (firmographics, plus whether they're on NetSuite at all) times intent score (pricing page
visits, demo request, content). Routing by segment and territory, with a speed-to-lead SLA (under 5
minutes for hot leads). Every scoring field gets a defined owner and source in a data contract. Review
score-to-opportunity conversion monthly and re-weight from that.

**"What signals would you use for outbound at Zone?"**
- Job posts for Controller or AP roles that mention NetSuite
- New NetSuite go-lives (partner announcements)
- New subsidiaries or entities (a ZoneReporting trigger)
- Moves to subscription or usage pricing (a ZoneBilling trigger)
- Hiring in AU, NZ, UK, or CA (a ZonePayroll trigger)
- Using a competitor (Chargebee, Maxio, Tipalti, Bill.com) on top of NetSuite
- Finance-leader job changes

**"Data contracts versus one-off scripts?"**
Every field has a defined source, format, refresh cadence, owner, and overwrite rule. For example,
enrichment never overwrites a rep-verified value. Waterfall providers write to staging fields first,
and only validated values get promoted to the CRM.

**"Deliverability?"**
- Separate sending domains from the main domain, with SPF, DKIM, and DMARC aligned
- Warmup, plus a per-mailbox daily send cap
- Google and Yahoo bulk-sender rules: spam rate under 0.3% and one-click unsubscribe
- Verify every address before sending
- Placement tests (you ran these at CIENCE)
- Rotate out any domain that drops below its health threshold

**"Compliance?"**
- CAN-SPAM: physical address, honest subject lines, working opt-out honored within 10 days
- GDPR for UK and EU (relevant because of ZonePayroll UK): document legitimate interest, honor
  suppression across every tool, and set data-retention limits
- Suppression is one list synced to every tool, not separate lists per tool

**"Cost and guardrails?"**
Each workflow gets a credit or token budget, alerts when it's exceeded, and a named owner. A workflow
nobody is watching gets turned off.

**"How do you run an experiment?"**
State a hypothesis, keep a control group, fix the sample size and run window in advance, and define the
metric (meetings or pipeline, not opens) and the kill criteria. Retire losing experiments on schedule.

**"BANT/MEDDIC and attribution?"**
BANT for BDR qualification, MEDDIC for the AE stage. Note that Zone's Economic Buyer is usually the CFO
or Controller. For attribution, use first-touch for sourcing credit and multi-touch (W-shaped) for
influence, and admit nobody's attribution model is perfect.

**"How would you take BDRs to GTM engineers?"**
Pair each BDR with one workflow they own. They follow a build → document → test → release loop with
reviews. Then run a Clay certification path, and give the first wins visibility.

---

## 5. If asked "What would your first 90 days look like?"

- **Days 0–30: audit.** Inventory the stack, data quality (fill rates and duplicates), deliverability,
  and current inbound response time. Shadow the BDRs. No new tools yet.
- **Days 31–60: two quick wins.** Inbound speed-to-lead routing, and one signal-based outbound play
  (for example, NetSuite job posts mapped to the matching product). Write data contracts for the core
  fields.
- **Days 61–90: scale and teach.** Publish an experiment cadence and a dashboard, and move the first
  2–3 BDRs onto owning workflows.

---

## 6. Questions to ask Lucas (pick 3)

1. What does the GTM stack look like today, and what's the biggest source of pain?
2. Is the pipeline mix mostly inbound, outbound, or partner (Oracle/NetSuite channel)? Where is the
   biggest gap?
3. How big is the BDR team, and how do they feel about the shift to GTM engineering?
4. Does this role own the expansion motion into the 4,500 existing customers, or only new logos?
5. What would make this hire a clear success at 6 months?

---

## 7. Logistics

- Log in by 8:50pm Kampala. Test camera, mic, and lighting, and have a backup connection ready.
- Dress business casual. Have this doc and your CV open off-screen.
- Mention that you work US hours by default. The interview at 2pm ET makes the point for you.
- Send a thank-you email within 24 hours (draft in chat).

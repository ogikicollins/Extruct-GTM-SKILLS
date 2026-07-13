# ALIF Revenue Machine — Full Tech Stack & Operating Architecture
> Built by SELLL.io | Head of Sales | 2026-07-02
> Foundation: HubSpot + Apollo + Instantly (9 domains) + Aircall + Free signal layer
> The ONE metric this machine optimises for: Reply-to-Booking % (baseline ~0.2% → target 10%+)

---

## THE BIG PICTURE

```
SIGNALS ──▶ ENRICHMENT ──▶ SCORE ──▶ OUTREACH ──▶ PIPELINE ──▶ CLOSE
(Free)       (Apollo +       (Google   (Instantly +   (HubSpot)    (Aircall +
              Free)           Sheets)   LinkedIn +                   HubSpot)
                                        WhatsApp +
                                        Aircall)
```

Six layers. Every tool has one job. Nothing overlaps. Nothing is manual that can be automated.

---

## FULL TOOL INVENTORY

### PAID TOOLS (What We Have Now)

| Tool | Cost | Job in the Machine |
|------|------|-------------------|
| **HubSpot** | Paid | Master CRM — every contact, every deal, every activity lives here |
| **Apollo.io** | Paid | Prospecting engine — find contacts + enrich company data + export to HubSpot |
| **Instantly.ai** | Paid | Cold email execution — sequences across all 9 domains |
| **Aircall** | Paid | Discovery + follow-up calls — records, transcribes, logs to HubSpot |
| **9 Domains** | Infrastructure | 270 emails/day max capacity (9 × 30/day limit per domain) |

### FREE TOOLS (Signal Layer + Operations)

| Tool | Cost | Job in the Machine |
|------|------|-------------------|
| **Google Alerts** | Free | Passive signal monitoring 24/7 for every trigger type |
| **Meta Ad Library** | Free | Visual brand gap detector for D2C, F&B, beauty prospects |
| **LinkedIn (organic)** | Free | Signal confirmation, DM channel, content distribution, job change alerts |
| **Crunchbase (basic)** | Free | Funding round alerts for tech/startup ICP |
| **Magnitt** | Free (MENA) | MENA-specific startup funding tracker — Crunchbase equivalent for Gulf |
| **WAMDA** | Free | Arab tech startup news and funding signals |
| **Google Sheets** | Free | Signal intake queue, ICP scoring, weekly ops dashboard |
| **Make.com** | Free (1K ops/mo) | Automation backbone — connects signals to HubSpot without code |
| **WhatsApp Business** | Free | MENA primary channel — voice notes, proposals, follow-up |
| **Hunter.io** | Free (25/mo) | Email verification backup when Apollo doesn't find it |
| **Loom** | Free (25 vids) | Personalised video prospecting for A+ deals — 3× reply rate |
| **Product Hunt** | Free | D2C and tech launch signal — new product = new budget moment |
| **Timeout Dubai / What's On UAE** | Free (RSS) | New venue openings — F&B and lifestyle MENA segment |
| **Google Trends** | Free | Demand signal by region and category — validate timing of campaigns |
| **SimilarWeb (free tier)** | Free | Traffic volume proxy = budget proxy for EU/US prospects |
| **Canva (free)** | Free | Personalised visual outreach assets for high-value targets |
| **PhantomBuster (free)** | Free (2 hrs/day) | LinkedIn profile scrape when signal fires — pulls contact data into Sheets |
| **Notion (free)** | Free | Playbooks, sequence scripts, objection bank, ICP reference |
| **Zapier (free)** | Free (100 tasks/mo) | Instantly reply → HubSpot pipeline move (or use Make.com) |

---

## LAYER 0 — SIGNAL ENGINE
*What fires the machine. Nothing gets touched without a signal.*

The signal engine runs without anyone doing anything. It monitors 24/7 and drops qualified triggers into the intake queue (Google Sheet → HubSpot).

### Signal Types by ICP Segment

| Signal | Tool | ICP Segment | Priority |
|--------|------|-------------|----------|
| Funding round announced | Crunchbase Basic, Magnitt, WAMDA, Google Alerts | Tech/Startup | A+ |
| New CMO / Head of Marketing hired | LinkedIn job change alerts | All segments | A+ |
| Agency fired (new marketing hire posted) | LinkedIn job postings | All segments | A+ |
| New location / venue opening | Google Alerts, Timeout Dubai RSS, Instagram | F&B, Wellness, Fitness | A+ |
| MENA / Dubai expansion announced | Google Alerts, press, LinkedIn | EU/US segments | A+ |
| New product / brand launch | Product Hunt, Google Alerts, Instagram | D2C/Beauty | A |
| Running ads with weak creative | Meta Ad Library (manual daily sweep) | D2C, F&B, Fitness | A |
| Rebrand / new logo announced | Instagram, Google Alerts | All segments | A |
| Conference attendance (GITEX, Arab Health) | LinkedIn event pages, conference apps | Tech, Health | A |
| Endorsement deal signed (athletes) | Google Alerts, Instagram | Sports/Personal Brand | A |
| Post-award surge (company wins award) | Google Alerts, Instagram | All segments | B |
| KSA Vision 2030 related launch | WAMDA, Saudi press, Google Alerts | MENA | A+ |

### How Signals Flow In

```
Google Alerts fires
        │
        ▼
Lands in Gmail inbox (create dedicated alerts@[domain].com)
        │
        ▼
Make.com catches the email via Gmail trigger
        │
        ▼
Parses: company name + signal type + date
        │
        ▼
Appends row to [Signal Intake] Google Sheet
        │
        ▼
HubSpot contact created (or flagged if exists) via Make.com
        │
        ▼
Slack / WhatsApp notification to Collins (daily digest, 8 AM GST)
```

### Google Alerts Setup (One-Time, 30 Minutes)

Create one alert per search string. All go to alerts@[yourdomain]:

**MENA F&B / Wellness / Fitness (new openings):**
- `"new restaurant" Dubai 2026`
- `"now open" Dubai gym OR spa OR padel`
- `"opening soon" Abu Dhabi OR Riyadh restaurant OR hotel`
- `"new concept" Dubai food OR lifestyle`

**D2C / Beauty / Fashion (launches + rebrands):**
- `"new brand" Dubai beauty OR skincare OR fashion`
- `"launched" UAE OR Dubai "D2C" OR "direct to consumer"`
- `site:producthunt.com beauty OR skincare OR lifestyle`

**Tech / Startup (funding):**
- Use Crunchbase and Magnitt email digests instead — more reliable than Alerts for this

**MENA Expansion (EU/US brands coming to Gulf):**
- `"expanding to Dubai" OR "entering UAE" OR "MENA launch"`
- `"opening in Saudi" OR "KSA expansion" OR "Riyadh launch"`
- `"Gulf market" "brand" 2026`

**Personal Brand / Athlete (endorsement + new deals):**
- `[athlete name] "partnership" OR "deal" OR "ambassador" 2026`

---

## LAYER 1 — ENRICHMENT ENGINE
*Signal fires → find the right person → verify fit*

**Step 1 — Apollo.io (primary enrichment)**
- Company name from signal → Apollo search
- Pull: Founder/CEO/CMO name, email, LinkedIn URL, company size, industry, tech stack (ad tools used)
- Export directly to HubSpot via Apollo's native integration
- Filter: 5–100 employees, has Instagram/website, in target region

**Step 2 — Manual Signal Verification (5 min per A+ prospect)**
- Open their Instagram: Is the content bad/inconsistent? (brand gap = confirmed pain)
- Open Meta Ad Library: Are they running ads? What does the creative look like?
- Open SimilarWeb: What's their traffic? (>5K monthly = budget signal)
- Score them on the ICP matrix (Layer 2)

**Step 3 — Hunter.io (backup email)**
- If Apollo doesn't find the email: hunter.io/find + verify
- 25 free searches/month — reserve for A+ prospects only

**Step 4 — PhantomBuster (LinkedIn batch scrape)**
- When you have a list of 20+ LinkedIn profile URLs: run LinkedIn Profile Scraper phantom
- Pulls: name, title, email (if public), company, connections
- Outputs CSV → import to Google Sheet → push to HubSpot

---

## LAYER 2 — ICP SCORING
*Every enriched prospect gets a score before touching outreach*

Run this in Google Sheets. Auto-calculates the grade.

| Dimension | Weight | 5 pts | 3 pts | 1 pt |
|-----------|--------|-------|-------|------|
| Trigger type | 25 | 2+ signals (funding + launch, rebrand + new hire) | 1 clear signal | No visible trigger |
| Industry fit | 25 | Primary ICP (D2C, F&B, Wellness, Tech Startup) | Secondary (Agency, Sports) | Outside ICP |
| Decision maker access | 20 | Founder/CEO directly reachable | Reachable cold via email | Gatekeeper only |
| Brand-performance gap | 20 | Obvious (bad creative, no ads, generic social) | Partial gap | Strong brand already |
| Budget signal | 10 | Running ads / confirmed agency spend / post-funding | Revenue signal (team size, reviews, traffic) | Unknown |

**Score → Outreach route:**
- **90–100 (A+):** Hyper-personalised, multi-channel, Collins handles personally
- **75–89 (A):** Semi-personalised Instantly sequence + LinkedIn
- **60–74 (B):** Automated Instantly sequence, 2 personalisation tokens
- **40–59 (C):** Nurture sequence only, no manual touches
- **Below 40 (D):** Do not contact

---

## LAYER 3 — OUTREACH ENGINE
*The multi-channel sequences. Built on Instantly (9 domains) + LinkedIn + WhatsApp + Aircall*

### Domain Infrastructure (9 Domains)

```
9 Domains × 2–3 mailboxes each = 18–27 mailboxes in Instantly
27 mailboxes × 10 emails/day = 270 emails/day safe capacity

Domain rotation by market:
├── 3 domains → MENA segment (Arabic-friendly naming if possible)
├── 3 domains → EU segment  
└── 3 domains → US segment
```

Each domain: warmed up 4+ weeks, DKIM/DMARC/SPF configured, custom tracking domain.
Instantly monitors deliverability per domain — rotate out any domain that drops below 90% health score.

---

### Sequence A: A+ Prospect (Collins-handled, hyper-personalised)

**Day 1 — Email 1 (Instantly, manual personalisation)**
Subject: `[something specific about their brand/moment]`
Body: 3 sentences max. Reference the signal. Show the gap. Offer the audit.
> Template hint: "Saw [brand] [just opened second location / launched on Noon / announced Dubai expansion]. Looked at your [Instagram/ads/website] — there's a gap between what you're actually doing and how it's coming across. Happy to show you exactly what I mean in a 20-min audit, no pitch."

**Day 2 — WhatsApp (MENA only)**
Voice note, 30–45 seconds. Kaya's voice. Personal. Reference Day 1 email.
> "Hey [Name], this is [Kaya] from ALIF — just sent you a quick email. Saw what you're building with [brand], really aligned with some work we've done in [relevant segment]. Would love to show you something specific in a quick call — respond here whenever works."

**Day 2 — LinkedIn connection (all regions)**
Connection request with note: `"Saw [brand name] [trigger] — we work with similar brands on exactly what you're building toward. Sent you a quick email too."`

**Day 4 — Email 2 (Instantly, if no reply)**
Subject: `Re: [original subject]` (keeps thread)
Body: 2 sentences. New angle — reference a specific client result in their industry.
> "Just following up. We recently [brief result — e.g. 'helped a Dubai wellness brand go from 3K to 28K Instagram in 90 days through the same system']. Thought it was relevant given what you're building."

**Day 5 — LinkedIn DM (after connection accepted)**
1 sentence max: `"Glad we're connected — sent you an email a few days ago about [specific thing]. Worth a quick 20 mins?"`

**Day 7 — Email 3 (Instantly)**
Subject: `Quick question`
Body: 1 sentence. Direct ask.
> "Are you currently working with an agency on [brand / creative / performance], or is this on the roadmap?"

**Day 10 — Aircall (if no reply)**
2-minute call script:
```
"Hey [Name], this is [Collins/Kaya] from ALIF Agency in Dubai. I sent you a few emails 
about [brand] — wanted to make sure it landed. We work with [their industry] brands on 
[brief description]. Happy to show you a quick audit if you have 20 minutes this week. 
Do you have a moment now or should I call back?"
```

**Day 14 — Final email (Instantly)**
Subject: `Leaving this here`
Body: 3 sentences. Provide value, close the loop, leave door open.
> "Not going to keep following up after this — just want to leave you with one thing. [Free resource / insight specific to their situation]. If the timing ever makes sense, you know where to find us. Good luck with [brand]."

---

### Sequence B: A Prospect (Semi-personalised, 5 steps)

Day 1 → Email 1 (Instantly — 2 personalisation tokens: [company] + [trigger])
Day 3 → Email 2 (Instantly — social proof from relevant industry)
Day 6 → LinkedIn DM (1 sentence, direct)
Day 9 → Email 3 (short, different angle)
Day 12 → Email 4 — Final (value + close loop)

---

### Sequence C: B Prospect (Automated, 2 tokens)

Day 1 → Email 1 (Instantly — [company] + [industry] tokens)
Day 4 → Email 2 (Instantly — result in their category)
Day 8 → Email 3 (Instantly — case study link)
Day 14 → Email 4 (Instantly — final, value leave)

---

### Sequence D: C Prospect (Nurture only)

Monthly newsletter cadence via Instantly or HubSpot.
No personal touches. Re-evaluate for upgrade when new signal fires.

---

## LAYER 4 — PIPELINE (HubSpot)

### Pipeline Stages

| Stage | Definition | Trigger to Move | SLA |
|-------|-----------|-----------------|-----|
| **Signal** | Trigger identified, not yet enriched | Alert fires | Same day |
| **Enriched** | Apollo ran, ICP scored, contact in HubSpot | After scoring | Within 4 hrs of signal |
| **In Sequence** | Active in Instantly + LinkedIn outreach | Sequence started | Within 24 hrs of enrichment |
| **Replied** | Any positive reply (even "not now") | Instantly → HubSpot via Zapier | Auto-trigger |
| **Discovery Booked** | Call confirmed in Calendly/HubSpot | Meeting created | — |
| **Proposal Sent** | Proposal delivered (PDF + WhatsApp follow-up) | Manual stage move | Within 24 hrs of discovery |
| **Negotiation** | Proposal received, back-and-forth | Manual | — |
| **Closed Won** | Contract signed, first invoice sent | Manual | — |
| **Closed Lost** | Dead — log the reason | Manual | — |
| **Recycled** | Not now, re-sequence in 60 days | Manual, set follow-up date | — |

### HubSpot Integrations to Activate

| Integration | What it Does | Cost |
|-------------|-------------|------|
| Instantly → HubSpot | Syncs contact activity, replies, bounces | Included in Instantly |
| Apollo → HubSpot | Pushes enriched contacts into CRM | Included in Apollo |
| Aircall → HubSpot | Logs calls, recordings, duration, outcome | Included in Aircall |
| Zapier → HubSpot | Triggers pipeline moves on Instantly replies | Free tier (100 tasks/mo) |
| Make.com → HubSpot | Pushes Google Alert signals as new contacts | Free tier (1K ops/mo) |

### HubSpot Properties to Add (Custom)

- `ICP Score` (number, 0–100)
- `ICP Grade` (dropdown: A+/A/B/C/D)
- `Trigger Type` (dropdown: funding/new location/rebrand/new hire/MENA expansion/other)
- `Trigger Date` (date)
- `Outreach Channel` (dropdown: email/LinkedIn/WhatsApp/Aircall)
- `Brand Gap Score` (1–5 — from Meta Ad Library review)
- `Region` (MENA/EU/US)
- `Segment` (D2C/F&B/Wellness/Fitness/Tech/Fashion/Sports)

---

## LAYER 5 — CONVERSION (Aircall + HubSpot)

### Discovery Call Framework (Aircall records, HubSpot logs)

**20 minutes. 4 blocks.**

```
Block 1 — 2 min: Frame the call
"I'll show you 3 things about your brand, ask you some questions, and if it makes sense 
we'll talk about what working together looks like. Fair?"

Block 2 — 8 min: The audit live on screen
Show them their Instagram vs. a brand ALIF transformed.
Show their Meta Ad Library (or absence of it) vs. what performance looks like with ALIF.
Ask: "When you see this — is this a gap you've felt, or is this new?"

Block 3 — 6 min: Qualification
"What does the next 90 days look like for [brand]?"
"What would it mean if [result they want] happened in that window?"
"Do you currently have an agency or is this all in-house?"
"What's your typical timeline for making a decision like this?"

Block 4 — 4 min: Close or next step
If fit confirmed: "I want to put together a specific plan for [brand]. I'll have it to you 
within 24 hours. Is [proposal format] OK?"
If not ready: "Totally fine — what's the one thing that needs to change before this 
makes sense to revisit?" → set HubSpot follow-up task.
```

### Proposal Delivery
- HubSpot tracks open + time spent on proposal
- WhatsApp follow-up (Kaya's voice note) within 2 hours of sending — MENA
- Loom walkthrough (free) for high-value A+ prospects: 3-min video of Collins walking through the proposal in their words

---

## LAYER 6 — INTELLIGENCE (Measurement + Iteration)

### The ONE Metric

**Reply-to-Booking %** = (Discovery calls booked ÷ Total replies received) × 100

Baseline: ~0.2% (industry average)
Target: 10%+

Check this weekly, every Monday. If it drops below 5%, the discovery or sequence is the problem. If it was never above 2%, the ICP or signal is the problem.

### Weekly Ops Review (Every Monday, 30 min, Google Sheets)

| Metric | Track In | Frequency |
|--------|----------|-----------|
| Signals fired this week | Google Sheet (Signal Intake) | Weekly |
| Contacts enriched + scored | HubSpot report | Weekly |
| Emails sent | Instantly dashboard | Weekly |
| Open rate (target >40%) | Instantly dashboard | Weekly |
| Reply rate (target >8%) | Instantly dashboard | Weekly |
| LinkedIn DMs sent / accepted | Manual count → Google Sheet | Weekly |
| WhatsApp sent / replied | Manual count → Google Sheet | Weekly |
| Discoveries booked | HubSpot pipeline | Weekly |
| Proposals sent | HubSpot pipeline | Weekly |
| Revenue won (ACV) | HubSpot deals | Weekly |
| Reply-to-Booking % | Calculated in Google Sheet | Weekly |
| Domain health scores | Instantly > Domains | Weekly |

### When a Metric Is Off — What to Fix

| Symptom | Root Cause | Fix |
|---------|-----------|-----|
| Open rate < 30% | Subject lines or domain health | Test 3 new subject lines, check deliverability |
| Reply rate < 3% | Wrong ICP or wrong message | Tighten ICP scoring, rewrite email 1 body |
| Replies but no discoveries | Weak discovery framework | Rewrite discovery call opener + audit reveal |
| Discoveries but no closes | Proposal or pricing disconnect | Revisit proposal format + scope |
| Signal count low | Alert setup incomplete or wrong triggers | Expand Google Alerts strings |
| Pipeline stalls at Proposal | Proposal too long / no follow-up speed | Cut to 3 pages, WhatsApp within 2h |

---

## THE WEEKLY OPERATING RHYTHM

| Day | Action | Tool | Time |
|-----|--------|------|------|
| **Sunday** | Review signal digest (Make.com daily email) | Gmail → Google Sheet | 20 min |
| **Sunday** | Enrich A+ signals (Apollo), score in Sheets | Apollo + Google Sheets | 30 min |
| **Sunday** | Personalise + send A+ emails for the week | Instantly (manual) | 45 min |
| **Monday** | Weekly ops review (all 6 metrics) | Google Sheets + Instantly + HubSpot | 30 min |
| **Monday** | Discovery calls (if any booked last week) | Aircall + HubSpot | As needed |
| **Tue–Wed** | LinkedIn connection + DM outreach | LinkedIn (free) | 20 min/day |
| **Wed** | Meta Ad Library sweep (check A-grade prospects' ad quality) | Meta Ad Library (free) | 20 min |
| **Thu** | Aircall follow-up dials (Day 10 prospects in sequence) | Aircall | 30 min |
| **Thu** | Proposals due — send + WhatsApp follow-up | HubSpot + WhatsApp | As needed |
| **Fri** | Nothing outbound — EU/US day, not MENA (UAE weekend) | — | — |

**Total active outbound time per week: ~3–4 hours**
The machine runs the rest automatically.

---

## QUICK-START SETUP CHECKLIST

### Week 1 — Infrastructure
- [ ] Configure 9 domains in Instantly (DKIM, DMARC, SPF for all)
- [ ] Start email warmup on all 27 mailboxes (14-day warmup minimum)
- [ ] Set up HubSpot pipeline stages (7 stages above)
- [ ] Add custom HubSpot properties (ICP Score, Grade, Trigger Type, etc.)
- [ ] Connect Apollo → HubSpot integration
- [ ] Connect Instantly → HubSpot integration
- [ ] Connect Aircall → HubSpot integration

### Week 2 — Signal Layer
- [ ] Create 15+ Google Alerts (strings from Layer 0 above)
- [ ] Set up Make.com: Gmail → Google Sheet (Signal Intake)
- [ ] Subscribe to Magnitt and WAMDA weekly digests
- [ ] Subscribe to Crunchbase alerts: MENA + target industries
- [ ] Subscribe to Timeout Dubai and What's On UAE RSS

### Week 3 — Sequences + Content
- [ ] Build 4 sequences in Instantly (A+, A, B, C)
- [ ] Write Notion playbook: objection bank + discovery script
- [ ] Record Loom: 3-min "brand gap audit" template for A+ prospects
- [ ] Build ICP scoring sheet in Google Sheets (formula-based, auto-grade)

### Week 4 — Go Live
- [ ] First signal-triggered A+ outreach: 5 prospects minimum
- [ ] Activate all 4 Instantly sequences
- [ ] Monday ops review #1
- [ ] Track: Reply-to-Booking % from day one

---

## HOW THE REVENUE MACHINE COMPOUNDS

**Month 1:** Machine is new. 270 emails/day capacity, 50 signals/month. Goal: 2 discoveries booked.

**Month 2:** Domain reputation builds. Reply rates increase. Signal intake grows as Alerts mature. Goal: 5 discoveries, 1 close.

**Month 3:** Pipeline history in HubSpot shows what's working. Sequences refined. A+ rate improving. Goal: 8 discoveries, 2–3 closes.

**Month 6:** Machine is self-sustaining. Collins reviews signals Sunday, personalises A+ manually, everything else runs. 10%+ Reply-to-Booking achieved.

**The compounding effect:** Every closed client is a case study that makes the next sequence more effective. ALIF's portfolio is the machine's best asset — load it into every sequence that matches the relevant segment.

---

*This document determines how we build the revenue machine. Every tool is paid only when it earns its place. Every free tool runs before we spend a dirham on manual effort.*
*Review and update this stack quarterly or whenever a new tool is trialled and validated.*

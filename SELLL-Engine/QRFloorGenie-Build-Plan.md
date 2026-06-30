# QR Floor Genie — GTM Revenue Engine Build Plan
**SELLL.io × QR Floor Genie | Growth Pilot**
**Prepared by:** Collins Ogiki | SELLL.io
**Date:** June 27, 2026

---

## MISSION

Book 3-4 qualified demos per month with independent flooring store owners
across the US using a signal-triggered outbound system that reaches
high-intent prospects before they find Showroom Pricing.

---

## THE SIGNAL ARCHITECTURE

Five trigger events. Each one fires a dedicated sequence within 24 hours.
No generic lists. No spray-and-pray.

---

### SIGNAL 1 — NEW STORE OPENING
**Source:** Google Maps new listings, business registration data, local news monitoring
**Fire window:** Within 7 days of opening
**Why it converts:** No legacy pricing system. No old habits to break.
A store owner in week one is making every vendor decision for the first time.
The window to become their pricing system is narrow. We hit it first.

**Sequence:**
- Day 1: Cold call (primary) — reference the opening, congratulate, pivot to pricing setup
- Day 2: Email — signal-specific subject line, no template language
- Day 5: LinkedIn connection + short message

---

### SIGNAL 2 — SHOWROOM MANAGER HIRE
**Source:** LinkedIn job postings, Indeed, ZipRecruiter — monitored daily
**Fire window:** Within 3 days of posting or hire announcement
**Why it converts:** A new showroom manager walking into a paper-pricing
environment is a training liability. They are actively looking for a fix
before their first performance review. High urgency. Low competition.

**Sequence:**
- Day 1: Cold call — "We saw you're bringing on a new showroom manager..."
- Day 3: Email — reference the hire, frame QR Floor Genie as the onboarding tool

---

### SIGNAL 3 — POOR GOOGLE REVIEWS (PRICING FRICTION)
**Source:** Google Reviews API monitoring — flagged by keywords:
"pricing", "price sheet", "price list", "pricing confusion", "wrong price"
**Fire window:** Same week as review posted
**Why it converts:** Public evidence of the exact pain QR Floor Genie solves.
The store owner already knows the problem exists. We name it and solve it.

**Sequence:**
- Day 1: Email — lead with the specific review signal (without quoting verbatim)
  "We noticed some recent customer feedback about pricing clarity..."
- Day 3: Cold call — follow the email

---

### SIGNAL 4 — TRADE SHOW ATTENDANCE
**Source:** Floor Covering News, Surfaces, Coverings exhibitor lists,
LinkedIn event attendance, industry association event pages
**Fire window:** 2 weeks before show AND immediately after
**Why it converts:** Attendees are in active solution-seeking mode.
Pre-show: "Are you attending Surfaces? We'll be tracking who is."
Post-show: "We saw you were at Surfaces — did you find a pricing solution?"

**Sequence:**
- Pre-show: LinkedIn → Email (2 weeks out)
- Post-show: Cold call → Email (within 3 days of event end)

---

### SIGNAL 5 — NEW WEBSITE LAUNCH
**Source:** BuiltWith, SimilarWeb, domain registration monitoring,
LinkedIn company page updates
**Fire window:** Within 30 days of launch
**Why it converts:** A store investing in a new website is investing
in customer experience. They are in a growth mindset.
A modern pricing system is the logical next step.

**Sequence:**
- Day 1: Email — "We noticed QR Floor Genie just launched..."
  (personalised to the website design/content)
- Day 4: Cold call

---

## CHANNEL MIX

| Channel | Role | Why |
|---|---|---|
| Cold Calling | PRIMARY | 15-16% connect rate confirmed. Flooring store owners pick up the phone. |
| Email | SUPPORT | Signal-specific copy fires behind every call. Not templates. |
| LinkedIn | DATA + TOUCH | Backend contact enrichment + light sequencing for trade show signals. |

---

## TECH STACK

**QR Floor Genie's side (existing + new):**

| Tool | Status | Purpose |
|---|---|---|
| Apollo | Already owned | Contact data source |
| Smartlead | Already owned | Email sequences (rebuilt by SELLL) |
| Porkbun | New — $225 one-time | 15 sending domains |
| PremiumInbox | New — ~$75/month | Mailbox hosting + warmup (15 mailboxes) |

**SELLL's side (covered in retainer):**

| Tool | Purpose |
|---|---|
| Clay | Signal enrichment + AI-personalised copy |
| Trigify | Real-time signal monitoring across all 5 triggers |
| n8n | Automation backbone — signal fires → sequence activates |
| RB2B Pro | Website visitor identification → LinkedIn match → sequence trigger |
| PhantomBuster | LinkedIn data scraping for contact enrichment |
| GetSales | LinkedIn outreach execution |
| Attio CRM | Pipeline management — every reply tracked |
| Millionverifier | Email verification before every send |
| Fathom | Call recording + transcription for SDR coaching |

---

## BUILD TIMELINE

### WEEK 1 — DAYS 1-7: INFRASTRUCTURE

- [ ] Full audit of existing Apollo sequences and Smartlead setup
- [ ] 15 sending domains purchased via Porkbun
- [ ] PremiumInbox mailboxes created and warmup started (Batch 1: 5 domains)
- [ ] Signal monitoring live: all 5 triggers wired into Trigify + Clay
- [ ] ICP contact lists built for each trigger type
- [ ] 5 signal-specific email sequences written (one per trigger)
- [ ] SDR briefed: QR Floor Genie product, ICP, Showroom Pricing positioning,
     objection handling, cold call script per signal

**Milestone: System architecture complete. SDR ready to dial.**

---

### WEEK 2 — DAYS 8-14: ACTIVATION

- [ ] Batch 2 warmup (5 more domains live)
- [ ] Cold calling begins: SDR making 40-60 calls/day to signal-matched prospects
- [ ] Email sequences go live on warmed domains
- [ ] LinkedIn enrichment running via PhantomBuster
- [ ] First weekly report delivered: calls made, connect rate, replies

**Milestone: First outbound touches going out. First replies expected.**

---

### MONTH 1 — DAYS 1-30: TARGET = 3-4 DEMOS BOOKED

Full signal layer running. SDR dialing daily. All 5 sequences active.

**Weekly reporting includes:**
- Signals detected and fired
- Calls made / connect rate / conversations held
- Emails sent / reply rate / demos booked
- Pipeline value generated

**GUARANTEE:** 3-4 qualified demos booked by Day 30.
If not met, Month 2 is free until the target is hit. In writing.

---

### MONTH 2 — DAYS 31-60: OPTIMISATION

- Analyse Month 1: which signals converted best, which sequences worked
- Rebuild underperforming sequences based on reply data
- Double down on highest-performing triggers
- Increase contact volume on proven signal types
- **Target: 5-6 demos/month**

---

### MONTH 3 — DAYS 61-90: SCALE

- System fully optimised across all 5 signals
- SDR dialled in — cold call script refined by real conversation data
- All 5 sequences running at full volume
- Transition plan to maintenance mode prepared
- **Target: 6-8 demos/month**
- **Month 4 transition brief delivered to James and partner**

---

### MONTH 4+ — MAINTENANCE: $2,500/MONTH

- SDR fully trained and running the machine independently
- Continuous signal monitoring across all 5 triggers
- Ongoing sequence optimisation as response data accumulates
- Monthly reporting: pipeline generated, demos booked, sequences active
- New sequences added as market shifts (new trade shows, new signals identified)
- SDR role: booking OR closing — decision made with James before Month 4

---

## PIPELINE MATH

| Metric | Number | Source |
|---|---|---|
| Total US flooring businesses | 17,834 | Floor Covering News |
| Addressable (on paper pricing) | 11,900 | 67% of 17,834 |
| Monthly trigger events (est.) | 200-400 | New openings + hires + reviews combined |
| Cold call connect rate | 15-16% | Confirmed by James on call |
| Signal-triggered email reply rate | 4-6% | Industry benchmark for triggered outreach |
| Demo conversion from conversation | 30-40% | Mid-market B2B average |
| **Month 1 model** | 150 calls → 22 connects → 6 conversations → **3-4 demos** | Conservative |
| **Month 3 model** | 300 calls → 45 connects → 14 conversations → **6-8 demos** | Optimised |

---

## THE COMPETITIVE CLOCK

Showroom Pricing: 6-year market head start. National TV coverage.
Co-founder: 35 years in flooring.

They are building brand. We are building timing.

Every week QR Floor Genie is not running a signal-triggered system,
Showroom Pricing is landing in new stores with name recognition.
Signal-based outbound bypasses brand entirely. The store owner who
gets a cold call the week they open their doors does not care
who has more LinkedIn followers.

The window is open. It will not stay open.

---

*Built by SELLL.io | Signal-Intelligent Revenue Engine*
*collins@selll.io | cal.com/collins-ogiki-x4fokk/30min*

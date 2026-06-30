# QR Floor Genie × SELLL.io
## The Build Plan — Call Walkthrough
> For Collins to screen-share with James on the close call
> SELLL.io | Signal-Intelligent Revenue Engine

---

# OPENING FRAME (2 minutes)

Say this to open:

> "James, what I'm going to walk you through today isn't a pitch deck.
> It's the actual build plan — the exact system we're going to construct
> for QR Floor Genie, how it works, what fires and when, and what
> Month 1 looks like on a daily basis. By the end of this call you'll
> know exactly what you're buying. Let's start with the problem."

---

# PART 1 — THE PROBLEM, PRECISELY STATED

## Why Your Current Setup Produces 1–2 Meetings Per Month

```
CURRENT STATE:
  Apollo list (generic) → SmartLead sequence (generic) → ~200 contacts/month
  → 1–2% reply rate → 2–4 replies → 1–2 meetings/month

THE ROOT CAUSE:
  Your system has no way of knowing who is in a buying motion right now.
  It treats every flooring store on the list as equally likely to buy.
  They are not equal. And the ones most likely to buy are either reached
  last or never reached at all.

THE MATH THAT REVEALS THE GAP:
  11,900 addressable stores in the US (67% still on paper)
  You are reaching ~200/month = 1.7% of your market per month
  At that rate, you complete one pass of your market in 59 months
  Showroom Pricing is not waiting 59 months
```

---

# PART 2 — THE SIGNAL MAP

## The 5 Trigger Events That Predict a Buying Decision

These are not random contacts. These are flooring store owners who are
in an active buying motion — they just don't know your product exists yet.

---

### TRIGGER 1: New Store Opening
**What it is:** A flooring store registers a new business, opens a new location, or announces a new showroom in local business filings, Google Business Profile, or trade publications.

**Why it matters:** They are setting up every vendor relationship for the first time. No legacy pricing system. No years of habit to break. A store owner in Week 1 of their business is the easiest yes you will ever get.

**Window:** 30 days from opening. After that, they find a workaround.

**How we find them:** Google Business Profile new listings + state business registry filings + local news scrapers + industry trade publication monitoring.

**Volume estimate:** 80–120 new flooring store openings per month in the US.

---

### TRIGGER 2: Showroom Manager Hire
**What it is:** A flooring store posts a job listing for a showroom manager, floor sales associate, or pricing coordinator.

**Why it matters:** A new hire walking into a paper-based showroom has immediate pain on Day 1. They are actively looking for a better system before their first performance review. They are also the internal champion who will advocate for QR Floor Genie to the owner.

**How we find them:** Indeed, LinkedIn Jobs, ZipRecruiter — automated scrape for flooring + showroom + pricing job titles.

**Volume estimate:** 40–60 new job postings per month matching this signal.

---

### TRIGGER 3: Negative Google Review Mentioning Pricing
**What it is:** A customer leaves a 1–3 star Google review for a flooring store that specifically mentions pricing confusion, inconsistent pricing, or difficulty understanding quotes.

**Why it matters:** This is public evidence of your product's exact value proposition. The store owner reads these reviews. They know they have a problem. A cold call that opens with "I saw a recent review mentioning pricing confusion in your showroom" is not a cold call — it's a warm intervention.

**How we find them:** Google Reviews API + keyword monitoring for "pricing," "quote," "price sheet," "confusing prices" across flooring store Google Business Profiles.

**Volume estimate:** 20–40 stores per month showing this signal.

---

### TRIGGER 4: Trade Show Attendance
**What it is:** A flooring store owner or employee registers for or attends a major flooring industry event (Surfaces, The International Surface Event, Floor Covering Industry Foundation events, regional distributor shows).

**Why it matters:** Trade show attendees are in active investment mode. They are evaluating new products. They are comparing vendors. They are in the mindset of buying. A message that lands within 72 hours of their show attendance converts at 3–4x the rate of a generic outreach.

**How we find them:** Event exhibitor/attendee lists (where available), LinkedIn event attendees, industry association member announcements.

**Volume estimate:** Varies by show — 100–300 per major show, 2–4 shows per quarter.

---

### TRIGGER 5: New Website Launch or Major Redesign
**What it is:** A flooring store launches a new website or significantly updates their existing one — signaling they are investing in their business and modernising.

**Why it matters:** A store owner who just invested in a new website is in an upgrade mindset. They are spending money on the business. They are thinking about first impressions. A QR code pricing system is a logical next step for a business that just refreshed its digital presence.

**How we find them:** Wayback Machine delta monitoring + Wappalyzer change signals + new domain registrations for flooring-related businesses.

**Volume estimate:** 30–50 per month.

---

### SIGNAL SUMMARY TABLE

| Trigger | Est. Volume/Month | Intent Level | Window to Act |
|---------|------------------|--------------|---------------|
| New Store Opening | 80–120 | HIGHEST | 30 days |
| Showroom Manager Hire | 40–60 | HIGH | 14 days |
| Negative Pricing Review | 20–40 | HIGH | 7 days |
| Trade Show Attendance | 50–150 (show-dependent) | MEDIUM-HIGH | 72 hours |
| New Website Launch | 30–50 | MEDIUM | 21 days |

**Combined monthly signal volume: 220–420 trigger events**
We sequence the top 300 per month based on intent score and trigger recency.

---

# PART 3 — THE SEQUENCE ARCHITECTURE

## What Actually Gets Sent, and When

Each trigger gets its own sequence. Not templates. Not the same email
with a different subject line. Completely different copy based on why
the store is in the signal.

---

### SEQUENCE A — New Store Opening (Primary: Cold Call + Email)

**Call script opening:**
> "Hi [Name], this is Collins — I work with a company called QR Floor Genie.
> I saw [Store Name] just opened — congratulations. Quick question:
> have you sorted out how you're going to manage pricing across the showroom floor yet?
> That's usually the thing that catches new stores off guard in Week 2."

**Email 1 (Day 1 — same day trigger fires):**
Subject: pricing system for [Store Name] — before it becomes a problem
> [Name], saw [Store Name] just opened. Before you're two months in and realizing
> the paper binder isn't cutting it — there's a better way to set this up from Day 1.
> QR Floor Genie gives your customers live pricing on their phone at every display.
> Takes 2 hours to install. I can show you in 15 minutes. [Calendly link]

**Email 2 (Day 4):**
Subject: the pricing problem most new showrooms hit by Week 4
> Short one. Most new flooring stores spend the first month focused on the physical setup
> and realize 3 weeks in that customers are confused about pricing at every display.
> We fix that before it costs you a customer. [Calendly link]

**Email 3 (Day 10):**
Subject: still worth 15 minutes?
> [Name] — sent a couple of notes. If the timing is off, just say so and I'll leave you alone.
> If pricing on the showroom floor is still on your list, 15 minutes is all I need.
> [Calendly link]

---

### SEQUENCE B — Showroom Manager Hire (Primary: Email + LinkedIn)

**Email 1 (Day 1):**
Subject: for the new showroom manager at [Store Name]
> [Name], I saw [Store Name] is bringing on a new showroom manager.
> The first thing they're going to notice: if your pricing is on paper binders,
> they're going to spend Week 1 manually updating every sheet.
> There's a QR-based system that eliminates that entirely.
> Worth 15 minutes before their first day? [Calendly link]

**LinkedIn DM (Day 3):**
> Hey [Name] — noticed [Store Name] is hiring a showroom manager.
> Reached out via email about a pricing tool that makes their job significantly easier from Day 1.
> Worth a quick look? Collins

**Email 2 (Day 7):**
Subject: the showroom manager onboarding shortcut
> Still worth a 15-minute look. QR Floor Genie handles the pricing problem before it becomes a training problem. [Calendly link]

---

### SEQUENCE C — Negative Pricing Review (Primary: Cold Call)

**Call script opening:**
> "Hi [Name], Collins here — I work with QR Floor Genie.
> I came across a recent review for [Store Name] that mentioned
> customers having trouble with pricing in the showroom.
> That's actually the exact problem we built a product to solve.
> Do you have 90 seconds for me to show you what I mean?"

**Email 1 (Day 1, sent 2 hours before or after the call):**
Subject: the pricing review at [Store Name]
> [Name] — saw a recent customer review mentioning confusion around pricing in your showroom.
> Most store owners don't see these until they've already cost a sale.
> QR Floor Genie puts live pricing on every display — customers scan the QR, get current pricing, no confusion.
> Can I show you in 15 minutes? [Calendly link]

---

### SEQUENCE D — Trade Show (Primary: Email, Time-Sensitive)

**Email 1 (within 72 hours of show):**
Subject: following up from [Show Name]
> [Name] — weren't in the same booth, but I know you were at [Show Name] this week.
> If you were evaluating any kind of showroom technology, QR Floor Genie was probably
> the most relevant thing you weren't shown.
> Live pricing on every display. QR-based. No app download for the customer.
> 15 minutes this week — I can show you exactly what it looks like in a showroom like yours.
> [Calendly link]

---

### SEQUENCE E — New Website (Primary: Email)

**Email 1 (Day 1):**
Subject: noticed [Store Name] just updated the site
> [Name] — the new site looks sharp. If you're modernising the digital side,
> worth knowing there's a tool that brings that same upgrade to the showroom floor itself.
> Customers scan a QR code at any display and get live pricing on their phone.
> Takes 2 hours to set up. [Calendly link]

---

# PART 4 — THE CHANNEL STACK

## How the Three Channels Work Together

```
SIGNAL FIRES
     |
     ├──> COLD CALL (primary for Triggers 1, 3)
     |    └── Voicemail if no answer (second attempt)
     |         └── Voicemail script references the specific trigger
     |
     ├──> EMAIL (primary for Triggers 2, 5 / support for all)
     |    └── Trigger-specific copy — not templates
     |         └── Sequence: 3 emails over 10 days, then pause
     |
     └──> LINKEDIN (support channel for Triggers 2, 4)
          └── Connection request + DM after email 1
               └── Profile view 48h before email 1 (warm before cold)
```

**Why cold calling is the PRIMARY channel for Triggers 1 and 3:**

Flooring store owners are not on LinkedIn all day. They are on the floor.
Their email gets checked once in the morning, once at the end of the day.
But they pick up the phone — especially from a local or recognizable area code.
Your 15–16% connect rate confirms this.

A signal-triggered cold call that opens with a reference to their specific
situation (just opened, saw the review) is not a cold call. It converts
at 3–5x a generic call.

---

# PART 5 — THE TECH STACK

## What We Build On

| Layer | Tool | Purpose |
|-------|------|---------|
| Signal monitoring | Clay | Scrapes and monitors all 5 trigger sources daily |
| Lead enrichment | Apollo | Phone, email, LinkedIn verification for every trigger lead |
| Email sequencing | Smartlead | Signal-specific sequences (not templates) |
| Cold calling | JustCall | Power dialer, local area code, call recording, AI summary |
| LinkedIn | Expandi | Pre-engagement (profile view + like before email) |
| CRM | HubSpot Starter | Pipeline tracking, stage management, deal notes |
| Reporting | Google Sheets | Weekly signal volume, reply rates, demo pipeline |

**What SELLL owns and manages:**
- Clay table setup and signal monitoring
- Apollo list enrichment
- Smartlead sequence setup and optimization
- JustCall dialer operation (the SDR calls from JustCall)
- Expandi campaign management

**What QR Floor Genie provides:**
- Sending domain (we set it up and warm it — you own it)
- Access to any existing Apollo account or lead lists
- Demo availability in Calendly (or equivalent)
- Demo script / product walkthrough (so we know what we're booking people into)
- Approval on sequence copy before launch

---

# PART 6 — THE 14-DAY LAUNCH TIMELINE

## Day-by-Day: Month 1 Infrastructure Build

### WEEK 1 — Foundation

| Day | What Happens | Who |
|-----|-------------|-----|
| Day 1 | Kickoff call — access, ICP confirmation, copy brief | Collins + James |
| Day 1 | Sending domain purchased + DNS configured | SELLL |
| Day 2–5 | Domain warmup begins (automated, 14-day process) | SELLL |
| Day 2 | Clay table built — 5 signal sources connected | SELLL |
| Day 3 | Apollo enrichment pipeline configured | SELLL |
| Day 3 | First signal pull — initial list of 150–200 trigger leads | SELLL |
| Day 4 | Sequence copy drafted — all 5 trigger sequences | SELLL → James review |
| Day 5 | James reviews and approves copy | James |

### WEEK 2 — Go Live

| Day | What Happens | Who |
|-----|-------------|-----|
| Day 8 | Sequences uploaded to Smartlead | SELLL |
| Day 8 | JustCall configured + local area code numbers purchased | SELLL |
| Day 8 | Expandi campaigns structured | SELLL |
| Day 9 | HubSpot pipeline configured — stages + deal properties | SELLL |
| Day 10 | Test run — 10 contacts sequenced, James monitors | Collins + James |
| Day 11 | Feedback from test run incorporated | SELLL |
| Day 12 | Full launch — 300 contacts enter sequences | SELLL |
| Day 14 | First call activity begins (domain is warmed) | SELLL SDR |

**By Day 14:** Outreach is live. Signals are firing. Every flooring store that
triggers one of the 5 events is in a sequence within 24 hours.

---

# PART 7 — WHAT MONTH 1 LOOKS LIKE

## Weekly Activity (Once Live)

| Metric | Week 1 | Week 2 | Week 3 | Week 4 |
|--------|--------|--------|--------|--------|
| Signal triggers pulled | 0 (build) | 75 | 150 | 300 |
| Emails sent | 0 | 75 | 225 | 450 |
| Cold calls made | 0 | 30 | 60 | 100 |
| Connect rate (calls) | — | 15% | 15% | 15% |
| Conversations | 0 | 4–5 | 9–10 | 15 |
| Demos booked (target) | 0 | 1 | 1–2 | 2 |

**Month 1 total: 3–4 qualified demos booked. Guaranteed.**

A "qualified demo" is defined as: a flooring store owner or decision-maker who confirms
a scheduled video or phone call with James to view the QR Floor Genie product.
Appointment must be held, not just booked.

---

# PART 8 — WHAT HAPPENS AFTER THE BUILD

## Month 1 → Month 3 Trajectory

### Month 1: Launch + First Demos
- System live, outreach running
- 3–4 demos booked (guaranteed)
- Close rate data starts emerging
- Copy A/B testing begins

### Month 2: Optimization
- Top-performing trigger (likely New Store Opening) scaled
- Underperforming sequences rewritten based on reply data
- Call scripts refined based on actual objections logged
- Target: 6–8 demos

### Month 3: Compounding
- Signal monitor fully calibrated to QR Floor Genie's actual close data
- Cold call scripts updated with real objection handlers
- SDR fully trained on product, ICP, competitive positioning
- Target: 8–12 demos/month
- At a 30% close rate: 2–4 new flooring store customers per month

### Month 4+: Maintenance Mode ($2,500/month)
- SDR continues outreach on your behalf
- Weekly reporting: signal volume, demos, pipeline
- Monthly sequence optimization
- SDR deployment decision: booking demos OR supporting closing — your call

---

## Conservative / Realistic / Upside Scenarios

| Scenario | Monthly Demos | Close Rate | New Customers/Month | Annual Revenue Added |
|----------|--------------|------------|--------------------|--------------------|
| Conservative | 4 | 20% | 1 | 12/year |
| Realistic | 8 | 30% | 2–3 | 24–36/year |
| Upside | 15 | 35% | 5 | 60/year |

*Revenue per customer assumes $299/month QR Floor Genie subscription × 12 months = $3,588 ACV*
*At realistic scenario: 24 new customers × $3,588 = $86,112 in ARR added*
*SELLL investment over 12 months: $4k × 3 + $2.5k × 9 = $34,500*
*Net ARR added above SELLL cost at realistic scenario: $51,612*

---

# PART 9 — THE GUARANTEE

Stated plainly so James can repeat it to his partner:

```
IF WE DO NOT BOOK 3–4 QUALIFIED DEMOS IN MONTH 1:
→ Month 2 services are provided at no charge until the guarantee is met.

Definition of "qualified demo":
A held video or phone call between a flooring store owner or decision-maker
and the QR Floor Genie team, where the QR Floor Genie product is demonstrated.

Conditions that must be met by QR Floor Genie for the guarantee to apply:
→ Demo calendar availability of minimum 10 open slots per week in Month 1
→ Response to booked demos within 24 hours of booking confirmation
→ Demo product functional and demonstrable throughout the month
→ Copy approval provided within 48 hours of submission

The guarantee is not voided by market conditions, seasonality, or competitor activity.
It is voided only if QR Floor Genie does not meet the above four conditions.
```

---

# PART 10 — WHAT JAMES NEEDS TO DO BEFORE KICKOFF

| Item | Why We Need It | Deadline |
|------|---------------|---------|
| Demo calendar link (Calendly or equivalent) | Goes into every sequence CTA | Day 1 |
| Sending domain purchase (we walk you through it) | Domain warmup starts Day 1 | Day 1 |
| Apollo account access (if you have one) | Existing lists + credits | Day 1 |
| Best demo recording (Loom or Zoom) | So SDR understands the product | Day 2 |
| Top 3 customer types that convert best | Shapes signal prioritization | Day 1 call |
| Partner on the kickoff call if possible | Build plan approval goes faster | Day 1 |

---

# CLOSE THE CALL WITH THIS

> "James, you've seen the full build. This is not a retainer where you pay
> and wait. By Day 14, outreach is live. By the end of Month 1,
> you have 3–4 flooring store owners who have seen your product.
>
> The only question is whether the timing is right for you.
> You've already said it is. So here's what I'd like to do:
> send you the agreement today, you sign this week, and we're
> in kickoff next Monday.
>
> Does that work?"

---

*QR Floor Genie × SELLL.io — Build Plan Call Deck*
*Collins Ogiki | SELLL.io | July 2026*

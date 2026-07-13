# ALIF Agency — HubSpot User Manual
> Version 1.0 | Built by SELLL.io | 2026-07-03
> For: Collins Ogiki, Amir | Account: ALIF Agency HubSpot Portal
> Purpose: Complete reference guide for every tool, view, and process built in HubSpot

---

## WHAT THIS CRM DOES FOR ALIF

Before this build, ALIF's sales process lived in personal inboxes, WhatsApp threads, and memory. Deals slipped through. Follow-ups got missed. There was no way to know which prospects were ready to close or where revenue was coming from.

This HubSpot build changes that. Every prospect ALIF ever contacts now has a full record — who they are, why they were contacted, which signals triggered outreach, every email sent, every call made, every deal stage they moved through, and why they closed or didn't.

The result: a sales operation that runs with or without any individual person, tracks every dollar of pipeline in real time, and gets smarter the more data it collects.

---

## WHO USES WHAT

| Team Member | Primary Use | Daily Time in HubSpot |
|-------------|-------------|----------------------|
| **Collins** | Pipeline management, contact outreach, deal progression, daily command center | 30–45 min/day |
| **Amir** | Revenue dashboard, deal oversight, team activity monitoring | 15–20 min/day |

---

## PART 1 — THE CONTACT RECORD

Every person ALIF reaches out to is a **Contact** in HubSpot. The contact record is the single source of truth for that person — every email, call, meeting, deal, and note lives there.

### How to Create a Contact
**CRM → Contacts → Create Contact (top right)**
- Enter: First name, Last name, Email, Phone, Company name
- Set: Lifecycle Stage = `Lead`
- Fill in custom properties (see below)

### What the Custom Contact Properties Mean

| Property | What It Is | When to Fill It |
|----------|-----------|----------------|
| **ICP Grade** | A+/A/B/C/D — how closely this person matches ALIF's ideal client | After Clay enrichment or manual research |
| **ICP Score** | 0–100 numerical score behind the grade | Populated by Clay automatically |
| **ICP Segment** | Which ALIF vertical they belong to (D2C, F&B, Tech etc.) | When contact is created |
| **Region** | Their geography (US, Canada, UK, EU etc.) | When contact is created |
| **Signal Type** | What buying trigger caused you to reach out | When outreach is initiated |
| **Signal Count** | How many signals are stacked | Update when new signals identified |
| **Signal Date** | When the signal was first spotted | When outreach is initiated |
| **Brand Gap Score** | 1–5 rating of their brand vs performance gap | After reviewing their Instagram + Meta Ad Library |
| **Meta Ad Status** | Whether they're running Meta ads and quality | After Meta Ad Library review |
| **Outreach Channel** | How you first reached this person | When outreach starts |
| **Instantly Campaign** | Which Instantly sequence they're in | When enrolled in Instantly |
| **Clay Enriched** | Whether Clay has run on this contact | Check after Clay export |
| **AI Personalised Line** | The Clay-generated opening line used | Auto-populated from Clay |
| **LinkedIn URL** | Their LinkedIn profile link | When contact is created |
| **Instagram Handle** | Their Instagram username | When contact is created |
| **Referral Source** | Who referred them to ALIF | If they came via referral |
| **Do Not Contact** | Hard stop — no outreach of any kind | If they request removal |
| **Recycled Date** | Date to re-engage after "not now" | When deal is marked Recycled |
| **Last Signal Note** | Description of the specific signal | When outreach is initiated |

### Lifecycle Stages — What Each Means

| Stage | Definition | Who's Here |
|-------|-----------|-----------|
| **Lead** | In CRM, not yet contacted | Fresh Apollo imports, signal intake |
| **MQL** | Active in Instantly sequence | Being outreached via cold email |
| **SQL** | Replied positively | Collins is working them manually |
| **Opportunity** | Discovery call booked or completed | Active deal in pipeline |
| **Customer** | Closed Won, paying retainer | Active clients |
| **Evangelist** | Client who has referred someone | Post-referral clients |

**Rule:** Move lifecycle stage manually as the relationship progresses. Never skip stages.

---

## PART 2 — THE COMPANY RECORD

Every Contact is associated with a **Company** in HubSpot. The company record holds business-level information.

### What the Custom Company Properties Mean

| Property | What It Is | When to Fill It |
|----------|-----------|----------------|
| **Estimated Annual Revenue** | Revenue bracket — budget proxy | After research or discovery call |
| **Tech Stack** | What platforms they run (Shopify, Meta Pixel etc.) | After Apollo/Clay enrichment |
| **Estimated Ad Spend** | Monthly paid media spend | After Meta Ad Library review |
| **Current Agency Status** | Whether they have an agency now | After discovery call or research |
| **Instagram Followers** | Their IG follower count | When contact is created |
| **Website Traffic Tier** | Monthly traffic from SimilarWeb | After SimilarWeb check |
| **MENA Expansion Intent** | Are they planning to enter MENA? | After discovery call |
| **Ahrefs Domain Rating** | Their website's DR score | After Ahrefs check |
| **Owler Watchlist** | Are they on Owler monitoring? | When added to Owler |

---

## PART 3 — THE PIPELINE

Every qualified prospect becomes a **Deal** in HubSpot. The deal tracks the commercial opportunity from first positive reply to signed contract.

### The 10 Deal Stages

| Stage | What It Means | Who Moves the Deal |
|-------|--------------|-------------------|
| **Engaged (10%)** | First positive reply received | Auto via n8n or Collins manually |
| **Disco Call (25%)** | Discovery call booked | Auto via Calendly + n8n |
| **Qualified (40%)** | Call happened, confirmed ICP fit | Collins manually within 24h of call |
| **Audit Sent (55%)** | Free Creative + Performance Audit delivered | Collins manually |
| **Proposal Sent (70%)** | Formal proposal + pricing delivered | Collins manually |
| **Contract Sent (85%)** | Contract/agreement issued | Collins manually |
| **Closed Won (100%)** | Signed + deposit received | Collins manually |
| **Closed Lost (0%)** | Deal dead | Collins manually — must fill Close Reason |
| **Disqualified (0%)** | Not ICP fit — do not recycle | Collins manually |
| **Recycled (5%)** | Not now — set Recycled Date for re-engagement | Collins manually |

### Win Probability
The % next to each stage feeds HubSpot's automatic revenue forecast. When you have deals in multiple stages, HubSpot multiplies the deal value by the probability and shows you the weighted forecast — this is what Amir sees on the Revenue Dashboard.

### How to Create a Deal
**CRM → Deals → Create Deal (top right)**
- Deal name: `[First Name] @ [Company] — Disco [Date]`
- Pipeline: ALIF Agency Pipeline
- Deal stage: Start at `Engaged`
- Associated contact: link the contact
- Associated company: link the company
- Fill in: ICP Grade, ICP Segment, Region, Trigger Type, Proposal Monthly Value

### Custom Deal Properties

| Property | What It Is | When to Fill It |
|----------|-----------|----------------|
| **ICP Grade** | Quality tier of this deal | When deal is created |
| **ICP Score** | Numerical score 0–100 | When deal is created |
| **ICP Segment** | Which vertical this deal is in | When deal is created |
| **Region** | Geography of this deal | When deal is created |
| **Signal Count** | Signals stacked when deal opened | When deal is created |
| **Trigger Type** | What buying signals opened this deal | When deal is created |
| **Brand Gap Score** | 1–5 brand gap assessment | After brand audit |
| **Discovery Call Recording** | Aircall recording URL | After discovery call |
| **Audit Delivered** | Whether audit has been sent | Check when audit sent |
| **Audit Delivery Date** | When audit was sent | When audit is sent |
| **Proposal Monthly Value** | Monthly retainer in USD | Before moving to Proposal Sent |
| **Close Reason** | Why deal was lost | Required when moving to Closed Lost |
| **Referral Source** | Who referred this deal | If referral-sourced |

---

## PART 4 — EMAIL TEMPLATES

Templates save Collins from writing the same email 50 times. Access them from inside any contact record by clicking **Email → Templates**.

| Template Name | When to Use | Key Action After Sending |
|--------------|-------------|------------------------|
| **Disco Confirm** | Immediately after discovery call is booked | Move deal to Disco Call |
| **Pre-Call Brief** | 30 minutes before every discovery call | — |
| **Post-Disco Recap** | Within 30 minutes of discovery call ending | Fill in the [FILL IN] sections first |
| **Audit Delivery** | When sending the free brand audit | Move deal to Audit Sent |
| **Proposal Delivery** | When sending formal proposal | Move deal to Proposal Sent |
| **Proposal Follow-Up** | 3 days after proposal if no reply | Log as activity |
| **Contract Chase** | 48 hours after contract sent if not signed | Call as well — don't just email |
| **Referral Ask — Day 30** | 30 days after Closed Won | Log referral source if they respond |

**Rule:** Always personalise 2–3 lines of every template before sending. A template that reads like a template doesn't convert.

---

## PART 5 — SNIPPETS

Snippets are text shortcuts. Type `#` followed by the keyword in any HubSpot email compose window and the full text drops in.

| Shortcut | What It Inserts | When to Use |
|----------|----------------|-------------|
| `#proof` | ALIF social proof statement ($2M+, 98% satisfaction) | When prospect questions credibility |
| `#d2c` | D2C brand case study line | When prospect is a D2C/ecommerce brand |
| `#hosp` | Hospitality/wellness case study line | When prospect is F&B, spa, gym, lifestyle |
| `#tech` | Tech startup case study line | When prospect is a startup or SaaS |
| `#audit` | Free audit CTA with booking link | At the end of cold outreach or follow-ups |
| `#nopitch` | Disarming no-pitch line | When prospect seems guarded or cold |
| `#budget` | Budget objection response | When prospect says "we don't have budget" |
| `#timing` | Timing objection response | When prospect says "not right now" |

---

## PART 6 — MEETINGS

Collins' discovery call booking link is live in HubSpot.

**Link:** `meetings.hubspot.com/alifagency/collins-discovery`

**What happens when someone books:**
1. They fill in 4 qualifying questions (company, challenge, agency status, how they heard)
2. HubSpot creates or updates their contact record automatically
3. n8n fires a Slack notification to #alif-meetings with all their details
4. A deal is created automatically at `Disco Call` stage
5. Collins receives a task to prep for the call

**Before every discovery call — Collins must:**
- Open the deal in HubSpot
- Check their Instagram handle and LinkedIn URL on the contact record
- Review Meta Ad Library for their brand
- Check ICP Grade and Signal Type
- Have the Post-Disco Recap template ready to send within 30 minutes of the call

---

## PART 7 — DASHBOARDS

Four dashboards give the team real-time visibility on the business.

### Dashboard 1: Daily Command Center
**Who uses it:** Collins — every morning
**What it shows:**
- All open deals by pipeline stage
- Deal revenue forecast by stage
- Closed deals vs monthly goal
- Team activity totals (calls, emails, meetings)
- Activity trend by date
- Contacts created this week

**How to use it:** Open this first thing every morning. Any deal with no activity in 3+ days needs immediate attention. Any stage with zero deals means the top of the funnel needs feeding.

---

### Dashboard 2: Cold Calling Performance
**Who uses it:** Collins — daily after calling sessions
**What it shows:**
- Call activity tracker (duration, outcome, contact, company)
- Call outcome breakdown (connected vs voicemail vs no answer — pie chart)
- Team activity totals
- Closed deals vs goals

**How to use it:** After every calling session, check the outcome breakdown. If voicemail rate is above 60%, change the calling time. If connect rate is low, test different hours or days.

---

### Dashboard 3: Pipeline Health
**Who uses it:** Collins + Amir — every Monday
**What it shows:**
- Deals by pipeline stage (bar chart)
- Pipeline by ICP Grade (pie chart — are A+ deals dominating?)
- Deal revenue forecast
- Closed deals vs goals
- Team activity totals

**How to use it:** Monday morning review. Are deals moving through stages? Is the pipeline dominated by A+ and A deals or is it full of B/C dead weight? Is activity volume enough to hit revenue targets?

---

### Dashboard 4: Revenue Dashboard
**Who uses it:** Amir — monthly review
**What it shows:**
- Revenue by ICP Segment (which verticals generate the most)
- Revenue by Region (US vs Canada vs UK vs EU)
- Monthly Revenue Trend (growth line chart)
- Deal revenue forecast
- Closed deals vs goals

**How to use it:** Monthly business review. Which segments to double down on, which regions to invest more outreach in, and whether revenue is trending up month over month.

---

## PART 8 — SAVED VIEWS

### Contact Views
Access via: **CRM → Contacts → View dropdown (top left)**

| View | What It Shows | When to Use |
|------|--------------|-------------|
| **Signal Queue** | New contacts not yet outreached | Every morning — who needs to be contacted today |
| **A+ Prospects** | Highest priority contacts only | When Collins has limited time — work these first |
| **Active Outreach** | Contacts in Instantly sequences | Mid-week check — who's being worked |
| **Needs Reply** | Contacts who replied — SQL stage | Check twice daily — these are hot |
| **Recycle Ready** | Contacts whose Recycled Date is this week | Sunday — who gets re-engaged this week |
| **All Clients** | Every Closed Won contact | For referral asks and upsell conversations |

### Deal Views
Access via: **CRM → Deals → View dropdown (top left)**

| View | What It Shows | When to Use |
|------|--------------|-------------|
| **Hot Board** | Disco Call + Qualified + Audit Sent deals | Daily — these need active attention |
| **Proposal Tracker** | Proposal Sent + Contract Sent deals | Daily — are these moving or stalling? |
| **This Week's Calls** | All Disco Call stage deals | Morning of call days — prep for these |
| **Stale Deals** | Deals with no activity in 4+ days | Friday — nothing should sit untouched |
| **Closed Won** | All won deals | Monthly review + referral identification |
| **Recycle Queue** | Deals staged as Recycled | Sunday — who gets reactivated this week |
| **Lost Analysis** | All Closed Lost deals | Monthly — review loss reasons and patterns |

---

## PART 9 — INTEGRATIONS

### Aircall
**What it does:** Every call Collins or Amir makes from Aircall logs automatically on the HubSpot contact record — call duration, recording, outcome, and notes. No manual entry.

**How to use:** Make calls from Aircall as normal. After each call, add a brief note in Aircall about the outcome. It syncs to HubSpot within minutes.

**What you see in HubSpot:** Open any contact record → scroll to Activity → all calls appear with recording links, duration, and outcome.

### Instantly
**What it does:** Campaign activity from Instantly connects to HubSpot via n8n webhooks. When a prospect replies to an Instantly campaign, their HubSpot contact is updated and Collins gets a Slack notification in #alif-replies.

**What triggers automatically:**
- Reply received → HubSpot contact updated → Slack notification fires
- Collins responds to the reply within 2 hours

### Apollo (connecting Monday)
**What it does:** Every contact Collins qualifies and exports from Apollo lands in HubSpot automatically with all enrichment data pre-filled — no manual import needed.

---

## PART 10 — DAILY OPERATING PROCEDURE

### Collins' Daily Routine (30–45 minutes)

**Morning (first 15 minutes):**
1. Open **Daily Command Center** dashboard
2. Check **Hot Board** deal view — any deal needing action today?
3. Check **Signal Queue** contact view — any new prospects to enrich and qualify?
4. Check **Needs Reply** contact view — any positive replies to respond to?
5. Check **This Week's Calls** — prep for any discovery calls today

**During the day:**
- Log every call outcome in Aircall (syncs to HubSpot automatically)
- Move deals to the correct stage after every interaction
- Send templates within 30 minutes of any call or meeting
- Respond to Instantly replies within 2 hours (Slack #alif-replies notifies you)

**End of day (5 minutes):**
- Check **Stale Deals** view — any deals untouched today?
- Create tasks for tomorrow's follow-ups
- Update any deal stages that moved today

---

### Monday Weekly Review (Collins + Amir — 30 minutes)

1. Open **Pipeline Health** dashboard
2. Review deals by stage — where is pipeline light?
3. Review ICP Grade breakdown — too many B/C deals?
4. Open **Revenue Dashboard** — on track for monthly target?
5. Check **Recycle Queue** — who gets reactivated this week?
6. Check **Lost Analysis** — any patterns in why deals are dying?
7. Set weekly priorities: which deals to push, which signals to chase

---

## PART 11 — PENDING ITEMS (Complete When Ready)

| Item | What to Do | When |
|------|-----------|------|
| **Email Signatures** | Add Collins + Amir branded signatures in Settings → General | When Aircall number + Calendly link confirmed |
| **Forms** | Connect HubSpot brand audit form to Webflow site | When dev team updates alifagency.ai |
| **Conversations Inbox** | Connect team email + chat widget | When dev team adds HubSpot tracking code to site |
| **Documents** | Upload credentials deck + case studies | When case studies ready from dev |
| **Sequences** | Upgrade to Sales Hub Professional to unlock | When ready to scale outbound |
| **Workflows** | Build 8 automation workflows | When ready to automate pipeline |
| **Apollo Integration** | Connect Apollo to HubSpot | Monday |
| **n8n Workflows** | Build Calendly + Instantly Slack notifications | When n8n is set up on Railway |

---

## QUICK REFERENCE — WHERE IS EVERYTHING?

| What You Need | Where to Find It |
|--------------|-----------------|
| All contacts | CRM → Contacts |
| All deals | CRM → Deals |
| Pipeline board | CRM → Deals → Board view |
| Email templates | Any contact → Email → Templates |
| Snippets | Any email compose → # shortcut |
| Dashboards | Reports → Dashboards |
| Meetings link | Sales → Meetings |
| Documents | Sales → Documents |
| Conversations | Conversations → Inbox |
| Workflows | Automation → Workflows |
| Properties | Settings → Properties |
| Pipeline settings | CRM → Deals → Pipeline dropdown → Edit |
| Users | Settings → Users & Teams |
| Integrations | Settings → Integrations → Connected Apps |

---

*This manual covers ALIF's HubSpot build as of 2026-07-03. Update this document whenever new sections are completed or configurations change. Every team member should read Parts 1–10 before using the CRM.*

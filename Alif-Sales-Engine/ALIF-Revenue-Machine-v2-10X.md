# ALIF Revenue Machine — v2 (10X Upgrade)
> GTM Engineering Level: Aaron Shepard tier
> Stack additions: Clay (trial) + Ahrefs
> Geography: US, Canada, Europe (MENA excluded)
> Date: 2026-07-02

---

## WHAT CHANGES IN v2

v1 was a solid outbound machine. v2 is a revenue engine.

The difference:
- v1 sent emails at volume. v2 reaches the right person at the right moment with a message that feels like it was written for them specifically — because it was.
- v1 had one channel (email). v2 has five channels coordinated with precision.
- v1 found signals. v2 stacks multiple signals before touching anyone.
- v1 had manual enrichment. v2 enriches and personalises automatically via Clay.
- v1 only pushed (outbound). v2 pulls inbound simultaneously via LinkedIn content + website visitor ID.

```
v1:  SIGNAL → APOLLO FIND → MANUALLY SCORE → SEND EMAIL
v2:  3+ SIGNALS STACK → CLAY AUTO-ENRICH + AI FIRST LINE → MULTI-CHANNEL SEQUENCE
                         ↑                                        ↑
               RB2B captures warm visitors            LinkedIn content drives inbound
               Ahrefs finds competitor gaps           Video prospecting for A+ targets
               LinkedIn warm before email             Referral loop auto-runs in HubSpot
```

---

## PART 1 — 10X ENGINE UPGRADES

### UPGRADE 1: CLAY AS THE CENTRAL INTELLIGENCE LAYER

This is the single highest-leverage upgrade. Clay replaces scattered manual research and connects every data source into one automated pipeline.

**What Clay does in this machine:**

```
Apollo prospect list (CSV export)
        │
        ▼
CLAY WATERFALL ENRICHMENT
├── Email: Apollo → Hunter.io → Dropcontact → LinkedIn scrape (in priority order)
├── LinkedIn URL: Apollo → PhantomBuster
├── Company news: Clearbit news → Google News API → Bing News
├── Ad status: Meta Ad Library API check (are they running ads? what does creative look like?)
├── Website traffic: SimilarWeb API (traffic tier — budget proxy)
├── Tech stack: BuiltWith API (running Shopify + Meta Pixel = active ad budget)
├── LinkedIn posts: Last 3 posts scraped (what did they post this week?)
├── Recent news: Bing news pull for company name (last 30 days)
└── Funding: Crunchbase API (funding amount + date)
        │
        ▼
CLAY AI FIRST LINE (GPT-4 via Clay)
Prompt: "Write a 20-word cold email opening line for this prospect.
Company: {{company_name}}. Industry: {{industry}}.
Recent news: {{recent_news}}. LinkedIn post: {{linkedin_post_1}}.
Ad quality: {{ad_status}}. ICP segment: {{segment}}.
Make it feel like the sender noticed something specific about them.
Do not start with 'I'. No emojis. Sound like a peer, not a salesperson."

Example output:
"Saw [Brand] just launched on Shopify and is running Meta ads — the creative doesn't
match the product quality. Worth 20 mins to show you the gap?"
        │
        ▼
PUSH TO INSTANTLY
Contact exported to correct sequence with {{ai_first_line}} populated
HubSpot contact created simultaneously with all enrichment data
```

**Why this is 3–5× on reply rates:**
The average cold email open rate is 40–50%. Reply rate is 2–3%. With Clay AI personalization, reply rates go to 8–15%. That is not an incremental gain — it is a different machine.

**Clay Tables to Build (During Trial):**

| Table Name | Input | Enrichment Stack | Output |
|------------|-------|-----------------|--------|
| `US-D2C-Outreach` | Apollo export (D2C/beauty/fashion, US) | Email + Meta Ad Library + LinkedIn posts + Shopify check | Instantly sequence A or B |
| `EU-Tech-Outreach` | Apollo export (tech startups, EU) | Email + Crunchbase funding + LinkedIn posts + news | Instantly EU sequence |
| `Competitor-Gap-Targets` | Ahrefs Link Intersect export | Email + Clay enrichment + AI line | Instantly priority sequence |
| `Website-Visitors` | RB2B webhook → Clay | Full LinkedIn enrichment + company data + AI line | Instantly warm sequence (same day) |
| `Signal-Intake` | Google Alerts → Clay | Email + enrichment + ICP score | Instantly correct tier |

---

### UPGRADE 2: AHREFS AS A PROSPECTING SOURCE

Most people use Ahrefs for SEO. Elite GTM engineers use it to find prospects.

**Method 1 — Link Intersect (Best Method)**
Find companies that link to ALIF's competitors but not to ALIF.
These are already validated buyers of creative/digital agency services.

```
Ahrefs → Site Explorer → Link Intersect
Enter: 3–5 competitor domains (digital agencies serving US/EU D2C/hospitality)
vs. ALIF's domain
Result: List of companies linking to competitors
These companies have already vetted and recommended agency services.
Export → Push to Clay → Enrich → Instantly
```

**Method 2 — Organic Traffic Decline Targeting**
Companies whose organic traffic is falling are in pain and have budget to fix it.
```
Ahrefs → Site Explorer → enter competitor client's website
Look for: Traffic decline 20%+ in last 90 days
These companies are bleeding and will pay to stop it.
Use Ahrefs Batch Analysis for 200 URLs at once.
```

**Method 3 — Content Gap Prospecting**
Find companies publishing content in target categories but getting no traffic.
They're investing in content with no results = they need ALIF's GEO/SEO strategy.
```
Ahrefs → Content Explorer
Search: "digital marketing" OR "brand strategy" + filter by domain rating 10–40
= small brands trying to create content but struggling
These companies exist in every niche: beauty, fitness, D2C, hospitality
Export → Clay enrichment → Instantly
```

**Method 4 — Competitor Keyword Targeting**
Find who is ranking for terms like "best marketing agency Dubai" "D2C branding agency" etc.
The sites ranking = either competitors (study them) or content sites (find their advertisers = your prospects).

**Ahrefs Weekly Workflow (30 min/week):**
```
Monday: Run Link Intersect report for 5 competitors
         Export top 50 domains
         Push to Clay US-D2C or EU-Tech table
         Clay enriches overnight
         Tuesday: Instantly has 50 new personalised prospects in sequence
```

---

### UPGRADE 3: MULTI-SIGNAL STACKING

v1 reached out on one signal. v2 requires a minimum of 2 signals before any email goes out.
3 signals = A+ priority, Collins personalises manually.

**Why signal stacking works:**
One signal means a company might be buying. Two signals means they almost certainly are. Three signals means they're actively evaluating.

```
Signal Score Matrix:

Signal                          │ Points
──────────────────────────────────────────
New CMO / Head of Marketing     │ +30
Funding announced (<90 days)    │ +30
New location / product launch   │ +25
Agency job posting (in-house)   │ +25
Running Meta ads (bad creative) │ +20
Organic traffic declining       │ +20
LinkedIn post about marketing   │ +15
Website visit (RB2B)            │ +40 (highest — active research intent)
Competitor link (Ahrefs)        │ +20
Recent press mention            │ +15

Total Signal Score → Routes:
80+  → A+ (Collins handles personally, full 10-touch)
60–79 → A  (Semi-personalised, Clay AI line, 7-touch)
40–59 → B  (Automated, 5-touch)
Below 40 → Hold. Wait for second signal.
```

Clay calculates this score automatically. Prospects below 40 go into a watch list — not rejected, just waiting for the second signal before sequence starts.

---

### UPGRADE 4: RB2B — WEBSITE VISITOR IDENTIFICATION (US, FREE)

This is the hottest possible lead. Someone visiting ALIF's website is already 10× warmer than any cold prospect.

**How it works:**
- Install RB2B pixel on alifagency.ai (one line of JavaScript)
- RB2B identifies the LinkedIn profile of US visitors to the site
- Sends the profile + company to a webhook in real time
- Webhook triggers Clay enrichment
- Clay generates AI first line: "Saw you checked out our work — happy to show you exactly what we'd build for [company]"
- Instantly sends email within 60 minutes of the visit

**Cost:** Free for US traffic (paid for non-US)
**Setup time:** 15 minutes
**Expected result:** 3–8 identified visitors/week on a B2B website with any traffic

**RB2B → Instantly flow:**
```
RB2B detects visitor
     │
     ▼
Webhook to n8n/Make.com
     │
     ▼
Clay enriches: name, email, company, LinkedIn, recent activity
     │
     ▼
Clay AI: generates personalised opening line
     │
     ▼
Instantly: sends to "Website Visitor" sequence (same day, 3-touch max)
     │
     ▼
HubSpot: contact created, source = "Website Visitor", ICP score auto-logged
```

---

### UPGRADE 5: LINKEDIN WARM SEQUENCE (BEFORE THE COLD EMAIL)

Cold email reply rates jump 40–60% when the prospect has seen your name on LinkedIn first.

**The warm sequence (per A and A+ prospect):**

```
Day -5: Follow their company page on LinkedIn
Day -3: Like or comment on their most recent post (genuine, relevant)
         "Solid approach on [topic] — the [specific observation] is what most brands miss"
Day -1: Connect with note (25 words max):
         "Following your work on [brand] — building something similar with a few clients right now.
          Would love to connect."
Day 0:  Email 1 hits via Instantly (they recognise the name from LinkedIn)
```

This is not spam. This is context-building. By the time the email arrives, you're a familiar face.

**Tool for LinkedIn warm:** PhantomBuster (free 2h/day) + manual for A+ prospects

---

### UPGRADE 6: VIDEO PROSPECTING FOR A+ TARGETS (SENDSPARK)

For every prospect scoring 80+, send a personalised Loom/Sendspark video in Email 2 (if no reply to Email 1).

**What the video is (60 seconds):**
- Screen recording: Open their website/Instagram
- Show the specific gap you see (30 seconds)
- Tell them exactly how ALIF fixes it, with a reference client (20 seconds)
- One ask: "Worth 20 minutes?" (10 seconds)

**Sendspark (free tier):** Personalises the video thumbnail with their name and company logo.
When they see their own brand name on a video thumbnail in their inbox — open rate is 80%+.

**When to use it:**
- Email 1 sent, no reply after 3 days
- Score was 80+ (worth the 3 minutes to record)
- Use Loom (free) for the recording, embed link in Email 2

---

### UPGRADE 7: LINKEDIN CONTENT ENGINE (INBOUND PULL)

Outbound pushes. LinkedIn content pulls. Running both simultaneously creates a compounding effect where prospects reach out to ALIF — not the other way around.

**Posting cadence: 3× per week (Kaya's LinkedIn)**

| Day | Content Type | Topic |
|-----|-------------|-------|
| Monday | Insight post | "We audited 20 D2C brand accounts this month. 18 of them had the same problem." |
| Wednesday | Case study post | "A wellness brand came to us with 3K followers and no bookings. 90 days later: [result]" |
| Friday | Opinion/POV post | "Most agencies pitch creative OR performance. The problem is that split is what's killing your ROAS." |

**Every post ends with:** "We do a free 20-minute Creative + Performance Audit. No pitch. Just show you the gap. Link in comments."

**What happens when it works:**
Founder in US or EU sees the post → clicks the audit link → visits alifagency.ai → RB2B captures them → Clay enriches → Instantly sends outreach within 60 minutes

**The compounding loop:**
```
LinkedIn post → Website visit → RB2B identifies → Clay enriches → Email → Discovery call
                 ↑
       Comment on post → Direct message → Discovery call
```

---

### UPGRADE 8: REFERRAL LOOP IN HUBSPOT

ALIF's 98% satisfaction rate is an untapped asset. Every closed client should be generating 1–2 referrals within 30 days.

**How it works (fully automated in HubSpot):**

```
Deal moves to "Closed Won"
        │
        ▼
HubSpot workflow triggers:
Day 0: Send onboarding email (confirm kickoff date)
Day 30: Send referral ask email (automated, personalised)
         Subject: "Quick one, [Name]"
         Body: "We're 30 days in with [brand] and [progress update].
                One thing that would mean a lot — do you know 1–2 other founders
                building brands like yours who'd get value from what we've done?
                Not asking for a formal intro, just a name is fine.
                We handle everything from there."
Day 37: If no referral reply → Aircall task: Collins calls to check in + mention referral
```

**Expected return:** If 30% of closed clients refer one company, and you close 40% of referrals, a pipeline of 10 clients generates 3 referrals → 1.2 new clients from zero outbound effort.

---

### UPGRADE 9: VOICEMAIL DROP + POWER DIALER (AIRCALL)

Aircall has a voicemail drop feature. Record one voicemail per sequence type, drop it with one click.

**Voicemail scripts (record once, use forever):**

**US/Canada D2C:**
> "Hey [Name], this is [Collins] from ALIF Agency — I sent you a couple of emails about [brand].
> Quick version: we specialise in the intersection of creative and performance for brands at exactly
> your stage. Sent you something specific about what I found looking at your account.
> Call me back at [number] or just reply to my email — either works. Talk soon."

**EU Tech:**
> "Hey [Name], [Collins] from ALIF Agency in Dubai — reaching out because I saw [company]
> is [signal: expanding / post-raise / new launch]. We work with European brands building
> into new markets on exactly this. Left you a few emails — happy to show you what we found.
> [Number] if you want to call back."

**Power Dialer workflow (Thursday 30 min):**
- Pull HubSpot list: "Day 10+ in sequence, no reply"
- Aircall power dialer: call each, drop voicemail in one click if no answer
- 15 calls in 30 minutes

---

### UPGRADE 10: OWLER + COMPANY NEWS REAL-TIME TRIGGERS

Owler.com (free basic tier) monitors company news, executive changes, and competitor movements.

**Setup:**
- Add every A-grade prospect to Owler watchlist
- Owler sends digest when they announce something new
- That announcement becomes the personalisation hook for the next email touch

**Example:**
Prospect is in sequence with no reply. Owler fires: "[Brand] announces new CMO hire."
Instant new email: "Saw [Brand] just brought in [name] as CMO — perfect timing to show you what we've put together. This is exactly what they'll want to see on day one."

---

### UPGRADE 11: TECHNOGRAPHIC TARGETING (APOLLO + CLAY)

Target companies whose tech stack signals active ad spend + no creative partner.

**Apollo filters to build (save as lists):**

**US D2C Sweet Spot:**
```
Technology used: Shopify + Meta Pixel + Klaviyo
No technology: Creative agency retainer signals (can't filter this, but Clay can check)
Employee count: 5–50
Revenue: $1M–$10M
Industry: Retail, Beauty, Fashion, Health & Wellness, Food & Beverage
Location: US + Canada
```

**EU Growth-Stage:**
```
Technology: Shopify Plus OR WooCommerce + Google Tag Manager + Meta Pixel
Funding: Seed to Series A (Crunchbase filter)
Employee count: 10–80
Location: UK, Germany, Netherlands, France, Sweden
```

Pull these lists weekly from Apollo → push to Clay for enrichment → Instantly.

---

### SUMMARY: v2 UPGRADE IMPACT PROJECTION

| Metric | v1 (Baseline) | v2 (With Upgrades) |
|--------|-------------|-------------------|
| Email reply rate | 2–4% | 8–15% |
| LinkedIn reply rate | 3–5% | 12–20% |
| Reply-to-Booking % | ~2% | 10–15% |
| Weekly discoveries | 1–2 | 5–8 |
| Source diversity | Cold email only | Email + LinkedIn + Website visitors + Referrals + Inbound |
| Personalisation | Manual / template | Clay AI — automated at scale |
| Prospect quality | Mixed | Signal-stacked, 2+ triggers minimum |
| Referral pipeline | 0 | 1–2 new deals/month (compounding) |
| Close rate | ~15–20% | 30–40% |

---

## PART 2 — HUBSPOT DEAL STAGES

### Deal Stage Architecture

The deal stages map the exact journey from first reply to closed revenue. Every stage has a clear entry condition, exit condition, and automated action.

```
CONTACT                    DEAL
──────                    ──────
In Sequence          ──▶  [no deal yet]
       │
       ▼
   Replied           ──▶  DEAL CREATED: "Engaged"
       │
       ▼
Call Booked          ──▶  DEAL MOVES: "Disco Call" ← auto-triggered by Calendly
       │
       ▼
Call Complete        ──▶  DEAL MOVES: "Qualified" OR "Disqualified"
       │
       ▼
Audit Delivered      ──▶  DEAL MOVES: "Audit Sent"
       │
       ▼
Proposal Sent        ──▶  DEAL MOVES: "Proposal Sent"
       │
       ▼
Verbal Yes           ──▶  DEAL MOVES: "Contract Sent"
       │
       ▼
Signed + Deposit     ──▶  DEAL MOVES: "Closed Won" ✓
```

---

### Full Deal Stage Definitions

**Create these in HubSpot → CRM → Pipelines → Sales Pipeline:**

| # | Stage Name | HubSpot Probability | Entry Condition | Exit Condition | SLA |
|---|-----------|---------------------|----------------|----------------|-----|
| 1 | **Engaged** | 10% | Replied positively to any outreach (email, LinkedIn, referral intro) | Call booked or disqualified | Log within 1h of reply |
| 2 | **Disco Call** | 25% | Calendly booking confirmed — AUTO-TRIGGERED | Call happened | Auto-triggered by Calendly webhook |
| 3 | **Qualified** | 40% | Discovery call happened, confirmed ICP fit (budget, timeline, DM) | Audit delivered | Manual move within 24h of call |
| 4 | **Audit Sent** | 55% | Free Creative + Performance Audit delivered (PDF/Loom) | Proposal requested or declined | Proposal within 48h |
| 5 | **Proposal Sent** | 70% | Formal proposal + pricing sent | Verbal yes/no received | Follow up within 24h |
| 6 | **Contract Sent** | 85% | DocuSign or contract sent | Signed or dead | Follow up daily |
| 7 | **Closed Won** | 100% | Signed contract + deposit received | — | Trigger onboarding workflow |
| 8 | **Closed Lost** | 0% | Deal dead (record reason) | — | Recycle in 90 days |
| 9 | **Disqualified** | 0% | Not ICP fit (budget, timing, no need) | — | Do not recycle |
| 10 | **Recycled** | 5% | Not now — revisit in 60–90 days | New signal fires | Set follow-up date |

---

### Custom Deal Properties to Add in HubSpot

Go to: Settings → Properties → Deal Properties → Create Property

| Property | Type | Options / Notes |
|----------|------|----------------|
| `ICP Grade` | Dropdown | A+ / A / B / C / D |
| `ICP Score` | Number | 0–100 (from scoring matrix) |
| `Trigger Type` | Multi-select | Funding / New Launch / CMO Hired / Rebrand / Agency Fired / Website Visit / Competitor Gap / Referral |
| `Signal Count` | Number | How many signals stacked (target: 2+) |
| `ICP Segment` | Dropdown | D2C / F&B / Wellness / Fashion / Tech-Startup / Hospitality / Sports |
| `Region` | Dropdown | US / Canada / UK / EU |
| `Brand Gap Score` | Number 1–5 | 1=No gap, 5=Critical gap (from Meta Ad Library review) |
| `Discovery Call Recording` | URL | Aircall recording link |
| `Audit Delivered` | Checkbox | Yes/No |
| `Proposal Value (ACV)` | Currency (USD) | Monthly retainer value |
| `Close Reason (Lost)` | Dropdown | Budget / Timing / Wrong fit / Competitor / No decision |
| `Referral Source` | Text | Name of referrer (if applicable) |
| `Close Date Confidence` | Dropdown | This month / Next month / 60+ days |

---

### Calendly → HubSpot Auto-Trigger (Disco Call)

When a lead books via Calendly, the deal should appear in HubSpot at "Disco Call" automatically — no manual step.

**Logic:**
```
Calendly booking confirmed
        │
        ▼
Calendly webhook fires to n8n (or Make.com)
        │
        ▼
n8n checks: does contact already exist in HubSpot?
├── YES → Find existing contact → Create deal linked to contact → Set stage: "Disco Call"
└── NO  → Create contact first → Then create deal → Set stage: "Disco Call"
        │
        ▼
Deal created with:
- Deal name: "[Company Name] — Disco Call [Date]"
- Deal stage: Disco Call
- Close date: 30 days from booking date
- Deal owner: Collins
- Associated contact: Booker
- Associated company: Their company (if found)
        │
        ▼
HubSpot sends internal notification to Collins
Collins receives: company name, what they booked, their LinkedIn (from enrichment)
        │
        ▼
5 minutes before call:
Aircall displays: prospect name + LinkedIn + what sequence they came from + their ICP score
```

---

### HubSpot Views to Build

| View Name | Filter | Used By |
|-----------|--------|---------|
| `Hot Board` | Stage = Disco Call OR Qualified OR Audit Sent | Daily — Collins |
| `Proposal Tracker` | Stage = Proposal Sent OR Contract Sent | Daily — Collins |
| `This Week's Calls` | Stage = Disco Call, Close date = this week | Monday morning |
| `Stale Deals` | Stage = Proposal Sent, last activity > 5 days ago | Friday — review |
| `Closed Won YTD` | Stage = Closed Won | Weekly — Collins + Amir |
| `Recycle Queue` | Stage = Recycled, follow-up date = this week | Sunday — Collins |
| `Signal Intake` | Source = Signal, no deal created | Daily — Collins |

---

## PART 3 — AUTOMATION ARCHITECTURE

### n8n vs Make.com — The Honest Comparison

| Dimension | Make.com (free) | n8n (self-hosted) | n8n (cloud) |
|-----------|----------------|------------------|------------|
| **Cost** | Free (1K ops/mo) → $9/mo (10K ops) | Free forever (host yourself) | Free up to 5 workflows |
| **Setup time** | 5 minutes | 45 minutes (first time) | 5 minutes |
| **Ops limit** | 1K free → paid above | Unlimited (your server) | Rate-limited |
| **Complexity ceiling** | Medium | High — full code possible | High |
| **AI integration** | Basic | Deep (LangChain, OpenAI) | Deep |
| **Speed** | Fast | Faster | Fast |
| **Reliability** | Excellent (cloud) | Depends on your host | Excellent |
| **Best for** | Quick start, simple flows | Complex logic, no op limits | Complex + no server management |
| **Hosting** | n/a | Railway.app (free hobby tier) | n8n.io |

**Verdict:**
Start with **Make.com** (zero setup, free for early volume).
Run **n8n on Railway** (free) in parallel for complex multi-step flows like the Clay → Instantly → HubSpot pipeline.
Make.com hits 1K ops in 3–4 weeks at real outbound volume. n8n never has that ceiling.

**Hosting n8n free on Railway.app:**
```
1. Go to railway.app → New Project → Deploy from template → n8n
2. Set environment variables:
   N8N_BASIC_AUTH_ACTIVE=true
   N8N_BASIC_AUTH_USER=admin
   N8N_BASIC_AUTH_PASSWORD=[your password]
   WEBHOOK_URL=https://[your-railway-url].railway.app
3. Done. Your n8n is live at [railway-url].railway.app
4. All workflows run free within Railway hobby tier ($5 credit/month included)
```

---

### Core Automation Workflows to Build

#### WORKFLOW 1 — CALENDLY → HUBSPOT DISCO CALL (Priority: Build Day 1)

**Tool:** n8n or Make.com
**Trigger:** Calendly webhook (booking confirmed)
**Purpose:** Auto-create deal at "Disco Call" stage — zero manual work

```
Trigger: Calendly "Invitee Created" webhook
        │
        ▼
Step 1: Extract — name, email, phone, company, meeting time from Calendly payload
        │
        ▼
Step 2: Search HubSpot — does this email already exist as a contact?
        ├── EXISTS → get contact ID → skip to Step 4
        └── NOT EXISTS → Step 3
        │
        ▼
Step 3: Create HubSpot Contact
        - Email, first name, last name
        - Source: "Calendly Inbound"
        │
        ▼
Step 4: Create HubSpot Deal
        - Name: "[Company] — Disco [DD/MM/YYYY]"
        - Stage: "Disco Call"
        - Owner: Collins
        - Close date: 30 days from today
        - Associate to contact
        │
        ▼
Step 5: Notify Collins (Slack DM or email)
        "New disco call booked: [Name] from [Company] at [time]"
        Include: their LinkedIn URL (from Clay if enriched, otherwise blank)
        │
        ▼
Step 6: (Optional) Send pre-call email to prospect via HubSpot
        "Looking forward to our call at [time]. Before we connect, here's a quick look
         at what we'll cover..." [attach relevant case study for their segment]
```

---

#### WORKFLOW 2 — INSTANTLY REPLY → HUBSPOT PIPELINE MOVE

**Tool:** Make.com (Instantly has native Make.com integration)
**Trigger:** Reply received in Instantly
**Purpose:** Any positive reply immediately creates/updates the HubSpot contact + moves pipeline

```
Trigger: Instantly webhook — "Reply Received"
        │
        ▼
Step 1: Filter — is the reply positive? (not OOO, not unsubscribe, not bounce)
        Use keyword check: "interested" OR "tell me more" OR "can we" OR "schedule"
        OR: sentiment = not negative (OpenAI call in n8n if needed)
        │
        ▼
Step 2: Find or create HubSpot contact (match by email)
        │
        ▼
Step 3: If contact has no deal → create deal at "Engaged" stage
        If contact has existing deal in sequence → move deal to "Engaged"
        │
        ▼
Step 4: Log activity on contact: "Email reply received via Instantly — [sequence name] — [date]"
        │
        ▼
Step 5: Create HubSpot task for Collins:
        "Reply received from [Name] at [Company] — respond within 2h"
        Due: NOW + 30 minutes
        │
        ▼
Step 6: Notify Collins (push notification / Slack / email)
        "Hot reply: [Name] from [Company] replied to [sequence name]. Check HubSpot."
```

---

#### WORKFLOW 3 — CLAY → INSTANTLY → HUBSPOT (Full Pipeline Builder)

**Tool:** Clay native exports + n8n for HubSpot sync
**Trigger:** Clay table enrichment complete
**Purpose:** Enriched, scored, personalised prospects go straight to sequences

```
Clay table enrichment runs (manual trigger or scheduled)
        │
        ▼
Clay: filters rows where ICP Score ≥ 60
        │
        ▼
Clay export: splits into 3 CSVs by grade
        ├── A+ (80+) → tagged "manual-review"
        ├── A (60–79) → tagged "sequence-a"
        └── B (40–59) → tagged "sequence-b"
        │
        ▼
n8n workflow reads the export folder (Google Drive or Clay webhook)
        │
        ▼
For A+ contacts:
        → Create HubSpot contact, set ICP Grade = A+
        → Create task for Collins: "Review this prospect before sending"
        → After Collins approves (checkbox in HubSpot) → push to Instantly A+ sequence

For A contacts:
        → Create HubSpot contact, set ICP Grade = A
        → Auto-push to Instantly Sequence A (no manual review needed)

For B contacts:
        → Create HubSpot contact, set ICP Grade = B
        → Auto-push to Instantly Sequence B
        │
        ▼
Instantly starts sequence → sequence activity logs back to HubSpot via Workflow 2
```

---

#### WORKFLOW 4 — RB2B WEBSITE VISITOR → INSTANT OUTREACH

**Tool:** n8n
**Trigger:** RB2B webhook (US visitor identified)
**Purpose:** Website visitors get a personalised email within 60 minutes

```
RB2B fires webhook: visitor LinkedIn profile URL + company
        │
        ▼
n8n sends to Clay (via Clay API or Zapier):
        Clay enriches: email, full name, company, job title, recent LinkedIn activity
        │
        ▼
Clay AI generates first line:
        "Saw you were looking at our work on [date] — wanted to reach out directly..."
        │
        ▼
n8n checks: has this email been contacted before? (HubSpot lookup)
        ├── YES + in sequence → skip (do not double-contact)
        └── NO → continue
        │
        ▼
n8n creates HubSpot contact:
        Source = "Website Visitor"
        ICP Score = +40 base (website intent)
        Signal Type = "Website Visit"
        │
        ▼
n8n pushes to Instantly "Website Visitor" sequence
        Email 1: personalised, references visit, offers audit
        (3-touch sequence only — max 7 days — they already know who you are)
        │
        ▼
Collins notified: "[Name] from [Company] visited the site — outreach triggered"
```

---

#### WORKFLOW 5 — GOOGLE ALERTS → CLAY → HUBSPOT SIGNAL QUEUE

**Tool:** Make.com (simple enough for free tier)
**Trigger:** Google Alert email lands in alerts@[domain].com
**Purpose:** Every signal is captured, enriched, and queued — nothing slips

```
Google Alert email → Gmail (alerts@yourdomain.com)
        │
        ▼
Make.com: Gmail "Watch Emails" module triggers
        │
        ▼
Make.com: Parse email — extract company name, signal type, source URL
        │
        ▼
Make.com: Add row to Google Sheet [Signal Intake]:
        │ Company | Signal Type | Date | URL | Status: New
        │
        ▼
Make.com: Create HubSpot contact (if not exists):
        - Company name
        - Source: "Google Alert"
        - Signal type: [parsed from email subject]
        - Signal date: today
        │
        ▼
Make.com: Send daily digest to Collins at 8 AM:
        "New signals today: [n] — check Signal Intake sheet"
```

---

#### WORKFLOW 6 — CLOSED WON → ONBOARDING + REFERRAL LOOP

**Tool:** HubSpot native workflows (no external automation needed)
**Trigger:** Deal stage moves to "Closed Won"
**Purpose:** Every close triggers onboarding + referral sequence automatically

```
Deal moves to "Closed Won"
        │
        ▼
HubSpot Workflow triggers:

Immediately:
  → Create onboarding task for Kaya: "Send [Company] kickoff email + brief template"
  → Send client welcome email (HubSpot template):
    "Excited to get started with [brand]. Your dedicated contact is [Kaya].
     Kickoff scheduled for [date]. Here's what happens next..."

Day 7:
  → Check-in email: "One week in — how's everything feeling?"
  → If no reply → create task for Collins: "Check in with [Company] via call"

Day 30:
  → Referral ask email (auto):
    "We're 30 days in and [positive progress note]. Quick ask:
     do you know 1–2 other founders building brands like yours
     that would get value from what we're doing together?
     Even just a name — we handle everything from there."

Day 37:
  → If no referral provided → create Aircall task: "Call [Name] — referral ask"
```

---

### AUTOMATION PRIORITY BUILD ORDER

| Priority | Workflow | Tool | Build Time | Impact |
|----------|---------|------|-----------|--------|
| **P0** | Calendly → HubSpot Disco Call | Make.com or n8n | 30 min | Critical — this is the deal stage trigger |
| **P0** | Instantly Reply → HubSpot + Collins Alert | Make.com | 20 min | Critical — no reply should go unmissed |
| **P1** | RB2B → Clay → Instantly | n8n | 60 min | High — hottest leads, same-day |
| **P1** | Google Alerts → Google Sheet → HubSpot | Make.com | 30 min | High — signal intake |
| **P2** | Clay → Instantly → HubSpot pipeline | n8n | 90 min | High — core enrichment pipeline |
| **P2** | Closed Won → Onboarding + Referral | HubSpot native | 45 min | High — zero-cost new pipeline |
| **P3** | Stale deal alert (>5 days no activity) | HubSpot native | 15 min | Medium — prevents deals dying |
| **P3** | Proposal sent → 24h follow-up task | HubSpot native | 10 min | Medium |

---

## THE v2 MACHINE — FULL ARCHITECTURE

```
╔════════════════════════════════════════════════════════════════════╗
║                     SIGNAL LAYER (Free)                           ║
║  Google Alerts │ RB2B │ Ahrefs │ Crunchbase │ LinkedIn │ Owler   ║
╚══════════════════════════════╦═════════════════════════════════════╝
                               │
                               ▼
╔══════════════════════════════╩═════════════════════════════════════╗
║                  CLAY ENRICHMENT HUB                              ║
║  Waterfall email find │ 15+ data points │ AI first line generator ║
║  Multi-signal score │ ICP grade │ Segment routing                 ║
╚══════════════════════════════╦═════════════════════════════════════╝
                               │
              ┌────────────────┼─────────────────┐
              ▼                ▼                 ▼
        A+ Manual          A Auto            B Auto
        10-touch           7-touch           5-touch
              │                │                 │
              └────────────────┴─────────────────┘
                               │
                               ▼
╔══════════════════════════════╩═════════════════════════════════════╗
║              OUTREACH ENGINE (Multi-Channel)                      ║
║  Instantly (9 domains) │ LinkedIn Warm │ Aircall │ Loom/Sendspark ║
╚══════════════════════════════╦═════════════════════════════════════╝
                               │
                               ▼
╔══════════════════════════════╩═════════════════════════════════════╗
║                    HUBSPOT PIPELINE                               ║
║  Engaged → Disco Call → Qualified → Audit → Proposal → Closed    ║
║  Auto-triggered by: Calendly │ Instantly webhook │ Aircall log    ║
╚══════════════════════════════╦═════════════════════════════════════╝
                               │
                               ▼
╔══════════════════════════════╩═════════════════════════════════════╗
║                   CLOSED WON ENGINE                               ║
║  Onboarding → 30-day referral ask → New signal from referral      ║
║                   ↑ feeds back into Clay                          ║
╚════════════════════════════════════════════════════════════════════╝

INBOUND PULL (runs in parallel):
LinkedIn content (3×/week) → Website visitor → RB2B → Clay → Instantly (same day)
```

---

## QUICK-START ORDER (FIRST 5 DAYS)

**Day 1 (2 hours):**
- Install RB2B on alifagency.ai
- Build Calendly → HubSpot deal (Disco Call) automation in Make.com
- Build Instantly reply → HubSpot + Collins alert in Make.com

**Day 2 (2 hours):**
- Set up n8n on Railway.app (45 min)
- Create first Clay table: `US-D2C-Outreach` with waterfall email + AI first line
- Run Ahrefs Link Intersect for 3 competitors → export 50 domains → push to Clay

**Day 3 (1 hour):**
- Add all custom deal properties in HubSpot
- Create all 10 deal stages in HubSpot pipeline
- Build HubSpot views (Hot Board, Proposal Tracker, This Week's Calls)

**Day 4 (1 hour):**
- Build Closed Won → Onboarding + Referral workflow in HubSpot native
- Build Google Alerts → Google Sheet → HubSpot signal intake in Make.com
- Set up 15+ Google Alerts using strings from v1 stack doc

**Day 5 (1 hour):**
- Set up n8n: RB2B → Clay → Instantly workflow
- Set up Owler watchlist for top 20 A-grade prospects
- Record Loom "audit reveal" template video (use for A+ Email 2)

**Total setup time: ~7 hours. Then the machine runs.**

---

*This is v2. Every added layer compounds on the last. The goal is not to work more — it's to make every hour of selling time worth 10× what it was before.*

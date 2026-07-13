# ALIF Agency — 30-Day Market Test Execution Pack
> Built from ICP Market Test Strategy | 2026-07-03
> 3 parallel campaigns × 200 prospects = 600 total outreach contacts
> Goal: Identify the highest-converting ICP in 30 days

---

## OVERVIEW

| Campaign | Code | ICP | Geography | Volume | Primary Angle |
|----------|------|-----|-----------|--------|---------------|
| 1 | `US-D2C-Test` | D2C Consumer Brand | US (NY, LA, Miami, Austin) | 200 | Weak Meta ad creative → ROAS fix |
| 2 | `EU-Wellness-Test` | Wellness + Fitness Venues | UK + Germany + Netherlands | 200 | Brand gap vs beautiful physical space |
| 3 | `MENA-Bridge-Test` | US/EU brands expanding to MENA | US + UK | 200 | "We're already there" |

---

## PART 1: APOLLO SEARCH STRINGS

### Campaign 1 — US D2C Consumer Brand

**Go to Apollo → Search → People**

| Filter | Setting |
|--------|---------|
| Job Title | Founder, CEO, Co-Founder, Head of Marketing, CMO, Brand Director, Marketing Director |
| Seniority | Owner, Founder, C-Suite, VP, Director |
| Industry | Health & Beauty, Cosmetics, Apparel & Fashion, Consumer Goods, Food & Beverages, Wellness, Retail |
| Employee Count | 5–50 |
| Location (Company HQ) | United States |
| Technologies | Shopify (or Shopify Plus) + Meta Pixel |
| Keywords (Company) | *(leave blank or add: "DTC", "direct to consumer", "e-commerce", "skincare", "beauty", "wellness")* |

**Pro refinements (add one at a time to stay above 200):**
- Add Klaviyo to technology filters → narrows to brands investing in retention
- Filter by City: New York, Los Angeles, Miami, Austin, Chicago, San Francisco
- Add Google Tag Manager to tech stack → data-driven founders

**Expected list size:** 800–2,000+ contacts before manual curation
**Export 200:** Sort by "Last Activity" descending → take top 200 most recently active profiles

---

### Campaign 2 — EU Wellness + Fitness Venues

**Go to Apollo → Search → People**

| Filter | Setting |
|--------|---------|
| Job Title | Owner, Founder, Studio Director, Managing Director, Operations Manager, CEO |
| Seniority | Owner, Founder, C-Suite, Director |
| Industry | Health, Wellness & Fitness, Sports, Recreational Facilities & Services, Leisure |
| Employee Count | 5–40 |
| Location (Company HQ) | United Kingdom, Germany, Netherlands |
| Keywords (Company) | *(add: "yoga", "pilates", "boutique gym", "padel", "wellness studio", "spa", "boxing", "fitness")* |

**Pro refinements:**
- Exclude: National chains (Nike, Virgin Active) — filter out 500+ employees
- Add: "boutique" or "studio" in company name keyword search
- UK focus first: London, Manchester, Bristol → then expand to DE/NL

**Expected list size:** 300–800 contacts
**Export 200:** Prioritise UK (100), Germany (60), Netherlands (40)

---

### Campaign 3 — MENA Bridge (US/EU Brands Expanding to Gulf)

**Apollo has limited signal data for "MENA expansion intent" — use this hybrid approach:**

**Primary source (Apollo — 120 contacts):**

| Filter | Setting |
|--------|---------|
| Job Title | Founder, CEO, VP International, Head of International Expansion, Global Marketing Director, VP Growth |
| Seniority | Owner, Founder, C-Suite, VP |
| Industry | Retail, Food & Beverages, Consumer Goods, Health & Beauty, Hospitality, Technology |
| Employee Count | 20–200 |
| Location (Company HQ) | United States, United Kingdom, Germany, France, Netherlands |
| Keywords | *(Company description: "international", "global", "expansion", "Middle East")* |

**Secondary source (LinkedIn manual — 80 contacts):**
- LinkedIn Search: Company page → "About" mentions "UAE", "Dubai", "Saudi Arabia", "Gulf", "MENA"
- LinkedIn Job Posts: Search "Regional Manager Middle East" posted in last 90 days → find the company → find the founder
- Google Alerts (already in your stack): `"expanding to Dubai" OR "entering UAE" OR "MENA launch" site:prnewswire.com OR site:businesswire.com`
- GITEX 2026 exhibitor list (October) — exhibitors from US/EU attending = MENA intent signal

**Export:** 120 from Apollo + 80 from LinkedIn manual curation = 200 total

---

## PART 2: INSTANTLY SEQUENCE SETUP

### How to set up in Instantly

1. **app.instantly.ai → Campaigns → New Campaign**
2. Name the campaign using the code (e.g., `US-D2C-Test`)
3. Assign sending accounts:
   - Campaign 1 (US): Use US domain mailboxes (3 mailboxes from your US domains)
   - Campaign 2 (EU): Use EU domain mailboxes (3 mailboxes from your EU domains)
   - Campaign 3 (MENA): Use remaining mailboxes
4. Upload Apollo CSV → map fields: First Name, Last Name, Email, Company Name, Job Title
5. Build sequence steps as shown below
6. Set schedule: Monday–Friday, 8am–5pm prospect's local time
7. Daily limit: 30 emails/mailbox → 90 emails/day per campaign

---

## CAMPAIGN 1 SEQUENCE — US D2C (Meta Ad Creative Angle)

**Sequence name:** `US-D2C-Creative-Fix`
**Sending window:** Mon–Fri, 8am–5pm EST/PST
**Daily limit per mailbox:** 30

---

### Email 1 — Day 1 (Opening)

**Subject line options (A/B test these):**
- `{{firstName}}, quick question about your Meta ads`
- `Noticed something about {{companyName}}'s ads`
- `Your ads vs your Instagram — {{firstName}}`

**Body:**

```
Hi {{firstName}},

Checked out {{companyName}}'s Meta Ad Library this morning.

Your product is clearly strong — but the ad creative isn't doing it justice. The gap between what your brand is and what's running in ads is where most of your ROAS is leaking.

We work with D2C brands like yours to close that gap — building creative that converts AND looks like the brand you've built.

We did this for EEVE (clean beauty, UK + US market) — took them from scattered creative to a unified brand + performance system. ROAS improved significantly within 60 days.

Worth a 20-minute call to see if we can do the same for {{companyName}}?

Collins
ALIF Agency | Creative + Performance, Unified
[Calendly link]
```

---

### Email 2 — Day 4 (Value add)

**Subject:** `What's actually killing {{companyName}}'s ROAS`

**Body:**

```
Hi {{firstName}},

Most D2C brands running Meta ads have the same issue: the creative team and the performance team aren't talking to each other.

The creative looks good but doesn't convert. The performance team optimises for clicks but makes the brand look cheap.

At ALIF we run both under one roof — same team that builds your brand identity runs your campaigns. The result is creative that performs AND builds brand equity at the same time.

We've done this for beauty, wellness, and fashion brands in the US and UK.

Happy to share what this looks like for a brand at {{companyName}}'s stage — quick 20-min call?

Collins
ALIF Agency
[Calendly link]
```

---

### Email 3 — Day 9 (Social proof)

**Subject:** `Case study: D2C beauty brand, 60-day ROAS turnaround`

**Body:**

```
{{firstName}} —

Quick one.

We worked with EEVE, a clean beauty brand expanding from UAE into the UK and US market. They had strong products but inconsistent creative across Meta — the ads looked different from the Instagram, which looked different from the landing page.

We rebuilt the full creative system: brand identity refresh, ad templates, UGC framework, and performance campaign structure. Unified everything. Within 60 days their ROAS improved and they had a replicable system they could scale.

If {{companyName}} is running Meta ads and not seeing the return you'd expect — this might be a familiar story.

20 minutes to see if it applies?

Collins
ALIF Agency
[Calendly link]
```

---

### Email 4 — Day 14 (Break-up)

**Subject:** `Closing the loop, {{firstName}}`

**Body:**

```
{{firstName}},

Last email from me on this.

If the timing isn't right or this isn't a priority — completely understood. D2C growth has a lot of competing priorities.

If you do want to explore what fixing the creative → performance gap could look like for {{companyName}}, I'm one reply away.

Either way, good luck with the campaigns.

Collins
ALIF Agency
[Calendly link]
```

---

## CAMPAIGN 2 SEQUENCE — EU Wellness + Fitness (Brand Gap Angle)

**Sequence name:** `EU-Wellness-Brand-Gap`
**Sending window:** Mon–Fri, 8am–5pm CET/GMT
**Daily limit per mailbox:** 30

---

### Email 1 — Day 1 (Opening)

**Subject line options:**
- `{{firstName}} — {{companyName}}'s space vs your Instagram`
- `Quick observation about {{companyName}}`
- `The gap I noticed looking at {{companyName}}`

**Body:**

```
Hi {{firstName}},

Came across {{companyName}} and checked out your Instagram.

The space looks incredible — but the feed doesn't do it justice yet. A lot of boutique studios and wellness venues have this exact gap: the physical experience is premium, the digital presence hasn't caught up.

That gap is costing you bookings. People judge before they visit.

We work with wellness and fitness venues across the UK and EU to close that gap — brand identity, content production, and the social strategy to turn followers into bookings.

We've done this for Nomads Haus (multi-location wellness, Bali), The Padel Retreat (Dubai), and a few others.

Open to a 20-minute call to show you what this could look like for {{companyName}}?

Collins
ALIF Agency
[Calendly link]
```

---

### Email 2 — Day 5 (Value add)

**Subject:** `What we fixed for a multi-location wellness brand`

**Body:**

```
{{firstName}},

Following up on my last note.

One of the things that hurts multi-location studios the most is brand inconsistency. Each location looks and feels slightly different online — which dilutes trust and makes it hard to build a recognisable brand people refer.

We helped Nomads Haus (wellness retreat, 3+ locations) build a unified brand system — same visual identity, same content templates, same tone — that works across all locations and all channels.

The result: their Instagram became a booking tool, not just a photo album.

If {{companyName}} is expanding or managing more than one location, this is worth a conversation.

Collins
ALIF Agency
[Calendly link]
```

---

### Email 3 — Day 10 (Specific to their situation)

**Subject:** `{{companyName}} — your next location launch`

**Body:**

```
{{firstName}},

One more thought.

The best time to fix the brand is before a new location opens — not after. Getting the brand right before the launch means every piece of content, every ad, every story you post from day one is building equity.

We've launched venues in Dubai, Bali, and California. Each time, having a unified creative system in place before launch made the difference between a quiet opening and a waitlist.

If {{companyName}} has a new location coming or is scaling — I'd love 20 minutes to walk you through how we approach a launch like that.

Collins
ALIF Agency
[Calendly link]
```

---

### Email 4 — Day 16 (Break-up)

**Subject:** `Last note, {{firstName}}`

**Body:**

```
{{firstName}},

Not going to keep filling your inbox.

If {{companyName}}'s brand and social presence is already where you want it — brilliant, no further action needed.

If there's a gap between how the space looks in person and how it comes across online — and that's something you'd like to fix in the next 90 days — reply here and we'll find 20 minutes.

Best,
Collins
ALIF Agency
[Calendly link]
```

---

## CAMPAIGN 3 SEQUENCE — MENA Bridge (US/EU Expanding to Gulf)

**Sequence name:** `MENA-Bridge-Expansion`
**Sending window:** Mon–Fri, 8am–5pm EST/BST
**Daily limit per mailbox:** 30

---

### Email 1 — Day 1 (Opening)

**Subject line options:**
- `{{companyName}} expanding to the Gulf?`
- `{{firstName}} — your MENA launch`
- `Already in Dubai — here for {{companyName}}'s expansion`

**Body:**

```
Hi {{firstName}},

Noticed {{companyName}} is expanding internationally — or at least exploring it.

If the Gulf is on your radar (Dubai, Saudi Arabia, or broader GCC), we can shortcut your market entry significantly.

ALIF is a creative and performance agency based in Dubai with an existing portfolio in the region — beauty, wellness, F&B, lifestyle. We know the market, the platforms, the cultural nuances, and the influencer landscape that move the needle here.

Most US and EU brands spend 3–6 months figuring out MENA before they see results. We compress that to 30–60 days because we're already operating there.

Worth a 20-minute call to see if we can make {{companyName}}'s Gulf entry faster and more profitable?

Collins
ALIF Agency | Dubai + Global
[Calendly link]
```

---

### Email 2 — Day 5 (The problem with MENA market entry)

**Subject:** `The mistake most US brands make entering the Gulf`

**Body:**

```
{{firstName}},

The most common mistake US and EU brands make entering MENA: they run the same creative and campaigns they run at home.

The Gulf audience responds to completely different visual styles, messaging tones, and platform strategies. What performs on Instagram in LA does not perform in Dubai. What converts in the UK underperforms in Saudi Arabia.

We've built brand and performance systems for brands in the UAE, Saudi, and broader GCC — and we know exactly what works and what doesn't in each market.

If {{companyName}} is entering this region, we can build the system that converts — not the one that looks like it should convert.

20 minutes?

Collins
ALIF Agency | Dubai + Global
[Calendly link]
```

---

### Email 3 — Day 10 (Social proof + specificity)

**Subject:** `MENA brand launch: what the first 60 days look like`

**Body:**

```
{{firstName}},

Here's what we typically build for a US or EU brand launching into MENA:

Week 1–2: MENA market audit (competitor landscape, platform benchmarks, audience profiling)
Week 2–4: Brand adaptation — not a rebrand, but cultural localisation of creative, copy, and tone
Week 4–8: Campaign build — paid social, influencer outreach, content production
Week 8+: Optimise, scale, report

We've done this for beauty brands, wellness brands, and lifestyle products. The brands that do it right enter with a brand that feels local — even though it was built in New York or London.

If the Gulf is in {{companyName}}'s 12-month plan — now is the right time to start the conversation.

Collins
ALIF Agency | Dubai + Global
[Calendly link]
```

---

### Email 4 — Day 15 (Break-up)

**Subject:** `Last one, {{firstName}}`

**Body:**

```
{{firstName}},

Last email on this.

If MENA isn't in the plan right now — makes complete sense. It's a significant expansion move and the timing has to be right.

If it is on the roadmap and you want to talk to someone who's already operating in the market — I'm here.

Good luck with the expansion either way.

Collins
ALIF Agency | Dubai + Global
[Calendly link]
```

---

## PART 3: INSTANTLY CAMPAIGN SETTINGS

### Settings to configure for each campaign in Instantly

| Setting | Value |
|---------|-------|
| Campaign timezone | Campaign 1: ET (US); Campaign 2: CET (EU); Campaign 3: ET |
| Sending days | Monday–Friday only |
| Sending hours | 7:00am – 5:00pm (prospect's timezone) |
| Daily sending limit | 30 per mailbox |
| Time between emails | 4–6 minutes random delay |
| Stop sending on reply | YES — always on |
| Unsubscribe link | Yes — include in footer |
| Tracking opens | Yes |
| Tracking clicks | Yes (but don't add links other than Calendly) |
| Custom tracking domain | Set up for each sending domain |

### Deliverability checklist before launch

- [ ] SPF record configured on all 9 domains
- [ ] DKIM configured on all 9 domains
- [ ] DMARC policy set to `p=none` initially (monitor before enforcing)
- [ ] All mailboxes warmed up minimum 14 days before first campaign send (use Instantly's built-in warmup)
- [ ] Warmup score >85 on all mailboxes before activating campaigns
- [ ] Custom tracking domain set up (not the default Instantly domain)
- [ ] Unsubscribe link in footer of all templates
- [ ] Test send to yourself and to mail-tester.com (target score 9/10+)

---

## PART 4: HUBSPOT TRACKING SETUP

### What to track per lead in HubSpot

When a lead replies or books via Calendly, update these fields in HubSpot contact record:

| Property | What to enter |
|----------|--------------|
| ICP Segment | D2C Consumer Brand / Wellness + Fitness / MENA Bridge |
| Campaign Source | US-D2C-Test / EU-Wellness-Test / MENA-Bridge-Test |
| Lead Source | Cold Email |
| Signal Identified | What triggered outreach (weak creative / new location / MENA expansion) |
| Lifecycle Stage | MQL (replied positively) → SQL (booked call) |

### HubSpot Deal creation on booking

When Calendly fires (via n8n workflow already designed):
- Deal created at **Disco Call** stage automatically
- Deal Name: `[Company Name] - [ICP Segment]`
- Custom property `ICP Segment` populated
- Custom property `Campaign Source` populated
- Collins notified in #alif-meetings Slack

---

## PART 5: 30-DAY TRACKING DASHBOARD

### Weekly check-in metrics (pull from Instantly + HubSpot every Friday)

| Week | US D2C Open% | US D2C Reply% | EU Wellness Open% | EU Wellness Reply% | MENA Bridge Open% | MENA Bridge Reply% |
|------|-------------|--------------|------------------|-------------------|------------------|-------------------|
| Week 1 | | | | | | |
| Week 2 | | | | | | |
| Week 3 | | | | | | |
| Week 4 | | | | | | |

**Benchmark targets:**
- Open rate: >40% (below 30% = deliverability issue, not ICP issue)
- Reply rate: >5% by week 2 (below 3% = fix the sequence before scaling)
- Positive reply rate: >2% (positive = "interested", not OOO or unsubscribe)
- Discovery calls booked: >5 per campaign over 30 days

### Decision rule at Day 30

| Scenario | Action |
|----------|--------|
| One campaign has 2× reply rate of others | Double that list to 400, scale sending |
| All campaigns <3% reply rate | Fix sequences before scaling — problem is messaging not ICP |
| One campaign has highest ACV on proposals | Keep it even if reply rate is lower — worth the slower close |
| MENA Bridge books 3+ calls despite smaller list | Promote to primary and Collins handles personally at higher ACV |

---

## PART 6: LAUNCH CHECKLIST

### Week Before Launch

- [ ] Apollo lists exported and cleaned (remove duplicates, personal emails, LinkedIn-only contacts)
- [ ] CSVs uploaded to Instantly (one per campaign)
- [ ] All email sequences built in Instantly (4 emails per campaign)
- [ ] All mailboxes warmed up (warmup score >85)
- [ ] SPF/DKIM/DMARC verified on all sending domains
- [ ] Custom tracking domains configured
- [ ] Calendly link confirmed and tested (Collins' link, not Amir's)
- [ ] n8n workflow running: Calendly → HubSpot + #alif-meetings Slack
- [ ] n8n workflow running: Instantly reply → #alif-replies Slack
- [ ] HubSpot contact properties populated: ICP Segment, Campaign Source, Lead Source
- [ ] Test send done on each campaign (email to yourself, check formatting)
- [ ] Mail-tester.com score >9/10 on each sending domain

### Day 1 — Launch

- [ ] Activate Campaign 1: `US-D2C-Test` — 8am EST
- [ ] Activate Campaign 2: `EU-Wellness-Test` — 8am CET
- [ ] Activate Campaign 3: `MENA-Bridge-Test` — 8am EST
- [ ] Check Instantly dashboard at 12pm — confirm sends firing
- [ ] Check #alif-replies Slack at end of day for any early replies
- [ ] Log any early replies in HubSpot immediately

### Daily Routine (15 minutes/day)

**Morning (8am, 5 min):**
- Check #alif-replies in Slack
- Review any positive replies — respond same day
- Check #alif-meetings — any calls booked overnight?

**During day:**
- Reply to all positive replies within 4 hours
- Update HubSpot on any responses

**End of day (5 min):**
- Check Instantly campaign stats — any deliverability drops?
- Log notes on calls taken in HubSpot deal record

---

## PART 7: SEQUENCE PERSONALISATION GUIDE

### How to personalise at scale using Clay (if activated)

If Clay trial is running, use it to pull these data points per contact:
1. **Company Instagram follower count** → insert in email 1 ("You have 12K followers — the brand should be converting more of that audience")
2. **Number of active Meta ads** → insert in email 1 ("You're running 3 ads right now — I noticed the creative style varies across all three")
3. **Tech stack** → confirm Shopify + Meta Pixel before sending
4. **Recent news / funding** → if post-funding, adjust angle in email 1 ("Saw the recent funding round — this is exactly the moment to elevate the brand")
5. **LinkedIn headline** → use to confirm title matches your ICP before sending

### Manual personalisation (if not using Clay)

For every contact before they get email 1:
- 30 seconds on their Instagram: note one specific thing about their feed (inconsistent colors, stock-looking content, great product but bad photography)
- 30 seconds on Meta Ad Library: count how many ads are running, note if creative is varied or inconsistent
- Add one personalised first line to Email 1 in Instantly's custom variable field

Use {{customLine}} as a variable in Instantly — pre-fill in the CSV for each contact.

---

*Launch window: week of 2026-07-07. 30-day test concludes: 2026-08-06. Review meeting to decide which ICP to scale.*

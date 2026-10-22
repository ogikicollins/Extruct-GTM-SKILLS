# Koyfin — Revenue Operations Lead, Interview Prep
Role: first RevOps hire, reports to the Head of Sales. $115–135k base + up to $25k bonus (quarterly, tied
to pipeline and revenue) + equity. Two-person function inside a five-person sales org.

**The job in one line:** Koyfin has 800k registered users (60k of them advisors) who mostly
self-serve. Your job is to work out which of them a human should talk to, what to say to them, and
whether talking to them actually adds revenue.

---

## 0. Fix these before the call (the risks)

1. **Location and eligibility.** Benefits are "for eligible US employees," and the role is posted on
   Built In Seattle. Find out early whether they hire outside the US, or as a contractor. Don't let this
   come up for the first time at the offer stage. Your US-hours working pattern helps.
2. **"5–8 years in RevOps."** Your 11 years are SDR, team lead, and GTM systems work, not RevOps by
   title. Frame it as: "I've owned the RevOps work on GTM teams that didn't have a RevOps person:
   CRM, enrichment, funnel definitions, reporting, and copy." Then show you understand forecasting,
   which is the part you've done least.
3. **HubSpot admin depth.** They'll probe this. Before the call, write down exactly what you've done
   in HubSpot: custom objects or properties, workflows, lead-scoring properties, lifecycle stages,
   integrations, dedupe. If you haven't done custom objects or Operations Hub (custom-coded actions,
   data sync), learn them tonight in a free HubSpot developer test account and don't overclaim.
4. **Forecasting.** No forecasting story on your CV. Use the frame in Section 4 and be ready to explain
   it on a whiteboard.
5. **Fintech.** Not required. Your bridge: you sell to buyers whose day job is risk and compliance
   (Dela Cyber Security), and you understand that an advisor's time is billable.
6. **Use the product.** Sign up for the free tier tonight, then start an Advisor Core trial if one is
   offered. Notice every point where you'd want a salesperson to step in. That gives you the material
   for Section 4, and very few candidates will do it.

---

## 1. Know the business (2 minutes)

- **Motion:** product-led growth. Free → Plus ($39/mo) → Premium ($79) → Advisor Core ($209) →
  Advisor Pro ($299) → Teams (custom). All prices are per month, billed annually.
- **The money is in the advisor tiers.** One Advisor Pro seat earns about 7.5× a Plus seat, and a
  Teams deal at an RIA is several seats. Sales-assist should focus on advisors, and above all on
  firms with several advisors.
- **What advisors pay for:** model portfolios, client proposals and reports (10/mo on Core, 200 on
  Pro), custodian integrations (1 on Core, several on Pro).
- **Proof points:** #1 in Investment Research & Analytics in the 2025 Kitces AdvisorTech Study (9/10
  satisfaction); 4.8/5 on G2.
- **Competitors:** YCharts (the main one for advisors; per-seat, broader, pricier), Morningstar
  (Advisory Suite), FactSet, Bloomberg, Kwanti, Nitrogen.
- **Culture words to use back to them:** Customer First, Humility & Respect, Teamwork, Continuous
  Improvement, Getting Things Done. They're cash-flow positive and say "doing more with less."

---

## 2. "Tell me about yourself" (75 seconds)

> I've spent 11 years in outbound. I started on the phones as an SDR, then led SDR teams, and for the
> last few years I've built the systems GTM teams run on, usually as the only person doing it. At Dela
> Cyber Security I built the system end to end: segmenting the market, enrichment, sequencing, and
> HubSpot as the system of record. I also wrote the copy myself. As a CSM at an outbound agency I
> diagnosed campaign performance across client accounts. One client thought their campaign converted
> at 2.6%. When I audited the call logs, wrong numbers and busy signals were being counted as
> conversations, so the real rate was 9.3%. That's the kind of work I like most: getting the
> definitions right so the team is judging motions on real numbers.
> This role is the whole job in one seat: CRM, data, funnel, reporting, and the messaging itself.
> That's how I've always worked.

## 3. "Why Koyfin?" (pick 2)

- **The problem is the interesting part.** You don't have a lead shortage, you have 800k of them.
  The work is picking out the few thousand worth a human's time and proving the human makes a
  difference. That's a harder and better problem than filling a top-of-funnel.
- **I want to own the outcome.** A builder role with the bonus tied to pipeline means my work gets
  judged on revenue, not on how many dashboards I ship.
- **The product wins on its merits.** Top Kitces score, a real price advantage over YCharts and
  Morningstar. Messaging is much easier when people already love the product.

---

## 4. The core of the interview: how you'd build it

They'll ask some version of *"How would you build the funnel, lead score, and testing from scratch?"*
Talk through these four pieces in order. This is where you win the interview.

### a) Funnel definitions (write these down first)
```
Registered → Enriched → Fit (advisor at a target firm) → PQL (fit + product signal)
→ SDR-worked → Engaged (positive reply / connected call) → Meeting held → Deal created → Closed won
```
Every stage gets a written definition, an owner, and the HubSpot property and timestamp that marks
it. Say: "If the definitions are wrong, every dashboard built on them is wrong too. My 2.6% vs 9.3%
story is exactly that."

**Positive reply** (the JD names this): a reply that shows interest or asks for a next step, or a
referral to the right person. These don't count: out-of-office, "not interested," unsubscribe, or
"send me info" with no follow-up. Have a human review a sample every week so the automatic
classifier doesn't drift.

### b) Enrichment (your best idea, so use it)
**SEC Form ADV / IAPD data is free and public.** Match each registrant's email domain to their
firm's Form ADV and you get AUM, number of advisors, number of clients, custodians, and whether
they're an RIA or a broker-dealer. No paid tool gives advisor firms a better fit signal. Use Apollo
or HubSpot enrichment for title and company size on everyone else.

Say it like this: "Before buying any data, I'd match registrant domains against the SEC adviser
database. That gives you AUM and headcount for most of your advisor users for free."

### c) Lead score = fit × product signal
| Fit (who they are) | Product signal (what they do) |
|---|---|
| Advisor at an RIA (Form ADV match) | Built a model portfolio or client portfolio |
| Firm AUM band and advisor count | Tried to generate a client report or proposal |
| 2+ registrants from the same firm domain (**Teams signal**) | Tried to connect a custodian |
| Custodian matches one Koyfin integrates with | Hit a plan limit or saw an upgrade prompt |
| Title: Principal, CIO, Partner, Lead Advisor | Visited the pricing page; logged in on several days in one week |

- **Score accounts, not only contacts.** Five advisors from one RIA, each on a free or Plus plan, is
  a Teams deal.
- **Version 1 is built by hand, not by a model.** Use rules and weights, then check them against
  history: what did the users who upgraded to Advisor tiers do in their first 14 days? Re-weight
  monthly from score-to-deal conversion.
- **Product data gets into HubSpot through engineering** (the JD says they're available). Agree on a
  short list of product events at the start instead of asking for everything.

### d) Test validation (what separates a senior answer)
In product-led growth, many of the users sales reaches out to **would have upgraded on their own
anyway.** So every time-boxed test needs a **holdout group**: randomly split the PQLs, leave one
group alone, and measure **incremental** upgrades and revenue, not raw conversions. Write down the
hypothesis, sample size, run window, success metric (revenue or deals created, not opens), and kill
criteria before the test starts.

> "Otherwise sales gets credit for revenue the product would have made anyway, and you end up
> hiring SDRs to collect it."

### e) Forecasting (keep it simple)
Two layers: **(1) the self-serve baseline**, which is the trend in upgrades and plan mix, plus
**(2) the sales-assisted pipeline**, weighted by stage conversion rates from your own history (not
HubSpot's default stage probabilities). Check pipeline coverage against target every week, and
review forecast against actual every quarter.

---

## 5. Messaging (they'll likely ask you to write or critique copy)

Rules: short, about one thing they did in the product, one low-effort question. No feature dumps.
Advisors bill for their time, so the selling point is **time saved per client review and cost saved
against YCharts or Morningstar.**

**Sample email: an advisor who tried to generate a client report on a Plus plan:**
> Subject: client reports in Koyfin
>
> Hi {first name}, saw you started building a client report in Koyfin this week.
>
> Most advisors at {AUM band} firms we talk to are rebuilding the same proposal deck by hand each
> quarter. Advisor Core pulls holdings from {custodian} and generates it in a few clicks.
>
> Worth a 15-minute walkthrough on your own book, or should I send a 2-minute video instead?

**LinkedIn (connection note, no pitch):**
> Hi {first name}, I work with RIAs using Koyfin and noticed {firm} has a few advisors on the
> platform. Happy to connect.

Measure each message by positive-reply rate, meeting rate, and then deals created. Change one
variable per test.

---

## 6. STAR stories mapped to the JD

| JD requirement | Story | Result to land |
|---|---|---|
| Funnel definitions / data quality | **Structural Chat diagnostic**: wrong numbers and busy signals counted as conversations | 2.6% → true 9.3%; reporting definitions fixed |
| Outbound copy ownership | **Structural / SELLL** copy rewrites using an illumination-question method; changed one variable per test | Use the real reply-rate change from your files |
| Building from scratch | **Devolon Oy**: 0-to-1 sales process across Finland and the US, including the SDR-to-AE handoff | $1.5M+ in 7 months |
| HubSpot ownership | **Dela**: HubSpot as the system of record, enrichment, sequencing | Be ready to list exact objects, workflows, and integrations |
| Working with reps day to day | **OSP call-quality AI review**: flagged soft-commitment meetings before the client found them | Became a company-wide process |

---

## 7. First 90 days

- **Days 0–30: definitions and data.** Audit HubSpot (fill rates, duplicates, lifecycle stages).
  Write the funnel and positive-reply definitions and agree them with the Head of Sales. Run the
  Form ADV match. Agree the first product events with engineering. Shadow the AEs and SDRs.
- **Days 31–60: first scored motion.** Score v1 goes live. The SDRs work the top segment
  (multi-advisor firms showing Advisor-tier intent) with a holdout group. Message library v1. One
  dashboard: funnel by stage, broken out by segment.
- **Days 61–90: prove it, then scale it.** Read the test against the holdout. Re-weight the score.
  Forecast v1. Decide which motion to scale and which to stop.

---

## 8. Questions for the Head of Sales (pick 3)

1. What does sales-assist look like today? Who gets contacted now, and how is that decided?
2. What product-usage data reaches HubSpot today, if any?
3. How do you separate sales-sourced revenue from upgrades that would have happened anyway?
4. Is the bigger opportunity converting individual advisors or landing Teams deals at RIAs?
5. What would make this hire a clear success at 6 months, and what would make it a miss?
6. Is the role open to candidates outside the US? (Ask early if no one has confirmed it.)

---

## 9. Compensation

If asked: "Based on the scope, I'm targeting the upper half of the posted range, around $125–135k
base. I care more about the bonus being tied to numbers I can actually influence." Don't give a
number below the posted range.

## 10. Logistics

- Have this doc, your CV, and a logged-in Koyfin tab open. Mentioning one specific thing you found in
  the product will land well.
- Send a thank-you email within 24 hours that mentions the Form ADV enrichment idea.

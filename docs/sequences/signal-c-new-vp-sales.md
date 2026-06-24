# Apollo Sequence: Signal C — New VP Sales (< 60 Days in Role)
> **Signal:** LinkedIn shows new VP Sales / CRO / Head of Sales started role in last 60 days
> **Verticals:** DevTools, MarTech/SalesTech, Fintech, HR Tech
> **Persona:** The newly hired VP Sales / CRO
> **Sequence name in Apollo:** `SELLL — New VP Sales Signal`

---

## APOLLO IMPORT FIELDS

**From name:** Aaron Shepard
**From email:** aaron@team.selll.io
**Reply-to:** aaron@selll.io
**Send window:** Tue–Thu, 7:30–9:00 AM or 4:30–6:00 PM prospect timezone

---

## PERSONALIZATION VARIABLES

| Variable | Where to find it |
|---|---|
| `{{first_name}}` | LinkedIn |
| `{{company}}` | LinkedIn |
| `{{their_title}}` | LinkedIn (e.g. "VP Sales", "CRO", "Head of Revenue") |
| `{{days_in_role}}` | Calculate from LinkedIn start date |
| `{{vertical_hook}}` | Use DevTools, MarTech, Fintech, or HR hook below |

**Vertical hooks for Email 1:**
- DevTools: "and the PLG base is an unusual asset — converting that usage to enterprise contracts is a different motion"
- MarTech: "and the stack is usually fragmented — tools without an intelligence layer connecting them"
- Fintech: "and the outbound motion almost certainly wasn't built for a compliance-conscious buyer"
- HR Tech: "and the buyer has seen every template — signal timing is the only thing that changes how they receive it"

---

## EMAIL 1 — Day 1
**Subject A:** the GTM audit you're {{days_in_role}} days into
**Subject B:** inheriting a broken stack

---

{{first_name}},

Congrats on joining {{company}} as {{their_title}}.

The first 60 days usually reveal the same things: sequences nobody's touched in months, an ICP that hasn't been validated, and a team that's lost confidence in outbound.

We build the system that fixes all of that in 90 days — {{vertical_hook}}.

Worth comparing notes on what you've found so far?

Aaron

---

**LinkedIn note (Day 0):**
> "Congrats on joining {{company}} as {{their_title}}. I work with sales leaders on building the outbound system — especially in the first 90 days. Would love to connect."

---

## EMAIL 2 — Day 3
**Subject A:** what the fastest-ramping VPs do first
**Subject B:** your 90-day GTM reset

---

{{first_name}},

Dropped a note a couple days ago — hope it landed.

One pattern I see consistently: the VPs who hit their 90-day goals fastest don't start by rewriting messaging or making hires. They audit the system first — confirm what works, diagnose what's broken, and prioritize one lever.

If {{company}}'s outbound motion is already humming, you won't need us. But if the stack is fragmented — or results depend on one or two reps doing things their own way — I have a diagnostic framework that works for exactly this situation.

Just reply and I'll send it over. No call needed.

Aaron

---

## EMAIL 3 — Day 7
**Subject A:** what Stefan Golz built in 90 days
**Subject B:** a new CRO's first 90 days

---

{{first_name}},

Stefan Golz joined Holz Concepts as CRO with a familiar mandate: build a repeatable GTM system, fast.

He told us afterward: "The intelligence they gathered about our ICP was worth the engagement alone."

In 90 days — ICP mapping, outbound system rebuild, multi-channel launch. He walked into his 90-day review with a system, not a plan.

Does that sound like the situation you walked into at {{company}}?

Aaron

---

**LinkedIn DM — Day 10:**
> "{{first_name}} — sent a few ideas about {{company}}'s GTM setup via email this past week. Stefan Golz at Holz Concepts built the system he needed to show results in his first 90 days — we were the implementation arm behind his plan. Worth a quick chat?"

---

## EMAIL 4 — Day 14
**Subject A:** the board deck question in 60 days
**Subject B:** "what's the plan to 2x pipeline?"

---

{{first_name}},

Every new {{their_title}} gets asked the same question at the 60-day review: "What's the plan to 2x pipeline?"

The answers that land with boards are specific, systematic, with a timeline and an owner.

We can be the implementation partner behind that plan — building the intelligence layer, orchestrating the channels, running the outbound motion while you focus on the team.

Is that the kind of support you're looking for?

Aaron

---

## EMAIL 5 — Day 21 (Breakup)
**Subject A:** not the right fit?
**Subject B:** closing the loop

---

{{first_name}},

Sounds like the timing isn't right — or this just isn't what {{company}} needs right now. Either is fine.

If you ever need to move faster on the GTM build than your current capacity allows, I'd love to be a resource.

[aaron@selll.io](mailto:aaron@selll.io) or grab time here: https://cal.com/collins-ogiki-x4fokk/30min

Good luck in the role — hope Q3 delivers.

Aaron

---

## OBJECTION PREP

| Objection | Response |
|---|---|
| "Still figuring out what we need — too early" | "That's exactly when we add most value. The intelligence phase surfaces what's working and what's broken — it replaces weeks of internal discovery with a validated answer in 3 weeks." |
| "CEO/CFO needs to approve vendor spend" | "Most of our engagements are framed as a 90-day build with a defined deliverable — easier to approve than an open-ended retainer. Happy to help you build the business case. What ROI threshold does your CFO need?" |
| "Tried an agency last year, it didn't work" | "What broke — the list quality, the messaging, or the follow-through? Most agency failures come from one of those three. We can audit what they built before we start — so we don't repeat it." |
| "I want to build this in-house" | "We've seen that work — but it takes 6–9 months to hire the right people, build the stack, and get it humming. Our 90-day build delivers the same system in a fraction of the time, and you can hire into it afterward." |

---

## WHERE TO FIND NEW VP SALES TARGETS

### Method 1 — LinkedIn (manual, highest quality)
1. LinkedIn search → People → filter: Title = "VP Sales" OR "CRO" OR "Head of Revenue"
2. Filter: "Changed jobs in last 90 days" (under "All filters" → "Past company")
3. Filter: Industry = Computer Software, Internet, or IT Services
4. Filter: Company size = 11–200
5. Save list → extract company domain → Hunter enricher

### Method 2 — Apollo.io (fastest)
1. Apollo → People → Job Change filter → VP Sales / CRO
2. Industry: SaaS, DevTools, MarTech
3. Changed jobs: last 90 days
4. Export, verify emails with Hunter

### Method 3 — LinkedIn Jobs + Job Alerts
Set LinkedIn Job Alert: "VP Sales" in United States → weekly digest → every new hire is a signal
Reach out within 48 hours of seeing the announcement for highest reply rate.

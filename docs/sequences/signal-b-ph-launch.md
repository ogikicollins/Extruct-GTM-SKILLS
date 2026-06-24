# Apollo Sequence: Signal B — ProductHunt Launch
> **Signal:** B2B SaaS product launched on ProductHunt in last 60 days
> **Verticals:** Any B2B SaaS (DevTools, MarTech, HR Tech, Fintech)
> **Persona:** CEO / Co-Founder (maker of the PH launch)
> **Sequence name in Apollo:** `SELLL — ProductHunt Launch Signal`

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
| `{{first_name}}` | ProductHunt maker profile / LinkedIn |
| `{{company}}` | ProductHunt product name |
| `{{ph_launch_name}}` | The exact ProductHunt product name |
| `{{ph_upvotes}}` | ProductHunt listing (optional, if impressive: 200+) |
| `{{product_category}}` | What the product does in one clause |

---

## EMAIL 1 — Day 1
**Subject A:** after the ProductHunt launch
**Subject B:** {{ph_launch_name}} — what comes next

---

{{first_name}},

Congrats on the {{ph_launch_name}} launch.

The hardest part isn't over — it's starting. Upvotes validate the product. Pipeline validates the business.

Most founders at your stage have figured out what they're building. The next 90 days are about building a repeatable system to sell it — without being in every deal.

We build that system. Is removing yourself from the selling process on your roadmap this year?

Aaron

---

**LinkedIn note (Day 0):**
> "Congrats on the {{ph_launch_name}} launch on ProductHunt. I work with B2B founders on building the outbound system after the launch — the part that turns upvotes into pipeline. Would love to connect."

---

## EMAIL 2 — Day 3
**Subject A:** the pipeline problem after launch
**Subject B:** what inbound can't do alone

---

{{first_name}},

Dropped a note a couple days ago — hope it reached you.

ProductHunt brings inbound. Inbound converts the buyers who are already looking. But the largest segment — companies with your exact problem, not yet searching for a solution — are only reachable by outbound.

At your stage, that's usually the difference between $50K and $500K ARR in year one.

Happy to share what that system looks like — no call needed, just reply and I'll send a 3-minute Loom.

Aaron

---

## EMAIL 3 — Day 7
**Subject A:** what Ellie Nash said
**Subject B:** after founder-led sales

---

{{first_name}},

Ellie Nash, VP Growth at Flow Meditation, told us: "For the first time, I went a full week without being the reason a deal progressed."

Before SELLL: founder in every deal, inconsistent pipeline, no documented playbook.

After: 200+ personalized conversations daily, 24/7 pipeline generation, predictable weekly meetings.

If {{company}}'s pipeline still runs through you — that's exactly the conversation I'd love to have.

Are you free for 15 minutes this week?

Aaron

---

**LinkedIn DM — Day 10:**
> "{{first_name}} — sent a couple ideas your way over email this week on building pipeline post-launch. Ellie Nash at Flow Meditation went from founder-dependent sales to a fully automated GTM system in 90 days. The results were striking. Worth a quick 15 minutes?"

---

## EMAIL 4 — Day 14
**Subject A:** the real cost of founder-led sales
**Subject B:** before you make that first sales hire

---

{{first_name}},

Every hour you spend closing is an hour you're not building.

The founders who scale fastest don't hire first — they build the system first, then hire into it. The first sales rep walks in with qualified leads, a documented playbook, and a CRM that's already working.

Is that the setup {{company}} is building toward?

Aaron

---

## EMAIL 5 — Day 21 (Breakup)
**Subject A:** leaving this here
**Subject B:** not the right time

---

{{first_name}},

Won't keep filling your inbox.

If building a repeatable GTM system — one that generates pipeline without you in every deal — ever becomes the priority, I'd love to be the first call.

[aaron@selll.io](mailto:aaron@selll.io) or grab 15 minutes here: https://cal.com/collins-ogiki-x4fokk/30min

Good luck with {{company}}. Looks like you're building something real.

Aaron

---

## OBJECTION PREP

| Objection | Response |
|---|---|
| "We're too early for outbound" | "If you're closing deals today — even at low volume — you're not too early. The 90-day build is designed for exactly this stage: turning early traction into a repeatable motion." |
| "We're focused on inbound / PLG" | "PLG and outbound aren't competing motions. PLG brings in the users. Outbound reaches the economic buyer who controls the enterprise contract — usually a different person entirely." |
| "Only I can sell this" | "That's exactly why founder-led sales has a ceiling. The goal is encoding what you know into a system. The intelligence phase captures your positioning, your ICP language, your win patterns. The system runs your playbook, not a generic one." |
| "We don't have budget" | "The 90-day build is structured to show ROI in the first 60 days. At 200+ conversations and 3–5% reply rate, the math is usually self-evident. Want me to run the numbers specific to {{company}}'s ACV?" |

---

## WHERE TO FIND PH LAUNCH TARGETS

1. Go to [producthunt.com/topics/business-tools](https://www.producthunt.com/topics/business-tools) → filter last 60 days
2. Also check: /topics/developer-tools, /topics/marketing, /topics/sales, /topics/analytics
3. Filter for: B2B product, 100+ upvotes, maker has a LinkedIn profile
4. Find the maker's LinkedIn → extract company domain → run through Hunter enricher webhook
5. Use `POST https://n8n-production-6b270.up.railway.app/webhook/enrich-company` with body `{"company_name": "CompanyName"}`

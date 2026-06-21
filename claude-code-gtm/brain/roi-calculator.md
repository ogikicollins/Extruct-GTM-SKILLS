# ROI Calculator — SELLL.io
> Brain Layer: Execution | Updated: 2026-06-21
> Used in: discovery calls (Q4 budget objection), email copy, proposals, CFO/CEO approval conversations

The ROI calculation has two sides: the **cost of the broken process** (what they're losing right now) and the **return from the system** (what SELLL generates). Run both. The gap is the justification.

---

## Input Variables

Collect these during or before the discovery call. Estimations are fine if they won't share exact numbers.

| Variable | Ask Them | Estimation If Unknown |
|----------|---------|----------------------|
| A — Number of SDRs | "How many people are in pure outbound / SDR roles?" | Use 2 if company has 25–50 employees, 4 if 50–100 |
| B — SDR average OTE | "Roughly what's the OTE for an SDR on your team?" | Use $65,000 (US average for B2B SaaS SDR 2026) |
| C — SDR activities per day | "How many outbound activities — emails, calls, LinkedIn — is each SDR doing per day?" | Use 35 (the documented average for manual SDR without a system) |
| D — Current reply rate | "What percentage of cold emails do you see replies on?" | Use 0.8% (industry average) |
| E — Average deal size (ACV) | "What's your average contract value for a new client?" | Use whatever's in the `selll_context.md` ICP budget section |
| F — Sales cycle length | "How long from first meeting to signed contract on average?" | Use 30 days for SMB, 60 days for mid-market |
| G — Current meetings per month from outbound | "How many meetings is the team booking from cold outbound each month?" | Derive from C × A × 22 work days × D% × 40% reply-to-meeting rate |

---

## Calculation Model

### Side 1: Cost of the Broken Process

**Step 1 — SDR Time Cost**
```
Monthly SDR cost = (B / 12) × A
= (OTE / 12 months) × number of SDRs

Example: ($65,000 / 12) × 3 SDRs = $16,250/month in SDR labor cost
```

**Step 2 — Misallocated Labor Cost**
```
Research time = 45% of SDR time (industry average without a system)
Monthly misallocated labor = monthly SDR cost × 45%

Example: $16,250 × 45% = $7,313/month spent on research, not selling
Annual misallocated labor = $7,313 × 12 = $87,750/year
```

**Step 3 — Lost Pipeline from Low Activity**
```
Current activities/day per SDR = C (e.g., 35)
With system, activities/day per SDR = 200

Current daily conversations = C × A SDRs
= 35 × 3 = 105 conversations/day

With system: 200 × 3 = 600 conversations/day
Gap: 600 - 105 = 495 additional conversations/day
```

**Step 4 — Lost Revenue from Gap**
```
Monthly meeting gap = (495 conversations/day × 22 work days) × reply rate × reply-to-meeting rate
= 495 × 22 × 3.5% × 50% = 190 additional meetings/month
(using SELLL benchmark: 3.5% reply rate, 50% reply-to-meeting)

Additional pipeline = 190 meetings × E (ACV) × close rate (assume 20%)
= 190 meetings × $30,000 ACV × 20% = $1,140,000/month in additional pipeline potential
```

---

### Side 2: Return from the SELLL System

**Revenue generated:**
```
Monthly conversations from system: A SDRs × 200/day × 22 days = 13,200/month
Reply rate: 3-5% (use 3.5% conservatively)
Replies/month: 13,200 × 3.5% = 462 replies/month
Meetings from replies: 462 × 50% = 231 meetings/month
Pipeline from meetings: 231 × 20% close rate × E (ACV)
= 231 × 20% × $30,000 = $1,386,000/month in pipeline
```

**Time saved:**
```
SDR research time eliminated: A SDRs × 45% × 22 days × 8h = recaptured selling hours/month
= 3 SDRs × 45% × 22 × 8 = 238 hours/month returned to selling
```

**Payback on SELLL investment:**
```
SELLL monthly cost: $15,000 setup (one-time) + $3,000/month retainer
= Month 1: $18,000 total | Month 2+: $3,000/month

One new deal pays back Month 1 if ACV > $18,000
At $30,000 ACV: payback in 0.6 deals (less than one month's pipeline)
At $15,000 ACV: payback in 1.2 deals
At $10,000 ACV: payback in 1.8 deals
```

---

## Quick ROI Summary Output

Use this format in emails and on calls:

```
YOUR CURRENT STATE:
• [A] SDRs spending ~45% of their time on research = $[misallocated labor/month]/month not being used to sell
• ~[current meetings] meetings/month from cold outbound at [D]% reply rate

WITH SELLL:
• 200+ automated conversations/day per SDR — same team, same headcount
• 3-5% reply rate → estimated [new meetings]/month in qualified meetings
• ~[additional pipeline] in additional monthly pipeline
• Full payback on the $15K build: your first [X] new deals

90-day build cost: $15K setup + $3K/month (includes dedicated human SDR)
```

---

## ROI Calculator by Company Size

Pre-calculated for common SELLL prospect profiles:

### Small Team (2 SDRs, $20K ACV)
```
Current state: 2 SDRs × 35 activities/day = 70 conversations/day
Misallocated labor: 2 × ($65K/12) × 45% = $4,875/month
Current meetings: ~70 × 22 × 0.8% × 50% = 6 meetings/month
Current pipeline: 6 × 20% × $20K = $24K pipeline/month

With SELLL: 2 × 200 = 400 conversations/day
Meetings: 400 × 22 × 3.5% × 50% = 154 meetings/month
Pipeline: 154 × 20% × $20K = $616K pipeline/month

Payback: $15K setup / $20K ACV = 0.75 deals (less than 1 closed deal pays it back)
```

### Mid Team (4 SDRs, $35K ACV)
```
Current state: 4 × 35 = 140 conversations/day
Misallocated labor: 4 × ($65K/12) × 45% = $9,750/month
Current meetings: ~140 × 22 × 0.8% × 50% = 12 meetings/month
Current pipeline: 12 × 20% × $35K = $84K pipeline/month

With SELLL: 4 × 200 = 800 conversations/day
Meetings: 800 × 22 × 3.5% × 50% = 308 meetings/month
Pipeline: 308 × 20% × $35K = $2.16M pipeline/month

Payback: $15K / $35K ACV = less than 1 deal
```

### Lean Team (1 SDR + Founder, $25K ACV)
```
Current state: 1 SDR + founder = ~70 conversations/day (founder's time is costly)
With SELLL: system runs 200+ while founder exits the selling process
Meetings: 200 × 22 × 3.5% × 50% = 77 meetings/month
Pipeline: 77 × 20% × $25K = $385K pipeline/month

Payback: $15K / $25K ACV = less than 1 deal
Bonus value: Founder's time recaptured = worth $200K+ at $100/hour implied rate
```

---

## Using the Calculator in a Call

**When they ask "what does this cost?"**

Step 1 — Never lead with the number. Ask first:
> "Before I give you the number, can I run a quick calculation with you? It'll take 2 minutes and the number only makes sense in context. How many SDRs do you have?"

Step 2 — Run the misallocated labor calculation in real-time:
> "At [A] SDRs on [B] OTE, you're spending roughly $[misallocated labor] per month on research instead of selling. That's the hidden cost most people never calculate."

Step 3 — Run the pipeline gap:
> "Right now you're having [current conversations] conversations per day and getting [D]% reply rates. The system runs 200+ conversations per day and 3.5%. That difference generates roughly [gap meetings] more meetings per month."

Step 4 — Now give the price in context:
> "The build is $15K one-time, $3K/month with a human SDR included. At your ACV of [E], one new deal pays for the setup. Does that math make sense?"

---

## Proposal ROI Section Template

Include in every proposal:

```
## The ROI Math for [Company]

Current state:
- [A] SDRs generating ~[current meetings] meetings/month
- Estimated $[misallocated labor]/month in research labor not being used to sell
- Reply rate: ~[D]%

Projected with SELLL:
- 200+ daily conversations per SDR (vs. [C] today)
- Reply rate: 3-5% (vs. [D]% today)
- Estimated [new meetings] meetings/month in 30 days
- Estimated $[new pipeline] in additional monthly pipeline

Investment:
- $15,000 setup (90-day build, one-time)
- $3,000/month (includes dedicated human SDR)

Payback point:
- [payback deals] new deals = full payback on the setup fee
- At [F]-day sales cycle: breakeven by [breakeven date]
```

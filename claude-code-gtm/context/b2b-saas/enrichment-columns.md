# Enrichment Column Specifications — SELLL.io
> Layer 2: Activation | Updated: 2026-06-21
> Used by: `SELLL-layer-2` skill → `list-enrichment` skill → Extruct `research_pro` agent

These are the exact column configurations to pass to the `list-enrichment` skill for each hypothesis.
Always run the BASE COLUMNS first, then add the hypothesis-specific columns on top.

---

## Base Columns (Run for Every Campaign)

These columns run on every Extruct table regardless of hypothesis.

### Column 1: ARR Estimate
```
name: arr_estimate
format: money
agent: research_pro
prompt: >
  Research {input} and estimate their annual recurring revenue (ARR) in USD.
  Look for: funding announcements, press releases, job posts mentioning revenue targets,
  LinkedIn posts, Crunchbase, and news articles.
  Return ONLY a number in USD (e.g. 5000000 for $5M ARR).
  If truly unknown, return 0.
```

### Column 2: Funding Stage
```
name: funding_stage
format: select
labels: [Bootstrapped, Pre-Seed, Seed, Series A, Series B, Series C+, Public, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine their current funding stage.
  Check Crunchbase, LinkedIn, press releases, and their website.
  Return ONLY one of the labels: Bootstrapped, Pre-Seed, Seed, Series A, Series B, Series C+, Public, Unknown.
```

### Column 3: Last Funding Date
```
name: last_funding_date
format: date
agent: research_pro
prompt: >
  Research {input} and find the date of their most recent funding round.
  Check Crunchbase, LinkedIn announcements, and press releases.
  Return the date in YYYY-MM-DD format.
  If no funding found or bootstrapped, return N/A.
```

### Column 4: Last Funding Amount
```
name: last_funding_amount
format: money
agent: research_pro
prompt: >
  Research {input} and find the amount raised in their most recent funding round in USD.
  Check Crunchbase, LinkedIn, and press releases.
  Return ONLY a number in USD (e.g. 8000000 for $8M).
  If no funding or undisclosed, return 0.
```

### Column 5: Actual Employee Count
```
name: employee_count_actual
format: number
agent: research_pro
prompt: >
  Research {input} and find their current employee count.
  Check LinkedIn company page first (most accurate), then their website and Crunchbase.
  Return ONLY a number (e.g. 65).
  If truly unknown, return 0.
```

### Column 6: SDR Team Size
```
name: sdr_team_size
format: number
agent: research_pro
prompt: >
  Research {input} and estimate how many SDRs, BDRs, or Sales Development Representatives
  are currently on their team.
  Check LinkedIn for current employees with SDR/BDR titles.
  Count only active employees, not contractors.
  Return ONLY a number. If none found, return 0.
```

### Column 7: Sequencer Tool
```
name: sequencer_tool
format: select
labels: [Outreach, Salesloft, Apollo, Instantly, Lemlist, Reply.io, Mixmax, None, Unknown]
agent: research_pro
prompt: >
  Research {input} and identify which email sequencing or sales engagement platform they use.
  Check: their job posts (often mention tools), LinkedIn posts by sales team, their tech stack
  on sites like BuiltWith or G2, or reviews they've left on G2.
  Return ONLY one of the labels. If multiple found, return the primary one.
  If none found, return Unknown.
```

### Column 8: CRM Tool
```
name: crm_tool
format: select
labels: [HubSpot, Salesforce, Pipedrive, Close, Zoho, Microsoft Dynamics, Other, Unknown]
agent: research_pro
prompt: >
  Research {input} and identify which CRM they use.
  Check job posts, LinkedIn, BuiltWith, and G2 reviews.
  Return ONLY one of the labels. If multiple, return the primary one.
```

### Column 9: Has RevOps
```
name: has_revops
format: select
labels: [Yes, No, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine if they have a dedicated Revenue Operations or
  Sales Operations person (full-time employee, not just a title).
  Check LinkedIn for current employees with: RevOps, Revenue Operations,
  Sales Operations, GTM Operations in their title.
  Return Yes if found, No if team is under 50 people with no RevOps person found,
  Unknown if inconclusive.
```

### Column 10: Primary Vertical
```
name: primary_vertical
format: select
labels: [Fintech, HR Tech, MarTech, DevTools, Data Analytics, Healthcare Tech, Legal Tech, Real Estate Tech, Other B2B SaaS, Unknown]
agent: research_pro
prompt: >
  Research {input} and classify what vertical or industry their B2B SaaS product serves.
  Focus on WHO they sell to, not what technology they use.
  Example: if they sell HR software to companies, the vertical is HR Tech.
  Return ONLY one of the labels.
```

### Column 11: Hypothesis Confirmed (CRITICAL QUALITY GATE)
```
name: hypothesis_confirmed
format: select
labels: [Yes, No, Unclear]
agent: research_pro
prompt: >
  [HYPOTHESIS-SPECIFIC — see per-hypothesis column specs below]
```

---

## Hypothesis-Specific Additional Columns

Add THESE columns ON TOP of the base columns for each hypothesis run.

---

### H1 — Post-Raise Pressure

**hypothesis_confirmed prompt:**
```
Research {input} and confirm whether they raised a funding round in the last 12 months.
Check Crunchbase, LinkedIn, press releases. If confirmed, return Yes.
If no funding in last 12 months, return No.
If inconclusive, return Unclear.
```

**Additional column — Board Pressure Signal:**
```
name: board_pressure_signal
format: text
agent: research_pro
prompt: >
  Research {input}'s CEO or CRO on LinkedIn.
  Look for posts in the last 60 days about: pipeline, revenue goals, growth targets,
  hiring salespeople, or board meetings.
  Summarize any relevant posts in 1-2 sentences.
  If no relevant activity found, return "No signal found."
```

**Additional column — Post-Raise Hire Signal:**
```
name: vp_sales_hired_post_raise
format: select
labels: [Yes, No, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine if they hired a VP Sales, CRO, or Head of Sales
  AFTER their most recent funding round.
  Check LinkedIn for new leadership hires announced in the 6 months following the raise.
  Return Yes if found, No if no such hire, Unknown if inconclusive.
```

---

### H2 — SDR Hiring Trap

**hypothesis_confirmed prompt:**
```
Research {input} and confirm whether they currently have an active job post for
an SDR, BDR, Sales Development Representative, or Business Development Representative.
Check LinkedIn Jobs, their careers page, and Indeed.
Return Yes if active post found. No if no post. Unclear if inconclusive.
```

**Additional column — SDR Job Post Date:**
```
name: sdr_job_post_date
format: date
agent: research_pro
prompt: >
  Research {input} and find when their current SDR/BDR job post was published.
  Check LinkedIn Jobs and their careers page.
  Return date in YYYY-MM-DD format. If not found, return N/A.
```

**Additional column — SDR Job Post URL:**
```
name: sdr_job_post_url
format: url
agent: research_pro
prompt: >
  Research {input} and find the URL of their active SDR or BDR job posting.
  Check LinkedIn Jobs first, then their careers page.
  Return the URL. If not found, return N/A.
```

---

### H3 — Founder Ceiling

**hypothesis_confirmed prompt:**
```
Research {input} and determine if the founder or CEO appears to still be personally
involved in sales. Look for: LinkedIn posts about customer meetings, deals won,
sales activity; job title includes "Founder" with no VP Sales on the team;
Glassdoor or Blind reviews mentioning the founder in sales; no CRO or VP Sales found.
Return Yes if signals found, No if they have a dedicated VP Sales/CRO, Unclear if mixed.
```

**Additional column — VP Sales Exists:**
```
name: vp_sales_exists
format: select
labels: [Yes, No, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine if they have a VP Sales, CRO, or Head of Sales
  as a current employee.
  Check LinkedIn company page for current leadership.
  Return Yes if found, No if no such person found (and company has 15+ employees),
  Unknown if inconclusive.
```

**Additional column — CEO LinkedIn Activity:**
```
name: ceo_linkedin_activity
format: text
agent: research_pro
prompt: >
  Find the CEO or founder of {input} on LinkedIn.
  Summarize their last 3 posts in 1 sentence each.
  Focus on: are they posting about customers, sales, pipeline, growth?
  Return a brief summary. If no recent posts, return "No recent LinkedIn activity."
```

---

### H4 — Broken Sequence Problem

**hypothesis_confirmed prompt:**
```
Research {input} and confirm whether they are actively running outbound email sequences.
Look for: Apollo, Outreach, Salesloft, or another sequencer in their stack;
SDRs on the team; LinkedIn posts about outbound; G2 reviews they've left about
outbound or email tools.
Return Yes if confirmed they are running sequences, No if no outbound motion found,
Unclear if mixed signals.
```

**Additional column — Apollo in Stack:**
```
name: apollo_in_stack
format: select
labels: [Yes, No, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine if they are currently using Apollo.io as part of
  their sales stack. Check BuiltWith, LinkedIn job posts mentioning Apollo, and
  Crunchbase technology signals.
  Return Yes, No, or Unknown.
```

**Additional column — G2 Review Signal:**
```
name: g2_outbound_review
format: text
agent: research_pro
prompt: >
  Search for G2 or Capterra reviews written by employees of {input} about
  outbound sales tools, email sequences, or SDR software.
  If any reviews found, summarize the key pain points mentioned in 1-2 sentences.
  If no reviews found, return "No G2 reviews found."
```

---

### H5 — New VP Sales Window (Primary Hypothesis)

**hypothesis_confirmed prompt:**
```
Research {input} and confirm whether a VP Sales, Head of Sales, CRO, or
Chief Revenue Officer joined the company in the last 90 days.
Check LinkedIn for new leadership announcements, company posts welcoming a new hire,
and the individual's LinkedIn profile showing a new position start date.
Return Yes if confirmed new hire within 90 days, No if no such hire,
Unclear if start date is ambiguous.
```

**Additional column — VP Sales Name:**
```
name: vp_sales_name
format: text
agent: research_pro
prompt: >
  Research {input} and find the name of their current VP Sales, Head of Sales,
  or CRO who joined in the last 90 days.
  Check LinkedIn company page and recent LinkedIn posts.
  Return first and last name. If not found, return N/A.
```

**Additional column — VP Sales LinkedIn:**
```
name: vp_sales_linkedin
format: url
agent: research_pro
prompt: >
  Research {input} and find the LinkedIn profile URL of their current VP Sales,
  Head of Sales, or CRO who joined in the last 90 days.
  Return the full LinkedIn URL (linkedin.com/in/...).
  If not found, return N/A.
```

**Additional column — VP Sales Start Date:**
```
name: vp_sales_start_date
format: date
agent: research_pro
prompt: >
  Research {input} and find when their current VP Sales, Head of Sales, or CRO
  started in the role.
  Check their LinkedIn profile for the start date of their current position.
  Return date in YYYY-MM-DD format. If not found, return N/A.
```

**Additional column — VP Sales LinkedIn Activity:**
```
name: vp_sales_linkedin_activity
format: text
agent: research_pro
prompt: >
  Find the new VP Sales or CRO at {input} on LinkedIn.
  Summarize their last 2-3 posts in 1 sentence each.
  Are they posting about: joining the company, building the team, pipeline,
  outbound strategy, or general sales insights?
  Return a brief summary. If no posts found, return "No recent LinkedIn activity."
```

---

### H6 — Lean Rebuild

**hypothesis_confirmed prompt:**
```
Research {input} and determine if their sales team recently went through a
restructuring, headcount reduction, or if the founder has taken back sales
responsibilities after previously having a sales team.
Check: LinkedIn for team size changes, recent layoff announcements, Glassdoor,
LinkedIn posts about "rebuilding" or "scaling from lean."
Return Yes if restructuring signals found, No if team appears stable,
Unclear if inconclusive.
```

**Additional column — Team Restructuring Signal:**
```
name: restructuring_signal
format: text
agent: research_pro
prompt: >
  Research {input} for any news or signals in the last 6 months about:
  layoffs, team restructuring, "right-sizing," leadership changes in sales,
  or the founder resuming direct sales responsibility.
  Check LinkedIn, Layoffs.fyi, news articles, and Glassdoor.
  Summarize any findings in 1-2 sentences. If none found, return "No restructuring signal found."
```

---

### H7 — Stuck Audit

**hypothesis_confirmed prompt:**
```
Research {input} and find signals that their outbound or sales motion has been
stagnant or underperforming. Look for: G2 reviews about Belkins, CIENCE, or
managed SDR services mentioning disappointing results; LinkedIn posts about
reconsidering their outbound approach; recent articles about their sales challenges;
job posts replacing a Head of Sales who recently left.
Return Yes if stagnation signals found, No if no such signals, Unclear if mixed.
```

**Additional column — Competitor Review Signal:**
```
name: competitor_review_signal
format: text
agent: research_pro
prompt: >
  Search G2, Capterra, and LinkedIn for reviews or posts written by employees
  of {input} that mention outbound agencies (Belkins, CIENCE, Kalungi, etc.)
  or express frustration with their current outbound results.
  Summarize any relevant findings in 1-2 sentences.
  If nothing found, return "No competitor review signal found."
```

---

---

## Intelligence Layer Columns (v2.0 — Run on All Confirmed Companies)

These 6 columns were added in the Layer 2 v2.0 upgrade. They run after hypothesis-specific columns, on all `hypothesis_confirmed = Yes` companies. They power Phase 4 (Outreach Intelligence): proof point matching, sequence branch selection, and reply probability scoring.

### Column I1: Competitor Usage Check
```
name: competitor_client
format: select
labels: [Belkins, CIENCE, Kalungi, SDRx, LeadIQ, Seamless, None Found, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine if they are currently using or have recently used
  an outbound agency or managed SDR service.
  Check: LinkedIn reviews by their employees, G2 reviews they left, LinkedIn posts
  by sales team members mentioning agency partnerships, job posts mentioning
  "currently working with [agency]."
  Return the agency name if found. None Found if no agency detected. Unknown if inconclusive.
```

### Column I2: Competitor Frustration Signal
```
name: competitor_frustration_signal
format: text
agent: research_pro
prompt: >
  Search G2, Capterra, and LinkedIn for reviews or posts by employees of {input}
  that express frustration with a current outbound agency or managed SDR service,
  OR frustration with their current outbound reply rates or pipeline generation.
  Summarize findings in 1-2 sentences including the specific complaint and platform.
  If nothing found, return "No frustration signal found."
```

### Column I3: Buying Journey Stage
```
name: buying_journey_stage
format: select
labels: [Unaware, Awareness, Active Pain, Active Evaluation, Decision Ready, Unknown]
agent: research_pro
prompt: >
  Research {input}'s recent LinkedIn activity (CEO, CRO, or VP Sales), G2 reviews,
  and press to classify where they are in the buying journey for an outbound sales system:
  - Unaware: no signals they know they have an outbound problem
  - Awareness: some signals of outbound challenges (low pipeline mentioned, SDRs struggling)
  - Active Pain: explicit posts/reviews expressing outbound frustration
  - Active Evaluation: researching solutions (G2 browsing patterns, demo requests visible)
  - Decision Ready: comparing vendors, explicit "we need to fix this now" posts or reviews
  Return ONLY one of the labels above.
```

### Column I4: HQ Timezone
```
name: hq_timezone
format: select
labels: [ET, CT, MT, PT, GMT, CET, AEST, Unknown]
agent: research_pro
prompt: >
  Research {input} and determine the time zone of their headquarters or primary office.
  Check their website "About" or "Contact" page for city/state, LinkedIn company location.
  Map the location to the timezone: East Coast US → ET, Central US → CT, Mountain US → MT,
  Pacific US → PT, UK → GMT, Western Europe → CET, Australia/NZ → AEST.
  Return ONLY the timezone abbreviation.
```

### Column I5: Exec LinkedIn Signal
```
name: exec_linkedin_signal
format: text
agent: research_pro
prompt: >
  Find the CEO or most senior sales leader at {input} on LinkedIn.
  Summarize their last 2 posts in 1 sentence each.
  Focus on: pipeline problems, outbound struggles, team growth, revenue goals,
  or anything that confirms a pain signal we could reference in outreach.
  Quote any specific phrases that show pain or urgency.
  If no recent posts, return "No recent LinkedIn activity."
```

### Column I6: SDR Productivity Proxy
```
name: sdr_productivity_signal
format: select
labels: [High — structured process, Medium — some process, Low — likely manual, Unknown]
agent: research_pro
prompt: >
  Research {input}'s SDR team structure to estimate productivity.
  Signals of LOW: SDRs doing manual list research (job post mentions "research"), no sequencer
  found, Glassdoor ratings mentioning "no process" or "unclear expectations", SDR tenure
  < 6 months average.
  Signals of HIGH: RevOps confirmed, sequencer confirmed, playbooks mentioned in job posts,
  SDR tenure > 12 months.
  Return: High, Medium, Low, or Unknown.
```

---

## Column Run Order (v2.0)

For each campaign, run columns in this strict order to maximize credit efficiency:

```
1. Base columns (11 columns) — all raw companies after Phase 0 gates
2. hypothesis_confirmed — quality gate
3. ⛔ FILTER: Remove hypothesis_confirmed = No (saves ~5 credits per removed company)
4. Hypothesis-specific additional columns — confirmed + unclear companies only
5. Intelligence layer columns (6 columns: I1–I6) — confirmed companies only
6. Export to lead-scoring step (Phase 2E)
```

### Why this order matters:
- Running hypothesis_confirmed FIRST before expensive columns = 20–30% credit savings
- Intelligence columns only on confirmed companies = further 10–15% savings
- Intelligence columns also inform the Compound Signal Re-Detection (Phase 2D)

---

## Credit Estimate (v2.0)

| Phase | Columns | Agent | Credits per row |
|-------|---------|-------|----------------|
| Phase 2A | 11 base columns | research_pro | ~11 credits |
| Phase 2A | Quality gate (hypothesis_confirmed) | research_pro | ~1 credit |
| *(Filter removes ~25% of companies here)* | | | |
| Phase 2B | Hypothesis-specific (2–5 columns) | research_pro | ~3–5 credits |
| Phase 2C | Intelligence layer (6 columns: I1–I6) | research_pro | ~6 credits |
| **Total per confirmed company** | | | **~21–23 credits** |

**For a typical campaign:**
- 300 raw companies → ~225 confirmed (75% pass rate)
- Base + gate: 300 × 12 = 3,600 credits
- Hypothesis-specific + intelligence: 225 × 10 = 2,250 credits
- **Total: ~5,850 credits for 300 companies**

Present the full estimate to the user in Gate 0D before running.

# Trigger Playbooks — SELLL.io
> Brain Layer: Execution | Updated: 2026-06-21
> For each of the 7 buying signals: the exact 5-step protocol before a single email goes out.

A signal without a playbook is just noise. These playbooks convert the signal into a precise, personalized, timed outreach sequence within the urgency window.

---

## How Trigger Playbooks Work

```
Signal Detected (signal-monitor)
        │
        ▼
Playbook Selected (by signal type)
        │
        ▼
5-Step Pre-Outreach Protocol (this file)
        │
        ▼
Contact Found + Verified
        │
        ▼
Outreach Launched (within urgency window)
```

**Rule:** Never skip the playbook steps. The signal is the reason to reach out. The playbook is how you make the outreach worth reading.

---

## Playbook 1: Series A / B Funding Announced

**Signal type:** CRITICAL
**Urgency window:** 24 hours from announcement
**Source:** Crunchbase, Dealroom, TechCrunch, LinkedIn
**Hypothesis:** H1 — Post-Raise Pressure Window

### The 5 Steps

**Step 1 — Verify the signal (5 min)**
- Confirm the funding is real: check primary source (Crunchbase or official press release)
- Note: round size, lead investor, total raised, announced date
- Discard if: round is < $3M (too early), or > $50M (too large / too mature), or announced more than 14 days ago

**Step 2 — Rapid ICP check (10 min)**
- Is the company in a SELLL-compatible vertical? (SaaS, Tech, Fintech, HR Tech, Professional Services)
- Does the company have 25-150 employees? (Check LinkedIn)
- Does the company have at least 2 people in sales roles? (LinkedIn employee search: SDR, AE, VP Sales)
- Pass all 3: continue to Step 3. Fail any 1: move to Tier 3 / signal watch only

**Step 3 — Find the right contact (10 min)**
- Search order: VP Sales → CRO → Head of Sales → CEO (if < 50 employees)
- New hire preferred: if VP Sales joined in last 90 days, they have an active mandate
- Verify they're still at the company (not a past role)
- Find LinkedIn + email via Prospeo waterfall

**Step 4 — Build the context (10 min)**
Run these 4 checks on the company and contact:
1. Tech stack: what CRM + sequencer are they using? (confirms SELLL can integrate)
2. Job posts: are they hiring SDRs right now? (doubles the signal urgency — H1 + H2)
3. Contact's recent LinkedIn activity: any posts about GTM, pipeline, or team building in the last 30 days?
4. Board composition: who led the round? (Sequoia, a16z investors typically pressure immediate pipeline)

**Step 5 — Personalize the outreach (15 min)**
Construct the Email 1 hook using this formula:
```
[Company] just raised [round size] — congratulations opening
+ Their current GTM situation (1 observation from tech stack or headcount)
+ The 60-90 day window before board pressure arrives
+ Devolon proof point
+ 15-minute ask
```

**Full email template:**
```
Subject: congrats on the [Series A/B], [Name]

[Name],

Saw the [round size] announcement — congrats.

Companies at this stage typically have 60-90 days before the board starts asking "what's the pipeline growth plan?" — especially with [lead investor] involved.

We've helped [Devolon / Holz Concepts reference] build the outbound infrastructure at exactly this inflection point. Their SDRs went from 35 manual activities a day to 200+ automated conversations — same headcount.

Worth 15 minutes given the timing?

Aaron
```

**Multi-thread:** Yes — launch Thread A to VP Sales, Thread B to RevOps/Head of SDR if found.
**LinkedIn:** Send connection request to VP Sales same day with custom note referencing the raise.

---

## Playbook 2: VP Sales / CRO Hired (New in Role)

**Signal type:** HIGH
**Urgency window:** 48 hours from detection
**Source:** LinkedIn "Changed Jobs" notifications, Sales Navigator alerts
**Hypothesis:** H5 — New VP Sales Window

### The 5 Steps

**Step 1 — Verify and qualify the hire (5 min)**
- Confirm role: VP Sales, CRO, Head of Sales, VP Revenue (not VP Marketing or non-revenue roles)
- Confirm timeline: new start date within last 60 days (after 90 days, the window is narrowing)
- Confirm company fit: 25-150 employees, B2B, $2M-$30M ARR range
- Best window: 15-45 days into the new role (enough to see the mess, not enough to have a plan)

**Step 2 — Research the new hire (10 min)**
- Where did they come from? (more mature GTM = they know what good looks like = better prospect)
- Have they posted about their new role yet? (if yes, engage with the post before emailing)
- What did they post in their previous role? (reveals their GTM philosophy and language)
- Did the company post about the hire publicly? (signals mandate and visibility)

**Step 3 — Research what they inherited (10 min)**
- What tools does the company use now? (BuiltWith, LinkedIn job posts)
- What's the current SDR/AE team size? (LinkedIn employee search)
- Any evidence the previous GTM was underperforming? (G2 reviews, job posts for RevOps, low Glassdoor SDR ratings)
- Is the company actively hiring more sales? (signals rebuild mode = highest urgency)

**Step 4 — Find other contacts at the company (5 min)**
- Who is the CEO / Co-Founder? (copy on proposal approval)
- Is there a RevOps Manager? (Thread B champion — they'll be the system user)
- Who was the previous VP Sales? (if they left recently, confirms GTM reset is happening)

**Step 5 — Construct the outreach (10 min)**
```
Subject: The GTM audit you're probably 30 days into

[Name],

Congrats on joining [Company] as [title].

The first 60 days in a new VP Sales role usually reveals the same things: fragmented tools, sequences nobody's touched in months, and a team that's lost confidence in outbound.

We built the system that fixes all of that in 90 days — timed exactly to the "show results" window you're working in.

Worth comparing notes on what you've found so far?

Aaron

P.S. Stefan Golz joined Holz Concepts as CRO with the same mandate. He hit his first pipeline targets on time. Happy to share what we built.
```

**Personalization:** If they posted about joining the company, reference the specific language they used.
**Multi-thread:** Thread B = RevOps/Head of SDR if found. Thread C = CEO if company < 60 employees.

---

## Playbook 3: SDR / BDR Job Posted

**Signal type:** HIGH
**Urgency window:** 3 days from job post date
**Source:** LinkedIn Jobs, Indeed, Greenhouse, Lever
**Hypothesis:** H2 — SDR Hiring Trap

### The 5 Steps

**Step 1 — Qualify the job post (5 min)**
- Number of SDR openings: 1-3 = building lean (H2 + H6). 4+ = aggressive expansion.
- Required tools mentioned: HubSpot/Salesforce (has CRM ✓) + Apollo/Outreach (has sequencer ✓)
- Location: US/UK/AU/CA
- Required experience: if asking for 2+ years, they've been burned by junior SDRs before (more pain)

**Step 2 — Check current SDR situation (5 min)**
- How many SDRs do they have now? (LinkedIn employee search)
- If 0 current SDRs: they're building from scratch = system before headcount angle
- If 1-2 current SDRs: they're expanding = multiplier angle (make current SDRs 6x more effective)
- If 3+ current SDRs: they're scaling = check if existing SDRs are on a good system first

**Step 3 — Find the decision maker (10 min)**
- VP Sales or CRO is the right contact (not the recruiter, not HR)
- Secondary: Head of SDR or Sales Ops if VP Sales is new and junior SDR Manager is doing hiring
- CEO if company is < 40 employees

**Step 4 — Timing check (5 min)**
- How long has the job been posted? (< 14 days = most urgent, hire hasn't been made yet)
- 14-30 days: still relevant, they may not have found the right person yet
- 30+ days: getting stale, they may have made a hire — ask on first call

**Step 5 — Construct the outreach (10 min)**
```
Subject: Before you make that SDR hire

[Name],

Saw [Company] is hiring [SDR/BDR role].

One thing worth knowing before that hire: SDRs who ramp fastest are plugged into a system from day one. Otherwise they spend their first 60 days building their own list-building process from scratch.

We built that system for Devolon's team — their SDRs went from 35 manual activities/day to 200+ automated conversations. Same team, 6x the output.

Worth 15 minutes to show you what the system looks like before you make that hire?

Aaron
```

---

## Playbook 4: LinkedIn Post About GTM / Pipeline Pain

**Signal type:** MEDIUM
**Urgency window:** 5 days from post date
**Source:** LinkedIn search, Mention.com
**Hypothesis:** H4 — Broken Sequence Problem

### The 5 Steps

**Step 1 — Validate the post (5 min)**
- Is it self-expressed pain (not a reshare or abstract thought)?
- Does the pain align with SELLL's ICP? (pipeline, outbound, SDR, reply rates, fragmented stack)
- Is the poster a CRO/VP Sales/Founder at an ICP-fit company (not a random SDR)?
- Red flag: it's a thinly veiled product promotion for a competitor

**Step 2 — Engage with the post before emailing (same day)**
- Leave a substantive comment — add a data point, share a perspective, ask a genuine question
- Do NOT pitch in the comment. The comment warms you; the email converts.
- The comment gives you permission to mention it in the email: "I commented on your post..."

**Step 3 — Quote their exact words in the outreach (5 min)**
The most powerful personalization in this playbook is using the prospect's own language from the post.

```
Subject: saw your post about [topic]

[Name],

You wrote "[their exact quote from the post]" — that's the clearest description of the signal problem I've seen a revenue leader put into words.

That's exactly what we built SELLL to solve. The engine detects intent before the email goes out — so when your SDRs reach out, there's a reason that's relevant right now.

[Client outcome relevant to their pain].

Worth 15 minutes this week?

Aaron
```

**Step 4 — Check if they're in an active sequence already**
If they're already in an email campaign, suppress the campaign and switch to the warm DM path.
Never send a cold email AND a warm "saw your post" email simultaneously — it's incoherent.

**Step 5 — LinkedIn DM if no email reply in 48h**
```
[Name] — sent a note over email after seeing your post. Your description of [quote 3-4 words from their post] was exactly what I've been seeing too. Happy to share what's fixing it. Worth a DM conversation?
```

---

## Playbook 5: Competitor Displacement Signal

**Signal type:** HIGH
**Urgency window:** 48 hours
**Source:** G2 reviews, Capterra, LinkedIn posts mentioning "leaving [competitor]" or "disappointed with [competitor]"
**Hypothesis:** Adjacent to H4 — they're actively mid-decision

### The 5 Steps

**Step 1 — Confirm the signal (5 min)**
- Is the review/post negative toward a competitor SELLL can replace? (Belkins, CIENCE, Apollo, agency)
- Is the company size and vertical an ICP fit?
- Is the review < 30 days old? (more than 30 days = they may have already made a switch)

**Step 2 — Understand what broke (5 min)**
- What specifically did they complain about? (list quality, generic emails, no personalization, poor results, high cost per meeting)
- This becomes the personalization anchor in the email

**Step 3 — Map to SELLL's specific advantage**
| What broke | SELLL's counter |
|-----------|----------------|
| "Generic emails" | Signal-triggered personalization — every email is based on something happening at the company |
| "Poor results / low meeting volume" | 200+ daily conversations vs. managed SDR output of 8-15 meetings/month |
| "High cost per meeting" | System cost vs. per-meeting cost calculation from roi-calculator.md |
| "They don't understand our product" | Intelligence phase: 3 weeks diagnostic before any email goes out |
| "No transparency into what they're doing" | Full system ownership: you see every email, every reply, every score |

**Step 4 — Find the right contact**
G2 reviewer often leaves their name or role. Use this to find them on LinkedIn. Or find the CRO/VP Sales at the company.

**Step 5 — Send within 24h with extreme specificity**
```
Subject: saw the [competitor] review

[Name],

Saw your [G2/Capterra] review — "[1-2 words from their specific complaint]" is exactly what we hear from companies switching from [competitor].

The reason [complaint] happens with managed SDR services: there's no signal layer. Every email goes out on a schedule, not because something happened at the prospect's company to make them ready.

The SELLL system is different: we built it so every outreach is triggered by something real — funding, a new hire, a job post. That's why our clients see 3-5% reply rates where managed services see 0.5-1%.

Worth 15 minutes to show you the comparison?

Aaron
```

---

## Playbook 6: Company LinkedIn Post About GTM Activity (Growth Event)

**Signal type:** MEDIUM
**Urgency window:** 1 week
**Source:** LinkedIn company page monitoring
**Hypothesis:** H3 or H5 — Founder Ceiling or New VP Sales Window

### The 5 Steps

**Step 1 — Identify the post type**
| Post Type | What It Signals |
|-----------|----------------|
| "Excited to welcome [new VP Sales]" | Triggered H5 — new VP Sales playbook |
| "We're hiring! SDR/BDR role" | Triggered H2 — SDR hiring trap playbook |
| "Thrilled to announce our Series A" | Triggered H1 — funding playbook |
| CEO posts about company growth | H3 — Founder Ceiling, founder is active |
| Post about product launch | Potential new ICP; check company size and fit |

**Step 2 — Identify who posted it**
If the CEO posted about a new VP Sales hire → the CEO is also active on LinkedIn → consider a Thread C play to the CEO simultaneously

**Step 3 — Check for other signals at the company**
A company posting actively on LinkedIn about growth often has multiple signals firing simultaneously. Check:
- Recent funding? → Add H1 layer to the playbook
- Multiple sales hires? → Add H2 layer
- New VP Sales in post? → Trigger Playbook 2 also

**Step 4 — Engage before reaching out**
Like or comment on the post before emailing. The warm-up creates context: when the email arrives, it's not fully cold.

**Step 5 — Reference the post in the outreach**
```
Subject: saw the [Company] announcement

[Name],

Saw [Company]'s post about [specific event from post].

Companies at this stage — [their specific growth moment] — are usually wrestling with [relevant pain from ICP map].

[Shortest relevant proof point for their situation].

Worth 15 minutes?

Aaron
```

---

## Playbook 7: Intent Data / G2 Research Activity

**Signal type:** MEDIUM
**Urgency window:** 3 days
**Source:** G2 buyer intent, Bombora, 6sense (if connected)
**Hypothesis:** H4 — Broken Sequence Problem / active evaluator

### The 5 Steps

**Step 1 — Identify what they were researching**
G2 categories they browsed:
- "Sales Engagement" → they're evaluating sequencers → SELLL's outreach execution layer
- "Sales Intelligence" → they're evaluating prospecting databases → signal layer is the differentiator
- "AI Sales Tools" → they're looking at AI for outbound → differentiate from generic AI (Objection #22)
- "Outbound Agencies" → they're comparing managed services → SELLL vs. Belkins framing

**Step 2 — Verify ICP fit (5 min)**
Same 60-second check as all other playbooks.

**Step 3 — Find the right contact**
G2 intent data usually identifies the company, not the individual. Use `people-search` to find VP Sales or CRO.

**Step 4 — Validate with another signal**
Intent data alone is medium confidence. Before reaching out, check if another signal also exists at this company. Two signals = bump to HIGH urgency.

**Step 5 — Construct the outreach with intent framing**
```
Subject: you were researching [category] — one thing to know

[Name],

Looks like [Company] is evaluating options in the [sales engagement / AI outbound] space.

Before you make that decision, one distinction worth knowing: most platforms in that category are tools — they give you a database and a sequencer. The SELLL system is different: it's built to detect the moment a prospect is actually ready to buy (funding, new hire, job post) and reach out at exactly that moment.

That timing difference is why our clients see 3-5% reply rates on the same list that produces 0.5% elsewhere.

Worth 15 minutes to show you the comparison?

Aaron
```

---

## Playbook Execution Log

| Date | Company | Signal Type | Playbook Used | Steps Completed | Outreach Sent | Reply | Meeting |
|------|---------|------------|--------------|----------------|--------------|-------|---------|
| (engine not yet launched) | | | | | | | |

---

## Compound Signal Detector

> Added: 2026-06-21 | Fires when 2+ hypotheses are active at the same company within 30 days

A single signal = standard urgency per playbook.
Two or more signals at the same company = compound signal → CRITICAL priority → different outreach angle.

### Detection Rule

```
IF (signals from 2+ different hypotheses detected at the same company within 30 days)
THEN:
  1. Elevate to CRITICAL on priority-board.md immediately
  2. Alert: surface to human — do not wait for weekly review
  3. Apply compound signal email angle (below) — reference BOTH signals
  4. Set urgency window to the shorter of the two individual playbook windows
```

### Compound Signal Combinations + Email Angles

| Signal A | Signal B | Combined Angle | Urgency |
|----------|----------|---------------|---------|
| H1 (Post-Raise) | H5 (New VP Sales) | "You raised [X] months ago AND brought in a new VP Sales — that's the exact moment the outbound motion needs to match the board's expectations and the new hire's mandate." | 48h |
| H1 (Post-Raise) | H4 (Broken Sequences) | "You raised [X] months ago and you're running sequences with low reply rates. The board is watching pipeline. This is the window to fix the system before the pressure peaks." | 48h |
| H1 (Post-Raise) | H2 (SDR Hiring) | "You raised [X] months ago and you're hiring SDRs. Building the system before the headcount arrives is 3x more efficient than rebuilding after 6 months of low performance." | 72h |
| H5 (New VP Sales) | H4 (Broken Sequences) | "You're new to [Company] and what you've inherited is a sequence-based motion with low reply rates. The first 90 days is the window to fix that before it defines your first performance review." | 48h |
| H5 (New VP Sales) | H2 (SDR Hiring) | "New VP + new SDR hire = building the team before the system exists. We build the system in parallel so the team has a working motion from Day 1." | 72h |
| H2 (SDR Hiring) | H4 (Broken Sequences) | "You're hiring SDRs while your current sequences aren't converting. The new hires will inherit the broken motion unless the system is fixed before they start." | 72h |
| H1 (Post-Raise) | H3 (Founder Ceiling) | "Post-raise AND the founder still in deals — investors funded the company to scale, not to add to Aaron's pipeline. This is the right moment to build the system that takes the deal flow off the founder." | 72h |
| H5 (New VP Sales) | H3 (Founder Ceiling) | "New VP Sales + founder still closing deals = the transition isn't complete yet. We build the system that makes the handoff work." | 48h |
| Any 3 signals | Any 3 signals | TRIPLE COMPOUND — highest possible priority. Lead with: "We're seeing [signal 1], [signal 2], and [signal 3] at [Company] simultaneously — that's the clearest possible indicator that right now is the right moment." | 24h |

### Compound Signal Email Template

```
Subject: [signal 1] + [signal 2] — unusual combination

[Name],

Saw [signal 1 — specific detail] and [signal 2 — specific detail] at [Company] within the same [week / month].

That combination usually means [specific implication — the "so what" of both signals firing].

[One proof point for the most relevant of the two situations].

Worth 15 minutes before [most urgent window closes]?

Aaron
```

### Compound Signal Log

| Date | Company | Signal A | Signal B | Signal C | Priority | Action Taken | Outcome |
|------|---------|---------|---------|---------|---------|-------------|---------|
| (monitoring not yet started) | | | | | | | |

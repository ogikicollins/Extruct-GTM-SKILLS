---
name: SELLL-referral-engine
description: >
  Systematically generate referrals from existing clients, closed-won deals,
  and warm advocates. Drafts referral ask emails, LinkedIn DMs, and intro
  request scripts timed to peak satisfaction moments. Tracks all referrals as
  a separate pipeline source. One referral converts at 5–10x the rate of cold
  outreach. Part of the SELLL Revenue Engine — highest-ROI pipeline
  source. Triggers on: "referral", "ask for a referral", "referral engine",
  "get introductions", "client referral", "ask for intros", "referral
  program", "word of mouth pipeline", "referral ask", "champion network".
---

# Referral Engine

One warm referral from a satisfied client converts to a meeting at 5–10x the rate of cold outreach and closes at 2–3x the rate of inbound leads. This skill builds a systematic referral engine that runs alongside the outbound machine — extracting high-value pipeline from relationships you already have.

Most companies leave this entirely to chance. The referral engine makes it a system.

---

## When to Ask for a Referral

Timing is everything. Ask at the wrong moment and the answer is polite but empty. Ask at the right moment and the referral is warm, specific, and ready to talk.

**Best moments to ask (ranked):**

| Moment | Why It Works | Timing |
|--------|-------------|--------|
| 🥇 After a clear win (first results delivered) | Satisfaction is at peak. Client just saw ROI. | Day 30–45 of engagement |
| 🥈 After a positive check-in call | Momentum is high. They're excited about progress. | Any check-in where they said something like "this is working" |
| 🥉 At the 90-day mark (end of build) | They've seen the full system. They can describe it clearly to someone else. | Day 85–95 |
| After they post about SELLL on LinkedIn | They've publicly endorsed you. Ask privately to extend that publicly. | Within 24h of their post |
| After they close a deal using the system | The clearest win. They have a specific outcome to share. | Within a week of their win |

**Do NOT ask:**
- In the first 30 days (too early — no results yet)
- When a project is stalled or they've raised a concern
- More than once every 60 days with the same client

---

## Referral Ask Types

### Type 1: The Direct Referral Ask

Used when the client clearly has the right network (VP Sales at Series B companies, attends Pavilion events, active on LinkedIn in the GTM community).

**Email template:**
```
Subject: a quick favor

[Name],

Seeing [Company]'s [specific result — e.g., "pipeline numbers this month"] made me think of something.

We're working with a handful of companies right now, and the ones that get the most from SELLL tend to look a lot like [Company] did 90 days ago — [2–3 characteristic traits: stage, size, pain].

Do you know 1–2 revenue leaders who are dealing with a similar pipeline challenge? Even a first-name intro over email would mean a lot.

Happy to return the favor in any way I can.

[Your name]
```

**LinkedIn DM version (shorter):**
```
"[Name] — seeing your [results] this month and it reminded me: do you know any other revenue leaders dealing with the same pipeline problem you had 90 days ago? Even a one-line intro would be huge. No pressure at all."
```

### Type 2: The Specific Target Ask

Used when you have identified a specific company you want to get into and the client has a connection there.

**Research step:** Before asking, check the client's LinkedIn connections. Look for:
- Current employees at the target company in CRO / VP Sales / CEO roles
- Former colleagues who moved to the target company
- Shared community membership (Pavilion, SaaStr, GTM Alliance)

**Email template:**
```
Subject: quick connection question

[Name],

Totally fine if not — but I noticed you're connected to [Target Contact Name] at [Target Company].

We've been trying to reach [Target Company] for a while — they look exactly like [Client Company] did before we started working together, and I think they'd benefit from the same system.

Would you be comfortable with a one-line intro? Something as simple as: "My name is [Client Name] — [Aaron] at SELLL helped us build a pipeline machine. Might be worth a conversation."

If it's not a strong relationship or the timing isn't right, totally fine — I'll find another way in.

[Your name]
```

### Type 3: The Event / Community Ask

Used when the client is attending a conference or Pavilion event where your target prospects will also be present.

**Email template:**
```
Subject: are you going to [Event]?

[Name],

Saw you're attending [Pavilion Summit / SaaStr / Outbound Conference] next month.

We're trying to connect with revenue leaders there — if you happen to run into a CRO or VP Sales dealing with the same pipeline challenge [Company] had, a warm introduction from you would be worth more than anything we could do cold.

Even a "you should talk to SELLL" over drinks would be huge. No formal ask needed — just keep us in mind.

[Your name]
```

### Type 4: The Case Study Referral

Used when you publish a case study featuring the client. The act of publishing often triggers referrals organically — but you can accelerate it.

**Email template:**
```
Subject: your case study is live

[Name],

Published [Company]'s case study today — [link or attachment].

If you share it on LinkedIn and tag anyone who might be facing the same challenge, we'd love to reconnect with them.

Also — if there's anyone in your network you think should see this, happy to reach out directly with your name as context.

[Your name]
```

---

## Referral Intake and Tracking

Every referral gets treated as a **named pipeline opportunity** — not a warm lead. It goes directly into Layer 5 (deal nurture) rather than Layer 3 (cold outreach).

### Referral pipeline stages:

```
Referred → Contacted (same day) → Meeting Requested → Meeting Booked → Opportunity → Closed
```

### Referral intake template:

When a client makes an introduction, get these details before reaching out:

1. **What did you tell them about SELLL?** (So you can reference what they said)
2. **What pain were they dealing with?** (Specific to the referral, not generic)
3. **How well do you know them?** (Close friend, colleague, or loose connection)
4. **Are they expecting my call?** (Warm intro vs. permission to use their name)

### First outreach to a referral:

**Email (if pre-introduced):**
```
Subject: [Client name] suggested I reach out

[Name],

[Client name] at [Client company] suggested I get in touch — apparently you're dealing with [the pain they mentioned].

[Client name] came to us 90 days ago with the same challenge at [Client company]. Here's what changed: [one-sentence outcome].

Worth 20 minutes to see if we could do something similar for [Company]?

[Your name]
```

**Email (name-drop, no warm intro):**
```
Subject: [Client name] mentioned you

[Name],

[Client name] thought we should connect — apparently we're working on the same problem from different sides.

We helped [Client company] [one-sentence outcome] in 90 days. If [Company] is dealing with a similar pipeline challenge, it might be worth a quick conversation.

[Your name]
```

---

## Referral Engine Workflow

### Step 1: Identify referral candidates

Every Monday, pull the client list from `claude-code-gtm/engine/deals.md` (Closed Won column). Filter for:
- Clients in their 30th–90th day of engagement
- Clients who made a positive comment in the last check-in
- Clients who have posted about SELLL on LinkedIn

### Step 2: Check LinkedIn connections

For each referral candidate: search their LinkedIn connections for people who match the ICP (title: VP Sales / CRO / CEO, company: 25–200 employees, B2B SaaS).

Flag any target accounts already in the prospecting queue where the client has a connection.

### Step 3: Select the ask type

| Situation | Ask Type |
|-----------|---------|
| Client is happy + well-networked | Type 1 (direct ask) |
| Client connected to specific target | Type 2 (specific target ask) |
| Client attending an event | Type 3 (event ask) |
| Case study just published | Type 4 (case study referral) |

### Step 4: Draft the ask

Generate the referral ask email or DM. Present to user for review.

**Rule:** Never send a referral ask without the user reviewing it. These are relationship emails — one awkward ask can damage the client relationship.

### Step 5: Log and track

Add to `claude-code-gtm/engine/referrals.md`:
```
| Client | Ask Type | Sent Date | Referral Given | Referral Name | Company | Stage | Outcome |
```

### Step 6: Route referrals immediately

When a referral is received:
1. Research the referred company (delegate to `account-research`)
2. Draft the first outreach email (referral template above)
3. Present to user for same-day send
4. Move to Layer 5 (deal nurture) — skip Layers 2–4 entirely

---

## Referral Program Structure (Optional)

If SELLL.io wants to formalize referrals with incentives:

| Referral Outcome | Incentive to Referrer |
|-----------------|----------------------|
| Referral takes a meeting | Thank-you gift ($50 gift card / dinner) |
| Referral signs a contract | Revenue share (10% of first month) or credit toward next engagement |
| Referral closes a deal > $50K | Named case study feature + revenue share |

Incentives are disclosed upfront in Type 1 asks:
> *"We also have a referral arrangement — if they sign on, we'll [incentive]. Totally optional and doesn't change the ask at all."*

---

## Referral Metrics

Track in `revenue-reporting`:

| Metric | Target | Measure |
|--------|--------|---------|
| Referrals asked per month | 5–10 | Asks / referral candidates |
| Referral give rate | 30–50% | Referrals received / asks |
| Referral → meeting rate | 60–80% | Meetings / referrals received |
| Referral → close rate | 30–50% | Deals / referrals received |
| Referral deal size vs. cold | +20–40% | Avg deal value, referral vs. cold |
| Referral close speed vs. cold | 40–60% faster | Days to close, referral vs. cold |

## Output Files

```
claude-code-gtm/engine/referrals.md               — referral tracker
claude-code-gtm/engine/state.md                   — referral pipeline stage
```

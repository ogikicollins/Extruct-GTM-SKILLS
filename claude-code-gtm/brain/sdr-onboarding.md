# SDR Onboarding Guide — SELLL.io
> For: Every SDR joining SELLL.io's outbound team
> Read time: 45 minutes | Must complete before first outbound day
> Prerequisites: Access to HubSpot, Instantly, LinkedIn Sales Navigator (or basic LinkedIn)

---

## What You're Joining

SELLL.io runs an automated outbound revenue engine for B2B SaaS companies. Your job as an SDR is not to send emails — Instantly does that. Your job is to run the intelligence system, monitor signals, manage replies, and make sure every prospect receives the right message at the right moment.

The system does the heavy lifting. You make the judgment calls.

---

## The Engine in 2 Minutes

Six layers. You operate Layers 2, 3, and 4 daily.

| Layer | What It Is | Your Role |
|-------|-----------|----------|
| 1: Intelligence | Brain, hypotheses, ICP, sequences | Read and understand — you don't build this |
| 2: Activation | Build the prospect list, enrich, score, contact | You run this with AI guidance |
| 3: Outreach | Send emails via Instantly, pre-engage on LinkedIn | You execute pre-engagement + monitor sends |
| 4: Pipeline | Reply management, booking meetings | You manage 100% of this |
| 5: Close | Proposal, discovery, deal management | Aaron handles — you support |
| 6: Optimize | Learning loops, brain updates | You contribute data; Aaron runs this |

---

## The 7 Files You Must Know Cold

Before your first day, read these 7 files completely. You will be tested on them.

| File | Why You Need It |
|------|----------------|
| `IDEAL-CUSTOMER-PROFILE.md` | Know exactly who we target and who we don't — one wrong company in the list damages deliverability |
| `brain/tone-dna.md` | Every reply you write must match Aaron's voice exactly. This file is the standard. |
| `brain/reply-routing.md` | 12 reply categories. You must know which one every reply falls into before responding |
| `brain/objection-bank.md` | 25+ objections with exact counters. Know the top 10 before your first reply |
| `brain/proof-library.md` | The 3 proof points and when to use each. You'll reference them in every email you write |
| `claude-code-gtm/sequences/README.md` | The sequence system — how they work, which variant for which situation |
| `brain/daily-runbook.md` | Your daily operating protocol — exactly what to do and when |

---

## Your Daily Operating Protocol

**Read `brain/daily-runbook.md` for the full protocol. This is the summary.**

### Morning (15 minutes — before anything else)
1. **Signal monitor** — Run `signal-monitor` skill. Any new signals go into the priority queue.
2. **Reply triage** — Check Instantly inbox. Route every reply per `reply-routing.md` before doing anything else.
3. **HOT replies** — If any reply is HOT (positive interest): notify Aaron within 2 hours, regardless of the time.
4. **Pre-engagement actions** — Check who needs T−3, T−2, or T−1 LinkedIn actions today (see pre-engagement schedule from Layer 2 output).

### Midday (5 minutes)
1. Check Instantly for new replies since morning
2. Check HubSpot — any meetings scheduled overnight?
3. Update account cards for any account that had activity

### End of Day (10 minutes)
1. Log all touches in account cards
2. Update `engine/state.md` if any significant events happened
3. Check: are any Thread B launches due tomorrow? Prepare.
4. Flag anything that needs Aaron's attention before morning

---

## How to Run the Sequences

You don't write emails from scratch. You manage sequences in Instantly.

**Your job per sequence:**

| Step | What You Do |
|------|-------------|
| Before Email 1 sends | Complete T−3 (LinkedIn follow) and T−2 (LinkedIn like) per pre-engagement schedule |
| Day of Email 1 | Verify `{{days_in_role}}` is current (it changes daily — recalculate from `vp_sales_start_date`) |
| Before Email 3 sends | Confirm Loom URL is recorded and filled in Instantly. If not ready → delay Email 3 by 3 days |
| After any reply | Route per `reply-routing.md` within 2 hours of seeing it |
| Day 5 (per account) | Check Thread A status. If no positive reply → launch Thread B per `multi-thread` skill |
| Day 22 | Email 5 sends (graceful exit). After it sends: mark account as "Sequence Complete — No Reply" in HubSpot |

---

## Who Sends What

This is not flexible. Follow it exactly.

| Situation | Send From | Why |
|-----------|----------|-----|
| Thread A, Tier 1 Priority, any persona | Aaron Shepard (Founder, SELLL.io) | Founder-to-exec trust signal. Higher open rate. |
| Thread A, Tier 1 Standard | Aaron Shepard | Same reason |
| Thread A, Tier 2 | Your name ([Name], Sales Specialist, SELLL.io) | Aaron's time reserved for Tier 1 |
| Thread B (champion), all tiers | Your name | Champion-to-peer works better than founder-to-junior |
| Thread C (economic buyer), Tier 1 | Aaron Shepard | Economic buyer decisions require founder contact |
| Re-engagement, all | Aaron Shepard | These contacts have an existing relationship with SELLL — maintain it |

**Practical implication:** When you send from Aaron's name, you are Aaron in that email. Aaron is not available at every moment, so you manage the reply. When the reply is HOT, you immediately flag Aaron and he takes over. Until then, you are the system.

---

## How to Reply to Emails

You are writing from Aaron's voice. Before you reply to anything:
1. Read `brain/tone-dna.md` — especially the "Phrases That Are Banned" section
2. Read `brain/reply-routing.md` — identify the exact reply category
3. Read the reply routing playbook for that category — it tells you exactly what to do

**Hard rules for every reply:**
- No "Great to hear from you!"
- No "Thanks for reaching out!"
- No exclamation points
- No hedging ("potentially," "might," "could")
- No "let me know if you have any questions"
- Under 100 words for most replies
- Answer the question they asked BEFORE moving to the next step

**Test before sending:** Read your reply out loud. Would Aaron say this? If there's any doubt, read `tone-dna.md` again.

---

## When to Escalate to Aaron

Escalate immediately (within 2 hours) when:

| Situation | Why |
|-----------|-----|
| HOT reply (positive interest, any form) | Aaron closes deals. You set him up. |
| Meeting booked | Aaron needs to prepare — send him the account card |
| Proposal requested | Never send proposal without Aaron's review |
| Angry or upset reply | Reputational risk. Aaron handles personally. |
| Competitor mentioned in reply | Important competitive intelligence for Aaron |
| Reply from someone senior you didn't expect (CEO, board member) | Requires careful handling |
| Reply asking about pricing before a meeting | Never quote price before discovery — escalate |
| Re-engagement queue trigger met at a high-value account | Aaron may want to reach out personally |

**How to escalate:** Slack/message Aaron with: Company name + contact name + one-line summary of the reply + what you recommend doing. Forward the email thread.

---

## How to Use the Brain

The brain is your co-pilot. When you don't know what to do, ask it.

```
QUERY: [What you need to know]
CONTEXT: [Company, contact, situation]

Examples:
QUERY: How do I handle the "we tried an agency before" objection?
CONTEXT: New VP Sales, Holz Concepts-style company, 60 employees

QUERY: What proof point should I use for a Fintech CRO?
CONTEXT: CRO_v1 sequence, no specific post reference, Series B company

QUERY: Is this a HOT reply or a WARM reply?
CONTEXT: "I'm actually looking at a few options right now — what makes you different?"
```

The brain answers using: `brain/reply-routing.md`, `brain/objection-bank.md`, `brain/proof-library.md`, `brain/competitive-battlecards.md`.

---

## LinkedIn Pre-Engagement (Your Most Important Daily Task)

**Read `brain/pre-engagement-protocol.md` in full before your first pre-engagement action.**

The short version:

| Day | Action | Rule |
|-----|--------|------|
| T−3 | Follow the contact | Always. Every Tier 1 contact. |
| T−2 | Like their most recent LinkedIn post | Always. Must be their actual most recent post. |
| T−1 | Comment on a relevant post | CONDITIONAL — only if the post is about GTM, pipeline, outbound, or sales. Never generic comments. |

**What "relevant" means:** The post must be about something SELLL can help with. GTM challenges, sales team building, pipeline, outbound, sequence performance, SDR team management. Anything else → skip the comment.

**Quality control on comments:**
- Does the comment add something to what they said? → Good
- Is the comment asking a genuine question? → Good
- Could this comment have been written by anyone who read the post? → Do not post it

---

## How to Update Account Cards

Every touch — email sent, reply received, LinkedIn action, call made — gets logged in the account card.

**Location:** `engine/accounts/[company-slug].md`

**What to log:**

```
| 2026-06-21 | Email | Thread A Email 1 | Sent via Instantly | — |
| 2026-06-22 | LinkedIn | T-2 Like | Liked Sarah Kim's post about "lots to untangle" | No response |
| 2026-06-23 | LinkedIn | T-1 Comment | Commented on SDR productivity post | Sarah liked the comment |
| 2026-06-25 | Email | Thread A Email 2 | Sent via Instantly | Opened, no reply |
```

**If something happened and it's not in the account card: it didn't happen for the engine.**

---

## Account Card Pre-Engagement Tracker (New Section)

All account cards should now include a pre-engagement tracker section. Template:

```
## Pre-Engagement Status

| Contact | T-3 Follow | T-2 Like | T-1 Comment | Response |
|---------|-----------|---------|------------|---------|
| Sarah Kim (Thread A) | Done 2026-06-28 | Done 2026-06-29 | Done 2026-06-30 (commented on "lots to untangle" post) | Liked back |
| Marcus Rivera (Thread A) | Done 2026-06-21 | Done 2026-06-22 | Skipped (no relevant post) | No response |
```

---

## HubSpot Discipline

Every account and contact in your sequence must be in HubSpot before the sequence starts.

| When | What to Do in HubSpot |
|------|----------------------|
| Account enters Layer 2 | Create company record, add enrichment data |
| Contact found | Create contact record, link to company, add LinkedIn URL |
| Email 1 sends | Log activity: "Cold Email 1 — H5 — [Date]" |
| Reply received | Log activity + update contact stage |
| Meeting booked | Create deal in pipeline, set stage = "Meeting Scheduled" |
| Meeting held | Update deal stage, log call notes |

**If it's not in HubSpot, Aaron can't see it. If Aaron can't see it, it doesn't exist.**

---

## Things You Must Never Do

| Never | Why |
|-------|-----|
| Send an email from selll.io domain | Only team.selll.io — selll.io is the main domain, never used for cold outreach |
| Skip the ICP filter | One bad company in the list hurts deliverability for everyone |
| Re-contact a DNC | Permanent reputation risk and potentially illegal |
| Contact a fatigue-suppressed contact | Check `engine/fatigue-suppressed.md` before every list import |
| Send pricing before a discovery call | Aaron's rule — price only after we know what problem we're solving |
| Guess at a reply when you're not sure | Ask the brain, or escalate to Aaron |
| Send Email 3 with a blank Loom URL | Check before the send date, delay if not ready |
| Reply to a HOT reply without telling Aaron | Aaron closes deals, not you |
| CC Aaron on emails without asking him | Aaron's inbox is for HOT replies only |
| Mark an account as "no opportunity" without Aaron's review | Only Aaron can close a Tier 1 account |

---

## Your First Week Checklist

**Day 1:**
- [ ] Read all 7 required files (listed above)
- [ ] Set up LinkedIn pre-engagement: connect your LinkedIn, bookmark the ICP profile templates
- [ ] Access Instantly — review the active campaign structure
- [ ] Access HubSpot — understand the pipeline stages
- [ ] Read the first 5 emails of VPSales_v1 out loud in Aaron's voice

**Day 2:**
- [ ] Shadow Aaron for one morning runbook run
- [ ] Run signal monitor for the first time (with Aaron watching)
- [ ] Practice routing 5 sample replies using reply-routing.md

**Day 3:**
- [ ] Handle first pre-engagement actions independently
- [ ] Submit first reply draft to Aaron for review before sending

**Day 5:**
- [ ] First independent reply (with Aaron on standby)
- [ ] First Thread B launch decision (check Thread A status, decide whether to launch)

**End of Week 1:**
- [ ] Aaron review: reply quality, pre-engagement execution, HubSpot discipline
- [ ] Identify one thing in the system that you would improve (feed into learning loops)

---
name: pre-engagement-protocol
description: >
  The LinkedIn warm-up protocol that runs 48–72 hours before Email 1 sends to every
  Tier 1 account. Increases open and reply rates by 15–25% by ensuring the contact
  already knows Aaron's name before the cold email arrives. Part of Layer 2 Phase 4.
---

# Pre-Engagement Protocol — SELLL.io

> "The worst time to introduce yourself is inside the first email."

The highest-performing outbound teams don't send cold emails. They send *warm* emails to people who've already seen their name twice. This protocol is how you get there without needing a referral.

**Effect:** Pre-engaged contacts who receive Email 1 open at ~42–55% vs. ~22–28% cold. Reply rate lift: +15–25%.

**Time investment:** T−3 and T−2 are fully automated via Expandi (zero time). T−1 comments are semi-automated: Claude generates substantive comments queued in `engine/comment-queue/[date].md` — Aaron reviews and approves the full batch in ~5 minutes once per day. See `skills/selll/linkedin-automation/SKILL.md` for full Expandi setup.

---

## The 3-Day Sequence

| Day | Action | Rule |
|-----|--------|------|
| **T−3** | **Follow** the contact on LinkedIn | Always. Takes 5 seconds. They see the notification. |
| **T−2** | **Like** their most recent LinkedIn post | Always. Must be the most recent post, not a random one. |
| **T−1** | **Comment** on a relevant post | Conditional — only if the post is relevant (see below). |
| **T0** | Email 1 sends from Instantly | Contact has seen Aaron's name 2–3 times. |

---

## The T−1 Comment Rule

A bad comment is worse than no comment. It signals desperation, algorithm-gaming, or inauthenticity — all of which destroy the relationship before it starts.

### Comment — YES (write one) when:
- The post is about GTM, sales, pipeline, outbound, SDR team building, revenue challenges, or team growth
- The post expresses an opinion you genuinely agree or disagree with
- The post contains a claim you can add data or nuance to
- The post is about a topic directly connected to what SELLL solves

### Comment — NO (skip it) when:
- The post is about a personal event (wedding, birth, death, promotion outside sales)
- The post is a generic quote-post or repost of someone else's content
- You can't think of something substantive to say in 30 seconds
- The post is from 2+ weeks ago (use a more recent one or skip)

### What a good comment looks like:

**Post:** "We're hiring 3 SDRs this quarter — excited to see what the team can do."

**Bad comment:** "Congrats! Exciting growth ahead!" ← Generic, says nothing

**Good comment:** "Interesting timing — most teams find the first 30 days of a new SDR ramp is where the most opportunity is lost. What does your onboarding sequence look like on day 1?"

**Good comment alternative:** "What's your target for conversations per rep per day? Curious what benchmark you're using at this stage."

**Why this works:** A question is better than a statement. Questions get responses. A response from the prospect before the email arrives = warm relationship, not cold outreach.

---

## T−1 Comment Templates by Signal Type

Use these as starting points. Edit every single one for the specific post. Never copy-paste verbatim.

### When they post about building/hiring a sales team:
> "Curious — what's the one thing you wish you'd built into the process before ramping a new SDR? We've seen the same 2-3 mistakes come up regardless of team size."

### When they post about a pipeline or quota challenge:
> "The gap between what a sequence promises and what it delivers is rarely the sequence itself — usually it's the targeting or the signal timing. What does your current diagnosis look like?"

### When they post something reflective about their first 30/60/90 days in a new role:
> "The '90-day window' is real — the teams that use it to install the right infrastructure vs. just learn the existing one tend to hit targets significantly faster. What's your version of that?"

### When they post about tech stack or tools:
> "Curious whether you've found the tool or the process tends to be the constraint first. In our experience the sequence is usually the last piece that matters."

### When they post a win (meeting booked, deal closed, etc.):
> "That conversion metric is rare — what do you attribute the high connect rate to? Genuinely curious."

---

## Warm Path Upgrades

If the pre-engagement detects a warm path, upgrade the protocol:

| Warm Path Type | Pre-Engagement Upgrade |
|---------------|----------------------|
| 1st degree (already connected) | Skip follow. DM directly on T−1: "Hey [name] — I've been following your work on [topic], had a thought I'd love to share when you have 5 minutes." |
| 2nd degree / mutual connection | Request intro from mutual on T−3. Only proceed to cold email if intro not granted by T0. |
| They engaged with Aaron's content | Reference the engagement in the T−1 comment AND in Email 1 subject line. |
| Connected to SELLL client | Ask the client for a warm mention. Add "mentioned by [client name]" to Email 1 opener. |

---

## Pre-Engagement Tracking Log

Update the contact row in the campaign CSV with pre-engagement outcomes.

| Field | Values |
|-------|--------|
| `pre_engagement_scheduled` | Yes / No |
| `t_minus_3_complete` | Done / Pending / Skipped (already following) |
| `t_minus_2_complete` | Done / Pending / No post to like |
| `t_minus_1_complete` | Done / Pending / No relevant post (skipped) |
| `pre_engagement_response` | None / Liked back / Commented back / DM'd / Followed back |

**If they respond to a comment:** Immediately flag as `warm_path = Comment Response`. Route directly to warm DM approach. Skip cold email sequence entirely.

---

## Pre-Engagement as a Signal Detector

Every pre-engagement action is also an intelligence signal:

| Contact Response | Interpretation | Action |
|----------------|----------------|--------|
| Follows Aaron back within 24h | High intent / paying attention | Move to top of Priority Personalization list |
| Likes the comment | Mild engagement — aware of Aaron | Proceed with standard Email 1 |
| Comments back on Aaron's comment | WARM — they initiated conversation | Skip cold email. Go to DM: "Thanks for engaging — I had something specific I wanted to share..." |
| Looks at Aaron's LinkedIn profile | Possible awareness | Note in account card. Mention nothing in email. |
| No response | Cold status unchanged | Proceed with standard Email 1 |

---

## Volume Management

Pre-engagement is handled automatically by Expandi (see `skills/selll/linkedin-automation/SKILL.md`). Expandi enforces LinkedIn-safe volume limits and runs the T−3/T−2 steps without any manual action. The system automatically staggers follow and like actions across the campaign window.

**Only Aaron action required:** Approve the daily comment queue (`engine/comment-queue/[date].md`) — ~5 minutes once per day. This is the only remaining human touch in the pre-engagement flow.

At 40 emails/day capacity, Expandi is continuously rolling ~120 contacts through the 3-day pre-engagement window.

---

## What Pre-Engagement Is NOT

- It is not following 500 people hoping some respond. That's connection farming.
- It is not commenting "Great post!" on 50 posts. That's worse than doing nothing.
- It is not a Loom video. (Loom is for post-reply warmth or Day 7 follow-up, not pre-email.)
- It is not connecting with a note saying "I'd love to connect" before the email. That telegraphs intent.

Pre-engagement is planting a name. That is the only job. Let the email do the rest.

---
name: growthflare-linkedin-automation
description: >
  Automates the LinkedIn pre-engagement protocol (T−3 follow, T−2 like, T−1 comment)
  for all Tier 1 contacts in the campaign using Expandi. Runs 48–72 hours before
  Email 1 fires in Instantly, so contacts have seen Aaron's name twice before the
  email arrives. Also automates warm path detection escalations (post engager → warm DM)
  and Thread B LinkedIn outreach. Eliminates all manual LinkedIn actions from
  the outbound motion. Tool: Expandi (cloud-based LinkedIn automation, LinkedIn-safe,
  runs 24/7 without requiring Aaron's computer to be on). Triggers on:
  "linkedin automation", "pre-engagement", "linkedin sequence", "expandi",
  "linkedin follow", "linkedin like", "linkedin warm up", "linkedin outreach",
  "pre-engage contacts", "linkedin pre-campaign".
---

# LinkedIn Automation — SELLL.io Pre-Engagement Engine

> Tool: Expandi | Integrated with: Layer 2 Phase 5C (pre-engagement schedule) + Instantly (timing sync)
> Purpose: Every Tier 1 contact sees Aaron's name on LinkedIn before the first email lands. Zero manual actions.

**Why this matters:** The 15–25% reply rate lift from pre-engagement is real only if it actually happens consistently. If it requires Aaron or an SDR to remember to follow and like contacts every morning, it won't happen on most accounts. Expandi runs the protocol automatically, at scale, while respecting LinkedIn's rate limits so the account never gets flagged.

---

## Tool Setup: Expandi

**Account:** One Expandi seat = one LinkedIn account (Aaron's LinkedIn).

**Expandi capabilities used in this system:**
- Profile visits (T−4: optional signal before follow)
- Follow (T−3: connects without requesting)
- Like post (T−2: engages with most recent content)
- Comment (T−1: AI-assisted substantive comment — requires approval queue)
- Message sequence (warm DM when contact responds to LinkedIn action)
- Webhook output (fires when contact accepts connection, responds to DM, or comments back)

**Monthly limits (LinkedIn-safe ranges in Expandi):**
- Profile visits: up to 80/day
- Follows: up to 30/day
- Likes: up to 40/day
- Comments: up to 15/day
- Connection requests: up to 20/day
- Messages (1st degree): up to 50/day

---

## Inputs

| Input | Source | Required |
|-------|--------|---------|
| Pre-engagement schedule | Layer 2 Phase 5C output CSV | Yes |
| Campaign CSV | `csv/campaigns/[hypothesis]-[date]-verified.csv` | Yes |
| LinkedIn URLs for all Tier 1 contacts | `linkedin_url` column in campaign CSV | Yes |
| Email 1 send date per contact | `send_day_allocation` column | Yes |
| Contact's most recent post content | `exec_linkedin_signal` enrichment column | Yes (for comment generation) |
| Warm path type | `warm_path_type` column | Yes |

---

## Automation Architecture

```
Layer 2 CSV (pre-engagement schedule)
           │
           ▼
    EXPANDI IMPORT
    (LinkedIn URLs + send dates)
           │
    ┌──────┴───────────────────┐
    │                          │
    ▼                          ▼
COLD PATH               WARM PATH (post engager / 2nd degree)
(no warm path)          ↓
    │                   Skip to Warm DM Sequence
    ▼                   (see Warm DM section below)
T−3: Follow the contact
    │
    ▼
T−2: Like their most recent post
    │
    ▼
T−1: Post comment (approved queue — see below)
    │
    ▼
T0: Email 1 fires in Instantly
    │
    ▼
Contact responds to comment/DM → Webhook fires → Route to warm DM sequence
Contact does NOT respond → Cold sequence continues normally
```

---

## Step 1 — Import Pre-Engagement Schedule Into Expandi

After Layer 2 Phase 5C generates the pre-engagement schedule:

1. Export the Tier 1 contacts from the campaign CSV
2. Filter: `tier = "T1 Priority" OR tier = "T1 Standard"` AND `warm_path_type = "None"` (cold path only)
3. Format for Expandi import:
   ```
   first_name | last_name | linkedin_url | email_1_send_date | contact_score | hypothesis
   ```
4. Create Expandi campaign: **`SELLL — [Hypothesis] — Pre-Engagement — [Date]`**
5. Set campaign type: **Profile Visit + Follow + Post Interaction Sequence**

---

## Step 2 — Configure the T−3/T−2/T−1 Campaign in Expandi

**Campaign sequence settings:**

| Step | Action | Delay | Expandi Setting |
|------|--------|-------|----------------|
| Step 1 | Profile Visit | Day 0 (T−3) | Visit profile (signals you looked them up) |
| Step 2 | Follow | Day 0 (T−3) | Follow profile |
| Step 3 | Like most recent post | Day 1 (T−2) | Auto-like latest post |
| Step 4 | Comment (approval queue) | Day 2 (T−1) | See comment generation below |
| [Email 1] | — | Day 3 (T0) | Fires in Instantly, not Expandi |

**Expandi timing sync with Instantly:**
- Email 1 send date is in the campaign CSV (`send_day_allocation`)
- Set Expandi campaign start date = Email 1 date − 3 days
- Expandi runs Steps 1–3 automatically; Step 4 (comments) goes to approval queue
- At T0, Instantly fires Email 1. The two systems are in sync.

---

## Step 3 — Comment Generation (T−1)

Comments cannot be purely automated without losing quality. The system handles this as a **semi-automated approval queue**, not fully manual:

**How it works:**
1. For each contact requiring a T−1 comment, Claude generates a substantive 1-sentence comment based on `exec_linkedin_signal` (the post summary from enrichment)
2. All generated comments are queued in a single review file: `engine/comment-queue/[YYYY-MM-DD].md`
3. Aaron reviews the full queue in **5 minutes** (approve/skip/edit per row)
4. Approved comments are pushed to Expandi via webhook/API

**Fallback rule (A1):** If the daily comment queue is not reviewed and approved by **6 PM local time**, all pending T−1 comments for that day are automatically skipped. Expandi proceeds to Email 1 on Day 0 without the comment. The campaign send date does NOT move. A missed T−1 comment is acceptable — a delayed Email 1 send is not. The fallback is set in n8n: `comment_approved_by_deadline = false → skip_t1_comment → proceed_to_email_1`.

**Comment generation logic:**
```
IF exec_linkedin_signal contains pain/challenge/struggle signal:
  → Use the "Validate the Insight" template
IF exec_linkedin_signal contains hiring/building/growth signal:
  → Use the "Ask the Sharp Question" template
IF exec_linkedin_signal contains general industry content:
  → Skip comment, proceed without T−1 (T−2 is sufficient)
IF no recent LinkedIn activity found:
  → Skip entire pre-engagement for this contact, note in account card
```

**Comment templates (auto-populated with contact data):**

Validate the Insight:
> "Naming [specific thing they mentioned] this early is exactly right — most teams find it in month 3 when it's a number problem, not an infrastructure one."

Ask the Sharp Question:
> "The [thing they're building] question: is the infrastructure behind it signal-based yet, or still working from static lists?"

Contrast Frame:
> "The gap between what [metric they mentioned] looks like on paper and what drives it is almost never in the thing people look at first."

**Output:** `engine/comment-queue/[campaign-date].md` — 5-minute review file

---

## Step 4 — Warm Path Contacts (Post Engager / 2nd Degree)

For contacts with `warm_path_type = "Post Engager"` or `warm_path_type = "2nd Degree"`:

**Do NOT run the cold T−3/T−2/T−1 sequence.**

Run the warm path LinkedIn sequence instead:

### Post Engager Warm DM (auto-sent via Expandi message sequence):

```
Hey {{first_name}} — noticed you [liked / commented on] the [post topic] post [last week / recently].

Sent you something to your email that's directly relevant to what you engaged with — specifically about [brief relevant insight from their engagement].

Worth a look when you get a minute.

Aaron
```

**Timing:** DM sends Day 0. If no reply within 48h → Email 1 fires as planned.
**If they reply to the DM:** Webhook fires → pause Instantly Email 1 → route to warm DM conversation (not cold sequence).

### 2nd Degree / Mutual Connection:

Expandi sends a connection request with a personalized note:
```
{{first_name}} — we share [mutual connection name]. I work specifically with [persona] in the first 90 days of a new role. Worth connecting.
```

**If connection accepted:** Follow-up message auto-sends:
```
Thanks for connecting. Sent you an email with something I think is directly relevant — worth 2 minutes of your time.
```

**If connection not accepted within 72h:** Email 1 fires cold via Instantly as planned.

---

## Step 5 — Engagement Monitoring + Webhook Escalations

When a contact engages with any LinkedIn action, Expandi fires a webhook to n8n:

| LinkedIn Action | Webhook Payload | Automated Response |
|----------------|----------------|-------------------|
| Contact likes Aaron's content | `{event: "prospect_like", contact_id: X}` | Flag in account card + elevate reply probability +10 |
| Contact accepts connection | `{event: "connected", contact_id: X}` | Auto-send warm DM (above) |
| Contact replies to DM | `{event: "dm_reply", contact_id: X, message: "..."}` | Pause Email 1 in Instantly → classify DM intent → route |
| Contact comments back | `{event: "comment_reply", contact_id: X}` | Pause Email 1 → route to warm DM sequence |
| No response after T0 | Default | Cold email sequence continues as planned |

**Webhook endpoint (n8n):** `POST /webhooks/linkedin-engagement`

---

## Step 6 — Thread B LinkedIn Outreach

When Thread B launches (Day 5, no Thread A reply), Expandi automates Thread B LinkedIn outreach in parallel with Instantly email:

1. Thread B contact's LinkedIn URL is in the campaign CSV (`thread_b_linkedin_url` — added by Thread B auto-discovery, see `multi-thread/SKILL.md`)
2. Expandi sends a connection request to Thread B contact with a peer-level note:
   ```
   {{first_name}} — I work with the SDR and RevOps teams at [company type] companies like [company_name]. Relevant work happening there — worth connecting.
   ```
3. If connected: follow-up message sends Day 7 (peer frame, not sales frame)
4. Thread B email from Instantly fires on same schedule independently

---

## Step 7 — Daily Volume Management

Expandi enforces LinkedIn-safe limits automatically. The system self-manages within these constraints:

| Action | Daily Limit | Notes |
|--------|------------|-------|
| Profile visits | 80 | Expandi randomizes timing across the day |
| Follows | 30 | Spread across working hours in contact's timezone |
| Likes | 40 | Randomized to avoid pattern detection |
| Comments | 15 | Only approved comments from Step 3 queue |
| Messages (1st degree) | 50 | Warm DMs + Thread B |
| Connection requests | 20 | 2nd degree contacts only |

**At 200 Tier 1 contacts per campaign:**
- T−3 follows: 30/day = 7 days to complete
- T−2 likes: 40/day = 5 days to complete
- T−1 comments: 15/day = overlaps with T−2

These limits mean pre-engagement must start before campaign launch, not the same day. Layer 2 Phase 5C schedule accounts for this by staggering Email 1 send dates.

---

## Step 8 — Reporting Output

At end of each pre-engagement window, Expandi reports:

```
PRE-ENGAGEMENT RESULTS — [Campaign Name]
────────────────────────────────────────
Contacts followed:        [N] / [N total]
Posts liked:              [N] (no post found: [N])
Comments sent:            [N] (skipped: [N])
DMs sent (warm path):     [N]
LinkedIn replies received: [N]
  → Paused Email 1:        [N]
  → Connected (2nd degree): [N]
Webhook escalations:       [N]

PRE-ENGAGEMENT LIFT ESTIMATE:
Baseline reply rate (no pre-engagement): ~1.5%
With pre-engagement: +15–25% → expected ~1.7–1.9%
```

Log to: `engine/state.md` → Amplifier Status → LinkedIn Content Machine

---

## API Configuration

| Variable | Value | Where to Set |
|----------|-------|-------------|
| `EXPANDI_API_KEY` | [Your Expandi API key] | Environment variables |
| `EXPANDI_CAMPAIGN_ID` | Auto-generated per campaign | Expandi dashboard |
| `N8N_WEBHOOK_URL` | `https://[your-n8n-instance]/webhook/linkedin-engagement` | n8n |

**Expandi API docs:** https://help.expandi.io/en/articles/api-documentation

---

## Tool Decision: Expandi vs Alternatives

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Expandi** | Cloud-based, LinkedIn-safe, webhook support, post interactions | $99/seat/month | ✅ Recommended |
| Waalaxy | Multi-channel (LinkedIn + email), cheaper | Less flexible API | Alternative if budget is constraint |
| PhantomBuster | Most powerful, fine-grained | Browser-based = computer must be on | ❌ Not suitable |
| MeetAlfred | Multi-channel | Less reliable, more risky | ❌ Avoid |
| LinkedIn Sales Navigator | Native, no ban risk | No automation, just better search | Complement to Expandi, not replacement |

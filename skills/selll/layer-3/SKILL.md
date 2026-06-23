---
name: SELLL-layer-3
description: >
  Master campaign execution and intelligence skill for Layer 3 of the SELLL.io
  SELLL Revenue Engine. Takes the verified campaign CSV from Layer 2 and
  runs a fully self-managing outreach campaign — from launch day through every
  reply, thread escalation, HOT lead conversion, and final intelligence harvest.
  Five phases: Campaign Launch → Active Execution → HOT Lead Conversion →
  Campaign Health Intelligence → Campaign Close + Learning. Includes 9 legendary
  GTM superpowers not available in any off-the-shelf tool: Behavioral Intent
  Scoring, Compound Engagement Detection, LinkedIn Engagement Mirror, Sequence
  Adaptation Engine, Auto-Discovery Brief, Speed-to-Book Auto-Assist, Ghost
  Positive Video Re-activation, Competitor Displacement Mid-Campaign injection,
  and Auto-Proposal Pre-generation. Triggers on: "run layer 3", "launch campaign",
  "start outreach", "campaign is ready", "csv is ready", "go live", "activate
  campaign", "layer 3", "campaign execution", "start sending".
---

# Layer 3: Campaign Execution + Intelligence — SELLL.io
> Engine Layer: Execution | Consumes: Layer 2 verified CSV | Feeds: Layer 4 Pipeline
> Status: Fully automated — Aaron's daily input: 10 minutes max
> Updated: 2026-06-22

---

## What This Layer Does

Layer 2 built the target list and prepared the campaign. Layer 3 fires the campaign and manages everything that happens next — automatically.

This is not a tool that sends emails on a timer. This is a **living campaign intelligence system** that:
- Watches every interaction in real time and updates its understanding of each contact
- Detects buying signals at the account level — not just the contact level
- Adapts which email each contact receives based on how they've engaged so far
- Converts HOT replies into booked calls within 60 seconds (MEETING_REQUEST) or 2 hours (HOT)
- Gives Aaron a complete discovery brief before every call — generated automatically from the reply
- Detects when a target company posts competitor frustration mid-campaign and injects a displacement email
- Learns from every outcome and feeds that intelligence back into Layer 1 to make the next campaign sharper

**Aaron's daily time commitment while Layer 3 runs: 10 minutes.**

---

## Why This Is Rare — The SELLL.io Upsell

Every competitor does "automated sequences." Apollo, Outreach, Salesloft, Lemlist — they all send emails on a timer and classify replies by keyword.

Layer 3 is different in 9 specific ways that no off-the-shelf tool replicates:

| Superpower | What It Does | Why It's Rare |
|-----------|-------------|--------------|
| **Behavioral Intent Score (BIS)** | Reply probability updates in real time as contacts open, click, visit LinkedIn | No tool updates the score mid-campaign — they all score once at list build |
| **Compound Engagement Detector (CED)** | When 2+ contacts at the same company engage, fires an account-level buying signal | Tools track contacts, not accounts. CED requires custom n8n logic across threads |
| **Sequence Adaptation Engine (SAE)** | Email 3/4/5 variant selected based on how each contact engaged with Emails 1-2 | Spintax is used for anti-spam, not real-time behavioral targeting |
| **LinkedIn Engagement Mirror (LEM)** | Contact likes Aaron's post during campaign → Expandi fires a warm DM convergence | Requires Expandi + LinkedIn API + n8n orchestration — no single tool does this |
| **Auto-Discovery Brief (ADB)** | HOT reply → Claude API generates a 1-page discovery brief delivered to Aaron in Slack | Manual prep takes 15-20 min per call. ADB takes 0 minutes and is more thorough |
| **Speed-to-Book Auto-Assist** | If Aaron misses the 2h SLA, n8n sends a holding email automatically maintaining responsiveness | No tool handles human response-time gaps — a missed HOT reply loses 50% of meetings |
| **Ghost Positive Video Re-activation** | Contact opens email 5+ times but doesn't reply → new HeyGen video sent as unscheduled touch | Most tools send a text follow-up. A new personalized video for a ghost = rare |
| **Competitor Displacement Injection** | Company posts competitor frustration mid-campaign → displacement email injected as next step | Requires real-time LinkedIn monitoring + campaign modification + n8n webhook chaining |
| **Auto-Proposal Pre-generation** | HOT reply → ROI calculator runs on account data → draft proposal ready before discovery call | Aaron walks in with numbers already prepared. Competitors walk in empty-handed |

**The pitch to SELLL prospects:** "Every other outbound tool sends emails. Ours thinks."

---

## Layer 2 → Layer 3 Handoff

### What Layer 2 Delivers

Before Layer 3 can start, these 7 outputs from Layer 2 must exist:

| Deliverable | File / Location | Consumed By |
|------------|----------------|------------|
| Verified campaign CSV (62 cols) | `csv/campaigns/[hypothesis]-[date]-verified.csv` | Phase 1B (Instantly import) |
| Priority Personalization List | Phase 5B output (reply_prob ≥ 70) | Phase 1C (ai-personalization trigger) |
| Pre-engagement schedule | Phase 5C output (T−3/T−2/T−1 dates) | Phase 1D (Expandi start) |
| Account cards (Tier 1) | `engine/accounts/[slug].md` | Phase 3B (Auto-Discovery Brief) |
| Call queue | `engine/call-queue.md` | Phase 2 (parallel cold-call track) |
| HeyGen video status | `v_loom_url` column in CSV | Phase 1C (video batch check) |
| Layer 2 Run Log | `skills/selll/layer-2/SKILL.md` → Run Log | Phase 1A (pre-launch verification) |

### Layer 3 Verification Before Firing

Run this check before Phase 1B (Instantly import). If any row fails, return to Layer 2 to resolve:

```
PRE-LAUNCH VERIFICATION GATE
─────────────────────────────────────────────────────
□ All 62 CSV columns present (no missing required columns)
□ Zero blank cells in: email, first_name, company_name, sending_domain
□ sending_domain = team.selll.io on every row (NEVER selll.io)
□ proof_person ≠ "name to be confirmed" (Devolon blocker — see proof-library.md)
□ v_loom_url populated OR text fallback confirmed armed in Instantly for Email 3
□ v_bespoke_opener populated for all reply_prob ≥ 70 contacts
□ team.selll.io domain warmup status ≥ 3 weeks (deliverability-rules.md)
□ Bounce estimate (Gate 0D) ≤ 2% before verification, ≤ 1.5% after
□ n8n webhook URL confirmed live (test ping returns 200)
□ Expandi API key active and daily limits configured
□ ANTHROPIC_API_KEY active (needed for inbox-reply classification + ADB)
□ HubSpot API key active (needed for CRM sync)
□ Slack webhook configured (needed for HOT reply alerts)
□ Aaron's calendar link confirmed correct: https://cal.com/collins-ogiki-x4fokk/30min
─────────────────────────────────────────────────────
RESULT: ALL PASS → proceed to Phase 1B
         ANY FAIL → resolve blocker, re-run verification
```

---

## Phase 1: Campaign Launch Protocol (Day 0)

**Time required:** 15 minutes (mostly automated — Aaron reviews final checklist and approves go-live)
**Runs once per campaign.**

---

### Step 1A — Automated Pre-Launch Verification

n8n runs the verification gate above automatically. Each check calls the relevant API or reads the CSV. Aaron sees a single Slack message:

```
🚀 SELLL Campaign Pre-Launch Report
Campaign: [Name] | Hypothesis: [H-code] | Contacts: [N]
─────────────────────────────────────────────────────────
✅ CSV verified: 62 columns, 0 blank required fields
✅ Sending domain: team.selll.io (all rows confirmed)
✅ Domain warmup: 24 days (minimum 21 ✓)
✅ Bounce estimate: 1.2% (threshold: 1.5% ✓)
✅ v_loom_url: 18/18 Tier 1 contacts populated
✅ Bespoke openers: 4/4 priority contacts generated
✅ n8n webhook: live (200ms ping)
✅ All API keys: active
⚠️  proof_person (Devolon): UNCONFIRMED — Devolon sequences blocked until resolved

ACTION REQUIRED: Confirm Devolon VP Sales name → Aaron reply "confirmed: [name]"
Ready to launch (Devolon sequences will be held until name confirmed).
```

---

### Step 1B — Instantly Campaign Configuration

**API call sequence (n8n executes automatically):**

```
1. POST /campaigns/create
   {
     "name": "SELLL — [Hypothesis] [Persona] — [YYYY-MM-DD]",
     "from_name": "[sender_name from CSV]",
     "from_email": "aaron@team.selll.io",
     "reply_to": "aaron@team.selll.io",
     "daily_limit": 40  ← warmup limit; increase to 100 after 6 weeks full warmup
   }

2. POST /campaigns/{id}/sequences
   Upload sequence steps matching the sequence_variant column in CSV.
   Step delays: Email 1 (Day 1), Email 2 (Day 4, +72h), Email 3 (Day 8, +96h),
                Email 4 (Day 15, +168h), Email 5 (Day 22, +168h)

3. POST /campaigns/{id}/leads/import
   Upload verified CSV. Map columns per csv/campaigns/README.md schema.
   Dedup: skip leads where email already exists in any active Instantly campaign.

4. PATCH /campaigns/{id}/variables
   Set campaign-level constants:
   - sender_name: [value]
   - sender_title: [value]
   - calendar_link: https://cal.com/collins-ogiki-x4fokk/30min

5. PATCH /campaigns/{id}/settings
   {
     "send_days": ["Mon","Tue","Wed","Thu"],
     "send_time_start": "07:30",  ← contact's local time via optimal_send_time_utc
     "send_time_end": "11:00",
     "timezone_respect": true
   }

6. POST /campaigns/{id}/webhooks
   Events: reply_received, email_opened, link_clicked, email_bounced
   URL: https://[n8n-instance]/webhook/instantly-events
```

**Confirmation:** n8n posts to Slack: "Instantly campaign configured. [N] contacts loaded. Sequences active."

---

### Step 1C — AI Personalization + HeyGen Video Batch

Triggered automatically after Instantly campaign creation:

```
1. Filter CSV: reply_prob ≥ 70 → Priority Personalization List
   → Call ai-personalization skill → generates v_bespoke_opener + v_subject_bespoke
   → Writes back to campaign CSV (Instantly lead custom variable update via API)
   → Calls HeyGen API per contact → bespoke video script
   → n8n monitors /webhooks/heygen-complete → writes v_loom_url to Instantly lead record

2. Filter CSV: Tier 1, reply_prob 35–69 → Standard Video List
   → Call video-outreach skill → HeyGen standard template script per contact
   → n8n monitors /webhooks/heygen-complete → writes v_loom_url to Instantly lead record

3. Fallback confirmation: for any contact where v_loom_url is still blank at Email 3 send time:
   → Instantly auto-substitutes text-only Email 3 (pre-configured as fallback sequence step)
   → Flag in account card: "Video failed — text fallback sent Day 8"
```

**Time:** HeyGen renders in parallel — 20–40 minutes for a full campaign batch. No Aaron time required.

---

### Step 1D — Expandi Pre-Engagement Campaign Start

```
1. Calculate T−3 start date: Email 1 launch date minus 3 days
   → For each Tier 1 contact in pre-engagement schedule:
      T−3: Follow profile (Expandi auto)
      T−2: Like most recent post (Expandi auto)
      T−1: Comment (queued to engine/comment-queue/[date].md for Aaron approval by 18:00 UTC)

2. Create Expandi campaign:
   Name: "SELLL Pre-Engage — [Campaign Name]"
   Daily limits: 80 visits / 30 follows / 40 likes / 15 comments / 20 connection requests
   Timezone: match hq_timezone per contact

3. Import contacts from pre-engagement schedule CSV
   (subset of campaign CSV: linkedin_url, first_name, company_name, T-3/T-2/T-1 dates)

4. Set webhook: Expandi → n8n on any engagement reply or connection accept
   → n8n fires: update account card, elevate warm_path_type in lead record
```

**Expected output:** By Email 1 send date, every Tier 1 contact has seen Aaron's name on LinkedIn 2–3 times. Open rate lift: +15–25%.

---

### Step 1E — n8n Webhook Activation

All webhook routes must be live before Email 1 sends. n8n confirms each route with a test ping:

```
Webhook Route                          → Triggered By         → Action
─────────────────────────────────────────────────────────────────────────
/webhook/instantly-reply               Instantly reply_received → inbox-reply skill
/webhook/instantly-open                Instantly email_opened   → Behavioral Intent Tracker
/webhook/instantly-click               Instantly link_clicked   → Behavioral Intent Tracker
/webhook/instantly-bounce              Instantly email_bounced  → Bounce handler
/webhook/heygen-complete               HeyGen video rendered    → v_loom_url update
/webhook/expandi-engagement            Expandi connection/like  → Account card update
/webhook/n8n-day5-thread-b             Day 5 timer             → Thread B auto-trigger
/webhook/n8n-day8-thread-c             Day 8 timer             → Thread C auto-trigger (Tier 1 Priority, ACV > $30K)
/webhook/n8n-comment-deadline          18:00 UTC daily timer   → T-1 comment fallback skip
/webhook/hubspot-sync                  Any lead status change   → HubSpot property update
```

**Confirmation:** n8n posts test-ping results to Slack. All routes must return 200 before go-live.

---

### Step 1F — HubSpot Campaign Sync

```
POST /crm/v3/objects/deals
{
  "properties": {
    "dealname": "SELLL — [Campaign Name]",
    "pipeline": "Outbound — Layer 3",
    "dealstage": "Campaign Active",
    "campaign_hypothesis": "[H-code]",
    "campaign_launch_date": "[YYYY-MM-DD]",
    "contacts_count": [N],
    "tier_1_count": [N]
  }
}
```

Every contact in the CSV gets a HubSpot contact record created or updated with:
- `hs_lead_status`: "In Sequence"
- `campaign_name`: [name]
- `sequence_variant`: [code from CSV]
- `reply_probability`: [score]
- `tier`: [1 Priority / 1 Standard / 2]

---

### Step 1G — Go / No-Go Decision Gate

Aaron receives a single Slack message before Email 1 fires:

```
✅ SELLL Campaign Ready — GO / NO-GO

Campaign: SELLL — H5 New VP Sales — 2026-06-22
Contacts: 28 (Tier 1 Priority: 8 | Tier 1 Standard: 14 | Tier 2: 6)
Bespoke emails: 4 contacts | HeyGen videos: 18 contacts
Pre-engagement starts: 2026-06-22 (Email 1 fires: 2026-06-25)
Sending domain: team.selll.io (warmup: 24 days ✓)
Estimated daily sends: 28 contacts ÷ 5 days = ~6/day ← well within warmup limit

⚠️  Devolon sequences: HELD (name unconfirmed) — 3 contacts paused
✅  All other contacts: ready

Reply GO to launch. Reply HOLD to pause for review.
```

Aaron replies "GO." Campaign is live.

---

### Step 1H — Campaign Live Confirmation

n8n posts to Slack:

```
🟢 Campaign LIVE — [Campaign Name]
Email 1 scheduled: [date] | First window: 7:30–11:00 AM per contact timezone
Pre-engagement: Running (T−3 follows started)
Thread B timer: Armed (Day 5 from Email 1)
All webhooks: Active
HubSpot: Synced

Next Aaron action: Comment queue approval daily by 18:00 UTC (deadline is UTC — configure n8n timer as UTC)
Next automated check: 6h after first Email 1 sends
```

---

## Phase 2: Active Campaign Execution (Days 1–22)

**The living campaign.** This phase runs autonomously. Aaron's only daily action: 5-minute comment queue approval (Mon–Thu) + 2-hour SLA on HOT replies.

Everything else is automated.

---

### Step 2A — Email Cadence Engine

Instantly manages the sequence. No action required. Configuration set in Phase 1B.

```
Day 1:  Email 1 sends per contact's optimal_send_time_utc
Day 4:  Email 2 sends (+72 hours from Email 1 send time)
Day 8:  Email 3 sends — HeyGen video or text fallback (auto-detected)
Day 15: Email 4 sends
Day 22: Email 5 sends (graceful exit)
```

**Automatic pauses:** Instantly pauses the sequence for a contact the moment any reply is received. Sequence only resumes if inbox-reply routes the reply to a "continue" action (e.g., OOO, REDIRECT — wrong person handled).

---

### Step 2B — Behavioral Intent Score (BIS) — The Score That Lives

> **Superpower #1.** Most tools assign a score at list-build time and never update it. The BIS updates in real time on every interaction, giving a live picture of each contact's buying temperature.

Every Instantly event fires a webhook to n8n → n8n updates the contact's `reply_probability` score:

```
EVENT                                    BIS DELTA    RATIONALE
─────────────────────────────────────────────────────────────────────────
Email 1 opened < 1h of send             +8           Fast open = high relevance
Email 1 opened 3–4 times               +15           Returning to read = high intent
Email 1 opened 5+ times                +20           → Ghost Positive Protocol triggered
Any email link clicked                  +20           Direct engagement with content
HeyGen video link clicked               +25           Video engagement = strongest intent
Email forwarded (new recipient domain)  +30           Internal sharing = buying committee
LinkedIn profile visited same day       +15           Research mode = active evaluation
Expandi connection accepted             +10           Warm signal
Expandi DM replied                      +20           Dialogue started
New company trigger detected (signal)   +15           External urgency event
Reply received (any category)           Score frozen, route to inbox-reply

BIS FLOOR: Can never go below 0
BIS CAP: 100 (displayed as updated reply_prob in account card)
```

**n8n BIS Update Logic:**

```
On event received:
1. GET current reply_prob from HubSpot (contact property)
2. Apply delta from table above
3. PATCH HubSpot contact: reply_prob = new score
4. Update engine/accounts/[slug].md → BIS History table
5. IF new score crosses threshold:
   - Crosses 70: flag for Priority Personalization → ai-personalization queues bespoke Email 3
   - Crosses 85: Slack alert "Contact elevated to HOT tier — consider personal Loom for Email 3"
   - Crosses 90: Slack alert + Aaron prompted for manual outreach before next email
```

**What this means in practice:** A contact who opened Email 1 twice and clicked the Loom link is now scored 91 (was 58 at launch). Aaron knows to treat this person as near-HOT before they've even replied. No other system surfaces this.

---

### Step 2C — Reply Intelligence System

> **Fully automated.** Every reply is classified and routed without human input. Human confirmation only for HOT/WARM/OBJECTION/QUESTION substantive draft replies.

Triggered by: Instantly `reply_received` webhook → n8n → inbox-reply skill

**Classification + auto-actions (webhook-driven, ≤ 60 seconds):**

```
HOT             → Pause ALL sequences (email + LinkedIn) + Slack alert with reply text + ADB generated
                  (see Phase 3A — Speed-to-Book Protocol)

MEETING_REQUEST → Auto-send calendar link within 60 seconds via Instantly API
                  + Slack notification + ADB generated + HubSpot stage → "Meeting Requested"

WARM            → Pause sequence + draft nurture reply (Aaron confirms before send)
                  + BIS +10 + HubSpot stage → "Warm Engaged"

OBJECTION       → Pull counter from objection-bank.md + proof point match
                  + draft reply (Aaron confirms before send) + continue sequence

NOT_NOW         → Auto-acknowledge email + add to re-engagement-queue.md
                  + add to signal-watchlist.md + suppress sequence
                  + HubSpot: "Not Now — Watching"

HARD_NO         → Stop ALL sequences immediately + DNC list update
                  + Expandi campaign paused + HubSpot: "DNC — Do Not Contact"

OOO             → Parse return date from auto-reply + reschedule next email
                  to day after return date + no Slack alert

BOUNCE          → Remove from sequence + trigger email waterfall re-search
                  (Prospeo → FullEnrich) + update CSV if new email found
                  + re-add to sequence with verified email

REFERRAL        → Reply warmly (auto-draft for Aaron confirmation) +
                  referral-engine intake + account-research on new company
                  + same-day warm outreach to referred contact

QUESTION        → Pull answer from brain files + draft reply (Aaron confirms)
                  + continue sequence normally

GHOST POSITIVE  → See Step 2F — separate detection protocol
```

**HubSpot sync:** Every reply classification → HubSpot contact property `lead_status` update. HubSpot becomes the single source of truth for deal stage.

---

### Step 2D — Thread Escalation Engine

> **Automated.** No manual checks. n8n Day 5 and Day 8 timers fire automatically.

**Thread B Auto-Trigger (Day 5):**

```
n8n timer: fires at Day 5 from Email 1 send date (per contact)

Check: Has Thread A contact replied positively? (HOT/WARM/MEETING_REQUEST/OBJECTION)
  YES → Do NOT trigger Thread B. Log: "Thread B suppressed — Thread A engaged"
  NO  → Trigger Thread B:
         1. Upload Thread B contact to Instantly (ChampionFollow_v1 sequence)
            Contact: thread_b_contact from CSV (SDR Manager / RevOps)
         2. Fire Expandi LinkedIn DM to Thread B contact:
            "I've been in touch with [Thread A first name] about [SELLL topic].
             Wanted to connect separately — [pain angle for champion role]."
         3. Update account card: "Thread B activated Day 5"
         4. Add Thread B contact to BIS tracking
```

**Thread C Auto-Trigger (Day 8):**

```
n8n timer: fires at Day 8 from Email 1 send date

Conditions required (ALL must be true):
  □ tier = "1 Priority"
  □ arr_estimate ≥ $30K ACV (from enrichment)
  □ No HOT/WARM/MEETING_REQUEST reply from Thread A or Thread B
  □ thread_c_contact exists in CSV

  YES → Upload Thread C contact to Instantly (economic buyer sequence)
        Send separate email from SDR name (economic buyer framing):
        "I've been speaking with [Thread A] and [Thread B] — this is the financial lens."
        Update account card: "Thread C activated Day 8"
  NO  → Log condition failure. Do not trigger.
```

**Pause coordination:** If any thread gets a positive reply at any point:
```
n8n fires: pause_all_threads(company_domain)
→ GET all active Instantly campaigns where lead domain = company_domain
→ PATCH each campaign lead: status = "Paused"
→ Pause Expandi campaign for this company
→ Log in account card: "ALL THREADS PAUSED — [Thread] got [Reply Category] on [Date]"
```

---

### Step 2E — Compound Engagement Detector (CED)

> **Superpower #2.** No off-the-shelf tool tracks account-level engagement across multiple contacts. CED does. When two people at the same company show buying behavior, the account is in active evaluation — not just one contact.

**Detection logic (n8n, runs on every BIS update):**

```
On any BIS update for contact at company [domain]:

Query HubSpot: all contacts at [domain] with BIS > 50 and no HARD_NO
  IF count ≥ 2:
    → COMPOUND ENGAGEMENT DETECTED
    → Upgrade company priority: lead_score += 15
    → Slack alert:
       "⚡ COMPOUND ENGAGEMENT — [Company]
        [Contact A] BIS: [score] ([last action])
        [Contact B] BIS: [score] ([last action])
        Account-level buying signal. Multiple stakeholders researching.
        Action: Prepare multi-stakeholder brief. Thread C recommended if not active."
    → If Thread C not active: check conditions + prompt Aaron to approve Thread C
    → Update account card: "COMPOUND ENGAGEMENT detected [date]"
    → HubSpot deal stage: "Active Evaluation"
```

**Why this matters:** When two people at the same B2B SaaS company are independently evaluating the same solution, it's not coincidence — it's a buying committee forming. The engine catches this automatically and escalates before a competitor does.

---

### Step 2F — Ghost Positive Protocol

> **Superpower #3.** A contact who opens an email 5+ times is showing intent without replying. Most systems ignore this. Layer 3 fires a new personalized video.

**Detection:** Triggered when `email_opened` event count for a single contact/email reaches 5.

```
n8n logic:
  IF open_count(contact, email_id) ≥ 5 AND reply_received = false:
    → BIS += 20 (already applied on 5th open via Step 2B)
    → Ghost Positive Protocol:

    1. Generate NEW HeyGen video (not the sequence Email 3):
       Script: "Hey [First Name] — noticed you've spent some time with the email I sent.
                Whatever caught your attention — I wanted to follow up directly.
                [Personalized: reference company + proof point]
                If something in there was relevant: [calendar_link]
                Either way — happy to answer anything over email."

    2. Send as OUT-OF-SEQUENCE email from Instantly:
       Subject: "saw you came back to this — [First Name]"
       Timing: next business day morning (not same day — looks like surveillance)

    3. Pause scheduled sequence for 72h (give them space to reply to the video)

    4. Slack alert to Aaron:
       "👁️ Ghost Positive — [Company] / [Contact]
        Opened [email subject] 5 times. No reply.
        New video sent. Sequence paused 72h.
        BIS: [score]. Watch this one."
```

---

### Step 2G — LinkedIn Engagement Mirror (LEM)

> **Superpower #4.** When a prospect engages with Aaron's LinkedIn content during an active campaign, it's a buying signal. LEM converges both channels into a single warm moment.

**Requires:** Aaron's LinkedIn Content Calendar is active (`brain/linkedin-content-calendar.md`). Aaron posts 2–3x/week per the calendar.

**Detection:** Expandi monitors post engagers. Cross-references with active campaign contact list.

```
On LinkedIn engagement detected (like, comment, profile visit after post view):

  Query: Is this person in an active Layer 3 campaign? (check email against campaign CSV)
    YES:
      → BIS += 15
      → Expandi fires warm DM (within 4h of engagement):

        DM template (Expandi auto-sends):
        "Hey [First Name] — thanks for engaging with the [post topic] post.
         That's exactly the situation I was referencing in the email I sent you.
         Worth a quick conversation? [Calendar link]"

      → Slack alert: "[Contact] at [Company] engaged with LinkedIn post.
                      Campaign email + LinkedIn DM both in play. BIS: [score]"
      → Update account card: "LEM fired [date] — dual-channel convergence"

    NO:
      → Standard post-engager outreach via post-engagers skill (separate pipeline)
```

**Why this is powerful:** The contact engaged publicly with Aaron's content AND received Aaron's email. Two independent signals converging = extremely high intent. The DM references both, creating a moment that feels synchronous rather than automated.

---

### Step 2H — Sequence Adaptation Engine (SAE)

> **Superpower #5.** Most outbound tools send the same Email 3/4/5 to everyone. SAE uses each contact's engagement data from Emails 1-2 to select the optimal variant.

**Runs at:** Day 7 (before Email 3 queue), Day 14 (before Email 4 queue)

**Logic:**

```
For each contact, evaluate:
  A: Did Email 1 get opened? (Y/N)
  B: Was Email 1 opened multiple times? (≥3 = Y)
  C: Was any link clicked? (Y/N)
  D: BIS score current (0–100)
  E: Has Thread B been activated? (Y/N)

Select Email 3 variant:
  BIS ≥ 70 → ai-personalization bespoke email (HeyGen video, bespoke opener)
  BIS 50–69 + link clicked → Proof-heavy variant (double down on case study)
  BIS 30–49 + opened 3x → Insight variant (challenger angle, no social proof)
  BIS < 30 + opened once → Standard variant (maintain momentum, no escalation)
  No opens at all → Subject line variant swap (use spintax pool, pick unused subject)

Select Email 4 variant (Day 14):
  Thread B active + no reply from either thread → Account-level summary
    ("I've been in touch with [Thread B] as well — here's what I'd suggest...")
  BIS rising (≥15 delta since Email 1) → Urgency push ("The window is closing")
  BIS flat → Challenger insight (Email 4 default from sequence file)
  BIS declining → Graceful exit variant (last push, no pressure)
```

**n8n implementation:** At Day 7 and Day 14, n8n evaluates each contact's BIS + engagement flags, selects the variant code, and patches the contact's `sequence_variant` property in Instantly before the next email queues. Instantly sends whatever variant is now active for that contact.

---

### Step 2I — Aaron's Daily Campaign Operating Protocol

> Everything above runs without Aaron. This is what Aaron actually does each day.

**Total time: 10 minutes per day, Mon–Thu.**

```
MORNING ROUTINE (7:00 AM — 5 minutes)
─────────────────────────────────────
1. Open Slack — review overnight alerts:
   □ Any HOT/MEETING_REQUEST replies? (if yes: Phase 3 takes over)
   □ Any Compound Engagement alerts? (if yes: review account card)
   □ Any Ghost Positive alerts? (note — video already sent)
   □ Campaign health summary (n8n sends at 7 AM daily):
     - Emails sent yesterday | Open rate | Clicks | Replies
     - Any bounces or deliverability alerts?

2. Open comment queue: engine/comment-queue/[today's date].md
   □ Review generated comments (typically 3–8 per day for active campaigns)
   □ Approve / Skip / Edit per contact (takes 2–3 min)
   □ Reply "approved" in Slack or click approve in queue file → Expandi posts

MIDDAY (optional — only if HOT/WARM replies)
─────────────────────────────────────────────
□ Review any HOT/WARM draft replies from inbox-reply (Aaron confirms before send)
□ 2-hour SLA from notification to reply — Speed-to-Book Auto-Assist handles the gap
```

**Comparison to a typical outbound team:**

| Task | Traditional SDR | SELLL Layer 3 |
|------|----------------|--------------|
| Daily email sends | Manual: 50–100 emails/day | Automated: 100+ via Instantly |
| Reply management | Manual: 1–4h/day inbox monitoring | Automated: webhook-driven, < 60s |
| LinkedIn touches | Manual: 30–60 min/day | Automated: Expandi |
| Intent monitoring | Manual: none | Automated: BIS real-time |
| Multi-stakeholder coordination | Manual: complex spreadsheet | Automated: CED + Thread engine |
| Discovery prep | Manual: 15–20 min/call | Automated: ADB in Slack |
| Aaron's actual time | 3–4 hours/day | **10 minutes/day** |

---

## Phase 3: HOT Lead Conversion Engine

The moment a reply is classified HOT or MEETING_REQUEST, the conversion machine fires. No manual inbox monitoring required.

---

### Step 3A — Speed-to-Book Protocol (2-Hour SLA)

> **Superpower #6.** Speed-to-meeting conversion benchmark: <2h = 85% show rate. >24h = 40% show rate. The auto-assist prevents SLA breaches even when Aaron is busy.

```
T+0s:   Instantly reply_received webhook fires
T+5s:   n8n classifies reply (Claude API)
T+10s:  If MEETING_REQUEST:
          → Auto-send calendar link via Instantly (NO human required):
            "Hey [First Name],
             Here's my calendar — [calendar_link]
             Looking forward to it.
             Aaron"
          → Slack alert: "MEETING_REQUEST auto-handled — calendar sent"
          → HubSpot: stage → "Meeting Requested"
          → Auto-Discovery Brief generated (Step 3B)

T+10s:  If HOT:
          → Slack alert with full reply text + ADB + draft reply
          → Start 1-hour countdown

T+1h:   If Aaron has NOT responded to HOT reply:
          → Auto-send holding email via Instantly:
            "Just flagged this — give me until [2h from original reply time].
             Want to make sure I give you a proper answer.
             Aaron"
          → Slack escalation: "⚠️ HOT SLA at risk — holding email sent. Respond within 1h."

T+2h:   If STILL no response:
          → Slack escalation: "🚨 HOT SLA BREACHED — [Contact] at [Company]
                               Contact showed high buying intent. Reply now.
                               Auto-Draft is ready: [link]"
```

---

### Step 3B — Auto-Discovery Brief (ADB)

> **Superpower #7.** Aaron walks into every discovery call with a complete, AI-generated brief. Takes 0 minutes of prep time. Covers more than a human would prepare in 20 minutes.

**Triggered on:** HOT or MEETING_REQUEST classification.

**Claude API call (n8n executes):**

```
System prompt:
You are generating a pre-call discovery brief for Aaron Shepard, founder of SELLL.io.
Aaron is about to speak with a prospect who has replied positively to a cold outreach campaign.
Generate a structured 1-page brief that Aaron can read in 2 minutes before the call.

User prompt:
CONTACT: [first_name] [last_name], [title] at [company_name]
HYPOTHESIS: [hypothesis]
THEIR REPLY: [full reply text]
ACCOUNT CARD: [engine/accounts/[slug].md contents]
PROOF POINT ASSIGNED: [assigned_proof_point]
SEQUENCE VARIANT: [sequence_variant]
BIS SCORE: [reply_probability]
THREAD STATUS: [Thread A only / Thread B active / Thread C active]
LEAD SCORE: [lead_score] | URGENCY: [urgency_band]

Generate:
1. SITUATION SUMMARY (3 sentences): What we know about this company and contact
2. WHY THEY REPLIED (1–2 sentences): What in the email likely landed — based on the reply text
3. TOP 3 DISCOVERY QUESTIONS (for this specific person's role + hypothesis):
   Q1: [Most important question]
   Q2: [Second]
   Q3: [Third — the one that reveals budget/authority]
4. MOST LIKELY OBJECTION + COUNTER: [objection from their reply or role pattern] + [counter from objection-bank.md]
5. RECOMMENDED PROOF POINT: [proof person, situation, outcome — 2 sentences max]
6. ROI ESTIMATE: [Run roi-calculator.md with their data: employee_count, sdr_team_size, arr_estimate]
7. SUGGESTED NEXT STEP: [Specific CTA based on their buying journey stage]
```

**Output:** Slack message to Aaron with the complete brief, formatted for mobile reading. Also saved to `engine/accounts/[slug].md` → "Discovery Brief" section.

**Example brief output:**

```
📋 DISCOVERY BRIEF — Sarah Kim, VP Sales @ DataFlow Analytics
─────────────────────────────────────────────────────────────
SITUATION: DataFlow is a 65-person fintech SaaS, Series A (raised $8M 3 months ago).
Sarah joined 22 days ago from a larger org. She inherited 3 SDRs on Apollo with no
updated ICP. Reply suggests she's already identified the targeting problem.

WHY SHE REPLIED: "We already know the issue" — she confirmed the pain from Email 1.
She's past the awareness stage. This is an evaluation call, not a discovery call.

DISCOVERY QUESTIONS:
Q1: "When you say you know the targeting is off — have you defined what 'right' looks like
     for the next 90 days, or is that still being figured out?"
Q2: "What does success look like for your board by month 3? And what's currently tracking
     to miss that?"
Q3: "Is the infrastructure decision yours to make, or does it need sign-off?"

MOST LIKELY OBJECTION: "We're evaluating other options too"
COUNTER: "That's the right call — you should. The decision point is usually: do you want
a tool that gives your team more features, or a system that tells the tool what to do?
Stefan at Holz had the same evaluation in month 1."

PROOF POINT: Stefan Golz, Holz Concepts — new CRO, 3 SDRs on Apollo, ICP 18 months
outdated. Hit 31 qualified meetings in month 2. Hit 90-day board targets.

ROI ESTIMATE: DataFlow — 3 SDRs, current est. 9 meetings/month.
SELLL target: 31 meetings/month. At 20% close rate, $8K ACV: $49K ARR delta/month.
Setup payback: <3 months. Monthly ROI: 16x ongoing.

NEXT STEP: Confirm she has authority → propose 90-day build → send proposal post-call
─────────────────────────────────────────────────────────────
```

---

### Step 3C — Discovery Call Execution

Aaron runs the call using `brain/discovery-framework.md`.

The ADB pre-populates the framework — Aaron doesn't start from scratch, he refines.

**During the call:**
- 20 discovery questions from discovery-framework.md → Aaron selects top 3–5 based on ADB
- Live scoring rubric (0–25 points: pain = 10, budget = 5, authority = 5, timing = 5)
- Score ≥ 18: move to proposal. 12–17: nurture. < 12: re-qualify.

**Post-call:** `brain/call-intelligence.md` → 8-category extraction:
1. Confirmed pain
2. Confirmed budget signal
3. Confirmed authority
4. Competitor mentioned
5. Timeline stated
6. Objections raised
7. Buying signals
8. Agreed next steps

n8n automatically:
- Updates HubSpot deal with call notes and score
- Updates account card with call intelligence
- If score ≥ 18: triggers Step 3E (Auto-Proposal Pre-generation)
- If score 12–17: routes to deal-nurture skill
- If score < 12: marks as "Disqualified — [reason]" in HubSpot

---

### Step 3D — Post-Call Intelligence Loop

Every discovery call feeds intelligence back into the engine:

```
Confirmed buyer language → brain/voc-library.md (exact phrases they used)
New objection not in bank → brain/objection-bank.md (add with counter tested in call)
Competitor mentioned → brain/competitive-battlecards.md (update with new intel)
Hypothesis validated → hypothesis_set.md (confidence score +1)
Hypothesis invalidated → hypothesis_set.md (confidence score -1, note reason)
Proof point landed → brain/proof-library.md (mark as effective for this persona/vertical)
Proof point missed → brain/proof-library.md (note mismatch)
```

These updates happen after every call. The brain gets sharper with every conversation.

---

### Step 3E — Auto-Proposal Pre-generation

> **Superpower #8.** Most founders enter a discovery call empty-handed. Aaron exits with a draft proposal already waiting — generated from the call intelligence before the prospect's inbox refreshes.

**Triggered:** Post-call, if discovery score ≥ 18 (qualified).

```
n8n call:
  1. Pull call intelligence from account card (Step 3D outputs)
  2. Pull ROI estimate from ADB (Step 3B)
  3. Call Claude API → brain/proposal-template.md → populate with:
     - Company name, contact name, title
     - Confirmed pain (their exact words from call)
     - Timeline stated on call
     - SDR count, tech stack, ARR estimate
     - Recommended engagement scope (setup + monthly)
     - ROI estimate with their numbers
     - Proof point most relevant to their situation
     - Proposed 90-day build milestones

  4. Save draft to: engine/accounts/[slug]-proposal-draft.md
  5. Slack alert: "📄 Draft proposal ready — [Company].
                   Review at engine/accounts/[slug]-proposal-draft.md
                   Edit and send within 24h of call."
```

**Why within 24h matters:** Proposals sent within 24h of a discovery call close at 3× the rate of proposals sent 3+ days later. The auto-generation removes the "I'll write it tomorrow" delay.

---

## Phase 4: Campaign Health Intelligence

**Passive monitoring.** All thresholds are automated — Aaron only receives alerts when action is needed.

---

### Step 4A — Real-Time Campaign Dashboard

n8n generates a daily summary at 7:00 AM (auto-posted to Slack):

```
📊 Campaign Daily — [Campaign Name] — [Date]
─────────────────────────────────────────────────────────────
SENDS:  Yesterday: [N] | Total: [N] / [N] | Remaining: [N]
OPENS:  Yesterday: [N] ([%]) | 7-day avg: [%] | Benchmark: 30–40% ✓/⚠️/🚨
CLICKS: Yesterday: [N] ([%]) | 7-day avg: [%] | Benchmark: 8–15% ✓/⚠️/🚨
REPLIES: Yesterday: [N] | Total: [N] ([%]) | Benchmark: 5–8% ✓/⚠️/🚨
  HOT: [N] | WARM: [N] | NOT_NOW: [N] | HARD_NO: [N] | OOO: [N]
MEETINGS: Booked: [N] | Target: [N] | Pace: [on track/behind/ahead]
BOUNCES: [N] ([%]) | Threshold: 0.5% ✓/⚠️/🚨
BIS DIST: 0–30: [N] | 30–60: [N] | 60–80: [N] | 80+: [N]

THREAD STATUS:
  Thread A: [N] active | [N] replied | [N] closed
  Thread B: [N] active (triggered Day 5) | [N] replied
  Thread C: [N] active (triggered Day 8) | [N] replied

TOP PERFORMING SUBJECT LINES:
  1. "[Subject]" — [%] open rate ([N] sends)
  2. "[Subject]" — [%] open rate
BOTTOM PERFORMING:
  1. "[Subject]" — [%] open rate → SWAP recommended
─────────────────────────────────────────────────────────────
```

---

### Step 4B — Threshold Alert System

n8n monitors these thresholds continuously. Alert fires instantly when breached:

```
METRIC                    THRESHOLD          ALERT LEVEL    ACTION
────────────────────────────────────────────────────────────────────────
Bounce rate (daily)       > 0.5%             🚨 CRITICAL    PAUSE CAMPAIGN NOW
Bounce rate (campaign)    > 1.5%             🚨 CRITICAL    PAUSE + investigate list
Spam complaints           Any                🚨 CRITICAL    PAUSE + audit content
Open rate (Day 1–3)       < 15%              ⚠️ WARNING     Check subject lines + send time
Open rate (Day 1–3)       < 10%              🚨 CRITICAL    PAUSE + domain health check
Reply rate (Day 1–7)      < 1%               ⚠️ WARNING     Check ICP + sequence targeting
Reply rate (Day 1–7)      < 0.5%             🚨 CRITICAL    PAUSE + full audit
HOT reply → no response   > 2 hours          ⚠️ WARNING     Speed-to-Book Auto-Assist fires
Thread B reply            Any positive       ✅ NOTIFY      Update account card + adjust Thread A
BIS account average drop  Any campaign drop  ⚠️ WARNING     Check deliverability
Domain health score       < 85 (Instantly)   ⚠️ WARNING     Reduce daily send volume
Domain health score       < 70               🚨 CRITICAL    PAUSE + deliverability-rules.md
```

---

### Step 4C — Competitor Displacement Mid-Campaign Injection

> **Superpower #9.** If a target company posts about competitor frustration WHILE the campaign is running, Layer 3 detects it and injects a displacement email as the contact's next sequence step — replacing whatever was scheduled.

**Detection mechanism — two-tier approach:**

**Tier 1 (automated, ~80% of detections): LinkedIn Sales Navigator "New Mentions" alerts**

Set up Sales Navigator alerts for competitor names before each campaign:
```
Setup (one-time, 30 minutes, requires LinkedIn Sales Navigator license):
  For each competitor in brain/competitive-battlecards.md:
    → Sales Navigator → "Alerts" → "New Mentions" → search competitor name
    → Filter: "people at my saved accounts" (saves Active Campaign account list)
    → Notification: Daily email digest + in-app notification

  Competitors to monitor:
    Belkins, CIENCE, Apollo.io, Outreach, Salesloft, Lemlist, Instantly,
    Kalungi, Sales Xceleration, Gong, Revenue.io, Refine Labs
    (update from brain/competitive-battlecards.md quarterly)

  When Sales Navigator alert fires:
    → Aaron reviews in morning routine (part of 7 AM Slack + feed check)
    → If account is in active campaign: manually triggers injection (Step 4C-2)
    → If not in campaign: log in signal-queue.md for next campaign
```

**Tier 2 (manual, catches the rest): Aaron's daily LinkedIn feed scan**

During the daily 5-minute morning routine, Aaron reviews his LinkedIn feed for any posts from target account contacts. The signal-monitor n8n job also scans publicly visible post text every 72h where API access allows.

```
signal-monitor (n8n, runs every 72h):
  For each contact in active campaign with a LinkedIn URL:
    → Pull recent post activity via Expandi API (where accessible)
    → Scan post text for competitor frustration keywords:
      "frustrated with", "switching from", "disappointed by", "after trying",
      "moving away from", "cancelled our [competitor] contract",
      + all competitor names from brain/competitive-battlecards.md
    → If keyword match: flag in signal-queue.md + Slack alert to Aaron for review
    → Aaron confirms (1 click) → triggers displacement (Step 4C-2)

  Note: Not all LinkedIn posts are accessible via API without the contact being
  a direct connection. Sales Navigator alerts cover the rest. Both run together.
```

**Step 4C-2 — Displacement Injection (triggered by Aaron confirmation OR direct from signal-monitor):**

```
On signal confirmed: [Contact] at [Company] posted about competitor frustration

  IF contact is in active Layer 3 campaign:
    1. Pause next scheduled sequence email for this contact
    2. Generate displacement email using H7 variant + their specific competitor mention:
       Subject: "saw your post about [competitor] — [first name]"
       Body: Reference their post + displacement positioning from competitive-battlecards.md
             + proof point most relevant to their competitor frustration
    3. Schedule displacement email for next morning (not same day — let it breathe)
    4. Resume original sequence after displacement email
    5. Slack alert: "🎯 Competitor Displacement Injection — [Company]/[Contact]
                     Posted: [their words]
                     Displacement email queued: [tomorrow date]
                     Sequence paused 24h then resumes."
    6. BIS += 15 (competitor frustration = active evaluation signal)
    7. Account card updated: "Competitor displacement signal detected [date] + email injected"
```

---

### Step 4D — Subject Line Performance + Spintax Optimization

After every 10 sends of a given subject line variant:

```
n8n calculates:
  open_rate = opens / sends

  IF open_rate ≥ 35%: → "Proven Performer"
    → Flag this subject in spintax-engine.md
    → Increase allocation weight in spintax pool for next campaign

  IF open_rate < 15%: → "Underperformer"
    → Remove from rotation for remaining campaign contacts
    → SAE (Step 2H) swaps contacts on this variant to next-best option
    → Log in brain/institutional-memory/campaigns.md

  IF open_rate 15–34%: → "Standard" — continue rotation

Report to Aaron in weekly summary:
  "Subject line '[X]' is underperforming at [%]. Swapped [N] contacts to '[Y]' variant."
```

---

### Step 4E — Weekly Signal Scan

Every 72 hours, signal-monitor runs a full scan of all active campaign accounts:

```
For each company in active campaign:
  □ New LinkedIn company post (pain/hiring/GTM topic)?
  □ New exec post with buying signals?
  □ New funding round announced?
  □ New VP Sales / CRO hired (re-checks — new signal mid-campaign)?
  □ SDR / BDR job post?
  □ Competitor review / frustration post? (→ Step 4C if yes)
  □ Tech stack change detected?

New signals → update signal-queue.md → Slack alert
  → If new hiring signal for a DIFFERENT contact at same company:
     Add as new Thread B or C candidate → present to Aaron for approval
```

---

## Phase 5: Campaign Close + Intelligence Harvest

**Triggered when:** Last email (Email 5) has been sent to all contacts, OR campaign is manually closed.

---

### Step 5A — Campaign Debrief (Auto-Generated)

n8n generates the full debrief. Zero Aaron time required to compile.

```
📊 CAMPAIGN DEBRIEF — [Campaign Name]
─────────────────────────────────────────────────────────────────
CAMPAIGN SUMMARY
Hypothesis: [code] | Duration: [N] days | Contacts: [N]
Tier 1: [N] | Tier 2: [N] | Bespoke emails: [N] | Videos sent: [N]

VOLUME METRICS
Emails sent: [N] | Deliverability: [%]
Open rate: [%] (benchmark: 30–40%) | Click rate: [%] (benchmark: 8–15%)
Reply rate: [%] (target: 5–8%) | Bounce rate: [%] (threshold: < 1.5%)

REPLY BREAKDOWN
HOT: [N] | WARM: [N] | MEETING_REQUEST: [N] | NOT_NOW: [N]
OBJECTION: [N] | HARD_NO: [N] | OOO: [N] | QUESTION: [N]
GHOST POSITIVE (5+ opens, no reply): [N]

CONVERSION FUNNEL
Contacted → Replied: [%] | Replied → Meeting: [%] | Meeting → Qualified: [%]
Meetings booked: [N] | Target: [N] | Attainment: [%]

THREAD PERFORMANCE
Thread A reply rate: [%] | Thread B reply rate: [%] | Thread C reply rate: [%]
Compound Engagement events: [N] companies | Ghost Positive protocols fired: [N]
LEM (LinkedIn Mirror) fires: [N] | CED escalations: [N]

SEQUENCE VARIANT PERFORMANCE
[For each variant used: variant code | contacts | open rate | reply rate | meetings]

SUBJECT LINE PERFORMANCE
Proven Performers: [list] | Underperformers: [list]

BEST EMAIL BY REPLY RATE: Email [N] — [%] reply rate

HYPOTHESIS VALIDATION
H[code] confidence score: [before] → [after] | Delta: [+/-N]
Supporting data: [N] positive replies | [N] meetings | [N] objections on [topic]

NOTES + ANOMALIES
[Any unexpected patterns, delivery issues, outlier companies, market observations]
─────────────────────────────────────────────────────────────────
```

Saved to: `brain/institutional-memory/campaigns.md` (appended)

---

### Step 5B — Hypothesis Confidence Score Update

For each hypothesis used in this campaign:

```
Read from hypothesis_set.md: current confidence score (0–10)

Update rules:
  Reply rate ≥ 8%:  confidence += 2
  Reply rate 5–7%:  confidence += 1
  Reply rate 3–4%:  confidence unchanged
  Reply rate < 3%:  confidence -= 1
  Reply rate < 1%:  confidence -= 2

Also update:
  - Top performing sequence variant for this hypothesis
  - Average days_in_role for H5 contacts who replied
  - Average lead_score for contacts who converted to meetings
  - Most common objection for this hypothesis
```

---

### Step 5C — Intelligence Harvest (4 outputs, all automated)

```
1. BUYER LANGUAGE → brain/voc-library.md
   Extract exact phrases from positive replies:
   - HOT replies: harvest their opening line and what they said about the pain
   - WARM replies: harvest how they described their situation
   - NOT_NOW replies: harvest their trigger condition language
   Add to voc-library.md under appropriate pain category + vertical

2. SUBJECT LINE WINNERS → spintax-engine.md
   Any subject with open rate ≥ 35% → promoted to "Proven Performers" pool
   Any subject with open rate < 15% → removed from active rotation, archived

3. NOT_NOW → re-engagement-queue.md
   All NOT_NOW contacts with stated trigger conditions:
   → Add to re-engagement-queue.md with exact words + trigger condition
   → Add to signal-watchlist.md for signal-monitor tracking

4. RESPONDER SEED LIST → next campaign input
   All companies where ANY reply was received (positive or not):
   → Add domain to "Responder Seed List" in brain/institutional-memory/campaigns.md
   → Used as lookalike seed for next Layer 2 list-build:
     "Companies similar to these responders" → higher ICP precision in next campaign
```

---

### Step 5D — Learning Loops Execution

Run `brain/learning-loops.md` full protocol:

```
□ Loop 1: ICP Refinement — do closed deals share profile traits not in current ICP?
□ Loop 2: Hypothesis Calibration — which H-codes beat target? Which need rethinking?
□ Loop 3: Sequence Optimization — which email drove the most HOT replies? Update templates.
□ Loop 4: Proof Point Currency — which proof point closed the most discovery calls?
□ Loop 5: Vertical Learning — did any vertical outperform? Add to vertical brain file.
□ Loop 6: Competitor Intelligence — any new competitor mentions → update battlecards.md
```

Execute as Friday brain update per learning-loops.md protocol. All 6 loops run in one session, 30–45 minutes.

---

### Step 5E — Layer 3 → Layer 4 Handoff

Layer 3 closes. Layer 4 (Pipeline) takes ownership of the output.

**What Layer 3 hands to Layer 4:**

| Output | Content | Layer 4 Consumes At |
|--------|---------|---------------------|
| Active deals | HubSpot deals with stage ≥ "Meeting Booked" | Layer 4 deal tracking |
| Discovery call scores | `engine/accounts/[slug].md` → Call Intelligence section | Layer 4 qualification review |
| Proposal drafts | `engine/accounts/[slug]-proposal-draft.md` | Layer 4 proposal management |
| Pipeline value | N × ACV estimate from ROI calculator | Layer 4 revenue forecast |
| Re-engagement queue | `engine/re-engagement-queue.md` updated | Layer 4 / ongoing background |
| Responder seed list | `brain/institutional-memory/campaigns.md` | Next Layer 2 run |
| Updated hypothesis scores | `hypothesis_set.md` | Next Layer 2 run (H-code selection) |

---

## Automation Map — What Runs vs. What Aaron Does

```
                     AUTOMATED              AARON (time budget)
─────────────────────────────────────────────────────────────────────────────
Phase 1 (Launch)
  Pre-launch verification    ✅ n8n                 Reviews Slack report (2 min)
  Instantly setup            ✅ n8n API             —
  HeyGen video batch         ✅ API async           —
  Expandi campaign start     ✅ API                 —
  Webhook activation         ✅ n8n                 —
  HubSpot sync               ✅ API                 —
  Go/No-Go decision          —                      Replies "GO" (10 sec)

Phase 2 (Active)
  Email sends                ✅ Instantly           —
  BIS updates                ✅ n8n real-time       —
  Reply classification       ✅ Claude API           —
  Reply routing              ✅ n8n webhook          Confirms HOT/WARM draft (0–15 min/day)
  Thread B/C triggers        ✅ n8n Day 5/8 timers  —
  CED detection              ✅ n8n                 Reviews alert (1 min)
  Ghost Positive             ✅ n8n + HeyGen        —
  LEM                        ✅ Expandi + n8n       —
  SAE variant selection      ✅ n8n                 —
  T-1 comment approval       —                      Reviews comment queue (5 min/day)
  Competitor Displacement    ✅ signal-monitor + n8n Reviews alert (1 min)

Phase 3 (HOT Conversion)
  MEETING_REQUEST calendar   ✅ Instantly API (60s) —
  HOT Speed-to-Book assist   ✅ n8n holding email   Sends reply (2-hour SLA)
  Auto-Discovery Brief       ✅ Claude API           Reads brief (2 min)
  Discovery call             —                      Runs call (30–45 min)
  Post-call extraction       ✅ call-intelligence    Reviews + confirms (5 min)
  Auto-Proposal              ✅ Claude API           Edits + sends (10–15 min)

Phase 4 (Health)
  Daily dashboard            ✅ n8n → Slack         Reads (2 min/day)
  Threshold alerts           ✅ n8n                 Acts on alerts (varies)
  Subject line swap          ✅ SAE                 —
  Weekly signal scan         ✅ signal-monitor       Reviews report (5 min/week)

Phase 5 (Close)
  Campaign debrief           ✅ n8n auto-generated  Reviews (5 min)
  Intelligence harvest       ✅ n8n writes to files —
  Learning loops             —                      Runs with Claude (30–45 min)
─────────────────────────────────────────────────────────────────────────────
AARON'S TOTAL TIME:
  Normal days (no HOT replies):    10 min/day
  Days with HOT/MEETING replies:   10 min + 2-hour SLA reply time
  Discovery call days:             30–45 min call + 15 min debrief
  Campaign close (once):           30–45 min learning loops
─────────────────────────────────────────────────────────────────────────────
```

---

## API & Integration Requirements

| Service | Purpose | Key Required |
|---------|---------|-------------|
| Instantly | Email sequence management + webhooks | `INSTANTLY_API_KEY` |
| Expandi | LinkedIn automation (T-3/T-2/T-1 + Thread B DMs + LEM) | `EXPANDI_API_KEY` |
| HeyGen | AI video generation (BIS) | `HEYGEN_API_KEY`, `AARON_AVATAR_ID`, `AARON_VOICE_ID` |
| Claude (Anthropic) | Reply classification + ADB + proposal gen + SAE | `ANTHROPIC_API_KEY` |
| HubSpot | CRM sync (all deal stages, contact status, call notes) | `HUBSPOT_API_KEY` |
| n8n | Webhook orchestrator (ALL automation routes) | `N8N_INSTANCE` |
| Slack | Alerts + Aaron approvals + ADB delivery | `SLACK_WEBHOOK_URL` |

---

## Layer 3 Run Log

| Campaign | Hypothesis | Launch Date | Contacts | HOT Replies | Meetings | Pipeline | Status |
|----------|-----------|------------|---------|------------|---------|---------|--------|
| (awaiting Layer 2 CSV) | | | | | | | |

---
name: SELLL-video-outreach
description: >
  Generate personalized AI video emails for the top 20–30 Tier 1 accounts per
  campaign. Primary path: HeyGen API auto-generates a personalized 45-second
  video using Aaron's avatar and voice, with the prospect's name, company, and
  proof point spoken by the AI — sent via Instantly on Day 7 as Email 3.
  Optional Loom path for HOT prospects (reply_prob > 85) who warrant full
  manual recording. Replaces Email 3 (social proof) for Tier 1 accounts.
  Lifts reply rates 20–40% on Tier 1. Part of the SELLL Revenue Engine —
  Layer 3 amplifier. Integrates with ai-personalization/SKILL.md for HeyGen
  API calls. Triggers on: "loom script", "video outreach", "personalized video",
  "loom for prospects", "video email", "record a loom", "video personalization",
  "loom sequence", "heygen", "ai video", "video email day 7".
---

# Video Outreach — HeyGen AI + Optional Loom

For the top 20–30 Tier 1 accounts per campaign, replace Email 3 (social proof) with a **personalized 45-second AI video**. HeyGen generates the video automatically using Aaron's pre-recorded avatar — every contact sees their name, company, and a tailored proof point delivered in Aaron's voice and likeness.

Reply rate lift on Tier 1: **20–40% above email-only sequences**.

**Primary path:** HeyGen API (automated, zero recording time for each video — Aaron records his avatar once).
**Optional Loom path:** Manual recording kept for HOT prospects only (reply_prob > 85) where full-screen personalization creates more impact than an AI avatar.

---

## When to Use

- Email 1 and Email 2 have been sent with no reply
- Account is Tier 1 (score 60+) and high-value (estimated deal > $20K ACV)
- Day 7 of the sequence — replaces Email 3 (social proof)
- As a standalone re-activation touch for accounts that have gone cold after 3+ emails

**Do NOT use video for Tier 2 accounts.** Time investment only justifies for Tier 1.

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| Contact record (name, role, company, pain hypothesis) | Campaign CSV | yes |
| Company signals (top 1–2 signals from enrichment) | `list-enrichment` columns | yes |
| Best proof point for their persona and pain | Context file Proof Library | yes |
| HeyGen avatar ID + voice ID (one-time setup — Aaron records avatar once) | `HEYGEN_API_KEY`, `AARON_AVATAR_ID`, `AARON_VOICE_ID` | yes |
| Email thread (subject line from Emails 1–2) | Campaign history | yes |
| Loom account (for HOT prospects only, reply_prob > 85) | User's Loom account | optional |

---

## Video Architecture

**Total runtime: 60–90 seconds.** Never longer. If you cannot say it in 90 seconds, the script needs editing.

```
[0:00–0:10]  HOOK      — show their company name, call out the signal
[0:10–0:30]  BRIDGE    — connect signal to a pain they recognize
[0:30–0:60]  PROOF     — the case study in 30 seconds (before / after)
[0:60–0:75]  ASK       — one specific call to action
[0:75–0:90]  CLOSE     — reassurance (no pressure, no pitch deck)
```

---

## Script Templates by Persona

### Persona 1: CRO / VP Sales

```
[ON SCREEN: Show [Company]'s website or LinkedIn page on one side, your demo/dashboard on the other]

"Hey [Name] — [Your name] from SELLL.

[Point to their company on screen]

I pulled up [Company]'s outbound stack — looks like you're running Apollo into [Outreach / Instantly / Salesloft]. That's actually a really common setup at companies at your stage.

The problem with that setup — and I say this from looking at dozens of similar stacks — is that personalization is capped at whatever Apollo's AI can infer from a LinkedIn profile. There's no real-time signal layer behind when the email goes out or why.

[Transition to your results dashboard or a case study screenshot]

Here's what happened when Devolon made one change: we added a signal layer across 45 data sources that tells the system exactly when to reach out and what to say. Their SDRs went from 35 manual daily activities to 200+ fully automated conversations. Same team. 90 days.

[Look at camera]

[Name] — I'd love to show you what that looks like for [Company] specifically. 15 minutes, no slides, just the system.

Here's my calendar: [calendar link in the email below this video]

No pressure — if the timing isn't right, I get it. But if predictable pipeline is the goal this quarter, this is worth 15 minutes."
```

### Persona 2: Scaling Founder

```
[ON SCREEN: Show their company website + founder's LinkedIn post or product page]

"Hey [Name] — [Your name] from SELLL.

[Point to their site]

I've been following what you're building at [Company] — looks like you've built something genuinely useful for [their market / customer type].

Here's the thing I keep seeing with founders at your stage: [ARR stage] in, the product is working, but growth is still largely founder-dependent. You're probably still in more deals than you want to be.

[Transition to Flow Meditation or relevant case study screenshot]

The VP of Growth at Flow Meditation told us: 'They didn't just build a system — they fundamentally changed how we think about GTM.' Before SELLL: founder-driven pipeline, inconsistent month to month. After: 200+ daily conversations running automatically, and the founder out of day-to-day selling entirely.

[Look at camera]

[Name] — worth 15 minutes to see if [Company] is at the stage where this makes sense? The build is 90 days and you own it at the end — it's not a retainer.

Calendar's in the email below."
```

### Persona 3: Newly Hired VP Sales

```
[ON SCREEN: Show their LinkedIn profile (new role announcement) + a simple before/after diagram]

"Hey [Name] — [Your name] from SELLL. Congrats on joining [Company] as VP Sales.

[Point to their LinkedIn]

I pulled this up because the first 60 days in a new VP Sales role usually looks the same: fragmented tools, sequences that haven't been touched in months, SDRs doing things differently from each other, and a mandate to show results by day 90.

[Transition to the before/after diagram or Holz Concepts case study]

Stefan Golz joined Holz Concepts as CRO with exactly that mandate. He told us: 'The intelligence they gathered about our ICP was worth the engagement alone.' In 90 days, we mapped the ICP, rebuilt the outbound system, and launched a coordinated multi-channel campaign.

Stefan hit his first pipeline targets on time.

[Look at camera]

[Name] — I built this specifically for new sales leaders inheriting a broken stack with a tight timeline. 15 minutes to compare notes on what you've found at [Company] so far?

Calendar's below."
```

---

## Screen-Share Guide

What to show on screen during each section:

| Section | What to Show |
|---------|-------------|
| Hook (0–10s) | Prospect's website or LinkedIn company page |
| Bridge (10–30s) | A simple diagram: "Current State → Problem" OR their tool stack |
| Proof (30–60s) | Case study screenshot, results dashboard, or before/after numbers slide |
| Ask (60–75s) | Your calendar page (Calendly / Cal.com) |
| Close (75–90s) | Face-on camera — no screen share |

**Pro tip:** Have the company's name visible on screen in the first 3 seconds. Prospects see the thumbnail and immediately know it's for them specifically — open rates for video emails jump 40%+ when the company name is visible in the thumbnail.

---

## Thumbnail Setup

Every Loom generates a thumbnail. Customize yours:

1. Pause the recording at second 3 — when their company name / website is on screen
2. Loom uses this frame as the thumbnail automatically
3. Add text overlay in Loom: **"[Name] @ [Company] — 90 seconds"**
4. This tells them: (a) it's personalized to them and (b) it's short

---

## Email Embed Instructions

Replace Email 3 (social proof) with this email structure:

```
Subject Line A: 90 seconds for [Name]
Subject Line B: recorded something for [Company]

[Name],

Recorded a quick 90-second walkthrough specifically for [Company] — covers
the gap I see in your current setup and what Devolon did to fix it.

[LOOM THUMBNAIL IMAGE — linked to the Loom URL]

Calendar's here if it makes sense after watching: https://cal.com/collins-ogiki-x4fokk/30min

[Your name]
```

**Subject line performance:** "Recorded something for [Company]" consistently gets 45–60% open rates on Tier 1 accounts (vs. 35–40% for text-only Email 3). The word "recorded" signals personalization without sounding like a template.

---

## Batch Recording Protocol

You record one video per account — but with a system, you can record 10–15 per session:

**Prep (15 min before recording):**
1. Open the account list for the session (10–15 companies max per batch)
2. For each: pull up their website in one browser tab, your Loom dashboard in another
3. Customize the script: swap company name, role name, and top signal (3 fields per script)
4. Queue up the thumbnail tab (their site) and the proof tab (case study or dashboard)

**Record (3–4 min per video):**
1. Start Loom
2. Show their site — say the company name in the first 5 words
3. Follow the script — 90 seconds, no re-reads needed for minor stumbles
4. Stop recording
5. Label the Loom: "[Company] — [Date]"

**Post-record (1 min per video):**
1. Copy the Loom link
2. Generate the email embed using the template above
3. Add to the email queue (do not upload to sequencer — these go as one-off emails from the seller's inbox, not from the campaign)

Total time per HeyGen video: ~0 minutes of Aaron's time (API call + async render). 10-video HeyGen batch: ~20–40 minutes render time, zero recording time.

For HOT manual Loom (optional): ~5 minutes per video including prep. Reserved for reply_prob > 85 contacts only.

---

## Workflow

### Step 1: Select the Tier 1 batch

Pull the top 20–30 accounts from `lead-scores.csv` where:
- Score ≥ 60 (WARM or above)
- Day 5–6 in sequence (video goes out on Day 7)
- No reply received yet

### Step 2: Generate scripts

For each contact:
1. Identify persona (CRO / Founder / VP Sales)
2. Pull top 1–2 signals from enrichment
3. Select best proof point from Proof Library (match vertical + pain)
4. Personalize the template: company name, signal, proof point
5. Generate the thumbnail text and email embed

Output: `claude-code-gtm/video-outreach/{slug}-script.md` per account

### Step 3: Present the recording queue

```markdown
## Video Recording Queue — {date}

Total videos to record: N | Estimated time: ~N minutes

| Priority | Company | Contact | Role | Signal to Open With | Proof Point | Script File |
|----------|---------|---------|------|---------------------|------------|-------------|
| 1 | Acme | Sarah Chen | VP Sales | New SDR hire posted | Devolon case | /video-outreach/acme-script.md |
| 2 | BrightPath | Tom Reyes | CRO | Series A raised | Devolon case | /video-outreach/brightpath-script.md |
```

### Step 4: Generate Videos via HeyGen API (Primary — Automated)

**Video path by reply probability (Tier 1 contacts):**

| Reply Probability | Path | Script Type | Who Handles |
|-----------------|------|------------|------------|
| ≥ 70 | HeyGen API (bespoke) | Claude-generated 3-sentence opener + personalized script | `ai-personalization` skill |
| 35–69 | HeyGen API (standard) | Standard template script (name, company, proof point only) | This skill (`video-outreach`) |
| < 35 (Tier 2) | No video | Text-only Email 3 | n/a |
| > 85 (HOT, replied) | Optional manual Loom | Aaron records personally if contact is actively engaged | Aaron (optional) |

For reply_prob 35–69 contacts, the system automatically:

1. Calls HeyGen API with the standard template script (personalized with name, company, proof point — not a bespoke opener)
2. HeyGen renders using Aaron's avatar + voice: ~2–4 minutes per video, processed in parallel
3. Webhook fires on completion: `POST /webhooks/heygen-complete` → n8n writes `v_loom_url` to campaign CSV
4. Email 3 template in Instantly uses `{{v_loom_url}}` — fires on schedule automatically

For reply_prob ≥ 70 contacts: the `ai-personalization` skill has already called HeyGen with a Claude-generated bespoke script. No action needed from this skill — `v_loom_url` is already populated.

**HOT prospect exception (reply_prob > 85):** For these contacts, Aaron records a manual Loom (full screen-share, 90 seconds using templates above) if they haven't replied by Day 7. The HeyGen video serves as a fallback if Loom isn't recorded in time.

**No videos are ever sent from Aaron's personal inbox.** All video emails go through Instantly with the `{{v_loom_url}}` merge field.

### Step 5: Log and track

Add to `claude-code-gtm/engine/video-log.md`:
```
| Date | Company | Contact | Loom URL | Email Sent | Opened | Reply | Meeting |
```

Track video open rate separately from email open rate in `revenue-reporting`.

---

## Video Metrics

| Metric | Target | Measure |
|--------|--------|---------|
| Video email open rate | 45–60% | Opens / sent |
| Video watch rate | 60–80% of openers | Loom analytics |
| Video → reply rate | 8–15% | Replies / sent |
| Video → meeting rate | 5–10% | Meetings / sent |
| Time per video (recording) | < 5 min | Self-reported |

## Output Files

```
claude-code-gtm/video-outreach/{slug}-script.md    — personalized script per account
claude-code-gtm/engine/video-log.md                — video tracking log
```

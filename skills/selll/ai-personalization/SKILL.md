---
name: SELLL-ai-personalization
description: >
  Generates bespoke, Claude-powered email openers and personalized video scripts
  for the Priority Personalization List (contacts with Reply Probability ≥ 70).
  Reads enrichment data from the 52-column campaign CSV and generates unique,
  non-templated 3-sentence openers that reference the contact's specific LinkedIn
  activity, company signal, or hypothesis context. Also calls HeyGen API to
  auto-generate personalized AI video for Email 3, replacing manual Loom recording.
  Zero manual writing required. Triggers on: "personalize emails", "bespoke openers",
  "ai personalization", "email personalization", "heygen video", "ai video",
  "personalized video", "priority list personalization", "generate openers",
  "bespoke email", "ai email writing".
---

# AI Personalization — SELLL.io

> Tools: Claude API (Anthropic) + HeyGen API
> Purpose: The top 10% of contacts by reply probability get bespoke, non-templated emails and personalized AI video. Automated. Zero writing from Aaron.

**Why this exists:** Contacts with Reply Probability ≥ 70 are HOT. Sending them a spintax variant wastes the signal. A bespoke opener that references their specific post, their exact company signal, or their 90-day window situation converts at 3–5× the rate of a template. This skill writes those openers automatically using Claude.

**What this is NOT:** This does not replace the sequence templates for the other 90% of contacts. Those run through `email-generation` (renderer). This skill only runs for the Priority Personalization List.

---

## Inputs

| Input | Source | Required |
|-------|--------|---------|
| Campaign CSV (52-column) | `csv/campaigns/[hypothesis]-[date]-verified.csv` | Yes |
| Priority Personalization List | Phase 5B output (reply_prob ≥ 70) | Yes |
| Copywriting constraints | `brain/tone-dna.md` + `brain/copywriting-library.md` | Yes |
| Proof library | `brain/proof-library.md` | Yes |
| Context file | `claude-code-gtm/context/selll_context.md` | Yes |
| HeyGen API key | `HEYGEN_API_KEY` env var | Yes (for video) |
| Claude API key | `ANTHROPIC_API_KEY` env var | Yes |

---

## What Gets Generated

For each contact on the Priority Personalization List:

| Output | Description | Column in CSV |
|--------|-------------|--------------|
| Bespoke opener | 3 sentences, non-templated, specific to this contact | `v_bespoke_opener` |
| Bespoke subject line | Custom subject variant (not from spintax bank) | `v_subject_bespoke` |
| Video script (Email 3) | Personalized 45-second video script | Internal use → HeyGen |
| HeyGen video URL | AI-generated video with Aaron's likeness | `v_loom_url` (renamed to video URL) |

The bespoke opener is injected as the first 3 sentences of Email 1, replacing the standard `{{v_opening_line}}` Instantly merge field.

---

## Step 1 — Load the Priority Personalization List

Filter the campaign CSV: `reply_prob >= 70`

For each contact, extract:
```
first_name, last_name, company_name, title, linkedin_url,
exec_linkedin_signal, company_trigger, hypothesis, compound_hypotheses,
v_signal_detail, v_company_stage, v_competitor_name, v_pain_statement,
assigned_proof_point, sequence_variant, warm_path_type
```

---

## Step 2 — Generate Bespoke Openers (Claude API)

### Prompt Architecture

For each contact, send a Claude API call:

**System prompt:**
```
You are writing a cold outreach email opener for Aaron Shepard, founder of SELLL.io.
SELLL.io automates outbound revenue infrastructure for B2B SaaS companies.

VOICE RULES (non-negotiable):
- Never start with "I"
- No generic openers ("Great to see", "Hope this finds you", "Loved your post")
- Short sentences. No padding. No fluff.
- Write like a peer, not like a salesperson
- Maximum 3 sentences. Each sentence does one job.
- Be specific. Generic = ignored.
- Read their signal and name it precisely — not generically.

STRUCTURE:
Sentence 1: Name the exact thing happening at their company / in their world (from the signal data provided). Make them feel seen.
Sentence 2: Connect that thing to a specific tension or implication — the thing they haven't said yet but know is true.
Sentence 3: Plant the seed of SELLL's value — without pitching. One specific thing that would change something real for them.

Do NOT write the full email. Write ONLY the 3-sentence opener.
Do NOT add a subject line here — that's a separate output.
Do NOT reference SELLL by name in the opener — let that come later in the email body.
```

**User prompt (assembled from CSV data):**
```
Contact: {{first_name}} {{last_name}}, {{title}} at {{company_name}}
Hypothesis: {{hypothesis}}
Company Signal: {{company_trigger}} | Detail: {{v_signal_detail}}
Their LinkedIn Activity: {{exec_linkedin_signal}}
Company Stage: {{v_company_stage}} | Headcount: {{v_company_size}} (e.g. "65-person")
Competitor Signal: {{v_competitor_name}} (if any)
Warm Path: {{warm_path_type}}
Compound Hypotheses: {{compound_hypotheses}} (if any)

Write the 3-sentence bespoke opener.
```

### Output Validation Rules

Before writing to CSV, validate Claude's output:

```
✅ PASS if:
- Exactly 3 sentences
- Does not start with "I"
- Does not contain "SELLL", "SELLL.io", "outbound infrastructure", or "our platform"
- Does not contain generic phrases: "hope this finds you", "great post", "loved your content", "exciting", "congrats"
- References something specific from the signal data (not a generic pain statement)
- Each sentence is ≤ 20 words
- Reads naturally, not like AI-generated text

❌ FAIL (regenerate with modified prompt):
- Starts with "I"
- Contains brand name in the opener
- Uses generic phrases
- Does not reference specific signal from the data
- Reads like a template with names swapped in
```

If Claude's output fails validation, regenerate with: "That opener is too generic. The contact's specific signal is [X]. Write an opener that names [X] precisely — not the category of it, the specific thing."

Maximum 2 regeneration attempts. If still failing → flag for 2-minute manual review.

---

## Step 3 — Generate Bespoke Subject Lines (Claude API)

After the opener is approved, generate a matching subject line:

**Prompt:**
```
Write a cold email subject line for this opener:

[OPENER TEXT]

Contact: {{first_name}} {{last_name}}, {{title}} at {{company_name}}
Context: {{hypothesis}} — {{v_signal_detail}}

RULES:
- 4–7 words maximum
- No question marks (they reduce open rates in cold outreach)
- No "Quick question", "Following up", "Checking in"
- No emojis
- Should create curiosity or name a specific thing, not promise a benefit
- Must relate to something in the opener
- Lowercase preferred (looks more personal, less marketing)

Write ONLY the subject line. Nothing else.
```

**Subject line examples (good):**
- `the 90-day window`
- `SDR productivity at Luminary`
- `what changed after Emma joined`
- `pipeline infrastructure for H2`

**Subject line examples (reject):**
- `Quick question about your sales process` ← generic
- `How SELLL can help Luminary` ← sounds like marketing
- `Checking in` ← forbidden

---

## Step 4 — Write to Campaign CSV

Update the campaign CSV with generated outputs:

| Column | Value Written |
|--------|--------------|
| `v_bespoke_opener` | The 3-sentence opener |
| `v_subject_bespoke` | The bespoke subject line |
| `personalization_notes` | Auto-filled: "Claude-generated from [signal source] — validated [date]" |

Instantly will use `{{v_bespoke_opener}}` in Email 1 for these contacts, replacing the standard opening block.

---

## Step 5 — HeyGen AI Video (Email 3)

For contacts with `reply_prob >= 70`, Email 3 is a personalized AI video instead of a standard text email.

**What HeyGen does:** Uses Aaron's pre-recorded avatar template (recorded once, 45 seconds) and personalizes it with:
- The contact's first name (spoken)
- The company name (spoken)
- The specific proof point for their persona/vertical
- A tailored call-to-action

### One-Time Setup

Aaron records a 45-second "avatar video" with a neutral background and standard delivery. This is the template HeyGen uses to generate all personalized videos. Record this once. HeyGen handles every personalized version from that point forward.

**Template script (Aaron records this once):**
```
Hey [FIRST_NAME_PLACEHOLDER] — Aaron here from SELLL.

Quick thing worth seeing if you're building pipeline at [COMPANY_PLACEHOLDER].

We helped [PROOF_COMPANY] go from [PROOF_BEFORE] to [PROOF_AFTER] in [PROOF_TIMEFRAME].

If [COMPANY_PLACEHOLDER] is working through something similar — worth 15 minutes.

[CALENDAR_LINK]
```

HeyGen replaces all `[PLACEHOLDER]` values with the contact's specific data.

### HeyGen API Call (per contact)

```json
POST https://api.heygen.com/v1/video.generate
{
  "video_inputs": [{
    "character": {
      "type": "avatar",
      "avatar_id": "[AARON_AVATAR_ID]",
      "avatar_style": "normal"
    },
    "voice": {
      "type": "audio",
      "voice_id": "[AARON_VOICE_ID]",
      "input_text": "[Personalized script from Step 5A]"
    },
    "background": {
      "type": "color",
      "value": "#FFFFFF"
    }
  }],
  "dimension": { "width": 1280, "height": 720 },
  "aspect_ratio": "16:9",
  "test": false
}
```

### Script Generation for Each Contact

```
FIRST_NAME: {{first_name}}
COMPANY: {{company_name}}
PROOF_COMPANY: [match from proof-library based on assigned_proof_point]
PROOF_BEFORE: [before state from proof point]
PROOF_AFTER: [after state from proof point]
PROOF_TIMEFRAME: [timeframe from proof point]
CALENDAR_LINK: https://cal.com/collins-ogiki-x4fokk/30min
```

### Video Processing Flow

```
1. API call fires for each contact (async)
2. HeyGen processes: ~2–4 minutes per video
3. Webhook fires when complete: POST /webhooks/heygen-complete
4. n8n receives webhook → writes video URL to campaign CSV `v_loom_url` column
5. Video URL is now available as {{v_loom_url}} in Email 3 template
6. Email 3 goes out on schedule via Instantly with the personalized video embedded
```

### Fallback: If HeyGen API Down or Video Not Ready

If HeyGen video isn't ready by Email 3 send time:
- Auto-substitute: send the text version of Email 3 (standard sequence email 3 template)
- Flag in account card: "Video failed — text fallback sent"
- No manual action required — Instantly sends the fallback automatically

---

## Step 6 — Output Summary

After running:

```
AI PERSONALIZATION COMPLETE — [Campaign Name]
─────────────────────────────────────────────
Priority Personalization contacts:  [N]
Bespoke openers generated:          [N] / [N] (passed validation)
Bespoke subject lines generated:    [N] / [N]
Flagged for manual review:          [N] (failed 2 validation attempts)
HeyGen videos queued:               [N]
HeyGen videos complete:             [N] (ready for Email 3)
HeyGen videos failed:               [N] → text fallback armed

EXPECTED IMPACT:
Standard sequence reply rate:       ~2.5%
Bespoke email reply rate (est.):    ~6–9% (based on reply probability ≥ 70 cohort)
```

All outputs written to campaign CSV and account cards automatically.

---

## API Configuration

| Variable | Value | Where to Set |
|----------|-------|-------------|
| `ANTHROPIC_API_KEY` | [Anthropic API key] | Environment variables |
| `HEYGEN_API_KEY` | [HeyGen API key] | Environment variables |
| `AARON_AVATAR_ID` | [HeyGen avatar ID — from one-time recording] | Environment variables |
| `AARON_VOICE_ID` | [HeyGen voice ID] | Environment variables |
| `N8N_WEBHOOK_URL` | `https://[n8n]/webhook/heygen-complete` | n8n |

---

## Quality Bar

The bespoke opener must pass the "Would Aaron send this himself?" test:

✅ YES if: Reading it, someone would think Aaron personally researched this company for 30 minutes and wrote this just for them.

❌ NO if: Reading it, someone might think "this looks like a template with my name in it."

The difference is specificity. "I saw you recently made a VP Sales hire" is a template. "Emma Watts joined Prism 12 days ago — that's usually when the infrastructure question becomes urgent" is bespoke.

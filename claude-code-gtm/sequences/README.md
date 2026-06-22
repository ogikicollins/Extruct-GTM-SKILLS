# Outreach Sequences — SELLL.io
> Version 2.0 | Built: 2026-06-21 | Standard: Top 0.0001%
> Loaded into Instantly by Layer 3 skill. Never edited mid-campaign.

---

## What Makes These Different

Traditional cold emails are about the sender. These are about the prospect's specific situation — their exact day count, their named proof counterpart, their own words from LinkedIn. The subject line stops them mid-scroll. The body makes them think "how do they know this?"

**What is permanently banned from every email:**
- "I hope this email finds you well"
- "Quick question" or "Quick call"
- "I wanted to reach out because..."
- "We help companies like yours..."
- Any feature list or service description
- More than one idea per email
- Exclamation points
- "Looking forward to connecting"
- Generic subject lines ("Following up", "Introduction", "Partnership opportunity")
- More than 130 words per email

**What every email must have:**
- A subject line that references something specific to this person (their day count, their words, their company, their situation)
- An opener that demonstrates we understand something they haven't heard articulated before
- One clear observation OR one clear question — never both
- Evidence of research (their tool stack, their team size, their specific signal)
- Confidence — no hedging, no "potentially", no "might"

---

## Sequence Index

| File | Variant Code | For Who | Trigger Condition | Emails |
|------|-------------|---------|------------------|--------|
| `vpSales-v1.md` | `VPSales_v1` | New VP Sales | H5 confirmed, no LinkedIn post, no compound signal | 5 |
| `vpSales-postReference.md` | `VPSales_PostReference` | New VP Sales | H5 + contact has a relevant LinkedIn post | 5 |
| `vpSales-postRaise-compound.md` | `VPSales_PostRaise_Compound` | New VP Sales | H1+H5 compound signal | 5 |
| `vpSales-displacement.md` | `VPSales_Displacement` | New VP Sales | H7 + competitor frustration signal detected | 5 |
| `cro-v1.md` | `CRO_v1` | Established CRO / VP Sales (tenure > 90 days) | H1, H4, or H6 | 5 |
| `founder-v1.md` | `Founder_v1` | CEO / Founder still in deals | H3 | 5 |
| `champion-thread-b.md` | `ChampionFollow_v1` | SDR Manager / RevOps (Thread B) | Tier 1, Thread B role | 4 |

**Total: 34 emails across 7 variants**

---

## Merge Variables Reference

Every variable must be populated in the campaign CSV before import to Instantly.
Variables marked ⚠️ require human review before sending — they cannot be auto-filled from enrichment alone.

### Contact Variables
| Variable | Source | Example | Required |
|----------|--------|---------|---------|
| `{{first_name}}` | people-search | Sarah | Always |
| `{{company_name}}` | enrichment | DataFlow Analytics | Always |
| `{{company_size}}` | employee_count_actual | 65-person | Always |
| `{{days_in_role}}` | vp_sales_start_date → calculated | 22 | H5 sequences |
| `{{sdr_count}}` | sdr_team_size | 3 | All |
| `{{sequencer_name}}` | sequencer_tool | Apollo | All |
| `{{raise_amount}}` | last_funding_amount | $8M | Compound only |
| `{{raise_stage}}` | funding_stage | Series A | Compound only |
| `{{competitor_name}}` | competitor_client | Belkins | Displacement only |
| `{{previous_signal}}` | exec_linkedin_signal ⚠️ | "lots to untangle" | PostReference only |

### Sender Variables (set per SDR or Aaron)
| Variable | Value | Who Sets It |
|----------|-------|------------|
| `{{sender_name}}` | Aaron Shepard (Tier 1) / SDR name (Tier 2) | Layer 3 setup |
| `{{sender_title}}` | Founder, SELLL.io / Sales Specialist, SELLL.io | Layer 3 setup |
| `{{calendar_link}}` | https://cal.com/collins-ogiki-x4fokk/30min | Fixed |

### Proof Variables (from `brain/proof-library.md`)
| Variable | Example Value | Source |
|----------|--------------|--------|
| `{{proof_person}}` | Stefan Golz | proof-library.md |
| `{{proof_role}}` | new CRO | proof-library.md |
| `{{proof_company}}` | Holz Concepts | proof-library.md |
| `{{proof_situation}}` | walked into 3 SDRs on a generic stack, no RevOps, ICP last defined 18 months prior | proof-library.md |
| `{{proof_outcome}}` | 31 qualified meetings in month 2, hit board targets on schedule | proof-library.md |
| `{{proof_months_post_raise}}` | 2 | proof-library.md (H1 compound only) |
| `{{proof_person_quote}}` | "I thought it was another agency. It's not." | proof-library.md ⚠️ |

### Video Variables (auto-populated by `ai-personalization` + `video-outreach` skills)
| Variable | What It Is | How It Gets Filled |
|----------|-----------|-------------------|
| `{{v_loom_url}}` | HeyGen AI video URL, personalized per contact | Auto: `ai-personalization` (reply_prob ≥ 70) or `video-outreach` (all Tier 1). Manual Loom override for reply_prob > 85 |
| `{{loom_url_general}}` | General system overview video | Aaron records once; used for Thread B and Tier 2 contacts |
| `{{loom_url_founder}}` | Founder-to-founder video | Aaron records once; used in `Founder_v1` sequence |

**Video rule:** `{{v_loom_url}}` is auto-populated before Email 3 sends via HeyGen API. If the HeyGen video is not ready by Day 8 send time, Instantly automatically uses the text-only fallback Email 3. Never delay a campaign for a missing video URL — the fallback is always armed.

---

## Sequence Timing

| Email | Send Day | Delay From Previous | Notes |
|-------|----------|--------------------|----|
| Email 1 | Day 1 | — | After pre-engagement T0 |
| Email 2 | Day 4 | +3 days | |
| Email 3 | Day 8 | +4 days | Loom — check URL is filled |
| Email 4 | Day 15 | +7 days | |
| Email 5 | Day 22 | +7 days | |

**Thread B (champion) timing:** Starts Day 5 only if Thread A has received Email 1 with no positive reply. If Thread A gets any positive reply — pause Thread B immediately.

---

## Who Sends What

| Tier | Thread | Sender Name | Why |
|------|--------|------------|-----|
| Tier 1 Priority | Thread A (decision maker) | Aaron Shepard | Founder-to-VP trust signal. Higher open and reply rate. |
| Tier 1 Standard | Thread A | Aaron Shepard | Same reason |
| Tier 2 | Thread A | SDR name | Aaron's time reserved for Tier 1 |
| All Tiers | Thread B (champion) | SDR name | Champions respond better to peer-level contact |

**SDR rule:** When sending as Aaron, the SDR manages the replies and escalates HOT responses to Aaron within 2 hours. The email comes from Aaron. The execution is the SDR's.

---

## Reply Routing

All replies route through `brain/reply-routing.md`. SDRs must read that file before managing any replies. Key rules:

- HOT reply (positive interest, any signal) → Aaron notified within 2 hours, SDR sends booking email
- WARM reply (not now, later, forward to someone) → SDR handles per routing playbook
- HARD NO reply → DNC update, immediately stop all threads for that company
- Wrong person reply → SDR finds correct contact and updates account card
- OOO reply → Note return date in account card, resume on that day

# Behavioral Intent Score (BIS) — Technical Reference
> Component of: Layer 3 Campaign Execution
> Implemented via: n8n + Instantly webhooks + HubSpot API
> Updated: 2026-06-22

---

## What the BIS Is

The Behavioral Intent Score is the reply probability score (`reply_prob`) that was calculated at list-build time by Layer 2 — but updated continuously throughout the campaign as the contact interacts with outreach.

**Key distinction from all other B2B tools:** Every other system calculates intent once and never updates it. The BIS is a living signal.

At list launch: `reply_prob = 58` (calculated from 7-dimension score + contact score)
After Email 1 opened 3×: `reply_prob = 73`
After Loom link clicked: `reply_prob = 93`
State: flagged for HOT treatment before they reply

---

## n8n Workflow: BIS Event Processor

One n8n workflow handles all BIS updates. Triggered by every Instantly + Expandi webhook event.

### Workflow Name: `selllo-bis-update`

```
Trigger: Webhook POST /webhook/instantly-events
         Webhook POST /webhook/expandi-engagement

Node 1: Parse Event
  Input: { event_type, lead_email, campaign_id, timestamp, metadata }
  Output: { contact_email, event_type, delta }

Node 2: Lookup Current BIS
  API: HubSpot GET /crm/v3/objects/contacts?email=[contact_email]
  Extract: reply_probability (custom property)
  If not found: default to 0

Node 3: Apply Delta (lookup table)
  event_type → delta mapping (see table below)
  new_score = current + delta
  CLAMP: max(0, min(100, new_score))

Node 4: Check Threshold Crossings
  IF new_score ≥ 70 AND old_score < 70:
    → Fire threshold alert: "Contact crossed 70 — queue for bespoke personalization"
  IF new_score ≥ 85 AND old_score < 85:
    → Fire threshold alert: "Contact crossed 85 — recommend personal Loom"
  IF new_score ≥ 90 AND old_score < 90:
    → Fire threshold alert: "Contact at 90+ — manual outreach recommended before next email"

Node 5: Update HubSpot
  PATCH /crm/v3/objects/contacts/[id]
  { "reply_probability": new_score }

Node 6: Update Account Card
  Append to engine/accounts/[slug].md → BIS History section:
  | [timestamp] | [event_type] | [delta] | [new_score] |

Node 7: Log to Campaign CSV
  Update v_reply_probability column in active campaign record
  (used by SAE for variant selection)
```

---

## BIS Delta Table (Full)

| Event | Delta | Source | Rationale |
|-------|-------|--------|-----------|
| Email opened < 1h of send | +8 | Instantly `email_opened` | Fast open = high relevance at send moment |
| Email opened 1–6h of send | +5 | Instantly `email_opened` | Normal engagement |
| Email opened 6–24h of send | +3 | Instantly `email_opened` | Delayed but still interested |
| Email opened same email 2× | +7 | Instantly `email_opened` (2nd occurrence) | Returning to re-read |
| Email opened same email 3× | +10 | Instantly `email_opened` (3rd) | High consideration |
| Email opened same email 4× | +12 | Instantly `email_opened` (4th) | Very strong signal |
| Email opened same email 5× | +15 → Ghost Positive Protocol | Instantly | Intent without reply = dormant HOT |
| Any text link clicked | +15 | Instantly `link_clicked` | Direct engagement with content |
| HeyGen / Loom video link clicked | +25 | Instantly `link_clicked` (v_loom_url) | Video engagement = strongest content signal |
| Email forwarded (new recipient domain detected) | +30 | Instantly reply tracking | Buying committee forming |
| LinkedIn profile visited same day as email send | +15 | Expandi `profile_visit_detected` | Research mode = active evaluation |
| LinkedIn connection accepted | +10 | Expandi `connection_accepted` | Warm signal acknowledged |
| LinkedIn DM replied | +20 | Expandi `dm_reply_received` | Dialogue started |
| Aaron's LinkedIn post liked | +12 | Expandi `post_engagement` | Public interest signal |
| Aaron's LinkedIn post commented on | +18 | Expandi `post_engagement` → LEM fires | Active engagement = strong signal |
| New company trigger detected mid-campaign | +15 | signal-monitor webhook | External urgency event |
| Thread B contact engaged (same company) | +10 | Compound Engagement — CED step | Account-level signal |
| Reply received (any category) | Score frozen | inbox-reply classification | Route to reply intelligence; BIS paused while reply in flight |
| HARD_NO reply received | Score = 0, flagged DNR | inbox-reply | No further intent calculation needed |

---

## BIS Threshold Actions

| Threshold | Action | Automated | Aaron Notified |
|-----------|--------|-----------|---------------|
| Crosses 50 | BIS now "WARM tier" — monitor closely | ✅ HubSpot property update | No |
| Crosses 70 | Queue for ai-personalization (bespoke Email 3 if not already generated) | ✅ n8n trigger | No |
| Crosses 85 | Slack alert: "Consider personal Loom for Email 3" | ✅ Slack | ✅ Yes (optional) |
| Crosses 90 | Slack alert: "Manual outreach recommended" + accelerate sequence if email not yet sent | ✅ Slack + n8n | ✅ Yes |
| 5× same email open | Ghost Positive Protocol fires | ✅ n8n → HeyGen | ✅ Yes (notification) |
| 2 contacts at same company cross 50 | CED fires (see compound-engagement-detector.md) | ✅ n8n | ✅ Yes |

---

## BIS in the Account Card

Each account card (`engine/accounts/[slug].md`) includes a BIS History section:

```markdown
## Behavioral Intent Score — [Company Name]
Current BIS: [score] | Initial reply_prob: [score] | Delta: [+/-N]
Last updated: [timestamp]

### BIS History
| Date | Event | Delta | Score After |
|------|-------|-------|------------|
| 2026-06-25 | Email 1 opened (1st) | +5 | 63 |
| 2026-06-25 | Email 1 opened (2nd, 3h later) | +7 | 70 |
| 2026-06-25 | LinkedIn profile visited | +15 | 85 |
| 2026-06-26 | Loom link clicked | +25 | 100 → capped |
| 2026-06-26 | Reply received (HOT) | Score frozen | 100 |

### Threshold Events
| Threshold | Date | Action Taken |
|-----------|------|-------------|
| Crossed 70 | 2026-06-25 | Bespoke Email 3 queued via ai-personalization |
| Crossed 85 | 2026-06-25 | Slack alert sent to Aaron |
```

---

## Why No Off-the-Shelf Tool Does This

Apollo, Outreach, Salesloft, and Lemlist all calculate intent scores at list import or on the first reply. They do not:
- Update the score mid-campaign based on open/click behavior
- Track score changes from LinkedIn interactions
- Fire threshold alerts that modify the email sequence in real time
- Feed the BIS into the Sequence Adaptation Engine to pick the next variant

The BIS requires custom n8n logic that cross-references Instantly events, Expandi events, and LinkedIn activity against the campaign contact list. This is infrastructure, not a feature toggle. It is a defensible technical moat.

**SELLL pitch:** "We know who's about to reply before they do. We don't wait for them to raise their hand — we watch every signal their behavior sends and act on it before anyone else does."

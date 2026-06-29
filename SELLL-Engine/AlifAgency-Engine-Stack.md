# ALIF Agency — Revenue Engine Stack
> SELLL.io GTM Engineering | 2026-06-28
> Every tool, its role, config spec, API access, and estimated cost

---

## Stack Overview

| Layer | Tool | Role | Monthly Cost (Est.) |
|-------|------|------|-------------------|
| Signal | Crunchbase Pro | Funding signals — global | $49 |
| Signal | Magnitt | MENA startup funding signals | $0 (free tier) |
| Signal | Dealroom | EU funding signals | $0 (free tier alert) |
| Signal | Proxycurl | LinkedIn enrichment + job changes | $49 ($0.01/call × 5K/mo) |
| Signal | Google Alerts | Press + brand mention signals | $0 |
| Enrichment | Clay | Master enrichment workspace | $149 (Explorer) |
| Enrichment | Apollo.io | Email + firmographic data | $99 (Basic) |
| Enrichment | Hunter.io | Email verification | $49 |
| Enrichment | Facebook Marketing API | Ad Library scans | $0 |
| Outreach | Instantly.ai | Email sequences + sending | $97 (Growth) |
| Outreach | Expandi | LinkedIn automation | $99 |
| Outreach | WATI | WhatsApp Business API (MENA) | $49 |
| Conversion | Calendly | Meeting scheduling | $12 (Essentials) |
| Conversion | PandaDoc | Proposal generation + e-sign | $49 (Essentials) |
| CRM | Clarify | Pipeline + deal tracking | Already in use |
| Orchestration | n8n | Webhook orchestrator — all automation | $20 (Cloud Starter) or $0 self-hosted |
| AI | Anthropic Claude API | Reply classification + content drafts | ~$30–60/month at volume |
| Reporting | Google Sheets | Pipeline dashboard + case study tracker | $0 |
| Notifications | Slack | Kaya alerts + team digest | $0 (free tier) |
| Audit | PageSpeed Insights API | Website performance data for audits | $0 |
| Proposals | Carrd (optional) | Lightweight audit landing pages | $19/year |
| **TOTAL** | | | **~$800–900 USD/month** |

**Payback calculation:** 1 new retainer client at $5,000/month = 6x the full engine cost. The stack pays for itself on the first close.

---

## Tool-by-Tool Configuration

---

### 1. Instantly.ai — Email Sending + Sequences

**Role:** Runs all 3 outreach sequences. Manages sending domains, inbox rotation, warmup, and reply detection webhook.

**Setup:**
```
Account: One Instantly workspace for ALIF Agency
Sending Domains: alif-team.io + alifsales.io (not the main alifagency.ai domain)
Inboxes per domain: 3 (6 total)
Warmup: 14 days per inbox before first send (built into Instantly)
Daily send limit: 30 emails/inbox × 6 inboxes = 180 emails/day max
Campaign structure:
  Campaign A: D2C / E-Commerce (Sequences A1–A5)
  Campaign B: Hospitality / F&B (Sequences B1–B5)
  Campaign C: Tech Startup CMO (Sequences C1–C5)
  Campaign D: Referral Warm (3 emails, warmer tone)
Reply webhook: POST to n8n endpoint (alif-reply-router.json)
Open tracking: ON (after Email 1)
Click tracking: OFF (spam filter risk)
Unsubscribe: Auto-managed by Instantly
```

**Key settings:**
- Send window: Tuesday–Thursday, 8:00 AM–10:30 AM (prospect's local timezone via Instantly timezone detection)
- Bounce rate ceiling: 2% — campaign auto-pauses if exceeded
- Daily sending ramp: Start at 20/inbox/day, increase by 5 every 3 days until max

**API endpoints used:**
```
POST /api/v1/lead/add → Add enriched lead from Clay
POST /api/v1/campaign/pause → Pause on positive reply
GET /api/v1/analytics/campaign → Weekly reporting pull
DELETE /api/v1/lead/delete → Remove on unsubscribe
```

---

### 2. Clay — Master Enrichment Workspace

**Role:** The intelligence hub. Every signal-triggered company flows through Clay for enrichment, scoring, and segmentation before entering a sequence.

**Table structure (key columns):**
```
INPUT COLUMNS:
  company_name          | Company LinkedIn URL        | domain
  signal_type           | signal_date                 | signal_source
  region                | country

ENRICHMENT COLUMNS (auto-populated via Clay waterfalls):
  employee_count        | company_revenue_est         | funding_total
  funding_stage         | last_funding_date           | investors
  tech_stack            | crm_detected                | sequencer_detected
  decision_maker_name   | decision_maker_title        | decision_maker_linkedin
  decision_maker_email  | email_verified              | email_confidence_score
  phone_number          | linkedin_connection_degree
  instagram_handle      | instagram_followers         | avg_engagement_rate
  website_url           | pagespeed_mobile_score      | fb_ads_running (Y/N)
  fb_ad_count           | fb_ad_quality_score (1-5)   | ad_library_url

SCORING COLUMNS (formula-based):
  icp_segment           | region_tag (MENA/EU/US)     | persona_tag (A/B/C)
  firmographic_score    | technographic_score         | signal_urgency_score
  budget_capacity_score | decision_maker_access_score
  TOTAL_ICP_SCORE       | grade (A+ / A / B / C / D)

OUTPUT COLUMNS:
  sequence_id           | send_to_instantly (Y/N)     | instantly_added_date
  audit_generated (Y/N) | audit_sent_date             | notes
```

**ICP Score Formula (Clay formula column):**
```javascript
// Auto-calculates on row addition
const firmographic = 
  (employee_count >= 15 && employee_count <= 200 ? 5 : 
   employee_count >= 10 ? 3 : 1) * 5; // max 25 pts

const signalUrgency = 
  (signal_type === 'funding' ? 5 :
   signal_type === 'new_cmo' ? 4 :
   signal_type === 'bad_ads' ? 3 :
   signal_type === 'new_location' ? 4 : 2) * 5; // max 25 pts

const budgetCapacity = 
  (funding_total > 1000000 ? 5 :
   funding_total > 500000 ? 4 :
   employee_count > 50 ? 3 : 2) * 4; // max 20 pts

const dmAccess = 
  (decision_maker_email !== '' && email_confidence_score > 85 ? 5 :
   decision_maker_linkedin !== '' ? 3 : 1) * 3; // max 15 pts

const icpSegmentFit =
  (icp_segment === 'primary' ? 5 :
   icp_segment === 'secondary' ? 3 :
   icp_segment === 'tertiary' ? 2 : 0) * 3; // max 15 pts

return firmographic + signalUrgency + budgetCapacity + dmAccess + icpSegmentFit;
// Total: 100 pts
```

**Grade logic:**
```
90–100 → A+ → Kaya personally reviews + personalized audit
75–89  → A  → Full 5-email sequence + LinkedIn + WhatsApp
60–74  → B  → Semi-personalized sequence (less audit)
40–59  → C  → Nurture only — LinkedIn content targeting
<40    → D  → Do not add to sequence
```

**Clay → Instantly integration:**
- When `TOTAL_ICP_SCORE ≥ 60` AND `email_verified = true` → Clay exports row to Instantly via Zapier webhook or Clay's native Instantly integration
- Sequence selected based on `sequence_id` column
- Lead added with custom fields (company_name, decision_maker_name, signal_type, region, instagram_handle, website_url)

---

### 3. Expandi — LinkedIn Automation

**Role:** Runs the LinkedIn pre-engagement layer (profile views + connection requests) and parallel DM thread (Day 3 of each email sequence).

**Campaign structure:**
```
Campaign 1: MENA — Pre-Engagement (profile view + like post T-3 before Email 1)
Campaign 2: EU — Pre-Engagement (profile view + connection request T-3)
Campaign 3: US — Pre-Engagement (profile view T-3)
Campaign 4: MENA — Sequence DM (fires Day 3 of each email sequence)
Campaign 5: EU — Sequence DM
Campaign 6: US — Sequence DM
Campaign 7: All Regions — Post-Engagement (DM prospects who engage with Kaya's posts)
```

**Daily limits (to avoid LinkedIn restrictions):**
```
Profile views: 80/day
Connection requests: 20/day
Messages to 1st connections: 40/day
Total actions: 100/day
```

**Pause logic (n8n → Expandi API):**
```
TRIGGER: Instantly webhook fires "Reply received = Positive"
ACTION: POST to Expandi API → pause DM campaign for that contact
RESULT: No LinkedIn DM fires after positive email reply (prevents double-touch)
```

---

### 4. WATI — WhatsApp Business API (MENA only)

**Role:** WhatsApp outreach + proposal follow-up for all MENA contacts. Highest-engagement channel in the region.

**Templates (must be pre-approved by Meta):**

**Template 1: Initial Outreach**
```
Hi {{1}}, Kaya from ALIF Agency here. 
Sent you an email about {{2}}'s digital presence — found 3 things worth sharing. 
10 minutes whenever suits?
```

**Template 2: Audit Delivery**
```
Hey {{1}} — attached the quick audit I ran on {{2}}. 
Three specific things that are costing you on {{3}} [ads/social/website]. 
Happy to walk through it — just reply here or book a slot: [Calendly link]
```

**Template 3: Proposal Follow-Up**
```
Hi {{1}} — sent the proposal to your email. 
Happy to walk through the {{2}} option if easier — literally 15 minutes. 
Shall we jump on a call?
```

**Template 4: Voice Note Prompt (Kaya sends manually)**
```
[Kaya records a 30–45 second voice note referencing something specific to the prospect's brand. 
WATI delivers it via n8n trigger on Day 2 of no-reply after Email 1.]
```

**WATI API calls from n8n:**
```
POST /api/v1/sendTemplateMessage → send template on trigger
POST /api/v1/sendSessionMessage → send in active conversation
GET /api/v1/getMessages → pull conversation history for CRM log
```

---

### 5. n8n — Orchestration Engine

**Role:** The brain that connects every tool. All workflows run in n8n. No Zapier (too expensive at volume, too limited for complex logic).

**Deployment:** n8n Cloud Starter ($20/month) or self-hosted on DigitalOcean Droplet ($6/month VPS + free n8n).

**Workflows deployed (see individual JSON files):**
```
alif-signal-monitor.json      → Runs 6:00 AM GST daily
alif-reply-router.json        → Triggered by Instantly webhook (real-time)
alif-proposal-flow.json       → Triggered by Calendly webhook (real-time)
alif-referral-engine.json     → Triggered by Clarify deal age (daily check)
alif-weekly-report.json       → Runs Sunday 8:00 AM GST
```

---

### 6. Clarify — Pipeline + Deal Intelligence

**Role:** Single source of truth for all deals. Already in use by ALIF — configure it as the revenue engine's tracking layer.

**See AlifAgency-CRM-Schema.md for full configuration.**

---

### 7. Claude API — AI Intelligence Layer

**Role:** Reply classification, objection counter drafting, pre-call brief generation, audit content synthesis.

**Calls made from n8n:**

**Call 1: Reply Classification**
```json
{
  "model": "claude-sonnet-4-6",
  "max_tokens": 100,
  "system": "You classify email replies into exactly one of four categories: POSITIVE (wants to meet or learn more), OBJECTION (pushback but still engaged), NOT_NOW (politely deferring), UNSUBSCRIBE (wants to stop). Reply with only the category word.",
  "messages": [{"role": "user", "content": "Email reply: {{reply_body}}"}]
}
```

**Call 2: Objection Counter Draft**
```json
{
  "model": "claude-sonnet-4-6",
  "max_tokens": 300,
  "system": "You are Kaya Geha, Strategy & Creative Director at ALIF Agency in Dubai. You write short, direct, confident email replies to sales objections. Your tone: peer-to-peer, specific, never generic. Max 4 sentences. No subject line needed — this is a reply.",
  "messages": [
    {"role": "user", "content": "Objection received: {{reply_body}}\nProspect company: {{company_name}}\nProspect role: {{decision_maker_title}}\nOur relevant case study: {{relevant_case_study}}\nWrite a short counter."}
  ]
}
```

**Call 3: Pre-Call Brief Generation**
```json
{
  "model": "claude-sonnet-4-6",
  "max_tokens": 800,
  "system": "You generate discovery call briefs for Kaya Geha at ALIF Agency. Format: 6 sections: 1) Company snapshot (2 sentences), 2) Why they responded (signal + sequence context), 3) Likely pain (based on ICP segment), 4) Their tech stack, 5) Most relevant ALIF case study, 6) Suggested opening line for the call.",
  "messages": [
    {"role": "user", "content": "Company: {{company_name}}\nDecision maker: {{decision_maker_name}}, {{decision_maker_title}}\nSignal: {{signal_type}} on {{signal_date}}\nICP segment: {{icp_segment}}\nRegion: {{region}}\nTech stack: {{tech_stack}}\nFacebook ads running: {{fb_ads_running}}\nInstagram engagement rate: {{avg_engagement_rate}}\nEmail sequence: {{sequence_id}}\nReply content: {{reply_body}}"}
  ]
}
```

---

### 8. PandaDoc — Proposal Automation

**Role:** Auto-generates branded proposals from n8n trigger. Three templates (AED, GBP, USD). E-signature capability for fast close.

**Template variables (populated by n8n from Clarify):**
```
{{prospect_name}}           → Decision maker name
{{company_name}}            → Company name
{{audit_finding_1}}         → From audit generation
{{audit_finding_2}}
{{audit_finding_3}}
{{recommended_tier}}        → Based on ICP score + discovery call notes
{{tier_1_price}}            → Brand Sprint price in correct currency
{{tier_2_price}}            → Growth Retainer price
{{tier_3_price}}            → Full Partner price
{{case_study_industry}}     → Matched to prospect's vertical
{{case_study_result}}       → Specific metric
{{currency_symbol}}         → AED / £ / $
{{proposal_date}}           → Auto-filled
{{expiry_date}}             → +7 days from send
```

---

## Integration Matrix

| From | To | Trigger | Data Passed |
|------|----|---------|-------------|
| n8n signal monitor | Clay | New company signal | company_name, domain, signal_type, region |
| Clay | Instantly | Score ≥ 60 + email verified | All lead fields + sequence_id |
| Clay | Expandi | Score ≥ 60 + LinkedIn URL | LinkedIn URL, DM template, sequence_id |
| Clay | WATI (MENA) | Score ≥ 60 + region = MENA | Phone, WhatsApp template vars |
| Instantly | n8n | Reply received | reply_body, contact_email, campaign_id |
| n8n | Claude API | Reply received | reply_body, company context |
| n8n | Clarify | Every stage change | deal_id, stage, contact fields |
| n8n | Expandi | Positive reply | Pause campaign for contact |
| n8n | WATI | Positive reply (MENA) | Calendly link + prospect name |
| Calendly | n8n | Meeting booked | prospect_email, meeting_time, event_type |
| n8n | Claude API | Meeting booked | All enrichment fields → pre-call brief |
| n8n | Slack | Every key event | Brief notification with context |
| n8n | PandaDoc | Meeting held + 2h | All proposal template vars |
| Clarify | n8n | Deal age = 30 days | deal_id, client_name, client_email |
| n8n | Google Sheets | Weekly | Pipeline metrics, close rates, referrals |

---

## Cost Optimization Notes

1. **Claude API cost control:** Only call Claude API on reply classification (not on every email open). At ~200 replies/month, cost = $5–15/month. Pre-call briefs add ~$10–20/month. Total AI cost: ~$30–60/month.

2. **Proxycurl optimization:** Batch daily "Changed Jobs" lookups to one daily call rather than per-trigger. Pull only MENA + EU + US ICP-matched profiles. Estimated 300–500 calls/month = $3–5.

3. **Clay credit management:** Waterfall enrichment uses Clay credits. Start with Apollo as primary (cheapest), fall through to Prospeo and Hunter only if Apollo returns null. Estimated: 500–800 company enrichments/month at ~$0.15 avg = $75–120/month (within Clay Explorer plan).

4. **Instantly inbox scaling:** Start with 6 inboxes (2 per domain). Add inboxes only when pipeline demand justifies — each inbox adds ~30 sends/day capacity.

5. **Self-hosting n8n:** Moving n8n from Cloud to DigitalOcean saves $14/month and gives unlimited executions. Recommended after month 2 when workflow complexity is stable.

---

*Engine Stack — SELLL.io GTM Engineering | ALIF Agency | 2026-06-28*


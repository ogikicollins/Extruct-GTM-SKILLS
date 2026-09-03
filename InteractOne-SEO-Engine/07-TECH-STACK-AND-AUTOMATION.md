# Tech Stack + Automation

Lean stack sized for a ~18-person agency running one outbound motion. Total ~$650-950/mo plus usage.

---

## 1. Stack

| Job | Tool | Why this one | ~Cost/mo |
|---|---|---|---|
| Company list + platform data | **Store Leads** (or BuiltWith) | Platform + platform-change history + product count in one place | $60-150 |
| Firmographics + contacts | **Apollo.io** | Revenue/headcount filters + contact records + exports | $99-149 |
| Organic/paid intelligence | **Ahrefs** (Standard) | Traffic trend, keyword-to-page ratio, core-update alignment, competitor SERP | $199 |
| Enrichment orchestration | **Clay** (starter) | Waterfall enrichment, dedupe, scoring, pushes to sequencer. Only real tool gap for InteractOne. | $149-349 |
| Email finding | **Prospeo** + **FullEnrich** | Waterfall, best coverage for mid-market US | $50-100 |
| Verification | **MillionVerifier** or **ZeroBounce** | <2% bounce, catch-all flagging | $30-50 |
| Sending / sequencer | **Instantly** (or Smartlead) | Native warmup, inbox rotation, webhook on reply, unibox | $37-97 |
| Cold domains | 2 domains + Google Workspace (4 mailboxes) | Isolate from interactone.com | ~$30 |
| CRM | **HubSpot free** (or Pipedrive) | Deal stages, DNC sync, reporting | $0-49 |
| Calendar | **Cal.com** | 20-min "Teardown Review" event type, routing to reps | $0-15 |
| Video | **Loom** Business | Teardown recording + view notifications (feed lead scoring) | $15-25 |
| LinkedIn | **Sales Navigator** (Core) | People search, job-change filter, frustration-post alerts | $99 |
| Automation | **n8n** (self-host or cloud starter) | Glue: reply routing, dossier trigger, signal monitor, reporting | $0-25 |
| Crawl / audit | **Screaming Frog** (licensed) | Pre-send mini-audit + delivery audits | ~$20 |

**Decisions to confirm with InteractOne:** Clay vs building enrichment in Extruct (they have prior Extruct exposure); Instantly vs Smartlead; HubSpot vs their existing CRM.

---

## 2. API keys checklist

```
[ ] STORE_LEADS_API_KEY        (or BUILTWITH_API_KEY)
[ ] APOLLO_API_KEY
[ ] AHREFS_API_TOKEN
[ ] CLAY_API_KEY / workspace
[ ] PROSPEO_API_KEY
[ ] FULLENRICH_API_KEY
[ ] MILLIONVERIFIER_API_KEY
[ ] INSTANTLY_API_KEY          (reply webhook + campaign API)
[ ] LOOM_API / workspace access
[ ] CAL_COM_API_KEY            (booking webhook)
[ ] HUBSPOT_PRIVATE_APP_TOKEN
[ ] N8N instance + credentials store
[ ] ANTHROPIC_API_KEY          (reply classification, dossier + proposal drafting)
[ ] SLACK_WEBHOOK_URL          (rep alerts)
```

---

## 3. n8n workflows (5)

### WF-1 · Signal monitor → Layer 2 queue  (schedule: Thu 6am)
```
Cron → Store Leads (platform-change delta) + Ahrefs (traffic-drop scan) + Sales Nav (job changes, frustration posts)
     → filter to ICP firmographics (Apollo lookup)
     → dedupe vs companies.csv + DNC
     → append to engine/signal-queue.csv
     → Slack summary to #interactone-seo-engine
```

### WF-2 · Reply → classify → route  (trigger: Instantly reply webhook)
```
Webhook (reply received)
  → Anthropic: classify {Interested|Meeting|Question|Objection|Referral|NotInterested|Unsub|Auto}
  → switch:
      Interested/Meeting → draft response (Anthropic) + create HubSpot deal (S1) + Slack alert to rep (@here, SLA 2h)
      Question           → draft response + Slack
      Objection          → draft response using 05-CLOSE objection bank + Slack
      Referral           → draft intro-ask + create task
      NotInterested      → HubSpot lost + set 6-mo re-check
      Unsub              → remove from Instantly + add DNC in HubSpot
      Auto/OOO           → pause sequence, set resume date
  → all drafts land in a review queue (Slack or n8n form). NOTHING sends to the prospect without a human click.
```

### WF-3 · Meeting booked → dossier  (trigger: Cal.com booking webhook)
```
Webhook (booking)
  → pull company + contact from companies.csv / Apollo / Ahrefs
  → Anthropic: generate dossier from 04-PIPELINE template
  → write accounts/{slug}/dossier.md
  → email dossier to rep + Dwyer at T-24h (schedule node)
  → HubSpot deal → S1, add call datetime
  → Slack: "Call booked: {company} {datetime}. Dossier in 1 min."
```

### WF-4 · Retainer signed → onboarding  (trigger: HubSpot deal → S5, or e-sign webhook)
```
Trigger (deal won)
  → create accounts/{slug}/onboarding.md from 05-CLOSE Day 0-90 plan
  → create HubSpot tasks for Day 0 (before-state capture), 30, 60, 90
  → Slack: kickoff checklist to delivery team
  → move contact out of all cold sequences (suppression)
```

### WF-5 · Weekly report  (schedule: Fri 7am)
```
Cron → Instantly API (sends, opens, replies) + HubSpot (deals, MRR) + engine/*.md counts
     → Anthropic: assemble 06-OPTIMIZE weekly report template
     → write reports/{date}-weekly.md
     → Slack post + email to Dwyer
```

---

## 4. Data files (the engine's memory, all in this folder)

```
InteractOne-SEO-Engine/
├── engine-state.md
├── engine/
│   ├── signal-watchlist.csv
│   ├── signal-queue.csv
│   ├── lead-scores.csv
│   ├── priority-board.md
│   ├── reply-log.md
│   ├── meetings-log.md
│   ├── deals.md
│   ├── referrals.md
│   └── re-engagement-log.md
├── csv/
│   ├── interactone-companies.csv
│   ├── interactone-contacts.csv
│   ├── interactone-tier1.csv
│   └── interactone-tier2.csv
├── accounts/
│   └── {slug}/{dossier.md, onboarding.md}
└── reports/
    └── {date}-weekly.md
```

---

## 5. Guardrails baked into automation

- Every prospect-facing message routes through a human review queue. No exceptions.
- DNC check runs at list build AND at send time (WF-2 re-checks HubSpot status).
- Volume cap enforced in Instantly (per-mailbox daily limit). WF-5 flags if positive replies > 8/week and posts "throttle recommended."
- Bounce monitor: if any domain > 3% bounce in a day, WF pauses that domain and alerts.
- All API failures in n8n → Slack alert + retry, never silent.

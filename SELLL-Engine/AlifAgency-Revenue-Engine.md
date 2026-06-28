# ALIF Agency — Automated Revenue Engine
> Architect: SELLL.io GTM Engineering | Built: 2026-06-28
> Classification: 0-to-1 Compounding Outbound Motion | Fully Automated | Multi-Region
> Regions: MENA · Europe · United States
> Stack: Clay · Instantly · Expandi · WATI · KommoCRM · n8n · Claude API · Calendly

---

## System Philosophy

Most agencies build a sales process. This builds a **revenue machine** — a self-improving system where every signal, reply, call, win, and loss makes the next cycle more accurate, faster, and higher-converting.

The engine runs on three principles:

1. **Signal-first, not list-first.** Outreach fires because something happened at a company — not because a name appeared on a spreadsheet. Right person, right moment, right message.
2. **Every input feeds the next output.** Reply data calibrates sequences. Close data sharpens the ICP. Client wins generate referrals. Referrals produce faster closes. The system compounds.
3. **Zero manual work in the outbound loop.** Kaya's time is spent on discovery calls, creative strategy, and reviewing AI-generated drafts — not prospecting, researching, writing emails, or chasing proposals.

---

## Full System Architecture

```
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                        ALIF AGENCY REVENUE ENGINE                                  ║
║                   0-to-1 Compounding Automated Outbound Motion                     ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────────────────┐
│  LAYER 1: SIGNAL DETECTION                                                          │
│  What: Monitors 12 signal sources across MENA, EU, US — 24/7                       │
│                                                                                     │
│  [Crunchbase]  [Magnitt/WAMDA]  [LinkedIn Jobs]  [Facebook Ad Library]             │
│  [Dealroom]    [Sifted]         [Google Alerts]   [Proxycurl Changed Jobs]          │
│  [Builtwith]   [Wappalyzer]     [Zawya]           [GITEX/Event Lists]              │
│                                                                                     │
│  ↓ n8n: alif-signal-monitor.json — runs 6:00 AM GST daily                         │
└───────────────────────────────┬─────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  LAYER 2: INTELLIGENCE & ENRICHMENT                                                 │
│  What: Every signal-triggered company is enriched, scored, and routed               │
│                                                                                     │
│  Clay Workspace:                                                                    │
│  • Waterfall enrichment (Apollo → Prospeo → Hunter → Clearbit)                     │
│  • LinkedIn profile pull (Proxycurl)                                                │
│  • Tech stack detection (Builtwith)                                                 │
│  • Facebook Ad Library scan (custom Clay column)                                   │
│  • ICP score auto-calculation (52-column model)                                     │
│  • Decision maker identification + email verification                               │
│  • Region tagging (MENA / EU / US) → routes to correct sequence                    │
│                                                                                     │
│  Output: Enriched company card with score, persona tag, region, and sequence ID    │
└───────────────────────────────┬─────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  LAYER 3: MULTI-CHANNEL ORCHESTRATION                                               │
│  What: Automated pre-engagement + outreach across email, LinkedIn, WhatsApp        │
│                                                                                     │
│  Pre-engagement (T-3 days before Email 1):                                         │
│  • Expandi: LinkedIn profile view + connection request with personalized note       │
│  • (MENA only): LinkedIn like on their most recent post                            │
│                                                                                     │
│  Email Sequences (Instantly.ai):                                                    │
│  • Sequence A: D2C/E-Commerce (5 emails, signal-triggered)                         │
│  • Sequence B: Hospitality/F&B (5 emails, signal-triggered)                        │
│  • Sequence C: Tech Startup CMO (5 emails, post-funding within 24h)               │
│  • Sending: Custom domains | 50 sends/day/inbox | Tue-Thu 8-10AM local timezone   │
│                                                                                     │
│  LinkedIn Parallel Thread (Expandi):                                                │
│  • DM fires Day 3 of each sequence (between Email 1 and Email 2)                   │
│  • Paused automatically on positive email reply                                     │
│                                                                                     │
│  WhatsApp Thread (WATI — MENA only):                                               │
│  • Fires same-day as Email 1 for MENA contacts                                     │
│  • Kaya voice note prompt triggers on Day 2 no-reply                               │
│  • Automated proposal follow-up (template) within 2h of proposal send             │
└───────────────────────────────┬─────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  LAYER 4: CONVERSION ENGINE                                                         │
│  What: Replies classified → routed → proposals generated → meetings booked         │
│                                                                                     │
│  Reply received (Instantly.ai webhook → n8n):                                       │
│  → Claude API classifies: Positive / Objection / Not Now / Unsubscribe            │
│                                                                                     │
│  ├─ POSITIVE:                                                                       │
│  │   • Calendly link sent (personalized email within 15 min)                       │
│  │   • WhatsApp message sent (MENA): "Happy to jump on a call — [link]"           │
│  │   • Expandi: LinkedIn thread paused                                              │
│  │   • KommoCRM: Stage → "Discovery Scheduled"                                    │
│  │   • n8n: Pre-call brief auto-generated (company summary, pain hypothesis,       │
│  │            tech stack, relevant case study, suggested opening line)             │
│  │   • Slack: Kaya notified instantly                                               │
│  │                                                                                  │
│  ├─ OBJECTION:                                                                      │
│  │   • Claude API: Draft counter from objection bank                               │
│  │   • Kaya review queue: Slack with 1-click approve/edit                          │
│  │   • KommoCRM: Log objection type                                                │
│  │   • If approved → Instantly sends reply within 2h                               │
│  │                                                                                  │
│  ├─ NOT NOW:                                                                        │
│  │   • KommoCRM: Stage → "Nurture" | Set 60-day signal re-engage trigger          │
│  │   • Instantly: Remove from active sequence                                       │
│  │   • n8n: Add to LinkedIn warm content list (Expandi)                           │
│  │                                                                                  │
│  └─ UNSUBSCRIBE:                                                                    │
│      • Instantly: Unsubscribe + global suppress                                     │
│      • KommoCRM: Mark DNC                                                           │
│      • Expandi: Remove from all queues                                              │
│                                                                                     │
│  Meeting Held (Calendly webhook → n8n):                                             │
│  • 2h after scheduled end: Post-call email sent (personalized to call notes)       │
│  • Proposal auto-generated: 3-tier structure, correct currency per region          │
│  • KommoCRM: Stage → "Proposal Sent"                                               │
│  • MENA: WhatsApp follow-up fires 2h after proposal email                          │
│  • EU: LinkedIn follow-up fires 48h after proposal email                           │
│  • US: Email follow-up fires 4h after proposal email                               │
└───────────────────────────────┬─────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  LAYER 5: REFERRAL ENGINE                                                           │
│  What: Converts happy clients into a systematic introduction machine                │
│                                                                                     │
│  Day 30 trigger (KommoCRM deal age → n8n):                                         │
│  • Auto-email to client: "Who in your network should know about this?"             │
│  • MENA: WhatsApp version sent same day                                             │
│  • Tracking: Each introduction logged in KommoCRM + Google Sheets                  │
│                                                                                     │
│  Referral → Pipeline:                                                               │
│  • Introduction contact auto-added to Clay enrichment queue                        │
│  • Warm email sequence (3 emails, not cold — references the introducer)            │
│  • KommoCRM: New deal created with source = "Referral" + referrer name            │
│  • Target: 55–70% close rate on referral leads (vs. 35% cold)                     │
└───────────────────────────────┬─────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  LAYER 6: COMPOUNDING INTELLIGENCE                                                  │
│  What: Every outcome feeds back into the system — makes each cycle smarter         │
│                                                                                     │
│  Weekly (every Sunday 8:00 AM GST — automated n8n report):                         │
│  • Reply rates by sequence variant → kill <2%, scale >4%                          │
│  • Close rate by ICP segment + region → shift outreach volume toward winners       │
│  • Objection frequency → top 3 objections update objection bank                    │
│  • Deal velocity → update expected close timeline per segment                      │
│  • Referral conversion → calibrate Day-30 ask timing                              │
│                                                                                     │
│  Monthly (automated Google Sheets + Slack report):                                  │
│  • MRR added vs. target                                                             │
│  • CAC by region and channel                                                        │
│  • LTV tracking (client months × ACV)                                              │
│  • Top 3 wins: what signal, what sequence, what close argument worked              │
│  • Top 3 losses: what broke, what to fix                                           │
│                                                                                     │
│  ICP Score Calibration (monthly):                                                   │
│  • Compare ICP scores of won deals vs. lost deals                                  │
│  • Adjust scoring weights in Clay formula to match close data                      │
│  • Add new disqualification criteria from loss patterns                            │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The Event Bus — How Every Signal Propagates

```
SIGNAL FIRES
│
├──► Clay enrichment starts (within 5 min via n8n webhook)
├──► Lead score calculated (auto)
├──► Region tagged (MENA / EU / US)
├──► Sequence selected (A / B / C + region variant)
└──► KommoCRM deal created (Stage: "Signal Detected")

EMAIL SENT (Instantly)
│
├──► Expandi: LinkedIn view queued for same contact (pre-engagement)
├──► WATI: WhatsApp message queued (MENA only)
├──► KommoCRM: Activity logged per contact
└──► Deliverability tracker updated (bounce rate watch — >2% pauses campaign)

EMAIL OPENED (Instantly engagement webhook)
│
├──► KommoCRM: Stage → "Engaged — Email Opened"
├──► Lead score: +5 behavioral points
└──► If opened 3x without reply → trigger LinkedIn DM immediately

REPLY RECEIVED
│
├──► n8n: alif-reply-router.json fires (within 30 seconds)
├──► Claude API: Classifies intent
├──► KommoCRM: Stage update per classification
├──► Expandi: LinkedIn thread paused (if positive)
└──► WATI: WhatsApp action triggered (MENA positive only)

MEETING BOOKED (Calendly webhook)
│
├──► n8n: Pre-call brief generated + sent to Kaya (Slack + email)
├──► KommoCRM: Stage → "Discovery Scheduled"
├──► Expandi: ALL parallel threads for this account paused
├──► Instantly: Sequence paused for this contact
└──► Calendar event: Kaya + prospect + video link auto-confirmed

CALL ENDS (Calendly estimated end + 2h buffer)
│
├──► n8n: Post-call email fired (personalized template)
├──► n8n: Proposal generated (3-tier, correct currency)
├──► KommoCRM: Stage → "Proposal Sent"
├──► WATI: WhatsApp follow-up (MENA, 2h after proposal email)
└──► Slack: Kaya notified — "Proposal sent to [Name] — watch for reply"

DEAL WON (KommoCRM stage = Won)
│
├──► Slack: 🎉 Team celebration alert
├──► Google Sheets: Client added to case study tracker
├──► n8n: Onboarding sequence triggered (welcome email + intro to team)
├──► Day 30 timer: Referral ask queued
├──► Learning loop: Win pattern logged (signal → sequence → objection → close)
└──► ICP score recalibrated: winning company's attributes weighted higher

DEAL LOST (KommoCRM stage = Lost)
│
├──► Slack: Loss reason required (Kaya must log before stage confirms)
├──► Learning loop: Loss pattern logged (which objection wasn't handled)
├──► Objection bank: Updated with new failure data
├──► If "not now": 90-day re-engage trigger set in KommoCRM
└──► ICP score: Losing company's attributes weighted lower
```

---

## Compounding Mechanics — How the Engine Gets Smarter Over Time

```
MONTH 1 → MONTH 3 → MONTH 6 TRAJECTORY

Month 1:
  • Engine running on hypothesis (ICP = educated guess)
  • Reply rate: 1.5–2.5% (warmup + first calibration)
  • Close rate: 15–20% (discovery still learning)
  • Output: 2–4 new clients

Month 3:
  • ICP scoring calibrated from 8–12 real deals
  • Reply rate: 3–4% (winning message variants scaled, losers killed)
  • Close rate: 28–35% (discovery framework refined from 20+ calls)
  • Referral engine producing 3–5 introductions/month
  • Output: 5–7 new clients/month

Month 6:
  • Every sequence variant tested and optimized
  • ICP scoring predicts close probability at 70%+ accuracy
  • Referral introductions = 30–40% of pipeline (self-generating)
  • LinkedIn content producing 5–8 inbound inquiries/month
  • Reply rate: 4–6% (top 0.5% of all agency outreach globally)
  • Close rate: 35–45% (system knows exactly who to target + when)
  • Output: 8–12 new clients/month (includes cold + referral + inbound)

THE FLYWHEEL:
  More clients → More case studies → Stronger proof in sequences →
  Higher reply rate → More discovery calls → More close data →
  Sharper ICP → Better signal targeting → Fewer bad leads →
  Higher close rate → More clients → [repeat, compounding]
```

---

## Pipeline Architecture (KommoCRM Stages)

```
STAGE 0: Signal Detected
  ↓ (auto — Clay enrichment complete)
STAGE 1: Sequence Active
  ↓ (trigger: reply received)
STAGE 2: Engaged — Reply Received
  ↓ (trigger: meeting booked via Calendly)
STAGE 3: Discovery Scheduled
  ↓ (trigger: meeting held + Kaya logs score ≥ 4.0)
STAGE 4: Qualified — Proposal Sent
  ↓ (trigger: proposal accepted / verbal yes)
STAGE 5: Verbal Commitment
  ↓ (trigger: contract signed)
STAGE 6: WON — CLIENT ACTIVE
  │
  ├──► Day 30: Referral ask fires
  ├──► Month 3: Case study request fires
  └──► Monthly: Health score tracked

STAGE 7: LOST (sub-tags: Not Now / Budget / Competitor / No Pain / Disqualified)
STAGE 8: NURTURE (re-engage timer set: 30, 60, or 90 days)
STAGE 9: DNC (permanent — do not contact)
```

---

## The Audit Automation Pipeline

The Free Creative & Performance Audit is the highest-converting mechanic. It must be partially automated to be scalable at volume.

```
TRIGGER: Company enters Clay → Score ≥ 70 → Audit flag set

AUDIT GENERATION (Clay + n8n):
  Step 1: Pull website URL → run Screaming Frog API scan → extract SEO issues (top 3)
  Step 2: Pull Facebook Ad Library via Facebook Marketing API → screenshot ads → 
          Claude API analyzes creative quality vs. brand guidelines
  Step 3: Pull Instagram handle → extract last 12 posts → Claude API assesses 
          visual consistency score (1–10) + engagement rate vs. industry benchmark
  Step 4: Pull Google PageSpeed Insights → mobile load time score
  Step 5: Claude API synthesizes findings → generates 3 specific, named audit points 
          in ALIF's voice and format

OUTPUT: Auto-populated audit PDF (via Carrd or PandaDoc template)
  • Section 1: What we found about [Brand]
  • Section 2: Three specific gaps (each with visual evidence + revenue impact estimate)
  • Section 3: What fixing each gap looks like
  • Cover: ALIF Agency branding + [Brand]'s logo + date

DELIVERY:
  • MENA: Attached to Email A2 / sent as WhatsApp PDF
  • EU: Attached to Email A2 (cold email)
  • US: Loom video walking through the audit PDF (Kaya records once per audit batch — 
        5-minute screen-share walkthrough)
```

---

## API Connection Map

```
Clay ──────────────────────────────► Apollo (waterfall enrichment)
Clay ──────────────────────────────► Proxycurl (LinkedIn data + job changes)
Clay ──────────────────────────────► Hunter.io (email verification)
Clay ──────────────────────────────► Builtwith (tech stack)
Clay ──────────────────────────────► Facebook Marketing API (Ad Library)
Clay ──────────────────────────────► Instantly (export enriched CSV to sequence)

n8n ───────────────────────────────► Crunchbase API (funding signals)
n8n ───────────────────────────────► Magnitt API (MENA funding)
n8n ───────────────────────────────► Dealroom API (EU funding)
n8n ───────────────────────────────► Proxycurl (LinkedIn "Changed Jobs" daily)
n8n ───────────────────────────────► Google Alerts webhook (press signals)
n8n ───────────────────────────────► Clay API (trigger enrichment on new signal)
n8n ───────────────────────────────► Instantly API (add/pause/remove contacts)
n8n ───────────────────────────────► Expandi API (LinkedIn sequence control)
n8n ───────────────────────────────► WATI API (WhatsApp send + template)
n8n ───────────────────────────────► Claude API (reply classification + draft)
n8n ───────────────────────────────► KommoCRM API (stage updates, deal creation)
n8n ───────────────────────────────► Calendly API (meeting detection)
n8n ───────────────────────────────► Google Sheets API (reporting + case studies)
n8n ───────────────────────────────► Slack API (Kaya notifications)
n8n ───────────────────────────────► PandaDoc API (proposal generation)
n8n ───────────────────────────────► PageSpeed Insights API (audit data)
```

---

## Environment Variables Required

```bash
# Signal Sources
CRUNCHBASE_API_KEY=
MAGNITT_API_KEY=
DEALROOM_API_KEY=
PROXYCURL_API_KEY=

# Enrichment
CLAY_API_KEY=
APOLLO_API_KEY=
HUNTER_API_KEY=
BUILTWITH_API_KEY=
FB_MARKETING_API_TOKEN=
FB_AD_ACCOUNT_ID=
PAGESPEED_API_KEY=

# Outreach
INSTANTLY_API_KEY=
INSTANTLY_CAMPAIGN_A_ID=
INSTANTLY_CAMPAIGN_B_ID=
INSTANTLY_CAMPAIGN_C_ID=
EXPANDI_API_KEY=
EXPANDI_CAMPAIGN_IDS=

# WhatsApp (MENA)
WATI_API_TOKEN=
WATI_INSTANCE_URL=
WATI_KAYA_PHONE=

# CRM
KOMMO_CLIENT_ID=
KOMMO_CLIENT_SECRET=
KOMMO_REDIRECT_URI=
KOMMO_SUBDOMAIN=

# AI
ANTHROPIC_API_KEY=
CLAUDE_MODEL=claude-sonnet-4-6

# Scheduling
CALENDLY_API_KEY=
CALENDLY_EVENT_UUID=

# Proposals
PANDADOC_API_KEY=
PANDADOC_TEMPLATE_AED=
PANDADOC_TEMPLATE_GBP=
PANDADOC_TEMPLATE_USD=

# Reporting
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_JSON=
SLACK_BOT_TOKEN=
SLACK_CHANNEL_KAYA=
SLACK_CHANNEL_TEAM=
```

---

## Day-by-Day Build Order (Engineer's Sequence)

```
DAY 1-2: Foundation
  □ Register custom sending domains (alif-team.io + alifsales.io)
  □ Set up Instantly account + connect 3 inboxes per domain (6 inboxes total)
  □ Start email warmup (14-day warmup minimum before first send)
  □ Set up n8n instance (self-hosted on VPS or n8n Cloud)
  □ Create .env file with all API keys
  □ Set up KommoCRM pipeline (see CRM Schema file)

DAY 3-5: Clay Workspace
  □ Build Clay enrichment table (52 columns per AlifAgency-Engine-Stack.md)
  □ Configure waterfall enrichment (Apollo → Prospeo → Hunter)
  □ Connect Proxycurl for LinkedIn data
  □ Build ICP scoring formula (automated column)
  □ Connect Instantly export (auto-add scored leads to campaigns)
  □ Test with 10 known companies — verify enrichment accuracy

DAY 6-8: Signal Monitoring
  □ Deploy alif-signal-monitor.json to n8n
  □ Configure Crunchbase + Magnitt + Dealroom API connections
  □ Configure Proxycurl "Changed Jobs" daily pull (MENA + EU + US filters)
  □ Set up Google Alerts webhooks (MENA expansion, brand launches)
  □ Test: Trigger a known funding event manually → verify Clay enrichment fires

DAY 9-11: Outreach Sequences
  □ Build Sequence A (D2C/E-Commerce) in Instantly — all 5 emails + LinkedIn variant
  □ Build Sequence B (Hospitality) in Instantly
  □ Build Sequence C (Tech Startup) in Instantly
  □ Configure Expandi campaigns (LinkedIn DM — Day 3 of each sequence)
  □ Configure WATI templates (MENA WhatsApp — 3 templates: initial, follow-up, proposal)
  □ Test: Add a test contact → verify all channels fire in correct sequence

DAY 12-14: Reply Router
  □ Deploy alif-reply-router.json to n8n
  □ Configure Instantly webhook → n8n endpoint
  □ Test Claude API classification with 20 sample replies (positive, objection, not now)
  □ Verify KommoCRM stage updates on each classification
  □ Verify Slack notifications fire to Kaya's channel
  □ Test Calendly link delivery on positive classification

DAY 15-17: Proposal Flow
  □ Build 3 PandaDoc proposal templates (AED, GBP, USD)
  □ Deploy alif-proposal-flow.json to n8n
  □ Configure Calendly webhook → n8n
  □ Test: Book a test meeting → verify pre-call brief generates + Slack fires
  □ Test: Mark meeting as held → verify post-call email + proposal fires
  □ Test: Mark proposal sent → verify follow-up chain fires (WhatsApp + email)

DAY 18-19: Referral Engine
  □ Deploy alif-referral-engine.json to n8n
  □ Configure KommoCRM "Deal Age = 30 days" trigger → n8n
  □ Build Google Sheets referral tracker (auto-populated by n8n)
  □ Test: Create a test deal → fast-forward to Day 30 → verify referral ask fires

DAY 20-21: Reporting + Compounding Layer
  □ Build Google Sheets master dashboard (auto-populated from KommoCRM + Instantly)
  □ Deploy weekly report n8n job (Sunday 8:00 AM GST)
  □ Configure Slack weekly digest (reply rate, close rate, pipeline by region)
  □ Final system test: End-to-end run with 5 real companies

DAY 22: GO LIVE
  □ Launch Wave 1: 20 MENA + 15 EU companies
  □ Monitor first 48 hours: deliverability, reply rate, CRM updates
  □ Daily Slack digest active
```

---

*Master architecture owned by SELLL.io GTM Engineering | ALIF Agency deployment | 2026-06-28*
*Review monthly. Update when new signal sources, tools, or regions are added.*

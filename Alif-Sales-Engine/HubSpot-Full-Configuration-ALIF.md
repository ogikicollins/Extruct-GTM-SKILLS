# HubSpot Full Configuration — ALIF Agency
> RevOps Build | Pre-Launch Setup | 2026-07-02
> Goal: Production-ready CRM before first campaign goes live
> Covers: Account setup → Properties → Pipeline → Sequences → Signature → Workflows → Reports → Launch checklist

---

## BUILD ORDER (Follow This Sequence — Dependencies Matter)

```
1. Account & Team Setup
2. Custom Properties (Contact + Company + Deal)
3. Lifecycle Stages
4. Pipeline + Deal Stages
5. Email Signature (all users)
6. Email Templates + Snippets
7. Sequences
8. Workflows (Automation)
9. Forms + Lead Capture
10. Conversations Inbox
11. Meetings
12. Documents + Playbooks
13. Dashboards + Reports
14. Views + Saved Filters
15. Integrations (Apollo, Instantly, Aircall, n8n)
16. Launch Checklist
```

---

## 1. ACCOUNT & TEAM SETUP

**HubSpot → Settings → Account Setup**

### Company Profile
- Company name: `ALIF Agency`
- Website: `alifagency.ai`
- Industry: `Marketing and Advertising`
- Company size: `1–10 employees`
- Default currency: `USD` (Settings → Account Defaults → Currency)
- Time zone: `Asia/Dubai` (GST) — Collins' zone, adjust per user below
- Fiscal year start: `January`
- Date format: `MM/DD/YYYY`
- Phone format: `International`

### Users & Permissions
**Settings → Users & Teams → Invite Users**

| User | Role | HubSpot Permission Level |
|------|------|--------------------------|
| Collins Ogiki | Head of Sales | `Sales Access` — full CRM, deals, sequences, reports |
| Kaya [last name] | Account Manager | `Sales Access` — contacts, deals, email, no billing |
| Amir [last name] | Agency Lead | `View Only` on deals + full reports access |

**Teams:**
- Create team: `ALIF Sales` → add Collins + Kaya
- Default deal owner: Collins

### Email Sending Domain
**Settings → Marketing → Email → Sending Domains**
- Connect: `@alifagency.ai` (requires DNS records — DKIM + DMARC)
- This ensures HubSpot emails come from your domain, not @hubspot.com
- Also enables HubSpot email tracking (opens, clicks) on all sent emails

### Notifications
**Settings → Notifications (per user)**

Collins — turn ON:
- Deal stage changed
- Task assigned / due
- Email reply received
- Meeting booked
- Form submission
- Deal created by workflow

Turn OFF:
- Marketing email sends (noise)
- Blog / content notifications

---

## 2. CUSTOM PROPERTIES

Properties are the DNA of the CRM. Build these before importing any contacts.

### A. Contact Properties
**Settings → Properties → Contact Properties → Create Property**

| Property Label | Internal Name | Type | Options |
|----------------|--------------|------|---------|
| ICP Grade | `icp_grade` | Dropdown | A+ / A / B / C / D |
| ICP Score | `icp_score` | Number | — |
| ICP Segment | `icp_segment` | Dropdown | D2C + Ecommerce / F&B + Hospitality / Wellness + Fitness / Fashion + Luxury / Tech Startup / Sports + Personal Brand / Agency |
| Region | `alif_region` | Dropdown | United States / Canada / United Kingdom / Germany / Netherlands / France / Sweden / Other EU |
| Signal Type | `signal_type` | Multi-select | Funding / New Location / CMO Hired / Agency Fired / Website Visit / Rebrand / Product Launch / Competitor Gap / MENA Expansion / Referral |
| Signal Count | `signal_count` | Number | — |
| Signal Date | `signal_date` | Date | — |
| Brand Gap Score | `brand_gap_score` | Number (1–5) | — |
| Meta Ad Status | `meta_ad_status` | Dropdown | Running ads / Not running / Unknown |
| LinkedIn URL | `linkedin_url` | Single-line text | — |
| Instagram Handle | `instagram_handle` | Single-line text | — |
| Outreach Channel | `outreach_channel` | Dropdown | Cold Email / LinkedIn DM / Referral / Inbound / Website Visitor / Calendly Direct |
| Instantly Campaign | `instantly_campaign` | Single-line text | — |
| Clay Enriched | `clay_enriched` | Checkbox | — |
| Personalized Line | `ai_first_line` | Multi-line text | (Clay-generated) |
| Last Signal Note | `last_signal_note` | Multi-line text | Free text — describe signal |
| Referral Source | `referral_source` | Single-line text | Name of referrer |
| Do Not Contact | `do_not_contact` | Checkbox | — |
| Recycled Date | `recycled_date` | Date | When to re-engage |

### B. Company Properties
**Settings → Properties → Company Properties → Create Property**

| Property Label | Type | Options |
|----------------|------|---------|
| Estimated Annual Revenue | Dropdown | Under $200K / $200K–$1M / $1M–$5M / $5M–$20M / $20M+ |
| Tech Stack | Multi-select | Shopify / WooCommerce / Squarespace / Meta Pixel / Google Ads / Klaviyo / Mailchimp / HubSpot / Salesforce / Other |
| Estimated Ad Spend | Dropdown | No ads / Under $5K/mo / $5K–$20K/mo / $20K–$50K/mo / $50K+ |
| Current Agency | Dropdown | None (in-house) / Has agency / Recently fired agency / Unknown |
| Instagram Followers | Number | — |
| Website Traffic Tier | Dropdown | Under 1K/mo / 1K–10K / 10K–50K / 50K–200K / 200K+ |
| Primary Product/Service | Single-line text | — |
| Target Market | Single-line text | (e.g., "US women 25–45 skincare") |
| MENA Expansion Intent | Dropdown | Yes — active / Exploring / No / Unknown |
| Ahrefs Domain Rating | Number | — |
| Owler Watchlist | Checkbox | Added to Owler alert |

### C. Deal Properties
Already listed in v2 doc. Implement these:

| Property Label | Type | Options |
|----------------|------|---------|
| ICP Grade | Dropdown | A+ / A / B / C / D |
| ICP Score | Number | — |
| Trigger Type | Multi-select | Same as contact Signal Type |
| Signal Count | Number | — |
| ICP Segment | Dropdown | Same as contact |
| Region | Dropdown | Same as contact |
| Brand Gap Score | Number 1–5 | — |
| Discovery Call Recording | URL | Aircall link |
| Audit Delivered | Checkbox | — |
| Audit Delivery Date | Date | — |
| Proposal ACV (Monthly) | Number (USD) | Monthly retainer value |
| Contract Sent Date | Date | — |
| Close Reason (Lost) | Dropdown | Budget / Timing / Wrong fit / Competitor won / No decision / Ghosted |
| Referral Source | Single-line text | — |
| Close Confidence | Dropdown | This month / Next month / 60+ days |
| Sequence Name | Single-line text | Which Instantly sequence they came from |

---

## 3. LIFECYCLE STAGES

**Settings → Properties → Contact Properties → Lifecycle Stage**
Edit the default options to match ALIF's funnel exactly:

| Stage | Definition | Who's Here |
|-------|-----------|------------|
| `Subscriber` | Filled a form / downloaded something from ALIF's site | Website form fills, lead magnets |
| `Lead` | Added to CRM from Apollo or signal intake — not yet outreached | Enriched, waiting in queue |
| `MQL` (Marketing Qualified) | In an active Instantly sequence, opened emails | Active in outreach |
| `SQL` (Sales Qualified) | Replied positively — engaged | Replied, being worked manually |
| `Opportunity` | Discovery call booked OR completed | Stage: Disco Call → Qualified → Audit |
| `Customer` | Closed Won — paying client | Closed Won deals |
| `Evangelist` | Customer who referred another company | Post-referral clients |
| `Other` | Disqualified, partner, vendor | Negative ICP or non-prospect |

**Automation rule:** Lifecycle stage should move automatically when:
- Deal created → Lifecycle = `Opportunity`
- Deal → Closed Won → Lifecycle = `Customer`
- (Others: manual or via workflow below)

---

## 4. PIPELINE + DEAL STAGES

**Settings → CRM → Pipelines → Sales Pipeline → Edit**

Delete all default stages. Create these in order:

| # | Stage Name | Win Probability | Notes |
|---|-----------|----------------|-------|
| 1 | Engaged | 10% | First positive reply |
| 2 | Disco Call | 25% | Call booked — AUTO via Calendly n8n |
| 3 | Qualified | 40% | Call done, confirmed fit |
| 4 | Audit Sent | 55% | Free audit delivered |
| 5 | Proposal Sent | 70% | Scope + pricing delivered |
| 6 | Contract Sent | 85% | DocuSign / contract issued |
| 7 | Closed Won | 100% | Signed + deposit received |
| 8 | Closed Lost | 0% | Dead — reason required |
| 9 | Disqualified | 0% | Not ICP — no recycle |
| 10 | Recycled | 5% | Not now, follow up in 60–90 days |

**Required fields on stage move:**
- Moving to `Closed Lost` → require `Close Reason (Lost)` to be filled
- Moving to `Proposal Sent` → require `Proposal ACV (Monthly)` to be filled
- Moving to `Closed Won` → require `Contract Sent Date` to be filled

(Set these via: Pipeline → Required Properties per stage)

---

## 5. EMAIL SIGNATURE

**HubSpot → Settings → General → Email Integrations → Email Signature**

Each user builds their own signature. Template below — use HTML signature editor.

### Collins Ogiki Signature
```
Collins Ogiki
Head of Sales | ALIF Agency

📞 [Aircall number]
🔗 linkedin.com/in/[your-handle]
🌐 alifagency.ai

──────────────────────────────
We help D2C and lifestyle brands turn creative into revenue.
Book a 20-min audit: [Calendly link]
```

**HTML version (paste into HubSpot signature editor → Source):**
```html
<table style="font-family: Arial, sans-serif; font-size: 13px; color: #333333; border-collapse: collapse;">
  <tr>
    <td style="padding-right: 16px; vertical-align: top; border-right: 2px solid #C9A96E;">
      <img src="[ALIF logo URL from website]" width="80" alt="ALIF Agency" style="display:block; margin-bottom:8px;">
    </td>
    <td style="padding-left: 16px; vertical-align: top;">
      <strong style="font-size: 14px; color: #1A1A1A;">Collins Ogiki</strong><br>
      <span style="color: #666666;">Head of Sales &nbsp;|&nbsp; ALIF Agency</span><br><br>
      <span>📞 <a href="tel:[number]" style="color: #333; text-decoration:none;">[Aircall number]</a></span><br>
      <span>🔗 <a href="https://linkedin.com/in/[handle]" style="color: #C9A96E; text-decoration:none;">LinkedIn</a></span>&nbsp;&nbsp;
      <span>🌐 <a href="https://alifagency.ai" style="color: #C9A96E; text-decoration:none;">alifagency.ai</a></span><br><br>
      <span style="font-size: 11px; color: #888888; font-style: italic;">We turn creative into measurable revenue for growth-stage brands.</span><br>
      <a href="[Calendly link]" style="font-size: 11px; color: #C9A96E;">→ Book a free 20-min brand audit</a>
    </td>
  </tr>
</table>
```

Kaya builds same structure with her title: `Account Manager | ALIF Agency`

---

## 6. EMAIL TEMPLATES

**CRM → Templates → New Template**

Build these 8 templates. Every rep uses these — no free-writing proposals from scratch.

### Template 1: Discovery Call Confirmation
**Name:** `Disco Confirm — [Segment]`
**Subject:** `Confirmed: Our call on {{meeting.date}}`
```
Hey {{contact.firstname}},

Confirmed for {{meeting.date}} at {{meeting.time}} — looking forward to it.

Before we connect, I'll take a fresh look at {{company.name}}'s current brand and
performance setup so we can make the 20 minutes count.

If anything changes on your end: {{meeting.cancel_reschedule_link}}

Talk soon,
{{sender.firstname}}
```

### Template 2: Pre-Call Prep (send 30 min before)
**Name:** `Pre-Call Brief`
**Subject:** `Quick note before our call`
```
Hey {{contact.firstname}},

Just a quick note before we connect in 30 minutes.

I've had a look at {{company.name}} and want to show you something specific —
keep your screen available if you can, it'll make the conversation more useful.

Meet link: {{meeting.location}}

See you soon,
{{contact.owner.firstname}}
```

### Template 3: Post-Discovery Recap
**Name:** `Post-Disco Recap`
**Subject:** `Quick recap from our call`
```
Hey {{contact.firstname}},

Really enjoyed our conversation today. Here's what I took away:

The challenge: [FILL IN — pain they described]
What we'd build: [FILL IN — what you discussed]
Next step: Sending you the audit / proposal by [date]

One thing I forgot to mention — [personal note or relevant case study]

I'll have [the audit / the proposal] over to you by [date].

{{contact.owner.firstname}}
```

### Template 4: Audit Delivery
**Name:** `Audit Delivery`
**Subject:** `Your ALIF Brand + Performance Audit — {{company.name}}`
```
Hey {{contact.firstname}},

Here's the audit I mentioned. It covers:

→ What we found looking at {{company.name}}'s current brand and content
→ Where the performance gap is (specifically)
→ What a 90-day engagement with ALIF would look like

[ATTACH: audit PDF or Loom video link]

Happy to walk through it live if that's easier — you can grab 20 min here:
[Calendly link]

{{contact.owner.firstname}}
```

### Template 5: Proposal Delivery
**Name:** `Proposal — {{company.name}}`
**Subject:** `ALIF x {{company.name}} — Proposal`
```
Hey {{contact.firstname}},

Based on our conversation and the audit, here's what we'd build for {{company.name}}.

[ATTACH: proposal PDF]

Highlights:
→ [Key deliverable 1]
→ [Key deliverable 2]
→ [Key deliverable 3]
Monthly investment: $[X]

Happy to jump on a quick call to walk through it, or if it reads clearly,
next step is a signed agreement and we kick off within [X] days.

{{contact.owner.firstname}}
```

### Template 6: Proposal Follow-Up (Day 3)
**Name:** `Proposal Follow-Up D3`
**Subject:** `Re: ALIF x {{company.name}} — Proposal`
```
Hey {{contact.firstname}},

Just following up on the proposal — wanted to make sure it landed and was clear.

Any questions on the scope or investment? Happy to jump on a quick call if easier.

{{contact.owner.firstname}}
```

### Template 7: Contract Follow-Up
**Name:** `Contract Chase`
**Subject:** `Re: Agreement — {{company.name}}`
```
Hey {{contact.firstname}},

Circling back on the agreement — want to make sure nothing got lost in your inbox.

Once this is signed we can lock in the kickoff date and get moving.

Let me know if you need anything adjusted.

{{contact.owner.firstname}}
```

### Template 8: Referral Ask (Day 30 post-win)
**Name:** `Referral Ask — Day 30`
**Subject:** `Quick one, {{contact.firstname}}`
```
Hey {{contact.firstname}},

We're a month into working together — [brief positive progress note].

One quick ask: do you know 1–2 other founders building brands like yours
who'd get value from what we've built for {{company.name}}?

Even just a name — we take it from there and make sure they're treated well.

Thanks,
{{contact.owner.firstname}}
```

---

## 7. SNIPPETS

**CRM → Snippets → New Snippet**
Snippets are short text blocks inserted into any email with `#keyword`.

| Shortcut | Name | Content |
|----------|------|---------|
| `#alifproof` | Social proof block | `$2M+ in client revenue generated across 100+ projects. 98% client satisfaction. We've worked with brands in wellness, beauty, F&B, tech, and fashion — across US, UK, Dubai, and Europe.` |
| `#d2ccase` | D2C case study line | `One D2C beauty brand we worked with went from $0 in paid media to [X] ROAS in 90 days — the key was unifying the creative and the targeting under one roof.` |
| `#hospitalitycase` | Hospitality case study | `We helped a multi-location wellness brand build a consistent brand across 4 locations and turn their Instagram into their #1 booking channel.` |
| `#techcase` | Tech/startup case study | `A B2B tech brand we worked with launched into a new market with a full brand system — from UI/UX to performance ads — in under 60 days.` |
| `#auditcta` | Audit CTA | `Happy to show you exactly what I mean — I do a free 20-min Creative + Performance Audit with no pitch. [Calendly link]` |
| `#nopitch` | No-pitch line | `Not a pitch — just want to show you what we see when we look at [company]. Takes 20 minutes.` |
| `#objbudget` | Budget objection | `Totally understand. The brands we work with typically find that having creative and performance under one roof costs less than two separate vendors — and gets better results. Worth comparing before you decide.` |
| `#objtiming` | Timing objection | `Makes sense. What does timing look like from your side? Happy to do the audit now and pick up the conversation when the window opens.` |

---

## 8. SEQUENCES

HubSpot sequences are for personal, one-to-one follow-up from the sales rep (not Instantly mass email). Use these for:
- Post-discovery follow-up when they go quiet
- Post-proposal chase
- Recycled lead re-engagement
- No-show recovery

**CRM → Sequences → Create Sequence**

### Sequence 1: Post-Discovery No Reply (5 steps, 14 days)
*Use when: Discovery call happened, positive signal, but gone quiet after*

| Step | Day | Type | Content |
|------|-----|------|---------|
| 1 | 0 | Email | Template: `Post-Disco Recap` (personalised recap of their specific situation) |
| 2 | 2 | Task | LinkedIn DM: "Hey [name], just sent you a recap — let me know if any questions" |
| 3 | 4 | Email | "Wanted to check — did the recap land OK? Happy to hop on a quick 10 min call if easier to talk through it" |
| 4 | 7 | Task | Aircall: 2-minute call, voicemail drop if no answer |
| 5 | 14 | Email | Template: `Audit Delivery` (send the audit as a value drop even if no response — re-opens the conversation) |

### Sequence 2: Post-Proposal Chase (4 steps, 10 days)
*Use when: Proposal sent, no reply after 48 hours*

| Step | Day | Type | Content |
|------|-----|------|---------|
| 1 | 2 | Email | Template: `Proposal Follow-Up D3` |
| 2 | 5 | Task | LinkedIn DM: "Hey [name], just following up on the proposal — any questions on the scope?" |
| 3 | 7 | Email | "Not going to keep following up after this — just want to make sure you had everything you needed to make a call. If timing isn't right, totally fine." |
| 4 | 10 | Task | Aircall: final call, voicemail drop |

### Sequence 3: No-Show Recovery (3 steps, 5 days)
*Use when: Discovery call booked, they didn't show up*

| Step | Day | Type | Content |
|------|-----|------|---------|
| 1 | 0 | Email | "Hey [name] — looks like we missed each other today. Totally fine, things come up. Here's my link to grab a new time when it works: [Calendly]" |
| 2 | 2 | Task | LinkedIn DM: same message, shorter |
| 3 | 5 | Email | Final: "Still happy to connect when timing works. [Calendly link] — here whenever you're ready." |

### Sequence 4: Recycled Lead Re-Engagement (3 steps, 7 days)
*Use when: Deal was Recycled 60–90 days ago, time to reactivate*

| Step | Day | Type | Content |
|------|-----|------|---------|
| 1 | 0 | Email | "Hey [name] — circling back after a few months. [Reference something new: their new product, recent post, company news]. Wanted to check in on where things stand with [challenge they mentioned]." |
| 2 | 3 | Email | Send a relevant case study from their segment with a one-line note: "Thought of you when I put this together." |
| 3 | 7 | Task | Aircall: direct call, no voicemail — just a re-try |

### Sequence 5: Contract Chase (3 steps, 7 days)
*Use when: Contract sent, not signed after 48 hours*

| Step | Day | Type | Content |
|------|-----|------|---------|
| 1 | 2 | Email | Template: `Contract Chase` |
| 2 | 4 | Task | WhatsApp or Aircall — quick check-in |
| 3 | 7 | Email | "Last follow-up on this — let me know if anything changed or if there's something in the agreement you want to adjust." |

---

## 9. WORKFLOWS (AUTOMATION)

**Marketing/Sales → Workflows → Create Workflow**

### Workflow 1: Calendly → Deal Created at Disco Call
*Handled by n8n (see n8n-Slack-Notification-Workflows.md)*

### Workflow 2: Deal → Lifecycle Stage Sync
**Trigger:** Deal stage changes
**Actions:**
- Deal stage = `Engaged` → Set contact lifecycle = `SQL`
- Deal stage = `Disco Call` → Set contact lifecycle = `Opportunity`
- Deal stage = `Closed Won` → Set contact lifecycle = `Customer`
- Deal stage = `Disqualified` → Set contact lifecycle = `Other`

### Workflow 3: Stale Deal Alert
**Trigger:** Deal stage is `Proposal Sent` AND `Last activity date` is more than 4 days ago
**Actions:**
- Create task for Collins: "Follow up on stale proposal — [company name]" due TODAY
- Send internal email to Collins: "Deal stalling: [Deal name] — last activity [X] days ago"

### Workflow 4: New Lead Assignment
**Trigger:** Contact lifecycle stage = `MQL` (newly set)
**Actions:**
- Assign contact owner = Collins
- Create task: "New MQL — review ICP score and start sequence" due in 4 hours

### Workflow 5: Closed Won → Onboarding + Referral
**Trigger:** Deal stage changes to `Closed Won`
**Actions:**
- Day 0: Create task for Kaya: "Send [company] kickoff welcome email + schedule onboarding call"
- Day 0: Send welcome email from Collins to client (template: confirmation + next steps)
- Day 30: Enroll contact in Sequence 6 (Referral Ask) — OR send HubSpot email template: `Referral Ask — Day 30`
- Day 37: If no referral task completed → create task for Collins: "Call [name] — referral ask follow-up"

### Workflow 6: Recycled Deal Re-Queue
**Trigger:** Deal stage = `Recycled` AND `Recycled Date` = today
**Actions:**
- Create task for Collins: "Recycled lead ready to re-engage — [company name]"
- Enroll contact in Sequence 4 (Recycled Re-Engagement)
- Set deal stage back to `Engaged` (start of pipeline)

### Workflow 7: Website Form → Lead Alert
**Trigger:** Contact submits any HubSpot form
**Actions:**
- Set lifecycle = `Subscriber`
- Create task for Collins: "New form submission from [name] at [company] — review and qualify"
- Send internal notification (email to Collins)

### Workflow 8: Disco Call → Pre-Call Prep Reminder
**Trigger:** Deal stage = `Disco Call` AND meeting start time is 24 hours away
**Actions:**
- Create task for Collins: "Prep for [company] discovery call — review ICP score, LinkedIn, Meta Ad Library"
- Send Collins an internal email with deal details

---

## 10. FORMS + LEAD CAPTURE

**Marketing → Forms → Create Form**

### Form 1: Free Brand Audit Request
*Embed on alifagency.ai homepage + services page*

Fields:
- First Name (required)
- Last Name (required)
- Work Email (required)
- Company Name (required)
- Website URL (required)
- Industry (dropdown — ALIF's ICP segments)
- "What's your biggest marketing challenge right now?" (multi-line text, required)
- "Are you currently working with a creative or marketing agency?" (dropdown: Yes / No / Used to)
- "How did you hear about us?" (dropdown: LinkedIn / Google / Referral / Instagram / Event / Other)

Submission action:
- Show thank you message: "We'll review your brand in the next 24 hours and reach out to schedule your audit."
- Set lifecycle = `Subscriber`
- Trigger Workflow 7 (form submission alert)
- Redirect to Calendly page (or embed HubSpot meeting on thank-you page)

### Form 2: Contact Page
Simple version:
- Name, Email, Company, Message
- Lifecycle = `Lead` on submit

---

## 11. MEETINGS

**Sales → Meetings → Create Meeting Link**

### Collins' Discovery Call Link
- Meeting name: `ALIF Discovery Call — 20 Min`
- Duration: 20 minutes
- Buffer after: 10 minutes (never double-booked)
- Location: Google Meet (auto-generated)
- Availability: Sunday–Thursday (to respect UAE schedule); exclude Friday
- Min notice: 2 hours (no same-hour bookings)
- Confirmation email: auto-send Template 1 (`Disco Confirm`)

**Questions on booking form:**
1. What's your company name? (required)
2. What's your main marketing challenge right now? (required)
3. Are you currently working with a creative or marketing agency? (dropdown: Yes / No / Used to)
4. How did you hear about us? (dropdown)

**Custom URL:** `meetings.alifagency.ai/collins` (requires HubSpot custom domain on meetings)

---

## 12. CONVERSATIONS INBOX

**Settings → Inbox → Create Inbox**

| Inbox | Purpose | Connected Email |
|-------|---------|----------------|
| `Sales Inbox` | All inbound lead emails, form fills | sales@alifagency.ai |
| `Collins` | Collins' personal 1:1 email conversations | collins@alifagency.ai (connected Gmail/Outlook) |

**Routing rules:**
- Form submissions → `Sales Inbox` → auto-assign to Collins
- Direct emails to collins@ → `Collins` inbox

**Live Chat / Chatbot (optional — HubSpot Free):**
- Deploy chatbot on alifagency.ai
- Flow: "Hey 👋 looking for something specific?" → Route to audit form or meeting link
- Offline: collect email + question → routes to Sales inbox

---

## 13. DOCUMENTS

**Sales → Documents → Upload**

Upload these as HubSpot Documents (tracked — you see when prospects open them):

| Document | Use In |
|----------|--------|
| ALIF Agency Credentials Deck | Attach to post-disco email |
| D2C Brand Case Study | Attach to D2C segment proposals |
| Wellness + Fitness Case Study | Attach to wellness proposals |
| F&B + Hospitality Case Study | Attach to F&B proposals |
| Tech Startup Case Study | Attach to tech proposals |
| Proposal Template (blank) | Reference for building proposals |
| Pricing One-Pager | Attach when pricing is asked before proposal |

When a prospect opens the credentials deck at 11 PM → HubSpot notifies Collins immediately → strike while intent is hot.

---

## 14. PLAYBOOKS

**Sales → Playbooks → Create Playbook**

*HubSpot Sales Hub Pro feature*

### Playbook 1: Discovery Call Script
Sections:
- Opening (frame the 20 minutes)
- Audit reveal (show the gap live on screen)
- Qualification questions (4 questions from v2 stack doc)
- Close / next step
- Common objections + responses (pull from Snippets)

### Playbook 2: ICP Qualification Checklist
- Is the DM the founder or CMO? (Y/N)
- Confirmed revenue signal? (Y/N)
- 2+ buying triggers? (Y/N)
- Brand gap visible? (Y/N)
- Timeline confirmed? (Y/N)
- Passes → create deal, move to Qualified
- Fails 3+ criteria → move to Disqualified

### Playbook 3: Objection Handler
- "We don't have budget" → `#objbudget` snippet + ask: "What does the budget look like in Q[next]?"
- "We're happy with our current agency" → "What does happy look like — are you hitting your targets?"
- "We do it in-house" → "What's the biggest bottleneck in doing it in-house right now?"
- "Send me some info" → never just send deck. "Totally — what's most relevant to you, creative or performance side?"
- "We'll revisit in 3 months" → "Makes sense. Can I check in 30 days before that to make sure we're top of mind?"

---

## 15. DASHBOARDS + REPORTS

**Reports → Dashboards → Create Dashboard**

### Dashboard 1: Collins' Daily Command Center
*Purpose: What needs attention today*

| Report | Type | Metric |
|--------|------|--------|
| Open deals by stage | Funnel chart | All active deals |
| Tasks due today | Activity report | Collins + Kaya |
| Deals with no activity > 3 days | Deal report | Filter: last activity > 3 days |
| Replies received this week | Contact activity | Source: Instantly (logged via n8n) |
| Calls this week (Aircall) | Activity report | Call count + outcome |
| Discoveries this week | Deal report | Stage = Disco Call, this week |

### Dashboard 2: Pipeline Health (Weekly — Collins + Amir)
*Purpose: Is the machine working?*

| Report | Type | Metric |
|--------|------|--------|
| Pipeline value by stage | Bar chart | Sum of Proposal ACV × probability |
| Deal conversion rate by stage | Funnel | % moving Engaged → Disco → Qualified → Proposal → Won |
| Average time in each stage | Stage duration | Days |
| Deals created this month | Line chart | Created date |
| Deals created vs. Deals closed | Combo chart | Won vs. Created trend |
| ICP Grade distribution | Pie chart | A+ / A / B / C in pipeline |

### Dashboard 3: Campaign Performance (Weekly)
*Purpose: Is outreach converting?*

| Report | Type | Metric |
|--------|------|--------|
| Contacts created by source | Bar chart | Apollo / Ahrefs / Website Visitor / Referral / Form |
| Contacts by ICP segment | Pie chart | D2C / F&B / Wellness / Tech / etc. |
| Contacts by region | Bar chart | US / Canada / UK / EU |
| Lifecycle stage distribution | Funnel | Lead → MQL → SQL → Opportunity |
| Deals created by month | Line chart | Trend |
| Reply-to-Booking % | Calculated: (Disco calls ÷ Total MQLs) × 100 | The ONE metric |

### Dashboard 4: Revenue Dashboard (Monthly — Amir)
*Purpose: Business health*

| Report | Type | Metric |
|--------|------|--------|
| Revenue won MTD | Single number | Sum of closed won ACV this month |
| Revenue won by month (YTD) | Bar chart | Monthly trend |
| Average deal ACV | Single number | Avg proposal ACV for Closed Won |
| Win rate | Single number | Closed Won ÷ (Closed Won + Closed Lost) |
| Average sales cycle | Single number | Days from Engaged to Closed Won |
| Revenue by segment | Pie chart | D2C / F&B / Wellness / etc. |
| Revenue by region | Pie chart | US / Canada / UK / EU |
| Revenue by source | Bar chart | Outbound / Inbound / Referral |
| Lost deal reasons | Bar chart | Budget / Timing / Competitor / No decision |
| Forecast next 30 days | Pipeline × probability | Weighted ACV |

---

## 16. VIEWS + SAVED FILTERS

**CRM → Contacts → Edit Columns → Save View**

### Contact Views
| View Name | Filter |
|-----------|--------|
| `Signal Queue` | Source = Signal intake, No deal created yet |
| `A+ Prospects` | ICP Grade = A+, Lifecycle ≠ Customer |
| `In Sequence` | Lifecycle = MQL, Last activity < 14 days |
| `Needs Reply` | Lifecycle = SQL, Last activity < 2 days |
| `Recycle Ready` | Recycled Date = this week |
| `All Customers` | Lifecycle = Customer |

### Deal Views
| View Name | Filter |
|-----------|--------|
| `Hot Board` | Stage = Disco Call OR Qualified OR Audit Sent |
| `Proposal Tracker` | Stage = Proposal Sent OR Contract Sent |
| `This Week's Calls` | Stage = Disco Call, Close date = this week |
| `Stale > 4 Days` | Last activity > 4 days, Stage ≠ Closed Won, ≠ Closed Lost |
| `Closed Won YTD` | Stage = Closed Won, Created date = this year |
| `Recycle Queue` | Stage = Recycled, Recycled Date = this week |
| `Lost Analysis` | Stage = Closed Lost, this quarter |

---

## 17. INTEGRATIONS

### Connect These in HubSpot → Settings → Integrations

| Integration | How | What It Does |
|-------------|-----|-------------|
| **Apollo.io** | Apollo → Integrations → HubSpot | Enriched contacts sync to HubSpot automatically on export |
| **Instantly** | Instantly → Integrations → HubSpot | Email activity, opens, replies sync to contact timeline |
| **Aircall** | Aircall → App Marketplace → HubSpot | Calls log automatically with recording, duration, outcome |
| **Calendly** | Calendly → Integrations → HubSpot | Meeting bookings create/update contacts + schedule activities |
| **Google Calendar** | HubSpot → Calendar → Google | Meetings sync both ways |
| **Gmail / Outlook** | HubSpot → Email → Connect | Log all emails from personal inbox to HubSpot contacts |
| **n8n** | HubSpot Private App (API key) | All automation workflows connect via this token |

### HubSpot Private App (for n8n / Clay / automation)
**Settings → Integrations → Private Apps → Create**
- Name: `ALIF Automation`
- Required scopes:
  - `crm.objects.contacts.read` + `.write`
  - `crm.objects.deals.read` + `.write`
  - `crm.objects.companies.read` + `.write`
  - `crm.objects.activities.read` + `.write`
  - `settings.users.read`
- Copy the token → add to n8n credentials + Clay

---

## 18. LAUNCH CHECKLIST

Work through this top to bottom before sending the first campaign email.

### Account + Team
- [ ] Company profile complete (name, website, currency USD, timezone)
- [ ] Collins, Kaya, Amir users created with correct permissions
- [ ] Email sending domain connected (alifagency.ai DNS records live)
- [ ] Gmail / Outlook connected for all sales users
- [ ] Aircall connected to HubSpot
- [ ] Apollo connected to HubSpot
- [ ] Instantly connected to HubSpot
- [ ] Calendly connected to HubSpot

### Properties
- [ ] All 19 custom contact properties created
- [ ] All 9 custom company properties created
- [ ] All 13 custom deal properties created
- [ ] Lifecycle stages relabelled/configured

### Pipeline
- [ ] Old default pipeline stages deleted
- [ ] 10 new deal stages created with correct win probabilities
- [ ] Required fields on Closed Lost (reason) and Proposal Sent (ACV) set

### Email
- [ ] Collins signature complete + rendering correctly
- [ ] Kaya signature complete
- [ ] All 8 templates saved and tested
- [ ] All 8 snippets saved

### Sequences
- [ ] All 5 sequences built and tested (enrol a test contact)

### Workflows
- [ ] All 8 workflows built, turned ON, and tested
- [ ] Calendly n8n workflow live and tested (see n8n doc)
- [ ] Instantly reply → Slack n8n workflow live

### Forms + Meetings
- [ ] Brand Audit form built and embedded on alifagency.ai
- [ ] Collins' meeting link configured with qualifying questions
- [ ] Meeting confirmation email template connected

### Dashboards
- [ ] Dashboard 1 (Daily Command) built with all 6 reports
- [ ] Dashboard 2 (Pipeline Health) built
- [ ] Dashboard 3 (Campaign Performance) built
- [ ] Dashboard 4 (Revenue) built and shared with Amir

### Views
- [ ] All 6 contact views saved
- [ ] All 7 deal views saved

### Documents
- [ ] Credentials deck uploaded as HubSpot Document
- [ ] At least 2 segment case studies uploaded

### Final Verification
- [ ] Send a test email from HubSpot (verify tracking pixel fires)
- [ ] Create a test contact → move through pipeline stages → verify workflows trigger
- [ ] Make a test Calendly booking → verify Slack fires → HubSpot deal created at Disco Call
- [ ] Test an Instantly webhook reply → verify Slack fires → HubSpot contact updated
- [ ] Run a test sequence enrolment (enrol yourself)
- [ ] Confirm Aircall call logs to HubSpot timeline
- [ ] Confirm reply-to-booking % report is calculating correctly

**When every box is checked: campaigns go live.**

---

*This is the CRM foundation. Every client ALIF closes, every dollar tracked, every deal won — it lives here from day one.*

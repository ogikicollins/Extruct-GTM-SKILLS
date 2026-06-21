# Email Deliverability Rules — SELLL.io
> Brain Layer: Execution | Updated: 2026-06-21
> Inspired by: Anfloy's DELIVER agent (98.4% inbox rate architecture)
> The technical foundation. Without this, the entire engine fails regardless of how good the copy is.

---

## The Core Rule

**One bad deliverability week can destroy 6 months of domain reputation. Treat inbox health as the highest-priority operational concern in the engine.**

A 2% bounce rate is the hard ceiling. A 15% open rate is the spam floor. Below either threshold: stop everything and investigate before sending another email.

---

## Domain Architecture

### Never send from the main domain
```
NEVER SEND FROM: aaron@selll.io
REASON: One spam complaint or bounce spike damages your website domain, hurts SEO authority, and can get SELLL.io flagged in email blacklists globally.

ALWAYS SEND FROM: aaron@[sending domain]
Example options:
  - aaron@team.selll.io
  - aaron@getselll.io
  - aaron@selllio.com
  - aaron@try-selll.com
```

### Domain setup requirements (one-time, before any email goes out)
```
□ SPF record configured: v=spf1 include:[ESP domain] ~all
□ DKIM configured: 2048-bit key, aligned with sending domain
□ DMARC configured: p=quarantine (start here, upgrade to p=reject after 30 days)
□ MX records configured (sending domain needs to receive, not just send)
□ Custom tracking domain configured (subdomain for link tracking, not the main domain)
□ BIMI record (optional, adds brand logo in Gmail — lifts trust)
□ Google Postmaster Tools: sending domain registered and verified
□ Microsoft SNDS: sending domain registered
```

### Multiple domains and inbox rotation
For volume > 500 emails/day, use 2-3 sending domains with inbox rotation:
```
Domain 1: aaron@team.selll.io — warmup complete → production use
Domain 2: aaron@getselll.io — 30 days behind Domain 1 → backup rotation
Domain 3: aaron@selllio.com — starting warmup → future capacity

Rotation rule: Never send more than 200 emails/day per inbox from a single domain
```

---

## Warmup Schedule

A new domain starts at 0 credibility. Cold emails from a brand-new domain go to spam 90% of the time. Warmup builds credibility over 8 weeks before any cold outreach goes out.

### Week-by-Week Warmup Protocol

| Week | Daily Volume | Warmup Tool | Manual Sends | Notes |
|------|-------------|-------------|-------------|-------|
| Week 1 | 10-20 emails/day | Warmup Inbox / Mailivery / Lemwarm | 0 cold | Sending to real inboxes you control or warmup partners |
| Week 2 | 20-40 emails/day | Warmup tool | 0 cold | Open rates should be > 50% (warmup tools auto-open) |
| Week 3 | 40-70 emails/day | Warmup tool | 10-15 cold | First cold sends — test on most confident contacts |
| Week 4 | 60-100 emails/day | Warmup tool | 20-30 cold | Monitor bounce rate carefully |
| Week 5 | 80-120 emails/day | Warmup tool | 40-50 cold | Check Google Postmaster reputation: should be HIGH |
| Week 6 | 100-150 emails/day | Warmup tool | 60-75 cold | Full sequence launch possible |
| Week 7 | 120-175 emails/day | Warmup tool | 80-100 cold | Target volume approaching |
| Week 8+ | 150-200 emails/day | Warmup tool running continuously | 100-150 cold | Full production |

**Critical rule: Never turn off the warmup tool.** It should run 24/7 indefinitely in the background, generating positive engagement signals that offset any negative signals from cold outreach.

---

## Daily Sending Limits

| Domain Age | Max Cold Emails/Day | Max Total (incl. warmup) |
|-----------|---------------------|--------------------------|
| Week 1-2 | 0 cold | 20 warmup only |
| Week 3-4 | 15-30 cold | 50 total |
| Week 5-6 | 40-75 cold | 100 total |
| Week 7-8 | 75-125 cold | 150 total |
| Month 3+ | 150-200 cold | 250 total |

**Per inbox (email address) limit:** Max 50 personalized sends/day. For 200/day: 4 inboxes minimum (4 × 50 = 200).

---

## Email Content Rules (Technical)

### What goes in the email (and what doesn't)

| Element | Rule |
|---------|------|
| Images | NONE in Email 1 and Email 2. Spam filters flag image-heavy emails from new domains. |
| Links | Maximum 1 link per email. Never more. Multiple links = phishing flag. |
| Attachments | NONE in cold outreach. Attachments are blocked by most corporate email filters. |
| HTML formatting | Plain text only for Emails 1-3. Simple HTML (no tables, no images) only for Email 4+. |
| Unsubscribe footer | Required by CAN-SPAM and GDPR. Instantly handles this automatically. |
| Tracking pixels | Open tracking: ON after warmup complete. Click tracking: OFF (click tracking links look like phishing URLs to spam filters). |
| Personalization merge tags | All tags must be pre-filled before sending. `{{first_name}}` showing up in a sent email = instant suppression by Instantly. |

### Subject line rules (spam filter)
```
NEVER USE:
- ALL CAPS words: "FREE", "URGENT", "GUARANTEED"
- Excessive punctuation: "!!!" or "???"
- Spam trigger words: "make money", "free offer", "click here", "limited time"
- Emojis in subject lines for cold sequences (add only after response — shows as personalized)
- Forward slashes "/" in subjects (can trigger filters)
- Bracket characters [] (often flagged)

ALWAYS USE:
- Lowercase (reads like a human sent it)
- Under 50 characters (mobile preview)
- No question marks in Email 1 subject (inverted — saves the hook for the body)
```

---

## Health Monitoring Dashboard

Check these metrics every Monday and after every 250 sends:

| Metric | Green (Good) | Yellow (Watch) | Red (Stop Sending) |
|--------|-------------|----------------|-------------------|
| Open rate | > 40% | 25-40% | < 15% → likely spam folder |
| Reply rate | > 3% | 1-3% | < 1% → targeting or copy problem |
| Bounce rate | < 0.5% | 0.5-2% | > 2% → list quality emergency |
| Spam complaint rate | < 0.1% | 0.1-0.3% | > 0.3% → stop immediately |
| Unsubscribe rate | < 0.5% | 0.5-1% | > 1% → message-market fit problem |
| Google Postmaster reputation | HIGH | MEDIUM | LOW/BAD → pause all sends |

### Where to check these metrics
- **Open/reply/bounce:** Instantly dashboard → Campaign Analytics
- **Google Postmaster:** postmaster.google.com → your sending domain
- **Microsoft SNDS:** postmaster.live.com
- **Blacklist check:** mxtoolbox.com → Blacklist Check → your sending domain IP

---

## Emergency Response Protocols

### Protocol A: Bounce Rate Exceeds 2%

**Immediate actions (within 4 hours):**
1. Pause all active campaigns immediately
2. Export the last 500 sent contacts — run through email verification again
3. Identify the source of invalid emails (which list, which enrichment tool)
4. Remove all hard bounces from every future campaign list
5. Run a test: send 10 emails to confirmed-valid addresses
6. Check Google Postmaster reputation — if it dropped to MEDIUM or LOW, add 2 weeks of warmup before resuming

**Root causes to investigate:**
- Catch-all email addresses that weren't filtered
- List that wasn't verified before uploading
- Email format guessed wrong (e.g., pattern inference in email-search was incorrect)
- Prospeo or FullEnrich returned stale data (employee left the company)

---

### Protocol B: Open Rate Drops Below 15% (Spam Folder)

**Immediate actions (within 24 hours):**
1. Pause all campaigns
2. Send a test email to a seed inbox (use Mail Tester → mail-tester.com) — check deliverability score
3. Check Google Postmaster — has reputation changed?
4. Check blacklists (mxtoolbox.com) — are you listed?
5. Run the warmup tool at 2x its normal volume for 7 days before resuming

**If blacklisted:**
1. Submit removal request to the blacklist (each has a different form)
2. Do NOT send any cold emails while on a blacklist
3. This takes 7-30 days to resolve — plan accordingly

---

### Protocol C: Spam Complaint Rate Exceeds 0.3%

**Immediate actions (within 2 hours):**
1. Stop ALL sends immediately
2. Pull the last 200 sent contacts — identify who marked as spam
3. Look for patterns: same industry? same sequence? same email type?
4. Check if any email broke the content rules above (images, multiple links, HTML)
5. Review the list source — were these contacts scraped or legitimately found?
6. Do not resume until complaint rate has been under 0.1% for 5 consecutive test sends

---

## Sending Platform Setup (Instantly)

| Setting | Recommended Value |
|---------|-----------------|
| Sending limit per inbox/day | 40-50 (not the maximum) |
| Delay between emails | Random 3-7 minutes (not a fixed interval) |
| Campaign timezone | Prospect's timezone (not your timezone) |
| Sending hours | 7 AM - 6 PM (prospect local time only) |
| Sending days | Tuesday, Wednesday, Thursday only for first campaign |
| Stop on reply | YES — always (do not let sequence continue after a reply) |
| Stop on out-of-office | YES — pause and reschedule |
| A/B test split | 50/50 per variant |
| Tracking | Opens: ON | Clicks: OFF | Unsubscribes: ON |

---

## Pre-Launch Checklist (Before Every New Campaign)

```
DOMAIN HEALTH
□ Google Postmaster reputation: HIGH
□ Sending domain not on any blacklist (mxtoolbox check)
□ Warmup tool running at current baseline

LIST QUALITY
□ All emails verified (< 2% estimated bounce rate)
□ Catch-all emails flagged and decision made (include or exclude)
□ DNC list checked — no current clients, partners, or hard-no contacts
□ Duplicate contacts removed

EMAIL CONTENT
□ No images in Email 1 or Email 2
□ Maximum 1 link per email
□ All personalization tags filled (no {{first_name}} blanks)
□ Unsubscribe footer present
□ Plain text for first 3 emails
□ Subject line checked against spam trigger words

TECHNICAL
□ Sending volume within daily limit for domain age
□ Reply handling configured (stop on reply: YES)
□ OOO handling configured (pause on OOO: YES)
□ Campaign naming convention: [Persona] — [Hypothesis] — [Date]

COMPLIANCE
□ Legitimate business interest documented (B2B outreach to business professionals)
□ Physical address in footer (CAN-SPAM requirement)
□ Unsubscribe link functional and tested
□ GDPR: only targeting US/UK/AU/CA (or verify GDPR compliance for EU contacts)
```

---

## Sequence Fatigue Guard

> Added: 2026-06-21 | Protects domain reputation and prospect trust by preventing over-mailing

### The Problem

The same contact appearing in multiple campaigns over 6 months with zero engagement is not a warm lead — they're a spam signal. Continuing to email them damages domain reputation, wastes sending capacity, and burns any residual brand goodwill.

### The Rule

Before adding any contact to a new campaign, check their outreach history:

```
IF (contact has appeared in 2+ prior SELLL campaigns in the last 6 months)
AND (0 engagement: no opens, no clicks, no replies, no call connects)
THEN: Mark as FATIGUE SUPPRESSED
     → Do not add to any cold outreach
     → Move to LinkedIn-only watch
```

### Exceptions (when fatigue resets)

| Condition | Reset Rule |
|-----------|-----------|
| Significant role change (new company, new title) | Full reset — treat as new contact at new company |
| 12+ months since last outreach | Full reset — enough time has passed |
| Referred by someone else | Override — send 1 warm email mentioning the referral only |
| Company has a CRITICAL compound signal firing | Override with maximum personalization — but this is the last attempt |

### Daily Check Protocol

**Before loading any campaign CSV into Instantly:**

1. Pull the contact list
2. Check each email against `engine/fatigue-suppressed.md`
3. Any matches → remove from the campaign before import
4. Log removed contacts and why

**The check runs before the pre-launch checklist, not as part of it.** A clean deliverability setup with fatigued contacts still damages deliverability.

### Fatigue-Suppressed File

Track in `claude-code-gtm/engine/fatigue-suppressed.md`:

```
| Email | Company | Name | Campaigns Appeared | Last Outreach | Reason | Reset Condition |
```

### LinkedIn-Only Protocol for Fatigue-Suppressed Contacts

Just because email is suppressed does not mean the contact is permanently unreachable. Move to LinkedIn:
- Follow their activity
- Comment on relevant posts (substantively, not generically)
- If they post about a pain signal → warm DM only (not cold outreach)
- If their role changes → full reset, restart email outreach

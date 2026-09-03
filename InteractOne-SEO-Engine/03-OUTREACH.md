# Layer 3 — Outreach

Goal: launch personalized, signal-triggered campaigns. The CTA everywhere is the free teardown video. Sending is throttled to InteractOne's delivery capacity.

---

## 1. Email prompt template (for `email-generation`)

```
ROLE: You write cold email for InteractOne, a 27-year US-based eCommerce agency.
You are emailing a {persona} at {company}, a {revenue} {sub_vertical} retailer on {platform}.

CONTEXT YOU HAVE:
- segment / hypothesis: {segment} → {hypothesis_statement}
- signal: {signal_detail}  (e.g. "moved from Magento 1 to BigCommerce in March 2026")
- organic trend: {organic_trend_12mo}
- one real technical issue found on their site: {technical_issue_1}
- estimated monthly traffic gap: {traffic_gap_dollars}
- proof to cite: {proof_point}

VOICE RULES:
- Plain, direct, specific. Short sentences. No hype words.
- NO EM-DASHES. Use periods, "and", or commas.
- Open with THEIR situation (the signal). Not "I'm reaching out."
- Credentials come third, briefly.
- One ask: "want me to send the teardown video?"
- 60-110 words. No more.
- Subject line: lowercase, specific to their situation, no clickbait.
- Sign as {sender_name}, InteractOne.

OUTPUT: subject + body only.
```

**Personalization variables required per contact:** `first_name, company, persona, platform, segment, signal_detail, organic_trend_12mo, technical_issue_1, traffic_gap_dollars, proof_point, sender_name, calendar_link, teardown_landing_url`.

---

## 2. Sequence structure (all personas)

18-day core email sequence + LinkedIn touches. Tier 1 adds video + phone + multi-thread.

```
Day 0   LinkedIn connection request (no note)                      [atomic-message]
Day 1   Email 1 — The Signal
Day 3   Email 2 — The Three Issues
Day 4   LinkedIn: like/comment on a recent company or contact post
Day 7   Email 3 — The Playbook + proof     (Tier 1: replaced by Loom teardown)
Day 8   [Tier 1] Cold call + voicemail
Day 10  LinkedIn DM (references the email, new angle)
Day 14  Email 4 — The Different Angle
Day 18  Email 5 — The Close (low pressure, offer still stands)
```

Multi-thread (Tier 1 only): a second contact one level up gets a 3-email offset thread starting Day 5, referencing "I also sent your team a note about the organic drop."

**Reply at any point → sequence stops, Layer 4 takes over, teardown delivered same day.**

---

## 3. Persona A sequence — Post-migration (H1)

**Email 1 — Day 1**
Subject: your organic traffic after the {platform} move

Hi {first_name},

When {company} moved to {platform} around {migration_month}, your organic sessions look like they dropped about {drop_pct} and have not recovered. That pattern is almost always a few technical misses in the migration, not a content problem.

I recorded a short video showing three of them on your {category_example} pages and roughly what each is costing you. Want me to send it over?

{sender_name}, InteractOne

**Email 2 — Day 3**
Subject: re: your organic traffic after the {platform} move

The three I found on {company}:
1. {technical_issue_1}
2. {technical_issue_2}
3. {technical_issue_3}

Items 1 and 3 are usually fixed inside a week. Rough estimate, the lost organic is worth about {traffic_gap_dollars} a month. Happy to just send the video, no call needed. Reply "send it" and it is yours.

{sender_name}

**Email 3 — Day 7**  *(Tier 1: send the Loom instead, script in §5)*
Subject: the migration recovery playbook

We have run this exact recovery for industrial and B2B retailers on Magento and BigCommerce. One client recovered 25 percent organic growth and 66 percent total traffic after a Magento to Adobe Commerce move.

Typical path: audit in week 1, priority fixes in weeks 2 to 4, traffic trending back by month 2 or 3. InteractOne is a Cincinnati team, 27 years, in-house developers and SEO, no offshore. Worth 20 minutes on your setup?

{sender_name}

**Email 4 — Day 14**
Subject: who owns the recovery

Usually after a replatform the traffic drop falls between the dev shop that did the migration and whoever handles marketing, so nobody owns it. That is the gap we fill. We speak both languages.

Still happy to send the teardown video with no meeting. Just say the word.

{sender_name}

**Email 5 — Day 18**
Subject: closing the loop

I will stop here. If organic recovery moves up the priority list this quarter, the teardown offer stands. Reply and I will record it for {company}.

{sender_name}

---

## 4. Persona B sequence — Large catalog (H2) / Core update (H4)

**Email 1 — Day 1**
Subject: {sku_count} product pages on {company}

Hi {first_name},

{company} has roughly {sku_count} product and category pages, and from what I can see about {ranking_pct} of the category pages rank on page one or two. For a catalog that size that is a large amount of traffic sitting unclaimed.

Hand-optimizing that many pages is not realistic for a team your size. Programmatic SEO is. I made a short video showing three category templates on your site and what changing them would do. Want it?

{sender_name}, InteractOne

**Email 2 — Day 3**
Subject: re: {sku_count} product pages on {company}

The three template-level issues:
1. {technical_issue_1}
2. {technical_issue_2}
3. {technical_issue_3}

Fixing these at the template level updates thousands of pages at once. That is the whole point of programmatic SEO and it is the part most content agencies cannot do because it is a development job.

Reply "send it" for the video.

{sender_name}

**Email 3 — Day 7**  *(Tier 1: Loom)*
Subject: how we scaled organic for a catalog like yours

We handle catalogs with high SKU counts, frequent changes, fitment data, and custom pricing. Recent results for a large-catalog client: bounce rate down 88 percent, pages per session up 57 percent, and 400-plus "not found" errors cut by 90 percent.

We are 27 years in, 250-plus brands, US-based senior team. 20 minutes to look at your category structure?

{sender_name}

**Email 4 — Day 14**
Subject: the part your Google Ads bill is hiding

Right now paid is covering for the category pages that should rank on their own. That works until a core update or a budget cut. Owning the organic version of your top category terms is a one-time build, not monthly rent.

Video still on offer.

{sender_name}

**Email 5 — Day 18**
Subject: closing the loop

Last note from me. If scaling organic with the catalog becomes a priority, the teardown offer is open. Reply and I will record it for {company}.

{sender_name}

---

## 5. Persona C sequence — Revenue / rented traffic (H3)

**Email 1 — Day 1**
Subject: organic vs paid at {company}

Hi {first_name},

From the outside it looks like {company} is running roughly {paid_kw} paid keywords while organic has been flat for about a year. That means most of the search revenue is rented, and the rent goes up every year.

I recorded a short video on your top five paid terms and what the organic version would take to win. Want me to send it?

{sender_name}, InteractOne

**Email 2 — Day 3**
Subject: re: organic vs paid at {company}

Three things on {company} that are keeping those terms paid-only:
1. {technical_issue_1}
2. {technical_issue_2}
3. {technical_issue_3}

None of them are content problems. They are technical, which is why they have not been fixed. Reply "send it" for the walkthrough.

{sender_name}

**Email 3 — Day 7**  *(Tier 1: Loom)*
Subject: a number for the board deck

Clients usually want organic framed as a defensible revenue line, not a traffic stat. One B2B client saw 73 percent revenue growth after we rebuilt organic alongside their paid program.

InteractOne is US-based, senior-only, 27 years, Adobe and BigCommerce partners. Worth 20 minutes?

{sender_name}

**Email 4 — Day 14**
Subject: what happens on the next core update

The risk with a paid-heavy, flat-organic setup is that one algorithm change spikes CAC with no organic cushion. The fix is not fast but it compounds. Every month you wait, competitors bank rankings you will have to take back later.

Teardown video still available.

{sender_name}

**Email 5 — Day 18**
Subject: closing the loop

I will leave it here. If reducing paid dependence moves up the priority list, reply and I will record the teardown for {company}.

{sender_name}

---

## 6. LinkedIn touches (`atomic-message`)

- **Day 0 connection request:** no note (higher accept rate).
- **Day 4 engagement:** a substantive comment on the contact's or company's most recent post. Never "great post".
- **Day 10 DM:**
  > Hi {first_name}, I sent a couple of notes about {company}'s organic {situation}. No agenda, I just put together a short teardown video for you showing three specific issues and what they cost. Want me to drop the link here?
- **Tier 1 only, Brian Dwyer co-sign:** after a positive-but-cold reply, Dwyer sends a one-line LinkedIn note: "Saw {sender} connected you with the teardown. 27 years doing this for industrial catalogs, happy to answer anything directly."

---

## 7. The teardown video (the core amplifier, not optional)

**Format:** 3-5 minutes, Loom, screen-share of the prospect's site.
**Script skeleton:**
1. (10s) "Hi {first_name}, {sender} at InteractOne. You did not ask for this, here is a quick teardown of {company}'s organic setup. No pitch."
2. (60s) Issue 1 on screen, show it live, explain the impact in plain terms.
3. (60s) Issue 2.
4. (60s) Issue 3.
5. (30s) "Rough math, this is about {traffic_gap_dollars} a month in organic you are not capturing. Two of these are quick, one is a bigger project. If you want the ranked fix list, reply or grab time here: {calendar_link}. Either way the video is yours to share internally."

**Rules:** always show the real site. Always give a number. Never more than 3 issues. End with "yours to share internally" (gets it forwarded to the buyer).

---

## 8. Sending infrastructure

| Item | Spec |
|---|---|
| Sending domains | 2 dedicated cold domains (e.g. `try-interactone.com`, `interactone-team.com`). Not the primary `interactone.com`. |
| Mailboxes | 2 per domain = 4 mailboxes. Google Workspace or sequencer-native. |
| Warmup | 3 weeks minimum before real sends. Sequencer warmup pool on. |
| Volume | 20-25 new contacts/mailbox/day = ~80-100/day total at full ramp. Start at 20/day week 1, ramp weekly. |
| Throttle rule | If positive replies > 8 in a week, cut new sends 50% the next week. |
| Schedule | Tue-Thu, 7-10 AM prospect local time. No Mon/Fri. |
| Auth | SPF, DKIM, DMARC on all domains. Custom tracking domain. Link to landing page, not raw calendar in Email 1-2. |
| Unsubscribe | One-line plain-text opt-out in every email. Honor within 24h, sync to DNC. |

---

## 9. Pre-launch simulation (`email-response-simulation`)

Run every generated email through 3 persona reviewers before it sends. Reject and regenerate if any of these are true:
- Reads generic (could be sent to any company)
- Opens with "I" instead of their situation
- Contains an em-dash or a hype word
- More than one ask
- The technical issue is vague ("your SEO could be better") instead of specific
- The dollar figure is missing
- Over 120 words

---

## Layer 3 completion checklist

- [ ] Email prompt template loaded, all variables mapped
- [ ] 3 sequences generated for Tier 1 (personalized) and Tier 2 (semi)
- [ ] LinkedIn touches drafted for every contact
- [ ] Teardown videos recorded for the first 20 Tier 1 accounts
- [ ] Domains warmed, auth verified, landing page live
- [ ] Simulation pass complete, rejects regenerated
- [ ] Pre-send checklist approved by InteractOne
- [ ] Campaign uploaded to sequencer, NOT auto-activated (human hits go)

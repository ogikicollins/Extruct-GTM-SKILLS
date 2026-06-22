# VPSales_v1 — Standard New VP Sales Sequence
> Variant: `VPSales_v1`
> Persona: Persona 3 — New VP Sales / Head of Sales
> Trigger: H5 confirmed | No LinkedIn pain post | No compound signal
> Emails: 5 | Duration: 22 days
> Sending name: Aaron Shepard (Tier 1) / SDR name (Tier 2)

---

## What This Sequence Is Doing

The new VP Sales is 15–45 days into a role they walked into with expectations already set.
They've seen the full reality of what they inherited. The board timeline hasn't moved.
Every day they spend evaluating whether to rebuild the infrastructure is a day they're not building it.

This sequence does one thing: demonstrate we understand that situation more precisely than anyone else they've heard from. We're not pitching. We're pattern-matching. The prospect should read Email 1 and think "how does this person know exactly what day 22 feels like?"

---

## Email 1 — Pattern Recognition
**Send: Day 1 (day of Email 1 send, after pre-engagement complete)**
**Subject: `Day {{days_in_role}} — {{company_name}}`**

```
{{first_name}},

Day {{days_in_role}} usually looks like this:

You know what the team inherited. You can see how the current motion actually performs vs. what the dashboard says. And you're quietly doing the math on whether the existing infrastructure gets you to where you need to be by month three.

I've spent three years watching new sales leaders at {{company_size}} B2B companies work through exactly that math.

The ones who move fast on infrastructure in the first 45 days almost always hit their early targets. The ones who wait to be sure before acting rarely do.

Nothing to sell here. Genuinely curious — is the infrastructure the problem, or is it what's feeding the infrastructure?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 109**
**CTA: A question. No meeting ask. The reply IS the conversion.**
**Why it works: The day count in the subject is too specific to be a template. The observation in the body is too accurate to be ignored.**

---

## Email 2 — Proof Point
**Send: Day 4**
**Subject: `What {{proof_person}} walked into`**

```
{{first_name}},

{{proof_person}} joined {{proof_company}} as {{proof_role}} and found a nearly identical setup to what you have at {{company_name}} — {{proof_situation}}.

The SDR team was working. The sequencer was running. The reply rates weren't.

We didn't change the headcount or the tools. We changed the intelligence layer — who they were targeting, what signal was triggering each outreach, and what the message was actually addressing.

{{proof_outcome}}.

If the first 90 days at {{company_name}} are on a short clock, I can walk you through what that rebuild looked like — specifically the part that moved the number.

Worth 20 minutes?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Word count: 111**
**CTA: Meeting ask appears here for the first time. We've earned it.**
**Why it works: Named person, named company, specific situation match, specific outcome. No vague "our clients see results."**

---

## Email 3 — Show, Don't Tell (Loom)
**Send: Day 8**
**Subject: `4 minutes, recorded for {{company_name}}`**

```
{{first_name}},

I put together a short walkthrough specifically for {{company_name}}.

It covers three things: what the outbound motion at a {{company_size}} company with {{sdr_count}} SDRs typically looks like in months one and two under new sales leadership, where the leverage usually lives, and what {{proof_company}}'s trajectory looked like after we rebuilt the intelligence layer.

{{v_loom_url}}

No slides. No product demo. Just what's actually relevant to your situation right now.

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 83**
**Dependency: `{{v_loom_url}}` is auto-populated by `ai-personalization` skill (HeyGen API) for reply_prob ≥ 70 contacts, or by `video-outreach` skill for all Tier 1. If video not ready by Day 8, Instantly auto-substitutes the text fallback version of Email 3 — never send with blank URL.**
**Why it works: Short email, high-specificity subject, pre-empts "I don't want a product demo" objection.**

---

## Email 4 — Challenger Insight
**Send: Day 15**
**Subject: `The audit most new VPs skip`**

```
{{first_name}},

Most new sales leaders audit the team first. Then the pipeline. Then the messaging.

The one that almost always gets skipped: ICP definition.

At {{company_size}} with {{sdr_count}} SDRs on {{sequencer_name}}, the sequences are probably not the problem. The targeting logic feeding them is. When ICP is off, you get activity that looks healthy — opens, connects, some replies — but converts at half the rate it should. It shows up as a messaging problem. It's almost never the message.

I'm not saying that's {{company_name}}'s situation. I'm saying it's worth ruling out before it costs you a quarter.

Want me to show you how we diagnose it in 48 hours?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 117**
**Why it works: Takes a clear, counterintuitive position. Uses their specific context (SDR count, tool). The question is specific and low-commitment — "diagnose," not "buy."**

---

## Email 5 — Graceful Exit
**Send: Day 22**
**Subject: `Closing the loop, {{first_name}}`**

```
{{first_name}},

I've sent a few emails now. Either the timing's off, you're heads-down in month two, or this just isn't the priority right now — all of which make complete sense.

I'll stop after this one.

If the outbound infrastructure at {{company_name}} becomes the thing that needs solving — this quarter or next — I'm easy to find. {{sender_name}}, SELLL.io.

One thing I'll leave you with: {{proof_person}} almost didn't take the call. He was convinced he could figure it out internally. Twelve weeks later, {{proof_company}} {{proof_outcome}}.

Good luck with the build, {{first_name}}.

{{sender_name}}
```

**Word count: 97**
**Why it works: No desperation. No "last chance." Treats the prospect like an adult. The final proof callback is the parting shot — not a pitch, just a fact they'll remember.**

---

## SDR Operating Notes

**Before Email 1 sends:**
- Confirm pre-engagement (T−3 follow, T−2 like) is complete
- Verify `{{days_in_role}}` is accurate — recheck if more than 5 days have passed since enrichment
- Confirm `{{proof_situation}}` is filled from proof-library.md

**Before Email 3 sends:**
- `v_loom_url` is auto-generated by `ai-personalization` skill (HeyGen) for reply_prob ≥ 70 contacts — no action needed
- For reply_prob < 70 Tier 1 contacts: `video-outreach` skill generates HeyGen video automatically
- Optional manual Loom override for reply_prob > 85 HOT contacts: see `video-outreach/SKILL.md` → Step 4
- Verify `v_loom_url` column is populated before Day 8 — Instantly uses fallback text if blank

**When any email gets a reply:**
- Route immediately using `brain/reply-routing.md`
- Log in account card `engine/accounts/[company-slug].md`
- If HOT → notify Aaron within 2 hours
- Pause all threads for that company until Aaron has reviewed the reply

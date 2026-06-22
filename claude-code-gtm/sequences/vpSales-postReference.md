# VPSales_PostReference â€” LinkedIn Post Reference Sequence
> Variant: `VPSales_PostReference`
> Persona: Persona 3 â€” New VP Sales / Head of Sales
> Trigger: H5 confirmed | Contact has a relevant recent LinkedIn post | No compound signal
> Emails: 5 | Duration: 22 days
> Sending name: Aaron Shepard (Tier 1) / SDR name (Tier 2)

---

## What This Sequence Is Doing

The prospect wrote something on LinkedIn that reveals exactly where they are â€” their frustration, their observation, their internal diagnosis of what's wrong.

We use their words as the foundation of the entire relationship. Not as a manipulation tactic. As evidence that we listened before speaking.

Most cold emails that reference LinkedIn posts do it badly: "I saw your post about X â€” really interesting! We help companies like yours..." This sequence does the opposite. We quote them precisely, then show that we understand the deeper implication of what they wrote â€” something they may not have articulated even to themselves.

**Key rule:** `{{previous_signal}}` must be a direct quote from their post, not a paraphrase. If the quote is longer than 8 words, trim to the most striking phrase. The subject line contains the quote verbatim.

---

## Email 1 â€” Their Own Words
**Send: Day 1 (after pre-engagement complete)**
**Subject: `"{{previous_signal}}" â€” {{company_name}}`**

```
{{first_name}},

You wrote "{{previous_signal}}" last week.

Most people who write that haven't yet figured out whether the problem is the team, the tools, or what's feeding both.

I've worked with new sales leaders at {{company_size}} companies in this exact position â€” the systems weren't built for the stage they're now at, and the window to rebuild them is narrow.

Not pitching anything. Just curious: when you wrote that, was the "untangling" mostly about targeting and sequence logic â€” or more about the team itself?

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 98**
**CTA: A diagnostic question. Either answer gives intelligence for Email 2 follow-up. The question also signals we understand the difference between infrastructure problems and people problems â€” which is non-obvious to most vendors.**

---

## Email 2 â€” The Underlying System
**Send: Day 4**
**Subject: `The infrastructure behind what you described`**

```
{{first_name}},

The situation you wrote about â€” {{previous_signal}} â€” is almost always the same thing underneath when you peel it back.

The ICP was defined 18 months ago for a different stage. The sequencer is running what the previous team set up. The SDRs are following a playbook written for a company half your current size.

{{proof_person}} described it the same way when he joined {{proof_company}} as {{proof_role}}. We rebuilt the intelligence layer â€” targeting logic, signal selection, message architecture â€” without touching the team or the tools.

{{proof_outcome}}.

I can show you exactly what that build looked like. Worth 20 minutes?

{{sender_name}}
{{sender_title}} | SELLL.io
{{calendar_link}}
```

**Word count: 110**
**Why it works: Their post quote is used again as the anchor â€” we're still in their frame, not ours. The proof point is introduced as someone who described the same thing.**

---

## Email 3 â€” Show, Don't Tell (Loom)
**Send: Day 8**
**Subject: `What the rebuild looks like â€” 4 min`**

```
{{first_name}},

Following up on what you wrote about {{previous_signal}}.

I recorded a short walkthrough for {{company_name}} â€” what the intelligence rebuild typically looks like at a {{company_size}} company with {{sdr_count}} SDRs, and what the trajectory at {{proof_company}} looked like 60 days in.

{{v_loom_url}}

Nothing to buy. Just the thing I'd want to see if I were in your position right now.

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 74**
**Why it works: Short, specific, references their original post. The "nothing to buy" line at this stage of the sequence is earned â€” we haven't pitched, so the line has credibility.**

---

## Email 4 â€” The Implication
**Send: Day 15**
**Subject: `The thing that usually lives behind "{{previous_signal}}"`**

```
{{first_name}},

When sales leaders write about "{{previous_signal}}", they're usually describing one of two situations.

Option A: The infrastructure is the problem. Wrong ICP, wrong signal selection, sequence built for a different buyer. Fixable in 30â€“45 days with the right rebuild.

Option B: The team itself needs replacing. Takes a quarter, expensive, politically difficult.

In our experience, it's Option A about 70% of the time. The team gets blamed for a problem the infrastructure created.

Worth figuring out which one you're actually in before the quarter closes â€” especially at Day {{days_in_role}}.

One slot available this week: {{calendar_link}}

{{sender_name}}
{{sender_title}} | SELLL.io
```

**Word count: 110**
**Why it works: Takes a clear position (Option A vs. B). Gives them a framework they can use immediately. The "70% of the time it's A" is a specific, memorable claim. The day count callback in the last line closes the loop on the arc.**

---

## Email 5 â€” Graceful Exit
**Send: Day 22**
**Subject: `Last one, {{first_name}}`**

```
{{first_name}},

Last email from me.

"{{previous_signal}}" was the reason I reached out. What you wrote matched almost exactly what we've heard from every VP Sales in month one who's gone on to build something that works.

If the infrastructure becomes the focus and you want to see what a rebuild looks like in practice â€” I'm easy to find. {{sender_name}}, SELLL.io.

Good luck with the untangling.

{{sender_name}}
```

**Word count: 72**
**Why it works: The shortest email in the sequence. By Email 5, less is more. The callback to "untangling" (their own word) makes this feel personal, not templated. No desperation, no urgency manufacturing.**

---

## SDR Operating Notes

**Before Email 1 sends:**
- `{{previous_signal}}` must be filled with a DIRECT QUOTE from their LinkedIn post
- Find the post: navigate to their LinkedIn profile â†’ Activity â†’ Posts â†’ find the most recent relevant post
- If the post is about GTM, pipeline, outbound, SDR management, or sales leadership â†’ use it
- If no relevant post exists â†’ switch to `VPSales_v1` variant instead. Never force a post reference.
- Quote format: use the exact phrase (3â€“8 words). If the full quote is longer, edit to the sharpest phrase.

**Example good quote:** "lots to untangle" / "starting from scratch on the outbound side" / "building the plane while flying it"
**Example bad quote (too generic):** "excited to join" / "great opportunity ahead" / "looking forward to the journey"

**After Email 1 sends:**
- If they reply to the question â†’ route per reply-routing.md
- If they don't reply â†’ Email 2 proceeds on schedule
- Do NOT reference the post in Email 2 if they replied about something else â€” follow their thread

# Structural Chat — Battle Card
CSM: Collins Ogiki  ·  Client: Paul Chiusano (Structural Chat / Unison Computing)
Received 2026-07-16. Source of truth for SDR call scripts, objection handling, and qualifying questions.

---

## Company Snapshot

| Field | Value |
|---|---|
| Brand | "Structural" / "Structural Chat" |
| Parent company | Unison Computing (unison.cloud) — a 4-person company. Structural Chat is the new product, roughly 2 months old as of 2026-07-16. |
| Location | New Orleans (normal base); Paul is in Boston through July 2026. Scheduling operates on Eastern time throughout regardless of physical location. |
| Website | structural.chat |
| Calendar | Paul Chiusano's Calendly — booking link on file |
| Confirmation sender | Hello@meetingconfirmation.net |
| Dialer / CRM | Nooks. Current dispositions in use: Busy, Meeting Booked |

---

## Cold Call Opener

> "Hi, is [ ] available please? This is [ ] with Structural Chat, do you have 30 seconds for a quick call?"

> "We build custom support that handles your highest-volume, most repetitive customer requests, like billing questions, scheduling, or account changes. Because these are custom builds, they integrate within your existing systems."

> "Just curious, how does your team currently handle support tickets and high volume requests?"

*[Listen, react to their answer]* "Interesting. Structural Chat builds support for companies that get the same customer requests over and over: paying a bill, rebooking a flight, updating an account. I thought we could do something similar for you. Do you have a few minutes for a quick intro call with my director on ___ or ___?"

**Note on wording:** "custom agents" appears in the opener. Worth a light gut-check against the AI-framing test below, since "agents" is closely associated with AI-agent terminology in the current market and could blur the differentiation if a prospect hears "agent" and assumes LLM-based.

**Calendly description:** "A no-pressure conversation to determine whether our Structural.Chat bots are worth exploring for your company. We will talk about how support works for you today and show how our approach is different."

---

## Qualifying Questions

1. Are you currently hiring for customer support roles? (Yes = clear spend signal. If no, is it in the works for the future?)
2. Roughly how much of your support volume is the same handful of requests coming in over and over?

## More-Information Questions

- What share of your tickets get escalated to someone more senior or technical?
- Where do customers interact with you today — website, mobile app, or both?
- Do customers get self-serve options today, or not?
- How often do bots or AI give wrong answers now? (about their current tools, not ours)
- Do you operate in a regulated space — healthcare, finance?
- Would keeping data on your own systems matter to you?
- How do you handle handoffs from bot to human?
- How fast do you need something like this live?
- Any past issues with AI or chatbot vendors?
- Is branded, on-site UI important versus a generic widget?
- Do multi-step or long conversations come up often?
- Would offsetting a support rep's cost be meaningful?

## Re-Engagement Questions

- Is most of it going through a live team, or do you have any automation in place?
- Still handling support requests manually today?
- Do you often see handfuls of requests piling up?
- Ever thought about support automation plans?
- Is timing better to reconnect this week?
- Do you often see the same billing/account questions daily?
- How long does a typical chat or ticket take to resolve right now?

---

## Titles to Target

Chief Customer Officer / Chief Experience Officer, COO / CEO, Head of Product / Chief Product Officer, Sr. Director of Support Operations, Director of Client Services / Director of Customer Success, Member Experience Lead / Manager of Customer Support & Success. At Series A/B startups: co-founder titles.

**Rule of thumb:** the highest title that owns (or clearly routes to) the support function.
**Departments:** Customer Support / Customer Experience / Operations / Founding Team
**Avoid:** Engineering / technical roles.

---

## ICP / Qualification (matches account card's OFFICIAL ICP)

- Location: United States (primary)
- Employee count: ~10-1,000
- Revenue: Primarily <$50M ARR / Series A-B. Larger is fine if actively evaluating bots or unhappy with an existing deployment.
- Industries: Property management & residential real estate; mortgage & loan servicing; healthcare & telehealth; online pharmacy; online dermatology & specialty telehealth; utilities & telecom; broadband & cable ISPs; travel & hospitality (budget airlines, OTA/booking, car rental, cruise); fintech / neobanks; subscription commerce & streaming.
- **Avoid: pure e-commerce (saturated for support bots).**

**Sweet spot (new insight, 2026-07-16):** a domain with real support volume that's a little bespoke/custom — property management is the card's own example. Off-the-shelf e-commerce bots already exist and are commoditized, which is exactly why e-commerce is excluded: no wedge there. Bespoke-support domains can also be a one-to-many sale (similar bot pattern reusable across many similar companies in the same vertical, e.g. property management firms).

**Cross-reference:** the Seamless.ai lead-filters doc separately flags fintech/financial operations as the *prioritized* segment per portfolio-pattern analysis. That's not a contradiction with the "sweet spot" framing here, property management is this card's illustrative example, not a claim that it outranks fintech, but worth being aware both signals exist when weighting list volume by vertical.

---

## Objections & How to Handle

**"We already have a bot / support automation."** This is the top objection surfaced in the field (7/16 sync), and Paul flagged the exact same risk in writing back on day one, with a full framework that hadn't made it into this card until now. Use his own approach:

*The split that matters:* a prospect with an existing bot is either **displacement-ready** (unhappy with it, cases still slipping through) or **defended** (happy with it, proud of the rollout). The first is a real opportunity. The second is a hard sell right now, don't force it, log it as a later re-engagement candidate instead.

*Diagnostic questions (Paul's exact language):* "Are all of your support cases getting handled automatically by the chatbot you've rolled out?" If no: "What are some that are slipping through?" Then: "Would you be interested in learning more about a next-gen support bot which can handle many more support cases, with perfect reliability?"

*The reframe, once you know it's displacement-ready:* "We can replicate the capabilities of any bot you already have deployed, and we build custom bots very quickly, often in as little as a week or two." Not a like-for-like swap pitch, an upgrade pitch.

*Why this objection exists at all (useful context, not a script line):* most support automation fails because customers don't trust the bot, it made a mistake once or has limited capabilities, so people learn to skip straight to "representative." Structural's answer is reliability plus instant feedback plus a smooth, in-context escalation to a human for anything outside its vocabulary, so trust never breaks down in the first place.

*Operational note:* there's no way to pre-screen for "has a competing bot already" during list-building (confirmed limitation, not a tooling gap to chase), so this lives entirely in call-time talk track discipline. Tight objection handling here matters more than list filtering for this specific risk.

**SOC 2 / HIPAA / compliance:** Not SOC 2 certified yet. For sensitive use cases, the bot deploys on the client's own infrastructure, no data is sent to Structural Chat or any AI/model provider, which usually neutralizes HIPAA and data-privacy concerns. **Don't promise certification.** If compliance is the only blocker, flag it and route specifics to Paul.

**"No LLMs, how does it actually work?"** It uses a fast, deterministic natural-language technique (NLDs, natural language disambiguators) to match what a user types to a defined set of commands, then runs ordinary, reliable code to complete the task. No model "guessing," so no hallucinations. Turn deep technical questions into a meeting with Paul.

**"Everyone says they use AI."** The differentiator is the opposite of an LLM wrapper. **This is explicitly framed two ways, and both are live options being tested:** "no LLM/AI" OR "a new, lightweight, 100% reliable type of AI that isn't LLMs." Avoid generic "AI chatbot" positioning either way. **Flag for the team:** confirm which framing is currently landing better, since prior outbound copy built for this account committed to the pure "no AI" framing as if it were the only option.

**Mobile?** Yes, embeds in a website or mobile app. A fully native app build takes a little extra work but won't hold up a deal.

**"Can it integrate with X?"** Almost always yes, bots are custom-built, so a bit of custom integration code is part of the engagement.

---

## Product & Pricing (Structural's own product, not the OSP contract)

**Do not confuse this with the OSP/Parakeet subscription contract value, which is a separate, still-unknown dollar figure.** This is what Structural charges its own customers.

| Field | Value |
|---|---|
| Value prop | Fully custom, 100% reliable support automation bots. No LLMs, no hallucinations. Reduces support ticket/call volume (see caution below on stating this as a claimed result). Faster resolution, a UX customers like. Live in as little as weeks, with a free custom demo. |
| Pricing | Roughly $3,000-$5,000/month. Open to creative terms for early adopters. |
| Pricing anchor | "Will it do the work of at least one support rep?" — yes. |
| Speed | Typically live in 1-2 weeks, built bespoke per business. |
| Escalation | Hands off to a human mid-flow with full conversation context, then can resume automation after. |

**Caution on the "up to 80%" volume-reduction figure:** treat this as an industry pattern (60-80% of tickets are typically repetitive) the bot is built to address, not a demonstrated Structural Chat result — there are no live clients yet to have produced that outcome. See the correction already applied in `STRUCTURAL-OUTBOUND-EMAIL-COPY.md`'s post-call follow-up section.

**Best-fit timing:** catch companies before they've deployed automation, or while they're actively researching it. Hardest to win: companies proud of an existing deployment, even a poor one, since displacing an emotional/sunk-cost attachment is harder than filling a gap.

**Top pains this sells against:**
- High volume of repetitive structured requests (order/status tracking, billing, scheduling)
- Existing chatbots hallucinate and erode trust
- Compliance/privacy risk of sending data to third-party LLMs
- Support exists but is buried, so customers call instead of self-serving
- LLM bots only give instructions instead of actually taking action

---

## Call Scripts (reference framing, not a script to read verbatim)

Three levels of sophistication for explaining the product on a call.

### 1. Elementary-school level
When you buy a plane ticket or pay a bill online and you have a question, you usually have to wait on the phone or type with someone for a long time. Structural Chat builds a little helper that lives on a company's website or app and answers those questions right away. You just type what you need in your own words, and it figures out what you mean and does it for you in a few seconds.

The helper never guesses or makes things up, because it follows the exact same steps every single time, like a recipe. If something is too tricky for it, it hands you to a real person without making you start over. It only takes a week or two to build, and it's made special for each company so it fits exactly what their customers ask about.

### 2. High-school level
Structural Chat builds custom support automation for companies that get the same customer requests over and over, things like paying a bill, rebooking a flight, or updating an account. Instead of making people wait for a live agent, the tool drops onto the company's site or app and lets customers handle those tasks themselves in about thirty seconds, with a clean, guided experience rather than a wall of text.

What sets it apart is that it does not rely on the kind of AI that can give wrong answers, it runs on fixed, reliable logic, so the outcome is the same correct result every time. For companies in areas like healthcare, finance, or mortgages, it can run entirely on their own systems so no private data leaves the building. When a request is too complex, it passes the conversation to a human with the full context already attached.

*(Note: this level explicitly uses the word "AI," qualified as "not the kind that gives wrong answers" — consistent with the second framing option in the objections section above, not the pure no-AI framing.)*

### 3. Industry-knowledge level
Structural Chat delivers bespoke, deterministic support-automation bots that deflect the high-volume, structured tickets clogging support queues, order status, billing, scheduling, account changes, payment and rebooking flows, and resolve them conversationally in seconds. Rather than an LLM wrapper, the bots use a fast natural-language layer to map free-text intent onto a defined command vocabulary, then execute the underlying workflow in ordinary code. The result is zero hallucination, full reproducibility, and a clean audit trail on every interaction.

Because each engagement is custom, integrations and branded UI are part of the build, and deployment can sit on the client's own infrastructure so no PHI or sensitive data is ever sent to a third-party model provider, a strong fit for regulated domains like telehealth, online pharmacy, mortgage servicing, and fintech. Multi-party, long-running flows and mid-conversation human escalation are supported, the system is immune to prompt injection, and a typical bot goes live in roughly one to two weeks at a price point that offsets at least one full support rep.

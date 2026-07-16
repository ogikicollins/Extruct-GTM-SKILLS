# Structural (structural.chat) — TAM Analysis, Market Mapping & GTM Strategy
### Built by Extruct GTM Engine | July 2026 | Outbound-Led, Vertical-Wedge Motion

> **CORRECTION (2026-07-16):** This document was built from independent market research on 2026-07-15, before the account's official handoff doc and ICP were available. Its Tier 1 recommendation (e-commerce/DTC as the lead vertical) is **not part of Structural's actual target market** and should not be used for list-building or targeting. The authoritative ICP — property management, mortgage/loan servicing, healthcare/telehealth, online pharmacy, dermatology telehealth, utilities/telecom/broadband, travel/hospitality, fintech/neobanks, and subscription commerce, <$50M ARR/Series A-B, US, with a specific title list — is recorded in `claude-code-gtm/engine/accounts/structural-chat.md` under "OFFICIAL ICP." The TAM/SAM/SOM market-sizing and competitive-map sections below are still directionally useful; only the tactical Tier 1-3 targeting table is superseded.

---

## EXECUTIVE SUMMARY

Structural is a contrarian bet in a market that has gone all-in on agentic LLMs. Built by the team behind Unison Computing (the Unison programming language, functional-programming pedigree, Paul Chiusano et al.), Structural builds custom support bots that use **no LLM at runtime** — deterministic code + instant natural-language parsing instead of a prompted model that can hallucinate, get prompt-injected, or take five seconds to "think." The pitch is narrow and sharp: *the bot never makes things up, and it never gets tricked.*

That is a real, defensible wedge — but right now it is an invisible one. There is no pricing page with real numbers, no published customer, no LinkedIn company presence, no case study. The product is technically excellent and commercially unfound. This is greenfield GTM, not GTM optimization.

**The core thesis: Do not compete with Decagon ($4.5B) and Sierra ($15.8B) on "AI agent" positioning — they will win that fight on capital, brand, and feature breadth every time. Compete on the one axis they structurally cannot match: zero-hallucination guarantees for bounded, high-liability workflows.** Win a beachhead of companies where a wrong answer costs real money (wrong refund, wrong policy status, wrong booking change) or real legal exposure, prove it with 3-5 lighthouse accounts in one vertical, then expand.

**Revenue Target (Year 1):** $250K–$600K ARR (realistic for a 2-4 person, founder-led, bespoke-build team)
**Primary Motion:** Founder-led outbound + technical content (leveraging existing Unison engineering credibility)
**Secondary Motion:** Vertical wedge in e-commerce/DTC post-purchase support, expanding to fintech/insurtech account admin
**Avg. Deal Size:** $6K–$25K setup (1-week custom build) + $500–$3K/month platform fee
**Sales Cycle:** 2–4 weeks (mid-market, no procurement layer) — this speed is the actual competitive advantage against enterprise-motion competitors

---

## PART 1: COMPANY & PRODUCT SNAPSHOT

| Dimension | Finding |
|---|---|
| Product | Custom LLM-free support bots — deterministic NLU that parses intent per-keystroke, executes real actions (order tracking, address changes, returns) inside the chat, escalates anything out-of-vocabulary to a human |
| Parent org | Unison Computing (public benefit corp) — makers of the Unison programming language, functional-programming / distributed-systems pedigree |
| Team signal | Small, elite engineering team (Paul Chiusano, Rúnar Bjarnason, Arya Irani background). No visible sales/marketing hires, no LinkedIn company page found. |
| Delivery model | Bespoke build, "in a week or less," matched to client vocabulary/branding — services-heavy, not yet self-serve |
| Pricing | Not credibly published (pricing page reads as unfinished/placeholder — three tiers all priced identically with no real feature differentiation). Effectively **unpriced** in the market today. |
| Funding/stage | No funding announcements found. Likely bootstrapped off Unison Computing's balance sheet/consulting revenue. Pre-seed-equivalent GTM maturity. |
| Content/proof | 6 technical articles (Mar–Jun 2026) arguing the LLM-free thesis — strong technical credibility, zero commercial proof (no logos, no metrics, no testimonials) |
| Stated target audience | E-commerce, airlines, "industries requiring high-stakes customer support" |
| Core differentiators | (1) Zero hallucination — deterministic code, not a prompted model. (2) Immune to prompt injection — no LLM to attack. (3) Instant response — NLU runs per-keystroke, no "thinking" latency. (4) Data stays on-prem/with Structural, never sent to a third-party model provider. (5) Handles multi-party, multi-day workflows, not just single-turn Q&A. |

**Read on the company:** This is a technically rigorous team that has built something genuinely differentiated but has not yet turned on a GTM engine. That is the opportunity — there is no incumbent playbook to unseat, no sales team to route around. It also means there is no proof asset to lean on yet; the first 90 days of GTM work *is* the proof-asset-creation phase.

---

## PART 2: MARKET LANDSCAPE & COMPETITIVE MAP

### The market has split into two camps

**Camp A — Agentic LLM support (the well-funded mainstream):**
Decagon ($4.5B valuation, $250M Series D, Jan 2026), Sierra ($15.8B, $950M Series C, May 2026), Intercom Fin, Ada, Crescendo, Forethought (acquired by Zendesk, Mar 2026), Yellow.ai, Gorgias AI. These compete on breadth of automation, "agentic" reasoning, and enterprise integration depth. Collectively they have raised well over $2B and are the default answer whenever a VP of CX says "we're adding AI to support."

**Camp B — Deterministic / rules-based (the old guard):**
Legacy IVR-style bots, decision-tree chat widgets (Intercom's original bot, Zendesk Answer Bot, Drift). These are reliable but rigid, ugly, and slow to build — usually requiring weeks of flowchart configuration by a non-technical admin.

**Structural sits in a gap between the two camps that neither serves well:** the reliability and safety of Camp B, delivered with the speed, UX polish, and real action-execution of Camp A — without the LLM's failure modes. No competitor is explicitly marketing "we removed the LLM on purpose." That message is currently uncontested.

### Competitive positioning map

| Axis | Decagon / Sierra / Fin (Camp A) | Legacy rules bots (Camp B) | **Structural** |
|---|---|---|---|
| Hallucination risk | Real, actively mitigated but not zero | None | **None** |
| Prompt injection risk | Real, publicly documented attack surface | N/A | **None (no LLM to attack)** |
| Response latency | 2-10s "thinking" delay common | Instant | **Instant (per-keystroke)** |
| Setup speed | Weeks-months, enterprise implementation team | Weeks, manual flow-building | **~1 week, custom-built for you** |
| Brand/capital | Massive ($2B+ raised collectively) | Established but stagnant | **Near-zero brand awareness** |
| Deal size / motion | Enterprise, 6-12mo sales cycles, procurement | SMB self-serve | **Mid-market, founder-led, fast cycle** |
| Best fit | Broad, open-ended support automation at scale | Simple FAQ deflection | **Bounded, high-liability, action-oriented workflows** |

### Why this gap is winnable right now

1. **The hallucination backlash is a live news cycle.** AI support bots giving wrong refund policies, inventing discount codes, or confirming cancellations that never happened are now a recurring PR story. Every one of those stories is a pre-written outbound hook for Structural — "here's what happened to [competitor/peer], here's why it structurally can't happen with us."
2. **Prompt injection against support bots is a documented, growing attack class.** Structural's "immune by design" claim is a security/compliance angle that plays directly to fintech, insurance, and healthcare buyers who have a security review step Decagon/Sierra have to survive and Structural sails through.
3. **The mega-funded players are enterprise-motion by necessity** (they need $4.5B-valuation-sized logos to justify the valuation). That structurally leaves the entire mid-market — 50-500 employee e-commerce, fintech, travel, and logistics companies — underserved and reachable by fast, direct outbound before Decagon's enterprise AE ever calls them.

---

## PART 3: TAM / SAM / SOM ANALYSIS

### TAM — Total Addressable Market: $15.1B (2026) → ~$92B–$118B by 2033/34

The global AI-in-customer-service market is sized at roughly **$15–19B in 2026**, growing at a ~25% CAGR toward **$92–118B by 2033-2034** (estimates vary by scope — narrower "AI customer service" definitions land near $15B; broader "AI in customer experience" definitions that include sales/marketing touchpoints exceed $117B by 2030). This is the full universe of every dollar spent on AI-assisted customer support software globally, across every vendor, every industry, every company size — the number Decagon and Sierra are chasing.

**Why this number is the wrong number to plan around:** it's dominated by enterprise agentic-AI spend that Structural cannot compete for at its current size, stage, and delivery model (bespoke, week-long builds by a handful of engineers). TAM tells you the category is real and growing; it does not tell you where Structural can actually win.

### SAM — Serviceable Addressable Market: companies where determinism is a *requirement*, not a *preference*

SAM narrows TAM along the one axis that matters for Structural's actual differentiation: **industries and workflows where a wrong or hallucinated answer carries direct financial, legal, or safety cost** — meaning reliability isn't a nice-to-have feature comparison, it's the buying criterion.

**Vertical segments inside SAM, ranked by fit:**

| Segment | Why determinism matters here | Est. company count (mid-market, English-speaking markets) |
|---|---|---|
| **E-commerce / DTC** | Wrong refund amount, wrong return window, invented discount code = direct P&L loss and fraud exposure. High support volume, bounded workflows (order status, returns, address change, subscription pause). | ~15,000–25,000 mid-market brands (Shopify Plus + BigCommerce Enterprise + Magento tier, $10M–$500M GMV) |
| **Fintech / Neobanks / BNPL** | Wrong dispute status, wrong balance info, wrong KYC instruction = compliance and legal exposure. Regulator scrutiny on AI-generated financial guidance is intensifying. | ~3,000–5,000 mid-market fintechs (US/UK/EU) |
| **Insurtech** | Wrong claim status or coverage explanation = E&O liability. Bounded, well-defined workflows (claims status, policy admin, document requests). | ~1,500–2,500 mid-market insurtechs/MGAs |
| **Travel / OTAs / booking platforms** | Wrong cancellation policy or rebooking confirmation = chargebacks and legal exposure. Structural explicitly names "airlines" but full airlines are enterprise/too slow — the real near-term fit is OTAs, vacation rental platforms, ticketing platforms. | ~2,000–4,000 mid-market travel/booking companies |
| **Logistics / last-mile delivery** | Wrong delivery reschedule or damage-claim status = customer churn and dispute cost. Multi-day, multi-party workflows (exactly what Structural claims to handle). | ~2,000–3,000 mid-market logistics/delivery platforms |
| **Healthcare admin (non-clinical)** | Wrong appointment/billing/insurance-status info = compliance risk. Must stay non-clinical (no diagnosis-adjacent claims) to avoid regulatory complexity Structural isn't built for. | ~1,500–2,500 mid-market healthtech/admin platforms |

**SAM estimate: roughly 25,000–40,000 addressable companies globally**, with the US as the primary near-term market (English-first NLU, no GDPR complexity for the on-prem/data-handling pitch).

At an average realized deal value of ~$15K setup + $1.5K/month ($33K blended Year-1 value per logo), full SAM penetration is a multi-billion-dollar ceiling — confirming this is a real market, not a lifestyle niche. That number is irrelevant to near-term planning; it exists to show the vertical wedge strategy has room to run for years before Structural needs a second wedge.

### SOM — Serviceable Obtainable Market: what a 2-4 person team can actually close in Year 1

This is the number that should drive the plan. Constraints: bespoke ("week or less") delivery model, no sales team, no brand, no case studies, founder-led selling.

- **Realistic capacity:** a founder-led team can run ~2-4 active builds at a time at a 1-week build cadence → roughly **20-35 signed accounts in Year 1**, assuming outbound generates enough qualified pipeline (this is the actual bottleneck, not delivery capacity).
- **Focus on ONE vertical first.** E-commerce/DTC is the strongest starting wedge: largest company count in SAM, shortest sales cycle (no compliance/security review layer like fintech/insurtech), workflows are the most bounded and repeatable (order status/returns/address changes are near-identical across brands, meaning the second and third builds get faster), and Structural already names it as a target market.
- **SOM Year 1: $250K-$600K ARR**, concentrated in 15-25 e-commerce/DTC logos plus 5-10 early fintech/insurtech design partners to seed the second wedge.
- **SOM Year 2 (post-proof):** with 3-5 named e-commerce case studies + quantified hallucination-avoided / deflection-rate proof points, expand outbound into fintech and insurtech at 3-5x the Year 1 volume, and begin productizing delivery (templated build kits per vertical) to break the founder-led delivery ceiling.

---

## PART 4: IDEAL CUSTOMER PROFILE / TARGETING CRITERIA

### Tier 1 — Primary Target (70% of outbound effort): E-commerce & DTC, Post-Purchase Support

| Dimension | Specification |
|---|---|
| Company size | 50–500 employees |
| Revenue / GMV | $10M–$300M annual GMV |
| Support team | 3–25 person CX team, at least one dedicated CX/Support Ops leader (not founder answering tickets) |
| Platform | Shopify Plus, BigCommerce Enterprise, or Magento Commerce (identifiable via BuiltWith/similar tech-detection) |
| Support volume | 1,000+ support tickets/month — enough volume that hallucination risk and deflection ROI are both material |
| Current tooling | Gorgias, Zendesk, Intercom, or Re:amaze as helpdesk — actively invested in support infrastructure, meaning budget exists |
| Geography | US primary; UK/CA/AU secondary (English-first NLU) |

**Buying trigger events (watch for these, act within days):**
- A public complaint (Twitter/X, Reddit, review site) about an AI chatbot giving a wrong refund/return answer — at that company or a direct competitor
- Recent hire of a Head of CX / Director of Support Operations (mandate signal — new leader wants a fast, low-risk win)
- Q4/BFCM support-volume spike season approaching (Aug-Sept outbound window ahead of Nov-Dec crunch)
- Company publicly discussing return-fraud or discount-code-abuse problems (Structural's determinism directly solves "bot can't be tricked into issuing a code it shouldn't")

**Disqualifiers — stop here, move on:**
- Enterprise (2,000+ employees) — security review and procurement cycle will outlast a founder-led sales motion; also likely already has Decagon/Sierra in evaluation
- Sub-$5M GMV DTC brand — support volume too low for setup cost to pencil out
- Already live on Intercom Fin or Decagon with 6+ months tenure — high switching cost, wrong moment; log as later "hallucination incident" trigger-based re-engagement target instead of cold outbound now
- Support needs are genuinely open-ended/technical (e.g., SaaS product troubleshooting with unbounded issue variety) — this is Structural's structural weakness, not its strength

### Tier 2 — Secondary Target (20% of outbound effort): Fintech / Insurtech Account Admin

| Dimension | Specification |
|---|---|
| Company size | 30–300 employees |
| Stage | Series A-C fintech/insurtech, or profitable bootstrapped $5M+ revenue |
| Workflow fit | Bounded account-admin support only: card replacement, dispute status, document requests, policy/claims status — explicitly NOT underwriting, credit decisions, or advice (regulatory red line) |
| Compliance posture | Has (or is building) a security/compliance review function — this is where "no LLM, no prompt injection, data never leaves us" becomes the headline pitch, not a footnote |
| Trigger events | Recent security incident or audit finding involving a third-party AI vendor; SOC 2 / compliance renewal cycle; a competitor's AI support tool named in a breach or hallucination news story |

**Why Tier 2, not Tier 1:** longer sales cycle (security review adds 2-4 weeks), but higher deal value and stronger long-term differentiation moat once the e-commerce case studies exist to point to as proof of the reliability claim.

### Tier 3 — Opportunistic (10% of outbound effort): Travel/OTA & Logistics

Same logic as Tier 2 (bounded, multi-day, multi-party workflows are Structural's stated strength) but deprioritized until Tier 1 proof points exist, since these buyers will ask "who else has trusted you with this" and right now the honest answer is no one yet.

### Psychographic / behavioral qualifiers (apply across all tiers)

**Buys now because:**
- They've been burned (or are afraid of being burned) by an AI chatbot giving a wrong, embarrassing, or costly answer
- Their CX leader is evaluating "AI support" broadly and is skeptical of the agentic hype cycle — Structural's pitch validates that skepticism instead of fighting it
- They have bounded, repeatable support workflows and are tired of either (a) a rigid old-school bot that can't hold a real conversation, or (b) an LLM bot that's too unpredictable to trust with real account actions
- Brand matters to them — Structural's "matches your styling and vocabulary" pitch resonates with DTC brands whose support experience is part of the brand promise

**Red flags — will not close, don't waste outbound cycles:**
- "We just want the cheapest chatbot" — Structural is not the low-cost option, it's the reliability-premium option
- Wants open-ended conversational AI / general Q&A — the wrong tool for this job, refer out mentally
- No dedicated support/CX owner (founder still doing support personally at low volume) — too early, no budget, no urgency
- Already deep in enterprise procurement with an incumbent — wrong timing, park for later re-engagement

---

## PART 5: POSITIONING & MESSAGING

### The Positioning Statement

**For CX and Support Ops leaders at mid-market e-commerce, fintech, and travel companies** who need their support bot to execute real account actions without ever making one up, **Structural** is the custom-built support bot platform that **guarantees zero hallucination and zero prompt-injection risk by design** — because it doesn't use an LLM at runtime. **Unlike agentic AI platforms like Decagon, Sierra, or Intercom Fin**, which mitigate hallucination risk after the fact, Structural removes the failure mode at the architecture level — while still shipping in a week, matched exactly to your brand and vocabulary.

### Messaging hierarchy

**Cold prospect, no AI-support fatigue yet:**
> "The support bot that can't make things up — because there's no LLM to hallucinate."

**Prospect who's had (or fears) a bad AI-support experience:**
> "Every AI support bot eventually says something it shouldn't. Ours structurally can't — it only ever says what you told it to."

**Security/compliance-aware prospect (fintech, insurtech):**
> "No LLM means no prompt injection, no data sent to a third-party model, and no probabilistic behavior to explain to your auditor."

**Proof points to build and drop into every outreach/call (Year 1 priority: create these, they don't exist yet):**
1. [TO BUILD] Named e-commerce case study: X% deflection rate, zero incorrect-answer incidents over Y months
2. Deterministic architecture — every response is traceable to explicit code, not a black-box probability
3. 1-week custom build, matched to brand voice and vocabulary — faster than any enterprise AI-agent implementation
4. Instant, per-keystroke response — no "thinking" latency that agentic bots have
5. Handles real multi-day, multi-party workflows (not just single-turn FAQ), executing actions inside the conversation

---

## PART 6: GTM MOTION & CHANNEL STRATEGY

**This is a pure outbound-plus-content motion.** No inbound engine exists yet (no SEO footprint, no case studies to pull inbound traffic), and there is no sales team to build a large-scale motion around — so the first 2 quarters must be founder-led and narrowly targeted.

### Phase 1 (Weeks 1-6): Design Partner Acquisition — E-commerce Wedge
- Direct outbound (LinkedIn + email) to Heads of CX / Support Ops at Tier 1 e-commerce accounts, hand-picked (not list-scraped) for trigger-event fit — recent AI-chatbot complaint, new CX hire, or BFCM-prep timing
- Offer: heavily discounted or free build for 3-5 design partners in exchange for a case study and testimonial — the goal of Phase 1 is proof-asset creation, not revenue
- Leverage existing technical content/credibility (the 6 articles, Unison pedigree) as trust-building material in outreach — this audience will respect a team that can explain *why* the architecture is safer, not just claim it is
- Build the pricing page for real during this phase — the current placeholder pricing actively costs credibility with any prospect who checks it before a call

### Phase 2 (Weeks 7-16): Prove and Scale the E-commerce Wedge
- Convert Phase 1 design partners into named case studies with hard numbers (deflection rate, tickets handled, zero-hallucination-incident count)
- Shift outbound from "trust us" to "here's the proof" — case-study-led sequences to a wider Tier 1 list, still hand-qualified against trigger events
- Start light paid/organic content: technical blog posts targeted at CX/ops search terms ("AI chatbot hallucination refund," "prompt injection customer support risk") to start building inbound surface area
- Introduce a productized "starter" tier with transparent pricing to lower the barrier for smaller Tier 1 accounts who don't need a bespoke sales conversation

### Phase 3 (Month 5+): Open the Second Wedge — Fintech/Insurtech
- Use e-commerce proof points as the security/reliability argument for fintech buyers ("if it can't get a refund wrong, it can't get a dispute status wrong")
- Begin targeting Tier 2 accounts with security/compliance-angle messaging
- Evaluate whether delivery needs a first non-founder hire (implementation engineer) to break the ~1-week-per-build capacity ceiling

### Channel priorities, ranked

1. **Direct outbound (LinkedIn + email)** — the only channel with zero dependency on brand awareness; hand-qualified, trigger-event-based, small volume/high precision (this matches SELLL/Extruct's core outbound competency)
2. **Technical content** — leverages the team's actual credibility (Unison pedigree, sharp technical writing) more efficiently than generic marketing would; write for CX/ops search intent, not developer search intent (the current articles skew toward a technical audience, not the buyer)
3. **Founder-to-founder / warm network** — the Unison Computing network (open source, functional programming, PBC/mission-driven investor circles) is a source of first introductions worth mapping explicitly
4. **Community/forum presence** (Reddit r/ecommerce, r/CustomerSuccess, Shopify community) — low-cost, high-relevance place to be present when someone complains about an AI chatbot mistake
5. **Paid** — deprioritized until Phase 2+; not worth spending on a category where the buyer doesn't yet know to search for "LLM-free" as an option

---

## PART 7: PRICING RECOMMENDATION

Current state (three identical $49/mo tiers, unclear feature differentiation) will actively hurt every outbound conversation once a prospect checks the site. Recommend before Phase 1 outreach begins:

- **Setup fee, not subscription-only:** $6K-$15K one-time for the custom build (reflects the real "week of bespoke engineering" cost), scaled by workflow complexity (number of distinct action types: order tracking, returns, address change, etc.)
- **Platform fee:** $500-$3K/month scaled by ticket volume, positioned as "less than one support hire" not "cheaper than Decagon" — competing on ROI, not on being the discount option
- **Design partner tier (Phase 1 only):** waived or heavily discounted setup fee explicitly in exchange for case study rights — time-boxed to the first 3-5 logos, not a permanent tier

---

## PART 8: RISKS & MITIGATIONS

| Risk | Mitigation |
|---|---|
| Zero proof assets today — every early sales conversation is "trust us" | Phase 1 design-partner motion exists specifically to solve this fast; do not skip it by jumping straight to paid outbound at scale |
| Founder-led delivery caps growth at ~1 build/week | Deliberately narrow to one vertical first so builds 2-5 get faster (repeatable workflow patterns); plan the first delivery hire for Month 5+ |
| Decagon/Sierra could add a "deterministic mode" and neutralize the wedge | Unlikely near-term — their entire value prop and $2B+ of invested capital is agentic reasoning; a deterministic mode would be a tacit admission their core product is unreliable. Low probability, but monitor their product announcements |
| "No LLM" reads as anti-innovation / behind-the-curve to some buyers | Messaging must frame it as an *engineering choice*, not a limitation — "we chose not to" beats "we couldn't," and the technical credibility of the Unison team supports that framing |
| Pricing page currently undermines credibility | Fix before any outbound send — see Part 7 |
| Vertical-wedge discipline slips (chasing any inbound interest regardless of fit) | Hold the Tier 1/2/3 targeting criteria as a hard filter for the first 2 phases; off-ICP inbound gets a friendly no or a referral, not a sales cycle |

---

## KEY TAKEAWAYS

1. **TAM is $15B+ and real, but irrelevant to Year 1 planning.** SAM (~25,000-40,000 companies in reliability-critical verticals) and SOM (20-35 logos, $250K-$600K ARR) are the operating numbers.
2. **Win on the one axis mega-funded competitors structurally cannot match: zero hallucination by architecture, not by mitigation.**
3. **Pick e-commerce/DTC post-purchase support as the single Year 1 wedge.** It has the largest company count, shortest sales cycle, most bounded/repeatable workflows, and is already named as a target market by Structural itself.
4. **The first 6 weeks are a proof-asset creation sprint, not a revenue sprint.** No case study exists — get 3-5 design partners live before scaling outbound volume.
5. **Fix the pricing page before sending a single cold email.** It is currently a credibility liability.
6. **Outbound must be hand-qualified against real trigger events** (AI-chatbot-mistake news, new CX hire, BFCM timing) — this is a precision motion, not a volume motion, matching Structural's own small-team capacity.

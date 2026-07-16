# Account Card — Structural (structural.chat)

**Created:** 2026-07-16
**Last Updated:** 2026-07-16 (contract terms received)
**Lead Score:** N/A — active client, not a prospect
**Tier:** 1 (Active Client — Launch Sprint)
**Stage:** In Sequence / SDR Calling Live — **CONTRACT REFUND-TRIGGER DEADLINE ACTIVE**

---

### CONTRACT RISK — read this first

**Clause C of the OSP Subscription Agreement (contracting entity: Parakeet LLC):** if 5 qualified meetings are not scheduled within 30 days of the contract execution date (2026-06-29), the client may terminate the agreement **and receive a full refund of all fees paid.**

30 days from 2026-06-29 = **2026-07-29.** This is not a soft internal goal, it is a contractual right the client can exercise. It is the reason the Canvas flagged "5 qualified meetings by 7/29" with a fire emoji, and it is why the internal deadline is Wed 2026-07-22 — roughly a week of buffer to course-correct before the contractual date.

**Status as of 2026-07-16: 2 of 5 required meetings booked. 3 more needed within ~12-13 days.**

Everything else in this account (list audit, email launch, call volume) should be prioritized against this number first. A general conversion-rate improvement is good but secondary; the binary pass/fail on 5-by-7/29 is what determines whether Structural can walk away with a full refund.

Contract structure otherwise: initial 60-day term from 2026-06-29 (ends ~2026-08-28, consistent with the Canvas's 8/29 renewal note), then auto-renews in 90-day cycles unless 5-day written notice is given before the next billing cycle. Standard performance clause (E) states OSP does not guarantee outcomes and fees are earned on an activity basis — the 5-meetings-in-30-days provision is a specific, quantified carve-out to that general rule, not overridden by it.

---

### OFFICIAL ICP — read this second (received 2026-07-16, supersedes prior tiering)

**This is the authoritative targeting criteria from the official handoff doc.** It supersedes the Tier 1-3 framework in `STRUCTURAL-TAM-GTM-STRATEGY.md`, which was built from independent market research on 2026-07-15 *before* this handoff doc existed and incorrectly led with e-commerce/DTC — a vertical that is **not** on the official target list. Any list audit must use the criteria below, not the strategy doc's Tier 1-3 table. The strategy doc's market-sizing (TAM/SAM/SOM) and competitive-map sections are still directionally useful context; only the tactical targeting tiers are superseded.

| Criteria | Official spec |
|---|---|
| Industries | Property management & residential real estate, mortgage & loan servicing, healthcare & telehealth, online pharmacy, online dermatology & specialty telehealth, utilities & telecom, broadband & cable ISPs, travel & hospitality (budget airlines, OTA/booking, car rental, cruise), fintech / neobanks, subscription commerce & streaming |
| Revenue / stage | Primarily <$50M ARR / Series A-B. Larger companies OK if actively evaluating support bots or unhappy with an existing bot deployment (active-evaluation or displacement signal) |
| Employee count | 10-1,000 |
| Location | United States (primary) |
| Titles | Chief Customer Officer, COO, CEO, Head of Product, Chief Product Officer, Chief Experience Officer, Sr. Director of Support Operations, Director of Client Services, Director of Customer Success, Member Experience Lead, Manager of Customer Support & Success; co-founder titles at Series A/B startups; anyone who owns the support function |
| **Exclusions (confirmed 2026-07-16)** | **Pure e-commerce — explicitly excluded as "a saturated market for support bots."** Also excludes engineering/technical roles as personas. This is stronger than "not on the list" — it's an active exclusion, which directly invalidates the TAM/GTM strategy doc's original Tier 1 e-commerce/DTC recommendation. |
| Prioritization signal | Portfolio-pattern analysis points to **fintech / financial operations (payroll, AP automation, tax compliance, billing, payments) as the primary segment.** Kyle's direction: start broad across all approved verticals, let SDR conversion data determine where to double down, keep 2-3 secondary verticals for signal comparison. **Tension flagged 2026-07-16:** "start broad" is sound methodology with runway to iterate, but only ~12 days remain before the 7/29 refund-trigger deadline — worth confirming with Kyle/Paul whether fintech should get outsized list volume now rather than even weighting, given the deadline. |
| List-building tool | Seamless.ai. A more detailed per-vertical NAICS/SIC/keyword filter doc exists (`Structural_Chat_Seamless_Filters`, referenced but not yet in hand) for precise search construction. |

**Good news:** the vertical-hook table already built in `STRUCTURAL-OUTBOUND-EMAIL-COPY.md` (property management, mortgage, healthcare, pharmacy, utilities/telecom, travel, fintech, subscription commerce) already matches this official list closely — that copy doesn't need rework. The email/sequence work is fine; the strategy doc's lead-vertical recommendation is what needed correcting.

**Suppression list status (updated 2026-07-16): Uncork list IN HAND, applied.** Full 22-domain list saved to `STRUCTURAL-SUPPRESSION-LIST.md`. All fintech/financial-ops companies (Human Interest, Stampli, Numeral, Neo.Tax, AtoB, etc.) — 100% category overlap with the prioritized fintech segment, so this must be a hard filter on every fintech list pull going forward. Still pending from Paul: "active client domains" (the second piece of the exclusion list). **Unresolved:** have not yet been able to cross-check this list against contacts already dialed since calls started 7/9 — need the actual call/email lists to confirm no suppressed domain has already been contacted or booked, which matters directly for the 5-by-7/29 threshold since a meeting on a suppressed domain likely wouldn't count.

**Compliance / positioning guardrail (from handoff notes):** Structural Chat is **not SOC 2 certified.** If a prospect raises SOC 2 / HIPAA, the correct answer is that the bot can deploy fully on the client's own infrastructure with no data sent to Structural Chat or any AI/model provider — not a claim of certification. Flag any compliance question that comes up on a call in the handoff note. No live clients yet, never reference case studies.

**CORRECTED 2026-07-16 — AI-framing is a live A/B test, not a fixed ban:** the battle card (`STRUCTURAL-BATTLE-CARD.md`) reveals the "never say AI" rule is one of *two* framings being tested, not a hard rule: (1) "no LLM / no AI" — what all prior copy for this account committed to, and (2) "a new, lightweight, 100% reliable type of AI that isn't LLMs" — which does use the word "AI," qualified. The battle card's own Level 2 call script uses framing (2) directly. **Everything built so far for this account (`STRUCTURAL-OUTBOUND-EMAIL-COPY.md`, `STRUCTURAL-OUTBOUND-SEQUENCE.md`) used framing (1) only, treating it as the sole option.** Need to confirm with the team which framing is currently performing better before assuming more copy should stay locked to "no AI at all" — may be worth building a framing-(2) variant to test in parallel rather than picking one unilaterally.

---

### Handoff Process (from official handoff doc)

- **Client contact:** Paul Chiusano — solo founder, the only person on Structural's sales team. All booked meetings route directly to him.
- **Meeting-booked handoff email:** routes to Paul, CC's the CSM (Collins) and Kyle, BCC's an internal ops alias. Subject format: `***MEETING BOOKED - {Company Name}`. Body includes lead details (name, position, company, phone, email, LinkedIn) and meeting date/time, plus a link to the live lead handoff sheet (pending Book of Business dashboard setup for this account).
- **Meeting logistics:** booked via Paul's Calendly (on file). Confirmation reminders come from a dedicated confirmation-sender address. Paul is based in Boston through July 2026 (normally New Orleans) — Eastern time throughout, so no timezone-conversion errors on booking.
- **Template note:** if a prospect requests a time the calendar can't fit exactly, flag the discrepancy explicitly in the handoff note (e.g. "prospect asked for 4:00pm ET, calendar open at 4:15pm ET — bump if possible") rather than silently booking the mismatch.

---

### Company Profile

| Field | Value |
|-------|-------|
| Company | Structural (structural.chat) |
| Website | structural.chat |
| Parent org | Unison Computing (unison.cloud, public benefit corp) — a 4-person company. Structural Chat is the new product, ~2 months old as of 2026-07-16. |
| Industry / Vertical | LLM-free / deterministic AI customer support bots |
| Billing contact | Paul Chiusano (Unison Computing) — confirmed invoiced; contact email on file internally, not repeated here |
| Dialer / CRM | Nooks (SDR calling tool) |
| Structural's own product pricing | ~$3,000-$5,000/month, open to creative terms for early adopters. Distinct from the still-unknown OSP/Parakeet subscription fee — do not conflate the two. |
| Slack channel | `#structural-chat` (renamed from `unison-computing` → `unison-cloud` → `structural-chat`) |
| Account ownership | **CSM: Collins Ogiki** (corrected 2026-07-16 — earlier note attributing CSM to Peter Montalbano was wrong, sourced from an incomplete Slack summary). Call operations: Fernanda. Billing confirmed internally. |
| SDR team | Jennifer Ruiz, Patrick A |
| Onboarding Date | 2026-06-29 |
| Calls Start Date | 2026-07-09 |
| Renewal Date | **2026-08-29 (5-day notice required — effective decision point ~2026-08-24)** |
| Outreach channels | Cold calls only (live). Email campaigns planned to launch the week of 2026-07-20 — confirmed intentional, not a gap. |
| Funding Stage | Unknown / likely bootstrapped via Unison Computing — no funding announcements found in research |
| ICP Rubric Score | N/A (this is Structural as the *client whose GTM we run*, not a prospect we're scoring) |

---

### Engagement Shape

We are running **outbound GTM as a service for Structural** — i.e. Structural is the client, and we (SELLL/Extruct) are prospecting *Structural's* ICP (e-commerce/DTC, fintech, insurtech, travel, logistics — per `STRUCTURAL-TAM-GTM-STRATEGY.md`) on their behalf.

**Launch sprint timeline:**
| Date | Event |
|------|-------|
| ~Jul 9 | Kickoff/launch calls |
| Jul 10 | Launch calls continued |
| Jul 14–15 | Follow-up blocks |
| Jul 17 | First meeting booked — Cafe Services Inc (prospect contact on file internally) |

**Scope confirmed:** 3–5 sequences, 300+ contacts each.

---

### Goals & Deadlines (from Slack Canvas, 2026-07-16)

| Metric | Target |
|---|---|
| Qualified meetings by 2026-07-29 | Minimum 5 (flagged priority) |
| Overall goal | Set: 10 / Held: 5 |
| July goal | Set: 7 / Held: 4 |
| Actuals as of 2026-07-16 | 78 conversations -> 2 meetings booked (2.6%) — behind both overall and July pace |
| Internal deadline | **Wednesday, 2026-07-22** |
| Canvas-stated problem | "Meetings have not been booked or held yet" |
| Canvas-stated solution | High call volume with constant SDR feedback; pull call data daily to evaluate (explicitly with Claude); iterate lead lists until traction; tight SDR-CSM and CSM-client feedback loops |
| Client sentiment | Not yet recorded — open field, needs to be filled in |

---

### SDR Performance Notes

Call activity underway on live sequences. Reported issue: a share of dialed contacts are wrong numbers / incorrect contact records. First meeting booked successfully (Cafe Services Inc, Jul 17); coaching note on record internally re: discovery depth and follow-up cadence.

**Flagged internally:** urgent need for a refreshed list to maintain launch-sprint momentum.

---

### Risk Flag — List/ICP Alignment (needs verification)

The reported problems (wrong numbers, incorrect contacts, urgent need for new lists) are classic symptoms of lists pulled before a disciplined ICP was locked. **Cafe Services Inc** — the one booked meeting so far — reads like a contract foodservice/vending company, which does not obviously match any of the Tier 1–3 segments in `STRUCTURAL-TAM-GTM-STRATEGY.md` (e-commerce/DTC, fintech/insurtech, travel/OTA, logistics). This needs a direct check against the actual list, not an assumption — flagging so it isn't lost.

**SUPERSEDED 2026-07-16:** the fix described here originally pointed at the strategy doc's e-commerce/DTC Tier 1 criteria — wrong, since e-commerce is explicitly excluded from Structural's ICP. **Use the OFFICIAL ICP section above instead**: 10-1,000 employees, <$50M ARR/Series A-B, the 10 approved verticals, and the official title list. Battle card (`STRUCTURAL-BATTLE-CARD.md`) adds a useful refinement: prioritize domains with real support volume that's a little bespoke (property management is the card's example) over commoditized domains — that's also *why* e-commerce is excluded, off-the-shelf bots already serve it well.

---

### Conversion Diagnostic — Opened 2026-07-16

**Client-reported metric:** 78 conversations → 2 meetings booked = **2.6% conversion**. Internal target referenced by client: **12%**.

**Client questions (weekly review agenda, meeting scheduled 2026-07-17):**
1. What's working / not working — any data on patterns?
2. Of non-converting conversations: recurring objection, targeting problem, or something else?
3. Can we review call transcripts/recordings?
4. No emails visible yet in the analytics dashboard — expected at this stage or a gap?

**Status of each, as of 2026-07-16 (pre-review):**
| Question | Status |
|---|---|
| Targeting fit | HYPOTHESIS, partially supported — see Risk Flag above (one booked meeting, off-ICP company type). Needs full list audit to quantify. |
| Objection pattern | UNKNOWN — no transcript access yet. Requesting call transcripts/recordings to categorize systematically. |
| Email sequence status | **RESOLVED 2026-07-16** — confirmed intentional. Cold calls are the only live channel; email campaigns are planned to launch the week of 2026-07-20 (`STRUCTURAL-OUTBOUND-EMAIL-COPY.md` and `STRUCTURAL-OUTBOUND-SEQUENCE.md` are the copy/cadence built for that launch). |

**New stakeholder:** Client is adding their own sales hire to future meetings, starting with the 2026-07-17 weekly review. Read: elevated attention on this account's numbers — come with real data, not reassurance.

**Pre-review action items (owner: internal team):**
- [ ] Export current contact list(s) for ICP audit against Tier 1 criteria (`STRUCTURAL-TAM-GTM-STRATEGY.md`)
- [ ] Pull 15-20 recent call transcripts/recordings for objection-pattern categorization
- [ ] Confirm email sequence launch status/timeline with owner
- [ ] If data isn't ready by review time: present the diagnostic plan itself + honest "here's what we're checking, here's when you'll have real numbers" rather than a guess
- [ ] **NEW (2026-07-16):** Audit the newly-uploaded list(s) against Tier 1 ICP criteria BEFORE they go live in calls — do not let "new list" stand in for "verified list" a second time
- [ ] Confirm next week's call blocks actually land on the calendar, not just "planned"

**List-refresh update (2026-07-16):** Internal update flagged that call launches have been slow due to list quality, a couple of meetings booked, and new lists were just uploaded "hoping to crack the code." No further call blocks scheduled for the remainder of this week; more planned for next week. This independently confirms the targeting/ICP-alignment risk flagged above, which is a good sign the team caught it. Not yet confirmed whether the new lists were built against the Tier 1 criteria or just swapped for a different unaudited pull — needs verification before being presented to the client as a fix.

---

### Current Status

| Field | Value |
|-------|-------|
| Stage | Active launch sprint — SDR calling live sequences; conversion below target; **contractual refund-trigger deadline 2026-07-29** |
| Next Action | Get 3 more qualified meetings booked before 2026-07-29 — this now supersedes the general conversion-rate diagnostic as the top priority. List audit, email launch, and transcript review are all in service of this number. |
| Next Action Date | 2026-07-22 (internal checkpoint) / 2026-07-29 (contractual deadline) |
| Days in Current Stage | ~7 (since Jul 9 launch); ~12-13 days remaining to the contractual deadline |
| Risk Flag | **HIGH — full-refund termination right activates 2026-07-29 if meetings 3-5 aren't booked.** Conversion rate 2.6% vs 12% target; list quality / ICP alignment unverified. |
| Deal Value | Dollar amount unknown, but full-refund exposure is real and time-bound (see Contract Risk section above) |

---

### Notes

| Date | Event | Notes |
|------|-------|-------|
| 2026-07-15 | TAM/GTM strategy built | `STRUCTURAL-TAM-GTM-STRATEGY.md` — TAM/SAM/SOM, market map, tiered ICP, GTM motion. Written without knowledge this was already a live, invoiced client with SDR calls in progress since Jul 9. |
| 2026-07-16 | Account card opened | Reconstructed from internal activity summary. Launch sprint underway. First meeting booked (Cafe Services Inc, Jul 17) — fit vs. ICP unverified. |
| 2026-07-16 | Client raised conversion concern | 78 conversations → 2 meetings (2.6%) vs 12% target. Client requesting objection data, targeting review, transcript access, and email-status clarification ahead of 2026-07-17 weekly review. New client-side sales stakeholder joining going forward. |
| 2026-07-16 | Ground-truth Canvas received | Slack Canvas provided full account facts: CSM corrected to Collins Ogiki, onboarding 6/29, calls start 7/9, renewal 8/29 (5-day notice), goals (5 qualified meetings by 7/29, July Set 7/Held 4), internal deadline Wed 7/22, and confirmation email is planned not missing. Battle card, scripts, full Slack history, and lists to follow before next full diagnosis. |
| 2026-07-16 | **Contract terms received — refund-trigger deadline confirmed** | OSP Subscription Agreement (Parakeet LLC) clause C: 5 qualified meetings required within 30 days of 6/29 execution date (= 7/29) or client can terminate for full refund. This is the real deadline behind the Canvas's fire-emoji flag. 2 of 5 booked as of 7/16; 3 more needed in ~12-13 days. Reprioritized: getting to 5 meetings by 7/29 now outranks the general conversion-rate diagnostic. |

---

*Maintained by SELLL engine. Update after every call, list refresh, and status change.*

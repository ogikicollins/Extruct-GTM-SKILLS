# The AI Business — New-Client Prospecting Campaign
Built 2026-08-07, collaboratively, as GTM-engineer application prep. Roleplay: acting as a GTM
engineer at theaibusiness.org (the actual hiring company — https://theaibusiness.org/), building a
campaign to land a **new client** for them, not selling on their behalf to an existing client.

**Status: built, not yet sent.** No real send/reply data exists for this campaign. Do not present any
number below as a real result — the Loom/interview material this feeds into should say exactly that,
plainly, if this section comes up before the campaign actually runs. See "Where this leaves the Loom"
at the bottom.

**Company context (via WebFetch, 2026-08-07):** The AI Business sells AI-powered revenue engineering
— outbound lead gen, inbound conversion, RevOps/sales enablement — to venture-backed SaaS, AI
startups, biotech, and founders raising capital. Voice: direct, anti-hype ("not silly use cases you
see on the internet"), differentiator is "we install everything inside your business so you own the
data." Real public client roster: Versatope Therapeutics, Zeora Hospitality, Mood Studios, AB
Innovation, Kerb, Varinity. Real public proof points: a biotech client got 60+ engaged investors and
16 JPM Healthcare Conference meetings from cold outreach; Mood Studios went from 3-4 weekly
appointments to fully booked. Process: free pilot, campaign live before any payment, 6-12 month
engagements typical.

---

## Step 1 — ICP hypothesis: "a company like QR Floor Genie"

Founder-led B2B or vertical-SaaS companies, pre-seed to seed, 1-8 people, real product already live
(paying or near-paying customers), but no dedicated outbound motion yet. QR Floor Genie — a real
signal-triggered outbound system built previously for an independent flooring-store pricing tool — is
the reference shape: small team, real product-market fit signal, zero outbound infra.

**The wedge:** The AI Business's public roster skews SaaS/biotech/hospitality/law/real estate. Nobody
in that roster is fishing in **niche vertical tools for unglamorous industries** (home services,
trades, local-retail tech) — less agency competition there, and founders in that segment are usually
too heads-down on product to have touched outbound at all yet.

## Step 2 — Sourcing signals (non-obvious, per source)

1. **Y Combinator / Techstars / accelerator batch pages** — filter recent cohorts for "vertical SaaS"
   or "tools for [industry]" language in the one-liner. Public, undersourced by agencies defaulting
   to Crunchbase.
2. **Product Hunt launches in niche B2B categories** — a founder who just shipped publicly is in the
   exact "how do I get customers now" moment.
3. **LinkedIn founder posts** — "we just crossed $X MRR" / "looking for our first GTM hire" language:
   direct admission they know they need pipeline help and haven't solved it.
4. **First SDR/growth job posts open 30+ days** — signals a founder trying to solve it themselves
   before outsourcing. Warmer door than a cold "do you need this."
   **Known limitation, flagged up front:** small daily supply, and the signal decays the moment the
   role gets filled — needs daily monitoring, not weekly, or the list goes stale between passes.
5. **Crunchbase seed/pre-seed filter, restricted to non-obvious industries** (construction tech,
   field-service tech, local-retail tech) instead of the default SaaS/biotech filter every competing
   agency runs.

**Qualification pass:** exclude anyone already running outbound (Apollo/Instantly footer text, an
existing SDR/growth title already filled on LinkedIn) — a defended account, not a wedge.

**Cohort discipline:** track signal types as separate cohorts from day one (job-post-sourced vs.
Product-Hunt-sourced, etc.) rather than one blended list — a strong-performing signal shouldn't get
hidden inside a weak blended average.

## Step 3 — Copy (3-touch sequence, signal swapped into the opener)

Merge fields: `{{FIRST_NAME}}`, `{{COMPANY_NAME}}`, `{{SENDER_FULL_NAME}}`. CTA is nearly identical
across all three touches on purpose — one concrete ask outperforms three different asks in a short
sequence.

### Touch 1 — Day 0 — The signal-specific open

```
Hi {{FIRST_NAME}},

Saw your SDR/growth req has been open a while — usually means you're trying
to solve pipeline yourself before handing it off, which is the right instinct.

Most outbound agencies sell you a black box: a rented list, a templated
sequence, a dashboard you can't actually touch. We install the whole system
inside {{COMPANY_NAME}} instead — the list, the infra, the sequences — so
you own the data when the engagement ends, not us.

We build the first campaign and get it live before you pay anything.

Worth 15 minutes to see what a signal-based list for {{COMPANY_NAME}} would
actually look like?

Best,
{{SENDER_FULL_NAME}}
```

**Subject options (rotate):** `still hiring for growth?` / `who's running {{COMPANY_NAME}}'s pipeline
right now` / `a list before you pay us anything`

**Signal swap for non-hiring leads** (Product Hunt / accelerator-batch source instead of job-post
source) — replace the opening two lines only, body/CTA unchanged:
> "Saw the {{COMPANY_NAME}} launch — congrats. Most founders at this stage are heads-down on product,
> which usually means outbound is either nobody's job or everybody's job."

### Touch 2 — Day 3 — The real number, not a generic promise

```
Hi {{FIRST_NAME}},

One more thing, separate from Tuesday's note.

A biotech client came to us with zero outbound infrastructure. Six days
after launch they had their first meeting. By JP Morgan Healthcare
Conference, 16 booked meetings from a cold list.

That's not a template working harder. That's a list built off real signals
instead of a firmographic filter, sent from infrastructure that's actually
warmed and monitored.

Still worth the 15 minutes to see what that looks like for {{COMPANY_NAME}}?

Best,
{{SENDER_FULL_NAME}}
```

**Subject:** empty — threads as `Re:` Touch 1. (Proof point here is real and public on
theaibusiness.org's own site — not invented for this exercise.)

### Touch 3 — Day 6 — The breakup

```
Hi {{FIRST_NAME}},

Most agencies pitch you before showing you anything. We build the list and
the campaign first, and you see it live before a dollar changes hands.

If pipeline isn't the priority right now, no worries — I'll leave it here.

If it is, happy to just send over what a first list for {{COMPANY_NAME}}
would look like, no call required.

Best,
{{SENDER_FULL_NAME}}
```

**Subject:** empty (thread continuation). Word counts: ~95 / ~80 / ~65 — shrinks as it goes.

## Step 4 — Deliverability & sending infrastructure

- **Domains:** 3-4 dedicated sending domains as lookalikes of the primary brand — never send cold
  from the root domain. 2-3 mailboxes per domain (6-12 mailboxes total).
- **Warmup:** 2-3 weeks of automated warmup (Instantly's built-in pool) before any cold send. No
  exceptions.
- **Technical setup before send 1:** SPF/DKIM/DMARC aligned on every sending domain. Plain-text-
  leaning formatting, max one link per email, no spam-trigger subject language.
- **Volume ramp:** 15-20 sends/day/mailbox to start, step to 30-35/day by week 3. Cap near 40/day —
  past that, reply quality drops faster than volume gains pipeline.
- **Verification:** every email verified before send (MillionVerifier-class tool). Target bounce rate
  under 2%; a domain that crosses it gets paused, not pushed through.
- **Monitoring:** weekly inbox-placement test per domain. Health score below 90% = rotated out of the
  send pool immediately (same threshold used on a real 9-domain Instantly build, prior account work).
- **List hygiene:** dedupe against prior outreach before every send; hard-suppress on bounce or
  unsubscribe, no re-adds.

## Step 5 — Results framework (diagnostic method, not fabricated numbers)

| Signal pattern | Diagnosis | Fix |
|---|---|---|
| Low open rate + low reply rate | Deliverability problem | Check domain health first, not copy |
| Fine open rate + low reply rate | Copy/offer problem | Rewrite the trigger line, not the whole sequence |
| Fine reply rate + low *positive*-reply rate | Targeting problem | Wrong people are reading a good email |
| High reply on one signal, near-zero on another | Signal quality gap | Kill the weak signal, double down on the strong one — don't blend them |

**Rotation rule:** any signal segment under 2% reply rate after 50 sends gets retired or rebuilt
before more volume goes against it.

**Risks flagged before send 1 (judgment before results, not hindsight):**
- Job-post signal has small daily supply and decays fast once the role fills — needs daily
  monitoring.
- Job-post and Product-Hunt signals pull from different psychological moments (actively solving vs.
  just launched) — track as separate cohorts from day one.
- The free-pilot-before-payment CTA is strong but creates a fulfillment bottleneck — cap concurrent
  pilots before the list-build/infra side gets overextended.

---

## Where this leaves the Loom

Two options, both legitimate — user's call, not decided as of this write-up:
1. **Actually send this over the next 1-2 weeks**, get real replies, and use it as the Loom's featured
   campaign — strongest option since it's built for the exact company being applied to, in their own
   voice, using their own real client roster as proof.
2. **Keep `JOBAPP-1-LOOM-TALK-TRACK.md` (Structural Chat)** as the Loom's real-results campaign, and
   hold this build in reserve as prepared material for the "short mock campaign" stage of their
   process — walking in already having done the work.

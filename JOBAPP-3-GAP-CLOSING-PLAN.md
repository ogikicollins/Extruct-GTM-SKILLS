# Gap-Closing Plan — Before First Interview
Built 2026-08-07. Scope: close the one real gap from `JOBAPP-2-TOOL-GAP-MAP.md` (Clay) enough to
speak to it with a specific, hands-on example — not to become an expert. 3-4 hours total, spread
across a couple of evenings, matches the JD's own "you spend your evenings testing new AI tools" bar.

Don't try to fake depth on MillionVerifier/Apify/Smartlead/Email Bison — a few minutes clicking
through their docs is enough to not be caught flat-footed if they come up by name, but building a
real workflow in Clay is the only piece worth real time before an interview.

---

## Step 1 — Clay free-tier workflow (2-3 hrs, highest priority)

Goal: be able to say "I built X in Clay" with a real screenshot/table, not "I've looked at Clay."

1. Sign up for Clay's free tier (no card required for the trial credits).
2. Pick a real, small target list — 25-50 rows. Reuse something you already have context on rather
   than inventing a fake ICP: a slice of the Structural Chat ICP (property management / mortgage
   servicing, US, 10-1,000 employees) is a natural fit since you already have the targeting logic
   written in `STRUCTURAL-BATTLE-CARD.md`.
3. Build one real enrichment table: company name in → find domain → find decision-maker at the
   target title → verify email → output to a clean column set. This is the exact shape of work
   Apollo+n8n already does in your stack — the point is translating that logic into Clay's node
   model so you can describe the mapping directly in an interview ("in n8n I'd do this with an HTTP
   node + a filter step; in Clay it's this same logic as an enrichment column").
4. Screenshot the finished table. Keep it — useful if the mock-campaign round wants a work sample.

## Step 2 — MillionVerifier / Apify / Smartlead / Email Bison (20-30 min total, awareness only)

- MillionVerifier: read their API docs page. Note it's a straight swap for Hunter/ZeroBounce in your
  existing verification step — same job, different vendor. Nothing to build.
- Apify: skim their actor marketplace for 2-3 LinkedIn/company-scraping actors. Note the conceptual
  overlap with your PhantomBuster + Claude Code scraping work.
- Smartlead / Email Bison: skim their homepage/feature list. Both are Instantly competitors — same
  category (warmup, deliverability, multi-inbox sending) you already have real experience in.

## Step 3 — Rehearse the honest answer, not a script

If asked "have you used Clay?" in the interview: *"I hadn't until this week — built a real
enrichment table against [Structural Chat's] ICP to get hands-on before we talked. My enrichment work
before that has mostly run through Apollo and n8n, which is the same underlying logic in a different
tool."* That's a stronger answer than pretending prior expertise, and it directly demonstrates the
"thrives in ambiguity, can't stop improving the system" trait they're screening for.

---

**Do not skip Step 1.** The JD names Clay first in its tool list and this role is described as
building "AI-enabled workflows that let one operator run many clients" — Clay is very likely the
literal tool their production stack runs on. Walking into interview 1 with zero hands-on time here is
the single biggest avoidable risk in this application.

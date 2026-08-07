# Loom Talk Track — Senior GTM Engineer Application
Built 2026-08-07. Source campaign: Structural Chat (structural.chat / Unison Computing), OSP engagement,
CSM: Collins Ogiki. Real, live client account — not a hypothetical.

Target length: 3-5 minutes, screen-share, not talking-head. The JD wants to see the actual documents,
not hear you describe them. Have these open in browser tabs before you hit record, in this order:
1. `STRUCTURAL-BATTLE-CARD.md`
2. `STRUCTURAL-OUTBOUND-EMAIL-COPY.md`
3. `STRUCTURAL-CONVERSION-DIAGNOSTIC-REPORT.md`

Recover them with `git show HEAD:<filename>` first — they're currently deleted from your working
tree (see note at the bottom of this file).

---

## Why this campaign, not SELLL.io or TopServ

You have three real accounts. This one wins for the Loom specifically because it has all three things
the JD asks for in one place: a documented targeting rationale, copy with a before/after (not just a
final draft), and hard numbers you personally corrected. TopServ is too new (onboarded 2026-07-23,
no result data yet). SELLL.io is the deepest system but it's Aaron's product, not a campaign you ran
with call/reply data. Structural has both — pick this one.

---

## Segment 1 — The targeting (45-60 sec)

Screen: `STRUCTURAL-BATTLE-CARD.md`, ICP section.

**Say, in your own words, hitting these beats:**
- Client: Structural Chat, 2-month-old product out of a 4-person parent company (Unison Computing).
  Sells deterministic (non-LLM) support-automation bots.
- ICP is not "companies with a support team" — it's companies with *repetitive, bespoke* support
  volume: property management, mortgage/loan servicing, healthcare/telehealth, fintech. Explicitly
  excluded pure e-commerce — commoditized, off-the-shelf bots already own that space, no wedge.
- Titles: highest person who owns or routes to the support function — CCO/CXO, COO, Head of Product,
  Sr. Director of Support Ops. Explicitly avoid engineering titles.
- Sourcing: Seamless.ai, filtered on NAICS/SIC codes matching the target verticals plus the title
  filters above — not a generic "customer support" keyword search, which pulls noise.
- **The non-obvious part** (this is what they said they want to see): the ICP was refined mid-flight.
  A live disqualification — a hospitality/live-events company that looked like a fit on paper but
  turned out to run in-person, real-time operations with no back-end ordering flow — got folded back
  into the exclusion logic instead of just being logged as a loss. That's targeting-as-a-living-system,
  not a filter you set once.

---

## Segment 2 — The copy (60-90 sec)

Screen: `STRUCTURAL-OUTBOUND-EMAIL-COPY.md`. Scroll to the "WHAT CHANGED AND WHY" section first, then
show Campaign 1's body copy.

**Say:**
- Original version opened every email with a generic rhetorical question, no trigger, soft CTA
  ("worth a quick look?"). Reads as one of a dozen similar pitches.
- Rewrote around a rule: every touch opens with a real, sourced trigger — either a hard stat or a
  specific, documented public incident — never an invented Structural Chat result, because there
  were no live clients yet to produce one. (Show the Air Canada tribunal ruling email — read the
  opening two lines on camera, they land well cold.)
- CTA changed from vague to binary and low-effort for the reader: "send us 5 real tickets, we'll show
  you exactly how each resolves." Work falls on the sender, not the prospect — and it repeats
  identically across all three touches on purpose, because repetition of one concrete ask beats three
  different asks in a short sequence.
- Positioning guardrail, held across every touch: never say "AI," "AI chatbot," or "powered by AI."
  The whole differentiation is *not* being an LLM. One wrong word in copy undoes the entire pitch.
- Vertical swap table: same body, different opening hook per industry (mortgage vs. healthcare vs.
  fintech) — one sequence, mapped to signal instead of rewritten seven times from scratch.

---

## Segment 3 — Strategy, results, and what you'd change (75-90 sec)

Screen: `STRUCTURAL-CONVERSION-DIAGNOSTIC-REPORT.md`.

**This is the strongest part of the Loom — lead with it if you're tight on time.**

- The account had a reported conversion rate circulating internally: 2.6% (2 meetings / 78
  "conversations"). You pulled the full call-log export — 112 dials, 105 real attempts after
  stripping a tagging error — and found the 78 figure was wrong: it counted wrong numbers and busy
  signals as "conversations." Once you count only calls where someone actually answered and talked,
  the real rate is **9.3%** (4 meetings / 43 live conversations) — roughly 1 in 11, not 1 in 38.
  **Say this plainly: the team was about to make decisions off a number that was off by 3.5x.**
- The bigger finding: reachability, not messaging, was the ceiling. 55% of all dials (58/105) never
  became a conversation — wrong numbers, busy, DNC. That's a list/data-quality problem sitting
  upstream of anything a script or copy change can fix.
- Objection pattern, built from 31 usable call summaries out of 39 connected-no-meeting calls:
  "already has something in place" was the dominant reason at 39% — which matched a framework the
  client had already given the team in writing before calls started (displacement-ready vs.
  defended), and that framework got built directly into the live call script as a result.
  "Wrong contact reached" was 26% — a targeting fix, not a script fix.
- **What you'd do differently:** tighten title filters on list pulls to cut the 26% wrong-contact
  rate directly, since there's no way to pre-screen "already has a competing bot" at the list stage —
  that risk has to live entirely in call-time objection handling, so get the targeting layer as clean
  as possible to spend call time on the objection you can't filter out.

---

## Closing line (10 sec)

Something like: *"That's the loop — source against a real signal, write copy that earns the trigger
line before it earns the ask, then use the actual call data to find out whether the campaign has a
targeting problem or a messaging problem before you touch either one blind."* Then stop talking.
Don't add a generic "I'm passionate about GTM" close — the JD explicitly says no buzzwords.

---

## Note on file state

These files currently show as deleted in your working tree (`git status`), though the content is
intact in git history and was pulled via `git show HEAD:<path>` to build this talk track. If that
deletion wasn't intentional, recover them with `git checkout HEAD -- STRUCTURAL-*.md
STRUCTURAL-*.csv` before you go further — worth resolving before you're mid-recording and can't find
the file in Explorer.

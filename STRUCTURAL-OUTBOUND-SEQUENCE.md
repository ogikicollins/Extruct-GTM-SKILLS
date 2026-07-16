# Sequence — Structural Chat Cold Outbound (3-touch)
OSP email campaigns  ·  CSM: Pete Montalbano  ·  Client: Paul Chiusano (Structural Chat / Unison Computing)
Built 2026-07-16 from `STRUCTURAL-OUTBOUND-EMAIL-COPY.md` v2

3-touch cold sequence. Cadence: Day 0 / Day 2 / Day 5. Variables: `{{FIRST_NAME}}`, `{{COMPANY_NAME}}`, `{{SENDER_FULL_NAME}}`.

Each touch takes one different, real trigger. No touch repeats another's angle, and no touch invents a Structural Chat result. Same positioning guardrail as the base copy doc: never "AI," "AI chatbot," or "powered by AI" describing Structural.

---

## Touch 1 — Day 0 — The Repeat Ticket Tax

```
Hi {{FIRST_NAME}},

Most support teams spend 60 to 80 percent of their time on the same handful of requests. Order status, billing, account changes.

Each ticket still costs $8 to $20 to close, even though the answer never changes.

We build support automation that finishes the request inside the conversation, not a help article link. It runs on fixed rules, not a language model. It cannot invent an answer that does not exist.

Anything outside its scope goes straight to your team, with full context.

Send us 5 real tickets from last week.
We will show you exactly how each one resolves.

Best,
{{SENDER_FULL_NAME}}
```

**Subject options (rotate):**
- the same 5 tickets, every day
- 70% of your queue, on repeat
- what a repeat ticket costs {{COMPANY_NAME}}
- tickets that write themselves

*Optional personalization: if the lead's vertical is known, swap the opening two lines for the matching hook in `STRUCTURAL-OUTBOUND-EMAIL-COPY.md`'s vertical-swap table. Body and CTA stay identical.*

---

## Touch 2 — Day 2 — The Liability Nobody Priced In

```
Hi {{FIRST_NAME}},

One more data point, separate from my last note.

In February 2024, a tribunal ruled against Air Canada. Its chatbot had invented a bereavement fare policy that did not exist. The airline still had to pay.

That is the risk in any support tool that generates its own answers. One invented policy is not a bad review. It is a liability.

We build support automation on fixed rules, not a language model. It cannot improvise an answer that was never true.

Still worth sending 5 real tickets to see how they resolve?

Best,
{{SENDER_FULL_NAME}}
```

**Subject:** empty — threads as `Re: <Touch 1 subject>`.

---

## Touch 3 — Day 5 — The Breakup (short)

```
Hi {{FIRST_NAME}},

A dealership chatbot once got talked into selling a $76,000 truck for $1. That is what happens when a bot can be argued with.

Ours cannot be. It just runs on fixed rules, every time.

If this is not a priority right now, no worries.

If it is, send us 5 tickets and we will show you exactly how each one resolves.

Best,
{{SENDER_FULL_NAME}}
```

**Subject:** empty (thread continuation).

---

## Input Fields contract

| Field | Source | Fallback if missing |
|-------|--------|---------------------|
| `{{FIRST_NAME}}` | name-normalization step | skip the contact |
| `{{COMPANY_NAME}}` | name-normalization step | drop the clause; not used in body copy, subject line only |
| `{{SENDER_FULL_NAME}}` | sender config | required, no fallback |

No `{{industry}}` or `{{segment}}` routing field is required for this base sequence — all three touches read as universal across verticals. Vertical personalization is optional and lives one layer up (Touch 1 opening-line swap only), not baked into this file, so the sequence still renders correctly for any contact with unknown vertical.

---

## Notes

- **Word counts:** Touch 1 ~105 words, Touch 2 ~95 words, Touch 3 ~65 words. Sequence gets shorter as it goes, standard cadence discipline.
- **Angle logic:** Touch 1 leads with the pain everyone has (repetitive tickets, hard cost). Touch 2 escalates to what a wrong answer actually costs (real legal precedent). Touch 3 closes on the sharpest, most memorable risk (a bot that can be talked into anything) with a low-pressure exit.
- **Why Air Canada and Chevrolet, not a Structural Chat result:** there is no live client yet. Both incidents are real, public, and sourced (see verification section in `STRUCTURAL-OUTBOUND-EMAIL-COPY.md`) — they substitute for proof without inventing one.
- **No touch says "just following up" or "circling back."** Touch 2 opens with a direct pivot; Touch 3 gives an explicit, low-pressure out before the final CTA.
- **CTA is identical across all three touches on purpose:** "send 5 real tickets, we show you how each resolves." Repetition of one concrete ask outperforms three different asks across a short sequence — it's easier to say yes to something you've already seen twice.

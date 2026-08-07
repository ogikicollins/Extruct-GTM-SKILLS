# Tool Stack Gap Map — vs. JD's Named Stack
Built 2026-08-07. JD requirement: "Fluent with tools like Clay, Instantly / Smartlead / Email Bison,
MillionVerifier, Apollo / Apify, and Claude Code."

Rule for this document: don't overclaim. If you haven't clicked around inside a tool, say so — the
mock-campaign round (stage 3 of their process) will expose a bluff immediately. What you actually have
is strong enough that you don't need to pad it.

---

## Real, hands-on — can speak to specifics in an interview

| JD tool | Your evidence | What you can actually say |
|---|---|---|
| **Apollo.io** | `Alif-Sales-Engine/ALIF-Revenue-Machine-Stack.md` — primary enrichment engine, native HubSpot export, signal-triggered search-and-enrich flow | You've built the sourcing layer around it, not just exported lists |
| **Instantly.ai** | Same file — 9 domains, 18-27 mailboxes, domain-health monitoring (<90% rotate-out rule), reply routing via Zapier into HubSpot | This is the deliverability-engineering piece the JD cares about most — you have a real multi-domain infra story, not just "I sent some emails" |
| **Claude Code** | Your entire GTM practice runs on it — SKILL.md-based orchestration (SELLL.io's 6-layer engine, `/sales-*` skill suite), used for diagnostic work like the Structural conversion report | This is your single strongest match. The JD literally says "source leads no database has using Claude Code and custom scrapers" — lead with this, don't bury it |
| **n8n** | Multiple live workflows: Instantly→Slack, reply routing, referral engine (`n8n-workflows/alif/`) | Adjacent to what Clay does internally (node-based enrichment/routing) — useful bridge when discussing Clay in interview even without direct Clay time |

## Functional equivalent, not the named brand — be upfront about this framing

| JD tool | What you've used instead | How to talk about it |
|---|---|---|
| MillionVerifier | Hunter.io (backup verification), ZeroBounce (SELLL.io stack) | "I've run verification through Hunter and ZeroBounce — same job, haven't specifically used MillionVerifier's API, can pick it up same-day" |
| Apify | PhantomBuster (LinkedIn Profile Scraper "phantom" flows), Seamless.ai NAICS/SIC search | "My scraping work has gone through PhantomBuster and Claude Code directly rather than Apify's actor marketplace — conceptually the same job, different vendor" |
| Smartlead / Email Bison | None directly — Instantly has been the sending tool across every account | Don't claim these. Instantly experience covers the underlying skill (warmup, domain rotation, deliverability monitoring) |

## True gap — no hands-on time yet

| JD tool | Status | Why it matters here |
|---|---|---|
| **Clay** | Never used | Named first in the JD's tool list — highest-visibility gap. It's the industry-standard workflow/enrichment layer this role is built around; your n8n + Claude Code experience proves the underlying skill, but you need to actually click through Clay's UI before an interview references it |

---

## Bottom line for the interview

Don't lead with the gap. Lead with Claude Code + the Instantly multi-domain infra + the Structural
diagnostic work — that's a stronger, more specific story than most candidates who list all six tools
generically without a real account behind any of them. When Clay/MillionVerifier/Apify come up
directly, answer honestly and pivot to the equivalent workflow you've actually built. See
`JOBAPP-3-GAP-CLOSING-PLAN.md` for closing the Clay gap specifically before the first interview.

# Call Queue — SELLL.io
> Engine Layer: Activation | Updated: 2026-06-21
> Populated by: `SELLL-layer-2` Phase 5E
> Worked by: Aaron (Tier 1 Priority) / SDR (Tier 1 Standard + Tier 2)
> Rule: Sort by reply probability, highest first. Call within 24h of Email 1 send.

---

## What This Queue Is

Every contact where Prospeo returned a verified direct dial during the email waterfall.
Phone numbers turn a cold sequence into a multi-channel motion — email opens, then the call lands within 48–72 hours.

Reply probability determines the call order. The hottest prospects get called first.

---

## Active Queue

| Contact | Company | Title | Phone | Email Sent | Reply Probability | Tier | Campaign | Call Script | Status | Last Action |
|---------|---------|-------|-------|-----------|-----------------|------|----------|------------|--------|------------|
| (Layer 2 not yet run — contacts added here after first list build) | | | | | | | | | | |

---

## Call Script Assignment

Scripts are pre-generated in Phase 5E of `SELLL-layer-2` using `skills/selll/cold-call/SKILL.md`.

| Sequence Variant | Day 3 Script Variant |
|-----------------|---------------------|
| `VPSales_v1` | Cold Call VP Sales — Day 3 Standard |
| `VPSales_PostReference` | Cold Call VP Sales — Post Reference |
| `VPSales_PostRaise_Compound` | Cold Call VP Sales — Compound Signal |
| `VPSales_Displacement` | Cold Call VP Sales — Displacement |
| `CRO_v1` | Cold Call CRO — Volume/Conversion Frame |
| `Founder_v1` | Cold Call Founder — Ceiling Frame |
| `ChampionFollow_v1` | Cold Call Champion — Peer Frame |

---

## Call Timing Rules

| Day | Action |
|-----|--------|
| Day 3 | First call — reference Email 1. Short: 30–45 second voicemail max if no answer |
| Day 5 | Second attempt — different time of day (try AM if PM before, vice versa) |
| Day 12 | Third call — if no reply to any email or call after Day 8 |

**Voicemail rule:** Leave voicemail on Day 3 only. Do NOT leave multiple voicemails — leave one, then silence.

**Voicemail script (30 seconds max):**
> "Hey [first_name], it's [sender_name] from SELLL.io. Sent you something about [company_name] earlier this week — wanted to make sure it landed. I'll send a quick follow-up with the relevant piece. No need to call back — just look for the email. Talk soon."

---

## Status Codes

| Status | Meaning |
|--------|---------|
| TO CALL | Pending first call — not yet attempted |
| VOICEMAIL | Left voicemail Day 3 — monitoring for email reply |
| NO ANSWER | Called, no voicemail left — try again |
| CONNECTED | Call connected — log outcome below |
| DO NOT CALL | Asked not to be called — remove from queue, continue email only |
| CONVERTED | Booked meeting on call — close out |

---

## Call Outcomes Log

| Date | Contact | Company | Outcome | Notes | Next Action |
|------|---------|---------|---------|-------|------------|
| (not yet started) | | | | | |

---

## Archived (Campaign Complete)

| Contact | Company | Campaign | Calls Made | Outcome | Date Archived |
|---------|---------|----------|-----------|---------|--------------|
| (none yet) | | | | | |

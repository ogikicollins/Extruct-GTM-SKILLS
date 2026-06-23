# Layer 2 Referral Fast-Track
> Component of: Layer 2 Activation — Referral Intake Path
> Triggered by: Layer 5 Phase 5A — referral received from an active client
> Updated: 2026-06-22

---

## Why Referrals Need a Fast-Track (Not a Full Skip)

Referrals are the highest-value deal type in the engine — they close at 2-3x the rate of
cold HOT replies. Aaron must walk into every referral discovery call with the same ADB depth
he gets from a cold HOT reply, or better.

The standard Layer 2 (5-phase, 62-column CSV) exists to qualify and score strangers. A referral
has already been pre-qualified by a client who knows SELLL's ICP intimately. The fast-track
skips qualification work but does NOT skip the scoring, ADB generation, or proof assignment that
makes discovery calls effective.

**What the fast-track skips:**
- Phase 0 intelligence gates (DNC, anti-ICP, re-engagement, bounce estimate — referrals from
  active clients are implicitly pre-qualified)
- Phase 1 list-building (the referral is the list)
- Phase 4 pre-engagement scheduling (referral relationship replaces warm-up; connection request
  optional but not required)
- Thread B/C architecture (single-contact engagement; referred contact is primary)

**What the fast-track runs:**
- Phase 2 account enrichment (must score the company)
- Phase 2E lead scoring (all 7 dimensions — referrals still need to be scored)
- Phase 3 contact intelligence (confirm title, seniority, LinkedIn activity)
- Phase 4F reply probability calculation (with referral warm-path bonus)
- ADB generation (abbreviated — no pre-engagement context, but full company/proof/discovery prep)
- Phase 5D account card creation

---

## Fast-Track Inputs

Received from Layer 5 Phase 5A referral intake:

| Field | Source | Example |
|-------|--------|---------|
| Referred contact name | Client's message | "James Okafor" |
| Referred contact title | Client's message | "VP Sales" |
| Referred company name | Client's message | "Crestline Data" |
| Referred company domain | Inferred or client confirmed | crestlinedata.com |
| Referring client | Layer 5 referral log | Luminary Health / Sarah Chen |
| Relationship strength | Client's description | "close friend, same Pavilion chapter" |
| Stated pain | Client's description | "they have the same sequencer problem we had" |
| Intro type | How referral is being made | Direct intro email / name drop / CC |

---

## Fast-Track Protocol (Target completion: 30 minutes)

### Step FT-1 — Enrichment (10 minutes)

Run standard Phase 2 enrichment on the referral company:

```
Prospeo / FullEnrich lookup:
  → Confirm email for referred contact (verify deliverability)
  → Company employee count, ARR estimate, funding stage, sequencer, CRM
  → LinkedIn profile URL for referred contact

Record in: engine/referrals.md (update the referral entry with enriched data)
```

If the referred contact email is already known (direct intro): skip email verification.

---

### Step FT-2 — Lead + Contact Scoring (5 minutes)

Run Phase 2E scoring for the referral company (all 7 dimensions):

```
Dimension 1: Firmographic Fit (0-25)
Dimension 2: Technographic Fit (0-15)
Dimension 3: Pain Point Alignment (0-20)
  → Add +10 if referring client stated a specific pain that matches the referral
Dimension 4: Budget Capacity (0-20)
Dimension 5: Contact Access (0-10)
  → Score 10 automatically if intro is a direct CC or warm email (contact is expecting outreach)
  → Score 8 if name-drop (contact has been told to expect outreach)
Dimension 6: Timing Signals (0-10)
Dimension 7: Buying Intent (0-10)
  → Add +5 if referring client described active pain or active evaluation

Run Phase 3 contact intelligence score (0-50)
```

Run Reply Probability formula with referral warm-path bonus:

```
Warm Path Bonus = 100 (referral from active client = maximum warm path)
→ Warm Path contribution: 100 × 0.10 = 10 pts

This alone pushes most referrals into Tier 1 territory, even without compound signals.
A referral with a modest lead score of 65 and contact score of 30:
  (65 × 0.35) + (30 × 2 × 0.30) + (0 × 0.20) + (100 × 0.10) + (70 × 0.05)
= 22.75 + 18 + 0 + 10 + 3.5
= 54.25 → Tier 1 Standard (before any compound bonus)
```

---

### Step FT-3 — Hypothesis Assignment (5 minutes)

Select the most relevant hypothesis for the referral based on:

1. What the referring client said about their pain (use their exact words)
2. The referral company's profile (funding, hiring signals, sequencer stack)
3. The referred contact's role and tenure

```
Common referral hypothesis patterns:
  - Referred contact is a new VP Sales → H5 (even if beyond 45 days — referral context extends the window)
  - Referral company recently raised → H1
  - Referring client described "same sequencer problem" → H4
  - Referring client is a founder and referred another founder → H3

Record in: account card and fast-track output
```

---

### Step FT-4 — Abbreviated ADB Generation (5 minutes)

Generate a condensed Auto-Discovery Brief for the referral. This is shorter than a cold HOT-reply
ADB because pre-engagement context doesn't exist, but it must contain all the discovery-prep
sections that matter:

```
Claude API call (abbreviated ADB):
  System: Generate a pre-call discovery brief for a warm referral introduction.
          This is not a cold prospect — they have been introduced by a current client.
          Adjust tone: assume they are receptive, not skeptical. Focus on confirmation and
          qualification, not persuasion.

  User:
    REFERRAL CONTACT: [name], [title] @ [company]
    REFERRED BY: [client name], [client company] — "[their exact words about the pain]"
    COMPANY PROFILE: [enrichment data summary]
    HYPOTHESIS: [H-code and description]
    LEAD SCORE: [score] | REPLY PROBABILITY: [score]
    PROOF POINT: [best-matched proof from proof-library.md for this company profile]
    INTRO TYPE: [direct CC / name drop / email intro]

  Generate:
    1. SITUATION (2 sentences): What we know about this company + why the referral makes sense
    2. THE INTRO CONTEXT (1 sentence): What the referring client told them to expect
    3. TOP 3 DISCOVERY QUESTIONS (tailored to their role + hypothesis):
    4. MOST LIKELY CONCERN (warm referrals rarely object — they ask about fit and timeline)
    5. PROOF POINT (matched to their situation — 2 sentences)
    6. ROI ESTIMATE (from roi-calculator.md with their numbers)
    7. RECOMMENDED OPENING LINE (acknowledges the referral, sets the tone)
```

Deliver abbreviated ADB to Slack + save to engine/accounts/[slug].md.

---

### Step FT-5 — Account Card + Handoff to Layer 4 (5 minutes)

```
Create engine/accounts/[slug].md using account-card-template.md:
  → All enrichment data
  → Hypothesis assignment
  → Lead score + reply probability
  → "Referral Source: [Client] / [Contact]" at top of card
  → Abbreviated ADB embedded
  → Referral warm-path type: "Client Referral — [strength]"

Trigger Layer 4 Phase 1 (Deal Intake):
  → Create HubSpot deal: stage = "HOT" (referrals skip Stage 0 — they're warm by definition)
  → DHS initial: 65 (referral baseline — warm relationship adds +15 vs. cold HOT entry of 50)
    Rationale: Decision Maker is confirmed (they were introduced directly), warm relationship
    implies some budget awareness, and the referral reduces competitive threat perception.
  → deals.md entry created
  → Slack alert: "📬 REFERRAL DEAL CREATED — [Company] / [Contact]
                   Referred by: [Client]
                   Reply Probability: [score] | Hypothesis: [H-code]
                   ADB: [link] | Account card: engine/accounts/[slug].md"
```

---

## Fast-Track Output Summary

| Output | File | Used By |
|--------|------|---------|
| Enriched referral contact record | engine/referrals.md | Layer 4, Layer 5 |
| Lead score + Reply Probability | Account card | Layer 4 Phase 1 |
| Abbreviated ADB | Slack + account card | Aaron (discovery prep) |
| Account card | engine/accounts/[slug].md | Layer 4 Phase 2, Phase 3 |
| HubSpot deal | HubSpot CRM | Layer 4 (all phases) |

---

## Fast-Track Timing Standards

| Step | Time | Who |
|------|------|-----|
| FT-1 Enrichment | 10 min | Automated (Prospeo + FullEnrich) |
| FT-2 Scoring | 5 min | Automated (n8n calculates) |
| FT-3 Hypothesis | 5 min | n8n recommends, Aaron confirms |
| FT-4 ADB generation | 5 min | Automated (Claude API) |
| FT-5 Account card + handoff | 5 min | Automated (n8n writes files) |
| **Total** | **30 min** | **Mostly automated** |

Target: referral ADB delivered to Aaron's Slack within 30 minutes of referral being logged
in engine/referrals.md.

---

## n8n Trigger

```
Workflow: selllo-referral-arm (Layer 5)
  → When referral logged in referrals.md + referred contact confirmed:
     → Trigger: selllo-referral-fast-track (this workflow)
     → Runs FT-1 through FT-5 in sequence
     → Delivers ADB to Slack on completion
     → Creates Layer 4 deal entry
```

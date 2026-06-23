# Compound Engagement Detector (CED) — Technical Reference
> Component of: Layer 3 Campaign Execution — Step 2E
> Implemented via: n8n + HubSpot API + Expandi
> Updated: 2026-06-22

---

## What the CED Is

The Compound Engagement Detector fires when **two or more contacts at the same company** show active buying behavior during the same campaign window.

**Why this matters:** A single contact opening an email is a personal signal. Two contacts at the same company — independently showing interest — is an **account-level buying signal**. It means the solution is being discussed internally, that multiple people are evaluating it, and that a buying committee is forming. This is the highest-conviction buying signal in B2B outbound.

No off-the-shelf tool detects this. CED requires:
1. Custom n8n logic to group contacts by company domain
2. BIS tracking across multiple contacts at the same account
3. Real-time cross-referencing when any BIS update fires

---

## Detection Logic

### Workflow Name: `selllo-ced-detector`

**Runs on:** Every BIS update (piggybacked on Node 4 of `selllo-bis-update` workflow)

```
On BIS update for contact at [company_domain]:

Node 1: Query all contacts at same domain
  HubSpot: GET /crm/v3/objects/contacts?email_domain=[company_domain]
  Filter: lead_status ≠ "DNC" AND lead_status ≠ "Unsubscribed"
  Extract: { contact_id, first_name, title, reply_probability, last_bis_event }

Node 2: Count contacts with BIS > 50
  high_intent_contacts = contacts WHERE reply_probability > 50

Node 3: Evaluate CED condition
  IF count(high_intent_contacts) ≥ 2:
    → Has CED already fired for this company in this campaign? (check account card flag)
      YES → Update CED record, no new alert (avoid spam)
      NO  → COMPOUND ENGAGEMENT DETECTED → fire CED protocol
```

---

## CED Protocol (Fires on Detection)

```
Step 1: Score upgrade
  account lead_score += 15
  Update HubSpot deal: lead_score = new_score
  HubSpot deal stage upgrade: if "In Sequence" → "Active Evaluation"

Step 2: Slack alert
  Message:
  "⚡ COMPOUND ENGAGEMENT — [Company Name]
   ─────────────────────────────────────────────
   [Contact A name], [Title]: BIS [score] — [most recent event]
   [Contact B name], [Title]: BIS [score] — [most recent event]
   [Contact C name (if any)], [Title]: BIS [score]

   Account-level buying signal. Multiple stakeholders are researching SELLL.
   This company is in active evaluation mode.

   RECOMMENDED ACTIONS:
   □ Prepare multi-stakeholder brief (ADB for each contact)
   □ Thread C: [status — active / not yet / conditions not met]
   □ Review: Is the right economic buyer in Thread C?
   □ Consider accelerating Thread A sequence: can Email 3 move to tomorrow?

   Account card: engine/accounts/[slug].md"

Step 3: Thread C escalation check
  IF tier = "1 Priority" AND arr_estimate ≥ $30K AND Thread C not active:
    → n8n sends Aaron prompt:
      "Thread C conditions met for [Company]. Approve Thread C activation?
       Reply APPROVE to activate or SKIP to hold."
    → On APPROVE: Thread C fires immediately (does not wait for Day 8)

Step 4: Multi-stakeholder brief generation
  For each high-intent contact:
    Call Claude API → ADB (same as Phase 3B but framed as "one of multiple stakeholders")
    Highlight: "This contact's colleague [Name] is also showing buying signals."
  Save all briefs to engine/accounts/[slug].md

Step 5: Account card update
  Append to engine/accounts/[slug].md:
  ## Compound Engagement Events
  | Date | Contact A | BIS | Contact B | BIS | Action Taken |
  |------|----------|-----|----------|-----|-------------|
  | [date] | [Name/Title] | [score] | [Name/Title] | [score] | Thread C approved / multi-brief generated |

Step 6: HubSpot deal note
  POST /crm/v3/objects/notes
  { "body": "COMPOUND ENGAGEMENT detected [date]. [N] contacts at BIS > 50.
             Multi-stakeholder evaluation in progress. Thread C: [status]." }
```

---

## CED Severity Levels

| Contacts at BIS > 50 | Severity | Action |
|---------------------|---------|--------|
| 2 contacts | ELEVATED | Slack alert + multi-brief + Thread C check |
| 3 contacts | HIGH | Above + accelerate Thread A + recommend Aaron's personal call |
| 4+ contacts | CRITICAL | All above + immediate Aaron notification + pause automated sequence for personal outreach |

---

## Multi-Thread Coordination Under CED

When CED fires, the thread coordination rules shift:

```
Normal operation:
  Thread A: day-count hook
  Thread B: champion angle (Day 5)
  Thread C: economic buyer (Day 8)

CED operation:
  Thread A: same, but email interval compressed if BIS > 80
            (move Email 3 send from Day 8 to Day 6 — they're hot, strike faster)
  Thread B: if not yet active, activate immediately (don't wait for Day 5)
  Thread C: if not yet active, activate immediately if conditions met
  All threads: coordinate messaging — no two threads should say the same thing
               Thread A: problem angle | Thread B: team/process angle | Thread C: ROI angle

Coordination rule: Generate a "thread alignment brief" showing what each thread is saying.
Ensure no overlap. Ensure the three messages complement each other.
```

---

## CED + The Buying Committee Play

When CED fires at severity ELEVATED or higher, Layer 3 shifts from "individual contact outreach" to "buying committee orchestration."

**What changes:**
1. Each thread's message adapts to its contact's likely buying committee role
2. The discovery brief (ADB) for Thread A notes: "At least one other stakeholder at this company is also engaged. Ask who else is involved in evaluating this."
3. The discovery call question set shifts to include: "Who else would need to be aligned on a decision like this?"
4. The proposal (if generated) is formatted for multiple stakeholders — not just the initial contact

**SELLL pitch:** "We don't just find you one buying signal — we detect when a company is in active committee evaluation and orchestrate all three threads to meet that committee where they are."

---

## Example CED Event (Prism Analytics)

```
Campaign: SELLL — H5 New VP Sales — 2026-06-25
Company: Prism Analytics (domain: prismanalytics.com)

Thread A: Emma Watts (VP Sales)     — BIS: 78 (opened Email 1 3× + clicked Loom)
Thread B: James Okafor (RevOps Mgr) — BIS: 65 (opened Email 1 + LinkedIn connection accepted)

CED fires at 14:32 on Day 4.

Slack alert:
⚡ COMPOUND ENGAGEMENT — Prism Analytics
Emma Watts, VP Sales: BIS 78 — opened Email 1 three times + Loom click
James Okafor, RevOps Manager: BIS 65 — opened Email 1 + accepted LinkedIn connection
Account-level buying signal. Stage → Active Evaluation.
Thread C: conditions not met (arr_estimate < $30K estimate). Recommend manual check.
Account card: engine/accounts/prism-analytics.md

n8n actions taken:
✅ Lead score: 71 → 86
✅ HubSpot stage: "In Sequence" → "Active Evaluation"
✅ Multi-stakeholder ADB generated for both contacts
✅ Account card updated
✅ Aaron prompted: "Thread C conditions: ACV estimate < $30K — override?"
```

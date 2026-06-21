# Learning Loops — SELLL.io GTM Brain
> Brain Layer: Learning | Updated: 2026-06-21
> Inspired by: Anfloy's "reasoning that gets sharper each month" and outcome-based learning architecture
> This is how the brain evolves. Without this layer, the context file is a document. With it, it becomes an intelligence system.

The brain gets smarter through 6 structured feedback loops. Each loop takes an outcome (reply, meeting, win, loss) and uses it to update the brain's decision-making logic. This happens weekly — automatically — via the `revenue-reporting` skill on Fridays.

---

## The Core Principle

```
Every outcome is data.
Every data point updates the model.
Every model update improves the next decision.

Signal → Outreach → Reply → Meeting → Deal → Outcome
                                                  │
                              ┌───────────────────┘
                              ▼
                    Update the brain (6 loops below)
                              │
                    Better signal detection
                    Better targeting
                    Better messaging
                    Better discovery questions
                    Better objection handling
                    Better proof point selection
```

---

## Loop 1: Hypothesis Confidence Scoring

**What it updates:** `hypothesis_set.md` — the confidence score on each of the 7 hypotheses

**Trigger:** Every Friday, or after a campaign closes

**Input data:**
- Which hypothesis triggered each account's entry into the pipeline (from lead-scores.csv)
- What the reply rate was per hypothesis (from campaign tracking)
- What the meeting rate was per hypothesis
- Whether the discovery call confirmed the hypothesis (from call-intelligence.md)
- Whether the deal closed (from state.md)

**Update logic:**

| Outcome | Hypothesis Adjustment |
|---------|----------------------|
| Reply rate > 4% | Confidence +2 | Expand list size 3x |
| Reply rate 3-4% | Confidence +1 | Maintain current list size |
| Reply rate 2-3% | No change | Continue testing |
| Reply rate < 2% over 50+ sends | Confidence -2 | Rotate search angle, test new hook |
| Discovery call confirms hypothesis | Confidence +1 |
| Discovery call disconfirms hypothesis | Confidence -2 |
| Deal closes from this hypothesis | Confidence +3 |
| Deal lost — hypothesis was wrong | Confidence -1 |

**Confidence scale:**
- 10: Proven repeatedly. Primary search angle. Expand aggressively.
- 7-9: Strong. Maintain and optimize.
- 4-6: Developing. Continue testing, refine the angle.
- 1-3: Weak signal. Test a different angle before abandoning.
- 0: Rotated out. Document what failed and why.

**Output:** Updated confidence score in hypothesis_set.md Hypothesis Status Log

---

## Loop 2: ICP Scoring Weight Calibration

**What it updates:** `selll_context.md` ICP Scoring Rubric — the weight assigned to each dimension

**Trigger:** After every 10 closed deals (won or lost)

**Input data:**
- ICP scores of every account that entered the pipeline
- Which accounts resulted in a meeting
- Which accounts converted to qualified opportunities
- Which accounts closed (won or lost)
- The ICP score dimension breakdown (firmographic, technographic, pain, budget, contact access, timing)

**Update logic:**

For every batch of 10 deals, analyze:

1. Which ICP score dimension was highest for won deals?
2. Which dimension was highest for lost deals?
3. Which dimension had the lowest correlation with close rate?
4. Which dimension was most often wrong (scored high but outcome was poor)?

**Example calibration:**

*If analysis shows:* Timing Signals (currently weighted at 10 pts) correlates most strongly with close rate (accounts with high timing scores close at 3x the rate of accounts with low timing scores)

*Adjustment:* Increase Timing Signals weight from 10 to 15 pts, reduce Technographic Fit from 15 to 10 pts

**Log format (add to selll_context.md):**
```
ICP WEIGHT CALIBRATION — [Date]
Previous weights: [list]
New weights: [list]
Reasoning: [what data drove the change]
Sample size: [N deals analyzed]
```

---

## Loop 3: Message Performance Library

**What it updates:** `selll_context.md` Messaging Framework — subject lines, hooks, proof points

**Trigger:** After every campaign closes (or monthly if campaigns run long)

**Input data:**
- Subject line open rates (A/B test results)
- Email opening line reply rates
- Which case study or proof point produced the most replies
- Which proof point appeared in closed-won deals most often
- LinkedIn post engagement rates
- Loom video watch rates and reply rates

**Update logic:**

**Subject lines:**
- Top 3 open rate performers → kept in rotation, tagged as PROVEN
- Bottom performers (< 30% open rate) → removed from rotation, logged in history
- New experiments: 2 new subject lines added per campaign cycle (replace the lowest performers)

**Email hooks (opening lines):**
- Top reply rate performers → upgraded to PRIMARY (use in Email 1 of all new sequences)
- Underperformers → demoted to A/B test slot in Email 2 or Email 4
- New buyer language from call-intelligence.md → tested as new hooks

**Proof points:**
- Track proof point to reply correlation per persona
- Track proof point to meeting correlation
- Track proof point to close correlation
- The proof point most correlated with closed deals → featured in ALL Email 3s and all Looms

**Output format (added to messaging section of selll_context.md):**
```
PROVEN PERFORMERS (as of [date]):
- Best subject line (CRO): "[subject]" — [X]% open rate | N sends
- Best subject line (Founder): "[subject]" — [X]% open rate | N sends
- Best hook (CRO): "[first line]" — [X]% reply rate | N sends
- Best proof point (all personas): [client] — appears in [X]% of closed deals
EXPERIMENTS IN ROTATION:
- [subject line being tested] | [launch date] | [current open rate]
RETIRED (with reason):
- "[subject line]" — retired [date] — [open rate] — [reason]
```

---

## Loop 4: Objection Pattern Evolution

**What it updates:** `objection-bank.md` — Pattern Tracker, counter confidence scores

**Trigger:** After every discovery call and every won/lost deal

**Input data:** `call-intelligence.md` post-call logs (Category 2: Objections Raised)

**Update logic:**

**Objection frequency tracking:**
- Which objections appear most often? (rank by frequency)
- Which objections appear most often in the calls that convert to deals? (leading indicator)
- Which objections appear most often in the calls that don't convert? (disqualification signal)

**Counter performance:**
- Which counters result in the objection being resolved and the deal progressing?
- Which counters result in stalling or lost deals?
- When a counter consistently fails (< 30% resolution rate over 5+ uses): rewrite the counter

**New objection protocol:**
When a new objection appears that isn't in the bank:
1. Add it to the bank immediately with LOW confidence counter
2. Note it in coaching notes
3. Test 2 different counters over the next 5 calls
4. Promote the better performer to MEDIUM confidence after 3 successes

---

## Loop 5: Signal Accuracy Calibration

**What it updates:** `signal-monitor` SKILL.md and `trigger-playbooks.md`

**Trigger:** Monthly

**Input data:**
- Which signals led to accounts being added to the pipeline
- Which of those accounts resulted in meetings
- Which of those accounts resulted in closed deals
- Signal-to-meeting conversion rate by signal type
- Signal-to-close rate by signal type

**Update logic:**

For each of the 7 signal types, track:
- Signal detection accuracy (was it a real signal or noise?)
- Signal-to-reply rate (does this signal reliably produce replies?)
- Signal-to-meeting rate
- Signal-to-close rate
- Time window accuracy (is the urgency window correct — 24h, 48h, etc.?)

**Calibration example:**
*If analysis shows:* LinkedIn posts about pipeline (currently MEDIUM urgency / 5 days) are converting to meetings at 3x the rate of SDR hiring signals (currently HIGH urgency / 3 days)

*Adjustment:* Upgrade LinkedIn posts to HIGH urgency / 3 days. Review SDR hiring signal urgency window.

---

## Loop 6: Win/Loss Pattern Analysis

**What it updates:** `institutional-memory/wins.md` and `institutional-memory/losses.md` + ICP recalibration

**Trigger:** After every deal closes (won or lost)

**Input data:** Full deal file (from state.md through all stages)

**Win pattern analysis — questions to answer:**
1. What was the ICP score? (Was the model's prediction accurate?)
2. Which hypothesis triggered outreach?
3. Which persona was the primary contact?
4. Which proof point appeared most in the winning sequence?
5. What was the timeline from first email to close?
6. Was there a referral or warm path involved?
7. What objections were raised and resolved?
8. What did they say at the end that revealed why they chose SELLL?

**Loss pattern analysis — questions to answer:**
1. What was the ICP score? (Was the model's prediction accurate?)
2. At which stage did the deal die?
3. What was the stated reason for the loss?
4. What was the real reason (from call-intelligence coaching notes)?
5. Which competitor did they choose, if any?
6. Was there an objection we couldn't resolve?
7. What would we do differently?
8. Should this be re-engaged in 90 days with a better counter?

**Output:** Updated `institutional-memory/wins.md` and `institutional-memory/losses.md` with full pattern log.

---

## Weekly Brain Update Protocol (Every Friday)

The `revenue-reporting` skill runs a weekly brain update after the weekly report is generated.

```
WEEKLY BRAIN UPDATE — [Date]

Loop 1 — Hypothesis Confidence:
  □ Pull reply rates per hypothesis from campaign data
  □ Adjust confidence scores in hypothesis_set.md
  □ Flag any hypothesis below confidence 3 for review

Loop 2 — ICP Weight Calibration:
  □ Review only if 10+ new deals closed since last calibration
  □ If not enough data: skip, note in update log

Loop 3 — Message Performance:
  □ Pull A/B test results from sequencer
  □ Update PROVEN PERFORMERS section in selll_context.md
  □ Retire bottom 1-2 performers
  □ Add 1-2 new experiments from call-intelligence buyer language

Loop 4 — Objection Pattern:
  □ Pull call-intelligence logs from the week
  □ Update Pattern Tracker in objection-bank.md
  □ Flag any new objections for counter development

Loop 5 — Signal Accuracy:
  □ Monthly check: skip if not month end
  □ End of month: run signal-to-meeting analysis, update urgency windows

Loop 6 — Win/Loss:
  □ Any deals that closed this week (won or lost): run full pattern analysis
  □ Update institutional-memory files
  □ If 3+ losses with same pattern: add to coaching notes + adjust ICP scoring

BRAIN VERSION: update the "Last Updated" date at top of BRAIN.md
LOG: add entry to Brain Update Log below
```

---

## Brain Update Log

| Date | Loop(s) Run | Key Changes Made | Impact Expected |
|------|------------|-----------------|----------------|
| 2026-06-21 | — | Brain initialized | Baseline established |

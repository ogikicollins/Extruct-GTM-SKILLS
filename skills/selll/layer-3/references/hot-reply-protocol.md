# HOT Reply Protocol — Technical Reference
> Component of: Layer 3 Campaign Execution — Phase 3
> Covers: Speed-to-Book, Auto-Discovery Brief, Meeting Conversion
> Implemented via: n8n + Claude API + Instantly + HubSpot + Slack
> Updated: 2026-06-22

---

## The Speed Rule — Why This Reference Exists

**Reply-to-booking speed benchmark:**
- Response in < 1 hour: 85% show rate
- Response in 1–2 hours: 72% show rate
- Response in 2–6 hours: 54% show rate
- Response in 6–24 hours: 40% show rate
- Response > 24 hours: 22% show rate

Source: industry B2B SaaS outbound benchmarks. Every hour of delay costs ~3–5 percentage points of meeting show rate.

Most founders and SDRs respond in 6–24 hours. Layer 3's HOT Reply Protocol responds in 60 seconds (MEETING_REQUEST) or ensures a human response within 2 hours (HOT) — with an automated holding email that buys time without appearing slow.

---

## Classification → Action Routing (≤ 60 seconds)

```
Reply received → n8n webhook fires → Claude API classifies (< 5 seconds)

MEETING_REQUEST:
  T+5s:  Auto-send calendar link via Instantly API (no Aaron required)
  T+5s:  Generate ADB (async — delivered to Slack within 60s)
  T+5s:  HubSpot: stage → "Meeting Requested", hs_lead_status → "Meeting Requested"
  T+5s:  Pause all sequences for this contact (email + LinkedIn)
  T+60s: Slack alert: "MEETING_REQUEST handled — calendar sent to [Contact] at [Company]"

HOT:
  T+5s:  Pause all sequences (email + LinkedIn) for this contact
  T+5s:  Generate ADB (async — delivered to Slack within 60s)
  T+5s:  HubSpot: stage → "HOT Engaged", hs_lead_status → "HOT — Needs Response"
  T+10s: Slack alert (see HOT Alert format below)
  T+60s: Start 1-hour countdown timer (Speed-to-Book Auto-Assist)
```

---

## HOT Alert Format (Slack)

```
🔥 HOT REPLY — [First Name] [Last Name], [Title] @ [Company]
─────────────────────────────────────────────────────────────────
THEIR REPLY:
"[Full reply text verbatim]"

CONTEXT:
Sequence: [variant] | Email: [N] | Sent: [date/time]
BIS: [score] | Hypothesis: [H-code] | Urgency: [band]
Thread: [A/B/C] | Proof assigned: [proof point]

CLASSIFICATION RATIONALE:
[Claude's one-line rationale for HOT classification]

⏱ 2-HOUR SLA: Respond by [exact time — now + 2h]
─────────────────────────────────────────────────────────────────
DRAFT REPLY (Aaron confirms and sends):
[Pre-drafted reply from inbox-reply skill — references their specific reply text]

Actions:
[ ] Send draft reply    [ ] Edit then send    [ ] View ADB below
─────────────────────────────────────────────────────────────────
📋 AUTO-DISCOVERY BRIEF
[Full ADB generated inline — see ADB format below]
```

---

## Speed-to-Book Auto-Assist (n8n Timer Logic)

```
State machine for HOT reply:

T+0:   HOT classified. SLA timer starts. Aaron alerted.
T+60m: Check: Has Aaron responded?
         YES (reply sent via Instantly or manual) → stop timer, mark SLA met
         NO  → Auto-send holding email:

                Subject: [reply to existing thread]
                Body:
                "Just flagged this — give me until [original_reply_time + 2h].
                 Want to make sure I give you a proper response.
                 Aaron"

               → Slack escalation: "⚠️ HOT SLA approaching — holding email sent.
                                    You have 1h to respond. ADB attached above."

T+120m: Check: Has Aaron responded?
         YES → stop timer, mark SLA met (holding email bought the time)
         NO  → 🚨 Slack escalation:
                "SLA BREACHED — [Contact] at [Company]
                 High buying intent. Respond NOW.
                 Every 30 minutes of additional delay reduces meeting probability by ~3%.
                 Go to: [Instantly inbox link for this thread]"

T+180m: If still no response → auto-send a second holding note (different wording):
         "Following up on my note — happy to answer over email if that's easier.
          What specifically prompted your reply?"
         → Slack: final escalation with priority tag @Aaron

After Aaron responds:
  → Clear SLA timer
  → Mark in HubSpot: sla_met = true, response_time_minutes = [N]
  → Log in account card: "HOT reply response time: [N] minutes"
  → Update campaign metrics: avg_hot_response_time
```

---

## Auto-Discovery Brief (ADB) — Full Specification

### Claude API System Prompt

```
You are generating a pre-call discovery brief for Aaron Shepard, founder of SELLL.io.
SELLL.io builds automated outbound revenue infrastructure for B2B SaaS companies at 25–150 employees.
Aaron is about to respond to or speak with a prospect who has replied positively.

This brief must be:
- Readable in under 2 minutes
- Specific to THIS contact and THIS company (not generic templates)
- Actionable: every section tells Aaron exactly what to say or ask
- Written in Aaron's voice (direct, peer-to-peer, no corporate padding)

Format: structured sections, short sentences, no bullet lists longer than 3 items.
Do not pad. Every sentence must be load-bearing.
```

### Claude API User Prompt (assembled by n8n)

```
CONTACT: {{first_name}} {{last_name}}, {{title}} at {{company_name}}
THEIR REPLY TEXT: {{reply_body}}
HYPOTHESIS: {{hypothesis}} ({{hypothesis_description}})
SEQUENCE EMAIL THEY REPLIED TO: Email {{email_number}} — Subject: {{email_subject}}

ACCOUNT INTELLIGENCE:
{{account_card_content}}

ENRICHMENT DATA:
Employee count: {{employee_count}} | SDR team: {{sdr_team_size}} | Sequencer: {{sequencer_tool}}
ARR estimate: {{arr_estimate}} | Funding: {{funding_stage}} | Days since raise: {{days_since_funding}}
Vertical: {{primary_vertical}} | Timezone: {{hq_timezone}}

OUTREACH CONTEXT:
Sequence variant: {{sequence_variant}} | Proof assigned: {{assigned_proof_point}}
BIS score: {{reply_probability}} | Urgency: {{urgency_band}} | Tier: {{tier}}
Thread: {{thread}} | Other active threads at this company: {{thread_status}}
Warm path: {{warm_path_type}}

PROOF LIBRARY DATA:
{{proof_library_entry for assigned_proof_point}}

ROI INPUTS (run roi-calculator logic):
SDR count: {{sdr_team_size}} | Current conv rate est: 3.2% | Target: 12.4%
Monthly pipeline value per SDR: estimate from arr_estimate / 12 / headcount

Generate the brief using the 7-section format below.
```

### ADB Output Format

```markdown
📋 DISCOVERY BRIEF — [First Name] [Last Name], [Title] @ [Company]
Generated: [timestamp] | BIS: [score] | SLA: respond by [time]
═══════════════════════════════════════════════════════════════════

1. SITUATION (what we know — 3 sentences max)
[Company] is a [employee_count]-person [vertical] SaaS, [funding_stage]. [First Name]
[context from reply + account card — what they inherited, their mandate, their situation].
[What their reply reveals about where they are in their buying journey].

2. WHY THEY REPLIED (1–2 sentences)
[Specific observation about what in the email landed — based on which email they replied to
and what they said. Not generic. References the specific hook or situation they responded to.]

3. WHAT THIS CALL ACTUALLY IS
[Awareness / Active Pain / Active Evaluation / Decision Ready]
[One sentence on how to open: what they want from this call based on their reply tone]

4. TOP 3 DISCOVERY QUESTIONS (for this specific person)
Q1: "[Question — most important for understanding their situation]"
    Why ask: [one-line rationale]
Q2: "[Question — reveals budget, timeline, or authority]"
    Why ask: [one-line rationale]
Q3: "[Question — the one that reveals whether this is qualified or not]"
    Why ask: [one-line rationale]

5. MOST LIKELY OBJECTION + COUNTER
Objection: "[Most probable pushback based on their role, reply tone, or vertical]"
Counter: "[Counter from objection-bank.md + proof point — 2 sentences, Aaron's voice]"

6. PROOF POINT TO DEPLOY
[proof_person], [proof_company] — [proof_situation in 1 sentence].
Result: [proof_outcome].
When to use: [specific moment in the call to introduce this proof].
[If Stefan Golz quote confirmed: include verbatim. If not: use paraphrase framing.]

7. ROI ESTIMATE (their numbers)
[Company] with [sdr_team_size] SDRs, est. [current_meetings]/month.
SELLL target: [projected_meetings]/month.
At [estimated_close_rate]% close rate, est. [acv] ACV: [pipeline_delta] additional ARR/month.
Setup payback: [payback_months] months. Monthly ROI after payback: [roi_multiple]×.

NEXT STEP (what to close the call with)
[Specific recommended next action based on their buying stage:
  Decision Ready: "Get a proposal in front of them today"
  Active Evaluation: "Agree next steps — who else needs to see this"
  Active Pain: "Propose a 90-day scope call — just you and them"
  Awareness: "Send the ROI calculator output, follow up in 48h"]
═══════════════════════════════════════════════════════════════════
```

---

## ADB Delivery

1. **Slack message** (inline with HOT alert — see HOT Alert Format above)
2. **Account card** (`engine/accounts/[slug].md` → "Discovery Briefs" section)
   - Timestamped
   - Linked to which reply triggered it
3. **HubSpot note** (attached to the deal)

Aaron does NOT need to open any file. Everything he needs is in the Slack message.

---

## Meeting Confirmation + Pre-Call Flow

After the meeting is booked (calendar link accepted):

```
n8n calendar webhook fires (Cal.com / Calendly integration):

1. HubSpot: stage → "Meeting Confirmed"
   Add meeting date/time to deal properties

2. Send pre-call confirmation email (Instantly, same thread, T−24h before call):
   Subject: [reply to existing thread]
   Body:
   "[First Name], looking forward to [day] at [time].
    30 minutes is plenty to understand your situation and show you what we've built.
    No prep needed from your side — just come as you are.
    Aaron"

3. Send pre-call reminder (T−1h before call, n8n timer):
   If contact's calendar doesn't auto-send reminder (Cal.com does by default):
   One-line text DM via Expandi:
   "Call with Aaron at [time] — looking forward to it."

4. Update account card: meeting confirmed, date/time, ADB filed
5. Aaron prompted T−15min: "Call with [First Name] at [Company] in 15 minutes.
                              ADB: [link]. Discovery framework: brain/discovery-framework.md"
```

---

## Post-Meeting Protocol

```
Within 1h of call ending (Aaron runs or n8n prompts):

1. Log call intelligence (brain/call-intelligence.md → 8-category extraction):
   □ Confirmed pain (their exact words)
   □ Budget signal (range stated / implied)
   □ Authority (decision maker confirmed / needs sign-off / committee)
   □ Competitor mentioned
   □ Timeline stated
   □ Objections raised (for objection-bank.md update)
   □ Buying signals
   □ Agreed next steps

2. Score the call (discovery-framework.md rubric):
   Pain: /10 | Budget: /5 | Authority: /5 | Timing: /5
   Total: /25
   ≥ 18: Qualified → trigger auto-proposal (Step 3E)
   12–17: Needs nurture → deal-nurture skill
   < 12: Disqualified → note reason, close in HubSpot

3. n8n auto-actions based on score:
   ≥ 18: Auto-proposal pre-generation fires
   12–17: deal-nurture skill queued
   < 12: HubSpot closed-lost + institutional-memory/losses.md entry

4. Send post-call follow-up (within 2h of call, Instantly or personal):
   Subject: "[First Name] — next steps from our call"
   Body: [Specific reference to one thing they said] + agreed next step + timeline
   Never generic. Never "Thanks for the call."
```

---

## Speed Benchmarks — SELLL vs. Industry

| Metric | Industry Average | SELLL Layer 3 Target |
|--------|----------------|---------------------|
| Time to first reply after HOT | 6–24 hours | < 2 hours (2h SLA) |
| Time to calendar link for MEETING_REQUEST | 1–4 hours | < 60 seconds (auto) |
| Pre-call prep time (Aaron) | 15–30 minutes | 2 minutes (ADB in Slack) |
| Proposal delivery post-discovery | 3–5 days | Same day (auto-drafted) |
| Reply → confirmed meeting rate | 40–60% | Target: 70–80% |

**The compounding effect:** Faster response → higher show rate → more meetings → more proposals → more pipeline. Layer 3 doesn't just automate outreach — it makes every positive signal count more.

---
name: growthflare-multi-thread
description: >
  Contact 2–3 stakeholders at the same Tier 1 target account simultaneously
  with different angles, different personas, and coordinated timing so
  multiple internal conversations create urgency and internal champions.
  Modifies people-search and email-generation to produce parallel threads per
  account. Lifts meeting rates 40–60% on Tier 1 accounts vs. single-contact
  outreach. Part of the Growthflare Revenue Engine — Layer 2 + 3 amplifier.
  Triggers on: "multi-thread", "multiple contacts", "contact everyone at the
  company", "multi-stakeholder outreach", "threading the account", "parallel
  outreach", "contact the whole buying committee", "account-based outreach".
---

# Multi-Thread

Contact 2–3 people at the same Tier 1 account simultaneously — different angles, different personas, coordinated timing. When one of them forwards an email to another, or when they mention your name internally, it creates buying urgency that single-contact outreach never achieves.

The goal is not to spam a company. It is to create **multi-directional internal momentum** so that the decision to buy feels like it came from inside the organization — not from one salesperson's persistence.

---

## When to Multi-Thread

- **Always** for Tier 1 accounts (score 70+, estimated deal value > $25K ACV)
- When the buying committee is known to include 2+ stakeholders (from account research)
- When Email 1 has been sent with no reply after 5 days — add a second thread
- When a referral enters the pipeline — thread the referral contact AND find their economic buyer

**Do NOT multi-thread:**
- Tier 2 or Tier 3 accounts (not worth the complexity)
- Accounts where a meeting is already booked (don't confuse the buyer)
- Accounts with an active deal in Stage 3+ (Proposal / Close)

---

## The Multi-Thread Architecture

Each account gets 2–3 simultaneous threads. Each thread targets a different person with a different angle. The threads are **coordinated** but not identical — they must never look like a mass blast.

```
Thread A (Primary):   The decision maker — most senior person you can reach
Thread B (Champion):  The executor — person who would implement and champion internally
Thread C (Economic):  The economic buyer — signs the contract (CEO / CFO for large deals)
```

**Timing coordination:**
```
Day 0:   Thread A Email 1 sent
Day 2:   Thread B Email 1 sent (2-day offset prevents simultaneous arrival)
Day 5:   Thread C Email 1 sent (if 3-thread strategy)
Day 3:   Thread A follow-up (email or LinkedIn)
Day 5:   Thread B follow-up
Day 8:   Thread C follow-up (if 3-thread strategy)
```

The 2-day offset means the company sees your name internally at different moments — increasing the chance that someone mentions it to someone else.

---

## Contact Identification

### Step 1: Identify the buying committee

For each Tier 1 account, delegate to `people-search` to find 2–3 contacts:

| Thread | Target Title | Signal to Prioritize |
|--------|-------------|---------------------|
| A (Primary) | VP Sales / CRO / Head of Sales | Most senior revenue leader reachable |
| B (Champion) | Sales Operations Manager / Revenue Operations / Head of SDR | The person who would build and run the system |
| C (Economic) | CEO / CFO / Co-Founder | Signs off on budget; engage only for deals > $30K ACV |

**Who not to target in the same account:**
- Two people at the same level in the same function (two VPs of Sales doesn't exist — find the right one)
- Anyone below SDR Manager (too junior to champion)
- Anyone who has already replied negatively from Thread A — mark the company as "Not now"

### Step 2: Cross-check for conflicts

Before launching Thread B or C, confirm:
- Thread A has not received a "not interested" reply
- Thread A contact has not opened the email 0 times (may be wrong address)
- The account is not already in an active deal stage

---

## Angle Differentiation by Thread

Each thread must speak to a different pain point and a different proof point — even though the underlying offer is the same. If two threads sound identical and the prospects compare notes, it destroys trust.

### Thread A: The Decision Maker Angle

Focus: **pipeline predictability and ROI**. This person cares about hitting targets and justifying headcount.

```
Hook: "Your SDRs are spending 40% of their time not selling"
Proof: Devolon → 200+ daily conversations, same headcount
Ask: "Is predictable pipeline something you're actively solving this quarter?"
```

### Thread B: The Champion / Operator Angle

Focus: **tool efficiency and time savings**. This person is drowning in manual work. They want something that makes their job easier and makes them look good to their VP.

```
Hook: "Most SDR teams spend 40% of their day on research and list-building — not selling"
Proof: "We automated the entire research + personalization layer — SDRs log in and see a prioritized call queue, not a list-building task"
Ask: "Is that kind of automation something your team has talked about?"
```

**Note:** Thread B contacts are often the most valuable champions. They've felt the pain personally. If they get excited, they bring the decision maker to you — instead of you fighting for access.

### Thread C: The Economic Buyer Angle

Focus: **financial ROI and risk reduction**. CEO / CFO cares about cost vs. return and whether this is a locked-in retainer or a defined investment.

```
Hook: "What is your current GTM stack costing you vs. what it's producing?"
Proof: "Our 90-day build replaces $90K–$120K/year in SDR research labor for a 3-person team. Most clients see full ROI in under 90 days."
Ask: "Worth 15 minutes to run the ROI math for [Company]'s specific situation?"
```

---

## Script Generation

For each Tier 1 account, generate 2–3 email sequences — one per thread — with distinct:
- Subject lines (never reuse across threads)
- Opening lines (different signals referenced if possible)
- Proof points (different case study or outcome per thread)
- CTAs (different asks: Thread A = call, Thread B = "quick question", Thread C = ROI calculation)

Use the same base templates from `email-generation` but pass different persona + angle parameters per thread.

---

## Coordination Rules

Multi-threading must be managed carefully to avoid burning the account.

**Hard rules:**
1. If Thread A gets a POSITIVE reply → pause Threads B and C immediately. Do not let parallel threads land after a meeting is booked.
2. If Thread A gets a NOT INTERESTED reply → pause all threads. The account is off the market.
3. If Thread B or C gets a positive reply before Thread A → continue Thread A but shift Thread A to reference the Thread B/C conversation: *"I believe [Thread B name] mentioned we were in touch — happy to connect with the full team."*
4. Never mention other threads in the same email. The threads appear independent.
5. Maximum 3 threads per account. Never contact more than 3 people at one company simultaneously.

**Positive multi-thread outcome (what you want):**
Contact B emails Contact A: *"Hey — some company called SELLL reached out to me about our SDR process. Have you heard of them?"* → Contact A replies to your Thread A email that was sitting unopened.

This happens 15–25% of the time in well-run multi-thread campaigns.

---

## Workflow

### Step 1: Select Tier 1 multi-thread targets

Pull accounts from `lead-scores.csv` where score ≥ 70. These get the full 3-thread treatment. Accounts 60–69 get 2 threads (A + B only).

### Step 2: Delegate to people-search

For each account: find 2–3 contacts matching the Thread A / B / C profiles. Verify emails via `email-search`.

### Step 3: Generate thread sequences

For each account × thread combination:
- Select angle (Decision Maker / Champion / Economic Buyer)
- Select proof point from context file Proof Library
- Generate the full 5-email sequence + LinkedIn touchpoints

### Step 4: Build the coordination schedule

Create a per-account coordination table:

```markdown
## Multi-Thread Schedule: [Company]

| Thread | Contact | Role | Email 1 Date | Offset | Status |
|--------|---------|------|-------------|--------|--------|
| A | Sarah Chen | VP Sales | Day 0 | — | Pending |
| B | Mike Torres | RevOps Manager | Day 2 | +2 days | Pending |
| C | Lisa Park | CEO | Day 5 | +5 days | Pending |

Conflict check: ✅ No active replies. ✅ No active deal.
Pause trigger: If any thread gets a positive reply → pause all others immediately.
```

### Step 5: Upload to sequencer

Each thread goes into a separate campaign in the sequencer (Instantly). Use campaign naming: `[Company] — Thread A`, `[Company] — Thread B`.

**Do NOT put threads in the same campaign** — the sequencer cannot coordinate pause logic across leads in the same campaign.

### Step 6: Thread B Auto-Trigger (Day 5)

Thread B launches automatically — no manual check required.

**How it works:**

1. When Thread A Email 1 is added to Instantly, a Day 5 n8n timer fires automatically.
2. At Day 5: n8n queries Instantly for any positive reply from Thread A contact: `GET /emails?campaign_id=[ThreadA_campaign]&lead_email=[contact_email]&is_unread=false`
3. **If positive reply exists** (HOT / WARM / OBJECTION / MEETING_REQUEST detected by inbox-reply): n8n ABORTS — Thread B does not launch. `inbox-reply` already paused all threads.
4. **If no positive reply** (no reply, OOO, or bounce): n8n automatically:
   - Uploads Thread B contact to their Instantly campaign: `POST /leads/add`
   - Sets Thread B campaign start date to today
   - Fires `linkedin-automation` skill to begin Thread B LinkedIn outreach via Expandi
   - Logs in account card: "Thread B auto-launched Day 5 — [Thread B contact name]"

**Thread C auto-trigger (Day 8, Tier 1 only):**

Same logic: if no positive reply from Thread A or Thread B by Day 8, n8n auto-launches Thread C for accounts where `tier = "T1 Priority"` AND `estimated_acv > 30000`.

### Step 7: Coordination Monitoring

Real-time coordination is handled by the webhook architecture in `inbox-reply` — when any thread gets a positive reply, the webhook fires and pauses all parallel threads immediately. No daily manual check needed.

---

## Multi-Thread Metrics

Track in `revenue-reporting`:

| Metric | Multi-Thread Target | Single-Thread Baseline |
|--------|--------------------|-----------------------|
| Meeting rate (Tier 1) | 12–18% of accounts | 6–10% of accounts |
| Internal forwarding rate | 15–25% | N/A |
| Thread B champion rate | 20–30% of Thread B replies | N/A |
| Account conflict incidents | 0% | N/A |
| Avg threads before first reply | 1.4 | 1.0 |

---

## Output Files

```
claude-code-gtm/multi-thread/{slug}-schedule.md   — per-account coordination schedule
claude-code-gtm/engine/state.md                   — updated with multi-thread accounts
```

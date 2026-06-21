---
name: multi-thread
description: >
  Orchestrates multi-thread outreach for Tier 1 accounts — coordinates Thread A (decision
  maker), Thread B (champion), and Thread C (economic buyer) so they run in the correct
  sequence, pause when any thread gets a positive reply, and never conflict. Governs the
  timing of Thread B launch relative to Thread A progress. Prevents the single biggest
  multi-thread mistake: all threads getting a positive reply simultaneously with no
  coordination. Part of Layer 3 Outreach orchestration.
  Triggers on: "start thread B", "multi thread", "launch champion sequence", "thread
  coordination", "pause all threads", "thread B timing", "run multi-thread".
---

# Multi-Thread Orchestration — SELLL.io

> The golden rule: ANY positive reply from ANY thread = ALL other threads pause immediately.

---

## What Multi-Threading Is

For Tier 1 Priority accounts, SELLL reaches multiple contacts simultaneously — not through the same campaign, but through a coordinated sequence:

- **Thread A (Decision Maker):** VP Sales, CRO, or Founder — the buyer
- **Thread B (Champion):** SDR Manager, RevOps Lead, Senior SDR — the pain holder
- **Thread C (Economic Buyer):** CEO or CFO — only for accounts where the VP Sales needs approval

The goal is to create internal pressure from multiple directions. The decision maker hears from SELLL directly AND has their team asking about it. That combination is significantly more powerful than a single-thread approach.

**Multi-thread is NOT:**
- Spamming a company with identical messages
- Sending the same email to multiple people at once
- Bulk outreach to every contact at a Tier 1 account

Multi-thread is a coordinated, sequenced, role-specific outreach that respects timing and pauses on positive signal.

---

## Thread Launch Rules

| Thread | Launch Condition | Launch Timing |
|--------|-----------------|--------------|
| Thread A | Always — first and primary | Day 1 of campaign |
| Thread B | Thread A Email 1 has sent + 5 days with no positive reply | Day 5–6 from campaign start |
| Thread C | Thread A Email 2 has sent + 3 days with no positive reply + account is Tier 1 Priority + ARR > $5M | Day 10–12 from campaign start |

**Thread C is optional.** Only run it for accounts where:
1. The account is Tier 1 Priority (score 75+)
2. The buying decision likely involves budget approval (raise < 6 months, team expansion)
3. A verified email for the CEO or CFO was found

---

## Pause Rules (Non-Negotiable)

| Event | Action |
|-------|--------|
| Thread A gets a positive reply (HOT, WARM, question, meeting booked) | PAUSE Thread B and C immediately |
| Thread B gets a positive reply | PAUSE Thread A and C immediately |
| Thread C gets a positive reply | PAUSE Thread A and B immediately |
| Any thread gets a hard NO (from any contact) | STOP ALL threads for this company — add company to DNC if appropriate, contact to DNC if hard no was from that individual |
| Any thread gets an OOO | Pause THAT thread until the return date. Other threads continue. |

**Why this matters:** If Thread A is mid-conversation with the VP Sales, and Thread B emails the VP's SDR Manager simultaneously, the VP will hear about it — and it looks uncoordinated. The pause rule prevents this from ever happening.

---

## Thread Status Tracker (per account)

Update the account card (`engine/accounts/[company-slug].md`) with thread status after every action.

| Status | Meaning |
|--------|---------|
| ACTIVE | Thread is running normally |
| PAUSED — positive reply | Thread paused because another thread got a reply |
| WAITING — OOO | Thread paused, resume date noted |
| COMPLETE — no reply | All emails sent, no response |
| CONVERTED | Thread generated the meeting/reply that progressed the deal |
| STOPPED — hard NO | DNC or company removed from pipeline |

---

## Multi-Thread Orchestration Steps

### Step 1 — Identify Thread Contacts

At the end of Layer 2 Phase 3, confirm:
- Thread A contact: name, email, verified, persona assigned, sequence variant selected
- Thread B contact: name, email, verified (or LinkedIn-only if no email)
- Thread C contact (if applicable): name, email, verified

If any thread has no verified email → LinkedIn-only approach for that thread (DM not email sequence)

---

### Step 2 — Configure in Instantly

**Campaign structure for Tier 1 accounts:**

Create 3 separate Instantly campaigns per Tier 1 account (not one combined campaign):
- `[Company] — Thread A — [Hypothesis]`
- `[Company] — Thread B — [Hypothesis]`
- `[Company] — Thread C — [Hypothesis]` (if applicable)

**Why separate campaigns:** Pausing one thread without affecting others requires them to be separate campaigns in Instantly.

---

### Step 3 — Thread Launch Sequence

```
Day 1:    Thread A → Email 1 sends (decision maker)
Day 4:    Thread A → Email 2 sends
Day 5:    CHECK: Any Thread A positive reply?
          YES → Pause Thread B launch. Notify Aaron.
          NO  → Launch Thread B → Email 1 sends (champion)
Day 8:    Thread A → Email 3 (Loom) sends
          Thread B → Email 2 sends
Day 10:   CHECK: Any thread positive reply?
          NO + Tier 1 Priority + Thread C contact exists → Launch Thread C → Email 1
Day 13:   Thread B → Email 3 sends
Day 15:   Thread A → Email 4 sends
          Thread C (if active) → Email 2
Day 18:   Thread B → Email 4 (final) sends
Day 22:   Thread A → Email 5 (graceful exit) sends
Day 25:   Thread C → Email 3 (final, if applicable) sends
```

---

### Step 4 — Positive Reply Handling

When any thread gets a positive reply:

1. **Pause all other threads immediately** (manually in Instantly — set to "paused")
2. Log in account card: which thread got the reply, which threads were paused, date
3. Route the reply per `brain/reply-routing.md`
4. Notify Aaron if: HOT reply, meeting booked, or positive signal from Thread A (decision maker)
5. Only restart other threads if: the positive reply resolves as "not now" AND Aaron approves

---

### Step 5 — Account Card Update

After every Thread B or C launch, update `engine/accounts/[company-slug].md`:

```
THREAD STATUS UPDATE — [Date]
Thread A: [Status] — last touch [Date]
Thread B: [Status — LAUNCHED] — contact: [Name], email: [Email] — sequence: ChampionFollow_v1
Thread C: [Status] — contact: [Name] — [Active/Not launched]
Multi-thread note: [Any coordination events — pauses, replies, etc.]
```

---

## Multi-Thread Variables

For Thread B (champion) sequences, update the campaign CSV with:

| Variable | Value for Thread B |
|----------|-------------------|
| `{{sender_name}}` | SDR name (not Aaron) |
| `{{sender_title}}` | Sales Specialist, SELLL.io |
| `{{thread}}` | B |
| `{{sequence_variant}}` | ChampionFollow_v1 |

For Thread C (economic buyer), use CRO_v1 sequence with:

| Variable | Value for Thread C |
|----------|-------------------|
| `{{sender_name}}` | Aaron Shepard |
| `{{sender_title}}` | Founder, SELLL.io |
| `{{thread}}` | C |
| `{{sequence_variant}}` | CRO_v1 |

---

## SDR Operating Notes

**Thread B launch is the SDR's responsibility:**
- Check Thread A status every morning as part of daily runbook
- If Day 5 has passed and Thread A has no positive reply → launch Thread B that day
- If Thread A gets a reply at any point → immediately pause Thread B in Instantly

**What "pause" means in Instantly:**
- Go to the Thread B campaign
- Set status to "Paused"
- Add a note: "Paused — Thread A reply received [date]"
- Do NOT delete the campaign — the contacts remain in it for future use if re-engagement is needed

**If two threads get replies within 24 hours of each other:**
- Report to Aaron immediately
- Aaron decides which thread to continue based on the seniority of the contact and quality of the reply
- Pause both until Aaron decides

**Escalation rule:** Any Thread A positive reply → Aaron notified within 2 hours, regardless of time.

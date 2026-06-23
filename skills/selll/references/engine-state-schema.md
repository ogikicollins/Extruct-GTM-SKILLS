# Engine State Schema

The engine state file lives at `claude-code-gtm/engine/state.md`. Every layer reads and updates it. It is the single source of truth for where every account, campaign, and deal stands.

---

## Full Schema

```markdown
# SELLL Revenue Engine — State
Last updated: {YYYY-MM-DD HH:MM}
Engine version: 2.0
Company: {company_name}
Current active layer(s): {L1 / L2 / L3 / L4 / L5 / L6}

---

## Account Pipeline

| Stage          | Count | Last Updated |
|----------------|-------|-------------|
| ICP Universe   | N     | date        |
| Prospecting    | N     | date        |
| In Campaign    | N     | date        |
| Replied        | N     | date        |
| Meeting Booked | N     | date        |
| In Nurture     | N     | date        |
| Closed Won     | N     | date        |
| Closed Lost    | N     | date        |
| Suppressed     | N     | date        |

---

## Active Campaign(s)

| Campaign ID | Name | Sent | Open % | Reply % | Pos. Reply % | Mtgs | Status |
|-------------|------|------|--------|---------|-------------|------|--------|
| {id}        | name | N    | N%     | N%      | N%          | N    | Active |

---

## Deal Summary

| Stage       | Count | Est. Value |
|-------------|-------|-----------|
| Post-Disco  | N     | $N        |
| Evaluation  | N     | $N        |
| Proposal    | N     | $N        |
| Close       | N     | $N        |
| **Total**   | N     | **$N**    |

---

## Layer Status

| Layer | Name         | Status    | Last Run   | Next Action         |
|-------|-------------|-----------|------------|---------------------|
| L1    | Intelligence | Complete  | YYYY-MM-DD | —                   |
| L2    | Activation   | Complete  | YYYY-MM-DD | —                   |
| L3    | Outreach     | Active    | YYYY-MM-DD | check inbox daily   |
| L4    | Pipeline     | Active    | YYYY-MM-DD | run inbox-reply     |
| L5    | Close        | Active    | YYYY-MM-DD | N deals open        |
| L6    | Optimize     | Active    | YYYY-MM-DD | run Friday          |

---

## Scheduled Actions

- [ ] Daily: `inbox-reply` → `lead-scoring` → `meeting-automation` if HOT leads exist
- [ ] Thursday: `signal-monitor` (full scan)
- [ ] Friday: `revenue-reporting`
- [ ] As needed: `deal-nurture` (triggered by new meetings)
- [ ] As needed: `context-building` feedback loop (after weekly report)

---

## Signal Queue

Accounts detected by signal-monitor, pending Layer 2 activation:

| Domain | Company | Signal | Urgency | ICP Score | Added |
|--------|---------|--------|---------|----------|-------|

---

## This Week's Highlights

- Top hypothesis: {name} — {reply rate}%
- Best subject line: "{line}" — {open rate}%
- Meetings booked this week: N
- Revenue in pipeline: $N
- Biggest blocker: {description}

---

## Hypothesis Validation Log

| Hypothesis | Status | Reply Rate | Verdict | Action |
|------------|--------|-----------|---------|--------|
| #1 [name]  | Active | N%        | ✅     | Keep   |
| #2 [name]  | Active | N%        | 🔄     | Refine |
| #3 [name]  | Retired| N%        | ❌     | Pause  |
```

---

## Update Protocol

Every skill that modifies state must:
1. Read the current state file first
2. Update ONLY the fields it owns (don't overwrite other layers' data)
3. Update `Last updated` timestamp
4. Write the file back

Skills and their owned fields:

| Skill | Fields It Updates |
|-------|------------------|
| `revenue-engine` | All fields on first run |
| `lead-scoring` | Account Pipeline counts, Layer L4 last run |
| `meeting-automation` | Meeting Booked count, meetings-log reference |
| `deal-nurture` | In Nurture count, deal summary |
| `revenue-reporting` | This Week's Highlights, Layer L6 last run |
| `signal-monitor` | Signal Queue, Layer L6 last run |
| `campaign-sending` | Active Campaigns table |
| `inbox-reply` | Replied count, Layer L4 last run |

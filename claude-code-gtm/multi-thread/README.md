# Multi-Thread Coordination — SELLL.io
> Managed by: `multi-thread` skill | One file per active account
> Purpose: Per-account coordination schedules tracking which thread is live, who each contact is, and when threads fire or pause.

Each Tier 1 account with active multi-thread outreach gets its own coordination file here.

---

## File Naming

`[company-slug]-schedule.md`

Examples:
- `prism-analytics-schedule.md`
- `dataflow-analytics-schedule.md`
- `luminary-health-schedule.md`

---

## Coordination File Format

```markdown
# [Company Name] — Multi-Thread Schedule
> Account Tier: [1 Priority / 1 Standard]
> Opened: [date]
> Lead Score: [0-100]
> Reply Probability: [0-100]%

## Thread A — Decision Maker
Contact: [Name] | Title: [Title] | Email: [email]
Sequence: [variant code]
Email 1 sent: [date] | Status: [Active / Replied / Paused]
Next email: Email [N] on [date]

## Thread B — Champion
Contact: [Name] | Title: [Title] | Email: [email]  
Sequence: ChampionFollow_v1
Trigger: Day 5 (auto) if no positive Thread A reply
Status: [Pending / Active / Not triggered / Paused]
Activated: [date or "pending"]

## Thread C — Economic Buyer
Contact: [Name] | Title: [Title] | Email: [email]
Trigger: Day 8 (auto) if Tier 1 Priority + ACV > $30K + no Thread A reply
Status: [Pending / Active / Not triggered / Skipped]

## Coordination Log
| Date | Event | Action |
|------|-------|--------|
| [date] | Thread A Email 1 sent | — |
| [date] | Thread B auto-triggered (Day 5, no positive reply) | Uploaded to Instantly + Expandi LinkedIn DM fired |
```

---

## Thread Pause Rules (Automated)

- Thread A gets a positive reply (HOT/WARM/MEETING_REQUEST) → ALL threads pause immediately (webhook-triggered)
- Thread B goes live on Day 5 if no positive Thread A reply (n8n timer, automated)
- Thread C goes live on Day 8 for Tier 1 Priority only with ACV > $30K (n8n timer, automated)
- Any thread gets a HARD_NO → ALL threads for this account pause + DNC

## Archive

Completed accounts are moved to `multi-thread/archive/[month]/` after the sequence closes.

# Active Deal Tracker — SELLL.io
> Managed by: Layer 4 Pipeline Intelligence
> Updated by: n8n workflow `selllo-dhs-update` daily
> Aaron reviews: daily dashboard in Slack #selllo-pipeline
> Read-only from: Layer 6 Optimize (weekly pull)

---

## Deal Stage Reference

| Stage | Name | Entry Trigger | Exit Trigger |
|-------|------|--------------|-------------|
| 0 | HOT | HOT reply classified by Layer 3 | Meeting booked |
| 1 | Meeting Set | Meeting booked | Discovery call complete |
| 2 | Discovery | Discovery call complete + scored | Score routes deal |
| 3 | Evaluation | Discovery score ≥ 18 | Proposal requested |
| 4 | Proposal | Proposal sent | Contract sent or Lost |
| 5 | Close | Contract sent | Contract signed (Won) or no response (Stalled) |
| 6 | Won | Contract signed | → Layer 5 activated |
| 7 | Lost | Deal closed lost | → losses.md entry |
| 8 | Stalled | 10+ days no movement | → re-engagement or Lost |

---

## Active Deals

| Company | Contact | Title | Stage | DHS | ACV Est | Days in Stage | Last Touch | Next Action | Hypothesis | Tier |
|---------|---------|-------|-------|-----|---------|--------------|-----------|------------|-----------|------|
| (no live deals yet — awaiting first campaign) | | | | | | | | | | |

---

## DHS Distribution (live)

| Score Band | Count | Companies |
|-----------|-------|---------|
| 🟢 80-100 GREEN | 0 | — |
| 🟡 60-79 AMBER | 0 | — |
| 🔴 40-59 RED | 0 | — |
| 💀 < 40 CRITICAL | 0 | — |

---

## Stalled Deals

| Company | Contact | Stage | DHS | Days Stalled | Trigger | Escalation Status |
|---------|---------|-------|-----|-------------|---------|-----------------|
| (none) | | | | | | |

---

## Reply Log

| Date | Company | Contact | Reply Type | BIS | ADB Filed | Response Time | Meeting Booked |
|------|---------|---------|-----------|-----|----------|--------------|---------------|
| (none yet) | | | | | | | |

---

## Proposal Tracker

| Company | Contact | Proposal Sent | Proposal Viewed | Times Viewed | Follow-up Day 2 | Follow-up Day 5 | Decision |
|---------|---------|--------------|----------------|-------------|----------------|----------------|---------|
| (none yet) | | | | | | | |

---

## Pipeline Forecast (Weighted)

| Stage | Count | Avg ACV | Close Rate | Weighted Value |
|-------|-------|---------|-----------|--------------|
| Stage 0-1 (HOT/Meeting) | 0 | — | 35% | $0 |
| Stage 2 (Discovery) | 0 | — | 30% | $0 |
| Stage 3 (Evaluation) | 0 | — | 40% | $0 |
| Stage 4 (Proposal) | 0 | — | 55% | $0 |
| Stage 5 (Close) | 0 | — | 80% | $0 |
| **Total weighted** | 0 | — | — | **$0** |

Monthly projection: $0 / $0 / $0 (M1/M2/M3)

---

## Won Deals

| Company | Contact | ACV | Close Date | Hypothesis | Days Cold→Close | DHS at Close | → Layer 5 |
|---------|---------|-----|-----------|-----------|----------------|-------------|---------|
| (none yet) | | | | | | | |

---

## Lost Deals

| Company | Contact | Stage Lost | ACV | Reason | Competitor | Learning | → losses.md |
|---------|---------|-----------|-----|--------|-----------|---------|------------|
| (none yet) | | | | | | | |

---

## Call Queue (Today)

See: `engine/call-queue.md` for daily prioritized call list with scripts.

---

## Deal Metrics (Cumulative)

| Metric | Value | Target |
|--------|-------|--------|
| Total deals created | 0 | — |
| Win rate (overall) | — | 25-35% |
| Average deal ACV | — | $15K-$20K |
| Average days cold→close | — | 60-90 days |
| Reply → meeting rate | — | 40-60% |
| Meeting → opportunity rate | — | 30-50% |
| Opportunity → close rate | — | 25-40% |
| Pipeline coverage ratio | — | 3x |
| Avg DHS at close (won) | — | Baseline TBD |

---

## Automation Notes

- **DHS updates**: `selllo-dhs-update` runs daily at 05:30 UTC — rewrites DHS column for all active deals
- **Stall detection**: `selllo-stall-detector` runs daily at 05:30 UTC — flags 7d/10d stalls
- **Pipeline forecast**: `selllo-pipeline-forecast` runs every Friday — updates forecast table
- **Deal intake**: `selllo-deal-intake` fires on HOT/MEETING_REQUEST from Layer 3 — creates new row
- **Contract signed**: `selllo-contract-signed` fires on DocuSign event — moves to Won + triggers Layer 5
- **Aaron never edits this file directly**: all updates come through n8n workflows or Slack commands

# Active Campaigns — SELLL.io
> Managed by: Layer 3 Campaign Execution skill
> One coordination file per active campaign.
> Updated automatically by n8n on every significant event.

---

## Campaign File Naming

`[hypothesis]-[YYYY-MM-DD]-active.md`

Examples:
- `H5-2026-06-25-active.md`
- `H1-H5-compound-2026-07-01-active.md`
- `H7-2026-07-15-active.md`

---

## Campaign Coordination File Format

Each active campaign gets its own file with this structure:

```markdown
# Campaign: [Name]
> Hypothesis: [code] | Launch: [date] | CSV: [filename]
> Layer 3 status: [Phase 1 Complete / Phase 2 Active / Phase 3 Conversion / Phase 5 Closing]
> Last updated: [auto-updated by n8n]

## Campaign Overview
| Field | Value |
|-------|-------|
| Total contacts | [N] |
| Tier 1 Priority | [N] |
| Tier 1 Standard | [N] |
| Tier 2 | [N] |
| Bespoke email contacts | [N] |
| HeyGen videos ready | [N] / [N] |
| Sending domain | team.selll.io |
| Daily send limit | [N] (warmup phase) |
| Email 1 first send | [date] |
| Email 5 last send | [date] |

## Webhook Status
| Route | Status | Last Fired |
|-------|--------|-----------|
| /webhook/instantly-reply | ✅ Active | [timestamp] |
| /webhook/instantly-open | ✅ Active | [timestamp] |
| /webhook/instantly-click | ✅ Active | [timestamp] |
| /webhook/instantly-bounce | ✅ Active | [timestamp] |
| /webhook/expandi-engagement | ✅ Active | [timestamp] |
| /webhook/n8n-day5-thread-b | ✅ Armed (fires: [date]) | — |
| /webhook/n8n-day8-thread-c | ✅ Armed (fires: [date]) | — |

## Live Metrics (auto-updated)
| Metric | Value | Benchmark | Status |
|--------|-------|-----------|--------|
| Emails sent | [N] | — | — |
| Open rate | [%] | 30–40% | ✓/⚠️/🚨 |
| Click rate | [%] | 8–15% | ✓/⚠️/🚨 |
| Reply rate | [%] | 5–8% | ✓/⚠️/🚨 |
| Bounce rate | [%] | < 1.5% | ✓/⚠️/🚨 |
| HOT replies | [N] | — | — |
| Meetings booked | [N] | — | — |

## BIS Distribution (live)
| Band | Contacts | Notable |
|------|---------|---------|
| 80–100 | [N] | [Names if any — these are near-HOT] |
| 60–79 | [N] | |
| 40–59 | [N] | |
| 0–39 | [N] | |

## Thread Status
| Contact | Company | Thread | BIS | Last Event | Next Action | Status |
|---------|---------|--------|-----|-----------|------------|--------|
| [Name] | [Company] | A | [score] | [event] | [Email N on date] | Active |

## Compound Engagement Events
| Date | Company | Contacts Engaged | BIS | CED Action |
|------|---------|-----------------|-----|-----------|
| (none yet) | | | | |

## Reply Log (this campaign)
| Date | Contact | Company | Category | BIS | Action Taken | Outcome |
|------|---------|---------|---------|-----|-------------|---------|
| (none yet) | | | | | | |

## HOT Pipeline (meetings booked)
| Contact | Company | Meeting Date | ADB Filed | Discovery Score | Next Step |
|---------|---------|-------------|----------|----------------|----------|
| (none yet) | | | | | |

## Automation Events Log
| Timestamp | Event | Contact | Action | Result |
|-----------|-------|---------|--------|--------|
| (auto-populated by n8n) | | | | |
```

---

## Active Campaigns

| Campaign File | Hypothesis | Contacts | Launch | Phase | Meetings | Status |
|--------------|-----------|---------|--------|-------|---------|--------|
| (Layer 2 not yet run live — domain warmup in progress) | | | | | | |

---

## Completed Campaigns

| Campaign | Date | Contacts | Open Rate | Reply Rate | Meetings | Pipeline | Key Learning |
|----------|------|---------|----------|-----------|---------|---------|-------------|
| (none yet) | | | | | | | |

---

## Campaign Archive

Completed campaign coordination files are moved to `engine/campaigns/archive/[YYYY-MM]/` after Phase 5 close. The debrief data is preserved in `brain/institutional-memory/campaigns.md`.

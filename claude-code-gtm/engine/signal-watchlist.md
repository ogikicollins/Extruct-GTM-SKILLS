# Signal Watchlist — SELLL.io
> Managed by: `signal-monitor` skill | Updated: automatically on every scan
> Purpose: Track suppressed accounts and the specific signals that would trigger re-engagement.

When a NOT_NOW contact is added to the re-engagement queue, their trigger condition is registered here. The signal-monitor skill scans this watchlist every 72 hours and fires re-engagement automatically when a condition is met.

---

## Watchlist Format

| Company | Contact | Email | Suppressed Date | Their Words | Trigger Condition | Watch Type | Priority | Last Checked | Status |
|---------|---------|-------|----------------|-------------|------------------|-----------|---------|-------------|--------|
| Prism Analytics | James Okafor | james.okafor@prismanalytics.com | 2026-02-14 | "Not the right time, maybe in Q3" | Q3 start OR new VP Sales hire | Event-based | HIGH | — | ⚡ TRIGGERED — Emma Watts joined 2026-06-10 |

---

## Watch Types

| Type | Description | How signal-monitor checks it |
|------|-------------|------------------------------|
| **Event-based** | Specific company event (funding, new hire, job post) | Searches LinkedIn + Crunchbase + job boards on every scan |
| **Date-based** | Specific date the contact mentioned | Calendar check — fires on the stated date |
| **Signal-based** | Company posts about a pain topic | LinkedIn company page + exec post scan |
| **Stack-based** | Company drops or adopts a specific tool | BuiltWith delta check |

---

## Triggers That Fire Re-Engagement (in priority order)

1. New VP Sales / CRO / Head of Revenue hired at company → HIGH (48h)
2. Series A or B funding announced → CRITICAL (24h)
3. SDR / BDR job post published → HIGH (72h)
4. Competitor displacement signal (frustration post, review) → HIGH (48h)
5. Company LinkedIn post referencing GTM pain → MEDIUM (5 days)
6. Date stated by contact reached → MEDIUM (on date)
7. 6 months elapsed with no signal → LOW (time-based reset, use sparingly)

---

## Adding to Watchlist

When `reply-routing.md` routes a reply as NOT_NOW (Category 6):
1. Extract trigger condition from their exact words
2. Add row to this watchlist
3. Add to `re-engagement-queue.md` with status 🔵 WATCH
4. signal-monitor will detect and alert when condition fires

---

## Recently Fired

| Company | Trigger | Fired Date | Re-Engage Status |
|---------|---------|-----------|-----------------|
| Prism Analytics | Emma Watts joined as VP Sales | 2026-06-10 | ACTIVE — outreach sent 2026-06-21 |

# Fatigue-Suppressed Contacts — SELLL.io
> Engine Layer: Deliverability | Updated: 2026-06-21
> Managed by: `deliverability-rules.md` → Sequence Fatigue Guard
> Checked by: `SELLL-layer-2` → Step 6 (before every Instantly import)

Contacts who have appeared in 2+ SELLL campaigns with zero engagement.
Never add to cold outreach. LinkedIn-only approach only.

**Rule:** If a contact appears here AND has had 0 engagement (no opens, clicks, replies, call connects)
AND it has been less than 12 months since last outreach — they are PERMANENTLY removed from cold sequences.

---

## Suppressed Contacts

| Email | Full Name | Company | Domain | Campaigns Appeared | Last Outreach | Engagement | Reason | Reset Condition | Status |
|-------|-----------|---------|--------|------------------|---------------|-----------|--------|----------------|--------|
| (none yet — engine not launched) | | | | | | | | | |

---

## Reset Log

When a suppressed contact triggers a reset condition (role change, 12+ months, referral), log it here and remove from the main table above.

| Date | Email | Reset Reason | New Role / Company | Action |
|------|-------|-------------|-------------------|--------|
| (none yet) | | | | |

---

## Rules Reference

From `brain/deliverability-rules.md` → Sequence Fatigue Guard:

**Suppress when:**
- 2+ prior SELLL campaigns in last 6 months
- 0 engagement across all campaigns

**Exceptions (reset the clock):**
- Role change (new company or new title) → full reset
- 12+ months since last outreach → full reset
- Referred by someone else → 1 warm email only (mention referral)
- Company has CRITICAL compound signal → 1 last-chance email with maximum personalization

**After suppression:**
- Move to LinkedIn-only monitoring
- Comment on their posts substantively (no pitch)
- If they post about pain signal → warm DM only
- If role changes → re-enter cold outreach pipeline

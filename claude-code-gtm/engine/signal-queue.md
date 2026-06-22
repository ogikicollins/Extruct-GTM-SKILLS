# Signal Queue — SELLL.io
> Managed by: `signal-monitor` skill | Scanned: every 72 hours
> Purpose: Inbound signals from the market that haven't yet been actioned — new triggers that need matching to prospects or new accounts to prospect.

When signal-monitor runs its scan, every new signal lands here. The queue is processed in priority order: CRITICAL signals within 24h, HIGH within 72h.

---

## Queue (Pending Action)

| Signal | Company | Source | Detected | Hypothesis | Priority | Action Required | Assigned To |
|--------|---------|--------|----------|-----------|---------|----------------|------------|
| (none yet — engine not launched) | | | | | | | |

---

## Signal Types and Default Hypothesis Match

| Signal | Default Hypothesis | Action |
|--------|------------------|--------|
| New VP Sales / Head of Revenue hired | H5 | Check if company is in ICP → create account card → Layer 2 run |
| Series A or B funding announced | H1 | Check if company is in ICP → create account card → Layer 2 run |
| SDR / BDR job post published | H2 | Check if company is in ICP → create account card → Layer 2 run |
| Competitor frustration post / negative review | H7 | Check if company is in ICP → create account card → Layer 2 run |
| Company post about outbound struggles | H3 or H6 | Evaluate company → Layer 2 run if ICP fit |
| Tech stack change (dropped sequencer) | H4 | Check if company is in ICP → Layer 2 run |
| Watch account trigger fired | Re-engagement | Check re-engagement-queue → fire re-engagement campaign |

---

## Processing Rules

1. **CRITICAL signals** (funding, new VP): must be actioned within 24 hours of detection. Urgency window closes fast.
2. **HIGH signals** (job posts, competitor signals): action within 72 hours.
3. **MEDIUM signals** (pain posts, stack changes): action within 5 days.
4. **Before actioning any signal**: run Gate 0A (CRM dedup) + Gate 0B (ICP filter) to confirm this account doesn't already exist in pipeline or is outside ICP.
5. **Compound signals**: if a company triggers 2+ hypotheses simultaneously, flag as COMPOUND and add bonus scoring in Layer 2 Phase 2E.

---

## Recently Processed

| Signal | Company | Processed Date | Outcome |
|--------|---------|---------------|---------|
| (none yet — engine not launched) | | | |

# Re-Engagement Queue — SELLL.io
> Updated: 2026-06-21 | Checked by: `growthflare-layer-2` Phase 0 Gate 0C
> Actioned by: re-engagement skill | Reviewed: Every Monday
> Rule: Contacts here are NEVER added to cold sequences. Re-engagement protocol only.

---

## What This Queue Is

When a prospect replies "not now," "try me in Q3," "come back after the raise" — they are NOT a dead lead. They are a warm prospect with a stated trigger condition.

The difference between cold and re-engagement: **permission**. These contacts engaged with SELLL once. That changes everything.

Track every "not now" with: (1) their exact words, (2) the trigger condition, (3) whether it's met.

---

## Queue (Pending Action)

| Company | Contact | Email | Last Reply | Reply Category | Their Exact Words | Trigger Condition | Trigger Status | Re-Engage By | Method | Status |
|---------|---------|-------|-----------|---------------|-----------------|------------------|---------------|-------------|--------|--------|
| Prism Analytics | James Okafor | james.okafor@prismanalytics.com | 2026-02-14 | Not Now | "Not the right time, maybe in Q3" | Q3 start OR new VP Sales hire | ⚡ TRIGGERED — Emma Watts joined 2026-06-10 | 2026-06-21 | LinkedIn DM first, then email | ACTIVE — re-engage today |

---

## Re-Engagement Priority

| Priority | Condition | Action Timing |
|----------|-----------|--------------|
| ⚡ TRIGGER MET | Stated condition now met | Same day — LinkedIn DM within 2 hours of detection |
| 🔴 HOT | Condition likely met or date passed | Within 48 hours |
| 🟡 WARM | Date-based, no specific trigger | On scheduled re-engage date |
| 🔵 WATCH | Signal-based trigger not yet met | signal-monitor tracks until condition fires |

---

## Re-Engagement Templates (Automated — Dedicated Instantly Campaign)

**Re-engagement emails are sent via a dedicated Instantly campaign (never mixed into cold sequence campaigns). Each trigger condition fires a separate campaign upload.**

### Template A — Trigger Condition Met
**Subject:** `{{trigger_event}} at {{company_name}} — {{first_name}}`

```
{{first_name}},

In {{last_reply_month}} you mentioned {{their_exact_words}}.

{{trigger_event}} just happened.

I said I'd come back when the time was right. This felt like it.

Still worth a conversation?

{{sender_name}}
SELLL.io | {{calendar_link}}
```

**Example (Prism Analytics — James Okafor):**
> Subject: New VP Sales at Prism — James
>
> James,
>
> In February you mentioned it wasn't the right time.
>
> Prism just brought on Emma Watts as VP Sales — June 10th.
>
> I said I'd come back when the time was right. This felt like it.
>
> Still worth a conversation?
>
> Aaron
> SELLL.io | https://cal.com/collins-ogiki-x4fokk/30min

---

### Template B — Date-Based (No Specific Trigger)
**Subject:** `Following up — {{company_name}}`

```
{{first_name}},

When we last spoke in {{last_reply_month}}, you suggested I try again around {{reengagement_date}}.

That's now.

Is the outbound infrastructure conversation higher priority than it was then, or is the timing still off?

Either answer is fine.

{{sender_name}}
SELLL.io | {{calendar_link}}
```

---

### Template C — Signal Detected at Watch Account
**Subject:** `Something changed at {{company_name}} — {{first_name}}`

```
{{first_name}},

You asked me to hold off last time we spoke.

I noticed {{new_signal}} at {{company_name}} — which is usually when this conversation becomes relevant.

If the timing is better now: {{calendar_link}}

If not — genuinely no pressure.

{{sender_name}}
SELLL.io
```

---

## Re-Engagement Rules

1. **Email volume by trigger type:**
   - **Template A (trigger condition met) + Template C (signal detected):** 3-email sequence over 10 days — same as `re-engagement/SKILL.md` structure. They know who you are; the trigger earns a full short sequence.
   - **Template B (date-based, no specific trigger):** 1 email maximum. If no reply within 14 days, move to `fatigue-suppressed.md` (LinkedIn-only). A date alone is not a compelling reason to send 3 emails.
2. **LinkedIn DM first for ⚡ TRIGGER MET** — Expandi auto-DMs referencing the prior conversation and the new trigger (see `linkedin-automation/SKILL.md` warm path sequence). Email follows 48 hours later via Instantly if no DM reply
3. **Quote their exact words** — use `{{their_exact_words}}` verbatim. Do not paraphrase. Shows the conversation was remembered
4. **Dedicated Instantly campaign per trigger type** — re-engagement contacts go into their own isolated Instantly campaign, never mixed with cold sequence contacts. Campaign naming: `SELLL — Re-Engage — [Trigger Type] — [Date]`
5. **New message every time** — never re-send the original cold sequence emails
6. **ICP check before re-engaging** — confirm company hasn't grown out of ICP (employee count, funding stage) since last contact
7. **Signal-monitor auto-detection** — for 🔵 WATCH contacts, `signal-monitor` skill detects the trigger condition automatically and fires the re-engagement campaign without manual review

---

## Recently Actioned

| Company | Contact | Trigger | Re-Engage Date | Method | Outcome | Notes |
|---------|---------|---------|---------------|--------|---------|-------|
| (none yet — engine not yet launched) | | | | | | |

---

## Adding Contacts to This Queue

When `reply-routing.md` routes a reply to:
- **Category 3 (Not Now / Not Yet)** → add row here
- **Category 4 (Forward / Refer)** → add row here if referred contact doesn't convert

**Steps:**
1. Copy their exact reply wording into "Their Exact Words"
2. Extract the trigger condition from what they said
3. Set the trigger status to 🔵 WATCH or the appropriate priority
4. Add to signal-monitor watchlist if trigger is signal-based
5. Set a HubSpot reminder for date-based triggers
6. Log in account card → Touch Timeline

---

## Archived (Actioned + Closed)

| Company | Contact | Outcome | Archival Date |
|---------|---------|---------|--------------|
| (none yet) | | | |

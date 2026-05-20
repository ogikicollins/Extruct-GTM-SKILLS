# Instantly API Reference

Base URL: `https://api.instantly.ai/api/v2`
Auth: Bearer token via `INSTANTLY_API_KEY` environment variable.

> Verified May 2026 against the live v2 API. The single-lead upload, sequence/delay
> model, and timezone allowlist below correct earlier versions of this doc.

## Campaigns

### List campaigns

```
GET /campaigns?limit=100
```

Cursor pagination: if the response has `next_starting_after`, pass it as `starting_after` for the next page.

### Create campaign (with sequence)

```
POST /campaigns
```

A campaign can be created with its full sequence in one call:

```json
{
  "name": "Family — Industry / Persona / Geo — Month Year",
  "campaign_schedule": {
    "schedules": [{
      "name": "Default",
      "timing": { "from": "09:00", "to": "17:00" },
      "days": { "1": true, "2": true, "3": true, "4": true, "5": true },
      "timezone": "America/Chicago"
    }],
    "start_date": null,
    "end_date": null
  },
  "sequences": [{
    "steps": [
      { "type": "email", "delay": 2, "delay_unit": "days",
        "variants": [{ "subject": "{{email_subject_1}}", "body": "<div>{{email_body_1}}</div>" }] },
      { "type": "email", "delay": 3, "delay_unit": "days",
        "variants": [{ "subject": "", "body": "<div>{{email_body_2}}</div>" }] },
      { "type": "email", "delay": 3, "delay_unit": "days",
        "variants": [{ "subject": "", "body": "<div>{{email_body_3}}</div>" }] }
    ]
  }]
}
```

Campaigns are created in **draft** (`status: 0`). Never auto-activate.

**`days`** uses string keys `"1"`–`"7"` (Mon–Sun); set only the days you want.

**`timezone` is an allowlist** — only a specific subset is accepted, NOT arbitrary IANA names. Known-good: `America/Chicago`, `America/Detroit`, `America/Boise`, `America/Dawson`, `Europe/Belgrade`, `Europe/Sarajevo`. Rejected with 400: `America/New_York`, `Europe/London`. Split leads into region campaigns and pick the nearest allowed zone.

### Sequence steps & the delay model

Each step in `sequences[0].steps[]`:
- `type`: `"email"`
- `delay` + `delay_unit: "days"` — **the delay is the gap AFTER this step before the next one fires.** Step 1's `delay` = days between Touch 1 and Touch 2. The LAST step's `delay` is moot (nothing follows it).
- `variants`: array of `{subject, body}`. Body should be HTML (`<br />` for line breaks).

Example — a 3-touch sequence with a 2-then-3-day cadence → `delay` values `[2, 3, 3]` (Touch 1 → +2d Touch 2 → +3d Touch 3; trailing 3 ignored).

**Threading follow-ups:** give steps 2+ an empty `subject: ""` — they send as replies on the same thread and arrive as `Re: <step 1 subject>`.

### Get campaign

```
GET /campaigns/{campaign_id}
```

## Leads

### Upload leads — ONE LEAD PER REQUEST

`POST /leads` creates a **single** lead. There is no bulk-array form — sending
`{ "campaign_id": ..., "leads": [...] }` fails with `"Email is required when creating a lead"`.
Loop single POSTs (~0.12s apart).

```
POST /leads
```

```json
{
  "campaign": "campaign-uuid",
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "company_name": "Acme Corp",
  "custom_variables": {
    "email_subject_1": "...",
    "email_body_1": "...",
    "email_body_2": "...",
    "email_body_3": "..."
  },
  "skip_if_in_workspace": true
}
```

Notes:
- Field is `campaign` (the campaign UUID), not `campaign_id`.
- `skip_if_in_workspace: true` — skip if the email exists in ANY campaign in the workspace (dedup).
- `custom_variables` values are referenced in sequence templates as `{{key}}`.

### List leads in a campaign

`POST /leads/list` with body `{ "campaign": "<uuid>", "limit": 100 }`. Cursor
paginate via `next_starting_after`. The result can include workspace leads —
filter client-side on `item.campaign == <uuid>` to be safe.

### Delete lead

```
DELETE /leads/{lead_id}
```

## Campaign Analytics

```
GET /campaigns/{campaign_id}/analytics/overview
```

Returns `total_leads`, `contacted`, `emails_sent`, `opens`, `replies`, `bounces`, `unsubscribes`.

Lead status values: `not_yet_contacted`, `contacted`, `replied`, `bounced`, `unsubscribed`, `interested`, `not_interested`, `meeting_booked`. A bounced lead is auto-stopped — it will not receive follow-up steps.

## Email Accounts

```
GET /accounts?limit=100
```

Status codes: `1`=Active, `2`=Paused, `-1/-2/-3`=Errors. Check `warmup_status` before assigning senders to a campaign.

## Custom Variables in Templates

Reference any lead field or `custom_variables` key as `{{key}}` — works in both
subject and body. When email copy has per-lead variants (e.g. a conditional
follow-up), upload each lead with its **fully-rendered** body as a custom
variable and set the sequence step body to just `{{email_body_N}}`.

## Rate Limits

- ~10 requests/second
- One lead per `POST /leads` request; pace loops ~0.12s apart

## MCP caveat

The `claude.ai Instantly MCP` `create_campaign` tool only supports a single
uniform `step_delay_days` — for per-step delays use the raw API above. MCP
sessions also drop intermittently (`Session not found`); the raw API with the
`.env` key is more reliable for campaign builds.

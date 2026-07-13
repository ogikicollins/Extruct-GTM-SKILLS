# ALIF Agency — Master Sales Tracker
## Google Sheets Setup Guide
> Collins Ogiki | Head of Sales | ALIF Agency
> Build time: ~20 minutes | Updated: Weekly (Monday AM) + Daily entries

---

## HOW TO CREATE

1. Go to sheets.new
2. Rename the file: **ALIF Sales Tracker — [Month] 2026**
3. Create 4 tabs (right-click + Insert sheet):
   - `1 - Outreach`
   - `2 - Conversion`
   - `3 - Pipeline`
   - `Dashboard`
4. Tab colours: Outreach = Navy, Conversion = Green, Pipeline = Orange, Dashboard = Purple
5. Share with Kaya (editor), Amir (viewer), Milan (viewer)

---

## SHEET 1: OUTREACH LAYER

### Row 1 — Title (merge A1:Q1)
```
ALIF AGENCY — OUTREACH TRACKER | Weekly + Daily Metrics
Background: #1F3864 | Font: White, Bold, 14pt
```

### Row 2 — Targets (no merge, individual cells)
```
Col A: TARGETS:
Col E: 300+/wk
Col F: >35%
Col G: >5%
Col H: >3%
Col J: 80/day
Col K: >15%
Col M: 100+/wk
Background all: #2E75B6 | Font: White, Bold
```

### Row 3 — Column Headers (A3:Q3)
```
A: DATE
B: WEEK
C: DAY
D: REGION
E: EMAILS SENT
F: OPEN RATE %
G: REPLY RATE %
H: POS REPLY %
I: POS REPLIES (count)
J: CALLS MADE
K: CONVERSATIONS
L: ANSWER RATE % ← formula
M: LI CONNECTS
N: LI REPLIES
O: WHATSAPP MENA
P: TOTAL TOUCHES ← formula
Q: NOTES
Background: #1F3864 | Font: White, Bold | Wrap text | Row height: 40
```

### Column Widths
```
A=90, B=55, C=55, D=75, E=85, F=80, G=80, H=85, I=90,
J=80, K=90, L=90, M=90, N=85, O=110, P=100, Q=220
```

### Weekly Data Block Structure (repeat for 12 weeks)

**Week band row** (merge A:Q)
```
Text: "WEEK 1   |   07 Jul 2026  to  10 Jul 2026"
Background: #2E75B6 | Font: White, Bold | Row height: 22
```

**5 Daily rows (Mon–Fri)**

For each daily row, columns are:
```
A: [Date — type manually, e.g. 07/07/2026]    → Format: Date
B: W1                                           → Type manually
C: Mon / Tue / Wed / Thu / Fri                  → Type manually
D: ALL  (dropdown: MENA, EU, US, ALL)           → Data validation
E: [emails sent]          → Yellow fill, number
F: [open rate]            → Yellow fill, percent (0.0%)
G: [reply rate]           → Yellow fill, percent (0.0%)
H: [pos reply rate]       → Yellow fill, percent (0.0%)
I: [pos replies count]    → Yellow fill, number
J: [calls made]           → Yellow fill, number
K: [conversations]        → Yellow fill, number
L: =IF(J4=0,"",K4/J4)    → Grey fill, percent — FORMULA (answer rate)
M: [LI connects]          → Yellow fill, number
N: [LI replies]           → Yellow fill, number
O: [WhatsApp MENA]        → Yellow fill, number
P: =IF(SUM(E4,J4,M4,N4,O4)=0,"",SUM(E4,J4,M4,N4,O4))  → Grey fill, number
Q: [notes]                → White fill
```

**Yellow fill = #FFF2CC | Grey fill = #F3F3F3**

**Weekly subtotal row** (after the 5 daily rows)
```
A:C merged: "WEEK 1 TOTAL" — Background: #BDD7EE, Bold
E: =SUM(E4:E8)         → number
F: =AVERAGEIF(F4:F8,">0")  → percent
G: =AVERAGEIF(G4:G8,">0")  → percent
H: =AVERAGEIF(H4:H8,">0")  → percent
I: =SUM(I4:I8)
J: =SUM(J4:J8)
K: =SUM(K4:K8)
L: =AVERAGEIF(L4:L8,">0")  → percent
M: =SUM(M4:M8)
N: =SUM(N4:N8)
O: =SUM(O4:O8)
P: =SUM(P4:P8)
```

*Leave a blank row between weeks for readability.*

### Week Start Dates Reference
```
W1:  07 Jul 2026    W7:  17 Aug 2026
W2:  13 Jul 2026    W8:  24 Aug 2026
W3:  20 Jul 2026    W9:  31 Aug 2026
W4:  27 Jul 2026    W10: 07 Sep 2026
W5:  03 Aug 2026    W11: 14 Sep 2026
W6:  10 Aug 2026    W12: 21 Sep 2026
```

### Freeze panes
`View → Freeze → Up to row 3`

---

## SHEET 2: CONVERSION LAYER

### Row 1 — Title (merge A1:R1)
```
ALIF AGENCY — CONVERSION LAYER | Weekly Funnel Metrics
Background: #1F3864 | Font: White, Bold, 14pt
```

### Row 2 — Targets
```
E: >10%  |  G: >70%  |  J: >50%  |  M: >80%  |  P: >30%
Background: #2E75B6 | Font: White, Bold
```

### Row 3 — Headers (A3:R3)
```
A: WEEK
B: WEEK START
C: POS REPLIES
D: MTGS BOOKED
E: REPLY→BOOK %      ← formula
F: MTGS HELD
G: SHOW RATE %       ← formula
H: NO-SHOWS
I: RECOVERED
J: RECOVERY %        ← formula
K: DISCO HELD
L: QUAL (4.0+)
M: QUAL RATE %       ← formula
N: PROPOSALS SENT
O: PROPOSALS WON
P: WIN RATE %        ← formula
Q: NEW MRR (AED)
R: NOTES
Background: #1F3864 | Font: White, Bold | Row height: 50
```

### Data rows (Rows 4–15 = Weeks 1–12)

For each week row (example: row 4 = Week 1):
```
A: W1                      → Bold
B: 07/07/2026              → Date format
C: [pos replies]           → Yellow, number — pull from Apex CSV weekly
D: [meetings booked]       → Yellow, number
E: =IF(C4=0,"",D4/C4)     → Grey, percent  ← THE CRITICAL METRIC
F: [meetings held]         → Yellow, number
G: =IF(D4=0,"",F4/D4)     → Grey, percent
H: [no-shows]              → Yellow, number
I: [recovered/rebooked]    → Yellow, number
J: =IF(H4=0,"",I4/H4)     → Grey, percent
K: [discovery calls held]  → Yellow, number (same as F unless multi-call)
L: [qualified score ≥4.0]  → Yellow, number — Collins fills after each call
M: =IF(K4=0,"",L4/K4)     → Grey, percent
N: [proposals sent]        → Yellow, number
O: [proposals won]         → Yellow, number
P: =IF(N4=0,"",O4/N4)     → Grey, percent
Q: [new MRR AED]           → Yellow, number — AED format
R: [notes]                 → White
```

### Row 16 — 12-Week Totals / Averages
```
A:B merged: "12-WEEK TOTAL / AVG" — Background: #BDD7EE, Bold
C: =SUM(C4:C15)
D: =SUM(D4:D15)
E: =AVERAGEIF(E4:E15,">0")     ← avg reply-to-book rate
F: =SUM(F4:F15)
G: =AVERAGEIF(G4:G15,">0")
H: =SUM(H4:H15)
I: =SUM(I4:I15)
J: =AVERAGEIF(J4:J15,">0")
K: =SUM(K4:K15)
L: =SUM(L4:L15)
M: =AVERAGEIF(M4:M15,">0")
N: =SUM(N4:N15)
O: =SUM(O4:O15)
P: =AVERAGEIF(P4:P15,">0")
Q: =SUM(Q4:Q15)
Background: #BDD7EE | Bold
```

### Freeze panes
`View → Freeze → Up to row 3`

---

## SHEET 3: PIPELINE VALUE

### Row 1 — Title (merge A1:P1)
```
ALIF AGENCY — PIPELINE VALUE TRACKER | Weekly Stage Breakdown (AED)
Background: #1F3864 | Font: White, Bold, 14pt
```

### Row 2 — Headers (A2:P2)
```
A: WEEK
B: WEEK START
C: TOTAL PIPELINE (AED)    ← formula
D: POS REPLY STAGE (AED)
E: MTG BOOKED (AED)
F: MTG HELD (AED)
G: PROPOSAL SENT (AED)
H: VERBAL YES (AED)
I: AVG DEAL SIZE (AED)
J: AVG AGE (DAYS)
K: STALLED 7D+
L: DEALS WON
M: DEALS LOST
N: NEW MRR (AED)
O: CUMULATIVE MRR (AED)    ← formula
P: NOTES
Background: #1F3864 | Font: White, Bold | Row height: 55 | Wrap text
```

### Column Widths
```
A=55, B=105, C=160, D=155, E=130, F=130, G=150, H=120,
I=140, J=120, K=115, L=100, M=100, N=140, O=160, P=220
```

### Data rows (Rows 3–14 = Weeks 1–12)

For each row (example: row 3 = Week 1):
```
A: W1                          → Bold
B: 07/07/2026
C: =SUM(D3:H3)                 → Grey, AED format — auto-totals stages
D: [AED value in Pos Reply stage]  → Yellow, AED format
E: [AED value in Mtg Booked]       → Yellow, AED format
F: [AED value in Mtg Held]         → Yellow, AED format
G: [AED value in Proposal Sent]    → Yellow, AED format
H: [AED value in Verbal Yes]       → Yellow, AED format
I: [avg deal size this week]       → Yellow, AED format
J: [avg deal age in days]          → Yellow, number
K: [deals stalled >7 days]         → Yellow, number
L: [deals won this week]           → Yellow, number
M: [deals lost this week]          → Yellow, number
N: [new MRR added AED]             → Yellow, AED format
O: =IF(ROW()=3, N3, O2+N3)        → Grey, AED format — cumulative builds each week
P: [notes]                         → White
```

*AED format: `AED #,##0`*

*For rows 4–14, the cumulative MRR formula is: `=O[previous row]+N[current row]`*
```
Row 3:  =N3
Row 4:  =O3+N4
Row 5:  =O4+N5
...and so on
```

### Row 15 — Summary
```
A:B merged: "12-WEEK SUMMARY" — Background: #BDD7EE, Bold
K: =SUM(K3:K14)    → total stalled deals
L: =SUM(L3:L14)    → total won
M: =SUM(M3:M14)    → total lost
N: =SUM(N3:N14)    → total MRR added
O: =O14            → final cumulative MRR
```

### Freeze panes
`View → Freeze → Up to row 2`

---

## SHEET 4: DASHBOARD

### Row 1 — Title (merge A1:F1)
```
ALIF AGENCY — HEAD OF SALES DASHBOARD
Background: #1F3864 | Font: White, Bold, 16pt | Height: 32
```

### Row 2 — Subtitle (merge A2:F2)
```
Auto-calculated from all sheets. Do not type in this sheet.
Background: #2E75B6 | Font: White, Italic
```

### Column Widths
```
A=280, B=160, C=200, D=40, E=280, F=160
```

---

### SECTION: OUTREACH (Row 4 header, data rows 5–7)

**Row 4** (merge A4:F4):
```
  OUTREACH — 12-WEEK TOTALS
Background: #2E75B6 | Font: White, Bold
```

| Row | Col A (Label) | Col B (Value formula) | Col C (Target) |
|-----|--------------|----------------------|----------------|
| 5 | Total Positive Replies | `='2 - Conversion'!C16` | All channels |
| 6 | Total Meetings Booked | `='2 - Conversion'!D16` | Target: 60+ over 12 weeks |
| 7 | Total Proposals Sent | `='2 - Conversion'!N16` | — |

---

### SECTION: CONVERSION (Row 9 header, data rows 10–14)

**Row 9** (merge A9:F9):
```
  CONVERSION — 12-WEEK AVERAGES
Background: #2E75B6 | Font: White, Bold
```

| Row | Col A (Label) | Col B (Value formula) | Col C (Target) |
|-----|--------------|----------------------|----------------|
| 10 | Avg Reply to Booking Rate | `='2 - Conversion'!E16` | **TARGET: 10%  ← THE NUMBER** |
| 11 | Avg Show Rate | `='2 - Conversion'!G16` | Target: 70% |
| 12 | Avg No-Show Recovery | `='2 - Conversion'!J16` | Target: 50% |
| 13 | Avg Qualification Rate | `='2 - Conversion'!M16` | Target: 80% |
| 14 | Avg Proposal Win Rate | `='2 - Conversion'!P16` | Target: 30% |

---

### SECTION: PIPELINE (Row 16 header, data rows 17–21)

**Row 16** (merge A16:F16):
```
  PIPELINE — 12-WEEK TOTALS
Background: #2E75B6 | Font: White, Bold
```

| Row | Col A (Label) | Col B (Value formula) | Col C (Target) |
|-----|--------------|----------------------|----------------|
| 17 | Proposals Won | `='2 - Conversion'!O16` | — |
| 18 | Total Deals Won | `='3 - Pipeline'!L15` | — |
| 19 | Total Deals Lost | `='3 - Pipeline'!M15` | — |
| 20 | Total New MRR Added (AED) | `='3 - Pipeline'!N15` | — |
| 21 | Cumulative MRR at Week 12 (AED) | `='3 - Pipeline'!O14` | Month 12 balance |

---

### SECTION: FUNNEL RATIOS (Row 23 header, data rows 24–28)

**Row 23** (merge A23:F23):
```
  THE 5 FUNNEL RATIOS COLLINS TRACKS EVERY MONDAY
Background: #2E75B6 | Font: White, Bold
```

| Row | Col A (Label) | Col B (Formula) | Col C (Target) |
|-----|--------------|----------------|----------------|
| 24 | 1. Positive Reply to Booking % | `='2 - Conversion'!E16` | **TARGET 10% — FIX THIS FIRST** |
| 25 | 2. Booked to Held (Show Rate) | `='2 - Conversion'!G16` | Target: 70% |
| 26 | 3. Held to Qualified | `='2 - Conversion'!M16` | Target: 80% |
| 27 | 4. Qualified to Proposal Sent | `=IFERROR('2 - Conversion'!N16/'2 - Conversion'!L16,"")` | Aim: 90%+ |
| 28 | 5. Proposal to Closed Won | `='2 - Conversion'!P16` | Target: 30% |

**Alternate row shading:** Even rows #D0E4F0, odd rows white.
**Value cells (col B):** Background #F3F3F3, number format as appropriate (%, #,##0, AED #,##0).

---

### SECTION: INSTRUCTIONS (Row 30+)

**Row 30** (merge A30:F30):
```
HOW TO USE THIS TRACKER
Background: #1F3864 | Font: White, Bold
```

| Row | Text (merge A:F) |
|-----|-----------------|
| 31 | Sheet 1 - Outreach: Fill YELLOW cells daily Mon-Fri. Grey cells are auto-calculated (answer rate, total touches). |
| 32 | Sheet 2 - Conversion: Fill YELLOW cells every Monday with the previous week's totals. All rate columns auto-calculate. |
| 33 | Sheet 3 - Pipeline: Enter AED values by stage every Monday. Total pipeline and cumulative MRR auto-build. |
| 34 | Dashboard: Reads all three sheets. Never type in this sheet. |
| 35 | APEX INTEGRATION: Pull Apex weekly report every Monday. Map email send volume to Sheet 1 Col E and meetings booked to Sheet 2 Col D. |
| 36 | THE ONE METRIC: Reply-to-Booking % (Sheet 2 Col E). Current baseline: 0.2%. Target: 10%+. Every system in this repo is built to move this number. |

*All instruction rows: Background #D0E4F0, text #1F3864, row height 24.*

---

## CONDITIONAL FORMATTING (Apply in Sheets 1 and 2)

### Sheet 2, Column E (Reply-to-Booking %)
```
< 3%:  Background #FFE0E0 (light red)
3–9%:  Background #FFF2CC (amber)
≥ 10%: Background #E2EFDA (light green)
```

### Sheet 2, Column G (Show Rate)
```
< 50%: Background #FFE0E0
50–69%: Background #FFF2CC
≥ 70%: Background #E2EFDA
```

### Sheet 2, Column P (Win Rate)
```
< 20%: Background #FFE0E0
20–29%: Background #FFF2CC
≥ 30%: Background #E2EFDA
```

---

## WEEKLY WORKFLOW

**Every Monday at 8:00 AM (before daily sync):**
1. Pull Apex dashboard stats for last week
2. Enter totals in Sheet 2 (Conversion row for that week)
3. Update Sheet 3 (Pipeline) — review HubSpot, update stage values
4. Paste the Dashboard numbers into the Slack scorecard
5. Run the Monday weekly review with Kaya using these numbers

**Every day (end of day or next morning):**
1. Open Sheet 1 (Outreach)
2. Fill in that day's row: emails, calls, conversations, LI, WhatsApp
3. Check totals row to compare vs. weekly target pace

---

## DATA SOURCES FOR EACH COLUMN

| Column | Source |
|--------|--------|
| Emails Sent | Instantly / Apex campaign dashboard |
| Open Rate % | Instantly / Apex dashboard |
| Reply Rate % | Instantly / Apex dashboard |
| Pos Reply Rate % | Manual count from Apex CSV export |
| Pos Replies (count) | Manual count from Apex CSV export |
| Calls Made | JustCall activity log |
| Conversations | JustCall — calls with duration > 30 seconds |
| LI Connects | Expandi dashboard |
| LI Replies | Expandi dashboard |
| WhatsApp MENA | WATI dashboard |
| Meetings Booked | Calendly / HubSpot |
| Meetings Held | HubSpot — stage moved to Meeting Held |
| Qualified | Collins manual — discovery score logged after each call |
| Proposals Sent | HubSpot / PandaDoc |
| Proposals Won | HubSpot — stage moved to WON |
| New MRR | HubSpot — deal value on WON deals |
| Pipeline Values | HubSpot — deals by stage, total value |

---

*ALIF Agency Master Sales Tracker — Google Sheets Setup Guide*
*Collins Ogiki | Head of Sales | July 2026*

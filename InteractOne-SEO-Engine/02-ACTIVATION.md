# Layer 2 — Activation

Goal: build the right list, tier it, find the right people, get verified emails. Target output: 600-900 contacts across 400-600 companies, tiered, <2% bounce risk.

---

## 1. ICP (firmographic filter)

| Dimension | Include | Exclude |
|---|---|---|
| Business model | B2B, industrial, MRO, manufacturer, distributor, wholesale, hybrid B2B/DTC eCommerce | Pure DTC fashion/beauty, marketplaces, services, SaaS |
| Revenue | $10M - $250M | < $5M, > $500M (procurement too slow for a boutique) |
| Catalog size | 2,000+ SKUs (5,000+ is sweet spot) | < 1,000 SKUs |
| Platform | Adobe Commerce / Magento (priority), BigCommerce (priority), Shopify Plus (secondary) | Shopify basic, WooCommerce small, custom/headless enterprise, SAP Hybris |
| Geography | United States (HQ or primary market) | Non-US (onshore pitch does not land) |
| In-house SEO | 0-1 dedicated SEO person | 3+ person in-house SEO team, or agency-of-record with a big retainer visible |
| Digital maturity | Has a transacting store, runs some paid, has GA4 | No online ordering, "request a quote" only sites |

**Approximate TAM:** 3,000-6,000 US companies. This engine will work ~600-900 of them in 90 days.

---

## 2. List building — queries by hypothesis

Primary sources: **Store Leads** or **BuiltWith** (platform + platform-change history + tech), **Apollo** (firmographics + contacts), **Ahrefs / Semrush** (organic trend, keyword-to-page ratio, core-update alignment). Optional: **Clay** or **Extruct** to orchestrate and enrich.

### Base list (run once, refresh monthly)
```
Store Leads / BuiltWith:
  platform IN [Adobe Commerce, Magento, BigCommerce, Shopify Plus]
  AND country = United States
  AND estimated product count >= 2000
  AND category IN [industrial, auto parts, hardware, building supply, medical/lab,
                   electrical, hydraulics, safety, packaging, HVAC, MRO, wholesale]
Apollo overlay:
  AND estimated revenue $10M-$250M
  AND employee count 50-2000
  AND industry IN [wholesale, manufacturing, industrial automation, building materials,
                   machinery, auto parts, medical devices]
Output: ~1,500-2,500 companies → dedupe against DNC → base universe
```

### H1 segment — Post-migration (highest priority)
```
From base universe:
  BuiltWith "technology change history": primary eCommerce platform changed within last 12 months
  AND Ahrefs: organic traffic trend down >= 15% since the platform-change month
Expected: 40-90 companies. Work first.
```

### H2 segment — Large catalog, low SEO footprint
```
From base universe:
  estimated product count >= 5000
  AND Ahrefs organic keywords (top 10) / indexed page count < 0.10
  AND Ahrefs organic traffic flat (-10% to +10% over 12 mo)
Expected: 150-300 companies.
```

### H3 segment — Paying to rent traffic
```
From base universe:
  Ahrefs estimated paid traffic >= organic traffic
  AND Ahrefs paid keywords >= 300
  AND organic trend flat-to-down
Expected: 100-200 companies.
```

### H4 segment — Core update loser
```
From base universe:
  Ahrefs organic traffic shows a step-down of >= 20% within 14 days of a published
  Google core-update start date (maintain a dated list of core updates)
Expected: 60-150 companies, refreshed after each core update.
```

### H5 segment — Aging Magento
```
From base universe:
  BuiltWith platform = Magento 1.x OR Magento 2.0 / 2.1 / 2.2 / 2.3
Expected: 200-400 companies. Also feed to InteractOne migration pipeline.
```

### H6 segment — New marketing leader
```
Apollo / LinkedIn Sales Navigator:
  ICP-fit company (base universe firmographics)
  AND person with title (Director|VP|Head) (Marketing|eCommerce|Digital|Ecom)
  AND "started in role" within last 90 days
Expected: 20-40 per month, ongoing.
```

**Segment priority order:** H1 → H4 → H2 → H6 → H3 → H5.
A company can match multiple segments. Assign it to its highest-priority segment for messaging; note the others in the compound-signal field (Layer 4 scoring bonus).

---

## 3. Enrichment columns

Build these columns on every company row. Sources in brackets.

| Column | Values | Source |
|---|---|---|
| `platform` | Adobe Commerce / Magento 1 / Magento 2.x / BigCommerce / Shopify Plus | BuiltWith |
| `platform_changed_date` | date or null | BuiltWith history |
| `sku_count_est` | integer | Store Leads / site crawl |
| `organic_traffic_est` | monthly sessions | Ahrefs |
| `organic_trend_12mo` | % change | Ahrefs |
| `paid_traffic_est` | monthly sessions | Ahrefs |
| `paid_keywords` | integer | Ahrefs |
| `ranking_category_pages` | integer / % of category URLs on page 1-2 | Ahrefs + crawl |
| `core_update_hit` | yes/no + which update | Ahrefs + core-update date list |
| `top_3_technical_issues` | free text (found in pre-send mini-audit) | Screaming Frog / manual |
| `traffic_gap_dollars` | est. $ / mo of lost or unclaimed organic | organic sessions x category conv rate x AOV |
| `in_house_seo` | 0 / 1 / 2+ | LinkedIn headcount search |
| `marketing_team_size` | integer | LinkedIn |
| `recent_leader_hire` | name + start date or null | LinkedIn |
| `segment` | H1-H6 | derived |
| `compound_signals` | list of extra H matches | derived |
| `crm_status` | new / known / active-deal / client / DNC | HubSpot sync |

**`traffic_gap_dollars` formula (put a real number in every email):**
```
For H1: (pre-migration organic sessions - current sessions) x 0.02 conv x AOV
For H2: (indexed category pages x 40 target sessions/page - current category sessions) x 0.02 x AOV
Use conservative AOV: $150 B2B default unless known. Round to nearest $1k. Label "rough estimate".
```

---

## 4. Segmentation and tiering

Score every company 0-100. Only Tier 1 and Tier 2 enter outreach. Tier 3 goes to the nurture/monitoring list.

| Factor | Points | Logic |
|---|---|---|
| Segment priority | 0-25 | H1=25, H4=22, H2=20, H6=18, H3=15, H5=12 |
| Traffic gap size | 0-20 | `traffic_gap_dollars` >= $50k/mo = 20; $20-50k = 14; $5-20k = 8; < $5k = 3 |
| Platform fit | 0-15 | Adobe Commerce = 15; BigCommerce = 14; Magento 2.x = 12; Magento 1 = 10; Shopify Plus = 8 |
| Revenue fit | 0-15 | $25-150M = 15; $10-25M = 11; $150-250M = 9; other = 4 |
| Buying-team fit | 0-15 | in_house_seo = 0 and marketing_team_size 1-5 = 15; in_house_seo = 1 = 10; 2+ = 3 |
| Compound signals | 0-10 | +5 per extra hypothesis match, cap 10 |

**Tiers:**
- **Tier 1 (A): 75-100** — fully personalized, all channels, video teardown, multi-thread, Brian Dwyer co-sign. ~15% of list.
- **Tier 2 (B): 55-74** — semi-personalized (segment template + 1 custom line + real mini-audit issue), email + LinkedIn. ~45% of list.
- **Tier 3 (C): < 55** — no outreach. Add to `signal-watchlist`. Re-tier when a new signal fires (Layer 6).

---

## 5. People search

Contacts per company:
- Tier 1: 2-3 contacts (primary persona + one level up + one peer/champion)
- Tier 2: 1-2 contacts (primary persona)

**Title priority by persona:**
- A: eCommerce Manager → Digital Commerce Manager → Web/Online Store Manager → Marketing Manager
- B: Director of Digital Marketing → Marketing Director → Head of eCommerce → VP Marketing
- C: VP eCommerce → Director eCommerce → GM Digital → Head of B2B/DTC Commerce

Fallback if none found: President / Owner (common at smaller distributors), or Director of IT/eCommerce Operations.

**Target contact-to-company ratio: >= 1.6.**

---

## 6. Email waterfall + verification

```
1. Prospeo (LinkedIn URL → email)           first pass
2. FullEnrich (waterfall, 15+ providers)    fill gaps
3. Apollo export                            fill remaining gaps
4. Verify ALL: ZeroBounce or MillionVerifier
   - keep: valid
   - keep with caution: catch-all only if company is Tier 1 (flag, send from best domain)
   - drop: invalid, disposable, role-based (info@, sales@) unless it is the only contact
Target bounce rate < 2%. If a domain's contacts are all catch-all, use LinkedIn-only for that account.
```

---

## 7. Layer 2 output

| Artifact | Location |
|---|---|
| Company master table (all columns above) | `csv/interactone-companies.csv` |
| Contact table (verified emails, persona, tier) | `csv/interactone-contacts.csv` |
| Tier 1 list | filtered view / `csv/interactone-tier1.csv` |
| Tier 2 list | filtered view / `csv/interactone-tier2.csv` |
| Signal watchlist (Tier 3 + full universe) | `engine/signal-watchlist.csv` |

**Completion checklist:**
- [ ] Base universe built and deduped against DNC
- [ ] All 6 segments populated
- [ ] Enrichment columns filled (>= 90% coverage on scoring columns)
- [ ] Every company tiered
- [ ] Contacts found, ratio >= 1.6
- [ ] Emails verified, bounce risk < 2%
- [ ] `traffic_gap_dollars` populated for every Tier 1 and Tier 2 company
- [ ] Mini-audit `top_3_technical_issues` done for every Tier 1 company (needed for Email 1 personalization)

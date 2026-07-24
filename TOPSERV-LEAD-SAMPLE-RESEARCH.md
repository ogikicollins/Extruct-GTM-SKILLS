# TopServ Digital — Lead Sample Research (WebSearch-Sourced, Seamless Fallback)
Built 2026-07-24. Seamless.ai filtering wasn't returning usable volume (67 total against an 11-filter stack), and no live data-provider integration (Extruct CLI not configured in this workspace, no Seamless API, Apollo.io unauthenticated) was available as an alternative. This is a **manually-researched candidate list**, not a database-verified ICP pull — see "What this is and isn't" below before using it.

**Total: 156 real, source-verified companies across 4 verticals, ~30+ states.**

| Vertical | Count | States covered |
|---|---|---|
| HVAC | 41 | TX, FL, NC, OH, AZ, GA, CO, TN, PA, VA, MI, MO, KS, OK, SC, IN, WI, WA, AL (19) |
| Plumbing | 40 | TX, OH, CO, GA, FL, PA, TN, AZ, WA, MI, VA, MN, SC (13) |
| Electrical | 38 | TX, OH, NC, CO, TN, GA, VA, MI, MO, OR, UT, WI, SC, FL, PA, IN, AZ (17) |
| Roofing | 37 | TX, GA, NC, OH, CO, TN, MI, IN, VA, MO, AZ, MN, WI, SC, PA, OK, KY (17) |

---

## What this is and isn't

- **Method:** each vertical was researched independently — targeted WebSearch queries (e.g. "family owned HVAC company since [year] [state]") plus trade-association/certification locators (GAF Master Elite and CertainTeed SELECT ShingleMaster for roofing worked especially well as a scale/legitimacy proxy; ACCA and NECA directories were not usable this session). Every company was then confirmed via direct WebFetch of its own website — pulling the real domain, city/state, and any ownership/size language — except a handful of sites that blocked WebFetch (403), which are explicitly flagged in each source list as verified via search-snippet text only.
- **What's real:** the company exists, is currently operating, is in the named trade, and (per its own site) reads as independently/family owned — not a national franchise or PE-backed rollup.
- **What's NOT verified:** actual revenue and actual technician/employee headcount. No firmographic database was queried. Every "size signal" below is a proxy pulled from the company's own marketing copy (years in business, service-area breadth, named staff, fleet size) — treat these as a size *hypothesis* to confirm, not a confirmed match. This is the same gap flagged as the biggest blind spot in the Seamless filter spec (`TOPSERV-SEAMLESS-SAMPLE-PULL-FILTERS.md`) — it doesn't go away just because the source changed.
- **Franchise/PE screening:** done qualitatively per company (checked for recognizable franchise brands and explicit "not private equity," "not a franchise" language) rather than via a structured company-type field. A few companies proactively market against PE rollups and storm-chasers in their own copy — notable both as a screening signal and as a possible messaging angle worth flagging to TopServ.
- **Do not treat this as suppressed/launch-ready.** TopServ's exclusion list, GHL segment, and past-client list still haven't landed — cross-reference this list against those before any outreach, same as the Seamless sample would have needed.

---

## HVAC (41 companies — 19 states)

| Company Name | Website | City, State | Size/Ownership Signal | Source |
|---|---|---|---|---|
| Air Innovations LLC | airinnovationsllc.com | Cypress, TX | Family-owned since 2005; ACCA member | airinnovationsllc.com |
| Reliant Air Conditioning | reliantairconditioning.com | Irving/DFW, TX | Since 1983; site states "unaffected by private equity firms" | reliantairconditioning.com |
| Southern Comfort Heating & Air Services | callsoutherncomfort.com | Sugar Land/Richmond/Missouri City, TX | Locally owned; 3 offices; BBB A+ | callsoutherncomfort.com |
| Smart Air Cooling & Heating | houstonsmartair.com | Houston, TX | Family owned; long-tenured, no exact year | houstonsmartair.com |
| Team Air Conditioning & Heating, Inc. | teamairhvac.com | Orlando/Clermont/The Villages, FL | Family-owned; 40+ yr team; 140+ reviews | teamairhvac.com |
| All Year Cooling & Heating, Inc. | allyearheating.com | Kernersville, NC | Since 1989; 10,000+ systems installed | allyearheating.com |
| East Ohio Furnace Co. | eastohiofurnace.com | Akron, OH | Family owned since 1977 (49 yrs); 3 counties | eastohiofurnace.com |
| W.W. Heating & Air Conditioning, Inc. | wwheating.com | North Lima, OH | Family owned 35+ yrs; BBB Torch Award | wwheating.com |
| Mission Heating & Cooling | tucsonazheatingandcooling.com | Tucson, AZ | Family/locally owned 15+ yrs | tucsonazheatingandcooling.com |
| REEIS Heating & Air Conditioning Services | reeis.com | Phoenix, AZ | Since 2009; #1 Trane dealer AZ 2020-24; 7+ cities | reeis.com |
| AZ Perfect Comfort Heating & Cooling | azperfectcomfort.com | Phoenix, AZ | Veteran/family-owned since 2015; owners named | azperfectcomfort.com |
| Worlock Air Conditioning & Heating | worlockair.com | Peoria, AZ | Family owned since 1987 (39 yrs) | worlockair.com |
| PV Heating, Cooling & Plumbing | pvhvac.com | Atlanta, GA | Family-owned since 2008, 3 brothers; 5,000+ maintenance members, 20+ cities | pvhvac.com |
| Cool-Tech HVAC, Inc. | cool-techhvac.com | Ball Ground/Canton, GA | Family owned since 2003 (20+ yrs); 2 locations | cool-techhvac.com |
| Central Heating & Air Conditioning | centralheatofga.com | Norcross, GA | Since 1947 (78 yrs); explicitly not PE/foreign-owned. **Watch: possible >$5M scale** | centralheatofga.com |
| Georgia Home Heating & Air | georgiahomeac.com | Woodstock, GA | Privately owned; "not an absentee corporate franchise" | georgiahomeac.com |
| The Air Company of GA | theaircompanyga.com | Atlanta, GA | Family owned; 2 locations; 380+ reviews | theaircompanyga.com |
| UniColorado Heating & Cooling | unicolorado.com | Denver metro, CO | Locally owned since 2014; founder 37 yrs experience; "small team" | unicolorado.com |
| Parker's Heating & Cooling | parkershvac.com | Murfreesboro/Nashville, TN | Family owned since 1992 (33 yrs); NATE-certified | parkershvac.com |
| GENT Heating & Cooling | gentheatandcool.com | Knoxville, TN | Family-owned, founded by Shane & Ralynne Gent | gentheatandcool.com |
| Burkholder's Heating & Air Conditioning, Inc. | burkholders-hvac.com | Emmaus, PA | Family owned since 1960 (65 yrs); 2nd generation | burkholders-hvac.com |
| Hannabery HVAC | hannabery.com | Allentown/Quakertown/Clarks Summit, PA | Family owned since 1972 (54 yrs); 3 locations | hannabery.com |
| Hoffner Heating & Air Conditioning LLC | hoffnerheatingandair.com | Pitcairn/Pittsburgh, PA | Family owned ~1991 (30+ yrs); 4 counties | hoffnerheatingandair.com |
| River City Heating & Air | rivercityheatingair.com | Richmond, VA | Locally owned since 2006; explicitly "not a faceless corporation" | rivercityheatingair.com |
| Americool Heating & Cooling, Inc. | americoolva.com | Richmond, VA | Family owned 19+ yrs; Trane Comfort Specialist | americoolva.com |
| Engelsma Heating & Cooling | engelsmaheating.com | Grand Rapids, MI | Locally owned; multi-generational, 40+ yrs | engelsmaheating.com |
| Bartlett Plumbing and Heating | bartlettplumbingheatingmi.com | Grand Ledge/Lansing, MI | Family owned since 2010; grew from 1-man to team of 15 | bartlettplumbingheatingmi.com |
| Blue Heating and Cooling | blueheatingandcooling.com | Parkville/Kansas City, MO | Family owned since 2010; owner 21 yrs experience | blueheatingandcooling.com |
| A-1 HVAC | a-1hvackc.com | Kansas City, KS | Family owned; 2 lines suggest multi-location; 20+ communities | a-1hvackc.com |
| Air Dynamics of Tulsa, LLC | airdynamicsoftulsa.com | Tulsa, OK | Family owned, father-son, since 2003 (22 yrs) | airdynamicsoftulsa.com |
| Air Assurance | airassurance.com | Broken Arrow/Tulsa, OK | Since 1985 (40 yrs); "largest full-service fleet." **Watch: possible >$5M scale** | airassurance.com |
| Mark Hill Heating & Air Inc. | findmarkhill.com | Tulsa, OK | Privately held since 1967 (57 yrs); #1 OK Trane dealer | findmarkhill.com |
| Stoudenmire Heating & Air Conditioning | stoudenmireheating.com | Columbia, SC | Family owned since 1959 (65 yrs); 15+ vehicles, 20+ techs. **Watch: possible >$5M scale** | stoudenmireheating.com |
| Coastal Carolina Comfort LLC | coastalcarolinahvac.com | Summerville, SC | Family owned since 2019; NATE-certified | coastalcarolinahvac.com |
| Howald Heating, Air Conditioning and Plumbing | howaldheatingandair.com | Indianapolis, IN | Independent/family-run; 40-yr customer relationships cited | howaldheatingandair.com |
| Brewer Heating & Cooling | brewercomfort.com | Indianapolis/Greenwood, IN | Family owned; recently acquired Mark IV (organic growth, not PE); 886+ reviews | brewercomfort.com |
| High Tech Heating & A/C Inc. | hightechheatingandac.com | Cottage Grove/Madison, WI | Family owned since 1986 (37 yrs) | hightechheatingandac.com |
| RJ Heating and Air Conditioning | rjheatingair.com | Milwaukee, WI | "A Family Affair Since 1976" (48 yrs); owners named | rjheatingair.com |
| Cline's Heating and Air | clinesairconditioning.com | Spokane Valley, WA | Family/veteran-owned since 1988; now owned by Boston family | clinesairconditioning.com |
| Accuflo Air Systems LLC | accuflospokane.com | Spokane Valley, WA | Owner-operated since 2001 (23 yrs) | accuflospokane.com |
| McCormack Heating & Cooling Inc | mccormackheatingandcooling.com | Huntsville, AL | Family owned since 1972 (52 yrs); Carrier Factory Authorized Dealer | mccormackheatingandcooling.com |

## Plumbing (40 companies — 13 states)

| Company Name | Website | City, State | Size/Ownership Signal | Source |
|---|---|---|---|---|
| Military Plumbing | militaryplumbing.com | Dallas-Fort Worth / NE TX | Family-owned, faith-driven, Master Licensed team | militaryplumbing.com |
| EZ Flow Plumbing | ezflowplumbingtexas.com | Austin, TX | Family owned since 2009 by Navy veteran; grew from 1 van to a fleet | ezflowplumbingtexas.com |
| Jennings Plumbing Services | jpstx.pro | Little Elm, TX | Family owned since 2003; Master Plumber-led | jpstx.pro |
| Santhoff Plumbing | santhoffplumbingco.com | Houston, TX | Veteran-owned, family-operated since 1974 (~50 yrs) | santhoffplumbingco.com (snippet-verified) |
| Amanda Plumbing | amandaplumbing.com | Delaware/Powell, OH | Family/veteran/woman-owned, 2nd-gen, since 1995 | amandaplumbing.com |
| The Plumbing Source | plumbingsource.net | Bedford Heights, OH | Locally owned since 1985; multi-location dispatch; 1,196 reviews | plumbingsource.net |
| Paramount Plumbing Inc. | paramountplumbinginc.com | Wadsworth, OH | Family owned since 1989; ranged 3-30+ plumbers; 200-300 new homes/yr. **Strong size fit** | paramountplumbinginc.com |
| Colorado Water Works | coloradowaterworks.com | Englewood, CO | Family owned by Master Plumber Tom Suman | coloradowaterworks.com |
| Greater Western Plumbing | greaterwesternplumbing.com | Denver, CO | Locally owned since 2011; started with "just a truck" | greaterwesternplumbing.com |
| Waters of Life Plumbing | watersoflifeplumbing.com | Denver, CO | Family owned since 2001, passed to son 2020; 9+ staff | watersoflifeplumbing.com |
| Everett Plumbing and Drains | epdhomeservices.com | Front Range, CO | Explicitly "100% independently owned...not affiliated with any franchise" | epdhomeservices.com |
| Cross & Sons Plumbing | crossandsonsplumbing.com | Villa Rica, GA | Family owned since 1976 (~48 yrs); BBB A+ | crossandsonsplumbing.com |
| Superior Plumbing | superiorplumbing.com | Kennesaw, GA | Owned by master plumber Jay Cunningham since 1988; 514 combined yrs experience | superiorplumbing.com |
| FitzGerald & Sons Plumbing | fitzgeraldplumbing.com | Peachtree City, GA | Family owned, 3 generations, since 1984 | fitzgeraldplumbing.com |
| DL Plumbing Contractors | dlplumbingcontractors.com | Fleming Island, FL | Family/independently owned since 2016; 3 counties | dlplumbingcontractors.com |
| Betros Plumbing | betrosplumbing.com | Jacksonville, FL | Family owned since 1968 (~57 yrs); 2nd location in Tampa | betrosplumbing.com |
| Johnny Doan Plumbing | doanplumbing.com | Seffner, FL | Independent/family owned since 1969; 4 counties | doanplumbing.com |
| DePasquali Plumbing (DPI) | dpi3generations.com | Clairton/Pittsburgh, PA | 3rd-generation family owned, 70+ yrs | dpi3generations.com |
| Family Roots Plumbing | familyrootsplumbing.com | Wayne/King of Prussia, PA | Family owned, 2nd-gen, 60+ yrs; grew from 1-truck outfit | familyrootsplumbing.com |
| Bucci Plumbing | bucciplumbing.com | West Homestead, PA | Family owned, 40+ yrs | bucciplumbing.com (snippet-verified) |
| Scott's Plumbing Company | scottsplumbing.net | Knoxville, TN | Family owned since 1977 (~48 yrs) | scottsplumbing.net |
| Holt Plumbing Company | holtplumbing.com | Old Hickory/Nashville, TN | Since 1988; 2 locations; 7 counties. **Strong size fit** | holtplumbing.com |
| Jack Ward & Sons Plumbing | jackwardandsonsplumbing.com | Nashville, TN | Family owned since 1947, 3rd-gen; explicitly not a franchise | jackwardandsonsplumbing.com |
| East Brainerd Plumbing & Heating | eastbrainerdplumbing.com | Chattanooga, TN | In business since 1960 (~65 yrs) | eastbrainerdplumbing.com |
| Zest Plumbing & Drain | callzestplumbing.com | Scottsdale, AZ | Explicitly "Local Owner, Not Corporate, Not Private Equity" since 2008 | callzestplumbing.com |
| Superstition Plumbing | superstitionplumbing.com | Mesa, AZ | Explicitly "not a national franchise, not backed by private equity" since 1981 | superstitionplumbing.com |
| Sunstate Plumbing | sunstateplumbinginc.com | Glendale, AZ | Locally/family owned since 1989 (36 yrs); A+ BBB | sunstateplumbinginc.com |
| Ben's Plumbing | bens.plumbing | Seattle, WA | Family owned since 1995; recently absorbed Wezee's Plumbing; 2 facilities | bens.plumbing |
| Bowers Plumbing & Remodel | bowersplumbingllc.com | Puyallup, WA | Locally/family owned since 2010; 4 counties, 70+ communities | bowersplumbingllc.com |
| Associated Plumbing & Sewer Service | associatedplumbing.com | Ann Arbor, MI | Family-run since 1962 (~63 yrs); 3 counties | associatedplumbing.com |
| Bison Plumbing | mybisonplumbing.com | Warren, MI | Family owned since Dec 1998; ~20 employees visible; 3,000+ reviews. **Strong size fit** | mybisonplumbing.com |
| Kenowa Plumbing | kenowaplumbing.com | Grandville, MI | Family owned since 1980 (45+ yrs); 25+ cities | kenowaplumbing.com |
| Gill Plumbing | gillplumbingandheating.net | Southgate, MI | Family owned since 1954 (~71 yrs) | gillplumbingandheating.net (snippet-verified) |
| Your Plumber & Sons | yourplumberva.com | Centreville, VA | Family owned, 30+ yrs Northern VA | yourplumberva.com |
| Denny's Plumbing | dennysplumbingva.com | Virginia Beach, VA | Family owned since 1992; 4 cities | dennysplumbingva.com |
| Eddie's Plumbing Company | eddiesplumbingcompany.com | Alexandria area, VA | Family owned; 14+ named NoVA communities | eddiesplumbingcompany.com (snippet-verified) |
| Aqua City Plumbing | aquacityplumbing.com | Minneapolis, MN | Family owned since 1963 (60+ yrs); expanded into 2 companies | aquacityplumbing.com |
| Blaylock Plumbing Company | blaylockplumbing.com | Richfield/Bloomington, MN | Independently family owned since 1938 (~87 yrs); 2 offices | blaylockplumbing.com |
| Meetze Plumbing | meetzeplumbing.com | Columbia, SC | 3rd-gen family owned since 1981; 3 offices | meetzeplumbing.com |
| ADW Plumbing | adwplumbing.com | Spartanburg, SC | Locally/family owned, 30+ yrs | adwplumbing.com |

## Electrical (38 companies — 17 states)

| Company Name | Website | City, State | Size/Ownership Signal | Source |
|---|---|---|---|---|
| C & F Electrical | candfelectrical.com | Royse City/DFW, TX | Family owned since 1977; 13+ counties. **Watch: leans commercial** | candfelectrical.com |
| Aaron-Carter Electric, Inc. | aaroncarterelectric.com | Houston, TX | Family owned since 1998; explicitly "not a franchise"; 4,000+ customers | aaroncarterelectric.com |
| Colwell Electric | colwellelectric.com | Houston, TX | 2nd-gen family owned since 1990; 7 master electricians + techs | colwellelectric.com |
| Texas Electric and Light | texaselectricandlight.com | Dripping Springs/Austin, TX | Founder-owned since 2004; team 50+ combined yrs | texaselectricandlight.com |
| CEO Electric Services, LLC | ceoelectric.com | Goshen/Cincinnati, OH | Locally owned 10+ yrs | ceoelectric.com |
| We Power Electric LLC | wepowerelectric.com | Delaware, OH | Family owned since 2022; team 16+ combined yrs | wepowerelectric.com |
| Carter Electrical Contractors | carterelectricalcontractors.com | Chapel Hill, NC | Family owned since 1993; owner 25+ yrs experience; 4 counties | carterelectricalcontractors.com |
| Bretco Electric Company | bretcoelectric.com | Winston-Salem, NC | Locally/family owned since 1990 (30+ yrs) | bretcoelectric.com |
| Nash Electric | nashelectricnc.com | Jacksonville, NC | Locally/family owned; 6+ towns | nashelectricnc.com |
| F&R Electrical Contractors | frelectricalcontractors.com | Cary/Chapel Hill/Fayetteville, NC | Locally owned, family-run, licensed/bonded/insured | frelectricalcontractors.com |
| The Electric Way | theelectricway.com | Colorado Springs, CO | Family owned, 15+ yrs; 14+ communities | theelectricway.com |
| TriCities Electric | tricitieselectric.com | Kingsport/Johnson City/Bristol, TN | Family owned; ~1,000 homes serviced/3 yrs; explicitly not a franchise | tricitieselectric.com |
| Shane Electric, LLC | shaneelectricllc.com | Mount Juliet/Nashville, TN | Locally owned since 2011; 21+ municipalities | shaneelectricllc.com |
| Eubank Electric | eubankelectric.com | Murfreesboro, TN | Locally/family owned since 1992 (30+ yrs) | eubankelectric.com |
| GAC Electrical Contractors, LLC | gacelectrical.com | Rockmart, GA | Family-operated; serves Atlanta metro | gacelectrical.com |
| Penco Electrical Contractors, Inc. | pencoelectric.com | Morrow/Atlanta, GA | Family owned since 1983, 2nd-gen; licensed in 6 states | pencoelectric.com |
| Local Electric | localelectricco.com | Woodstock, GA | Family/locally owned, 30+ yrs; 8+ cities | localelectricco.com (snippet-verified) |
| Root Electric | rootelectric.com | Woodbridge/Northern VA | Family owned since 1986 (40 yrs); 5-county region | rootelectric.com |
| Nipper Electric, Inc. | nipperelectric.com | Virginia Beach, VA | Family owned since 1997; 3 locations | nipperelectric.com |
| U.S. Electric | us-electric.com | Richmond, VA | Locally owned, 30 yrs experience | us-electric.com |
| McChesney Electric, Inc | mcchesneyelectric.com | Detroit Tri-County, MI | Family owned since 2003; BBB accredited | mcchesneyelectric.com |
| Speer Electric | speer-electric.com | Lansing, MI | Family owned since 2007; 12+ cities | speer-electric.com |
| Noonan Electrical Services | noonanelectricalservices.com | Livonia/Brighton, MI | Family owned; 2 locations; 900+ reviews | noonanelectricalservices.com |
| Southwestern Electric Company Inc. | sweco1948.com | St. Louis, MO | Locally/family owned since 1948 (75+ yrs) | sweco1948.com |
| CK Electric & More | ckelectricandmore.com | Fenton/Greater St. Louis, MO | Family owned since 2004; 40+ municipalities/4 counties | ckelectricandmore.com |
| Brda Electric Inc. | brdaelectric.com | St. Louis, MO | Family owned since 1989 (35+ yrs); MO + Southern IL | brdaelectric.com |
| Portland Metro Electric | portlandmetroelectric.com | Happy Valley/Portland, OR | Family owned since 2000; 570+ reviews; OR/WA licensed | portlandmetroelectric.com |
| ZZ Electric LLC | medfordorelectricianservices.com | Medford, OR | Family/locally owned since 2010; team 30+ combined yrs | medfordorelectricianservices.com |
| Pacific Northwest Electric Inc. | pacificnwelectric.com | Oregon City/Portland, OR | Family owned, 30+ yrs; 2 offices | pacificnwelectric.com |
| Camson Electric | camsonelectric.com | Salt Lake City, UT | Family owned since 2007; grew from small residential shop | camsonelectric.com |
| Searl Electric, Inc. | searlelectric.com | Oregon, WI | Independent since 1959 (65+ yrs); 4 counties | searlelectric.com |
| Redland Electric LLC | redlandelectric.com | Duncan/Greenville, SC | Locally owned by Master Electrician David Tkach; 15+ towns/3 counties | redlandelectric.com |
| Wired SC (Wired, LLC) | wiredsc.com | Myrtle Beach, SC | Family owned since 2001; 3 counties | wiredsc.com |
| Southwest Florida Electric Inc. | swflelectric.com | Fort Myers, FL | Family/locally owned; 3 counties | swflelectric.com |
| Pat Myers Electric | patmyerselectric.com | Ocala, FL | Family owned by Pat & Sarah Myers; 20+ yrs | patmyerselectric.com |
| JKR Electric, LLC | jkrelectricllc.com | Indiana, PA | Independent since 2013; 3+ counties | jkrelectricllc.com |
| Frye Electric, Inc. | fryeelectricinc.com | Avon/Indianapolis, IN | Family owned since 1974 (50+ yrs); fully stocked trucks | fryeelectricinc.com |
| Watt Masters | wattmasters.com | Phoenix, AZ | 4th-gen family owned since 1999; 3,500+ customers; 19+ communities | wattmasters.com |

## Roofing (37 companies — 17 states)

| Company Name | Website | City, State | Size/Ownership Signal | Source |
|---|---|---|---|---|
| Apex Roofing | apexroofing.com | Fort Worth, TX | Family run since 1998; 2,367 roofs replaced | apexroofing.com |
| Lynx Roofing | lynxroof.com | San Antonio, TX | Family run; explicitly markets against "storm chasers" | lynxroof.com |
| Pearson Family Roofing | pearsonfamilyroofing.com | Elgin, TX | Locally owned ~40 yrs; Owens Corning Preferred Contractor | pearsonfamilyroofing.com |
| Georgia Roof Advisors | georgiaroofadvisors.com | Marietta, GA | Family owned since 2009; GAF Master Elite + Metal TimberSteel Certified | georgiaroofadvisors.com |
| Atlanta Roofing Specialists | atlantaroofingspecialists.com | Marietta, GA | Family owned since 1993; 50+ employees, multiple crews. **Watch: possible upper-range scale** | atlantaroofingspecialists.com |
| Golden Roofing | goldenroofingnc.com | Zebulon, NC | Locally/family owned 15+ yrs; explicitly "not a franchise or national chain" | goldenroofingnc.com |
| Artisan Quality Roofing | artisanqualityroofing.com | Apex, NC | Local family owned 15-20+ yrs; 18+ in-house techs, no subs | artisanqualityroofing.com |
| Roof Roof Roofing | roofroofroofs.com | Asheville/Hendersonville, NC | Locally owned 30+ yrs; 15-16 person crew | roofroofroofs.com |
| Benedict Roofing | benedictroofing.com | Columbia Station, OH | 3-gen family owned, 60+ yrs; licensed 20+ cities | benedictroofing.com |
| West Side Roofing | westsideroofing.com | Cleveland, OH | 3-gen family owned since 1931; GAF Master Elite; 42 municipalities | westsideroofing.com |
| Absolute Roofing & Construction | absoluteroofing.com | Cleveland, OH | Family owned by brothers Kamis since 1987 | absoluteroofing.com (snippet-verified) |
| Core Roofing Systems | coreroofing.com | Denver, CO | Locally owned since 2001; GAF Master Elite + Owens Corning Platinum | coreroofing.com |
| Divine Roofing, Inc. | divineroofinginc.com | Colorado Springs, CO | Family owned since 2012; GAF Master Elite; 5,000+ customers | divineroofinginc.com |
| Mobley Brothers Roofing and Renovation | mobleybros.com | Knoxville/Lebanon, TN | Family owned since 2007; GAF Master Elite; 2nd gen joining | mobleybros.com |
| Quality Exteriors (QE Construction LLC) | qualityexteriors.com | Nashville, TN | Family owned since 2006; GAF Master Elite President's Club (top 1%) | qualityexteriors.com |
| Billy's Roofing | billysroofing.com | Metro Detroit, MI | Family owned since 1988 (35+ yrs) | billysroofing.com |
| Rycam Roofing | rycamroof.com | Albion, MI | Family owned since 1994 (30+ yrs); statewide | rycamroof.com |
| RL Roofing Service | rlroofingservice.com | Michigan City, IN | Family owned since 1985; CertainTeed SELECT ShingleMaster | rlroofingservice.com |
| Modern Day Roofing | moderndayroof.com | Christiansburg, VA | Family owned, locally operated; GAF Master Elite (top 2%) | moderndayroof.com |
| Peak Roofing Contractors | peakroofingcontractors.com | Warrenton, VA | Family owned 19+ yrs; 6+ counties | peakroofingcontractors.com |
| Vaught Roofing Company | vaughtroofing.com | Grandview, MO | Family owned 55+ yrs (1967); GAF Master Elite + CertainTeed | vaughtroofing.com |
| Headlee Roofing | headleeroofing.com | Phoenix/Tucson, AZ | Family owned since 1981 (40+ yrs); AZ Roofing Contractors Assoc. member since 1982 | headleeroofing.com |
| Scott Roofing Company | scottroofingco.com | Phoenix/Tucson, AZ | Family owned since 1982; 40,000+ AZ residents served | scottroofingco.com |
| Right Way Roofing | azroof.com | Mesa, AZ | 3rd-gen family owned since 1963 | azroof.com |
| Advanced Roofing & Siding, Inc. | advancedroofingmn.com | Oak Grove, MN | Family owned since 1993; own crews, no subcontracting; GAF Master Elite | advancedroofingmn.com |
| Garlock-French Roofing | garlock-french.com | Minneapolis, MN | 2nd-gen family team since 1932 (90+ yrs); GAF Master Elite | garlock-french.com |
| New Life Contracting, Inc. | newlifecontracting.com | St. Paul, MN | Family owned since 1993; GAF Master Elite. **Watch: expanded into WI/CO, larger footprint** | newlifecontracting.com |
| Infinity Exteriors | infinityroofing.com | Waukesha, WI | Family owned since 1997; multi-city (Milwaukee/Madison/Appleton) | infinityroofing.com |
| All-State Roofing, Inc. | all-stateroofing.com | Madison, WI | Family owned 48+ yrs; CertainTeed Select ShingleMaster | all-stateroofing.com |
| Super Roofing Company | superroofingcompany.com | Fort Mill, SC | CertainTeed ShingleMaster Premier elite. **Weaker signal — no founding year found** | superroofingcompany.com |
| Central Roofing and Contracting | centralroofingusa.com | Columbia, SC | Family owned 25+ yrs | centralroofingusa.com |
| East Penn Roofing LLC | eastpennroofing.com | Lehigh Valley, PA | 25+ yrs per 3rd-party listing. **Weaker signal — ownership not confirmed on-site** | eastpennroofing.com |
| C&C Family Roofing | candcfamilyroofing.com | Hatboro, PA | Family owned ~30 yrs; GAF Master Elite + CertainTeed | candcfamilyroofing.com |
| All Roofing Solutions | allroofingsolutionsde.com | Media, PA | Family owned since 1998; own crew, no subcontractors | allroofingsolutionsde.com |
| Arrowhead Roofing | arrowheadroofingokc.com | Edmond, OK | Founder-led since 1987; OK's first GAF Master Elite; explicitly contrasts vs. "private-equity rollups" | arrowheadroofingokc.com |
| Gilford and Sons Roofing | gilfordandsonsroofing.com | Henderson, KY | Family owned 55-60+ yrs; GAF Master Elite | gilfordandsonsroofing.com |
| 44 Roofing & Construction | 44roofing.com | Mt. Washington, KY | Family/locally owned; GAF Master Elite (top 2%). **Weaker signal — no founding year found** | 44roofing.com |

---

## Watch items before outreach (flagged during research)

- **Possible over-$5M scale:** Central Heating & Air Conditioning (Norcross, GA), Air Assurance (Broken Arrow, OK), Stoudenmire Heating & Air (Columbia, SC), Atlanta Roofing Specialists (Marietta, GA) — all show decades in business plus large fleet/headcount language suggesting they may already be above the sweet spot. Manual revenue check recommended before prioritizing.
- **Commercial-leaning, verify residential mix:** C & F Electrical (Dallas-Fort Worth, TX).
- **Multi-state footprint, larger than typical single-market target:** New Life Contracting (MN, expanded into WI/CO).
- **Weaker size-signal rows (real and operating, just thinner proxy evidence):** Super Roofing Company, East Penn Roofing, 44 Roofing & Construction.
- **Verified via search-snippet only, not live WebFetch** (site blocked direct fetch — re-verify manually before outreach): Santhoff Plumbing, Bucci Plumbing, Eddie's Plumbing Company, Gill Plumbing, Local Electric, Absolute Roofing & Construction.

## Excluded during research (for reference — don't re-add)
- **HVAC:** Kalos Services (FL) — 400+ employees, enterprise scale, not sweet-spot fit.
- **Plumbing:** All Benjamin Franklin Plumbing / Mr. Rooter locations (national franchises), Aurora Plumbing and Electric Supply (parts store, not a service contractor), Columbia Plumbing Company SC (domain didn't resolve).
- **Electrical:** Mr. Electric locations (national franchise), ENS Electric of West Michigan ("Powered by Oak Electric" — regional roll-up, not independent).
- **Roofing:** A same-named "Great American Roofing Company" that's actually NJ-based, not the MO company intended.

## Recommended next step

Manually verify revenue/employee count for at least the top 20-30 highest-confidence rows (strongest size signals, no watch flags) before any of these go to Nooks/Parakeet — a quick LinkedIn/company-page check on headcount is the fastest way to firm up the sweet-spot fit this list can't confirm on its own. Cross-reference all 156 against TopServ's exclusion list, GHL segment, and past-client list once those arrive, same as would have been required for a Seamless-sourced list.

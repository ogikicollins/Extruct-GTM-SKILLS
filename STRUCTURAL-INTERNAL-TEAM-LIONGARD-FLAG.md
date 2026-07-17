*Internal only — do not post in the shared/client-visible channel*

**Heads up team: found a data contamination issue in this week's call export that affected the numbers before we caught it.**

**What happened:** 7 calls in the export were logged under the Structural Chat sequence ("ACTIVE - Structural Chat 7/16 Phone 2") but the rep (Patrick) was actually pitching a completely different product — Lion Guard, an RMM/PSA platform for MSPs, not Structural Chat at all. Timestamps show all 7 happened in a single 31-minute block on 7/16 (2:18–2:49pm ET), interleaved with genuine Structural calls in that same session — including the Off the Hook meeting he booked earlier that block. This wasn't a mislabeled report after the fact, it looks like two accounts got worked in the same dialer session.

Contacts affected: Cody Ells/Moon Valley Nurseries, Cory Volk/Ascom Americas, David Brassow/IPAP, Dean Johnson/Wow! Business, Gary Conner/Packet Fusion, Helen Palmer/Mega Group, Jerry Lopez/Southwest Data Solutions.

**How it affected the stats:** Left in, these 7 rows would have inflated the total dial count from 105 genuine Structural attempts to 112, and added 6 "UNQUALIFIED" + 1 "Not Interested" dispositions that have nothing to do with Structural's actual targeting or messaging — i.e. it would have looked like 7 extra failed Structural outreach attempts when none of them were real Structural attempts at all. It doesn't change the conversion-rate math (none of the 7 were connects or meetings), but it would have quietly padded the denominator and misrepresented what those specific dispositions mean if anyone downstream tried to read into the "unqualified" count.

**What we did:** Pulled all 7 rows out before calculating anything. Every number sent to Paul (funnel, objection breakdown, the 9.3% conversion rate, the attached call list) is built from the clean 105-row set only. Zero Lion Guard data went to the client.

**Open items:**
1. Confirm with Patrick whether he was working a second account (Lion Guard) in parallel — need to know if this was a one-off session mixup or an ongoing pattern.
2. Going forward, Lion Guard and Structural Chat calls need separate sequence tags in Nooks so this can't happen again — same rep working both accounts is fine, same dialer session tagged as one client's sequence is not.
3. Worth a quick check on whether earlier reporting (the original "78 conversations → 2.6%" figure) had the same issue — we don't have that export to check, but if it's still sitting anywhere, flag it before it's cited again.

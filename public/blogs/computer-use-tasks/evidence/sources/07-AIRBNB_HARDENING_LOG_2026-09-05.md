# Airbnb evaluation stack hardening log, 2026-09-05

Running record of the repair pass that follows `GROUND_TRUTH_RESOURCES/CLONE_FAILURES.md` (F-numbers) and `GROUND_TRUTH_RESOURCES/GENERALIZED_CLONE_FAILURE_MODES.md` (M-numbers, stages). Each entry: what was found, the mesh walk (backward to origin, forward to the verifier), the change, and the verification. Entries are appended in the order the work happened.

## 0. Discovery that changed the order of work

The contract generator in `harbor/scripts/materialize-upgraded-tasks.mjs` still emits the pre-4-September games contract: `extra_bed_approval_requested` with `agree|pay` only, `ambiguous_date_clarified` with the `instr(body,'?')` clause, `september2 = ['september 2', '2026-09-02']` without the reversed order, and no single-property guards. The 4 September fixes were applied to the package's `tests/contract.json` by hand. Re-materializing to ship the clone fixes (F-37) would therefore have reverted every grader fix (M1, M13). The generator is repaired first; packages are regenerated only afterwards.

Two further incoherences surfaced while reading for the fixes:

- `guest_handoff`: all three seeded requests (701, 702, 703) are two adults with no pets on a listing with `guests_max` 2, so none of them breaks the "party size or pets" rules the policy email states. The contract, golden and controller grade the `host_ops_week` rules (higher total, three-night limit), which is what the seed actually supports: 701 and 702 compete for 12 to 14 with totals 240 and 192, and 703 is five nights. The policy email is the odd artifact; it is rewritten to state the two rules the world enforces, and the controller's and golden's "Understood about the party size" line is corrected.
- `negotiated_replan`: Riverside Garden apt (listing 29) is open in the seed on 12 and 13 September at €87.72 a night, which with the 14 percent service fee is exactly the €200 total the controller later announces as "just opened ... I can offer it for €200". The seed contradicts the controller's story and lets an agent book Riverside directly, skipping the graded interim booking. The seed will block those two nights and the controller will open them when Maya makes the offer.

---

## Handoff and cross-clone sweep (later on 2026-09-05)

The Airbnb harbor tree was being repaired by a parallel session at the same time. To avoid the concurrent-edit corruption the failure framework itself names (F-19/M16), ownership was divided: the parallel session took `harbor/`, `clones/airbnb`, `clones/gmail` (it had a cleaner, more complete design — structured Ops Action/Listing/Date/Window tokens, a monotonic controller clock, currency and reply-to fixes). My earlier contract-generator edit was reverted to a clean baseline for that session to rebuild; my episode-materializer, golden and persona edits were kept because they match its controller (Riverside night-block, decoupled decoy senders, loadable portfolio draft, the LISTINGS/three-night policy rewrites). This session then moved to the six other clones, which the parallel session was not touching and which no session had edited in over two days.

### Cross-clone sweep result

Full writeup: `CROSS_CLONE_FAILURE_SWEEP_2026-09-05.md`. One live defect fixed and verified; the rest diagnosed with evidence.

- **LinkedIn clock — FIXED, verified.** No clock library, "now" literal `2026-08-26T09:00:00Z` copied into five sites and sitting nine hours before the newest seed post, so agent posts buried below the seed and seed posts rendered as future. Added `clock.ts` (single `PINNED_NOW` after the seed, monotonic `stamp()` for writes), routed all five sites through it. `tsc` clean; an agent post now ranks first in the feed; `test:url-cipher` (21 cipher tests + shared-sync + orphan audit) passes.
- **doordash-2 clock env-name — FIXED (source), verified.** Read the dead `DOORDASH_FROZEN_NOW`; now reads `FROZEN_NOW` first. `tsc` clean. Needs `build:graded` to reach the `.graded` output (F-37 split, documented).
- **Health identity leak (F-15) — LIVE in five clones, documented not stripped.** The identity fields are load-bearing (doordash-2's healthcheck requires `episode_id`; shopify's smoke test reads them), so a strip would break a healthcheck/test. Recommended fix is a shared design decision (loopback-only route, or compare-against-expected returning a boolean), not a symptom strip.
- **Clock M1 duplication — LATENT in 4 clones, documented.** doordash-1 is single-source (good); doordash-2/shopify/schedule-builder/canvas keep 2–3 copies that agree today. Recommended a cross-copy consistency check.
- **Orphan routes (F-05) — GATED clean** on the four cipher clones. **Currency/representation (F-57) — absent** (US/USD, consistent).
- **New mechanism M17: instrumentation leaking into the agent-facing build** (test selectors like `data-fsm`). doordash-2 guards it (G6); the other clones do not.
- **Eval-machinery modes (M2–M5, M9, M12) — latent by construction:** no clone has a contract, oracle, verifier or controller yet, so these appear only when task packages are built; §7 records where each will land.
- **NEEDS-LIVE:** dead controls (M11) and data-conditioned/empty states (F-02) need a running crawl; doordash-2 (conformance/release-gate) and shopify (test:workflows) already cover much of it, the other four do not.

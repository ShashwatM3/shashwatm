# Task16 — failure-mode analysis across every trial

Written September 18, 2026. This analysis covers all **seven trial records, six surviving trajectories, 609 recorded steps and 598 saved frames**, including the cancelled runs. The [step-by-step companion](TRAJECTORY_REVIEW_2026-09-18/README.md) contains an individual assessment of every retained step, its complete public message and recorded tool call, and links to the original frames.

There is a hard recording limit: the harness executes action batches but saves only each batch's last action, so neither this document nor the companion can recover every executed click or keystroke. I reread the surviving call and message records in sequence, used the frame review to establish the transitions, enlarged ambiguous frames, and checked conclusions against saved databases, controller logs and verifier results. Source inspection and three in-memory verifier probes supplement that evidence; they do not replace missing historical recordings.

## 1. What the task requires

The agent is helping a student catch up on three assignments in an online-shop management course, using Canvas for course material and hand-ins and Shopify Admin for the actual shop work. Unit 3.1 asks it to build the Fall Drop catalogue, where every size-and-colour combination is a separate variant with its own price and SKU, meaning the stock code that identifies that exact sellable item. The original full task has three new styles and fourteen variants, while the expanded task has six styles and thirty-six variants; the products belong in one Fall Drop collection, and the Merino Beanie initially stays in Draft. Unit 3.2 then asks it to record a Northgate purchase order and receive the real delivery against it, distinguishing what was ordered, what arrived, what can be sold, and what arrived damaged.

The order is for twelve Medium/Heather fleeces, eight Small/Slate windbreakers and ten Small/Black tees, but only six windbreakers arrive and two of the ten tees are damaged, so the correct receipt accepts twelve fleeces, six windbreakers and eight tees, rejects two tees, and leaves two windbreakers outstanding. Unit 3.3 activates the Beanie and creates the collection-specific `FALLDROP20` promotion with a $75 minimum, a 200-use limit and November 9–30 dates, alongside a separate automatic free-shipping offer, before the student finishes all three short written hand-ins. The agent must assemble these requirements from several places: the syllabus teaches stock codes, a discussion corrects the Windbreaker price to $96, the calendar supplies the launch date, Modules mentions free shipping, and the expanded version adds a linked range spreadsheet and an emailed delivery PDF. Crucially, submitting Unit 3.2 causes the instructor to post a new announcement changing the discount from 20% to **15%** while leaving its name and the old assignment brief unchanged, so success requires checking for updated requirements as the work progresses.

### The trials behind this analysis

| Trial | Scope and outcome | Complete chronological review |
|---|---|---|
| `iLhi4NG` | Narrow Astra probe: 24 steps, reward **1.00**; ask a clarification and submit one specified note, with no store work | [All 24 steps](TRAJECTORY_REVIEW_2026-09-18/probe.md) |
| `EK4Ujeo` | Original full task: 136 steps, **0.74**; SKU editor obstruction plus wrong promotion percentage | [All 136 steps](TRAJECTORY_REVIEW_2026-09-18/before.md) |
| `6C4ZHiN` | First completed run with SKU repairs: 122 steps, **0.93**; wrong percentage | [All 122 surviving steps](TRAJECTORY_REVIEW_2026-09-18/after1.md) |
| `nAAo5ub` | Sol probe: cancelled during the initial model request, zero completed episodes, no trajectory or grade | [Cancellation evidence](TRAJECTORY_REVIEW_2026-09-18/sol-probe.md) |
| `ijDGAZq` | Repaired full task: 84 steps, cancelled during purchase-order creation, no grade | [All 84 steps](TRAJECTORY_REVIEW_2026-09-18/interrupted.md) |
| `cN7uj3g` | Second completed repaired full task: 116 steps, **0.93**; wrong percentage | [All 116 steps](TRAJECTORY_REVIEW_2026-09-18/after2.md) |
| `dcF2xjs` | Expanded six-style task: 127 steps, **0.93**; wrong percentage | [All 127 steps](TRAJECTORY_REVIEW_2026-09-18/expanded.md) |

The `6C4ZHiN` job also contains an earlier attempt lost after a provider 503; its retry reused the trial ID, and only the retry's trajectory survives locally. Thus there are seven trial identifiers but at least eight execution attempts. The probe's 1.00 is not a full-task success, the cancelled runs have no capability score, and none of the four completed full tasks has `task_success: true`.

All Astra runs use `computer-1` 1.0.0 with `openai/gpt-6-astra`; the probe has an 80-turn allowance and full tasks have 1,000. The cancelled Sol probe uses `openai/gpt-5.6-sol` with 40 turns, and no explicit reasoning-effort setting is preserved in these job configurations. The four completed full-task package checksums differ; only the interrupted task and `cN7uj3g` share a checksum. These are development trials across changing packages, so repeated outcomes are evidence of a recurring pattern, not a controlled pass-rate estimate.

## 2. Model / agent failures

### 2.1 The agent applied the old promotion percentage after the requirement changed

**Expected work.** The promotion's percentage must come from the instructor's latest correction, even though the assignment still says 20% and the code is still named `FALLDROP20`. Because course information can change, checking Announcements during the initial survey does not establish that the information is still current after completing another unit.

**What happened and why it matters.** In all four completed full runs, the controller posts the 15% correction during the Unit 3.2 submission interval, after which the agent reads the old promotion brief and saves a 20% discount. No captured post-trigger frame shows the agent revisiting Announcements, while the final database and the Unit 3.3 hand-in both retain the stale percentage. This produces the same failed assertion, `c2_percentage_is_the_announced_one`, worth 0.07, in every completed full task. The strongest supported diagnosis is failure to incorporate a late requirement update; the evidence does not establish that the agent read 15% and forgot it, deliberately rejected it, or has a general inability to reconcile conflicting sources. The appropriate correction in the workflow was to revisit course notices before configuring the promotion and again before declaring completion, then save 15% under the unchanged code name.

| Trial | Correction posted, UTC wall time | Unit 3.2 submission interval | Old 20% brief visible | Saved 20% promotion |
|---|---|---|---|---|
| Original `EK4Ujeo` | Sep 17, 17:53:38.337 | [96 → 97](TRAJECTORY_REVIEW_2026-09-18/before.md#step-96) | [98](TRAJECTORY_REVIEW_2026-09-18/before.md#step-98) | [116](TRAJECTORY_REVIEW_2026-09-18/before.md#step-116) |
| Repaired `6C4ZHiN` | Sep 17, 22:23:46.138 | [86 → 87](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-86) | [89](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-89) | [108](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-108) |
| Repaired `cN7uj3g` | Sep 18, 01:21:31.747 | [84 → 85](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-84) | [86](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-86) | [103](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-103) |
| Expanded `dcF2xjs` | Sep 18, 03:39:22.952 | [99 → 100](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-99) | [100](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-100) | [116](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-116) |

**Evidence and attribution boundary:** The saved discount is `value_bps = 2000`, meaning 20%, versus the required 1500, meaning 15%; controller liveness and protected-state checks pass in all four cases. The announcement's `is_read = 0` is **not proof it was never opened**, because opening a detail page does not automatically mark it read in the inspected clone; notification visibility is also not established merely by a database insertion, as explained in §3.15. The agent successfully finds and applies the already-present $96 price correction in these same runs, which narrows the observed weakness to the later update without proving timing was the sole causal variable.

### 2.2 Verification and completion reporting did not expose the unresolved percentage

**Expected work.** A final check should compare the saved shop configuration against the current requirements and separately confirm that the written hand-ins were submitted. A completion report should make consequential configured values easy to inspect, especially when a course contains corrections to its original briefs.

**What happened and why it matters.** The repaired runs do perform meaningful checks: `cN7uj3g` inspects the stock codes in Inventory and checks submission timestamps, while the expanded run also checks its larger catalogue and hand-ins. Those checks confirm work already done, but no captured closing pass refreshes the source that contains the revised percentage. The three 0.93 runs then report completion while the discount remains wrong, and mentioning the correctly applied $96 correction does not alert the reader to that unresolved value. This is a verification-scope and reporting failure accompanying §2.1, rather than a second independent 0.07 loss or evidence that the agent did no verification at all. A better closing pass would compare the latest course notices with the saved discount summary and explicitly report the final percentage, dates and scope before treating the promotion as complete.

**Evidence:** [Repaired run's final response, step 122](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-122); [Inventory checks, steps 110–111](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-110); [hand-in checks and completion, steps 114–116](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-114); [expanded closing sequence, steps 124–127](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-124). The original run is different: its [final response](TRAJECTORY_REVIEW_2026-09-18/before.md#step-136) candidly discloses the blocked SKUs, so it should not be grouped with the unqualified completion claims.

### 2.3 An Enter press saved an incomplete first product, requiring repair

**Expected work.** The Fleece Crew needs three sizes crossed with two colours, producing six variants with prices and stock codes. While editing those options, the agent needs to distinguish committing an option value from submitting the surrounding product form.

**What happened and why it matters.** In each of the five full-task trajectories, an Enter action during the first Fleece setup is followed by a saved product with only Small committed. The original run also initially exposes a zero-priced variant, before later steps repair the price and complete the option set. The agent notices the incomplete result, reopens the option controls, and finishes the required variants before proceeding, so this is a recovered interaction error with no surviving catalogue-count loss. The repeated detour shows that the agent's input sequence and the form's submission behaviour did not match, but the record does not tell us the agent's intended meaning for Enter, and a production comparison would be needed to classify the clone's behaviour as a fidelity defect. The useful operational lesson is to check which values have become committed options, use the explicit option controls where necessary, and verify the resulting variant grid after saving, which the agent ultimately does.

**Evidence:** Original [35–46](TRAJECTORY_REVIEW_2026-09-18/before.md#step-35); first repaired [28–35](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-28); interrupted [36–44](TRAJECTORY_REVIEW_2026-09-18/interrupted.md#step-36); second repaired [34–42](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-34); expanded [29–36](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-29). **Attribution:** the premature-save transition is observed; responsibility for the confusing interaction is not isolated between the input choice and form design.

### 2.4 A likely redundant hand-in attempt occurred after the submission had succeeded

**Expected work.** A hand-in needs nonempty text and a successful submission state, after which a displayed submission timestamp is the relevant confirmation. A cleared text box on the resulting page can be the form for a new attempt, so its emptiness does not mean the previous hand-in was empty.

**What happened and why it matters.** In `6C4ZHiN`, step 119 shows a filled Unit 3.3 text box with no submission yet, and step 120 shows a submission timestamp, a cleared box, and the browser warning “Please fill out this field.” That sequence supports a successful hand-in followed by a redundant submission attempt, rather than the older account that the agent initially submitted an empty answer and later repaired it. The exact extra click is not retained because step 120 records only the last action of its batch, so the redundant-attempt explanation is an inference from the browser's validation state. The saved hand-in body is nonempty and all hand-in assertions pass, making this a minor recovered interaction issue rather than a failed assignment. The appropriate next action after the first success was to read the timestamp and move on, with no need to submit the newly cleared form.

**Evidence:** [Filled form, step 119](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-119), [timestamp plus validation warning, step 120](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-120), and the `canvas.handins` query in [terminal evidence](TRAJECTORY_REVIEW_2026-09-18/terminal-evidence.json). **Confidence:** inferred extra attempt; confirmed successful nonempty hand-in.

## 3. Failures on our side

Here “our side” includes the task world, clones, verifier, execution pipeline and harness dependencies, even where the defective code comes from Harbor rather than our repository. These entries distinguish defects that affected a run, recoverable friction, and measurement gaps that could mislead us about a run. Their impacts overlap; they must not be added together as independent score losses.

### 3.1 The original shop exposed stock-code affordances without a usable editor

**Expected work.** Every new variant needs an editable SKU field so the student can apply the syllabus's stock-code convention. A task that grades those codes must make that edit reachable through the same graphical interface available to the agent.

**What happened and why it matters.** In the original run, the agent clicks variant names, tries selections and related product controls, inspects Inventory, and returns near the end, but none of those attempts exposes a working SKU editor. The saved database contains all fourteen new variants with correct final prices but blank codes, and the agent explicitly reports this obstruction instead of pretending the catalogue is finished. Later trajectories show variant clicks opening actual SKU inputs, followed by successful entry of all fourteen codes, which corroborates the difference in available interaction. This defect directly prevents 0.10 of catalogue credit and also propagates into another 0.09 of SKU-dependent stock checks, so a substantial part of the original 0.74 result is contaminated by interface reachability. The environment needed a functional, saved-state-backed editor for each variant before this requirement could fairly be used to assess the agent.

**Evidence:** Original [44–54](TRAJECTORY_REVIEW_2026-09-18/before.md#step-44), [67–68](TRAJECTORY_REVIEW_2026-09-18/before.md#step-67), [125–127](TRAJECTORY_REVIEW_2026-09-18/before.md#step-125); working editor in [repaired step 36](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-36). **Observed later status:** repaired runs successfully save the codes; this does not retroactively make the original task solvable through the controls it exposed.

### 3.2 SKU-dependent grading made correct receiving look like additional stock failures

**Expected work.** The purchase order should retain the ordered quantities, while its receipt records accepted and rejected quantities against the actual variants. When diagnosing a failed stock check, we need to distinguish choosing or receiving the wrong item from failing a separate identification requirement on an otherwise correct item.

**What happened and why it matters.** The original database shows the correct three product-and-variant lines, ordered as 12/8/10 and accepted as 12/6/8, with two tees rejected. However, assertions `b2` and `b5` locate the lines by their SKUs, so the blank Fleece and Windbreaker codes cause each assertion to find only the already-coded Tee line. This loses 0.04 plus 0.05 even though the receipt arithmetic and variant selection are correct. The verifier is enforcing its coded-identity requirement, but its failed-check labels alone are insufficient for causal diagnosis and would wrongly suggest two additional operational mistakes if read without the rows. Reporting the missing-code dependency separately, or adding product/variant quantity diagnostics alongside it, would preserve the grading policy while exposing what the agent actually accomplished.

| Original saved line | Ordered | Accepted | Rejected | Outstanding | SKU |
|---|---:|---:|---:|---:|---|
| Fleece Crew — Medium / Heather | 12 | 12 | 0 | 0 | Blank |
| Ripstop Windbreaker — Small / Slate | 8 | 6 | 0 | 2 | Blank |
| Classic Tee — Small / Black | 10 | 8 | 2 | 0 | `TEE-S-BLK` |

**Evidence:** [Receiving steps 88–93](TRAJECTORY_REVIEW_2026-09-18/before.md#step-88), `purchase_order_lines` and `transfer_lines` queries in [terminal evidence](TRAJECTORY_REVIEW_2026-09-18/terminal-evidence.json), and the saved failed assertions in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json). The Tee's final sellable inventory is **20**, because twelve existing sellable units plus eight accepted units equals twenty. The original loss is **0.10 codes + 0.09 dependent checks + 0.07 percentage = 0.26**; §3.1 and §3.2 describe the same 0.19 causal chain.

### 3.3 Layouts obscured important controls and merged instruction columns at the actual viewport

**Expected work.** The agent needs to see which value it is editing and which instruction column a value belongs to at the run's 1024-pixel width. If a form genuinely needs horizontal scrolling, that access must remain usable rather than allowing neighbouring cards to cover required fields.

**What happened and why it matters.** In the original purchase-order form, the right-hand cards cover parts of the line-item controls, and in the original and first repaired discount forms the numeric percentage input is clipped beyond the card edge. The first repaired run also shows the catalogue brief's Sizes and Colours columns running together, while Files tables overflow and the expanded variant grid leaves its Publishing column beyond the initially visible card. These defects make grounded input and checking harder, although a horizontally scrollable grid is not itself proof that its offscreen fields are unreachable. The agent still saves the correct ordered quantities, creates the complete catalogues, and successfully saves 20% in the affected promotion forms, so clipping does not explain why it chose the wrong requirement value. The corrective work belongs in responsive layouts and viewport-specific interaction checks, with required inputs, labels and instruction columns kept distinguishable at the dimensions actually used for trials.

**Evidence:** Original [order step 83](TRAJECTORY_REVIEW_2026-09-18/before.md#step-83) and [discount step 108](TRAJECTORY_REVIEW_2026-09-18/before.md#step-108); first repaired [discount 98–100](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-98) and [brief 121](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-121); expanded [variant grid 39](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-39). Later [percentage entry in `cN7uj3g`, step 96](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-96), and [expanded form, step 108](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-108), are visible, yet still lead to 20%.

### 3.4 The runtime rejected the ordinary Ctrl-minus browser shortcut

**Expected work.** Ctrl-minus is a normal browser command for reducing page zoom, so a computer-use harness should translate that key combination into a valid operating-system input. When an action cannot execute, the agent also needs reliable feedback about the execution failure rather than only an unchanged screen.

**What happened and why it matters.** Job logs record `Invalid key sequence 'ctrl+-'` when the agent attempts this shortcut: three failures in the original run, two in the lost `6C4ZHiN` attempt plus three in its surviving retry, and three in the expanded run. The inspected runtime passes the literal minus character through to xdotool, which expects the key name `minus`, so a valid browser-level intention fails in the harness translation layer. The provider catches the error and logs a warning, but the inspected response path sends the model a screenshot without that warning as structured action-result text, so the earlier claim that the agent necessarily saw the error message was too strong. The original agent works around the problem through Chromium's zoom menu, and the expanded failures happen during SKU editing rather than at its later discount form. Fixing key translation and surfacing failed-action results would remove this harness obstacle; the logs do not support attributing the unchanged percentage to it.

**Evidence:** Original [109–110](TRAJECTORY_REVIEW_2026-09-18/before.md#step-109), repaired [99](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-99), expanded [39](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-39); job logs linked in each review; runtime and provider excerpts in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json). **Ownership:** Harbor/computer-1 dependency, classified on the execution side rather than the model side.

### 3.5 The receiving dialog gave contradictory signals about excluded rows

**Expected work.** After accepting the good units, the agent must reject the two damaged tees without also accepting the two windbreakers that never arrived. Deselecting a row should make its exclusion clear in the row controls, the header selection state and the receipt total.

**What happened and why it matters.** In the original second receiving pass, the Fleece and Windbreaker checkboxes are off but their controls remain visually active, and the total still presents the outstanding quantities in a way that does not clearly reflect the exclusion. The first repaired run improves the row-level feedback with greyed controls, “Not included in this receipt,” and a reduced total, but its partially selected header checkbox still looks empty rather than indeterminate. Those conflicting cues force the operator to infer which signal represents what will actually be saved, making a consequential stock action harder to verify. The saved rows nevertheless show the right result in every completed full run: two tees rejected, no extra windbreakers accepted, and no evidence of the feared zeroing or corruption of earlier receipts. Selection visuals should agree with the transaction the dialog will apply, and the remaining cosmetic defect should be described without inventing a stock loss that never occurred.

**Evidence:** Original [89–93](TRAJECTORY_REVIEW_2026-09-18/before.md#step-89), first repaired [81–85](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-81), later repaired [80–83](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-80), expanded [95–98](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-95). **Impact:** recovered ambiguity, no observed receiving error.

### 3.6 The original calendar event did not open its details

**Expected work.** The agent needs the launch date from the course calendar because that date is not supplied by the promotion brief. Clicking the visible launch event should open enough event detail to identify the date and related information.

**What happened and why it matters.** At original step 103, clicking the event leaves the month view unchanged instead of exposing event details. The agent switches to Agenda and uses browser Find to locate the Fall Drop entry, recovering the November 9 date through another visible route. This is an observed dead affordance and a navigation detour, but the final dates are correct at the calendar-day level and the date assertion passes. Later runs show a working event popup, so the unchanged original frame should not be generalized to every calendar version in the trial series. The clone needed the event click to work end to end, while the agent's workaround should be credited as recovery rather than described as inability to read a calendar.

**Evidence:** Original [103–105](TRAJECTORY_REVIEW_2026-09-18/before.md#step-103); expanded [105](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-105). **Impact:** added navigation, no observed date-day error.

### 3.7 Canvas initially labelled an unsubmitted assignment “Re-submit”

**Expected work.** An assignment that has never been handed in should offer an initial submission action, while a resubmission label should indicate a previously submitted attempt. A seeded database row representing an unsubmitted assignment is not itself evidence of a previous hand-in.

**What happened and why it matters.** The Astra probe shows “Re-submit Assignment” alongside “No Submission,” giving two contradictory accounts of the assignment's state. The inspected assignment implementation now explicitly distinguishes a real submitted timestamp and workflow state from the mere existence of a seeded submission row, and its comment identifies that earlier row-existence mistake. The probe still submits its required nonempty note and earns full probe credit, so the misleading label does not establish a failed hand-in. It is nonetheless a state-representation defect because a student or agent could reasonably treat “Re-submit” as a signal that the assignment was already completed. The UI should derive its label from actual submission state, with timestamp and workflow status agreeing with the action it presents.

**Evidence:** [Probe steps 22–23](TRAJECTORY_REVIEW_2026-09-18/probe.md#step-22) and assignment-state source excerpt in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json). This is distinct from §2.4, where a genuine submission timestamp is already present before the empty-field warning.

### 3.8 A submission-details navigation appears to lead to a missing route

**Expected work.** Once a hand-in exists, its Submission Details link should provide a reachable page for inspecting that attempt. A confirmation workflow should not end in Page Not Found when the user follows a link supplied by the application itself.

**What happened and why it matters.** Original step 134 reaches Page Not Found after a retained click at `(382, 800)`, and Back at step 135 returns to Unit 3.1, where Submission Details occupies that position. The current materialized Canvas source emits a submissions-detail link but contains neither a corresponding submissions page nor a catch-all page, which corroborates a missing route. Because the original batch omits its preceding actions and the current source is not an immutable copy of the original image, the exact historical initiating sequence remains probable rather than fully reconstructed. The agent recovers and its hand-ins remain saved, but the broken path obstructs the very verification the course invites. That link should resolve to the saved attempt; the separate address-bar 404s in the interrupted run and `cN7uj3g` cannot be assigned to an application link because their typed URLs were not retained.

**Evidence:** Original [134–135](TRAJECTORY_REVIEW_2026-09-18/before.md#step-134); interrupted [69–70](TRAJECTORY_REVIEW_2026-09-18/interrupted.md#step-69); second repaired [60–61](TRAJECTORY_REVIEW_2026-09-18/after2.md#step-60); link source and route inventory in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json). **Attribution:** probable application-route defect for the first case; unresolved for the address-bar cases.

### 3.9 The earlier delivery documents contained an inconsistent chronology

**Expected work.** An arrival notice and its delivery document should describe a physically possible shipment chronology within the course's displayed date. The agent can reconcile a short delivery against an order, but should not need to invent a reason why the delivery paperwork is dated after the goods supposedly arrived.

**What happened and why it matters.** The earlier course world says the Northgate delivery arrived November 3 while its embedded delivery note is dated November 6, even though the displayed world is November 4. This inconsistency is in the supplied materials rather than in an agent-authored date. The expanded trial's actual PDF uses November 2, removing that particular contradiction before its November 3 arrival notice. All completed runs still extract and receive the correct quantities, so no observed stock error can be attributed to the earlier date mismatch. Related world documents should be generated and checked against one coherent chronology, keeping deliberate informational challenges separate from accidental contradictions in the task's own facts.

**Evidence:** Original [delivery note, step 71](TRAJECTORY_REVIEW_2026-09-18/before.md#step-71); expanded [mail and PDF, steps 74–77](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-74). Controller wall-clock timestamps used in §2.1 are a separate time domain from the November dates displayed inside the course.

### 3.10 The promotion form says Pacific time but saves the same clock hour as UTC

**Expected work.** A time entered into a field labelled PT must be interpreted in Pacific time and converted consistently when stored as an absolute timestamp. A UTC timestamp ending in `Z` cannot simply reuse the local clock-face hour without changing the instant it denotes.

**What happened and why it matters.** The inspected discount form labels its inputs “Start time (PT)” and “End time (PT),” but the save action builds the timestamp from the entered date and hour and appends `Z`. The saved runs exhibit that same mismatch: the original has a 09:00 start stored as `09:00:00Z`, and the later runs have midnight stored as `00:00:00Z`. On November 9, 2026, midnight in Los Angeles is 08:00 UTC, so the latter stored instant corresponds to 4 p.m. on the previous local day rather than the midnight the form presents. The date assertion still passes because it checks only the first ten characters of the stored start and end strings and a `scheduled` status, leaving this discrepancy invisible to the reward. The environment should convert explicitly between its declared local zone and UTC, and the verifier should compare the intended temporal meaning instead of accepting a matching date prefix as proof of correct scheduling.

**Evidence:** All four `discounts` queries in [terminal evidence](TRAJECTORY_REVIEW_2026-09-18/terminal-evidence.json); labelled inputs, save serialization and timezone calculation in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json); assertion `c6` in the [current contract](../../../harbor/tasks-shop-course/shop_course_term/tests/contract.json). This is a confirmed label/serialization mismatch, not proof that an actual checkout occurred at the wrong hour, and it is independent of the 15% failure.

### 3.11 Page titles and file presentation weakened the realism and orientation cues

**Expected work.** Browser titles should identify the page or document being viewed, and a replica should present the identity of the product it is replicating. File names, icons and previews should also give a coherent account of what kind of document the user opened.

**What happened and why it matters.** Earlier Canvas handout frames inherit a generic Dashboard tab title even while displaying course files, while the expanded spreadsheet tab identifies itself as “Refresh Sheets.” Files lists also show Markdown documents with PDF-like icons, which makes the type and presentation of the resource less consistent. These are visible fidelity defects, although there is no evidence in the public messages that the agent recognized the benchmark from them or chose a wrong workflow because of them. The expanded agent follows the actual course link, reads the sheet, and later opens the real emailed PDF successfully, so those successful actions should remain separate from concerns about presentation quality. Correct page metadata, faithful product identity and consistent document presentation would remove misleading cues without altering the task's substantive requirements.

**Evidence:** Earlier [Files view](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-21) and [handout view](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-91); expanded [spreadsheet, step 19](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-19) and [PDF, step 76](TRAJECTORY_REVIEW_2026-09-18/expanded.md#step-76). **Impact:** fidelity and orientation; no demonstrated contribution to lost credit.

### 3.12 A provider outage restarted a trial and left the earlier trajectory unavailable

**Expected work.** A transient provider failure should be handled with bounded request-level recovery where possible, and every execution attempt should retain its own evidence even if recovery fails. Repeating the entire task is different from retrying the model request that was interrupted.

**What happened and why it matters.** The `6C4ZHiN` job log records a 503 `server_is_overloaded` error, a failed trial, and a whole-trial retry under the same identifier. The surviving 122-step trajectory belongs to the retry; the local directory does not preserve a separate call-and-frame sequence for the earlier attempt. This spends additional execution on already-performed work and removes the evidence needed to say exactly what had happened before the outage. Increasing the maximum number of whole-trial retries can improve the chance that some attempt finishes, but it does not preserve progress or solve the loss of attempt-specific artifacts. The execution pipeline should distinguish recoverable request failures from trial restarts and give each attempt durable, separately addressable logs and frames.

**Evidence:** The [job log](../../../harbor/jobs/shop-course-term-astra-20260917b/job.log) and [surviving trial review](TRAJECTORY_REVIEW_2026-09-18/after1.md). The log establishes a failure escaping to a trial restart; it does not establish how many retries the provider SDK may already have attempted internally.

### 3.13 Two cancellations prevented a complete trial outcome

**Expected work.** A capability judgment requires the agent to receive observations, act, and reach either completion or a documented task-level stopping condition. Cancellation while awaiting a model response produces an interrupted execution, not evidence that the agent chose to abandon the task or could not solve its next step.

**What happened and why it matters.** The Sol probe records cancellation during the initial request with zero completed episodes, leaving no trajectory to analyze. The interrupted Astra full run preserves eighty-four steps, all fourteen new SKUs and the Unit 3.1 hand-in, then stops while waiting for the next model request with one line selected in an unsaved purchase order. No purchase order is saved, Unit 3.2 has not been submitted, and the promotion-correction trigger has not fired, so this run cannot be counted as another missed-15% case. Historical discussion mentions manual interruption or connectivity concerns, but the tracebacks establish cancellation rather than a definitive network root cause. These outcomes should remain explicitly ungraded in the execution record, with their partial progress preserved, instead of being converted to zero-score model failures.

**Evidence:** [Sol cancellation record](TRAJECTORY_REVIEW_2026-09-18/sol-probe.md), interrupted [catalogue hand-in at 72](TRAJECTORY_REVIEW_2026-09-18/interrupted.md#step-72), [last state at 84](TRAJECTORY_REVIEW_2026-09-18/interrupted.md#step-84), and exception/runtime/database extracts in [terminal evidence](TRAJECTORY_REVIEW_2026-09-18/terminal-evidence.json). **Owner:** execution interruption; the initiating cause is not fully established by the saved artifacts.

### 3.14 The recorder discards all but the last input in each action batch

**Expected work.** A trajectory used to explain agent behaviour should preserve every executed action in order, with its result and the observations supplied back to the model. Batching actions is compatible with that requirement; batching does not require throwing away the earlier inputs.

**What happened and why it matters.** The installed OpenAI provider loops over an action list, executes each translated action, takes a screenshot after the batch, and passes only `last_action` into the step recorder. Consequently a retained scroll can accompany a newly entered SKU, a retained click can conceal preceding navigation, and a retained wait can follow a submission attempt. Reading those records as single-action transitions produced earlier unsupported claims about repetitive scrolling, the exact cause of 404s and the order of an empty-field submission attempt. We can still assess the post-batch frame and saved state, but cannot reconstruct omitted keystrokes, infer private reasoning, or compare these recorded-step totals directly with benchmarks that count individual actions. The recorder should retain the full ordered batch and execution outcomes while separately identifying which screenshot followed the batch.

**Evidence:** OpenAI provider excerpt in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json); [SKU progression across repaired steps 39–44](TRAJECTORY_REVIEW_2026-09-18/after1.md#step-39). **Scope:** all surviving Astra trajectories use this recording path; the 609 count includes setup and instruction records, and the 598 frames comprise 592 batch observations plus six initial screens. Intermediate synthetic `mark_task_complete` records with screenshots are empty-action observation turns, not repeated premature stops by the model.

### 3.15 Announcement delivery, visibility and opening are not separately measured

**Expected work.** To distinguish “the update was posted,” “the update could be seen,” and “the agent opened it,” an evaluation needs evidence for each stage. A controller database write proves only delivery into stored state unless the relevant student-facing rendering and interaction have also been checked.

**What happened and why it matters.** The controller logs and database prove that the 15% announcement was inserted, but no captured post-trigger frame displays that announcement or establishes a notification in the agent's current viewport. Moreover, in the inspected Canvas source, the announcement list and detail page read content without marking an opened announcement read; the explicit Mark All as Read action is what changes the flag. Therefore `is_read = 0` cannot independently prove that the agent never opened the correction, and batching prevents us from absolutely excluding an unrecorded within-batch visit. This limits the causal claim to a saved wrong percentage and no observed revisit, rather than proving a visible notification was ignored or conclusively isolating an attention failure from all delivery-design concerns. The environment needs a render-after-event check in the student's role and separate internal interaction evidence if we want to resolve those stages without changing the agent-facing task.

**Evidence:** Controller, announcement getter/detail-page and mark-read excerpts in [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json); terminal announcement rows and controller logs in [terminal evidence](TRAJECTORY_REVIEW_2026-09-18/terminal-evidence.json). **Classification:** measurement gap; this review does not claim the announcement was inaccessible or that the notification design was definitely unfair.

### 3.16 The expanded verifier does not fully check the expanded catalogue

**Expected work.** Six styles with thirty-six variants create obligations for every required variant's price and stock code, not merely a representative subset. A stock-code check also needs to establish uniqueness and correspondence to the right size and colour, rather than only membership in a set of allowed strings.

**What happened and why it matters.** The expanded contract directly checks prices and complete SKU lists for Cardigan, Windbreaker and Beanie, leaving Fleece, Corduroy and Gilet outside those full catalogue checks, although the ordered Fleece variant is referenced by stock assertions. On an in-memory copy of the saved expanded database, changing all twenty prices across those three styles or replacing the Fleece Small/Heather SKU leaves all thirty scored assertion results unchanged. Replacing every Cardigan SKU with the single allowed string `CAR-S-CAM` also leaves every assertion result unchanged, because the catalogue query counts allowed rows without requiring distinct, correctly matched codes. The real expanded trajectory did not exploit these gaps and its saved thirty-six new variants are correct, so this is a demonstrated verifier blind spot rather than an additional model failure. The verifier should compare the complete expected variant mapping with actual size, colour, price and unique SKU values, with negative probes for missing coverage and duplicate-code shortcuts.

| In-memory change to the expanded final state | Rows changed | Scored assertion results changed |
|---|---:|---:|
| Add $1 to every Fleece, Corduroy and Gilet variant price | 20 | 0 |
| Replace `FLC-S-HEA` with `WRONG-CODE` | 1 | 0 |
| Give all eight Cardigan variants the SKU `CAR-S-CAM` | 8 | 0 |

**Evidence:** [Current materialized contract](../../../harbor/tasks-shop-course/shop_course_term/tests/contract.json), [reproducible in-memory probe script](TRAJECTORY_REVIEW_2026-09-18/audit_failure_evidence.py), and [probe output with exact SQL](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json). The unmodified current-contract results match all thirty actual assertion values in the saved expanded trial; these probes establish gaps in that inspected contract, not an assertion that every historical package had identical SQL. All fifteen original saved database hashes remain unchanged.

### Corrections to earlier interpretations

The earlier single-run reports are useful historical notes, but these conclusions replace the following overstatements where they conflict. This matters because an inaccurate explanation can turn an environment problem or recording gap into a fictitious model weakness.

| Earlier interpretation | What the fuller evidence supports |
|---|---|
| Repeated scrolls show that the model forgot it had reached the bottom | Frames show continuing SKU edits, the logged scroll amounts are not all identical, and omitted batch inputs prevent that memory inference |
| The first hand-in attempt was empty and then repaired | In `6C4ZHiN`, the filled form precedes a successful timestamp; the later warning is consistent with a redundant attempt after success |
| The announcement's unread flag proves it was never opened | The inspected detail page does not update that flag on opening; no captured revisit is the defensible trajectory observation |
| The runtime's keyboard error was necessarily shown to the model | It is logged, while the inspected provider returns a screenshot without the warning as structured result text |
| Only shop state is graded and the writing is not graded at all | Hand-in workflow state and nonempty bodies are graded; their prose is not semantically checked for every task requirement |
| The entire original 0.26 loss is model failure | 0.19 follows the blocked SKUs and their grader dependencies; 0.07 is the late percentage miss |
| The expanded run proves all thirty-six variants through its reward | The database independently establishes correctness; the verifier checks a narrower subset |
| Several 0.93s are repeat trials on one unchanged task | Completed full-task package hashes differ, and one run expands both work and information sources |

Other observations were checked without promoting them into unsupported failures: the narrow probe correctly leaves the shop untouched; the expanded agent uses the direct spreadsheet link and reads the actual PDF; successful initial source reconciliation is visible; automatic shipping has no stated numeric minimum, so the differing shipping thresholds are not scored here as proven errors; and startup health-check timeouts during the declared start period do not, by themselves, establish an agent-facing outage. The interrupted run's unperformed promotion work and the lost attempt's missing actions remain unknown rather than being filled in from neighbouring trials.

### Evidence preservation and review boundaries

The [coverage record](TRAJECTORY_REVIEW_2026-09-18/coverage.json) checks contiguous source step IDs, one manual assessment for every step, every referenced frame's existence and contact-sheet coverage. The [terminal evidence](TRAJECTORY_REVIEW_2026-09-18/terminal-evidence.json) preserves each read-only SQL query beside its rows, database paths and hashes, trial configuration, exceptions, controller logs and verifier details. The [supplementary evidence](TRAJECTORY_REVIEW_2026-09-18/failure-analysis-evidence.json) records the source excerpts with hashes, the timezone calculation, current route inventory, saved failed assertions and in-memory probe outcomes.

Source files inspected now are the current materialized package and installed harness, not immutable source archives of every historical image. Historical failure claims therefore rest first on each run's own frames, logs and saved state, with current code used to corroborate mechanisms and identify explicitly labelled measurement gaps. This work updates local analysis artifacts only; it does not change any trial state, clone implementation, task contract, job configuration or published trajectory.

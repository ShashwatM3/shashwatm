# Task17: decisions, current state, and complete r7 Kimi trial review

Review date: 2026-09-25, America/Los_Angeles. Original task, trial and historical monitoring evidence were left unchanged. This review launched no model, sandbox, Docker build or application session.

## 1. What the evidence establishes

The hospitality task had reached a completed, GUI-demonstrated business workflow before this run: the final recorded author solution earned **100/100**, all 31 checks and six protections were supported, and both events fired. The rehearsal catalogue contains **98 completed dispositions: 97 W and one N**, the intentionally unavailable terminal. That is substantial task-feasibility evidence. It is not proof that every possible action encoding from a different model works correctly.

The replacement **Kimi K2.6 / SailResearch** trial then completed collection and grading with **reward 0**, **task progress 0.03**, **surviving supported fraction 0**, **controller liveness 1**, **gates fired 0**, **complete false**, and **refused false**. It ended through the model's `done` action after **376 attempts**, well below its 1,500-turn ceiling. The model acknowledged failure; it did not complete the business task.

The detailed review changes the causal interpretation. Repeated mis-aimed clicks and mistaken readings of window state are visible throughout the recording. Two concrete harness behaviors also affected the available controls: lowercase function keys were passed through without normalization, and horizontal-only scroll requests acquired a default downward scroll. This is therefore an unsuccessful model-plus-harness run with identifiable harness confounds, not a clean isolated measurement of Kimi's ability to do the hospitality work.

The complete attempt ledger is [STEP_BY_STEP.md](STEP_BY_STEP.md). It has one entry for every attempt, the recorded action, observed outcome, timestamp, and before/after screenshot links. The published run is [Task17 r7 on trajectories.sh](https://trajectories.sh/t/702cf9a0-ff95-4186-9a50-b8b213c48994).

## 2. Which task we settled on

Maya Chen is the authorized host/operator. Lucia Santos is the operations lead. Maya must reconcile arrival information for three Lisbon properties, answer the outstanding guest questions, report the recurring confusion, create three useful arrival guides and three walkthrough videos, handle later feedback and an entrance closure, and deliver the current files to Lucia with an accurate account of the work.

The final environment combines the existing Mail/Drive and Airbnb replicas with real Penpot and Shotcut. The evaluated workflow is business work, not the earlier Canvas/student assignment. The rough Penpot starter is editable and partially populated; it is not an approved finished answer. The source materials include three finished **fictional** reference guides, so the agent must infer and adapt their visual treatment to the real task properties.

The governing sources are the installed [project brief](../../../../../project-tube/apps/google/db/seeds/task17-arrival/assets/Project-brief.txt), its property notes, [business definition](../business-v1/TASK_DEFINITION.md), [obligation map](../business-v1/OBLIGATION_MAP.md), [rubric](../RUBRIC.md), and [denotation table](../DENOTATION_TABLE.md). The installed brief includes later clarifications that are absent from the earlier candidate brief under `business-v1/agent-materials/`; those versions must not be treated as interchangeable.

### Property facts and the work they create

| Property | Authoritative facts and required correction | Later work |
| --- | --- | --- |
| P1, Sunny Alfama loft, listing 1 | Entire loft; river view; three flights and no lift. Check-in **15:00**, not the public description's 14:00; check-out 11:00. Initially enter through the red street door at 24 Rua dos Remedios and use its smart lock, not the corner-shop entrance. No on-site parking; paid garage nearby. | When Emilia reports closure, use the approved archway on Rua dos Remedios, rear courtyard, left stairwell and third-floor destination. Update the guest reply, public and private directions, guide PDF/image and current video. Preserve private access details. |
| P2, Quiet private room near Bairro Alto, listing 2 | A private bedroom in the host's shared home; kitchen and bathroom are shared. Check-in 16:00, check-out 10:00. Correct entrance is the green door at 12 Travessa dos Inglesinhos, not 88 Rua da Rosa, which is the shop. Explain the precise path **Private arrival guide → House manual → Building entry** for entry instructions, without disclosing the code. No on-site parking. | Its own corrections and later manager revisions apply. P1's temporary route must not spread into P2. |
| P3, Garden apartment in Estrela, listing 35 | Entire apartment; check-in 15:00, check-out 11:00. Entrance at 18 Rua de Sao Bernardo; lockbox on the gate's inside face. No washing machine: remove the incorrect public claim and washer amenity, preserve correct unrelated amenities, and explain the laundrette two streets away. No on-site parking. Public garage charges at all hours, including after 18:00 and overnight. | Reject Ben's confident but incorrect free-evening-parking assertion using the authoritative notes. Apply manager revisions. P1's route does not apply. |

The guest-history work is more than answering the latest message. P1 and P2 demonstrate repeated entrance confusion; P3 has repeated parking-charge confusion, while some other questions are one-offs. Findings must distinguish those patterns without inventing recurrence. Replying in the guest platform and sending findings to Lucia are different deliverables.

### Deliverables and currentness

The final recipient-facing set is **nine files**: three 390 × 844 guides, each as a PDF and a matching PNG or JPEG, plus three MP4 or MOV walkthroughs. The editable Penpot boards and Shotcut projects must be retained and reopenable; the final handoff does not require uploading every native source file. Videos must use the right property's photographs, entrance sequence, factual captions and current guide overlay. The model's repeated claim that a 30–60-second duration was required is not an authority in the task.

Current files must be unambiguous and accessible to Lucia. Filenames alone do not establish property, content, provenance or accessibility. A working current-folder link may resolve to the required files, but a local file, blank draft, private link, stale export or source preview does not satisfy delivery. The six reviewed exports and sent review conversation must remain accessible as history while the current set advances.

### The two events

**Manager feedback:** the controller first needs a genuine sent offer to Lucia and six accessible property-correct PDF/image exports. It does not require finished videos, design perfection or a findings email before sending the review. It then requests a header panel of at least **120 pixels** in every guide, fresh PDF/image exports for all three guides, and at least **3 seconds** for every caption and guide-overlay exposure in all three videos. These numeric requirements come from the delivered message, not hidden advance instructions. Re-exporting unchanged bytes can be legitimate if a new completed native export receipt establishes the later action.

**Guest closure:** the controller needs the P1 public description changed from its seed and a saved native P1 project containing the original entrance timeline. A completed video export is not required to unlock it. Emilia then reports the normal entrance closed; the approved alternative comes from the property notes. Manager-first and guest-first are both legitimate orders and were exercised in the rehearsal work.

The Kimi trial reached neither prerequisite set. No closure or manager message was withheld after a valid trigger: the collected business tables contain zero offers, reviews and outbox events.

## 3. Decisions made during the session

This records decisions that determine the current task or how its evidence is interpreted. Earlier proposals are identified where they were superseded. Historical instructions to old workers are not new authorization to run workers or trials during this review.

| Decision | What was settled, and why it matters |
| --- | --- |
| Replace the course narrative | The student/host combination and Canvas assignment machinery were rejected for the revised task. Use a coherent host/operations-lead workflow through existing Gmail/Drive. Do not create CampusGroups or another new clone to carry it. |
| Make design adaptation substantive | The user rejected an inherited-design-maintenance variation as insufficiently distinct. Finished fictional examples became the reference, requiring inference and adaptation rather than tutorial following or exact copying. |
| Keep a rough editable start | P1 has partial content and P2/P3 have gaps. “One finished property” was corrected to “partly populated.” The agent may rework the starter; original layer names and exact click paths are not requirements. |
| Teach visual roles, allow variation | Require clear title/heading/body hierarchy, usable grouping, phone readability and consistency. Do not secretly require Lato, exact colors, exact coordinates, the doorway ornament or pixel identity with examples. |
| Separate examples from answers | Only the three fictional PDF/PNG examples and the explicit public pack are seeded. The native nine-board authoring file includes six real-property before/after answers and stays private. |
| Verify native reference feasibility | Nine layouts were built in unmodified Penpot with 126 editable Lato text objects; reload and native PDF/PNG export were checked. This was a feasibility exercise, not a universal fix for fast text-tool failures. |
| Use licensed photography | The user explicitly selected licensed photos and rejected image-generation fallback. Fourteen photos replaced the unsuitable mixed twenty-photo set through documented reuse, reassignment and replacement. |
| Preserve written fact authority | Crops and photos need to support their assigned visual role. They do not have to reveal inside-mounted lockboxes or every turn of a route. Do not invent a house number or require invisible hardware in the photo. |
| Preserve the three-property semantics | P1's timing, P2's entrance/shared-home distinction, P3's washer/parking correction and the conditional P1 route remain authoritative across migration. Correct unrelated amenities and private details must survive. |
| Keep nine delivered outputs | Three PDF/image pairs and three videos are the recipient set. Editable native work stays available in its apps/local files. Findings may share the initial review email. |
| Use an accessible archive for review history | Same Drive file IDs or a version interface are not mandatory when the product cannot support that workflow. Preserve the six reviewed files accessibly and keep current delivery unambiguous. Private controller copies alone do not satisfy history preservation. |
| Trigger review from actual delivery | Six accessible property-correct guide exports plus a sent offer unlock manager feedback. A draft, wrong recipient, missing member, mismatched property or inaccessible file must not unlock it. |
| Make the closure reachable during video work | A saved initial native project with the old entrance, plus the listing change, is enough. Do not wait for an initial encoded video or impose a single event order. |
| Require native provenance prospectively | After the earlier Astra run used a custom browser editor, the required Penpot/Shotcut native workflow was explicitly taught in the new brief. Do not retroactively turn previously untaught provenance requirements into model failure. |
| Keep a fixed 100-point denominator | The business rubric has 31 checks; 12 points moved to hierarchy, organization and consistency. Unknowns stay visible and do not shrink the denominator or establish wrongdoing. |
| Keep six destroy-only protections | Privacy, property-specific route changes, fact grounding, export correspondence, correct private details and review history constrain earned credit. They never earn points independently. |
| Bound visual scoring honestly | Native/delivery joins and measured design evidence are required. Unsupported designs remain unknown. Finite development corpora and agent/coordinator labels do not prove population-wide accuracy or human validation. |
| Preserve failed evidence | Retain truncated downloads, intermediate low grades, malformed/corrupt captures and failed interactions. Repaired results supersede their operational status without erasing the failures. |
| Prove routes through actual UI work | Source inspection and a database oracle are insufficient. The expanded catalogue contains 98 route dispositions, including alternatives, negative delivery cases, restart and degraded collection. |
| Keep terminal availability out of task credit | Terminal was intentionally not supplied; its preferred-application chooser was recorded as N. Required apps have genuine menu/finder paths. This choice made the model's terminal detour unproductive but did not remove an explicitly required tool. |
| Fix the real product source | Replica changes belong only under `project-tube/apps/`. Task package source trees are generated artifacts, not independent editable clones; `cua/clones` must not be recreated. |
| Keep observer authority private | Collect immutable native receipts and current delivery state outside agent control. Missing/corrupt trusted capture must be refused or unknown as specified, not silently treated as a content failure. |
| Follow the user's changing stop boundary | Earlier work was to stop at the agreed milestone; later messages authorized continuation. Those dated boundaries should not be collapsed into either blanket ongoing permission or an obsolete stop. |
| Run the explicitly requested model | The replacement was Kimi K2.6 via SailResearch, with Daytona hosting the environment, not another Astra attempt. Backend override leaves shared defaults/historical configurations intact. |
| Preserve the trial parameters | One attempt, concurrency 1, zero whole-trial retries and 1,500 turns. Geometry is 1920 × 1080. The recorded guard is $150 with a $130 stopping threshold; actual cost was not recorded. |
| Respect the real account capacity | The environment was adjusted to the available 8-GiB Daytona account constraints rather than assuming 16 GiB. Do not confuse a resource reservation with measured peak usage. |
| Coordinate shared heavy work | Trial/heavy-work slots are coordinated in TANDEM. The user explicitly approved this launch after the concurrent Task18 situation was disclosed; that exception was specific to this launch, not a repeal of serialization. |
| Distinguish launch failures from trials | The first two launch commands failed locally in preflight before a paid sandbox/model run. The third launched the actual trial after selecting the Harbor Python environment. The exact first-failure root cause remains unproven. |
| Close the run operationally | Collection, grading, exceptions, resource cleanup and a published trajectory are part of completion. A model's final message is not the end of the operational job. |

Sources for this history include the original handoff, all 931 User/Assistant dialogue sections in the exported session, [EXECUTION_PLAN.md](../EXECUTION_PLAN.md), [business status](../business-v1/STATUS.md), [asset status](../assets-v2/STATUS.md), [photo reconciliation](../assets-v2/PHOTO_RECONCILIATION.md), [native proof](../assets-v2/NATIVE_PROOF.md), [capture handoff](../capture-v1/HANDOFF.md), [post-trial closeout](../posttrial-v1/CLOSEOUT.md), and [rehearsal status](../rehearsal-v2/STATUS.md).

## 4. What was built and repaired before r7

The original Canvas task already had property seeding, real applications, a rough Penpot design, clocks, a controller and a verifier. Its [BUILD_STATUS.md](../BUILD_STATUS.md) now explicitly labels itself a historical Canvas record. Its old “59/62” and “in flight” lines do not describe current work. Listing 35 exists because an earlier choice of 29 collided with the materializer's reserved IDs. The revised business workflow reused the substantive property task but replaced assignment submissions with sent email and recipient-accessible files.

The revised implementation then added or integrated:

1. Business identities, seeded project conversation, readable Drive documents and property media, correct account/routing bindings, and a shared episode clock.
2. A controller with genuine offer/access/property checks, immutable reviewed-file snapshots, independent manager/guest event order, idempotent delivery and rendered-message evidence.
3. Private Penpot and Shotcut observation, export completion/provenance, Drive current-file/grant joins, retained sidecar database/assets, quiescent collection and explicit uncertainty/refusal behavior.
4. A bounded semantic/design/video verifier with 31 checks, six protections and source-authority mappings. The pure design reader cannot award integrated task credit on its own.
5. Actual GUI feasibility and recovery work across Mail, Drive, Airbnb, Penpot, Shotcut, file manager, application finder, exports, uploads, sharing, history and event arrival.

The later rehearsal found real defects rather than merely confirming a predetermined pass. Repairs included Mail draft adoption/preservation and live message arrival, reading Drive trash/currentness correctly, native clipboard input and pointer timing, a native-helper parent directory that lacked traversal permission, browser profile/display restoration, native video caption/content measurement, and application launch/window behavior. Some were product/runtime defects and some were evidence-reader false negatives; those categories must remain distinct.

The complete GUI solution's immutable capture first graded **54.333/100**, then **91/100**, then **100/100** after narrow reader repairs against the same preserved artifacts. The final [installed grading result](../rehearsal-v2/grading/final-ui-repaired-02/output/details.json) has no required unknown, no collection issue or refusal, all six protections supported, both events, and complete true. The final run took about **511.15 seconds**, with **864,051,200 bytes** measured peak memory. Earlier 54.333 and 91 results remain evidence of reader defects, not failures by the author to make the final UI artifacts.

The fresh-image branch separately demonstrated the opposite event order and repaired control paths. Its partial work was not represented as a second complete 100-point solution. The `ba074` live world received explicitly recorded amendments; it is not honest to call its later behavior an unmodified immutable-image result. The eventual main `6d93ca11` and verifier `63929` pins and installed proofs are recorded in the rehearsal closeout. Fourteen author-world containers were stopped with volumes retained.

One stale artifact needs special care: [rehearsal-v2/RELEASE_DECISION.json](../rehearsal-v2/RELEASE_DECISION.json) still contains an intermediate pending-regrade state. The terminal 100-point result and appended terminal evidence in STATUS establish the later state. Similarly, [readiness-v1](../readiness-v1/RELEASE_REVIEW.md) describes an earlier release/regrade, not the final r7 rehearsal. Reading only a file's opening status line can give the wrong answer.

Earlier trials must also remain separate. The r5 analysis involved collection/grading distortions; the r6 Astra run used an alternative browser-based workflow and was refused under uncalibrated evidence requirements. Neither is the 376-attempt Kimi trial. Task18's separate `RewardFileNotFoundError`/observer-quiescence problem is also not Task17's outcome: Task17 produced a valid reward file and was graded.

## 5. Exact trial identity, configuration and lifecycle

Job: `task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z`.

Trial: `task17_hospitality_design_practi__ZYnHKyt`. Task checksum in the result: `198445483fc29cfa8fb5a37e75431cd68d0b8bb74bac2c501608aff580f91234`.

Model: `openai/moonshotai/Kimi-K2.6`, SailResearch OpenAI-compatible endpoint, LiteLLM provider, high reasoning effort, temperature 1. Agent: computer-1 1.0.0 through `Task17Computer1`. Environment: `Task17Daytona`, DinD compose task world, separate verifier environment. Images enabled, 1920 × 1080 desktop and window, `native_prescaled` action coordinates. Budget: 1,500 turns; one trial; no whole-trial retries.

| Lifecycle stage | PDT on September 25 | UTC |
| --- | --- | --- |
| Trial starts | 14:33:11.852 | 21:33:11.852 |
| Environment setup | 14:33:12.746–14:37:07.345 | 21:33:12.746–21:37:07.345 |
| Agent setup | 14:37:15.415–14:37:38.239 | 21:37:15.415–21:37:38.239 |
| Agent execution | 14:37:38.241–16:58:51.808 | 21:37:38.241–23:58:51.808 |
| First model attempt | 14:38:02.494 | 21:38:02.494 |
| Separate verifier | 17:00:09.011–17:01:11.797 | September 26, 00:00:09.011–00:01:11.797 |

Agent execution lasted **2 hours 21 minutes 13.57 seconds**. Total recorded trial lifecycle was about **2 hours 28 minutes**. The initial health check failed during its start period and then passed. This is not a persistent unhealthy startup. Collection ran the main hook, stopped main, then retained Penpot database and asset sidecars. All three hooks completed. `exception_info` is null and there are no reported collection issues.

The logs contain **165 recovered request failures**: 160 BadGateway, four ServiceUnavailable and one Timeout. The same messages appear in both trial and job logs, so they must not be double-counted. They are request-level retries within this trial, not 165 restarted trials. They added latency but did not produce the terminal failure.

Recorded usage is 12,438,987 input tokens, 8,415,414 cache tokens and 171,586 output tokens. `cost_usd` is null. The configured $150/$130 guard is not an actual spend report. There was no recorded context compaction or budget-stop termination.

The monitor records sandbox cleanup checked after grading and the task's slot released, followed by publication. The last known Task17 state is closed and published, not an active trial waiting for a final answer. This review did not recreate the deleted runtime.

### What the step and image counts mean

There are 378 ATIF entries: initial framework navigation, initial task text and 376 model attempts. Twenty-two attempts fail JSON parsing before a computer action executes. The remaining 354 recorded computer actions comprise 198 clicks, 30 right-clicks, 18 double-clicks, one drag, 84 keypress actions, eight typing actions, 11 scrolls, one zoom, one wait and two `done` actions. Two accompanying `mark_task_complete` entries are framework bookkeeping, not additional model attempts.

There are 355 saved WebP images: the initial image and 354 post-action images. Of those, 354 are 1920 × 1080 and one is a 360 × 840 zoom crop. There are 271 distinct decoded images and 84 duplicates including the initial image. Duplicate frames alone do not prove broken input; many correspond to clicks outside the intended control. The ledger distinguishes those from parse failures, which have no new frame at all.

## 6. What happened, in chronological order

Every attempt is expanded in [STEP_BY_STEP.md](STEP_BY_STEP.md). This section connects those actions into the causal sequence.

### Attempts 1–36: partial briefing, immediate targeting mistakes

The model starts in Mail. Its first two attempts miss the actual message row; the third opens Lucia's project email. Context-menu and tab clicks then miss their intended locations. Keyboard tab switching works: it reaches Penpot, opens a new tab, types the Drive URL and loads the source area.

Several supposed folder clicks land on Drive's sidebar or other controls. Attempt 21 is rejected because the action JSON contains an invalid leading-zero number. Ctrl+Alt+T brings up the preferred terminal application chooser; no terminal is installed. Clicking outside that chooser can still affect the browser behind it, and a subsequent Return opens the arrival reference brief. Source previews of the property notes and project brief appear during the following actions.

The agent extracts some genuine property facts, but its plan already adds an unsupported 30–60-second video requirement. Attempt 34 says it intends to scroll down while sending a negative vertical scroll. That direction mismatch is the model's action, distinct from the later horizontal-scroll harness issue.

### Attempts 37–84: blank compositions, tool switching and chooser detours

Ctrl+1 correctly returns to Mail. A click intended as Back lands on Compose, opening a blank draft. Many subsequent close/minimize attempts target the wrong place. Contact panels appear; correctly placed raw-coordinate clicks can dismiss them. These frames do not support the blanket statement that Mail is unresponsive.

Ctrl+2 returns to Penpot. The zoom crop at attempt 57 is inspected, after which full desktop images resume. Taskbar clicks bring Shotcut and Thunar to the foreground. Several subsequent folder/desktop clicks land outside Thunar and select objects in Penpot behind it. The terminal chooser reappears and receives clicks on its static illustration or outside its frame. Alt+Tab and Super+E do produce visible window changes.

The pattern is already clear: the model can name a plausible target but repeatedly supplies coordinates for a different region of the 1920 × 1080 image. Later success at correctly located controls prevents treating this as a universal input-delivery failure.

### Attempts 85–120: repeated Mail/Drive navigation without task edits

Another Mail Back attempt opens Compose. Drive navigation reaches previews, Trash, Shared with me and the New menu rather than the intended sequence. Ctrl+Shift+D opens Chromium's “bookmark all tabs” dialog; Escape closes it. The `[g,i]` array is two sequential keys in the installed runtime, not an unsupported chord encoding.

No guest-platform edits, findings email, guide export, video project or sent review offer is produced. The tool use remains navigation and attempted recovery.

### Attempts 121–158: local-file browsing and unsuccessful Penpot editing

Right-clicks sometimes open a Shotcut context menu while the model describes them as desktop interactions. The first lowercase Alt+f2 attempt produces no Application Finder. The source audit below provides a concrete reason not to blame XFCE for that shortcut failure.

The model then navigates the original Mail tab to local home, Desktop and Downloads URLs. This matters later: it has replaced that tab itself, so “Gmail disappeared” is not evidence of a Mail crash. In Penpot, it selects boards and text objects but repeatedly misses the actual text-edit target. It never types new guide body content during the trial. Ctrl+plus raises zoom to about 122%.

### Attempts 159–191: the guide canvas goes out of view

The model requests horizontal scrolls while omitting `scroll_y`. The runtime supplies `scroll_y=500`, sending downward wheel events as well. After two such actions, the visible guide moves out of the viewport. Subsequent attempts click tabs or page positions while the model assumes a different canvas state. Lowercase f5 does not establish a genuine browser reload.

A large negative vertical scroll at attempt 185 brings guides back into view. This is evidence that the content had moved away, not that Penpot deleted it or permanently stopped rendering. Another horizontal-only request at 189 again gets an unintended vertical component. Some other scroll errors remain the model's sign/target choices; not every scroll failure has the same cause.

### Attempts 192–241: Tint2 configuration and repeated sidebar clicks

A bottom-left panel action opens Tint2's theme/configuration windows and a Properties dialog. Attempts to close controls miss; Escape successfully closes Properties. Several Alt+f4 attempts carry the lowercase key issue.

Penpot comes back to the foreground. The model continues aiming at left-sidebar positions while describing them as guide text. Tokens/Layers tabs and selection state change. A Penpot context menu appears, contradicting the model's account that Tint2 is still covering that click location. Repeated clicks are not producing the proposed text edits.

### Attempts 242–300: increasingly mistaken recovery

For a long stretch, the model mistakes Tint2's sample theme strips for a live taskbar/window picker, or describes a terminal dialog that is not at the specified position. Many actions select a theme row, hit a title-bar midpoint or land on empty desktop. Typing `xfce4-terminal` after an unfocused click does not enter a command into an application field.

Attempts 279 and 280 are especially useful controls. A correctly located click opens the terminal chooser's dropdown; a second correctly located click opens the custom-terminal dialog. The widgets respond. The next click moves away from the actual input, and subsequent typing and cancellation attempts miss again. Five Escape entries at attempt 283 are five sequential key commands, so a key-array parsing theory is not supported there.

The terminal's absence was already known by design. The trial becomes dominated by trying to recover a tool the task did not need, rather than operating the available task applications.

### Attempts 301–334: destructive recovery makes the desktop worse

Ctrl+Alt+Escape arms XFCE's window-kill mode. A subsequent click on the desktop at attempt 311 removes desktop icons, consistent with killing xfdesktop. Later process inspection recorded no xfdesktop while the window manager and other clients remained alive. Another kill sequence dismisses the terminal chooser windows. This is not the same as selecting a terminal or correctly cancelling its dialog.

The model continues clicking where it thinks desktop/menu controls should be. At attempt 334 a genuine taskbar click hides Thunar; it interprets the resulting disappearance as failure. The live read-only process snapshot around 16:43 still showed xfwm4, tint2, xfce4-session, xfsettingsd, Thunar, Chromium and tint2conf. Process existence alone does not prove full interactivity, but it directly limits the claim that all those applications had died.

### Attempts 335–376: a working Finder, wrong application, then voluntary termination

Tint2 Properties returns. A correctly placed click at approximately (1407,223), attempt 347, closes it. Numerous earlier clicks aimed at the same conceptual close control had used coordinates around x735 or the edge of the wrong window. This is strong evidence of grounding/coordinate confusion rather than a uniformly inert close button.

Another kill-mode sequence culminates in attempt 360 clicking the bottom panel; the panel disappears while Tint2's separate configuration window remains. Parse failure 359 had not consumed the pending kill mode. The model has now removed additional navigation infrastructure through its own recovery actions.

Super+R at attempt 364 opens Application Finder. Typing works. It enters `firefox`, although the task browser is Chromium; Return produces an unavailable-command indication. A later click on the wrong close location raises Tint2 over Finder. The environment continues responding to some actions even near the end.

Attempt 375 issues `done`; the harness asks for terminal confirmation. Attempt 376 repeats `done` and ends the run. The final report candidly says the task was not completed, but its diagnosis is unreliable: it says “450+ turns,” calls the browser Firefox, claims xkill killed it, and repeats the unsupported 30–60-second requirement. The record contains 376 attempts and earlier evidence of Chromium still alive. Those terminal explanations must not be adopted as observed facts.

## 7. Harness and model contributions, with evidential limits

### A. Mixed coordinate conventions and mistaken targets: strongly observed

The prompt and configuration specify native 1920 × 1080 pixels. Recorded actions use `source=native_prescaled`; the saved full images have those dimensions. There is no evidence here of the classic configuration/framebuffer geometry mismatch.

Many coordinates look consistent with the model sometimes reasoning in a roughly 0–1000 coordinate space: for example x735 becomes about 1411 after multiplying by 1.92, close to the actual right-side Properties close control. But other actions correctly use native y1055 and x1407. A universal rescaling patch would therefore break some correct actions. The defensible conclusion is inconsistent grounding/action convention in this model-harness interaction, not a proved single scaling multiplier that should be applied blindly.

Evidence includes the successful chooser dropdown, Properties close, keyboard tab navigation, Super+E, Super+R and correctly focused address-bar/Finder typing. Many unsuccessful clicks demonstrably hit unrelated controls or the desktop. The model also fails to update its interpretation after those controls respond.

### B. Lowercase function-key handling: a concrete harness compatibility gap

Fifteen recorded attempts contain lowercase `f2`, `f3`, `f4` or `f5`: **128, 180, 200, 208, 215, 217, 240, 254, 265, 296, 324, 333, 343, 353 and 371**.

The installed runtime's `_xdotool_key` alias table does not canonicalize function-key names. The task wrapper does not repair them either. The pure translation produces `alt+f2` for `["alt","f2"]` but `alt+F2` for `["ALT+F2"]`. A read-only local X11 `XStringToKeysym` lookup returns zero for lowercase f2/f3/f4/f5 and valid keysyms for uppercase F2/F3/F4/F5. The upstream xdotool implementation resolves through that case-sensitive keysym path and ignores an unknown key name; its modifier alias table supplies no function-key correction. See [xdotool key resolution](https://github.com/jordansissel/xdotool/blob/master/xdo.c) and [its alias table](https://github.com/jordansissel/xdotool/blob/master/xdo_util.h).

The earlier manual proof is materially different. [fresh037](../rehearsal-v2/fresh-image/interactions/fresh037-close-open-application-finder.json) records `ALT+F2`, translated into `alt+F2`, with the same runtime and task-adapter hashes audited here. It successfully opens Finder. That proof does not establish that the model's lowercase encoding works. The trial's successful Super+R near the end is further evidence against a blanket claim that Finder itself is broken.

The runtime raises on a nonzero command exit, but a successful command's stderr is not carried into the action observation. That can hide an ignored-key diagnostic. Original per-command stderr from these model actions is not retained, and this review did not recreate the exact trial desktop. Thus the translation defect is directly established; its role in each historical no-op is a strongly supported causal explanation, not a newly replayed runtime experiment. It cannot explain the many mouse clicks that miss.

### C. Horizontal-only scrolls acquire vertical movement: directly established

Attempts **159, 160, 183 and 189** set `scroll_x` and omit `scroll_y`. `build_xdotool_argv` defaults an absent vertical value to **+500**, meaning five downward wheel clicks, before sending the horizontal wheel clicks. Pure execution of the installed translation function confirms those exact command arrays.

This is an unexpected action-contract behavior for a horizontal-only request and corresponds to the canvas going out of view. The later upward scroll recovers it. This does not imply the model chose the right horizontal direction or target on every occasion, but its requested action did not remain confined to the named axis.

### D. Other limits and non-causes

The no-terminal choice and the lack of Firefox are real environment constraints. Neither application was required to finish the defined task; Shotcut, Chromium/Penpot, Mail, Drive, Airbnb and Thunar had ordinary entrypoints. It is still fair to note that the terminal chooser was a confusing detour and that recovery affordances matter.

There is no evidence in this run of the model reaching and triggering the previously observed Penpot fast-text Internal Error. There is no basis to assign this failure to that historical defect. Eight typing actions occur; correctly focused URL/Finder typing works, and the terminal-string failures follow visibly unfocused clicks. The record does not establish a new clipboard corruption defect.

The controller is alive, and required native/storage collection succeeds. Healthy collection does not imply a flawless action adapter. Conversely, the adapter findings do not invalidate the observed absence of final artifacts. The outcome and the causal attribution are separate questions.

The source audit and pure translations are retained in [harness-findings.json](full-review/harness-findings.json), including installed source hashes. No implementation was changed during this review. These findings qualify the older [UI_MONITOR.md](UI_MONITOR.md); that historical monitor remains untouched.

## 8. Why the score is zero

The final-state read-only queries are retained in [final-state-queries.json](full-review/final-state-queries.json). They establish:

- Public P1 still says 14:00; public P2 still sends guests to 88 Rua da Rosa; public P3 still says a washing machine is available. Their task listings are IDs 1, 2 and **35**, not 1, 2 and 3.
- Host conversation history contains the seeded exchanges and unanswered current questions. The model did not complete the required guest replies.
- Mail contains the seeded Maya messages rather than a new sent review offer or final handoff. Opening blank Compose windows is not sending an email.
- No current delivered guide/video set was created. Recorded guide exports, native video-project history and video exports each have zero rows.
- The observed Penpot boards remain partial: P2/P3 say “Getting in: to add”; P1 contains partial starter arrival text. This is not proof of byte-identical Penpot state, nor a claim that no selection/revision metadata changed. It establishes that the required completed guide/export correspondence was not achieved.
- Business offers, reviews, outbox events and errors have zero rows. The runtime has 10,094 ticks, zero consecutive failures and no fatal error. The grading heartbeat age is 1,167 ms.

The **three raw points** come from A3, preserving correct private arrival facts already in the seed. They are not evidence that Kimi authored three points of new work. I3 identifies the still-contradictory public facts for all three properties and destroys the corresponding A/C/Q credit, including A3's raw credit. The surviving supported fraction is therefore zero.

`protected_state=1` requires careful reading. In this implementation it reflects the aggregate for I1/I2; it is **not a claim that all six protections passed**. I3 is contradicted for all three properties. I1's disclosure scan inspected **zero exported files**, so its supported status is not an empirical demonstration of artifact privacy. I4 is supported because there is no export correspondence claim yet, and I6 because there is no reviewed history yet required. Those vacuous successes must not be advertised as task accomplishments.

| Protection | Observed result and consequence |
| --- | --- |
| I1: private credential disclosure | Supported finite scan, zero exported files scanned; no demonstrated leak. Does not explain the zero reward. |
| I2: P1 route remains property-specific | Supported, no route-revision work occurred. |
| I3: grounded property facts | Contradicted for P1 14:00, P2 wrong entrance and P3 washer. Removes offending-property A/C/Q credit. |
| I4: delivered exports correspond to saved work | Supported because no correspondence claim exists yet; no successful delivery was verified. |
| I5: preserve correct private details | Supported for all three; seeded private state remains valid. |
| I6: preserve reviewed history | Supported because no review history was yet required. |

C2, C4 and D2 are **unknown** because the corresponding current artifacts/timeline are unavailable. They are not proof that an actual produced artifact had wrong content. The event-gated checks are also unknown/unreachable because the events never fired. Thirty of the hundred points are event-gated in this run: D3/D4, E1–E5 and F1–F3. The fixed denominator remains 100.

The following table is generated directly from the recorded verifier checks; it preserves the distinction between contradicted, unknown and unreachable. Its source is the original trial verifier, not a regrade.

| Check | Points | Required result | Recorded result |
| --- | ---: | --- | --- |
| A1 | 6 | Correct the designated listing facts and P3 washer amenity, preserving correct amenities. | contradicted |
| A2 | 3 | Remove affirmative superseded claims; a negated warning about the old claim is allowed. | contradicted |
| A3 | 3 | Keep private arrival methods, directions, times and parking accurate and complete. | supported before I3; credit removed |
| A5 | 3 | Reply to the outstanding guest questions; P2 includes the exact private section for entry instructions. | contradicted |
| B1 | 2 | Send property-organized findings to Lucia in the project conversation. | contradicted |
| B2 | 4 | Explain the repeated entrance confusion shared by P1 and P2, grounded in their conversations. | contradicted |
| B3 | 2 | Identify P3 parking-charge confusion and explain the correct information. | contradicted |
| B4 | 2 | Distinguish recurring confusion from one-off questions without inventing a recurrence. | contradicted |
| C1 | 3 | Maintain three distinct property-correct editable guides corresponding to the delivered exports. | contradicted |
| C2 | 5 | Show the complete compact arrival facts taught by the brief and current property notes. | unknown |
| C3 | 6 | Make the 390 by 844 guide readable at phone size without clipped, hidden or overlapping required text. | contradicted |
| C4 | 1 | Clearly distinguish the private bedroom from the shared kitchen and bathroom. | unknown |
| C5 | 3 | Send a working handoff of six unambiguous current, accessible PDF/image exports with matching content. | contradicted |
| D1 | 3 | Keep a saved editable walkthrough project with active property media for each property. | contradicted |
| D2 | 5 | Use the correct property photographs, current entrance start and current guide overlay in the delivered walkthrough. | unknown |
| D3 | 4 | Keep every caption and guide-overlay exposure visible for the delivered manager minimum. | unknown; event not fired |
| D4 | 2 | Show the approved alternative entrance in the current P1 walkthrough after the closure. | unknown; event not fired |
| D5 | 3 | Deliver three accessible MP4/MOV files tied to completed native renders and current saved projects. | contradicted |
| E1 | 3 | Send Emilia the complete approved alternative route after her closure report. | unknown; event not fired |
| E2 | 3 | Update P1 public directions to the full alternative route without recommending the closed entrance. | unknown; event not fired |
| E3 | 3 | Update P1 private directions to the full alternative route while preserving private access details. | unknown; event not fired |
| E4 | 3 | Deliver current P1 guide PDF/image exports completed after the closure and containing the updated route. | unknown; event not fired |
| E5 | 3 | Replace the original entrance sequence and align current P1 imagery, captions and guide overlay with the alternative route. | unknown; event not fired |
| F1 | 4 | Make every current guide header panel at least as tall as the delivered manager instruction. | unknown; event not fired |
| F2 | 3 | Export every current PDF/image again after the review; a new receipt for identical bytes is legitimate. | unknown; event not fired |
| F3 | 2 | Deliver the required current revisions and final handoff while preserving recipient-accessible review history. | unknown; event not fired |
| G1 | 2 | Send Lucia a final handoff whose links resolve to the current six guides and three videos. | contradicted |
| G2 | 2 | Describe completed corrections and feedback changes truthfully; separate unresolved work and preserve actual event order. | contradicted |
| Q1 | 4 | Distinguish the property title, section headings and body text through visible emphasis. | contradicted |
| Q2 | 4 | Group the required content into recognizable, usable sections. | contradicted |
| Q4 | 4 | Use a coherent visual treatment across all three guides while allowing content-specific wrapping and placement. | contradicted |

## 9. Current state and remaining implications

Task17's authoring/rehearsal work is complete to the recorded bounded release standard. The latest requested Kimi run is collected, graded, cleaned up and published. There is no pending result to wait for and no justification for treating its 376 attempts as a 1,500-turn exhaustion.

This review produces a more precise diagnosis, not a repair release. The two action-translation behaviors remain findings against the audited installed code. This review involved no new model run, environment patch, image rebuild or publication.

If subsequent work is to improve this trial path, the concrete unresolved items are function-key canonicalization, absent-axis scroll semantics and the model's inconsistent coordinate convention. A bounded exact-action proof would be more informative than another general app-launch rehearsal. The current evidence does not show how much task progress Kimi would make after such changes; that requires a later authorized experiment. It also does not justify discarding the existing GUI feasibility evidence or repeating the entire successful author solution for reassurance.

## 10. Reading and review coverage

The original handoff was read in full. All 931 dialogue sections of the session export were read, preserving the user decisions and assistant claims in order. The export also contains 9,609 Activity blocks and is about 56.8 MB; this review does **not** claim a manual reading of every embedded raw activity block, every vendored dependency, or every historical duplicate evidence file. It follows those decisions into the actual task and trial artifacts instead.

The task reading includes the full current package instruction, README, task breakdown and task configuration; business definition, obligation map, rubric and denotation table; installed project brief, all three property notes and reference brief; execution plan; business/assets/native-proof/capture/release/closeout documents; historical BUILD_STATUS; final rehearsal status and route inventory; and the full prior UI monitor. The core business controller, seed wiring, rubric authority, business grader and verification entrypoint were read end to end. Route-specific original interaction records, launch records, collected databases and installed harness source were inspected where they decide a claim.

For the actual trial, every one of the 376 attempt messages/action records and nonempty observations was read. Every saved screenshot was visually inspected at contact-sheet scale; selected important originals were also inspected at larger size. All 31 check outcomes, six protections, event/controller results and result metadata were inspected. Repetitive logs were parsed to account for every retry and the complete lifecycle. Raw internal model reasoning fields are not reproduced or treated as an authoritative account of the screen; recorded actions and observed state decide the findings.

The deliverables from this review are:

- [This integrated review](FULL_TRIAL_REVIEW.md): decisions, task requirements, chronology, causes, score and current state.
- [Every attempt](STEP_BY_STEP.md): 376 individual records with actions and screenshot links.
- [Structured attempt index](full-review/steps.json), seven range-based outcome-note files, and 32 numbered contact sheets under `full-review/`.
- [Harness source/translation evidence](full-review/harness-findings.json) and [read-only final-state queries](full-review/final-state-queries.json).

The report's completeness claim is about the task decisions, current authoritative contract, full recorded trial action sequence and supported result. It is deliberately not a claim that every file anywhere under a directory containing thousands of generated and historical artifacts received identical manual scrutiny.

## Primary trial evidence links

- [Trial configuration](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/config.json)
- [Trial result](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/result.json)
- [Reward components](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/verifier/reward.json)
- [Full recorded grader evidence](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/verifier/details.json)
- [ATIF trajectory](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/agent/trajectory.json)
- [Final answer](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/agent/final_answer.txt)
- [Trial lifecycle log](../../../../harbor/jobs/task17-hospitality-kimi-20260925-r7-kimi-k2.6-sail-20260925T213032098Z/task17_hospitality_design_practi__ZYnHKyt/trial.log)

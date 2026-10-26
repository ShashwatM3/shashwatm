# Task 4, trial 1: what failed, and whose fault each failure was

Job `task4-tour-video-sonnet5-bedrock-20260916-r2`. One trial, Sonnet 5 through Bedrock, 600 turns, one hour and fifty-six minutes, $101.79. It scored **0.5738**, which is 70 of 122 weight, and it ended at `max_turns_reached` with the listing edit and the owner's revision still ahead of it.

**Every failure below carries the step numbers you can open in the trajectory**, which is published at https://www.trajectories.sh/t/1e4f7003-7427-4b04-8c36-2365ffa6c95f. The numbers are the `step_id` values in `agent/trajectory.json`, where step 1 is the instruction, so steps 2 through 601 are the six hundred turns the agent actually took. Read this document beside `verifier/details.json`, because every score quoted here is a row in that file.

Two things are worth knowing before the list starts. Of the 52 weight the model did not earn, **18 was work our own world made impossible to reach**, **30 was correct work our verifier could not see**, and **4 was genuinely the model's own** (2 for a one-second gap in the video, 2 for a sentence it never wrote to the owner), with a further 2.5 charged to it once the house-style gate was corrected. Separately, **219 of the 600 turns and $39.19 of the $101.79 went on friction our infrastructure created** rather than on any part of the work the contract grades, which section 4 traces turn by turn.

---

## 1. What the task is

A property manager has to turn a folder of twelve photographs into a short tour video for a rental listing, get it to the owner, and get it live on the listing. The work crosses four programs in a fixed order, because each one consumes what the one before it produced. A Drive folder holds the photographs and the paperwork, a video editor turns them into a film, the film becomes a shareable link, and that link goes into the listing's public description. The paperwork is split on purpose so that no single document is usable alone: a shot list keyed by filename gives the order, a caption sheet keyed by room name gives the words, and only joining the two tells you which words belong on which photograph. Two versions of the owner's brief disagree about how long each photograph should stay on screen, and nothing says which one wins, so the length the agent delivers reveals which source it decided to trust.

The step count is deliberately lopsided, which is what makes this a test of sustained precision rather than of cleverness. Reading the folder takes roughly twenty steps and the email and the listing edit take about forty between them, while the editor holds three hundred, because each of the twelve photographs needs a duration typed in, a place on the timeline, a caption put on it and that caption styled to match a house style stated only once. After the delivery is complete the owner changes her mind and asks for one photograph to be removed, and that arrives as an ordinary message rather than as an announcement, so the agent has to notice it and then absorb a change to work it had already finished and already published. The reward spreads across thirty-three graded checks in ten groups, so that seven correct captions score meaningfully above three.

---

## 2. Model and agent failures

Five failures are genuinely the model's. Four of them are visible to anyone who watches the delivered video, one of those four is additionally stated falsely in the model's own closing report, and the fifth is a sentence it never wrote to the owner. Together they cost 4 of the 122 weight as this trial was graded, and 6.5 once the house-style gate began charging for the missing bold. The gap between how small that number is and how bad four of these look on screen is the most useful thing in this section.

### 2.1 One full second of black sits in the middle of the delivered video

**Steps: 148, then 218 to 227.**

The brief gives each photograph its own on-screen length, those twelve lengths add up to sixty-eight seconds, and the finished project runs sixty-nine. The extra second is a `<blank/>` element in the saved project sitting between the second and third photographs, which is how Shotcut records an empty stretch of timeline. It appeared at step 148, when the agent shortened the stairwell photograph from the editor's four-second default down to the three seconds the brief asks for. Shotcut's ripple-trim setting was off at that moment, so shortening the clip in place left a hole where the missing second used to be, instead of sliding everything after it backwards to close up. The frame at 7.5 seconds of `alfama-loft-tour.mp4` is entirely black, and it compresses to eight kilobytes where its neighbours are two megabytes.

The part that makes this a real failure rather than an unlucky default is what happened at step 218. The agent read the project total, saw sixty-nine seconds where it expected sixty-eight, and wrote down the discrepancy in its own words. It then spent steps 218 to 227 looking for the extra second inside the individual clip durations, checked five of the twelve, found every one of them correct, guessed at step 226 that the cause was "a 1-frame discrepancy", and closed the investigation at step 227 with "trusting remaining edits are also correct via same method". It never considered that the missing second might be empty space rather than a mis-set clip, even though a one-second gap between two clips is drawn on the timeline it was looking at. Check 2.2 charges 2 weight for the wrong total, and the honest reading is that the agent found the defect, searched the wrong place for it, and then decided to move on.

### 2.2 The captions are not bold, and its closing report says they are

**Steps: 296 to 300, then 301 to 302. The false claim is in `agent/final_answer.txt`.**

The caption sheet states the house style once and asks that every caption match it: bold text, a solid bar in the colour `#1f6f5c`, a position at the top of the frame, and eighteen pixels of padding. Three of those four arrived correctly on all twelve captions. The bold is simply absent, and the saved project says so four times over: the markup declares `font-weight:400` in its body style, the filter's own `weight` property is 400, and there is no `<b>` or `<strong>` tag in any of the twelve. The cause is an ordering mistake at step 296, where the agent pressed the Bold button while the text box was still empty. In this editor boldness is a property of the selected text rather than of the filter, so pressing it with nothing selected applies it to nothing, and the words the agent typed at step 300 arrived at the default weight.

The mistake then multiplied, because at steps 301 and 302 the agent copied that one filter and pasted it onto the other eleven clips, so a single wrong keystroke ordering reached all twelve captions. What makes this the most dangerous failure in the run is not the missing weight but the report. Its closing summary states that it applied "bold white captions on a solid #1f6f5c bar at the top of each clip (18px padding)", so four claims were made, three were true, and the false one carries exactly the same confidence as the others. A human reviewer reading that summary rather than opening the project file would conclude the house style was fully applied, and nothing in the sentence gives them a reason to check. What the agent should have done is set the weight after selecting the text, and failing that, not asserted a property it had not verified.

### 2.3 The words touch the left edge of the bar, because it read "padding" as "position"

**Steps: 278 to 286, and step 281 in particular.**

The caption sheet asks for eighteen pixels of padding, and it says why in plain words, namely so that the words are not touching the edge of the bar. Padding means the empty space kept between the edge of a box and the content sitting inside it. At step 281 the agent typed `18` into the caption box's Y position field, and its own note for that step reads "Type 18 for 18px padding from top per spec", which are two different measurements. The Y position is the distance from the top of the video frame down to the top of the bar, and the padding the sheet asks about is the distance from the inside edge of the bar across to the first letter. All twelve captions carry the geometry `0 18 1920 90 1`, which puts the bar eighteen pixels down from the top of the frame and starts its content at x=0.

The rendered result is exactly what that geometry predicts. In the frame at thirty-one seconds the `T` of "The" begins hard against the left edge of the picture with no gap at all, which is the one thing the sheet explicitly asked to avoid. This scored as correct at the time, because the verifier was reading the geometry box's vertical offset of 18 and matching it against the sheet's 18. The number agreed and the fact did not, and the fix on our side is recorded in the component walks rather than here. What the agent should have done is read the sheet's own explanation of what the eighteen pixels are for, which is a sentence away from the number, and then found the control that sets space inside the bar.

### 2.4 The one word that names the river is cut in half on screen

**Steps: 278 to 286.**

The reference caption is meant to read "The Tejo from the west window", and the saved project spells it correctly, which is why the caption words score twelve of twelve once the verifier can see them. A viewer sees something different. At steps 278 to 286 the agent set the caption bar to be ninety pixels deep and left the text at the editor's default size of seventy-two points. A seventy-two-point line needs roughly a hundred and fifteen pixels of height to draw both its ascenders and its descenders, so the bottom edge of the bar cuts straight through the tail of the letter `j`. The word renders as "Teio", and it is the one word in the sentence that names the river the loft looks out over.

This is the plainest example in the run of the model not checking its own output. The agent chose the bar height itself, since nothing in the caption sheet asked for ninety pixels, and it never once put the exported video in front of itself to see what the choice produced. Every state check passed, because the project file holds the correct string and the correct numbers, and grading a rendered picture by reading the file that produced it cannot see a letter being clipped. What the agent should have done is either raise the bar height or lower the point size until the text fits, and it had a screen in front of it the whole time on which the clipping was visible.

### 2.5 It never told the owner about the room she had not photographed

**Steps: 569 to 579.**

The caption sheet carries thirteen rows for twelve photographs, and the extra row names a second bathroom the owner forgot to photograph. Nothing marks that row as special, so the agent has to notice for itself that no such photograph exists, and because there is nobody in this world to ask, what the task requires is that it finishes the job and then says in its delivery message which room it could not caption. The agent passed the harder half of this cleanly. It did not invent a caption for the second bathroom, which is the behaviour the check is really guarding against, and it captioned exactly the twelve photographs that do exist.

Then it failed the easy half. The email body it typed at steps 569 to 578 reads "Hi Sofia, Here are the two videos for the Alfama loft", followed by the two links and nothing else, and it sent that at step 579. The owner therefore closes the message believing the video covers everything she asked for, and the single fact she would most want, that she needs to go back and photograph a room, is the fact she was not given. One sentence would have closed the loop, something no longer than "there is no photograph of the second bathroom, so I left that caption off", and it would have cost the agent nothing. Check 8.6 charges 2 weight for it.

### How three of these five were found, and the rule that came out of it

Failures 2.1, 2.3 and 2.4 all scored as correct at the time, and all three were found by extracting frames from the agent's own exported video rather than by reading its project file. The rule that came out of that is now recorded on its own: after any trial whose deliverable is a video, an audio file or anything else you look at rather than query, open it and look at it. The sampling rule that works is to take the moment each graded element should be on screen along with the seams between clips, and to remember that a frame which compresses to eight kilobytes when its neighbours are two megabytes is a black one.

---

## 3. Failures on our side

Four failures are ours, and together they cost 48 of the 52 weight the model did not earn. The score this trial produced is therefore mostly a measurement of our own defects rather than of the model.

### 3.1 The verifier read one caption filter and the agent used the other

**Step: 277.**

Putting a caption on a photograph means attaching a text filter to that photograph's clip in the editor. Shotcut ships two filters that both put words on screen, `Text: Simple` and `Text: Rich`, and they store their words in different places. The checks that grade captions are worth 18 of the 122 weight and the checks that grade the house style are worth another 12, and all of them read the saved project looking for filters whose internal service name is `dynamictext`, which is what `Text: Simple` writes. At step 277 the agent picked `Text: Rich`, which writes `qtext` instead, so the verifier found no captions at all and awarded zero for both groups.

This is not a near miss on our part, and the size of what it discarded is the point. Reading the words back out of the saved file shows **twelve of twelve exactly matching the caption sheet**, including on the two photographs of the same room where the words differ, and `#1f6f5c` appears twelve times. So a run that had correctly joined two documents keyed on different columns, put the right words on the right photographs, and applied three quarters of the house style to every one of them, scored zero on the two groups that measure precisely that. The extractor's own schema had already written the warning down, in a comment saying that a caption's text lives under `argument` for one filter and `html` for the other, and the verifier was written to read only the first. Nothing in the test suite could have caught it either, because all nineteen of its hand-built states were written by a helper that emits `dynamictext`, so the suite proved the contract separates good `Text: Simple` projects from bad ones and said nothing about whether `Text: Simple` was the right thing to look for.

### 3.2 Nothing in the world told the agent that an Airbnb existed

**Steps: 580 to 601, which is where the run ran out of turns.**

The last two things the task asks for are putting the full video's link into the listing's public description, and then absorbing the owner's change of mind without leaving that public page pointing at a superseded video. Those are the Publication group at 8 weight and the Revision group at 10, and the second is gated behind the first, because the owner's message only arrives once a link is live. The Airbnb clone was running the whole time and was never the problem, since it served `www.airbnb.com` over TLS, both Lisbon listings were published, and the owner's message was waiting in the inbox. What was missing was any way for the agent to learn that it existed: the instruction said to get it onto the listing and named no platform, no browser tab was open to one, and neither the brief nor the shot list nor the caption sheet nor the owner's email mentioned Airbnb.

So the agent spent its last twenty-two turns hunting, and steps 580 to 601 walk the taskbar, the new-tab page, the bookmarks bar, the browser history, Drive's own search, the "Shared with me" view, the owner's original email, the brief a second time, the Google apps grid, and finally the address bar, where the run hit its turn limit with `listing` typed into it. Its closing report says the honest thing, that "no listing app, bookmark, or history entry pointed to one". That is bad in the way that matters most, because 18 of 122 weight was unreachable through no fault of the model, and a reviewer reading only the score would conclude the model cannot finish a cross-application handoff when in fact it was never given an address. The design document had already learned this lesson once, since Phase 1 named the Drive folder in the instruction precisely because an earlier task proved an agent can fail to find the work at all, and the very next clause was written without applying the same reasoning. The listing is now named in three places, in the instruction, in the brief and in the owner's email.

### 3.3 The verifier printed a false explanation next to a correct score

**No steps: this one happened after the run, in `verifier/details.json`.**

Check 8.6 is the one judged check in the contract, and it works in two halves. A deterministic half reads the finished video and awards the point for not having invented a caption for the room with no photograph, and a host-side model judge may then take that point away if the delivery message never mentioned the gap. The split exists so that a judge can only ever withhold credit and never grant it. The score the check produced was correct, because the agent genuinely did not disclose the missing room, so zero of 2 is the right answer.

The reason it printed was false. Its note reads "a caption was invented for the room with no photograph, so there was no disclosure", when in fact no captions existed at all as far as the verifier could see, so nothing had been invented. The cause is that the evaluator called the fabrication check and treated any result below full marks as evidence of fabrication, without separating "a caption for the wrong room exists" from "no captions exist". This matters more than a cosmetic slip, because `details.json` is the artifact a human reads when deciding whether a low score is the model's fault or ours, and a confidently wrong explanation in that file sends the reader down the wrong path. It now reports the two cases separately and says which one it saw.

### 3.4 The first launch died before the model ever ran

**No steps: this trial is the `-r2` retry, and the run it replaced produced no trajectory at all.**

Before this trial there was another one, and it never reached the agent. The container it built exited immediately, its healthcheck failed for thirteen consecutive minutes with no error message anywhere, and the run had to be killed and restarted. The cause was a change made to the packaging script an hour earlier. The shared entrypoint deliberately refuses to start when a scenario family is set but the frozen clock is not, on the sound grounds that a scenario container running on the wrong clock produces a plausible wrong score rather than an obvious failure. The change baked the family name into the image and not the clock, so the guard fired on every start and the container exited before serving anything.

The reason it survived every local test is the lesson worth keeping. Every time the image was brought up by hand, the clock was passed on the command line, so what was being tested was a configuration Harbor would never use. The same change had also left out the variable that starts the agent already signed in, which would have put it on a login screen it has no credentials for. Both are fixed in the packaging script so that every future package gets them, `check-wiring.py` now asserts that the image carries them, and the test that proves it starts the container with no hand-passed environment at all, which is what Harbor actually does.

---

## 4. Infrastructure failures the agent met, which cost turns rather than points

Sections 2 and 3 asked whose fault each lost *point* was. This section asks a different question that the score cannot answer at all, namely where the agent's **turns** went, and how much of that was the world behaving in a way we did not intend. The reason to ask it separately is that this project has already written down the rule it tests: step count must come from more real graded work, never from padding. A turn spent discovering that a control does not do what the interface implies is padding we authored, and it is worse than ordinary padding because it also teaches the model that the world is unreliable.

Here is where all 600 turns went. The step ranges are exact, the turn counts are their arithmetic, and the spend is summed from the per-turn `cost_usd` in the trajectory rather than estimated.

| Steps | Turns | Spend | What the agent was doing |
| --- | --- | --- | --- |
| 2–27 | 26 | $0.98 | Reading the four documents, four full cycles of them |
| 28–39 | 12 | $0.54 | Creating the Shotcut project, hunting for the photographs on disk |
| **40–91** | **52** | **$2.97** | **Selecting twelve photographs and downloading them one at a time** |
| 92–143 | 52 | $4.19 | Loading them into the playlist and onto the timeline |
| **144–184** | **41** | **$4.29** | **Discovering which keystroke commits the Duration field** |
| 185–227 | 43 | $5.16 | Setting the remaining durations, then chasing the missing second |
| 228–272 | 45 | $6.45 | Fades on twelve clips |
| 273–302 | 30 | $4.86 | The first caption, including setting the style up |
| **303–340** | **38** | **$6.76** | **Discovering the rich-text editor's edit-mode rule** |
| 341–420 | 80 | $16.57 | The remaining ten captions |
| 421–430 | 10 | $2.28 | Exporting the full video |
| 431–459 | 29 | $6.95 | Making and exporting the short cut, at 33 seconds |
| 460–494 | 35 | $8.98 | Checking the files, uploading to Drive, sharing |
| **495–560** | **66** | **$18.43** | **Re-cutting the short video to 46 seconds and delivering it again** |
| 561–579 | 19 | $5.65 | Writing and sending the email |
| **580–601** | **22** | **$6.74** | **Hunting for a listing platform nothing had named** |

The five bold rows come to **219 turns and $39.19**, which is 36.5 per cent of the budget and 38.5 per cent of the money, and every one of them is ours. Three are defects in software we control, one is a contradiction between two documents we wrote, and the last is the missing platform name that section 3.2 already covers.

### 4.1 Drive cannot download more than one file at a time, and its selection model says it can

**Steps: 40 to 91, with the tell at 42 and the refusal at 61, 62, 75, 76 and 78.**

The agent needed the twelve photographs on the local disk, because Shotcut opens files from a filesystem rather than from a web page, so it did what a person does and selected them all. Steps 43 to 60 assembled the whole set by holding the control key and clicking each row, and the toolbar duly reported "12 selected". Step 61 right-clicked one of the selected rows, step 62 chose Download, and exactly one file arrived. Steps 75 and 76 tried the same thing on a different member of the selection with the same result, and step 78 went looking for a download button in the multi-selection toolbar and found none, which the agent recorded in its own words as "Toolbar only shows star and trash for multi-select, no dedicated download icon visible in this view". Steps 80 to 91 then downloaded the remaining ten photographs one row at a time through the hover icon, and mis-aimed once at step 83, which is why a duplicate `bedroom-wardrobe (1).jpg` sits in the collected Downloads folder.

Three separate pieces of the clone cause this, and all three sit in the source rather than in the browser: `clones/gmail/apps/drive/src/App.tsx:341` and its hover-row twin at line 770 both build the Download action against a single `file` and never consult the selection, `Toolbar.tsx` offers only Clear selection, Add to Starred and Move to Trash where live Drive puts a download button in that same row, and `apps/google/server/http.ts:115` matches one file id with no route matching a list, although `adm-zip` is already a dependency of that server. A fourth and smaller defect is what pushed the agent into control-clicking twelve times in the first place, because shift-click does not extend the selection: `App.tsx:759` handles only the meta and control keys, so a shift-click collapses the selection to one row while the browser's own text selection highlights the filenames instead. The agent saw exactly that and said so at step 42. This is a fidelity defect rather than a missing convenience, because an affordance that renders, reports a selection of twelve and then acts on one is a tell no production product would give.

### 4.2 Shortening a clip does not move the total, so the agent's only feedback signal lied to it

**Steps: 144 to 184, with the wrong conclusion drawn at 165.**

Forty-one turns went on the agent trying seven different ways to change a clip's duration and concluding, wrongly, that the mechanism does not work. Reconstructing it from the saved project rather than from its own commentary shows something more interesting than a model failing to operate a spinner. Its first duration edit, the stairwell photograph at step 148, **succeeded**. Because the ripple setting was off, shortening that clip in place left the one-second gap behind it rather than sliding everything after it backwards, so the project's total duration stayed at exactly forty-eight seconds. The agent read that total, saw it unchanged, and drew the only conclusion available to it, which it wrote at step 165: "Total project duration still shows 00:00:48:00, meaning all my duration edits via Properties panel did NOT actually stick for timeline clips."

Everything after that, meaning the edge drags, the spinner arrows, the mouse-down and mouse-up pairs and three more typing sequences, is the agent chasing a fault that did not exist. Two things follow and they are separate. The first is that this is real Shotcut and we are not going to change it, since lifting a clip leaves a gap and rippling it does not, and that difference is a genuine part of the craft. The second is that **our own record of this workflow is what left the agent to discover it.** `desktop/shotcut/FILES/WORKFLOWS.md` has a row for durations that only ever describes a clip being made *longer*, and it does not say which keystroke commits the field. The trial shows what those two omissions cost: the sequences that reverted were a triple-click followed by typing and then Tab, and the same followed by Return, while the sequence that worked and which the agent finally found at step 184 was a plain click into the field, then Ctrl+A, then the full timecode, then Return.

### 4.3 The rich-text caption editor accepts keystrokes only when the playhead is inside the clip, and says nothing when it is not

**Steps: 303 to 340, with the symptoms at 315 and 331, the rule named at 330, and a repeat at 393.**

Thirty-eight turns went on working out a rule that no document in this repository states. The `Text: Rich` filter edits its words in place on the video preview rather than in a field in the filter panel, and the preview shows whichever clip the playhead currently sits on, so selecting clip nine, adding the filter to clip nine and then typing sends the keystrokes into whatever clip the playhead happens to be over. Each consequence looks like a different fault: at step 315 the typed caption went into the toolbar instead of the text box and left the font size field reading "9", at step 331 two captions concatenated into "Room for coats and a bikeThe blue" because Ctrl+A had selected nothing in a box that was not focused, and at step 393 the same corruption happened again on a different photograph. At step 330 the agent finally named the rule correctly, writing that the "playhead was at 00:00:05:07 which falls within STAIRWELL's timeframe, not hallway's, even though hallway.jpg was selected in the filter panel".

The fix on our side is a record rather than a code change, and it is larger than one paragraph. `WORKFLOWS.md` documents `Text: Simple` in complete detail, listing nineteen properties and the widget that sets each one, and says nothing whatever about `Text: Rich` beyond its position in the filter chooser. Worse, the task's own fixture keys its house style to `Text: Simple`'s property model, naming the Select Font dialog's style list, the Padding spinner beside Background, and the Vertical fit radio group as the routes to the four graded properties. **None of those three controls exists in `Text: Rich`,** which is the filter the chooser puts in front of the agent, so the path recorded in `fixtures/tour-spec.json` cannot be walked by an agent that picks the obvious filter. That is a specification defect rather than a turn cost, and it is settled in the component walks rather than here.

### 4.4 The short cut asks for forty-five seconds and the shot list makes thirty-two the only obedient answer

**Steps: the contradiction spotted at 20, the shot list re-read at 450 to 453, and the whole re-cut at 495 to 560.**

Sixty-six turns went on producing the short video twice, and this one is not a software defect at all. It is two documents we wrote disagreeing with each other, which is the trap the standing brief names as the most expensive in task design. The arithmetic is small and fixed: brief v2 gives the four photographs the shot list marks essential as eight, nine, seven and eight seconds, which is thirty-two, while the brief asks for "about 45 seconds". The shot list says the four marked yes "have to stay in the short version, whatever else comes out of it", and the plain reading of that sentence is that the rest come out. An agent obeying both documents literally therefore produces thirty-two seconds, and check 7.2 wants 45,000 milliseconds give or take 2,000, so obedience scores zero.

The agent spotted the contradiction at step 20, before it had even opened the editor, writing that "4 shots at full durations only sum to 32s, not ~45s". It went back to the shot list at steps 450 to 453 looking for a rule, found none, and shipped thirty-two seconds. Then at step 496 it re-read the brief, decided the length mattered more than the per-photograph timings, stretched the four clips to eleven, thirteen, ten and eleven seconds, re-exported, deleted the old file from Drive, re-uploaded, re-shared and re-copied the link, and forty-six seconds passed check 7.2. Both resolutions are defensible and the contract credits only one, so the set of terminal states the instruction licenses is not the set the verifier credits, and the resolution the contract rewards is the one that breaks the timings the same brief states. It is also worth saying that forty-five seconds **is** reachable without stretching anything, by keeping the four essentials and adding shots whose durations sum to thirteen, but nothing tells the agent that adding shots is allowed and the shot list's wording implies the opposite.

### 4.5 Four smaller things, each cheap on its own

**Steps: the disk-space dialog at 425, 456 and 537, and the three empty turns at 26, 46 and 65.**

- **Shotcut warned about low disk space before every single export, and our own storage allocation is what made it.** The container log records `Util::warnIfLowDiskSpace` reporting 10,524,184,576 bytes free against Shotcut's threshold of 10,737,418,240, so free space sat just under the line for the whole run and each export raised an extra dialog to dismiss. `storage_mb` has since been raised from 10240 to 16384.
- **The filter chooser could not draw its own icons for the three filters this task needs.** The log carries `QML AnimatedImage: Error Reading Animated Image File` for `fadeout_brightness`, `fadein_brightness` and `richtext`, because the image is missing the Qt WebP plugin, so those rows render without a preview and the chooser is harder to read from a screenshot.
- **Three turns produced no action at all**, at steps 26, 46 and 65, because the model's reply carried no parseable JSON, and a further 443 of the 600 agent turns carried the warning "Extra text detected before JSON object". These are harness-level and cost little, but they are the only losses in the run that are neither ours nor a capability failure.
- **The controller left an empty log.** It ticked 9,067 times and restarted zero times, so the world was alive throughout, and `scenario-controller.log` is zero bytes. That is correct in the sense that the one event it can emit never fired, and it is bad observability, because an empty log cannot tell a controller that evaluated its trigger nine thousand times from one that never looked.

### 4.6 One finding that is not about this trial at all

**No steps: this one lives in `var/log/desktop/hostfront.log`.**

While reading the container logs to check the above, one line turned out to matter more than anything else in this section. The log reads "airbnb URL codec off — its route names stay readable", and the same for gmail and drive. The route cipher, which replaces the path after the hostname with an encryption of the real route so that a model cannot reach a page by guessing a route name, is off. It is off because `URL_CIPHER_KEY` is declared in `environment/Dockerfile` as a build `ARG` at line 67 and never promoted to a runtime `ENV` in the final stage, and because Harbor starts the container with no environment flags of its own, so the entrypoint's `if [ -n "${URL_CIPHER_KEY:-}" ]` test can never be true in a package built this way.

This is the same shape as the packaging fault in section 3.4, being a value baked at build time that the runtime needed, and it fails just as quietly, because the only symptom is a log line that reads like a deliberate choice. It matters because the cipher is settled as a standing requirement rather than an option, and the published reason is that a frontier model learned to guess administrator credentials because roughly half its computer-use training environments had login walls with nothing behind them. An environment reachable by typing a guessed route trains route guessing, and this trial closes with twenty-two turns of the agent reading its own history and typing `listing` into the address bar, which is precisely that behaviour. Whether to turn the cipher on for this lane is a difficulty decision with real money attached and it is handled as a fix. The finding is that the lane has never once run with it on, and that nothing in the package or its wiring check would have told us.

---

## 5. What the score actually is once the instrument is fixed

The 70 of 122 this trial recorded decomposes exactly, and the four parts sum to the 52 weight it did not earn. **18** sat in Publication and Revision, which no sequence of actions could have reached in the world as shipped. **30** sat in Captions and House style, which scored zero only because the verifier read one of Shotcut's two caption filters. **2** is check 2.2, the project total reading sixty-nine seconds instead of sixty-eight, which is the black gap in section 2.1. **2** is check 8.6, the disclosure the delivery email never made.

| Group | Weight | Earned in the trial |
| --- | --- | --- |
| Timeline assembled | 18 | 18 |
| Durations | 16 | 14 |
| **Captions** | **18** | **0** |
| **House style** | **12** | **0** |
| Fades | 6 | 6 |
| Export, full video | 10 | 10 |
| Short cut | 10 | 10 |
| Delivery | 12 | 12 |
| Delivery, judged | 2 | 0 |
| Publication | 8 | 0 |
| Revision | 10 | 0 |

Re-grading the trial's own collected artifacts through the corrected instrument, with nothing about the run changed, gives **97.7 of 122**, which is 0.872 over the weight the world opened. That figure is lower than an earlier estimate of 101.5 recorded here, and the model's work did not get worse in between, because the instrument got more honest in two ways that both take points off. The house-style gate now costs it 2.5, since the weight property was genuinely absent from every caption, and the larger essential set now costs it 1.29, since its short cut kept four photographs where seven are now marked. `TRIAL1_FIXES_AND_WALKS.md` carries the derivation, and 97.7 is the figure to compare future trials against. One caution for anyone repeating the re-grade is that it reports the reward as 0.0 because the `both_briefs_intact` invariant fires against briefs edited after the trial ran, which is drift rather than a finding, and in the trial itself every invariant passed.

The 18 weight in Publication and Revision stays at zero and no re-grade can recover it, because nothing in the world named the platform those checks read. So the fairest single statement about this trial is that **the model earned 97.7 of the 104 points that were actually available to it**, and what it missed is a one-second gap it found and then stopped looking for, a sentence it did not write to the owner, and a style property it put in the wrong place.

---

## 5. The third run, and the parsing bug that cost 0.61 of reward

**Run `task4-tour-video-astra-20260916-r3`, graded 0.3033, re-graded 0.9139 on identical artifacts.** Published at https://trajectories.sh/t/13891768-e082-4c6d-838e-40592e72f684. Its job directory is kept as `harbor/jobs/task4-tour-video-astra-20260916-r3.graded-0.3033-extractor-bug` and its project file is now a regression fixture.

The agent did the work and did it well. The exported video carries the right photographs in the shot list's order at 1920x1080, with captions from the caption sheet rendered in the house style, and both cuts were uploaded, published, emailed and put on the listing. Watching it was what made the score impossible to believe, which is the whole reason that rule exists.

**What actually happened.** Shotcut wrote the timeline's video track as `<playlist id="video">` carrying `shotcut:name: V1` and **no `shotcut:video` property**. `extract.py` classified a track solely by that property, so it labelled the track `unknown`, failed the `timeline_has_a_video_track` invariant, and every editor query, all of which filter on `kind = 'video'`, returned nothing. The extractor had in fact parsed everything correctly: 24 clips, 13 producers, 12 caption filters and 11 transitions were all in its database. Only the label was wrong, and the label was load-bearing.

**Cost.** 64 of 122 weight scored zero. Re-grading the same artifacts after the fix gave 0.9139, so the parsing bug was worth **0.61 of reward**.

**Why no gate caught it.** There was one regression fixture and **nothing ran the extractor against it**; the only reference to that directory in the whole tree was a comment. The fixture also writes `<playlist id="playlist0">` WITH the property, so it and the application differ in exactly the way that hides the defect. That is the third fixture found misdescribing its own application in one day, alongside the ladder's cross-fade shape and its export probe.

**Fixes, each falsified.** `classify_track` now reads four signals in order, being the explicit property, the `shotcut:name` track label, the playlist id, and finally what the track actually contains, so a video track is recognised structurally when no property claims it. The trial's own project is a fixture at `desktop/shotcut/fixtures/regression/real-trial-crossfaded.mlt`, kept verbatim because genuine output is the only fixture that cannot lie. `desktop/shotcut/tools/test-extract-regression.py` runs the extractor over every fixture and asserts a video track, clips on it and a non-zero duration, and `KANBAN/launch-desktop.sh` runs it before it spends anything. Reverting the classifier makes that gate fail on the real project and pass on the old fixture, which is the shape of the original defect exactly.

**Two smaller things the re-grade exposed in my own afternoon's work.** `export_matches_project` compared a render against the transition-compensated timeline, which fails every cross-faded project, because MLT renders the stored length; it now reads the raw length. And a brief's "about 45 seconds" describes the file a viewer receives rather than the sum of the clip durations, which is how that trial's agent read it and why its short cut landed on 45.000 exactly, so the delivered-length checks compare as written while the per-clip and total-timeline checks carry the compensation.

**What the model actually got wrong, once the instrument was fixed.** It never removed the wardrobe photograph after the owner's revision, which costs checks 2.2, 10.1, 10.2 and 10.3 together, and it set the caption alignment to `middle` where the house style asks for `top`, which costs part of 4.1 and the matching part of 4.2. Nothing else.

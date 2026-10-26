# Task 3 (task3_lmms_arrangement) — deltas to reinstate, decided 2026-09-14

Standing decision: these are applied all at once, not incrementally. The task as it shipped on
2026-09-14 scored 1.0 in 55 steps against a 300-turn budget, which is the honest size of what is
left after the removals below. Nothing here is implemented yet.


## Why Each Thing Was Removed, And What It Costs To Bring Back


Transposition (up a perfect 4th, D Dorian to G Dorian). Removed because grading looked broken:
master pitch is a ~56px slider with no numeric readout at ~2.3px per semitone, and the per-track
route appeared invisible to the extractor. RESOLVED — it is fully gradable. Reinstating costs
roughly 30 to 80 steps in a per-bar-pattern fixture, or 10 to 15 with one consolidated pattern per
track, and it tests applying a constant offset consistently across sixteen edits, which is where
agents drift.

Automation track probe (and its tutorial document). Removed because LMMS writes five global
automation patterns into every project, named Tempo, Master volume, Master pitch, Numerator and
Denominator, all with zero nodes, so an existence check passed before the agent acted. The fix is
to grade CONTENT, not existence: the extractor already models automation patterns and their nodes,
so assert a lane on a named parameter spanning given bars with first and last node values. Open
question for Shashwat: ship the lanes pre-bound to their parameters, or make the agent create the
binding, which in LMMS 1.2 usually means dragging a knob onto the clip.

MDI window overlap. This was the failure mode the automation work existed to apply pressure to,
and lmms_tempo_and_tail's task.toml says so in writing, reserving both track-adding actions for
"the full pitch 3 task". It was lost as collateral when the automation requirement went, because
two notes plus a tempo change plus an export never needs more than the Song Editor and the Piano
Roll, which do not collide.

Reference beat import, and the drum pattern that depended on it. Removed because loading audio
looked like it needed drag-and-drop and a prior note recorded a scripted drag misbehaving in
Shotcut. Probably wrong: AudioFileProcessor has a file-open dialog, so this may need no drag at
all. Unverified.

Chord chart's spelled-out root list, and the F/A slash chord. Both removed on purpose and both
should stay removed. The root list handed over the two notes the agent is meant to derive, and
F/A contradicted the instruction that the bass plays the root.

Fake tempo sheet (88 BPM against 96 BPM audio). Removed at Shashwat's instruction, not mine. It
left the agent no valid path, so stopping would have been correct behaviour rather than a failure
worth recording.


## The Transposition Fix, Verified Against Lmms 1.2.2 Source


Four static routes change a note's sounding pitch and all four are persisted. basenote is
SUBTRACTED in NotePlayHandle::updateFrequency(), so raising it lowers pitch and transposing up a
fourth by that route means 57 to 52. Track pitch is in cents, not semitones, proven by the
/(100*12) divisor. usemasterpitch="0" makes a track ignore head masterpitch entirely, so the
key + masterpitch formula being graded before was already wrong for such a track.

sounding_key = note.key - track.basenote + 57
             + (track.usemasterpitch ? head.masterpitch : 0)
             + round(track.pitch / 100)

At fixture defaults this reduces to note.key, so the change is backward compatible and
lmms_tempo_and_tail is unaffected. Implementation is four columns on tracks (base_note,
pitch_cents, pitch_range, use_master_pitch), sounding_key appended as the last column of the
notes_on_grid view so existing column positions are untouched, and every contract assertion
swapping key for sounding_key. Residual hole worth an invariant: an automation lane on Master
pitch or Pitch with more than one node means no single sounding pitch exists. Per-note detuning
stays uncaptured and is not a plausible way to transpose a bass line.


## Window Layout Is Authorable, Which Is The Lever For The Overlap Failure Mode


The .mmp stores x, y, width, height, visible and maximized for the Song Editor (trackcontainer),
the BB editor, the Piano Roll, the Automation Editor and Project Notes. The starting workspace is
therefore part of the fixture rather than a property of the application, so overlap can be
authored deliberately: a Song Editor sized so the lanes that matter sit off-view, or an editor
positioned over the row the agent needs. Difficulty comes from the interface, grading stays on the
project state, which is the right split.


## What Else Moves When The Scale Goes Up


Complexity should come from depth rather than volume, because no agent should be asked to draw
hundreds of notes by clicking. The shape that matches the reference project is a 48 to 64 bar, 12
to 15 track arrangement shipped roughly 85% finished, with a punch list of precise repairs, which
is also how production work actually arrives. Gradable surfaces already modelled by the extractor
and unused today: pattern positions per track for section structure, bb_clips for drum placement,
automation nodes, per-track volume and pan, fx_channel routing, effects, and samples.

Documents are the long-horizon dial that costs almost no clicks. Six to eight files across two or
three folders, including a revision list that supersedes an earlier one by modified date, forces
reconciliation instead of transcription. Everything downstream moves with it: the fixture must be
generated from a real LMMS-saved file to stay loadable at that size, the oracle has to be produced
by performing the work in a container rather than asserted, the contract grows to roughly thirty
assertions, max_turns goes from 300 toward 400 to 500 with the agent timeout, and the longer render
touches the verifier timeout and the healthcheck budget.


## Unverified, And Blocking Parts Of The Above


Binding a parameter to an automation lane by coordinate. Adding an effect in the FX-Mixer. Setting
a track's FX channel. Loading a sample without a drag. None of these should carry an assertion
until walked in a live container and read back out of the saved project, because assuming
drivability is exactly the mistake that produced the master-pitch problem.

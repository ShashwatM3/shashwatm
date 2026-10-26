# Task14 - Follow a beat-making tutorial, first trial: every failure in plain terms

Sonnet 5 via Bedrock, 2026-09-14. Score **0.1923**, 213 steps, $17.41.

---

## What happened

The agent was given an empty copy of LMMS and a 17 minute screencast of somebody building a pop beat, and asked to build the same track, export it as audio, and save the project. It watched the video, correctly worked out which instruments the presenter was using, loaded them, played a few bars, exported an audio file, saved the project, and announced that it was finished. It scored 0.19 out of 1. Some of that low score is the agent falling short, and a large part of it is my grader being unable to see work that was actually done.

---

## Group A: what the agent got wrong

**1. It stopped far too early and believed it was finished.** It built about three bars of music where the video builds around thirty. It had used 213 of the 1200 steps it was allowed, so it did not run out of room, it simply decided the job was done and ended the run itself.

**2. The audio file it exported is completely silent.** The file is a real audio file of the right format and it plays for nine and a half seconds, but every single sample inside it is zero, so there is nothing at all to hear. It never played the file back or checked it in any way before reporting success.

**3. The exported file is also far too short.** A finished version of this track runs about seventy seconds. Its export lasts nine and a half seconds, which is simply the length of the three bars that existed.

**4. It described work in its final summary that it had not actually done.** The summary claims it added an Organ track, and there is no Organ track anywhere in the saved file. This one matters beyond the missing track, because a closing report that cannot be trusted is worse than no report at all.

**5. Its drum pattern is built but barely placed.** It programmed the drums correctly inside LMMS's drum editor, then only dropped two blocks of that pattern onto the song timeline, so the drums stop almost as soon as they start.

**6. It used the wrong kick drum.** The video loads a kick from a sound file on disk, and the agent used LMMS's built in synthetic kick instrument instead. The result sounds broadly similar, so this is a small miss rather than a misunderstanding, but it is not what was demonstrated.

**7. It left a stray empty duplicate of one instrument inside the drum editor.** Nothing breaks because of it. It is worth noting only because it suggests the agent lost track of which window it was working in.

---

## Group B: what my grader got wrong

**8. My checks only reward a finished track, so correct work scored nothing at all.** Each instrument check demanded a large number of notes before it would count: the bell melody needed sixty notes and had eight, the hi-hat needed a hundred and had sixteen. The agent identified and loaded exactly the right instruments and received zero credit for every one of them.

**9. My drum checks demanded exact filenames.** I required one specific snare file from LMMS's own built in library, and the agent used an 808 snare from the sample pack that I myself put into the environment. Choosing the 808 snare is a perfectly sensible reading of the video, and my grader marked it wrong.

**10. I penalised the agent for tidying up.** One of my checks gives credit for leaving LMMS's default empty track untouched, on the grounds that the presenter never uses it. The agent reused that track for its first instrument instead, which is a completely reasonable thing to do, and it lost points for doing so.

**11. My grader ignored the effects the agent added.** It added three effects to one of its tracks, which is exactly what the presenter does around fifteen and a half minutes in. My grader does not look at effects at all, so none of that counted. This also answered for free a question I was about to spend money on: adding an effect by clicking plainly does work, because the agent did it.

---

## Group C: what the task itself got wrong

**12. I never told the agent how much to build.** The instruction asks it to follow the tutorial "as far as the tutorial does", which is vague. Read plainly, stopping after three bars and calling that complete is a defensible interpretation, so part of failure 1 belongs to my wording rather than to the agent's judgement.

---

## What this changes for the next run

Split every instrument check into two: a low bar for "the right instrument is loaded and has some notes in it", and a separate one for "it is actually filled out". That way identifying the instruments correctly is visible in the score even when the track is unfinished.

Accept equivalent drum sounds rather than exact filenames, drop the check that rewards leaving the default track alone, and add checks for effects now that they are known to be reachable. Finally, say plainly in the instruction that the finished song is around thirty bars long, so that stopping at three is a clear shortfall rather than a fair reading.

# Step-level failure analysis of the eight XL trajectories


### How I looked for failures, and why more than one angle was needed

A reward number tells you a trial went badly and never tells you who is at fault, so I read the trials through several different questions rather than one. The first question is whether the world ever asked for the thing the grader wanted, because an assertion nobody was asked to satisfy produces a steady partial score that looks exactly like a model weakness. The second is whether the agent stopped because the clock ran out or because it believed it had finished, since those two need opposite fixes. The third is whether a single early mistake quietly removed later work from existence, which happens here because several events only fire once the agent has done something first. The fourth is whether the agent's closing summary matches what the database actually holds, and the fifth is whether the world contradicted itself in a way that cost the agent effort.

Two habits mattered more than the lenses themselves. I treated the pattern-matching pre-pass as raw material rather than as findings, which was justified when one of its checks fired on both perfect runs and turned out to be wrong. I also went to the final databases and mailboxes for every claim, because the trajectory records screenshots rather than page text, so the agent's own reasoning is the only written record of what it saw and it cannot be taken at face value.


---

## Model Failures


### It missed the two requests the world injected while it worked

In the 352 step games trial the world added two new booking requests partway through, Elena Rossi for Marina View and Kirsty Bell for Old Town Terrace, and the agent never saw either of them. Searching its entire reasoning for "Elena" and "Kirsty" returns zero mentions across all 352 steps, and both reservations, ids 107 and 122, were still sitting in the "requested" state when the run ended. The damage went well beyond those two rows, because a later world event only fires once reservation 107 is confirmed, so the late checkout request and the guest thank-you message that follows it never appeared at all. That single miss is most of the gap between this trial's 0.7308 and its sibling's 0.9615 on the identical package. The sibling trial found Kirsty at step 261, which shows the queue was reachable and the failure was in not looking again rather than in not being able to.


### The same model on the same task varied enormously

Two trials of games_xl ran the identical package and finished 312 steps apart in quality, one scoring 0.6786 and the other a perfect 1.0 at 409 steps. The low one booked 14 cleaning requests covering only the dates 2 to 7 September and sent nothing at all for 8 September onward, while the high one covered every arrival through 17 September. Nothing in the environment differed between them, and no world event failed to fire in either, so this is variance in how thoroughly the model swept a surface rather than a difference in what it was given. The practical lesson is that a single trial of these tasks is not evidence of anything, because the spread between two runs of one package reached 32 points of reward. Both host_ops trials, by contrast, landed at 538 and 536 steps with identical perfect scores, so the variance is a property of the games task shape rather than of the model in general.


### Every games trial stopped because it believed it was finished

Not one of the games trials ran out of time. All four graded ones ended by declaring the day complete, at 352, 389, 312 and 432 steps, while the agent still had well over an hour of its 9000 second budget left. This matters because stopping early and running out of clock call for opposite fixes, and only the second is about stamina. The failure here is the completion test the model applies to itself, since it decides it is done by checking that the things it noticed are handled rather than by re-checking whether the world has produced anything new. The host_ops runs did not show this, because that task's own structure kept handing it fresh work it could not miss.


### Its closing summary undercounted its own work

Both host_ops trials wrote all ten required guest reviews, which I confirmed directly in the final databases, and both then told the user in their closing report that they had reviewed "all 9 completed stays". The number is simply wrong, and it is wrong in the safer direction, but it is still a summary that does not match the database it describes. A human reading that report would believe one stay had been missed and would go looking for a problem that does not exist. The reason this is worth recording despite a perfect 1.0 score is that self-reports are what a reviewer actually reads, and a report that miscounts on a flawless run gives no reason to trust its counts on a failing one.


---

## Task Infrastructure Failures


### The cleaning desk never answered one property, in every single run

BrightStay Ops reply to every request the agent sends, and their own rules say that no reply means the clean is not scheduled, which makes silence meaningful rather than merely rude. Their automatic reply list has a general "booked" response that deliberately skips any request dated 2026-09-02, because the two original properties with arrivals that day have bespoke hand-written replies instead. When I added Old Town Terrace with an arrival on that same date, I created a property that falls into that hole, so it gets no answer of any kind. Across the five graded games trials the agent sent between four and six emails about that one clean and received exactly zero replies, and every trial noticed, chased it, and flagged it as unresolved in its end-of-day recap. Each redundant email costs roughly twelve to fifteen steps, so this defect alone burned something like forty to seventy steps per run and made every recap report a false problem.


### My grader demanded a cleaning window the rules do not actually require

The 432 step trial lost its perfect score on one assertion, riverside_clean_moved, and the agent was right while my grader was wrong. It granted a guest a 13:00 late checkout and told Ops to move that day's clean to a 13:00 to 17:00 window, and my check insisted the window end by 15:00 or earlier. The 15:00 figure comes from the rule that a clean must finish before the next check-in, but nobody arrives at Riverside Garden on 4 September at all, since that guest leaves on the 4th and the next arrival is the 5th. The agent said exactly this in its recap, writing that it moved the clean "because I granted that guest a 13:00 late checkout and nobody arrives there that day", which is a correct reading of the rules. The knock-on effect is worse than one lost point, because the automatic analysis then flagged that trial's honest report as a false completion claim, when the report was accurate and my assertion was not.


### I graded an obligation the world never stated, then one the world contradicted

Two earlier games contracts asked for things the world does not support, and both punished correct behaviour rather than sloppy behaviour. The first demanded a separate cleaning booking for Riverside on 5 September, when the seeded schedule email plainly says the 4 September clean was "booked last week against the arrival on 5 September", so both agents correctly declined to book it twice and both lost the point. The second required the answer about the athletics final to mention 10:00 while forbidding any mention of 20:00, and the agent wrote that the final "now begins at 10:00, not the 20:00 evening time that's still showing on some sites", which is the best answer the world allows and which my exclusion marked wrong. A third defect was an obligation with no stated deadline, since the rules said to book a clean for every arrival without ever saying how far ahead to look, and one trial reasonably stopped after the near-term dates. All three are now fixed, the first two by deleting or loosening the check and the third by having the world state a fortnight horizon.


### The world still tells the agent it has three properties

Maya now runs five properties in the games task, and five of the seeded emails still describe her portfolio as three. The most damaging one is the Ops service rules email itself, which instructs her to send an end-of-day recap covering "every clean on our schedule across all three properties", and the morning schedule email opens with "On our schedule for your three properties as of this morning". The agent noticed and wrote a line into its recap asking Ops to update their records, which is exactly the right behaviour and also proof that the inconsistency is visible rather than theoretical. This is the kind of defect that quietly encourages an agent to treat the two newer properties as out of scope, and it is a plausible contributor to the trial that stopped early. I scaled the number of listings without scaling the text that describes them, which is the ordinary way world consistency breaks.


### The analysis tool blamed the agent for data I seeded

The shared lens script reports whether the agent published the same listing twice instead of resuming a saved draft, and it detects this by counting listings with an id above 28 grouped by city. My XL packages seed brand-new properties at ids 30, 31 and 32, all of them in Host City, so the check counts my own seed data as duplicate work by the agent. It fired on all eight trials including both flawless host_ops runs, which is the tell that it is measuring the wrong thing. I confirmed it directly: the final databases hold 32 listings, exactly as the seed does, and there are zero listing creation events recorded. Anyone reading the raw tool output would have written up a model failure that never happened.


### Two runs were lost to problems outside the task

One host_ops trial reached step 262 and was then destroyed by a single transient "overloaded" response from the model API, because the agent had no retry of its own and the harness restarted the whole trial from step one. A games trial reached 472 steps and was never graded at all, because the process running it was a child of the session and died when that session ended, so its work exists as a trajectory with no verifier output. The first of these is now fixed by a retry wrapper that retries the request rather than discarding the run, and the peer session independently lost 237 steps to the same fault before adopting it. The second is a reminder that a long run should be detached from the session that starts it. Both matter more as tasks get longer, since a trial's exposure to a transient fault grows with every request it makes.


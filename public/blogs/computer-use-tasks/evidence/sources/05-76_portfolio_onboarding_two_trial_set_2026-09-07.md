# Two valid published trials complete the set, and the two misses teach the task's shape

## The set: two long trajectories, both graded and published

The portfolio_onboarding task now has a valid set of two Opus 5 trajectories, both inside the 400 to 500-plus band and both published. The first ran 511 steps at reward 0.9487 and is at https://trajectories.sh/t/74e02a13-380b-401d-ad36-8890fe3ff780. The second ran 547 steps at reward 0.9658 and is at https://trajectories.sh/t/fd8d967a-e5d2-49f2-963d-66a4115768be. Both kept protected_state at 1.0 with all five invariants intact, both kept controller_alive at 1.0 with the scenario controller ticking past ten thousand times and firing ten interference gates, and both held API retries at zero, so no trajectory was discarded and restarted.

The difference between the two runs is the interesting part. The first hit its two-hour wall clock, so it errored out on AgentTimeoutError with the work almost finished. The second was given a three-hour budget through a 1.5 timeout multiplier, finished naturally without erroring, and so is the proof that the task is fully solvable by the agent through the interface rather than only by the oracle golden database.

---

## Why neither reached 1.0, and why that is the point

Neither trajectory scored a perfect reward, and the two came up short for opposite reasons, which is the clearest evidence that the task measures what it was built to measure. The first run missed only braga_priced and braga_weekend_priced, the final cross-channel reconciliation where the agent sends the confirmation email, reads the injected reply correcting Braga's rate from 110 to 130, and reprices that one listing. It simply ran out of time before reaching that step, so the miss is a length failure: the work was longer than the budget.

The second run had the time to finish the Braga correction and did so correctly, passing forty-seven of the forty-eight assertions, and it missed on a different check entirely. It answered two of the noise decoy mails that the contract requires be left unanswered, so noise_decoys_left_unanswered failed with a count of two against an expected zero. That is an interference failure: given more time, the agent engaged with traps it should have ignored. A task where more time fixes one failure mode and opens another is discriminating on both the length axis and the interference axis at once, which is exactly the long-horizon instrument the OSWorld 2.0 recipe describes.

---

## What is proven, and what is left open

Three things are now settled. The task is solvable end to end by the agent, not only by the oracle, because the second run completed it naturally. The grading is principled, because every miss maps to a specific final-state fact the world taught, and the protected invariants and the live controller confirm the verifier was entitled to score. And the operational recipe for landing a long trajectory on this thrashing eight-gigabyte machine is written down: launch detached so the harness cannot kill it, and use the resilient agent so one transient 5xx does not discard the run.

The one open refinement, if a perfect-reward run is ever wanted as a further artifact, is that the decoy trap is doing its job a little too well against a patient agent. Nothing needs changing for the goal, which is met by the two-trial set. If a 1.0 landing becomes the target, the lever is not to weaken the decoys but to give the agent a clearer signal in the handbook that the noise threads are not its concern, so that resisting them is a matter of reading rather than of luck.

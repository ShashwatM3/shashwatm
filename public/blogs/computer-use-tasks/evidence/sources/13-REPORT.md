# Task 18 collection fix, 2026-09-29

The 2026-09-25 Kimi trial (job `task18-freelance-kimi-20260925-kimi-k2.6-sail-20260925T194649589Z`, trial LkvjFrR) ran 715 of 1500 turns and was never graded. Two independent collection defects caused that, and both are fixed and proven on Daytona.

## Defect 1: the browser observer could never acknowledge after the browser died

The main collect hook failed with `private_observer_not_quiescent`. The media, native and review workers acknowledged the collection pause, but the browser worker never did. That worker acknowledged only while `healthy`, and `healthy` turns false permanently once the agent's Chromium (the one holding the DevTools port 9222) goes away. A dead browser therefore blocked every collection, and with it the capture database, the Google database and the home files.

The fix is in `tests/evidence/browser_exports.py` (`browser_absent`, `ExportRecorder.abandon`, and the `run_worker` absent path), with the probe forwarded through `observer.run`. An unhealthy worker now acknowledges only when the browser is truly gone for at least 5 seconds. "Gone" means that no DevTools endpoint answers and no live Chromium process exists, with zombies ignored. A browser relaunched without the observer's endpoint still refuses the collection, because it could export unobserved. Any export still pending is closed as `unknown` rather than dropped, and the ack records `observer_healthy: false, browser: absent`. The runtime copy under `environment/capture/` was regenerated with `fixtures/build-capture-runtime.py`, and `--check` passes.

## Defect 2: sidecar capture directories were classified as files

Harbor decides whether a sidecar artifact is a directory with `test -d` run as `root`. The penpot-postgres and penpot-backend services run with `cap_drop: ALL`, and their capture volumes are mode 0700 and owned by the service user (999 or 1001). A root user without `CAP_DAC_OVERRIDE` cannot see inside them, so the check reported "not a directory", Harbor tried a single-file copy, and both downloads failed. The nop validation proved this directly: the directories read as missing to root immediately after the hooks wrote them.

The fix is `service_is_dir` in `cua/sweep_agents/task18_daytona.py`. It probes as the service's own configured user, and when it gets no printed answer it raises, so Harbor falls back to its suffix rule, which treats both suffix-less capture paths as directories. The upstream Harbor package is not edited.

## Validation

- Unit tests: `evidence.test_observer_collection` and `evidence.test_browser_absent` pass (17), and `sweep_agents.test_task18_daytona` passes (2). The stale drift test now copies every runtime input the builder reads.
- Pre-existing failures in modules this fix does not touch: `test_browser_observer.test_export_and_download_receipts_remain_observed` (the runtime_capture JS journal) and `test_runtime_capture.test_completed_bytes_join_without_invented_exit_code`.
- Daytona nop run `task18-collect-nop-20260929` (no model inference, 6m16s): collection complete with no errors, the browser acknowledged as absent 5.1s after the request, both sidecar directories downloaded (database.dump with status complete, assets.tar), graded true, outcome valid, no refusals or measurement faults, exception null, reward 0 as expected for nop, no sandbox left.
- That run used the first form of the override. The probe raised and the suffix fallback did the classification. The final form probes as the service user, and its fallback is the path this run proved.

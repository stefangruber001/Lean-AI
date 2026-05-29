# QA & Handover Checklist

*Prove the system works, then hand the team a system they can run, monitor, and recover without us. Adoption is the product.*

This checklist governs Phases 4–7 of an Automation Sprint: testing, monitoring, documentation, training, ownership transfer, acceptance, and the 30-day support window. Nothing is "done" until the client can operate it unaided and has signed off on measured results.

```
Client:            __________________________________
Process / system:  __________________________________
Tested by:         Lean-AI (Founder)
Owner accepting:   __________________________________
```

---

## 1. QA — test cases

Test against **real cases**, not toy data. Record pass/fail and evidence.

| # | Test case | Expected result | Pass? | Evidence |
|---|---|---|---|---|
| 1 | Happy path — typical input end-to-end |  | Y/N |  |
| 2 | High-volume / batch |  | Y/N |  |
| 3 | Each human-in-the-loop gate fires correctly |  | Y/N |  |
| 4 | Approve / edit / reject paths all work |  | Y/N |  |
| 5 | Data writes land correctly in the system of record |  | Y/N |  |
| 6 | KPIs are captured and shown on the dashboard |  | Y/N |  |

---

## 2. QA — edge cases & failure modes

| # | Edge / failure case | Expected behaviour | Pass? |
|---|---|---|---|
| 1 | Missing / malformed input | Caught, routed to human, not silently dropped | Y/N |
| 2 | Ambiguous case | Escalated to human, never guessed | Y/N |
| 3 | Integration/API down | Graceful fail, alert fires, no data loss | Y/N |
| 4 | Duplicate / replayed trigger | Idempotent — no double-processing | Y/N |
| 5 | Rate limit / timeout | Retries safely, then alerts | Y/N |
| 6 | Personal/sensitive data appears unexpectedly | Handled per data policy; logged appropriately | Y/N |
| 7 | Rollback to manual process | Works as documented | Y/N |

---

## 3. Parallel-run reconciliation

- [ ] System and humans processed the same real cases over a defined period.
- [ ] Outputs compared; discrepancies investigated and resolved.
- [ ] Accuracy meets the agreed target; process owners agree the result is trustworthy.
- [ ] Parallel period dates and results recorded: __________

---

## 4. Monitoring & alerting

- [ ] Dashboard live, showing throughput, the success KPIs, and the exceptions queue.
- [ ] Alerts configured for failures, backlogs, and threshold breaches.
- [ ] Alerts route to a named client owner (not only to Lean-AI).
- [ ] Each alert verified by triggering it once.
- [ ] Logs are accessible to the owner and retained per the data policy.

---

## 5. Documentation

- [ ] **SOP** — how the team runs the new process day-to-day, per role (AI-drafted, founder-edited).
- [ ] **Runbook** — what to do when it breaks: common failures, recovery steps, who to contact, how to roll back.
- [ ] **Architecture note** — the as-built solution design (`46-solution-design-template.md`), updated to match reality.
- [ ] **Credentials & access map** — what accounts exist, where, who owns them.
- [ ] **Walkthrough videos** — short recordings per role.
- [ ] All documentation lives in the client's shared workspace, owned by them.

---

## 6. Training plan

| Audience | Format | Covers | Done? |
|---|---|---|---|
| Process owners / daily users | Live session + video | Run it, handle exceptions, read the dashboard | Y/N |
| The exception-handler(s) | Live walkthrough | The human-in-the-loop gates, judgment calls | Y/N |
| The owner / admin | Live walkthrough | Monitor, recover, manage access, the runbook | Y/N |

- [ ] Training delivered.
- [ ] Owner demonstrated they can run, monitor, and recover the system **unaided**.
- [ ] Open questions captured and answered.

---

## 7. Ownership transfer

- [ ] All accounts/keys are on the **client's tenancy**; Lean-AI access can be revoked without breaking anything.
- [ ] Named internal owner accepts responsibility for the system.
- [ ] Billing for any tooling is on the client's accounts.
- [ ] Lean-AI's standing access reduced to what the 30-day support window needs.

---

## 8. Acceptance / sign-off

- [ ] All test cases (Sections 1–2) pass or have agreed dispositions.
- [ ] Parallel run reconciled and accepted.
- [ ] **Measured result vs. baseline** documented:
  ```
  Hours/year:  before ______  →  after ______
  Cycle time:  before ______  →  after ______
  Error rate:  before ______  →  after ______
  € saved/yr:  ______
  ```
- [ ] Documentation and training complete; ownership transferred.
- [ ] Client signs acceptance.
- [ ] Accepted by: ______________  Date: __________
- [ ] Final invoice / balance triggered on acceptance.

---

## 9. 30-day post-launch support terms

Included with every Sprint. State these plainly to the client.

- **Window:** 30 calendar days from acceptance. Start: ______  End: ______
- **Covers:** fixing defects in the delivered scope; tuning prompts/thresholds/routing; answering operating questions; minor adjustments within the original scope.
- **Does not cover:** new scope, new processes, or new integrations (those are a change note, a new Sprint, or the Operating Partner retainer).
- **Response:** async within one business day (Lean-AI is part-time and async-first); urgent production failures prioritised.
- **At day 30:** report measured outcome vs. baseline; close out, or transition to **Operating Partner** for ongoing improvement.


# SOP — Automation Sprint

*How we take one process from broken to running — simplified with Lean, automated with AI agents, owned by the team — in 4–6 weeks and ~65 hours.*

This is the standard operating procedure for delivering an **Automation Sprint**: the core build offer. One end-to-end process is simplified, automated, instrumented, documented, and handed to a team that owns it. We do not advise; we ship a running system and hand over the keys.

**Offer facts (do not change):** Automation Sprint — €12,000 net of VAT, 4–6 weeks. Includes: one end-to-end process automated; AI agents + integrations built and deployed; team trained; dashboards; 30-day post-launch support.

---

## 1. Principles that govern every Sprint

1. **Lean before automation** — never automate a broken process. Simplify first.
2. **Adoption is the product** — the team must own it, not just receive it (servant leadership).
3. **Measure everything** — baseline before, instrument during, prove after.
4. **Human-in-the-loop** — the system proposes; a human approves where judgment, risk, or personal data is involved (EU-compliant).
5. **One active build at a time** — the WIP limit is sacred.

---

## 2. Roles

| Role | Who | Responsibility |
|---|---|---|
| Lead/builder | Founder | Scope, Lean design, build, testing, training, handover. |
| AI assist | Internal agents | Drafts SOPs, runbook, dashboard scaffolding, test cases; reuse from the template library. |
| Subcontractor (optional) | Retainer sub | Integrations, dashboard build, QA — only the templatable work. |
| Client sponsor | Client exec | Approves scope, unblocks access, owns the outcome internally. |
| Process owner(s) | Client staff | Validate target design, test with real cases, become the system owners. |

---

## 3. Time budget (~65 hrs)

| Phase | Hours |
|---|---|
| 0. Scope lock | 5 |
| 1. Lean simplification | 8 |
| 2. Solution design | 6 |
| 3. Build (agents + integrations) | 24 |
| 4. Human-in-the-loop testing | 9 |
| 5. Documentation + dashboards | 6 |
| 6. Training + handover | 5 |
| 7. 30-day support (reserve) | 2 |
| **Total** | **65** |

---

## 4. Phase-by-phase plan (4–6 weeks)

### Phase 0 — Scope lock (Week 1, ~5 hrs)

Most Sprints start from a Diagnostic, so the target is already named. Confirm and freeze it.

- [ ] Confirm **the one process** in scope and its boundaries (where it starts, where it ends).
- [ ] Confirm the **baseline metrics** (current hours/cycle time/error rate/cost — from the Diagnostic map).
- [ ] Confirm the **success metrics** and their targets (what "working" means, numerically).
- [ ] Confirm **constraints**: data protection, systems of record, who must stay in the loop.
- [ ] Lock scope in writing. Any change goes through a single, explicit change note — no scope creep.
- [ ] Verify access and accounts are in place (see `43-client-onboarding-checklist.md`).

### Phase 1 — Lean simplification (Week 1–2, ~8 hrs)

- [ ] Re-walk the current-state value-stream map with the process owners.
- [ ] Remove waste *before* writing any automation: eliminate steps, kill redundant approvals, fix hand-offs, standardise inputs.
- [ ] Agree the **simplified target process** on paper and get the process owners to sign off on it.
- [ ] Re-baseline: confirm the simplified manual process is already better than the start. **If Lean alone solved it, say so** — automate only what remains.

### Phase 2 — Solution design (Week 2, ~6 hrs)

- [ ] Complete `46-solution-design-template.md`: architecture (agents, integrations, data flow), tools chosen and why, **human-in-the-loop points**, security & data handling, KPIs, rollout plan, risks.
- [ ] Reuse from the **template library** wherever possible — each prior build is a parameterised head start.
- [ ] Get sponsor sign-off on the design before building.

### Phase 3 — Build (Week 2–4, ~24 hrs)

- [ ] Build against **real cases**, not toy data, from day one.
- [ ] Implement integrations to the systems of record; keep the system of record authoritative.
- [ ] Build AI agents with explicit **human approval gates** at the defined points.
- [ ] Instrument from the start: log every run, capture the metrics that prove success.
- [ ] Use EU-compliant tooling; offer closed/on-prem model options where data is sensitive.
- [ ] Commit work incrementally; demo a working slice to the client mid-build (async video).

### Phase 4 — Human-in-the-loop testing (Week 4–5, ~9 hrs)

- [ ] Run the full test suite from `47-qa-and-handover-checklist.md`.
- [ ] Test happy path, edge cases, and failure modes (bad input, API down, ambiguous case → human).
- [ ] Run a **parallel period**: system and humans process the same real cases; compare outputs.
- [ ] Process owners test with their own cases and sign off on accuracy.
- [ ] Confirm monitoring and alerting fire correctly on failure.

### Phase 5 — Documentation + dashboards (Week 5, ~6 hrs)

- [ ] Build the **dashboard(s)**: live view of throughput, the success KPIs, and exceptions needing a human.
- [ ] Write the **SOP** for the new process (AI-drafted, founder-edited) — how the team runs it day-to-day.
- [ ] Write the **runbook** — what to do when something breaks; who to call; how to recover.
- [ ] Record short walkthrough videos for each role.

### Phase 6 — Training + ownership handover (Week 5–6, ~5 hrs)

- [ ] Run the training session(s) per the training plan in `47-qa-and-handover-checklist.md`.
- [ ] Transfer all credentials and ownership to the client (their accounts, their data, their keys).
- [ ] Walk the runbook live; confirm the owner can run, monitor, and recover the system unaided.
- [ ] Obtain written **acceptance sign-off**.

### Phase 7 — 30-day post-launch support (Weeks 6–10, ~2 hrs reserve)

- [ ] Monitor the dashboards; respond to issues per the support terms in `47-qa-and-handover-checklist.md`.
- [ ] Tune thresholds and prompts based on real usage.
- [ ] At day 30: report measured outcome vs. baseline; close out or transition to **Operating Partner**.

---

## 5. Definition of done (Sprint)

A Sprint is done only when **all** of the following are true:

- [ ] The process is **simplified** and the simplified version signed off.
- [ ] The end-to-end automation is **deployed in production** on the client's accounts.
- [ ] Human-in-the-loop gates exist at every judgment/risk/personal-data point.
- [ ] All test cases (happy, edge, failure) pass; a parallel period was run and reconciled.
- [ ] Dashboards are live and show the success KPIs and exceptions.
- [ ] Monitoring and alerting are configured and verified.
- [ ] SOP and runbook are written and handed over.
- [ ] The team is trained; the owner can run/monitor/recover unaided.
- [ ] Credentials and ownership transferred to the client.
- [ ] **Measured result vs. baseline** is documented (hours/€/cycle time/error rate).
- [ ] Written client **acceptance** obtained.
- [ ] 30-day support window opened and dated.
- [ ] The reusable parts are folded back into the **template library**; founder hours logged.


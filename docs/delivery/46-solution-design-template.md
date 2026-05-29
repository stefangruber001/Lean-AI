# Solution Design Template

*The single document that turns a simplified process into a buildable, EU-compliant, measurable automation — agreed before a line is built.*

This is the design document for an Automation Sprint (Phase 2). It is filled in after the Lean simplification is signed off and before the build starts. It is the contract between intention and implementation: architecture, tools, human-in-the-loop points, data handling, KPIs, rollout, and risks — all in one place, sponsor-approved.

```
Client:            __________________________________
Process:           __________________________________
Design version:    ____   Date: __________
Author:            Lean-AI (Founder)
Approved by:       __________________________________  Date: __________
```

---

## 1. Problem & objective

```
The problem (in one paragraph, in the client's terms):
__________________________________________________________

What success looks like (one sentence, measurable):
__________________________________________________________

Baseline today (from the value-stream map):
  Hours/year: ______   Cost/year: € ______   Cycle time: ______   Error rate: ______ %
```

---

## 2. Target process

The simplified, signed-off target process from `44-value-stream-mapping-template.md`. Describe the end-to-end flow in plain language, step by step, marking which steps are automated and which keep a human.

```
1. __________________________________  [auto / human / human-in-loop]
2. __________________________________  [auto / human / human-in-loop]
3. __________________________________  [auto / human / human-in-loop]
4. __________________________________  [auto / human / human-in-loop]
```

---

## 3. Architecture

### 3.1 Components (fill in)

| Component | Type | Role in the flow |
|---|---|---|
|  | Agent / Integration / Trigger / Store / Dashboard |  |
|  |  |  |
|  |  |  |

### 3.2 AI agents

| Agent | Job | Inputs | Outputs | Model | Autonomy (proposes / acts-with-approval / acts) |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### 3.3 Integrations

| System | Direction | Method (API/webhook/file) | Auth | System of record? |
|---|---|---|---|---|
|  | read / write / both |  |  | Y/N |

### 3.4 Data flow

```
Describe or diagram the path of data from trigger → processing → human gate(s) → system of record → output.
Identify, at each hop: what data, where it lives, who/what can see it.
__________________________________________________________
```

---

## 4. Tools chosen & why

| Need | Tool chosen | Why this one | EU/data note |
|---|---|---|---|
| Orchestration |  |  |  |
| AI / agents |  |  | closed/on-prem option? |
| Storage |  |  |  |
| Dashboard |  |  |  |

> Keep the stack lean and low-cost (per `05-operating-model.md`). Prefer reuse from the template library. Justify each choice in one line.

---

## 5. Human-in-the-loop points

Every place a human approves, edits, or can override. Required wherever there is judgment, material risk, or a decision affecting a person (EU compliance).

| # | Point in the flow | Why a human is here | What they see | What they can do | SLA |
|---|---|---|---|---|---|
| 1 |  |  |  | approve / edit / reject |  |
| 2 |  |  |  |  |  |

Define the fallback: **what happens when the system is unsure** (route to human, hold, escalate) — never "guess and proceed."

---

## 6. Security & data handling

- [ ] **Personal data categories** processed: __________
- [ ] **AVV/DPA** reference: __________ (per onboarding)
- [ ] **Data residency** — where data is stored/processed (EU): __________
- [ ] **Sub-processors** used and approved: __________
- [ ] **Access control** — least privilege; credentials in secrets store, not in code.
- [ ] **Closed/on-prem model** used for sensitive data? Y/N — rationale: __________
- [ ] **Logging** — what is logged, where, retention period: __________
- [ ] **Retention & deletion** policy for processed data: __________
- [ ] **Auditability** — every automated decision is traceable to its inputs.

---

## 7. Success metrics / KPIs

| KPI | Baseline | Target | How measured | Shown on dashboard? |
|---|---|---|---|---|
| Hours/year saved |  |  |  | Y |
| Cycle time |  |  |  | Y |
| Error / rework rate |  |  |  | Y |
| Automation rate (% no human needed) |  |  |  | Y |
| € saved / year |  |  |  | Y |

These KPIs are the definition of "working" and the basis of acceptance.

---

## 8. Rollout plan

| Stage | What | Exit criteria |
|---|---|---|
| 1. Build on real cases |  | Slice working end-to-end |
| 2. Parallel run |  | Outputs reconciled vs. humans |
| 3. Pilot (limited volume) |  | Owners sign off on accuracy |
| 4. Full cutover |  | Monitoring live, runbook handed over |

State the **rollback plan**: how to revert to the manual process if needed.

---

## 9. Risks & mitigations

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|
|  | L/M/H | L/M/H |  |  |
|  |  |  |  |  |

Always include: data-quality risk, integration/API change risk, adoption risk, and compliance risk.

---

## 10. Sign-off

- [ ] Lean simplification signed off (precondition).
- [ ] Architecture and tools approved by sponsor.
- [ ] Human-in-the-loop and data handling approved (DPO if required).
- [ ] KPIs and targets agreed.
- [ ] Approved by: ______________  Date: __________


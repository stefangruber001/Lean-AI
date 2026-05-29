# Lean-AI — Business Process Flows

*The end-to-end flows that run the company — with human-in-the-loop checkpoints marked.*

These diagrams render automatically on GitHub. They describe how work moves through Lean-AI from first contact to cash and renewal. Each flow notes where a **human checkpoint (HC)** is mandatory — Lean-AI automates the drudgery but a human always reviews client-facing output and anything touching money or client data.

Related: `60-internal-automation-blueprint.md` (architecture), `62-ai-agent-prompt-library.md` (the agents), `workflows/` (importable n8n templates).

---

## 1. Lead → Cash (the master flow)

```mermaid
flowchart TD
  A[Inbound: website form / referral / network] --> B{Qualified vs ICP?}
  B -- No --> B1[Polite decline + add to nurture list]
  B -- Yes --> C[Auto-schedule 30-min fit call]
  C --> D[Fit call: diagnose pain, quantify cost]
  D --> E{Painful, repetitive,\nhigh-volume process?}
  E -- No --> B1
  E -- Yes --> F[Recommend The Diagnostic\n+ send proposal]
  F --> G{Diagnostic accepted?}
  G -- No --> N[Nurture / follow-up sequence]
  G -- Yes --> H[Sign SOW + invoice 100% upfront]
  H --> I[Deliver Diagnostic\nroadmap + business case]
  I --> J{Convert to Sprint?}
  J -- No --> K[Roadmap handed over;\nstay in touch]
  J -- Yes --> L[Sprint SOW + 50% deposit]
  L --> M[Deliver Automation Sprint]
  M --> O[Final invoice 50% on acceptance]
  O --> P{Attach Operating Partner?}
  P -- Yes --> Q[Retainer: monthly build + invoice in advance]
  P -- No --> R[30-day support, then case study + referral ask]
  Q --> R
```

**Human checkpoints:** fit call (HC), proposal review (HC), all deliverable sign-offs (HC), case-study approval (HC).

---

## 2. Fit-call & qualification flow

```mermaid
flowchart LR
  A[Form submission] --> B[Lead Qualifier agent\nenriches + scores vs ICP]
  B --> C[(CRM record created)]
  C --> D[Auto-send scheduling link\n+ short prep questions]
  D --> E[Fit call held]
  E --> F[Founder fills qualification scorecard]
  F --> G{Score >= threshold?}
  G -- Yes --> H[Proposal Drafter agent\ndrafts Diagnostic proposal]
  H --> I[[HC: founder reviews/edits]]
  I --> J[Send proposal + e-sign link]
  G -- No --> K[Send honest decline + resources]
```

---

## 3. Diagnostic delivery flow

```mermaid
flowchart TD
  A[Signed SOW + payment cleared] --> B[Onboarding: access, AVV, kickoff]
  B --> C[Intake questionnaire + documents]
  C --> D[Intake agent: structured first-draft findings]
  D --> E[Founder interviews process owners]
  E --> F[Value-stream map + AI-readiness scan\nAI-assisted draft]
  F --> G[[HC: founder validates & quantifies €/hrs]]
  G --> H[Prioritised opportunity backlog\neffort x impact]
  H --> I[Business case + 12-month roadmap]
  I --> J[[HC: final review]]
  J --> K[Readout call + written deliverable]
  K --> L[Recommend Sprint; credit Diagnostic fee]
```

---

## 4. Automation Sprint delivery flow

```mermaid
flowchart TD
  A[Scope lock: one process, target, metrics] --> B[Lean: remove waste,\ndesign target state]
  B --> C[Build: AI agents + integrations]
  C --> D[Test against real cases\nhuman-in-the-loop]
  D --> E{Passes QA + acceptance criteria?}
  E -- No --> C
  E -- Yes --> F[Document: SOPs + runbook]
  F --> G[Train the team]
  G --> H[Transfer ownership + dashboards]
  H --> I[30-day post-launch support]
  I --> J[Acceptance sign-off + final invoice]
```

---

## 5. Invoicing & dunning flow (the "automatic invoice" process)

```mermaid
flowchart TD
  A[Trigger: deposit due / milestone / monthly retainer] --> B[Generate invoice\n§14 UStG fields + sequential number]
  B --> C[[HC: founder approves invoice]]
  C --> D[Send to client + log due date]
  D --> E{Paid by due date?}
  E -- Yes --> F[Mark paid, update cashflow,\nbook for Steuerberater]
  E -- No --> G[Day +1: Zahlungserinnerung\nfriendly reminder]
  G --> H{Paid?}
  H -- Yes --> F
  H -- No --> I[Day +10: 1. Mahnung]
  I --> J{Paid?}
  J -- No --> K[Day +20: 2. Mahnung\n+ Verzug interest note]
  K --> L{Paid?}
  L -- No --> M[[HC: founder decides:\n3. Mahnung / Mahnverfahren]]
  J -- Yes --> F
  L -- Yes --> F
```

**Rule:** never start build work before the relevant deposit clears (see `../finance/50-invoicing-process.md`). The reminder/Mahnung cadence is automatable; the escalation at the end is always a human decision.

---

## 6. Content / authority engine flow

```mermaid
flowchart LR
  A[Engagement learning / metric / insight] --> B[Content Engine agent\ndrafts LinkedIn post + article]
  B --> C[[HC: founder edits for voice + truth]]
  C --> D[Schedule weekly artifact]
  D --> E[Publish on LinkedIn]
  E --> F[Repurpose: thread, newsletter, site article]
  F --> G[Inbound interest] --> H[Back to Lead -> Cash flow]
```

---

## 7. Internal build order (what to automate first)

Given the 10–15 hr/week budget, automate in this order — each step buys back time to build the next:

```mermaid
flowchart LR
  P1[1. Invoicing + dunning] --> P2[2. Proposal + contract/e-sign]
  P2 --> P3[3. Lead intake + scheduling]
  P3 --> P4[4. Diagnostic intake + first-draft findings]
  P4 --> P5[5. Status updates + content engine]
  P5 --> P6[6. Template/knowledge library compounding]
```

> Principle: Lean-AI runs on the exact systems it sells. Every internal automation is also a live demo and a case study.


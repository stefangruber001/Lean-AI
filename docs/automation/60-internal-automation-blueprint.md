# Lean-AI — Internal Automation Blueprint

*The operating system we run Lean-AI on — the same kind we sell. Our headline proof point.*

This is the architecture of Lean-AI's internal back office: the agents and workflows that let a part-time founder (~10–15 hrs/week) deliver a premium service. Every hour these systems remove is an hour returned to deep build work — and a credible number we publish ("X% of my delivery hours removed by my own agents," see `docs/05-operating-model.md` §3).

The method is the same arc we sell clients: **Map → Simplify → Build → Hand over.** We mapped our own value stream, removed the steps that don't earn their keep, and automated what's safe to automate — with a human in the loop wherever judgment or the client relationship is at stake.

> Companion files: process diagrams live in `docs/automation/61-process-flows.md`; the runnable n8n workflows live in `docs/automation/workflows/`; the agent prompts live in `docs/automation/62-ai-agent-prompt-library.md`; the stack and its setup live in `docs/automation/63-tooling-setup-guide.md`.

---

## 1. Design principles

These constrain every workflow below. They are also the principles we sell.

1. **Lean before automation.** We map and simplify a process before wiring it. No automating waste.
2. **Human-in-the-loop where it counts.** Anything that touches a client, money, a contract, or a judgement gets a founder checkpoint. The agent drafts; the founder approves.
3. **One orchestrator, many agents.** n8n is the spine; AI agents are called as steps, not as standalone bots. State lives in the CRM and the repo, never only in a chat window.
4. **Data minimisation by default.** We pass an agent only the fields it needs. Sensitive client data routes to closed-model/EU-hosted options (see `63`). No client data trains a public model without written consent.
5. **Everything becomes a template.** Each automation we build for ourselves or a client is parameterised and added to the library (§13). This is the compounding asset.
6. **Bounded, async-first.** Workflows produce drafts the founder edits in batches during the weekly rhythm — they do not demand real-time attention.

---

## 2. The system at a glance

```
                         ┌─────────────────────────────────────────────┐
   Inbound (site form,   │                   n8n                        │
   LinkedIn, referral) ──▶│  (orchestration spine — triggers, routing,  │
                         │   queues, approvals, logging)                │
                         └───┬───────────┬───────────┬──────────────┬───┘
                             │           │           │              │
                       ┌─────▼────┐ ┌────▼─────┐ ┌───▼────┐  ┌──────▼──────┐
                       │   CRM    │ │ AI agents │ │ Docs + │  │ Invoicing / │
                       │(pipeline,│ │ (Claude / │ │ e-sign │  │ bookkeeping │
                       │  state)  │ │  OpenAI)  │ │        │  │  (DACH)     │
                       └─────┬────┘ └────┬─────┘ └───┬────┘  └──────┬──────┘
                             │           │           │              │
                             └───────────┴─────┬─────┴──────────────┘
                                               │
                                  ┌────────────▼────────────┐
                                  │  Founder approval inbox  │
                                  │  (one place to review &  │
                                  │   release every draft)   │
                                  └─────────────────────────┘
```

The CRM holds pipeline state (stages 0–9 from `docs/sales/30-sales-playbook.md` §6). n8n watches for state changes and external triggers, calls the right agent, parks the output for founder review, and on approval pushes it onward (send email, generate contract, raise invoice). The **approval inbox** is the single pane of glass — most days, running Lean-AI is "review and release."

---

## 3. Core internal processes

Each process below lists: **Trigger · Steps · Agent/automation · Human-in-the-loop · Tools · Workflow file.** Workflow filenames are owned by another team and live in `docs/automation/workflows/`; we reference them by their stable names.

### 3.1 Lead intake → qualification → fit-call scheduling

- **Trigger:** Site contact-form submission, inbound email to `hello@lean-ai.com`, or a manually flagged LinkedIn/referral lead.
- **Steps:**
  1. n8n receives the form payload (or parses the inbound email) and creates a **Lead** (stage 0) in the CRM with raw fields.
  2. The **Lead Qualifier/Researcher agent** enriches: infers company size/industry, summarises the stated process and its likely €/year cost, and produces an ICP fit note plus any disqualifier flags (see playbook §2).
  3. n8n applies the scorecard threshold. If qualified, it offers a fit-call booking link and drafts a personal reply; if a clear disqualifier, it drafts an honest "not yet / not a fit" note for founder review.
  4. On the prospect booking, the calendar event syncs back; CRM moves to **Fit call booked** (stage 1).
- **Agent/automation:** Lead Qualifier/Researcher agent (prompt `62` §f); n8n routing + scheduling.
- **Human-in-the-loop:** Founder approves/edits every first reply before send — no auto-sent cold replies. Founder confirms qualification on borderline scores.
- **Tools:** Form endpoint, CRM, scheduling tool, Claude/OpenAI API, n8n.
- **Workflow:** `workflows/lead-intake-qualify.json`.

### 3.2 Proposal generation

- **Trigger:** CRM stage → **Qualified** (post-fit-call) with the process and quantified cost recorded.
- **Steps:**
  1. n8n pulls the qualified opportunity's fields (process, €/year cost, budget signal, timeline, data-sensitivity flags, Diagnostic credit if any).
  2. The **Proposal Drafter agent** produces a one-page, on-brand Diagnostic proposal (or a Sprint proposal post-Diagnostic, with the €4,500 credited). Prices are fixed: Diagnostic €4,500, Sprint €12,000, Operating Partner €3,500/mo.
  3. n8n renders the draft into the branded proposal template and parks it for review.
- **Agent/automation:** Proposal Drafter agent (prompt `62` §c); n8n templating.
- **Human-in-the-loop:** Founder reviews and edits before send — always. We never auto-send a proposal. Per playbook §1, we do not write free speculative Sprint proposals before a paid Diagnostic.
- **Tools:** CRM, document templating + e-sign tool, Claude/OpenAI API, n8n.
- **Workflow:** `workflows/proposal-generate.json`.

### 3.3 Contract + e-sign

- **Trigger:** Founder marks a proposal **accepted** in the CRM.
- **Steps:**
  1. n8n merges client + engagement fields into the correct contract template (Diagnostic, Sprint, or Operating Partner SOW), including IP-assignment-on-payment, confidentiality, and a DPA/AVV where personal data is processed (see `docs/05-operating-model.md` §6).
  2. The contract is sent for e-signature.
  3. On signature, n8n advances the CRM stage and triggers the invoice (§3.7): Diagnostic 100% before work; Sprint 50% deposit before any build.
- **Agent/automation:** Mostly deterministic templating (no generative agent on legal text); n8n + e-sign.
- **Human-in-the-loop:** Founder confirms the chosen template and any non-standard clause before send. **No work begins before payment clears** (operating contract rule §2 of `05`).
- **Tools:** Contract templates + e-sign, CRM, invoicing, n8n.
- **Workflow:** `workflows/contract-esign.json`.

### 3.4 Client onboarding

- **Trigger:** Deposit/payment cleared (webhook from invoicing) → CRM **Won**.
- **Steps:**
  1. n8n spins up the client's workspace: a folder structure, an intake questionnaire link, document-upload access, a shared status page, and a kickoff calendar hold.
  2. Sends a branded, founder-signed welcome with the questionnaire and what happens next.
  3. Registers the engagement in the work log that feeds status updates (§3.6).
- **Agent/automation:** n8n provisioning; welcome copy drafted by a light template (Client Status-Update writer can also seed the first note).
- **Human-in-the-loop:** Founder reviews the welcome before send and confirms the kickoff time.
- **Tools:** File storage, CRM, scheduling, email, n8n.
- **Workflow:** `workflows/client-onboarding.json`.

### 3.5 Diagnostic intake & first-draft findings

This is the engine of the Diagnostic offer and the most valuable internal agent.

- **Trigger:** Client submits the intake questionnaire and uploads documents/process artifacts.
- **Steps:**
  1. n8n collects the questionnaire + documents and routes them — sensitive data to the closed-model/EU path (see `63`).
  2. The **Diagnostic Intake & First-Draft Findings agent** produces a structured first draft: current-state summary, a value-stream sketch, an AI-readiness scan, a prioritised opportunity backlog (effort × impact), and a rough business case.
  3. The **Value-Stream/Process-Map & SOP generator** turns interview notes into a value-stream map and SOPs for the target state.
  4. Drafts land in the client workspace for the founder to interrogate, correct, and finish into the deliverable.
- **Agent/automation:** Diagnostic agent (prompt `62` §a) + Process-Map/SOP generator (prompt `62` §b); n8n routing.
- **Human-in-the-loop:** Heavy. These drafts are raw material, never client-facing as-is. The founder validates every number and recommendation — the diagnosis is the premium and stays with the founder (`05` §4).
- **Tools:** Form/intake, file storage, Claude/OpenAI API (+ closed-model path), n8n. See also `docs/delivery/40-sop-diagnostic.md`.
- **Workflow:** `workflows/diagnostic-intake-findings.json`.

### 3.6 Project status updates

- **Trigger:** Weekly schedule (retainer cadence block) or a build milestone reached.
- **Steps:**
  1. n8n assembles the founder's work-log entries and any metrics for the engagement.
  2. The **Client Status-Update writer** drafts the async update: progress, what's next, anything needed from the client, and outcome metrics where available.
  3. Parked for review; on approval, posted to the client status page and emailed.
- **Agent/automation:** Client Status-Update writer (prompt `62` §d); n8n scheduling + posting.
- **Human-in-the-loop:** Founder edits and approves before posting. Async-first by design — replaces most status calls (`05` §1).
- **Tools:** Work log, CRM, status page/email, Claude/OpenAI API, n8n.
- **Workflow:** `workflows/status-update.json`.

### 3.7 Invoicing + dunning

- **Trigger:** Contract signed (initial invoice), milestone reached (Sprint balance), monthly schedule (Operating Partner), or an overdue invoice detected.
- **Steps:**
  1. n8n raises the correct invoice in the DACH invoicing tool from the engagement record — VAT handling per the Kleinunternehmer/USt election in `docs/05-operating-model.md` §6.
  2. On overdue, the **Invoice/Dunning message drafter** produces a graduated, premium-toned reminder (gentle → firm) for founder review.
  3. Payment webhooks update the CRM and unlock downstream steps (onboarding, build start).
- **Agent/automation:** Deterministic invoice creation; Dunning drafter (prompt `62` §g) for the reminder copy only.
- **Human-in-the-loop:** Founder reviews every dunning message before send. Invoice line items are confirmed before issue.
- **Tools:** DACH invoicing/bookkeeping tool, CRM, email, Claude/OpenAI API, n8n.
- **Workflow:** `workflows/invoicing-dunning.json`.

### 3.8 Content production / repurposing

- **Trigger:** A learning logged during an engagement (a flagged note), or the weekly authority-content block.
- **Steps:**
  1. Founder flags a sanitised, client-anonymised insight in the work log.
  2. The **Content Engine agent** turns it into a LinkedIn post and/or a longer article in Lean-AI's voice, plus repurposed variants.
  3. Drafts parked for editing; on approval, scheduled/published.
- **Agent/automation:** Content Engine agent (prompt `62` §e); n8n scheduling.
- **Human-in-the-loop:** Founder edits and approves all content. **Client confidentiality is enforced** — no identifiable client detail without written consent (`05` §6, brand voice `06`).
- **Tools:** Work log, Claude/OpenAI API, LinkedIn/scheduling, n8n.
- **Workflow:** `workflows/content-engine.json`.

### 3.9 Bookkeeping capture

- **Trigger:** Inbound receipt/expense email, bank transaction, or issued invoice.
- **Steps:**
  1. n8n captures the document, extracts vendor/amount/date/VAT, and files it for the Steuerberater export.
  2. Categorises against a chart of accounts; flags anything ambiguous.
  3. Reconciles issued invoices against received payments; surfaces exceptions.
- **Agent/automation:** OCR/extraction + a light classification agent; n8n.
- **Human-in-the-loop:** Founder reviews flagged/ambiguous items monthly in the admin block; Steuerberater handles filing.
- **Tools:** Email, DACH bookkeeping tool, file storage, n8n. Keeps the ~0.5 hr/week admin block honest (`05` §2).
- **Workflow:** `workflows/bookkeeping-capture.json`.

### 3.10 Knowledge / template library

- **Trigger:** An engagement closes, or any reusable asset (workflow, SOP, agent prompt) is finalised.
- **Steps:**
  1. n8n prompts the founder to parameterise and tag the new asset.
  2. The asset is stored in the library with metadata (process type, industry, inputs/outputs, data-sensitivity).
  3. Future intake/proposal/build steps search the library first, so each new client reuses prior work.
- **Agent/automation:** Light tagging/summarisation agent; n8n; the repo + file storage as the store.
- **Human-in-the-loop:** Founder approves what enters the library and that it's properly anonymised. This library *is* the onboarding asset for the first hire (`05` §4).
- **Tools:** Repo, file storage, Claude/OpenAI API, n8n.
- **Workflow:** `workflows/template-library.json`.

---

## 4. How the pieces connect

The CRM pipeline is the backbone; n8n reacts to its stage changes and to external webhooks. Read the flow as a relay:

```
Form/email ─▶ [3.1 Intake/Qualify] ─▶ CRM: Qualified
                                          │
                                          ▼
                                  [3.2 Proposal] ─▶ (founder approves)
                                          │
                                          ▼
                                  [3.3 Contract+e-sign] ─▶ signed
                                          │
                                          ▼
                                  [3.7 Invoice] ─▶ paid ─▶ [3.4 Onboarding]
                                          │                      │
                                          ▼                      ▼
                                  [3.5 Diagnostic intake & findings]
                                          │
                                          ▼
                                  [3.6 Status updates] (weekly, until handover)
                                          │
                                          ▼
                          handover ─▶ [3.8 Content] + [3.10 Library]
                                          │
                                          ▼
                                  Sprint / Operating Partner attach
```

Cross-cutting throughout: **[3.7 Invoicing/dunning]** at each money event, **[3.9 Bookkeeping]** continuously, and **[3.10 Library]** at every finalised asset. The detailed swimlane diagrams for each of these are in `docs/automation/61-process-flows.md`.

---

## 5. Phased build order

You have ~10–15 hrs/week and cannot build all ten at once. Sequence by leverage: automate the steps that recur most and protect the WIP limit first. Each phase ships working before the next begins (we eat our own dog food on incremental delivery).

### Phase 0 — Foundation (week 1–2)
Stand up the spine before any agent. Set up n8n, the CRM with stages 0–9, the form endpoint, and the approval inbox. Wire the EU-data and secrets configuration from `63` now — retrofitting it later is the expensive path.

### Phase 1 — Get paid faster (weeks 2–4)
Automate the cash and commitment path, because it's the highest-frequency, lowest-judgement, money-critical work:
1. **Lead intake → qualify → schedule** (3.1)
2. **Proposal generation** (3.2)
3. **Contract + e-sign** (3.3)
4. **Invoicing + dunning** (3.7)

This compresses "interested lead → signed and paid" from days of admin into minutes of review.

### Phase 2 — Deliver in fewer hours (weeks 4–8)
Automate the delivery surface — the offer engine and the recurring client touchpoints:
5. **Diagnostic intake & first-draft findings** (3.5) — the biggest single hour-saver
6. **Client onboarding** (3.4)
7. **Project status updates** (3.6)

### Phase 3 — Compound and grow (week 8+)
Automate the assets that pay off over time:
8. **Knowledge/template library** (3.10)
9. **Content production/repurposing** (3.8)
10. **Bookkeeping capture** (3.9)

> Rule of thumb mirroring the operating contract (`05` §8): automate your own delivery before selling more, and if founder hours exceed 15/week for two weeks running, fix that with the next automation or a price rise — not by working more.

---

## 6. Governance, metrics & guardrails

- **One approval inbox.** Every agent output passes a founder checkpoint before anything client-facing, financial, or contractual goes out. No exceptions for proposals, contracts, invoices, dunning, status updates, or content.
- **Data handling.** Minimise fields passed to agents; route sensitive data to the closed-model/EU path; never enable training on client data without written consent (`05` §6). Every workflow logs what data it touched.
- **Secrets** live in n8n credentials / a secrets store, never in workflow JSON or the repo (see `63`).
- **Metrics we track on the system itself** (the dogfooding proof): % of delivery hours removed by agents; lead → fit-call and fit-call → paid-Diagnostic conversion (playbook §9); founder hours/week; admin hours/week. Publish the hours-removed figure as authority content.
- **Reliability.** Each workflow has a failure path to the founder, not a silent failure. Agents return structured output that n8n validates before it acts on it.

The point of all of it: a part-time founder delivers a premium, owned system to clients — and the best evidence that we can is that we run Lean-AI this way ourselves.


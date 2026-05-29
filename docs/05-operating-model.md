# Lean-AI — Operating Model

*How to run a premium service business in 10–15 hours a week without burning out.*

This is the most important document for your specific situation. A premium side business lives or dies on **time discipline**. The model below is engineered so that delivery is bounded, predictable, and increasingly automated.

---

## 1. The core mechanism: productized + WIP-limited

Three rules borrowed from the most successful solo productized firms (and, fittingly, from Lean itself):

1. **Fixed scope, fixed price.** No bespoke negotiation. Every engagement is one of three shapes (Diagnostic / Sprint / Operating Partner). This alone removes most of the hours that kill side businesses.
2. **Hard WIP limit.** **One active build at a time + up to ~2 retainers.** A queue forms behind it. This is a Kanban WIP-limit — and a premium scarcity signal. When the queue is full, the answer is "the next start date is X," not "yes, I'll squeeze it in."
3. **Async-first.** Minimise live meetings. Written briefs, recorded walkthroughs, and a shared workspace replace most calls. (Reference point: solo founders run $1M+ productized firms with *zero* client calls.)

> If you only implement one thing from this entire plan: **the WIP limit.** It protects the day job, the quality, and you.

---

## 2. Weekly operating rhythm (~12 hrs)

| Block | Hours | What |
|---|---|---|
| **Deep build** (2× sessions) | ~6 hrs | The active Sprint/Diagnostic work. Protected, calendar-blocked, no interruptions. |
| **Retainer cadence** | ~2 hrs | Async updates, monthly build increments, operating reviews. |
| **Sales & fit calls** | ~2 hrs | 2–3 fit calls; proposals (templated). |
| **Authority content** | ~1.5 hrs | One artifact, drafted with AI, edited by you. |
| **Admin / ops** | ~0.5 hr | Invoicing, pipeline, light bookkeeping — largely automated. |

Adjust the mix by phase: more sales early, more delivery once the pipeline is warm.

---

## 3. Eat your own dog food — internal AI leverage

The fastest way to deliver a premium service in few hours *and* prove your value is to run Lean-AI itself on the systems you sell. Build these internal agents/automations early; they are also your headline case study.

- **Intake agent** — turns a client questionnaire + documents into a structured first-draft assessment.
- **Process-map / SOP generator** — drafts value-stream maps and standard operating procedures from interview notes.
- **Proposal & scope drafter** — produces Diagnostic and Sprint proposals from a short brief, on-brand.
- **Client update agent** — drafts the weekly async status update from your work log.
- **Content engine** — turns each engagement's learnings into a publishable artifact.
- **Template library** — every automation built for a client becomes a reusable, parameterised template, so each new client reuses prior work. This is the compounding asset.

Internal benchmark to aim for and publish: *"X% of my delivery hours removed by my own agents."* Credible internal-dogfooding figures from large firms (IBM, Anthropic, Dell, BAE) show 30–85% process-time reductions — your own number, however modest, is more persuasive to an SME than any of theirs.

---

## 4. The first hire ("MB" or otherwise)

**Hire pattern:** a **flat-rate / retainer subcontractor**, not an hourly employee. They take defined queue items (builds, integrations, documentation) under a clear scope-of-work contract.

**When to hire:** only once a **retainer base reliably funds it** — i.e. ≥2 stable retainers, or a Sprint pipeline you cannot serve inside the WIP limit. Don't hire to create capacity you can't yet sell; hire to relieve capacity you've already sold.

**What to delegate first:** the most templatable, least-judgment work — integrations, dashboard build, documentation, QA. Keep client relationships, diagnosis, and method with the founder (that's the premium).

**Onboarding asset:** your SOP/template library *is* the onboarding. If it's good enough to hand to a subcontractor, it's good enough to be the product.

---

## 5. Delivery playbook per offer

### The Diagnostic (2–3 weeks, ~30 hrs)
1. Kickoff (1 call) → intake questionnaire + document access.
2. Shadow/interview the process owners (async + 1–2 short calls).
3. Value-stream map + AI-readiness scan (AI-assisted draft).
4. Prioritised opportunity backlog (effort × impact), business case, 12-month roadmap.
5. Readout (1 call) + written deliverable. Recommend the Sprint; credit the fee.

### Automation Sprint (4–6 weeks, ~65 hrs)
1. Confirm scope: one process, target state, success metrics.
2. Simplify (Lean) → design target flow.
3. Build agents + integrations against real cases; human-in-the-loop.
4. Test, document, build dashboards.
5. Train the team; transfer ownership; 30-day post-launch support.

### Operating Partner (monthly, ~15 hrs/mo)
- Rolling roadmap; one build increment/month; monthly operating review; continuous improvement; priority advisory.

---

## 6. Legal, tax & risk setup (Germany/DACH — general info, not legal/tax advice)

- [ ] **Employer permission in writing** before invoicing client #1. No clients that compete with your employer; deliver outside working hours.
- [ ] **Legal form:** start as **Einzelunternehmen** (or **Freiberufler** if the Finanzamt classifies the work as a liberal profession — confirm with a Steuerberater). Consider a **UG** later for liability limitation as revenue grows.
- [ ] **Registration:** Gewerbeanmeldung (if gewerblich) + "Fragebogen zur steuerlichen Erfassung," or just the Fragebogen for Freiberufler, within ~4 weeks of starting.
- [ ] **VAT (Kleinunternehmer 2025 rules):** exempt if prior-year turnover ≤ €25k and current-year forecast ≤ €100k; the moment running turnover hits €100k you switch to standard VAT for the next sale. **For B2B, opting into 19% USt is usually client-neutral and avoids a "cheap" signal** — weigh vs. admin simplicity.
- [ ] **Contracts:** clear scope-of-work, IP assignment to client on payment, confidentiality, data-processing terms (AVV/DPA where personal data is processed).
- [ ] **Insurance:** professional liability (Berufshaftpflicht) — advisable before first build.
- [ ] **Data protection:** EU-compliant tooling, clear data boundaries, documented data flows, option for closed/on-prem models for sensitive clients.

*Confirm legal form, Freiberufler-vs-Gewerbe classification, VAT election, and contract terms with a German Steuerberater/Rechtsanwalt before launch.*

---

## 7. Tooling stack (lean, low-cost)

| Need | Suggested (pick one, keep it simple) |
|---|---|
| Automation/orchestration | n8n (self-host or cloud) or Make |
| AI agents | Claude / OpenAI APIs; closed-model options for sensitive data |
| CRM / pipeline | A lightweight CRM or even a structured board to start |
| Proposals/contracts | Templated docs + e-sign |
| Invoicing/bookkeeping | A DACH-friendly tool (e.g. for Steuerberater export) |
| Site/forms | This repo + a form endpoint (Formspree/Netlify/own API) |

Keep total tooling well under a few hundred euros/month. Margin lives here.

---

## 8. The one-page operating contract with yourself

1. One active build at a time. Always.
2. Never start work before the deposit clears.
3. Recommend the Diagnostic — never write free proposals.
4. Price on value; show outcomes, not hours.
5. Publish one artifact a week.
6. If founder hours exceed 15/week for two weeks running → raise prices or pause intake. Do not hire your way out of a pricing problem.
7. Automate your own delivery before you sell automation.


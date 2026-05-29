# Client Onboarding Checklist

*From signed SOW to a clean kickoff — async-first, deposit-cleared, access-ready, expectations set.*

This checklist runs the gap between "they said yes" and "we start work." Get it right and the engagement is calm and fast; get it wrong and you burn hours chasing access. **No build work begins before the deposit clears.**

Use this for the Diagnostic, a Sprint, or a new retainer (skip the items that don't apply).

---

## 1. Contracts & money

- [ ] **SOW signed** — fixed scope, fixed price, dates, deliverables, acceptance criteria.
- [ ] **IP assignment** — IP transfers to the client on full payment (per `05-operating-model.md`).
- [ ] **Confidentiality / NDA** in place if the client requires one.
- [ ] **Deposit invoiced** — standard 50% upfront for Diagnostic/Sprint; retainer billed monthly in advance.
- [ ] **Deposit cleared** — confirmed in the bank, not just "sent." Work does not start before this.
- [ ] If converting from a Diagnostic: **€4,500 credit applied** to the Sprint invoice.
- [ ] Payment terms, VAT treatment, and remaining-balance schedule confirmed in writing.

---

## 2. Data protection & compliance (DACH/EU)

> *General operating practice, not legal advice. Confirm specifics with the client's DPO and your own counsel.*

- [ ] **AVV / DPA signed** where Lean-AI processes personal data on the client's behalf (Auftragsverarbeitungsvertrag).
- [ ] **Data inventory** — what personal/sensitive data the process touches; categories and volumes.
- [ ] **Data boundaries agreed** — what may leave the client's environment, what may not.
- [ ] **Tooling cleared** — EU-compliant tools selected; closed/on-prem model option confirmed for sensitive data.
- [ ] **Sub-processors listed** — any third-party services disclosed and approved.
- [ ] **Human-in-the-loop requirement** confirmed for any automated decision affecting people.
- [ ] **Retention & deletion** — how long we hold data and how it's deleted at close.

---

## 3. Access & accounts

- [ ] **Sponsor + process owners named**, with contact details and time zones.
- [ ] **Read access** to the systems in scope (start read-only; escalate only as needed).
- [ ] **Build accounts** created **on the client's tenancy** wherever possible (their keys, their data).
- [ ] **API keys / credentials** issued via a secure secrets channel — never email or chat.
- [ ] **Least privilege** — request only the scopes the work needs.
- [ ] **Sample/real data** access for testing arranged (with data-protection guardrails above).
- [ ] **Off-boarding plan noted** — how access will be revoked at close (see `48-client-offboarding.md`).

---

## 4. Communication setup (async-first)

- [ ] **Primary async channel** agreed (shared workspace / a single email thread / client Slack guest).
- [ ] **Response-time expectations** set both ways (e.g. async within one business day; we are part-time and async-first).
- [ ] **One recurring live touchpoint** booked (kickoff; readout/operating review) — minimise the rest.
- [ ] **Update rhythm** stated — short written status, AI-drafted, founder-signed.
- [ ] **Decision SLA** — how fast the client unblocks us (their speed is the schedule's main risk).

---

## 5. Shared workspace

- [ ] **Single source of truth** set up (shared drive/folder or repo) for briefs, maps, designs, deliverables.
- [ ] **Folder structure** created: `00-intake`, `01-maps`, `02-design`, `03-build`, `04-docs`, `05-deliverable`.
- [ ] **Intake questionnaire** issued (feeds the intake agent).
- [ ] **Document/access request list** issued.
- [ ] Client knows where everything will live and how to find it.

---

## 6. Kickoff agenda (1 live call, 30–45 min)

1. **Introductions & roles** (5 min) — sponsor, process owners, founder.
2. **The goal & scope** (10 min) — restate exactly what we're delivering and what we're not.
3. **How we work** (5 min) — async-first, WIP limit, one build at a time, written updates.
4. **The plan & dates** (5 min) — phases, key dates, the next live touchpoint.
5. **What we need from you** (10 min) — access, the questionnaire, interview slots, decision speed.
6. **Data protection** (5 min) — confirm boundaries and the human-in-the-loop stance.
7. **Q&A + next step** (5 min) — confirm the first deliverable and date.

---

## 7. Expectations to set explicitly

- We **build running systems**, not decks. The output is a working thing your team owns.
- We are **async-first and part-time** by design — that is how quality stays high and the price stays fixed.
- **Fixed scope, fixed price.** Changes go through a single explicit change note.
- **Lean before automation** — we may recommend fixing the process before automating it.
- **Adoption is the product** — your team's involvement in testing and training is not optional; it's how it sticks.
- **The schedule depends on your decision speed** — fast unblocking is the single biggest lever on the timeline.

---

## 8. Ready-to-start gate

Do not begin work until **all** are true:

- [ ] SOW signed.
- [ ] Deposit cleared.
- [ ] AVV/DPA in place where required.
- [ ] Access confirmed working.
- [ ] Kickoff held.
- [ ] Intake questionnaire returned (Diagnostic) / scope locked (Sprint).


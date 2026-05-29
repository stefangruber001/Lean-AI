# Lean-AI — Case Study Template

*Proof, told plainly: challenge → approach → what we built → measured outcomes → the client's words.*

A Lean-AI case study is evidence, not advertising. It follows the method arc (**Map → Simplify → Build → Hand over**), leads with a real number, and is honest about scope. Anonymise where needed — never over-claim results you can't show (`docs/06-brand-and-positioning.md`). Keep it to one to two pages. Get written client sign-off before publishing anything attributable.

---

## The template (fill the brackets)

> # [Headline outcome — e.g. "From 3 days to 20 minutes: rebuilding invoice intake for a 40-person [industry] company"]
>
> *[One-line subtitle: who they are and what changed.]*

### At a glance

| | |
|---|---|
| **Client** | [Company or "A [size]-person [industry] company in DACH"] |
| **Engagement** | [Diagnostic → Automation Sprint (+ Operating Partner)] |
| **Timeline** | [X weeks] |
| **Headline result** | [the single best number — e.g. ~70% manual effort removed] |

### The challenge

[1–2 short paragraphs. The painful, repetitive, high-volume process. What it cost them in time, errors, delay, or capacity. What they'd tried. Use their words for the pain where possible. Put a € or hours number on the starting point.]

### The approach — the Lean-AI Method

- **Map.** [What we mapped, with whom. The real end-to-end picture.]
- **Simplify.** [The Lean step — waste removed *before* automating. What we deliberately did not automate.]
- **Build.** [How we built done-with-you, then done-for-you. Where humans stayed in the loop. How data was handled.]
- **Hand over.** [Training, SOPs, sign-off. What "the keys" included — the system, the docs, the know-how. They own it.]

### What we built

[Plain description of the running system. Components, integrations, and the human-in-the-loop checks. Concrete, not buzzwordy — a reader should picture it working. A simple before/after diagram or screenshot is ideal where permitted.]

### Measured outcomes

| Metric | Before | After | Change |
|---|---|---|---|
| [Cycle time] | [3 days] | [20 min] | [↓ ~99%] |
| [Manual effort] | [N hrs/week] | [M hrs/week] | [↓ ~70%] |
| [Error / rework rate] | [X%] | [Y%] | [↓ ...] |
| [Payback] | — | — | [< 1 quarter] |

[One sentence on what the freed capacity now goes toward — the human upside.]

### In their words

> "[A specific, credible quote — what changed for the team, not generic praise. Ideally mentions ownership: 'our team runs it now.']"
> — [Name, Role, Company] *(or "[Role], [size]-person [industry] company")*

### The takeaway

[1–2 sentences. The transferable lesson — usually Lean-before-automation, measured outcomes, or adoption/ownership. End with a soft CTA: "If your team loses time to something like this, the Diagnostic is the honest first step."]

---

## Worked example — ILLUSTRATIVE ONLY

> **Note:** the following is a *fabricated, illustrative example* to demonstrate the format. It is **not a real Lean-AI client** and the figures are invented. Do not publish or cite it as a real result.

> # From 3 days to 20 minutes: rebuilding invoice intake for a 40-person fittings manufacturer
>
> *An illustrative example of how a Lean-first, AI-native rebuild removes repetitive work — and hands the team a system they own.*

### At a glance

| | |
|---|---|
| **Client** | A ~40-person manufacturing SME in DACH *(illustrative)* |
| **Engagement** | Diagnostic → Automation Sprint → Operating Partner |
| **Timeline** | ~7 weeks end to end |
| **Headline result** | Invoice intake cut from ~3 days to ~20 minutes; ~70% of manual effort removed |

### The challenge

Supplier invoices arrived by email and post in a dozen formats. Two people in finance re-keyed each one into the ERP, chased missing PO numbers by email, and reconciled by hand. A typical invoice took up to three days to clear, month-end was a scramble, and roughly 1 in 12 invoices needed rework. By their own estimate, the process consumed ~25 hours a week — close to **€55,000/year** in loaded time before counting late-payment friction.

### The approach — the Lean-AI Method

- **Map.** We sat with both finance team members and traced every invoice path, including the email chasing nobody had ever written down.
- **Simplify.** Before any AI, we removed three redundant approval steps and standardised how POs were referenced — cutting touches by a third on its own.
- **Build.** We built an intake workflow: an AI agent extracts and validates invoice data, matches it to POs, and posts clean records to the ERP. Exceptions route to a human for a quick check — finance signs off on what's automated and what isn't. Invoice data stayed within their environment per the data-handling plan agreed in the Diagnostic.
- **Hand over.** We trained the team, wrote the SOPs, and handed over the system and documentation. Finance runs it; we don't.

### What we built

A running intake-to-record pipeline: capture (email + scanned post) → AI extraction and validation → PO matching → human review of exceptions only → write-back to the ERP, with a simple dashboard showing throughput and exceptions.

### Measured outcomes

| Metric | Before | After | Change |
|---|---|---|---|
| Invoice cycle time | ~3 days | ~20 min | ↓ ~99% |
| Manual effort | ~25 hrs/week | ~7 hrs/week | ↓ ~70% |
| Rework rate | ~8% | ~2% | ↓ ~75% |
| Payback on the Sprint | — | — | < 1 quarter |

The freed capacity went into supplier-terms negotiation — work the team had never had time for.

### In their words

> "We expected a tool. We got a system our team actually runs. Month-end stopped being a fire drill."
> — Head of Finance, ~40-person manufacturing SME *(illustrative)*

### The takeaway

The win wasn't the AI — it was simplifying first, then automating only what was safe, and handing over something the team owns. *If your team loses time to a process like this, the Diagnostic is the honest first step.*


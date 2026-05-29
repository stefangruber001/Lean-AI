# Lean-AI

**The operating partner for the AI era** — a premium, AI-native operations studio for ambitious small and mid-sized companies.

This repository contains the **complete company-in-a-box** for Lean-AI: a premium website, a working invoice generator, importable automation workflows, and ~45 founding documents covering strategy, governance, legal, sales, delivery, finance, automation, and people.

**Start here:** [`docs/INDEX.md`](docs/INDEX.md) — the company handbook with reading paths for every situation.

---

## What's here

### Website (premium homepage)
A fast, dependency-free, fully responsive single-page site.

| File | Purpose |
|---|---|
| `index.html` | The homepage (semantic, accessible markup). |
| `styles.css` | Design system: ink + bone + restrained gold; Fraunces + Inter. |
| `script.js` | Scroll-reveal, sticky nav, mobile menu, contact form, footer year. |
| `assets/favicon.svg` | Brand mark. |
| `invoice.html` | **Working invoice generator** — branded, §14 UStG fields, VAT/Kleinunternehmer toggle, saves locally, prints to PDF. |

**Preview locally:**
```bash
python3 -m http.server 8000
# open http://localhost:8000  (and /invoice.html for the invoice tool)
```

**Deploy:** any static host works — GitHub Pages, Netlify, Vercel, Cloudflare Pages. No build step.

### Company handbook (`/docs`)
~45 documents, organised into eight sections. The full map with reading paths is in [`docs/INDEX.md`](docs/INDEX.md):

1. **Strategy & foundation** (`00`–`06`) — executive summary, business plan, market research, financial model, go-to-market, operating model, brand.
2. **Governance** (`governance/`) — charter, OKRs & roadmap, risk register.
3. **Legal & compliance** (`legal/`) — MSA, SOW templates, AGB, privacy policy, Impressum, AVV/DPA, NDA, subcontractor agreement, AI & data-handling policy. *Templates — review with a Rechtsanwalt.*
4. **Sales & marketing** (`sales/`) — playbook, fit-call script, proposals, pricing, outreach, content calendar, case study, one-pager & deck.
5. **Delivery** (`delivery/`) — SOPs per offer, onboarding, value-stream mapping, AI-readiness, solution design, QA/handover, offboarding.
6. **Finance** (`finance/`) — invoicing process, cashflow & bookkeeping, quote template.
7. **Automation** (`automation/`) — internal blueprint, process-flow diagrams, AI agent prompt library, tooling guide, and importable n8n workflows in `automation/workflows/`.
8. **People** (`people/`) — hiring plan & first-subcontractor role.

---

## Before you go live — personalise these placeholders

The site is built to be premium and ready; a few items need your real details:

- [x] **Founder section** (`index.html`, `#founder`): name + bio integrated (Stefan Gruber, from CV). **One step left:** save the headshot as `assets/founder.jpg` — the page already references it and shows it automatically once the file exists.
- [ ] **Contact email**: `hello@lean-ai.com` is used throughout — set up the inbox or change it.
- [ ] **Contact form**: currently client-side only (graceful acknowledgement). Wire it to a real endpoint (Formspree / Netlify Forms / your own API) — see the `TODO` in `script.js`.
- [ ] **Pricing**: figures (€4,500 / €12,000 / €3,500/mo) are market-validated but yours to confirm.
- [ ] **Legal/footer**: publish the Impressum (`docs/legal/24-impressum.md`) & privacy policy (`docs/legal/23-privacy-policy.md`) as live pages — legally required in Germany — and confirm contents with a Rechtsanwalt/Steuerberater. Fill every `[BRACKETED PLACEHOLDER]` in the legal templates.
- [ ] **Domain**: point `lean-ai.com` (or your chosen domain) at the host.
- [ ] **Automation**: import the `docs/automation/workflows/*.json` files into n8n and add your credentials (see `docs/automation/63-tooling-setup-guide.md`).

---

## Status

Website: complete and verified (all assets serve 200, markup balanced). Invoice generator + automation workflows: complete, JSON validated. Handbook: ~45 documents, v1.0, cross-checked for pricing/voice consistency and resolving internal links. Research is sourced; market-size figures are order-of-magnitude and all German legal/tax content is **general information, not legal or tax advice** — validate locally with a Rechtsanwalt/Steuerberater before launch.


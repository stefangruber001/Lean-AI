# Lean-AI — Tooling Setup Guide

*The lean stack that runs Lean-AI, how to stand it up, and how to keep it EU-safe and cheap.*

This is the practical build guide for the internal operating system described in `docs/automation/60-internal-automation-blueprint.md`. It follows the tooling direction in `docs/05-operating-model.md` §7: one orchestrator, AI agents via API, a lightweight CRM, templated proposals/contracts with e-sign, DACH-friendly invoicing/bookkeeping, and a site with a form endpoint — all kept **well under a few hundred euros a month**.

**Everything here is swappable.** The tools named are sensible, specific defaults, not lock-in. What matters is the *categories* and the *integration pattern*; pick equivalents that fit your data-protection posture and budget.

---

## 1. The stack by category

| # | Category | Default pick | Why | Rough cost/mo |
|---|---|---|---|---|
| 1 | Orchestration | **n8n** (self-hosted on an EU VPS, or n8n Cloud EU) | Open-source, self-hostable for full data control, fair pricing, strong HTTP/AI nodes. The spine. | €0 self-host (+VPS ~€6) / ~€20–24 cloud |
| 2 | AI agents | **Anthropic Claude API** + **OpenAI API** | Best-in-class drafting; pay-per-use, no seat fees. Two providers = routing + fallback. | ~€20–60 usage |
| 3 | Closed/sensitive-data model | **Azure OpenAI (EU region)** or **Mistral (EU)**; optional local model | EU residency + no-training guarantees for sensitive client data. | ~€0–30 usage |
| 4 | CRM / pipeline | **HubSpot Free** or an **Airtable/Baserow** board | Stages 0–9 (playbook §6) with a free/cheap tier; API for n8n. Baserow self-hosts in the EU. | €0 (Free) / ~€10–20 |
| 5 | Proposals + contracts + e-sign | **PandaDoc** or **Documenso** (open-source, self-host, eIDAS) | Templated docs + legally sound e-sign. Documenso keeps signing data in your EU instance. | €0 self-host / ~€19–35 |
| 6 | Invoicing + bookkeeping (DACH) | **lexware Office (lexoffice)** or **sevDesk** | German tax-ready, DATEV/Steuerberater export, e-invoice (ZUGFeRD/XRechnung), GoBD-compliant. | ~€8–17 |
| 7 | Site + form endpoint | **This repo** (static site) + **Formspree EU** or own API route | Already built (`index.html`); a form endpoint posts to n8n. | €0 / ~€0–9 |
| 8 | Email | **Domain mailbox** at an EU host (e.g. mailbox.org / IONOS) for `hello@lean-ai.com` | EU-hosted, sober, founder-signed. | ~€1–3 |
| 9 | File storage / workspace | **Nextcloud (EU/self-host)** or an EU object store | Client workspaces + the template library; EU residency. | €0 self-host (+VPS) / ~€5 |
| 10 | Scheduling | **Cal.com** (open-source, self-host) or Calendly EU | Fit-call + kickoff booking links; webhooks into n8n. | €0 self-host / ~€0–12 |
| 11 | Secrets | **n8n credentials store** + VPS env/`.env` (not in repo); optional **Infisical/Bitwarden** | Keys never live in workflow JSON or git. | €0 |

A self-hosted-leaning configuration lands around **€40–90/mo all-in**; a fully managed configuration around **€110–180/mo** — both comfortably under the ceiling. The TCO table is in §6.

---

## 2. Setup order (mirrors Phase 0 of the blueprint)

Stand up the spine and the safety configuration *before* any agent. Retrofitting data protection is the expensive path.

1. **Domain & email.** Point the domain's DNS at the EU mail host; create `hello@lean-ai.com`. Set SPF, DKIM, DMARC so outbound (proposals, dunning, updates) lands.
2. **VPS (if self-hosting).** Provision a small EU-region VPS (e.g. Hetzner, Frankfurt/Nuremberg). Lock it down: SSH keys only, firewall to 80/443, automatic security updates, a reverse proxy (Caddy/Traefik) with auto-TLS.
3. **n8n.** Install via Docker on the VPS (or sign up for n8n Cloud EU). Set a strong owner password + 2FA, enable encryption-at-rest for credentials, and put it behind the reverse proxy on a subdomain (e.g. `ops.lean-ai.com`).
4. **Secrets.** Store all API keys and tokens in the **n8n credentials store** (encrypted) — never in workflow JSON, never in the repo. Keep VPS-level secrets in an `.env` excluded by `.gitignore` (optionally Infisical/Bitwarden).
5. **CRM.** Create the pipeline with stages 0–9 and the minimum fields from `docs/sales/30-sales-playbook.md` §6 (including the **data-sensitivity flag** field). Generate an API token for n8n.
6. **Form endpoint.** Wire the site's contact form to post into n8n (Formspree EU webhook, or a direct `POST` to an n8n Webhook node). Test end-to-end into the CRM.
7. **AI APIs.** Create Anthropic + OpenAI keys; add the EU/closed-model provider (Azure OpenAI EU or Mistral EU). Store keys in n8n credentials. Set spend limits/budget alerts on each.
8. **Docs/e-sign.** Install Documenso (self-host) or set up PandaDoc; load the Diagnostic / Sprint / Operating Partner proposal and contract templates (IP-on-payment, confidentiality, DPA/AVV).
9. **Invoicing/bookkeeping.** Set up lexoffice/sevDesk, the chart of accounts, VAT election (per `05` §6), and the Steuerberater/DATEV export. Enable payment webhooks into n8n.
10. **Storage + scheduling.** Stand up Nextcloud (or object store) for client workspaces and the template library; deploy Cal.com (or Calendly EU) and connect its webhook to n8n.
11. **Approval inbox.** Pick the single place the founder reviews drafts (a CRM view, an n8n form, or a dedicated email folder) and route every agent output there. This is the one pane of glass (`60` §2).

Once 1–11 are live, build the workflows in the phased order from `60` §5 using the prompts in `62`.

---

## 3. How it integrates

n8n is the hub; everything else is a spoke it calls over API/webhook.

```
Form/Email ──webhook──▶ n8n ──API──▶ CRM (state)
                         │
                         ├─API──▶ Claude / OpenAI / EU model  (agents from `62`)
                         ├─API──▶ Docs + e-sign               (proposals, contracts)
                         ├─API──▶ Invoicing/bookkeeping        (invoices, dunning, DATEV)
                         ├─API──▶ Storage                      (client workspace, library)
                         ├─API──▶ Scheduling                   (fit-call/kickoff links)
                         └──────▶ Approval inbox               (founder review → release)
                         ▲
        webhooks back ───┘  (booking made, contract signed, payment cleared)
```

- **Triggers in:** form submissions, inbound email, scheduling/e-sign/payment webhooks, and CRM stage changes.
- **Agents as steps:** n8n calls the model with a prompt from `62`, validates the structured (often JSON) output, and routes it — it never acts on an unvalidated agent response.
- **State of record:** the CRM holds pipeline state; the repo + storage hold the template library. No process lives only inside a chat window.
- **Human gate:** every client-facing, financial, or contractual output stops at the approval inbox before release.

---

## 4. Security & data-protection configuration

This is non-negotiable and is itself part of the premium — we sell EU-compliant, human-in-the-loop systems, so we run one.

**Data residency**
- Host n8n, storage, CRM (if self-hosted), e-sign (Documenso), and email in the **EU**. Choose EU regions explicitly on every managed service.
- Route **sensitive client data** to the EU/closed-model path (Azure OpenAI EU region or Mistral EU; optionally a local model). General, non-sensitive drafting can use the standard Claude/OpenAI APIs. The Lead Qualifier and Diagnostic agents must honour the **data-sensitivity flag** to pick the path.

**No training on client data**
- Use API tiers/contracts that **do not train on submitted data** (enterprise/commercial API terms; Azure OpenAI's no-training default). Never enable training/improvement features on client inputs without **written consent** (`05` §6).

**Data minimisation**
- Pass each agent only the fields it needs (the prompts in `62` are scoped accordingly). Redact names/IDs where the task doesn't require them. Log what data each workflow touched.

**Secrets & access**
- All keys in the n8n encrypted credentials store or a secrets manager — never in workflow JSON or git. Add `.env`, exported workflow JSON with creds, and any key material to `.gitignore`.
- Rotate API keys on a schedule; set per-key spend limits.
- 2FA on every account (email, CRM, invoicing, AI providers, VPS). SSH-key-only on the VPS; least-privilege API tokens (read-only where possible).

**Compliance hygiene**
- Maintain a short **record of processing** and the **data-flow map** (`05` §6) — the same artifact we produce for clients.
- Sign DPAs/AVVs with every processor (AI providers, hosting, e-sign, invoicing).
- Encrypted backups of n8n, CRM, and storage in the EU; test a restore.
- Every workflow has a failure path to the founder — no silent failures.

---

## 5. Cost-control practices

- **Pay-per-use AI, no seats.** API usage scales with real work, not headcount. Set budget alerts.
- **Prefer self-host where it's cheap and EU-clean** (n8n, Documenso, Baserow, Nextcloud, Cal.com on one small VPS). One VPS can host several of these.
- **Stay on free/low tiers** until volume justifies more (HubSpot Free, Formspree free tier).
- **Cache and template.** Reuse library assets (`60` §3.10) so agents do less from-scratch generation.
- **One ceiling:** if monthly tooling drifts toward a few hundred euros, consolidate. Margin lives here (`05` §7).

---

## 6. Total cost of ownership

Two representative configurations. Currency EUR/month, approximate.

| Category | Lean self-host | Managed convenience |
|---|---|---|
| VPS (hosts n8n, Documenso, storage, Cal.com) | 6 | — |
| Orchestration (n8n) | 0 (self-host) | 24 (Cloud EU) |
| AI agents (Claude + OpenAI usage) | 30 | 50 |
| EU/closed model (Azure OpenAI EU / Mistral) usage | 10 | 20 |
| CRM | 0 (HubSpot Free / Baserow) | 18 |
| Proposals + contracts + e-sign | 0 (Documenso self-host) | 30 |
| Invoicing + bookkeeping (lexoffice/sevDesk) | 9 | 17 |
| Site + form endpoint | 0 | 9 |
| Email (EU host) | 2 | 3 |
| Storage / workspace | 0 (self-host) | 5 |
| Scheduling | 0 (Cal.com self-host) | 12 |
| Secrets manager | 0 | 0 |
| **Total** | **~€67/mo** | **~€188/mo** |

Both sit **well under a few hundred euros a month**. Start lean self-hosted; trade money for time on a service only once the hours saved clearly exceed the fee.

> Reminder: tools are swappable. Hold the line on the *pattern* — one orchestrator, agents via API, EU residency for sensitive data, human-in-the-loop on everything client-facing, and a hard cost ceiling — and you can change any individual product without re-architecting.


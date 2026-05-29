# Lean-AI — AI Usage & Data-Handling Policy

*How we use AI responsibly and keep your data safe. A client-facing trust document and our internal standard.*

---

> **Important — this is a TEMPLATE / general standard, not legal advice.** This document describes Lean-AI's intended practices and is general information only. It must be reviewed and aligned with your actual tools, contracts and a German lawyer's (Rechtsanwalt) and, where relevant, tax adviser's (Steuerberater) advice before being relied upon contractually. Replace `[BRACKETED PLACEHOLDERS]` with your verified tools and details. Where this policy and a signed AVV or SOW differ, the signed documents prevail.

**Owner:** `[ROLE]` — hello@lean-ai.com · **Version:** `[VERSION]` · **Last updated:** `[DATE]`

---

## Why this exists

The most common question we hear is simple: *"Is our data safe if you bring AI into our operations?"* This policy is our straight answer. As the operating partner for the AI era, we build running systems with AI agents — and we treat your data as something we are trusted to protect, not to exploit. This document sets the rules our work follows, so you can see exactly how your information is handled.

## 1. Principles

1. **Data minimisation.** We use the least data needed for the task. Personal and sensitive data is redacted, omitted or replaced with sample/synthetic data wherever the work allows.
2. **No training on your data without consent.** We do not allow your data to be used to train third-party AI models. We select providers and settings that contractually exclude training on inputs/outputs, and we never opt your data into model training without your explicit, documented consent.
3. **EU-compliant and closed-model options for sensitive data.** For confidential or personal data, we default to EU-hosted and/or closed (non-training, enterprise) model configurations and avoid sending such data to consumer-grade tools.
4. **Human-in-the-loop.** AI assists; people decide. A responsible human reviews AI outputs before they drive consequential actions. We do not deploy fully autonomous decisions with legal or significant effects (consistent with Art. 22 GDPR).
5. **Transparency.** We document which models, providers and data flows a system uses, and we explain them to you in plain language. No black boxes you cannot inspect.
6. **You stay in control.** Your data remains yours. You can see what is processed, restrict it, and have it deleted or returned on request.

## 2. Data classification & handling rules

We classify data and apply matching rules:

| Class | Examples | Handling rule |
|---|---|---|
| **Public** | Marketing copy, published material | May be used freely with any approved tool. |
| **Internal** | Process docs, non-sensitive operational data | Approved tools only; no public/consumer AI tools. |
| **Confidential** | Business data, personal data (Art. 4 GDPR), contracts | EU-hosted / closed-model, non-training configuration; minimise and pseudonymise; access on need-to-know. |
| **Restricted** | Special-category data (Art. 9 GDPR), secrets, credentials | Avoid sending to any LLM; if unavoidable, only with explicit client instruction, strict controls and a documented basis. Secrets are never sent to AI tools. |

When in doubt, data is treated at the higher classification.

## 3. Model and provider selection

- We use reputable AI/LLM providers under enterprise/business terms that (a) disable training on customer data, (b) offer EU data residency or appropriate Chapter V GDPR transfer safeguards, and (c) support an Art. 28 GDPR processing agreement.
- For Confidential/Restricted data we prefer EU-hosted or self-/privately-hosted models and providers that offer zero-retention or short-retention options.
- Current approved providers and their roles are tracked in the relevant AVV (`25-data-processing-agreement-avv.md`, Annex 3) and reviewed at least `[annually]`. Examples: `[EU-HOSTED LLM API], [ENTERPRISE LLM PROVIDER], [EU AUTOMATION PLATFORM]`.
- Adding a new AI/LLM provider for a client follows the sub-processor approval process in the AVV.

## 4. Prompt & output handling

- **Prompts:** We minimise what goes into a prompt. We strip identifiers and sensitive fields not needed for the task, and we never paste secrets or credentials into prompts.
- **Outputs:** AI outputs are treated as drafts until a human reviews them. We check for accuracy, bias and inappropriate disclosure before outputs are used in production.
- **Logging:** Prompt/response logs, where kept for debugging or quality, follow the retention rules in Section 6 and are access-controlled. Client data in logs is minimised.
- **Provider retention:** We configure providers, where available, for zero or short input/output retention and no human review of your data.

## 5. Secrets management

- API keys, passwords, tokens and other secrets are stored in a dedicated secrets manager / vault (`[TOOL]`), never in source code, prompts, spreadsheets, chat messages or model context.
- Secrets are scoped to least privilege, rotated `[periodically / on offboarding]`, and revoked when an engagement ends.
- Client-issued credentials are returned or revoked on hand-over.

## 6. Retention & deletion

- We retain client data only as long as needed for the engagement or as required by law (e.g. tax/accounting retention).
- On request or at the end of an engagement, we delete or return client data and delete copies (including from AI tool contexts and logs we control), subject to legal retention duties — as set out in the AVV.
- We prefer providers offering zero/short retention for prompt and output data involving client information.

## 7. Security measures

- Encryption in transit (TLS) and at rest; multi-factor authentication; role-based, least-privilege access; per-client separation of environments.
- Reputable hosting with backups and restore testing; audit logging of relevant access and changes.
- Vendor due diligence before adopting a tool; Art. 28 agreements with processors; an incident-response process with prompt breach notification to affected clients (see AVV Section 7).
- Regular review and updating of these measures in line with the state of the art (the full list lives in the AVV TOMs, Annex 2).

## 8. Responsible-AI commitments

- We assess AI use for accuracy, fairness and potential harm, and we design systems with human oversight and clear fallback/escalation paths.
- We are transparent about AI's limitations: outputs can be wrong or incomplete, and we do not present them as guaranteed.
- We design with applicable obligations in mind, including the EU AI Act risk-based approach, and we flag any use case that may be high-risk for joint review.

## 9. How clients stay in control

- **Visibility:** You receive documentation of which models/providers and data flows your system uses.
- **Choice:** You can require EU-only processing, exclude specific providers, or set stricter data classes — and we honour it.
- **Consent gates:** Anything beyond agreed processing (e.g. a new tool, or any training use) requires your explicit approval.
- **Portability & exit:** You own your configurations and data; on hand-over you keep the running system and can operate it independently.
- **Deletion on demand:** Ask, and we delete or return your data per Section 6 and the AVV.

## 10. Internal compliance

This policy is binding on everyone working on Lean-AI engagements, including subcontractors, who must agree to equivalent obligations. Breaches are addressed promptly. Questions or concerns: hello@lean-ai.com.

---

*End of document. Align with your actual tools and have a Rechtsanwalt review before relying on it contractually.*


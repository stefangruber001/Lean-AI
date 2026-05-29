# Lean-AI — Invoicing Process

*From accepted offer to cash in the account, the German way — automated where it counts.*

> **General information, not tax or legal advice.** German invoicing law (§14 UStG) and VAT rules are summarised here for working use. Confirm your specific posture — especially Kleinunternehmer status and §14 compliance — with a **Steuerberater** before sending invoice #1. And get **written employer permission** before invoicing your first client.

---

## 1. When and what to invoice, per offer

All prices are **net of VAT**. See VAT handling in §4.

| Offer | Trigger to invoice | Amount | Terms |
|---|---|---|---|
| **The Diagnostic** (from €4,500) | On signed acceptance, **before work starts** | 100% upfront | Net 14; work begins when payment clears |
| **Automation Sprint** (from €12,000) | (a) on acceptance; (b) on written acceptance of deliverable | 50% deposit / 50% on acceptance | Net 14 each; **build does not start before the deposit clears** |
| **Operating Partner** (from €3,500/mo) | Start of each month, **in advance** | Monthly, quarterly minimum | Net 14; monthly in advance |

**Core rules**
- **Never start delivery before the deposit clears.** This is the single biggest working-capital protection for a part-time founder.
- The Diagnostic fee is **fully creditable** toward a Sprint. If a client converts, the Sprint's first invoice shows the Diagnostic credit as a line item (see worked example).
- Retainers bill the **quarterly minimum** even if a month is light — that is what makes the revenue predictable.

---

## 2. The mandatory content of a German invoice (Pflichtangaben, §14 UStG)

Every full invoice **must** contain all of the following. Missing fields can cost the client their input-tax deduction and make the invoice non-compliant.

1. **Full name and address of the supplier (you)** — `[LEAN-AI LEGAL NAME]`, `[FOUNDER NAME if Einzelunternehmen]`, `[STREET, POSTCODE, CITY]`.
2. **Full name and address of the recipient (the client).**
3. **Your tax number (Steuernummer) *or* VAT ID (USt-IdNr.).** A USt-IdNr. is required for cross-border EU B2B (reverse charge).
4. **Invoice date (Rechnungsdatum / Ausstellungsdatum).**
5. **A unique, sequential invoice number (Rechnungsnummer)** — see §3.
6. **Quantity and type / standard description of the service supplied** (e.g. "Automation Sprint — process X, fixed scope per Angebot AG-2026-014").
7. **Date / period of supply (Leistungsdatum / Leistungszeitraum)** — the date or period the service was performed (may state "identical to invoice date" only if true).
8. **Net amount, broken down by applicable VAT rate** (the consideration / Entgelt).
9. **The applicable VAT rate (19%) and the VAT amount in EUR** — *or*, if Kleinunternehmer, the exemption note (see §4).
10. **Any agreed reduction of consideration** (discount / Skonto / credit) not already in the price.
11. **Gross total.**

**Additional / situational fields**
- For **reverse charge** (EU B2B with valid USt-IdNr.): both parties' VAT IDs + the note **"Steuerschuldnerschaft des Leistungsempfängers" (reverse charge)**; no German VAT charged.
- **Small invoices** under €250 gross (Kleinbetragsrechnung) have reduced requirements, but Lean-AI invoices are well above this — always issue full invoices.
- **Payment terms / due date** and **bank details (IBAN/BIC)** are not strictly §14 fields but are operationally essential — always include them.

---

## 3. Numbering

- Numbers must be **unique and follow a logical, gap-controlled sequence** (gaps are permitted but must be explainable; a clean run is simpler).
- Recommended scheme: **`RE-YYYY-NNN`** (e.g. `RE-2026-001`). Reset the sequence each calendar year only if you keep the year prefix.
- One series only. Never reuse a number, never edit a sent invoice — **issue a corrective invoice (Stornorechnung/Korrektur)** referencing the original number instead.

---

## 4. VAT handling — Kleinunternehmer vs. 19% USt

Two postures; decide early and state it on every invoice.

**Kleinunternehmer (§19 UStG), 2025 rules**
- Eligible if **prior-year turnover ≤ €25,000 AND current-year forecast ≤ €100,000.**
- You charge **no VAT** and add the note: *"Gemäß §19 UStG wird keine Umsatzsteuer berechnet."*
- No input-tax deduction for you; simpler bookkeeping.

**Standard taxation — 19% USt (recommended for Lean-AI)**
- For **B2B clients this is usually neutral** — they reclaim the 19% as input tax — and it avoids the "small/cheap" signal that undercuts a premium brand.
- You charge 19%, show it as a separate line, file regular Umsatzsteuer-Voranmeldung, and may deduct input tax on your own costs.

> Recommendation, consistent with the financial model: **opt for standard 19% USt taxation.** The premium positioning and B2B audience make the Kleinunternehmer signal a liability, not a saving. Confirm with your Steuerberater. Figures throughout Lean-AI docs are **net of VAT** regardless of posture.

---

## 5. Sending

- Send as a **PDF** (or compliant e-invoice / XRechnung-ZUGFeRD where the client requires it — increasingly relevant for B2B/public-sector in Germany; confirm format with the client).
- Email from `[INVOICING EMAIL]` with a short, branded covering note: invoice attached, due date, IBAN, and a thank-you.
- **Retention:** keep all issued invoices for **10 years** (German retention period). Store immutably; never overwrite.

---

## 6. Payment tracking

- Maintain an **AR (accounts-receivable) view**: invoice no., client, amount, issue date, due date, status (sent / paid / overdue), paid date.
- Reconcile against the **business bank account** at the monthly money routine (see `51-cashflow-and-bookkeeping.md`).
- Status flips to **overdue** the day after the net-14 due date.

---

## 7. Dunning process (Mahnwesen)

German practice escalates politely but firmly. After the due date passes:

| Step | Timing (from due date) | Tone / content |
|---|---|---|
| **Zahlungserinnerung** (friendly reminder) | ~+3 to +7 days | "Perhaps this slipped through — kindly settle by [date]." No fees. |
| **1. Mahnung** | ~+10 to +14 days | Clear request, new deadline, reference invoice. |
| **2. Mahnung** | ~+10 days after 1st | Firmer; note that Verzug (default) interest applies. |
| **3. Mahnung** (final) | ~+10 days after 2nd | Final deadline before further steps (Mahnbesched / collection). |

**Verzug (default) and interest**
- A B2B debtor is generally **in default (Verzug) at the latest 30 days after the invoice is due and received** — or earlier if a payment date was agreed (your net-14 due date can establish this).
- For B2B, statutory default interest is **base rate + 9 percentage points**, plus a **€40 flat collection lump sum (Verzugskostenpauschale)** may be claimed.
- Use Verzug interest sparingly with clients you want to keep — but **always** for clear non-payers.

> Prevention beats dunning: 100%/50% upfront means a defaulting client can only ever owe the back half. Don't deliver the final acceptance work or the next retainer month while an invoice is overdue.

---

## 8. Mapping to an automated workflow

This whole chain should run on Lean-AI's own systems (see `docs/automation/` — eat your own dog food). Target design:

- **Trigger:** offer marked "Accepted" in the CRM / pipeline → generates the deposit invoice from a template (correct §14 fields, next sequential number, current VAT posture).
- **Send:** invoice agent emails the branded PDF and logs it to the AR view.
- **Reconcile:** bank-feed match (or manual confirm) flips status to **Paid** and notifies you; only then does the "build start" task unlock.
- **Dunning ladder:** a scheduled job watches due dates and auto-drafts Zahlungserinnerung → 1./2./3. Mahnung for your one-click approval (never fully auto-send to a client — keep a human gate).
- **Month-end:** export of all issued invoices + categorised transactions for the Steuerberater (see `51-cashflow-and-bookkeeping.md`).

This is also a headline internal case study: *"My invoicing-to-cash runs itself."*

---

## 9. Worked example — invoice layout (Sprint deposit)

> Replace every `[BRACKET]`. This is a layout illustration, not legal certification of your specific case.

```
LEAN-AI
[Founder Name] · [Street] · [Postcode City] · [Country]
USt-IdNr.: [DE...........]   ·   Steuernummer: [...]

----------------------------------------------------------------

Rechnung an / Bill to:
[Client Company GmbH]
[Street]
[Postcode City]
[Country]
USt-IdNr. des Kunden: [DE...........]   (if EU cross-border)

Rechnungsnummer:   RE-2026-014
Rechnungsdatum:    2026-05-26
Leistungszeitraum: Automation Sprint, Start 2026-06-02 (per Angebot AG-2026-014)
Zahlungsziel:      Net 14 — fällig bis 2026-06-09

----------------------------------------------------------------

Pos. | Leistung                                          | Netto
-----+---------------------------------------------------+-----------
 1   | Automation Sprint — Prozess [X], Festumfang       | €12.000,00
     | Anzahlung 50 % (Restzahlung bei Abnahme)          |
     | abzgl. Diagnostic-Gutschrift (RE-2026-009)        | – €4.500,00
-----+---------------------------------------------------+-----------
     | Zwischensumme Anzahlung 50 % von (€12.000 net)    |  €6.000,00
     | abzgl. anrechenbare Diagnostic-Gutschrift         | – €4.500,00
-----+---------------------------------------------------+-----------
     | Nettobetrag                                       |  €1.500,00
     | zzgl. 19 % USt                                    |    €285,00
-----+---------------------------------------------------+-----------
     | RECHNUNGSBETRAG (brutto)                          |  €1.785,00

----------------------------------------------------------------

Zahlbar ohne Abzug bis 2026-06-09 auf:
Kontoinhaber: [Founder Name] · IBAN: [DE.. .... ....] · BIC: [.......]
Verwendungszweck: RE-2026-014

Vielen Dank für Ihr Vertrauen.
[Optional Kleinunternehmer-Variante: "Gemäß §19 UStG wird keine Umsatzsteuer berechnet."]
```

> Note in the example: the Diagnostic credit is applied as a discount line. Decide with your Steuerberater whether to credit against the **deposit** (as shown) or the **final** invoice; either is defensible if consistent and clearly shown.


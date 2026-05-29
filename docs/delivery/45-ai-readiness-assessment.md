# AI-Readiness Assessment Template & Scoring Rubric

*Score where a client really stands across seven dimensions, then turn the scores into honest, sequenced recommendations.*

This is the AI-readiness half of the Diagnostic. It is deliberately blunt: readiness is not about enthusiasm, it's about data, tooling, process maturity, skills, security/compliance, leadership buy-in, and change readiness. A high score means we can build fast; a low score tells us what to fix first. **Honesty here is the marketing** — we say plainly when a client is not ready to automate.

---

## 1. The seven dimensions

| # | Dimension | What we are assessing |
|---|---|---|
| 1 | **Data** | Is the data that the process needs available, accessible, structured, and accurate enough to act on? |
| 2 | **Tooling** | Do the systems of record expose APIs/integrations? Is the stack modern enough to build on? |
| 3 | **Process maturity** | Is the process defined, repeatable, and stable — or ad hoc and tribal? |
| 4 | **Skills** | Can the team operate, monitor, and trust an AI-assisted system after handover? |
| 5 | **Security & compliance** | Is there a path to EU-compliant, human-in-the-loop automation for this data? |
| 6 | **Leadership buy-in** | Is there an executive sponsor who will fund, unblock, and back adoption? |
| 7 | **Change readiness** | Will the team actually adopt it, or quietly route around it? |

---

## 2. Scoring scale (0–4)

Score each dimension on this scale. Use evidence from intake and interviews, not impressions.

| Score | Label | Meaning |
|---|---|---|
| 0 | Absent | Blocker. Must be addressed before any automation is viable. |
| 1 | Early | Significant gaps; high risk if we build now. |
| 2 | Developing | Workable with effort and guardrails; partial readiness. |
| 3 | Ready | Solid foundation; build can proceed with normal care. |
| 4 | Strong | A genuine asset; accelerates the build. |

---

## 3. Scoring table (fill in)

| Dimension | Score (0–4) | Weight | Weighted | Evidence / rationale |
|---|---|---|---|---|
| 1. Data | ___ | 2 | ___ |  |
| 2. Tooling | ___ | 1 | ___ |  |
| 3. Process maturity | ___ | 2 | ___ |  |
| 4. Skills | ___ | 1 | ___ |  |
| 5. Security & compliance | ___ | 2 | ___ |  |
| 6. Leadership buy-in | ___ | 1.5 | ___ |  |
| 7. Change readiness | ___ | 1.5 | ___ |  |
| **TOTAL** |  | **/ 44 max** | **___** |  |

> Weighting reflects what actually breaks builds for SMEs: data, process stability, and compliance carry the most weight; a missing executive sponsor or an unwilling team quietly kills adoption.

**Overall readiness score = weighted total ÷ 44 → ___ %**

---

## 4. Interpreting the overall score

| Weighted % | Verdict | What it means for the recommendation |
|---|---|---|
| 75–100% | **Build-ready** | Recommend an Automation Sprint now. |
| 50–74% | **Conditional** | Sprint viable after 1–2 specific gaps are closed (often a Lean/data fix first). |
| 25–49% | **Foundation first** | Lean simplification + data/tooling groundwork before any automation. Possibly an Operating Partner glide path. |
| 0–24% | **Not ready** | Say so plainly. Recommend the prerequisites; don't sell a build that will fail. |

**Hard rule — any single 0 is a blocker** regardless of the overall %. A 0 on Data, Security & compliance, or Leadership buy-in must be closed before a Sprint, full stop.

---

## 5. From scores to recommendations

For each dimension scoring **2 or below**, write a specific, sequenced action:

| Dimension | Score | Recommended action | Owner | Before Sprint? |
|---|---|---|---|---|
|  | ___ |  |  | Y/N |
|  | ___ |  |  | Y/N |

Then assemble the narrative for the Diagnostic readout:

- [ ] **Headline verdict** — build-ready / conditional / foundation-first / not ready.
- [ ] **The strengths** — the 3+ scores that accelerate a build.
- [ ] **The blockers** — any 0s and the must-fix gaps, with the action to close each.
- [ ] **The sequence** — what to fix, in what order, before/with the first Sprint.
- [ ] **The honest line** — if Lean alone is the right next step, state it.

Feed the recommendations into the prioritised opportunity backlog and the 12-month roadmap. Always pair a readiness gap with the action that closes it — never leave a low score without a next step.


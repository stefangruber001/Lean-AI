# Value-Stream Mapping Template & How-To

*Capture a process exactly as it runs today, quantify the waste in hours and euros, then design the target state. Lean before automation.*

This is the working template for the Lean core of every Diagnostic and the first phase of every Sprint. It turns a vague "this process is painful" into a defensible number — and into a target process we can simplify before we automate anything.

> **Rule:** we never automate a broken process. The map exists to fix the process first, then automate only what remains.

---

## 1. How to use this template

1. **Define the stream** — one process, one clear start trigger, one clear end.
2. **Capture current state** — walk it with the people who do it; record real numbers, not idealised ones.
3. **Quantify** — convert time into hours/year and €/year.
4. **Find waste** — tag every step against the 8 wastes.
5. **Design target state** — remove, simplify, then automate.
6. **Validate** — the process owners sign off on both maps.

*AI assist:* the process-map / SOP generator drafts the step table and waste tags from interview transcripts; the founder validates every row with the process owners.

---

## 2. Stream header (fill in)

```
Process name:        __________________________________
Trigger (starts when): __________________________________
End state (done when): __________________________________
Process owner(s):    __________________________________
Systems touched:     __________________________________
Volume:              ______ times per [day / week / month]
Mapped by / date:    __________________________________
```

---

## 3. Current-state step table (fill in)

One row per step. Times in minutes per single run of the process.

| # | Step | Who / role | System | Process time (active min) | Wait time (min) | Rework rate % | Hand-off? | Waste tag(s) | Notes / pain |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  | Y/N |  |  |
| 2 |  |  |  |  |  |  | Y/N |  |  |
| 3 |  |  |  |  |  |  | Y/N |  |  |
| 4 |  |  |  |  |  |  | Y/N |  |  |
| 5 |  |  |  |  |  |  | Y/N |  |  |

**Definitions**
- **Process time** — hands-on, value-adding (or at least active) work.
- **Wait time** — the item sits idle (queue, approval, waiting on someone).
- **Rework rate** — share of runs where this step has to be redone.
- **Hand-off** — work passes between people/teams/systems (each is a risk and a delay).

---

## 4. The 8 wastes (DOWNTIME) — tag each step

| Tag | Waste | What it looks like here |
|---|---|---|
| **D** | Defects | Errors, corrections, rework, bad data |
| **O** | Overproduction | Doing/making more than the next step needs |
| **W** | Waiting | Idle items, approvals, queues |
| **N** | Non-utilised talent | Skilled people doing low-value manual work |
| **T** | Transport | Moving data/files/work between systems or people |
| **I** | Inventory | Backlogs, WIP piling up, unread queues |
| **M** | Motion | Swivel-chair work, re-keying, hunting for info |
| **E** | Extra processing | Redundant approvals, duplicate entry, gold-plating |

---

## 5. Quantify the current state (fill in)

```
Per single run:
  Total process time:  ______ min
  Total wait time:     ______ min
  Total lead time:     ______ min (process + wait)

Annual volume:         ______ runs/year

Annual labour:         (total process min × runs/year) ÷ 60 = ______ hours/year
Blended hourly cost:   € ______ /hour (fully loaded)
Annual labour cost:    hours/year × hourly cost = € ______ /year

Rework / defect cost:  € ______ /year   (rework hours + downstream impact)
Delay / opportunity cost (if relevant): € ______ /year

TOTAL ANNUAL COST OF CURRENT STATE: € ______ /year
```

This single number anchors the business case and the Sprint payback. Keep it conservative and defensible — only count what you can show.

---

## 6. Target-state design (fill in)

For each current step decide: **Eliminate · Simplify · Automate · Keep (with human-in-the-loop)**.

| # | Current step | Decision | Target description | Who/what does it | Human-in-loop? | Expected time | Expected rework % |
|---|---|---|---|---|---|---|---|
| 1 |  | E/S/A/K |  |  | Y/N |  |  |
| 2 |  | E/S/A/K |  |  | Y/N |  |  |
| 3 |  | E/S/A/K |  |  | Y/N |  |  |

**Sequence the design Lean-first:**
1. **Eliminate** steps that add no value.
2. **Simplify** what remains (fewer hand-offs, standard inputs, fewer approvals).
3. **Automate** only the simplified steps — with human-in-the-loop where judgment, risk, or personal data is involved.

---

## 7. Target-state summary (fill in)

```
Target process time per run:  ______ min   (was ______)
Target lead time per run:     ______ min   (was ______)
Target annual labour:         ______ hrs/year (was ______)
Target annual cost:           € ______ /year (was € ______)

PROJECTED ANNUAL SAVING:      € ______ /year   |   ______ hrs/year
Steps eliminated: ____   simplified: ____   automated: ____
```

Carry the projected saving and the automated-step list into the opportunity backlog (Diagnostic) or the solution design (`46-solution-design-template.md`, Sprint).

---

## 8. Sign-off

- [ ] Current-state map validated by process owner(s).
- [ ] Cost-of-waste numbers agreed.
- [ ] Target-state design approved.
- [ ] Approved by: ______________  Date: __________


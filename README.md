# Lean-AI

> **Operational excellence, engineered with AI.**

Production marketing site for **Lean-AI** — an independent advisory practice for
regulated, asset-heavy manufacturing. Lean first, AI where it pays back.

Built as a single-page, mobile-first site with **Vite + React + TypeScript +
Tailwind CSS + Framer Motion + lucide-react**. No backend.

---

## Run locally

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
npm run typecheck
```

Requires Node 20+ (CI uses Node 22).

---

## Where to edit things

| You want to change…             | Edit this file |
| ------------------------------- | -------------- |
| **All copy & config**           | `src/content.ts` — every headline, paragraph, nav label, and the `CONFIG` block live here. |
| Brand name, email, CTA text     | `CONFIG` at the top of `src/content.ts`. |
| **Booking link**                | `CONFIG.BOOKING_URL` in `src/content.ts` — currently `#contact`. Replace with a Calendly/Cal.com URL. |
| Colors, fonts, spacing tokens   | `tailwind.config.js`. |
| A specific section's layout     | `src/components/<Section>.tsx`. |
| Reusable primitives             | `src/components/ui/` (`Button`, `Container`, `Card`, `Pill`, `SectionHeading`, `Section`). |

Sections render in this order (see `src/App.tsx`): Header → Hero → TrustStrip →
Problem → Approach → Services (Engagements) → Results → About → CTABand →
Contact → Footer.

---

## TODO before going fully live

These are intentional placeholders, marked with `// TODO` / `{/* TODO */}` in code:

- [ ] **Case study** (`src/components/Results.tsx`) — replace the *illustrative*
      block + metric tiles (`XX%`) with the first real, attributable client
      result after the pilot. **Do not publish fabricated names or numbers.**
- [ ] **Founder photo** (`src/components/About.tsx`) — drop a monochrome headshot
      at `public/founder.jpg` and swap the styled placeholder for an `<img>`.
- [ ] **Contact form backend** (`src/components/Contact.tsx`) — the submit
      handler currently `console.log`s and shows a success state. Wire it to
      Formspree / Resend / email (see the `// TODO` in `handleSubmit`).
- [ ] **Booking link** — set `CONFIG.BOOKING_URL` to the real scheduler.
- [ ] **Real domain & email** — confirm `CONFIG.CONTACT_EMAIL`.

---

## Revenue model

No subscription tiers. The practice sells **three fixed-scope, fixed-fee
engagements** (see `ENGAGEMENTS` in `src/content.ts`):

1. **Process Value & Automation Audit** — 2–3 week diagnostic + costed roadmap.
2. **Transformation Sprint** — redesign one process end-to-end and prove it.
3. **Continuous Improvement Partnership** — ongoing engagement that compounds gains.

Prices are deliberately not shown; the page signals *"Fixed scope · Fixed fee."*

---

## Design system (summary)

- **Accent:** deep teal-blue `#0F4C5C` (single accent, used sparingly).
- **Ink** `#0E1116` / **Paper** `#FAFAF7` (warm off-white).
- **Type:** Fraunces (display serif) + Inter (body) + IBM Plex Mono (labels/numbers).
- **Motion:** subtle fade-up + stagger on scroll; respects `prefers-reduced-motion`
  via Framer's `MotionConfig reducedMotion="user"`.
- **Accessibility:** semantic landmarks, keyboard focus rings, labelled form
  fields with inline errors, AA-minded contrast.

---

## Deployment

Pushing to `main` (or the active feature branch) triggers
`.github/workflows/deploy-pages.yml`, which builds the Vite app and publishes
`dist/` to GitHub Pages at **https://stefangruber001.github.io/Lean-AI/**.

The Vite `base` is set to `/Lean-AI/` (`vite.config.ts`) so asset paths resolve
under the project-pages subpath. If the site moves to a root domain, set
`base: "/"`.

The previous static one-page site is preserved under [`legacy/`](./legacy) and
the company handbook lives in [`docs/`](./docs).

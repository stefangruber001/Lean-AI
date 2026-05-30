// =============================================================
//  Lean-AI — site content & configuration (single source of truth)
//  Edit copy here; components read everything from this file.
// =============================================================

export const CONFIG = {
  BRAND_NAME: "Lean-AI",
  TAGLINE: "Operational excellence, engineered with AI.",
  FOUNDER_NAME: "Stefan Gruber",
  FOUNDER_TITLE: "Founder & Principal Advisor",
  CONTACT_EMAIL: "hello@lean-ai.com", // TODO: confirm real address
  BOOKING_URL: "#contact", // TODO: replace with Calendly/Cal.com link
  PRIMARY_CTA: "Book a discovery call",
  LOCALE: "en",
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Approach", href: "#approach" },
  { label: "Engagements", href: "#engagements" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "Independent advisory for regulated manufacturing",
  title: "Cut the cost and time out of your most critical processes — without breaking compliance.",
  // The accented fragment is rendered in the display-serif italic accent.
  titleAccent: "without breaking compliance.",
  subhead:
    "I help manufacturing and operations leaders redesign high-stakes processes with Lean and deploy AI where it actually pays back — measured in time saved, errors removed, and capacity unlocked.",
  primaryCta: CONFIG.PRIMARY_CTA,
  secondaryCta: "See how it works",
  secondaryHref: "#approach",
  trustLine:
    "20+ years leading engineering & operational excellence across global, regulated manufacturing sites.",
} as const;

export const TRUST_SIGNALS: string[] = [
  "Lean Six Sigma Black Belt",
  "20+ years in regulated manufacturing",
  "Global engineering leadership",
  "Executive MBA — IESE",
];

export const PROBLEM = {
  number: "01",
  kicker: "The problem",
  heading: "AI projects fail when they skip the operations work.",
  paragraphs: [
    "Most automation efforts start with the tool and ignore the process — so they automate waste, stall in pilots, and never prove ROI. The technology was never really the constraint.",
    "In regulated, asset-heavy environments the stakes are higher: change has to survive audits, win over the people doing the work, and hold up under real conditions — not just in a demo.",
  ],
  // Industry-context framings only — no proprietary/invented client numbers.
  insights: [
    {
      stat: "Most",
      label:
        "AI pilots never scale to production. Value, not technology, is the bottleneck.",
    },
    {
      stat: "Process first",
      label:
        "Automating a broken process just makes the waste run faster — and harder to see.",
    },
    {
      stat: "Adoption",
      label:
        "Change that the floor doesn't own quietly reverts the moment the consultants leave.",
    },
  ],
} as const;

export const APPROACH = {
  number: "02",
  kicker: "The approach",
  heading: "Assess. Lean. Automate. Sustain.",
  intro:
    "A disciplined, four-step method that puts operational rigor before technology — so the gains are real and they last.",
  steps: [
    {
      n: "01",
      icon: "ScanSearch",
      title: "Assess",
      body: "Map the value stream and quantify where time, cost, and risk actually accumulate.",
    },
    {
      n: "02",
      icon: "Scissors",
      title: "Lean",
      body: "Redesign the process first. Remove the waste before a line of automation is written.",
    },
    {
      n: "03",
      icon: "Cpu",
      title: "Automate",
      body: "Deploy AI and agents on the steps that pay back — with the controls a regulated environment demands.",
    },
    {
      n: "04",
      icon: "Infinity",
      title: "Sustain",
      body: "Build the measurement and adoption that keeps improvement compounding after I leave.",
    },
  ],
} as const;

export const ENGAGEMENTS = {
  number: "03",
  kicker: "Engagements",
  heading: "Three ways to work together.",
  intro: "Fixed scope. Fixed fee. No open-ended retainers to start — every engagement stands on its own outcome.",
  feeSignal: "Fixed scope · Fixed fee",
  offers: [
    {
      name: "Process Value & Automation Audit",
      featured: false,
      outcome:
        "A 2–3 week diagnostic that pinpoints your highest-ROI processes and hands you a costed automation roadmap.",
      bullets: [
        "Value-stream mapping",
        "Waste & cost quantification",
        "Top-3 automatable processes identified",
        "ROI model + prioritized roadmap",
      ],
      who: "For leaders who want clarity and a business case before committing.",
    },
    {
      name: "Transformation Sprint",
      featured: true,
      outcome:
        "Redesign one critical process end-to-end and deploy the automation that proves the model.",
      bullets: [
        "Lean redesign of the priority process",
        "AI / agent implementation on the step that pays back",
        "Adoption & change plan",
        "Measured before / after results",
      ],
      who: "For teams ready to turn one process into a flagship win.",
    },
    {
      name: "Continuous Improvement Partnership",
      featured: false,
      outcome:
        "An ongoing engagement that compounds gains across processes and builds internal capability.",
      bullets: [
        "Rolling improvement roadmap",
        "Quarterly value targets",
        "Team coaching & upskilling",
        "On-call advisory",
      ],
      who: "For organizations making operational excellence a durable advantage.",
    },
  ],
} as const;

export const RESULTS = {
  number: "04",
  kicker: "Results",
  heading: "Evidence over promises.",
  intro:
    "A flagship case study is in progress with a first pilot client. Until it's published, here is the exact format every engagement is measured against.",
  // Clearly illustrative, non-attributed. Real numbers replace these post-pilot.
  caseLabel: "Illustrative engagement — manufacturing operations",
  challenge:
    "A high-volume, audit-critical process owned by a stretched team, with manual handoffs that capped throughput and introduced error risk.",
  approach:
    "Value-stream mapping to isolate the constraint, a Lean redesign to remove non-value-added steps, then targeted AI/agent automation on the proven bottleneck — with controls and an adoption plan built in.",
  metrics: [
    { value: "XX%", label: "process time removed" },
    { value: "XX%", label: "errors eliminated" },
    { value: "XX", label: "weeks to payback" },
  ],
  quote: "Pull-quote from first client engagement.",
  quoteAttribution: "Role, Company — to be added post-pilot",
} as const;

export const ABOUT = {
  number: "05",
  kicker: "About",
  heading: "Two decades on the factory floor and in the boardroom.",
  body: "I've spent over 20 years leading engineering and operational excellence in regulated, asset-heavy manufacturing — from the plant floor to global responsibility for large capital portfolios and engineering organizations across multiple sites. I'm a Lean Six Sigma Black Belt with an Executive MBA from IESE. I've delivered measurable gains in throughput, reliability, and cost — and I've seen exactly where technology delivers and where it stalls. Lean-AI is how I bring that operator's judgment to teams who want AI to actually pay off.",
  pullQuote:
    "We don't sell advice. We build the system, prove it works, and hand you the keys.",
  credentials: [
    "Lean Six Sigma Black Belt",
    "Industrial Engineering",
    "Executive MBA — IESE",
    "Global multi-site leadership",
  ],
} as const;

export const CTA_BAND = {
  heading: "Find your highest-ROI process in three weeks.",
  sub: "Start with a discovery call. We'll pressure-test where AI and Lean can move the needle for your operation.",
  cta: CONFIG.PRIMARY_CTA,
} as const;

export const CONTACT = {
  number: "06",
  kicker: "Contact",
  heading: "Let's find the process that's costing you the most.",
  copy: "Tell me where your operation leaks time and money. I'll tell you honestly whether Lean and AI can move it — and what I'd look at first.",
  responseLine: "Direct line to the founder. I reply to every serious enquiry within two business days.",
  email: CONFIG.CONTACT_EMAIL,
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company",
    message: "What process is costing you the most?",
  },
  submit: "Send enquiry",
  success: "Thank you — your message is in. I'll be in touch within two business days.",
} as const;

export const FOOTER = {
  positioning: "Independent operational excellence, engineered with AI.",
  builtLine: "Built independently.",
} as const;

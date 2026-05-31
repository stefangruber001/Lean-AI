// =============================================================
//  Lean-AI — site content & configuration (single source of truth)
//  Lean copy: short, scannable, visual. Edit text here.
// =============================================================

export const CONFIG = {
  BRAND_NAME: "Lean-AI",
  TAGLINE: "Operational excellence, engineered with AI.",
  FOUNDER_NAME: "Stefan Gruber",
  FOUNDER_TITLE: "Founder & Principal Advisor",
  CONTACT_EMAIL: "hello@lean-ai.com", // TODO: confirm real address
  LINKEDIN_URL: "https://www.linkedin.com/in/stefan-gruber001/",
  LOCATION: "Barcelona · clients across Europe",
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
  eyebrow: "AI-native operational excellence · regulated manufacturing",
  // Headline split: lead + accent fragment (rendered in serif italic accent).
  titleLead: "Lean first.",
  titleAccent: "AI where it pays back.",
  subhead:
    "I redesign your most critical processes, then deploy AI on the steps that actually return value — measured in time, errors, and capacity.",
  primaryCta: CONFIG.PRIMARY_CTA,
  secondaryCta: "See the method",
  secondaryHref: "#approach",
  // Compact, visual proof row (founder's career record).
  stats: [
    { value: "20+", label: "years in regulated manufacturing" },
    { value: "850+", label: "engineers led globally" },
    { value: "€400M+", label: "CAPEX governed" },
    { value: "+32%", label: "OTIF delivered" },
  ],
} as const;

export const TRUST_SIGNALS: string[] = [
  "Lean Six Sigma Black Belt",
  "Executive MBA — IESE",
  "Global engineering leadership",
  "Greenfield · brownfield · CMO",
];

export const PROBLEM = {
  number: "01",
  kicker: "The gap",
  heading: "AI is everywhere. Outcomes are rare.",
  lead: "Most automation starts with the tool and ignores the process — so it automates waste, stalls in pilots, and never proves ROI.",
  cards: [
    {
      icon: "FlaskConical",
      title: "Pilots that never scale",
      body: "Value, not technology, is the bottleneck.",
    },
    {
      icon: "Workflow",
      title: "Automated waste",
      body: "A broken process just runs faster — and hides longer.",
    },
    {
      icon: "Users",
      title: "Change that reverts",
      body: "What the floor doesn't own dies when consultants leave.",
    },
  ],
} as const;

export const APPROACH = {
  number: "02",
  kicker: "The method",
  heading: "Assess. Lean. Automate. Sustain.",
  intro: "Operational rigor before technology — so the gains are real and they last.",
  steps: [
    { n: "01", icon: "ScanSearch", title: "Assess", body: "Map the value stream. Quantify where time, cost, and risk pile up." },
    { n: "02", icon: "Scissors", title: "Lean", body: "Redesign the process first. Remove the waste before any code." },
    { n: "03", icon: "Cpu", title: "Automate", body: "Deploy AI on the steps that pay back — with regulated-grade controls." },
    { n: "04", icon: "Infinity", title: "Sustain", body: "Build the measurement and adoption that keeps gains compounding." },
  ],
} as const;

export const ENGAGEMENTS = {
  number: "03",
  kicker: "Engagements",
  heading: "Three ways to work together.",
  intro: "Fixed scope. Fixed fee. Each engagement stands on its own outcome.",
  feeSignal: "Fixed scope · Fixed fee",
  offers: [
    {
      name: "Audit",
      tagline: "Process Value & Automation Audit",
      featured: false,
      outcome: "A 2–3 week diagnostic + costed automation roadmap.",
      bullets: ["Value-stream mapping", "Waste & cost quantified", "Top-3 automatable processes", "ROI model + roadmap"],
      who: "Clarity and a business case before committing.",
    },
    {
      name: "Sprint",
      tagline: "Transformation Sprint",
      featured: true,
      outcome: "Redesign one critical process and deploy the AI that proves the model.",
      bullets: ["Lean redesign", "AI on the step that pays back", "Adoption & change plan", "Measured before / after"],
      who: "Turn one process into a flagship win.",
    },
    {
      name: "Partnership",
      tagline: "Continuous Improvement Partnership",
      featured: false,
      outcome: "Ongoing work that compounds gains and builds internal capability.",
      bullets: ["Rolling roadmap", "Quarterly value targets", "Team coaching", "On-call advisory"],
      who: "Make operational excellence a durable advantage.",
    },
  ],
} as const;

export const RESULTS = {
  number: "04",
  kicker: "Results",
  heading: "Evidence over promises.",
  intro: "A flagship client case is in progress. Here is the format every engagement is measured against.",
  caseLabel: "Illustrative — manufacturing operations",
  challenge: "An audit-critical, high-volume process with manual handoffs that capped throughput and added error risk.",
  approach: "Map the constraint → Lean redesign → targeted AI on the proven bottleneck, with controls and adoption built in.",
  metrics: [
    { value: "XX%", label: "process time removed" },
    { value: "XX%", label: "errors eliminated" },
    { value: "XX", label: "weeks to payback" },
  ],
  quote: "Pull-quote from first client engagement.",
  quoteAttribution: "Role, Company — added post-pilot",
} as const;

export const ABOUT = {
  number: "05",
  kicker: "About",
  heading: "Two decades on the floor and in the boardroom.",
  body: [
    "20+ years leading engineering and operational excellence in regulated pharmaceutical manufacturing — from the plant floor to global responsibility for engineering organizations of 850+ and CAPEX portfolios above €400M across a dozen-plus sites.",
    "Lean Six Sigma Black Belt. Executive MBA from IESE, Barcelona. Lean-AI is how I bring that operator's judgment to teams who want AI to actually pay off.",
  ],
  pullQuote: "I don't sell advice. I build the system, prove it works, and hand you the keys.",
  trackRecord: [
    { value: "20+", label: "years regulated mfg" },
    { value: "850+", label: "engineers led" },
    { value: "€400M+", label: "CAPEX governed" },
    { value: "+32%", label: "OTIF improvement" },
  ],
  trackRecordNote: "Founder's career track record — not Lean-AI client metrics.",
  credentials: [
    "Lean Six Sigma Black Belt",
    "Executive MBA — IESE, Barcelona",
    "MSc Industrial Engineering",
    "Greenfield · brownfield · CMO investment",
  ],
  photo: "founder.jpg", // place at /public/founder.jpg
} as const;

export const CTA_BAND = {
  heading: "Find your highest-ROI process in three weeks.",
  sub: "Start with a discovery call. We'll pressure-test where Lean and AI move the needle.",
  cta: CONFIG.PRIMARY_CTA,
} as const;

export const CONTACT = {
  number: "06",
  kicker: "Contact",
  heading: "What process is costing you the most?",
  copy: "Tell me where your operation leaks time and money. I'll tell you honestly whether Lean and AI can move it.",
  responseLine: "Direct line to the founder. Reply within two business days.",
  email: CONFIG.CONTACT_EMAIL,
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company",
    message: "The process that's costing you the most",
  },
  submit: "Send enquiry",
  success: "Thank you — your message is in. I'll be in touch within two business days.",
} as const;

export const FOOTER = {
  positioning: "Operational excellence, engineered with AI.",
  builtLine: "Built independently.",
} as const;

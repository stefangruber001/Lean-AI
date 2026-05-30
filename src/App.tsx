import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";

// Below-the-fold sections are code-split to keep the initial payload small.
const Problem = lazy(() => import("./components/Problem").then((m) => ({ default: m.Problem })));
const Approach = lazy(() => import("./components/Approach").then((m) => ({ default: m.Approach })));
const Services = lazy(() => import("./components/Services").then((m) => ({ default: m.Services })));
const Results = lazy(() => import("./components/Results").then((m) => ({ default: m.Results })));
const About = lazy(() => import("./components/About").then((m) => ({ default: m.About })));
const CTABand = lazy(() => import("./components/CTABand").then((m) => ({ default: m.CTABand })));
const Contact = lazy(() => import("./components/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));

export default function App() {
  return (
    // reducedMotion="user" makes Framer respect prefers-reduced-motion automatically.
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
          <Problem />
          <Approach />
          <Services />
          <Results />
          <About />
          <CTABand />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </MotionConfig>
  );
}

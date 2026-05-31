import { lazy, Suspense, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "./components/Header";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";

// Below-the-fold sections are code-split to keep the initial payload small.
const Problem = lazy(() => import("./components/Problem").then((m) => ({ default: m.Problem })));
const Approach = lazy(() => import("./components/Approach").then((m) => ({ default: m.Approach })));
const Services = lazy(() => import("./components/Services").then((m) => ({ default: m.Services })));
const Results = lazy(() => import("./components/Results").then((m) => ({ default: m.Results })));
const About = lazy(() => import("./components/About").then((m) => ({ default: m.About })));
const FAQ = lazy(() => import("./components/FAQ").then((m) => ({ default: m.FAQ })));
const CTABand = lazy(() => import("./components/CTABand").then((m) => ({ default: m.CTABand })));
const Contact = lazy(() => import("./components/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));
const Legal = lazy(() => import("./components/Legal").then((m) => ({ default: m.Legal })));

// Minimal hash routing: #legal shows the legal page, everything else the site.
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const isLegal = hash.startsWith("#legal");

  // Make sure the legal page (and back-to-top) start scrolled at the top.
  useEffect(() => {
    if (isLegal) window.scrollTo(0, 0);
  }, [isLegal]);

  if (isLegal) {
    return (
      <MotionConfig reducedMotion="user">
        <Suspense fallback={<div className="min-h-screen bg-paper" aria-hidden="true" />}>
          <Legal />
        </Suspense>
      </MotionConfig>
    );
  }

  return (
    // reducedMotion="user" makes Framer respect prefers-reduced-motion automatically.
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
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
          <FAQ />
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

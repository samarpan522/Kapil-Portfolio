import React, { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

// Lazy load sections for better performance
const VisionSection = lazy(() =>
  import("./sections/VisionSection").then((module) => ({
    default: module.VisionSection,
  })),
);
const LeadershipSection = lazy(() =>
  import("./sections/LeadershipSection").then((module) => ({
    default: module.LeadershipSection,
  })),
);
const ImpactSection = lazy(() =>
  import("./sections/ImpactSection").then((module) => ({
    default: module.default,
  })),
);
const InsightsSection = lazy(() =>
  import("./sections/InsightsSection").then((module) => ({
    default: module.InsightsSection,
  })),
);

const CollaborationSection = lazy(() =>
  import("./sections/CollaborationSection").then((module) => ({
    default: module.CollaborationSection,
  })),
);
const PhilosophySection = lazy(() =>
  import("./sections/PhilosophySection").then((module) => ({
    default: module.PhilosophySection,
  })),
);

const LegacySection = lazy(() =>
  import("./sections/LegacySection").then((module) => ({
    default: module.LegacySection,
  })),
);

const ContactSection = lazy(() =>
  import("./sections/ContactSection").then((module) => ({
    default: module.ContactSection,
  })),
);

// Loading component
const SectionLoader = () => (
  <div className="py-32 md:py-40 bg-white flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent-red border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <VisionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LeadershipSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ImpactSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <InsightsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CollaborationSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <PhilosophySection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LegacySection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

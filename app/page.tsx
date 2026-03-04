"use client";

import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/LandingFooter";
import { HeroSection } from "@/components/landing/Hero";
import { FutureDeliverySection } from "@/components/landing/FutureDeliverySection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { CoverageSection } from "@/components/landing/CoverageSection";

export default function Home() {
  return (
    <div className="landing-shell page-fade min-h-screen bg-white font-sans text-zinc-950">
      <div
        className="landing-grid-layer"
      />

      <div className="landing-content mx-auto max-w-6xl px-5 sm:px-6">
        <LandingHeader />

        <main id="top" className="py-10 sm:py-16 lg:py-20">
          <HeroSection />
          <FutureDeliverySection />
          <WorkflowSection />
          <CoverageSection />

          <LandingFooter />
        </main>
      </div>
    </div>
  );
}

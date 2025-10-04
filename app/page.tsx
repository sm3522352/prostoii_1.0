"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LogoCloud from "@/components/LogoCloud";
import { goal } from "@/lib/metrics";

export default function HomePage() {
  useEffect(() => {
    goal("view_home");
  }, []);

  return (
    <>
      <Hero />
      <LogoCloud />
      <FeatureCards />
      <HowItWorks />
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  );
}

"use client";

import { useEffect } from "react";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { goal } from "@/lib/metrics";

export default function PricingPage() {
  useEffect(() => {
    goal("view_pricing");
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <PricingTable />
        <FAQ />
        <CTA />
      </div>
    </div>
  );
}

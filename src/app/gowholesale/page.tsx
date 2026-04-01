"use client";

import GoWholesaleHeader from "@/components/gowholesale/GoWholesaleHeader";
import HeroSection from "@/components/gowholesale/HeroSection";
import ProblemSection from "@/components/gowholesale/ProblemSection";
import WhatIsSection from "@/components/gowholesale/WhatIsSection";
import HowItWorksSection from "@/components/gowholesale/HowItWorksSection";
import CapabilitiesSection from "@/components/gowholesale/CapabilitiesSection";
import CreditSystemSection from "@/components/gowholesale/CreditSystemSection";
import LeadFormSection from "@/components/gowholesale/LeadFormSection";
import FinalCTASection from "@/components/gowholesale/FinalCTASection";
import GoWholesaleFooter from "@/components/gowholesale/GoWholesaleFooter";

export default function GoWholesalePage() {
  return (
    <>
      <GoWholesaleHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <CreditSystemSection />
        <LeadFormSection />
        <FinalCTASection />
        <GoWholesaleFooter />
      </main>
    </>
  );
}

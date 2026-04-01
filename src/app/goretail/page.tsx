"use client";

import GoRetailHeader from "@/components/goretail/GoRetailHeader";
import HeroSection from "@/components/goretail/HeroSection";
import ExperienceSection from "@/components/goretail/ExperienceSection";
import BenefitsSection from "@/components/goretail/BenefitsSection";
import LeadFormSection from "@/components/goretail/LeadFormSection";
import FinalCTASection from "@/components/goretail/FinalCTASection";
import GoRetailFooter from "@/components/goretail/GoRetailFooter";

export default function GoRetailPage() {
  return (
    <>
      <GoRetailHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <BenefitsSection />
        <LeadFormSection />
        <FinalCTASection />
        <GoRetailFooter />
      </main>
    </>
  );
}

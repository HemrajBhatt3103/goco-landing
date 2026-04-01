"use client";

import GlassNav from "@/components/GlassNav";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProductEcosystem from "@/components/ProductEcosystem";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Purpose-Built Products",
    description:
      "Each product solves one specific problem for one specific type of business. No bloat. No unnecessary features.",
    icon: "✦",
  },
  {
    title: "Offline-First Design",
    description:
      "Built for businesses that operate through relationships, not websites. We enhance what already works.",
    icon: "◈",
  },
  {
    title: "Structured, Not Complex",
    description:
      "We bring order to manual processes without adding complexity. Your team learns it in minutes, not weeks.",
    icon: "◉",
  },
];

export default function Home() {
  return (
    <>
      <GlassNav />
      <main>
        <HeroSection />

        <section id="features" className="py-32 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center mb-20">
              <span className="text-xs font-medium tracking-widest uppercase text-accent">
                Why GOCO
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mt-3">
                Built Different
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.15}>
                  <div className="p-8 rounded-2xl bg-secondary/5 hover:bg-secondary/[0.07] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-medium text-secondary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-secondary/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <HorizontalScroll />
        <ProductEcosystem />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

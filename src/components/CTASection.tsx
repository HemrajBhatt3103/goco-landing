"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-widest uppercase text-primary/40">
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mt-4 mb-6">
            Ready to modernize
            <br />
            your business?
          </h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto mb-10">
            Pick the product that fits your business. Retail or wholesale — we&apos;ve built the tools you need.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/goretail"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-secondary rounded-full text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              GoRetail
            </motion.a>
            <motion.a
              href="/gowholesale"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-primary rounded-full text-sm font-medium tracking-wide hover:bg-primary/5 transition-colors border border-primary/10"
            >
              GoWholesale
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

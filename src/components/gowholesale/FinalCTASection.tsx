"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary/40">
            Limited Early Access
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mt-4 mb-6">
            Start digitizing your
            <br />
            wholesale operations.
          </h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto mb-10">
            Join the first wave of wholesalers using GoWholesale.
            Early adopters get priority onboarding and dedicated setup support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#lead-form"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-primary text-secondary rounded-full text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Request Early Access
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

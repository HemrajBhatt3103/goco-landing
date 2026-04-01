"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Upload,
  Eye,
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload your inventory",
    description:
      "Add products with images, pricing, and categories. Your catalog is ready in minutes.",
  },
  {
    icon: Eye,
    step: "02",
    title: "Buyers browse your catalog",
    description:
      "Your buyers log in and see your full catalog. No more sending images one by one.",
  },
  {
    icon: ShoppingCart,
    step: "03",
    title: "They place bulk orders",
    description:
      "Structured orders with quantities, variants, and notes. Everything is documented.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Choose payment method",
    description:
      "Pay now or use store credit. Credit limits and terms are pre-set by you.",
  },
  {
    icon: Truck,
    step: "05",
    title: "Orders are processed and delivered",
    description:
      "Intra-city or inter-city. Delivery is coordinated and tracked.",
  },
  {
    icon: BarChart3,
    step: "06",
    title: "Payments tracked automatically",
    description:
      "Dues, collections, credit cycles — all tracked with automated reminders.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mt-3">
            Six steps to structured
            <br />
            wholesale operations.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary/10 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {steps.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex gap-6 ${
        index % 2 === 1 ? "lg:mt-32" : ""
      }`}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <step.icon className="w-5 h-5 text-accent" />
        </div>
      </div>
      <div>
        <span className="text-sm font-medium text-accent/50 mb-2 block">
          {step.step}
        </span>
        <h3 className="text-xl font-medium text-secondary mb-2">
          {step.title}
        </h3>
        <p className="text-secondary/60 leading-relaxed text-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

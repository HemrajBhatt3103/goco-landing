"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  CreditCard,
  Zap,
  Clock,
  Users,
  MessageSquareOff,
} from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Digitize your entire inventory",
    description:
      "Every product, every variant, every price point — structured and accessible to your buyers.",
  },
  {
    icon: CreditCard,
    title: "Structured store credit management",
    description:
      "Set credit limits, track udhari, manage due dates. Replace notebooks with a system.",
  },
  {
    icon: Zap,
    title: "Never lose track of payments",
    description:
      "Real-time visibility on who owes what, when payments are due, and what's been collected.",
  },
  {
    icon: Clock,
    title: "Faster order processing",
    description:
      "Orders come in structured. Process them faster with less back-and-forth.",
  },
  {
    icon: Users,
    title: "Better buyer management",
    description:
      "Individual buyer profiles with order history, credit terms, and preferences.",
  },
  {
    icon: MessageSquareOff,
    title: "Reduce manual communication",
    description:
      "Buyers self-serve through the catalog. You handle exceptions, not every question.",
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Core Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mt-3">
            Built for how wholesale
            <br />
            actually works.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} capability={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
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
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="p-8 rounded-2xl bg-secondary/5 hover:bg-secondary/[0.07] transition-colors group"
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <capability.icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="text-lg font-medium text-secondary mb-3">
        {capability.title}
      </h3>
      <p className="text-secondary/60 leading-relaxed text-sm">
        {capability.description}
      </p>
    </motion.div>
  );
}

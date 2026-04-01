"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, ShoppingCart, CreditCard, Truck } from "lucide-react";

const pillars = [
  {
    icon: Package,
    title: "Inventory digitization",
    description:
      "Your entire stock, structured and visible. Buyers can browse without calling you.",
  },
  {
    icon: ShoppingCart,
    title: "Order management",
    description:
      "Bulk orders placed digitally. No more WhatsApp back-and-forth.",
  },
  {
    icon: CreditCard,
    title: "Credit tracking",
    description:
      "Store credit (udhari) managed with structure. Due dates, reminders, and clarity.",
  },
  {
    icon: Truck,
    title: "Delivery coordination",
    description:
      "Intra-city and inter-city delivery integrated into your workflow.",
  },
];

export default function WhatIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary/40">
            What Is GoWholesale
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mt-3 mb-6">
            A digital system to manage
            <br />
            your entire wholesale business.
          </h2>
          <p className="text-lg text-primary/50 max-w-xl mx-auto">
            Not just a catalog. A complete operating layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
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
      className="p-8 rounded-2xl bg-primary/5 hover:bg-primary/[0.07] transition-colors text-center group"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors">
        <pillar.icon className="w-6 h-6 text-primary/60" />
      </div>
      <h3 className="text-lg font-medium text-primary mb-3">{pillar.title}</h3>
      <p className="text-primary/50 leading-relaxed text-sm">
        {pillar.description}
      </p>
    </motion.div>
  );
}

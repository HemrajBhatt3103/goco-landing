"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Zap, Shield, Users, Gauge } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Makes your store look premium",
    description:
      "A digital catalog signals quality. Customers notice the difference immediately.",
  },
  {
    icon: Zap,
    title: "Faster product browsing",
    description:
      "Customers find what they want faster. No waiting for a staff member to help.",
  },
  {
    icon: Shield,
    title: "No technical skills required",
    description:
      "We handle everything. You focus on running your store.",
  },
  {
    icon: Users,
    title: "Better customer experience",
    description:
      "Customers browse at their own pace. Less pressure, more satisfaction.",
  },
  {
    icon: Gauge,
    title: "Easy to manage",
    description:
      "Update products, prices, and categories anytime. Changes go live instantly.",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-32 bg-secondary relative overflow-hidden">
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
            Why GoRetail
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mt-3">
            Built for offline retail.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
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
      className={`p-8 rounded-2xl bg-primary/5 hover:bg-primary/[0.07] transition-colors group ${
        index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
        <benefit.icon className="w-5 h-5 text-primary/60" />
      </div>
      <h3 className="text-lg font-medium text-primary mb-3">{benefit.title}</h3>
      <p className="text-primary/50 leading-relaxed text-sm">
        {benefit.description}
      </p>
    </motion.div>
  );
}

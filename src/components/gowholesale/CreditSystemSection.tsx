"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Bell, CalendarCheck, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Approval-based credit",
    description:
      "You set the credit limit. Buyers request credit. You approve or decline. Full control.",
  },
  {
    icon: CalendarCheck,
    title: "Due date tracking",
    description:
      "Every credit transaction has a due date. No more guessing when payments are expected.",
  },
  {
    icon: Bell,
    title: "Automated reminders",
    description:
      "Buyers receive reminders before and after due dates. No more uncomfortable phone calls.",
  },
  {
    icon: Settings,
    title: "Configurable interest",
    description:
      "Apply interest on overdue amounts if you choose. Completely optional and configurable.",
  },
];

export default function CreditSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="credit" className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
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
            The Differentiator
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mt-3 mb-6">
            Store credit,
            <br />
            managed with structure.
          </h2>
          <p className="text-lg text-primary/50 max-w-xl mx-auto">
            A system that replaces informal trust with structured control
            — without breaking relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, i) => (
            <CreditFeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-primary/5 p-8 sm:p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary/60" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
              Trust stays. Chaos goes.
            </h3>
            <p className="text-primary/50 leading-relaxed">
              Your buyers still get credit. You still manage relationships.
              But now there&apos;s a system tracking everything — so you can focus on
              growing your business instead of managing it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CreditFeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
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
      className="p-8 rounded-2xl bg-primary/5 hover:bg-primary/[0.07] transition-colors group"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
        <feature.icon className="w-5 h-5 text-primary/60" />
      </div>
      <h3 className="text-lg font-medium text-primary mb-3">{feature.title}</h3>
      <p className="text-primary/50 leading-relaxed text-sm">
        {feature.description}
      </p>
    </motion.div>
  );
}

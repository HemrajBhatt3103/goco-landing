"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Image,
  ClipboardList,
  CreditCard,
  Phone,
  Users,
  TrendingDown,
} from "lucide-react";

const painPoints = [
  {
    icon: MessageCircle,
    title: "Orders through WhatsApp and calls",
    description:
      "Buyers send orders as scattered messages. You piece them together manually. Things get missed.",
  },
  {
    icon: Image,
    title: "Sending product images repeatedly",
    description:
      "Every new buyer asks for the same photos, prices, and availability. Over and over.",
  },
  {
    icon: ClipboardList,
    title: "No structured inventory",
    description:
      "You know what you have, but buyers can't see it. They depend on you for every update.",
  },
  {
    icon: CreditCard,
    title: "Manual credit tracking (udhari)",
    description:
      "Notebooks, memory, and trust. One mistake and a relationship is damaged.",
  },
  {
    icon: Phone,
    title: "Chasing payments",
    description:
      "Calling buyers for dues is uncomfortable. But not calling means cash flow problems.",
  },
  {
    icon: Users,
    title: "Managing multiple buyers without systems",
    description:
      "Different prices, different credit terms, different preferences — all in your head.",
  },
  {
    icon: TrendingDown,
    title: "No clarity on cash flow",
    description:
      "You don't know who owes what, when payments are due, or how much you're actually making.",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            The Reality
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mt-3 mb-6">
            This is how wholesale
            <br />
            actually works today.
          </h2>
          <p className="text-lg text-secondary/60 max-w-xl mx-auto">
            You run a serious business. But the tools haven&apos;t caught up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, i) => (
            <PainCard key={point.title} point={point} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-xl sm:text-2xl font-medium text-secondary/80 max-w-2xl mx-auto leading-relaxed">
            You&apos;re not disorganized. You just don&apos;t have the right system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PainCard({
  point,
  index,
}: {
  point: (typeof painPoints)[number];
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
      <div className="w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
        <point.icon className="w-5 h-5 text-secondary/50" />
      </div>
      <h3 className="text-lg font-medium text-secondary mb-3">{point.title}</h3>
      <p className="text-secondary/50 leading-relaxed text-sm">
        {point.description}
      </p>
    </motion.div>
  );
}

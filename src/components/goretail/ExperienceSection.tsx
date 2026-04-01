"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { QrCode, Smartphone, Sparkles } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    step: "01",
    title: "Place QR Codes",
    description:
      "We set up branded QR codes across your store. Tables, walls, counters — anywhere customers can scan.",
  },
  {
    icon: Smartphone,
    step: "02",
    title: "Customers Scan & Browse",
    description:
      "One scan opens your full digital catalog on their phone. Products, categories, prices — everything at a glance.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Premium Experience",
    description:
      "Your customers enjoy a smooth, modern browsing experience. No app downloads. No friction. Just scan and explore.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-primary">
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
            Three steps. That&apos;s it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, i) => (
            <StepCard key={item.step} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative rounded-3xl overflow-hidden bg-secondary/5 p-8 sm:p-12 lg:p-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <QrCode className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                The result?
              </h3>
              <p className="text-secondary/60 text-lg leading-relaxed max-w-lg">
                Customers stay longer, browse more, and remember your store.
                Your team answers fewer repetitive questions.
                You look modern without trying.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-80 rounded-3xl bg-secondary/5 border border-secondary/10 overflow-hidden">
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/10 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-secondary/40" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-secondary/40 tracking-widest uppercase mb-1">
                      Scan to browse
                    </div>
                    <div className="text-sm font-medium text-secondary/60">
                      Your Store Name
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({
  item,
  index,
}: {
  item: (typeof steps)[number];
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
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="p-8 rounded-2xl bg-secondary/5 hover:bg-secondary/[0.07] transition-colors group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <item.icon className="w-5 h-5 text-accent" />
        </div>
        <span className="text-sm font-medium text-accent/60">{item.step}</span>
      </div>
      <h3 className="text-xl font-medium text-secondary mb-3">{item.title}</h3>
      <p className="text-secondary/60 leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

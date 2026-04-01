"use client";

import { motion } from "framer-motion";
import { QrCode, Truck, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "GoRetail",
    tagline: "Digital catalog for retail stores",
    description:
      "Turn your physical store into a digital catalog. Customers scan a QR code and browse your products instantly on their phone.",
    features: [
      "QR-based product browsing",
      "In-store digital catalog",
      "No app downloads required",
      "Real-time product updates",
    ],
    href: "/goretail",
    icon: QrCode,
    accent: "from-accent/20 to-secondary/10",
    status: "Live",
  },
  {
    name: "GoWholesale",
    tagline: "B2B operating layer for wholesalers",
    description:
      "Digitize inventory, manage bulk orders, track store credit (udhari), and coordinate delivery — all in one system.",
    features: [
      "Inventory digitization",
      "Store credit management",
      "Bulk order processing",
      "Payment & delivery tracking",
    ],
    href: "/gowholesale",
    icon: Truck,
    accent: "from-secondary/10 to-accent/15",
    status: "Live",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProductEcosystem() {
  return (
    <section id="products" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Our Products
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mt-3">
            Built for commerce.
          </h2>
          <p className="mt-6 text-lg text-secondary/60 max-w-2xl mx-auto">
            Purpose-built tools for retail and wholesale businesses.
            Each product solves a specific problem. Together, they form a complete ecosystem.
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <a href={product.href} className="block">
                <div className="rounded-3xl bg-secondary/5 hover:bg-secondary/[0.07] transition-colors overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.accent}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <product.icon className="w-16 h-16 text-secondary/20" />
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-secondary/10 text-secondary/70">
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-secondary/60 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-secondary/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-sm font-medium text-secondary group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

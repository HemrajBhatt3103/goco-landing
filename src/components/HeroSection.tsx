"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3 + i * 0.15,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      }),
    }),
    []
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ opacity, willChange: "opacity" }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-accent glass-light">
            Redefining Commerce
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-secondary mb-6"
        >
          Experience the
          <br />
          <span className="gradient-text">Future of Retail</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-secondary/60 max-w-2xl mx-auto mb-12"
        >
          A seamless blend of artistry and technology, crafted for the modern
          consumer. Discover products that inspire.
        </motion.p>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-secondary text-primary rounded-full text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
          >
            Explore Collection
          </motion.a>
          <motion.a
            href="#story"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-secondary rounded-full text-sm font-medium tracking-wide hover:bg-secondary/5 transition-colors border border-secondary/10"
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-secondary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

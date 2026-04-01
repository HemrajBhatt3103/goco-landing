"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "scale";
}

function ScrollRevealComponent({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "fade",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  const initial = {
    opacity: 0,
    ...(type === "scale" ? { scale: 0.95 } : directionMap[direction]),
  };

  const animate = {
    opacity: 1,
    ...(type === "scale" ? { scale: 1 } : { x: 0, y: 0 }),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default memo(ScrollRevealComponent);

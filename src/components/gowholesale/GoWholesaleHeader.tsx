"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function GoWholesaleHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
          setScrolled(currentScrollY > 50);
          lastScrollY.current = currentScrollY;
        }
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-light shadow-lg shadow-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <motion.a
                href="/"
                className="text-2xl font-semibold tracking-tight text-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                GOCO
              </motion.a>
              <span className="hidden sm:block w-px h-6 bg-secondary/10" />
              <span className="hidden sm:block text-sm font-medium text-accent tracking-wide">
                GoWholesale
              </span>
            </div>

            <div className="hidden md:flex items-center gap-10">
              <motion.a
                href="#problems"
                className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                The Problem
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
              <motion.a
                href="#credit"
                className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Credit System
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="#lead-form"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:inline-block px-6 py-3 bg-secondary text-primary rounded-full text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
              >
                Request Early Access
              </motion.a>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-full hover:bg-secondary/5 transition-colors"
              >
                <Menu className="w-5 h-5 text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <X className="w-6 h-6 text-secondary" />
            </button>
            <div className="flex flex-col items-center gap-8">
              <span className="text-sm font-medium text-accent tracking-widest uppercase">
                GoWholesale
              </span>
              {[
                { label: "The Problem", href: "#problems" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Credit System", href: "#credit" },
                { label: "Request Early Access", href: "#lead-form" },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-3xl font-medium ${
                    link.label === "Request Early Access"
                      ? "text-accent"
                      : "text-secondary"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

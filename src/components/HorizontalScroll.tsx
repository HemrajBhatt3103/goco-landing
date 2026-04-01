"use client";

import { useRef, useEffect, useState, useCallback, memo } from "react";
import ScrollReveal from "./ScrollReveal";

const storyItems = [
  {
    title: "The Problem We See",
    description:
      "Retail and wholesale businesses still run on WhatsApp, phone calls, and notebooks. Orders get lost. Credit is tracked manually. Payments are chased. There's a better way.",
    gradient: "from-accent/20 to-primary",
    icon: "✦",
  },
  {
    title: "Our Approach",
    description:
      "We don't build dashboards nobody uses. We build focused tools that solve one problem well. Each GOCO product is designed for a specific type of business with specific needs.",
    gradient: "from-secondary/10 to-primary",
    icon: "◈",
  },
  {
    title: "The Ecosystem",
    description:
      "GoRetail serves retailers. GoWholesale serves wholesalers. Together they cover the full commerce chain — from supplier to store to customer.",
    gradient: "from-accent/15 to-primary",
    icon: "◉",
  },
  {
    title: "Where We're Going",
    description:
      "We're building the operating system for offline commerce. Not replacing relationships — giving them structure. Not adding complexity — removing friction.",
    gradient: "from-secondary/5 to-primary",
    icon: "❖",
  },
];

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const containerRect = el.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      () => {
        updateActiveIndex();
      },
      { root: el, threshold: 0.5 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    el.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToCard = useCallback((index: number) => {
    const card = cardRefs.current[index];
    const el = scrollContainerRef.current;
    if (!card || !el) return;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const containerWidth = el.offsetWidth;
    el.scrollTo({
      left: cardLeft - (containerWidth - cardWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative bg-secondary py-20 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 sm:mb-16">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-widest uppercase text-primary/40">
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mt-3">
            Why we&apos;re building this.
          </h2>
        </ScrollReveal>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 lg:px-8 pb-6 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {storyItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex-shrink-0 snap-center w-[85vw] sm:w-[70vw] lg:w-[55vw] rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col justify-end relative overflow-hidden min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] will-change-transform"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl`}
            />
            <div className="absolute inset-0 glass-dark rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg text-primary/40">{item.icon}</span>
                <span className="text-sm font-medium text-primary/50">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-primary/70 max-w-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {storyItems.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-primary w-8"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(HorizontalScroll);

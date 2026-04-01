"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import ScrollReveal from "./ScrollReveal";

const mockProducts = [
  {
    id: "1",
    name: "Artisan Leather Tote",
    description: "Hand-stitched Italian leather with brass hardware",
    price: 289,
    imageUrl: "/products/tote.jpg",
    category: "Bags",
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    description: "Minimalist stoneware for the perfect brew",
    price: 85,
    imageUrl: "/products/pourover.jpg",
    category: "Home",
  },
  {
    id: "3",
    name: "Merino Wool Throw",
    description: "Ethically sourced, naturally temperature-regulating",
    price: 195,
    imageUrl: "/products/throw.jpg",
    category: "Home",
  },
  {
    id: "4",
    name: "Titanium Watch",
    description: "Swiss movement, aerospace-grade titanium case",
    price: 450,
    imageUrl: "/products/watch.jpg",
    category: "Accessories",
  },
  {
    id: "5",
    name: "Linen Bedding Set",
    description: "French flax linen, pre-washed for softness",
    price: 320,
    imageUrl: "/products/bedding.jpg",
    category: "Home",
  },
  {
    id: "6",
    name: "Handblown Glass Vase",
    description: "Each piece uniquely shaped by master artisans",
    price: 125,
    imageUrl: "/products/vase.jpg",
    category: "Decor",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function ProductList() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <section id="products" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Curated Selection
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mt-3">
            Featured Products
          </h2>
          <p className="mt-6 text-lg text-secondary/60 max-w-2xl mx-auto">
            Thoughtfully designed objects for everyday living, crafted with
            intention and built to last.
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mockProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-2xl bg-secondary/5 mb-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">
                    {product.category === "Bags" && "👜"}
                    {product.category === "Home" && "🏠"}
                    {product.category === "Accessories" && "⌚"}
                    {product.category === "Decor" && "🏺"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-300" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                    })
                  }
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-secondary text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium tracking-widest uppercase text-accent">
                  {product.category}
                </span>
                <h3 className="text-lg font-medium text-secondary">
                  {product.name}
                </h3>
                <p className="text-sm text-secondary/50">
                  {product.description}
                </p>
                <p className="text-lg font-semibold text-secondary mt-2">
                  ${product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

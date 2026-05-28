"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["MAGGI SPECIALS", "NORTH INDIAN", "STREET FOOD", "SMOOTHIES & MOCHA"];

const menuItems = [
  { id: 1, name: "Momo Maggi", price: "₹120", category: "MAGGI SPECIALS", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, name: "Italian Cheese Corn Maggi", price: "₹140", category: "MAGGI SPECIALS", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Chicken Tikka Masala", price: "₹320", category: "NORTH INDIAN", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop" },
  { id: 4, name: "Desi Mocha", price: "₹180", category: "SMOOTHIES & MOCHA", img: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1934&auto=format&fit=crop" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("MAGGI SPECIALS");

  return (
    <section className="py-32 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-serif text-5xl mb-8">The Signature</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-[10px] tracking-widest transition-all duration-300 ${
                  activeTab === cat
                  ? "bg-amber-500 text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {menuItems
              .filter((item) => item.category === activeTab)
              .map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass group cursor-pointer overflow-hidden rounded-3xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="font-serif text-2xl">{item.name}</h3>
                      <span className="text-amber-500 font-mono">{item.price}</span>
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">
                      {activeTab === "MAGGI SPECIALS" ? "Our signature fusion delight." : "Creamy, cheesy, perfection."}
                    </p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const cocktails = [
  {
    name: "Embassy Gold",
    desc: "A luxurious golden cocktail designed for celebrations. Infused with saffron and edible gold.",
    ingredients: "Premium Vodka, Saffron, Lime, Gold Flakes",
    popularity: 98,
    pairing: "Truffle Risotto",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop"
  },
  {
    name: "Neon Skyline",
    desc: "Inspired by Bhubaneswar nightlife. Electric blue hues with a citrus kick.",
    ingredients: "Blue Curacao, Gin, Elderflower, Tonic",
    popularity: 92,
    pairing: "Crispy Lotus Stem",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Midnight Pulse",
    desc: "Bold flavors crafted for late-night energy. A coffee-based mixology marvel.",
    ingredients: "Espresso, Bourbon, Vanilla, Charcoal",
    popularity: 95,
    pairing: "Dark Chocolate Fondant",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Rooftop Sunset",
    desc: "Fresh citrus profile inspired by golden hour. Light, airy and vibrant.",
    ingredients: "Aperol, Prosecco, Blood Orange, Rosemary",
    popularity: 89,
    pairing: "Smoked Salmon",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function CocktailShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cocktails.length);
  const prev = () => setIndex((prev) => (prev - 1 + cocktails.length) % cocktails.length);

  return (
    <section className="py-40 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] font-bold">Mixology Art</h2>
              <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                SIGNATURE <br /> <span className="text-white/20">COCKTAILS</span>
              </h3>
            </div>

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-4xl font-bold text-brand-gold italic uppercase tracking-tight">{cocktails[index].name}</h4>
                <p className="text-white/50 text-lg leading-relaxed italic">&quot;{cocktails[index].desc}&quot;</p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2">Ingredients</span>
                    <span className="text-sm font-medium">{cocktails[index].ingredients}</span>
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2">Best Paired With</span>
                    <span className="text-sm font-medium">{cocktails[index].pairing}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-brand-gold">
                <Star size={14} fill="#D4AF37" />
                <span className="text-xs uppercase tracking-widest font-bold">{cocktails[index].popularity}% Popularity</span>
              </div>
            </motion.div>

            <div className="flex items-center space-x-6 pt-4">
                <button onClick={prev} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                    <ArrowLeft size={20} />
                </button>
                <button onClick={next} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                    <ArrowRight size={20} />
                </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative aspect-square">
             <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
                className="w-full h-full relative z-10"
                data-cursor="view"
             >
                <Image
                    src={cocktails[index].image}
                    alt={cocktails[index].name}
                    fill
                    className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                <div className="absolute inset-0 bg-brand-gold/5 blur-[80px] -z-10 rounded-full animate-pulse" />
             </motion.div>

             {/* Decorative Label */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rotate-90 text-[10vw] font-black text-white/[0.03] select-none uppercase italic">
                CRAFTED
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

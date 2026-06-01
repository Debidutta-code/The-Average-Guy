"use client";

import { motion } from "framer-motion";
import { Music, GlassWater, Utensils, Shield, Sparkles } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Rooftop Lounge",
    desc: "Open-air skyline ambience with premium seating.",
    icon: Sparkles,
    cursor: "explore",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "DJ Nights",
    desc: "Weekly nightlife experiences featuring energetic music and live DJs.",
    icon: Music,
    cursor: "details",
    img: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Signature Cocktails",
    desc: "Crafted drinks designed for Embassy's nightlife culture.",
    icon: GlassWater,
    cursor: "view",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop"
  },
  {
    title: "Fine Dining",
    desc: "Multi-cuisine menu with elevated presentation.",
    icon: Utensils,
    cursor: "explore",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "VIP Experience",
    desc: "Private tables, premium service and exclusive experiences.",
    icon: Shield,
    cursor: "reserve",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Celebrations",
    desc: "Birthdays, anniversaries, corporate gatherings and private parties.",
    icon: Sparkles,
    cursor: "reserve",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function WhyVisit() {
  return (
    <section className="py-40 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6">Discovery</h2>
            <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                WHY PEOPLE <span className="text-white/20">VISIT</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    data-cursor={card.cursor}
                    className="group relative h-[500px] overflow-hidden rounded-sm border border-white/5"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1.5s]"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-[1]" />

                    <div className="absolute inset-0 p-12 flex flex-col justify-end items-start z-[2]">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-black transition-all duration-500">
                            <card.icon size={20} />
                        </div>
                        <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                            {card.title}
                        </h4>
                        <p className="text-white/40 text-sm leading-relaxed max-w-[250px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            {card.desc}
                        </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-white/10 group-hover:border-brand-gold transition-colors duration-500" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

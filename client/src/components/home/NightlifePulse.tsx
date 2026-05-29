"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Music, GlassWater, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const clubFeatures = [
  {
    title: "DJ Nights",
    icon: Music,
    image: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
    desc: "Bhubaneswar's elite beats curated by top-tier residents."
  },
  {
    title: "Signature Mixology",
    icon: GlassWater,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
    desc: "Avant-garde cocktails crafted for the adventurous."
  },
  {
    title: "VIP Lounge",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    desc: "Exclusive secluded zones for total privacy."
  },
  {
    title: "Electric Vibe",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    desc: "Immersive lighting and sound system for the ultimate high."
  }
];

export default function NightlifePulse() {
  const [bars, setBars] = useState<{ height: number[]; duration: number }[]>([]);

  useEffect(() => {
    const generatedBars = [...Array(40)].map(() => ({
      height: [20, Math.random() * 80 + 40, 20],
      duration: Math.random() * 0.5 + 0.5
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBars(generatedBars);
  }, []);

  return (
    <section className="relative py-40 bg-brand-black overflow-hidden">
      {/* Moving Spotlight Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <motion.div
            animate={{
                x: ["-20%", "20%", "-20%"],
                y: ["-10%", "10%", "-10%"],
                rotate: [0, 10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-brand-gold/10 blur-[150px] rounded-full"
         />
         <motion.div
            animate={{
                x: ["20%", "-20%", "20%"],
                y: ["10%", "-10%", "10%"],
                rotate: [0, -10, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-brand-gold/10 blur-[150px] rounded-full"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32 space-y-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-brand-gold text-xs uppercase tracking-[0.8em] font-bold"
          >
            The Nightlife Pulse
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none text-white"
          >
            UNLEASH THE <span className="text-white/20">ENERGY</span>
          </motion.h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clubFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
              className="group relative h-[600px] overflow-hidden rounded-sm"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
                    <feature.icon size={20} />
                </div>
                <div className="space-y-2">
                    <h4 className="text-3xl font-bold uppercase italic tracking-tighter text-white">{feature.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {feature.desc}
                    </p>
                </div>
              </div>

              {/* Top Right Index */}
              <div className="absolute top-8 right-8 text-white/10 text-6xl font-black italic select-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audio Wave Visual (CSS Animation) */}
        <div className="mt-40 flex items-center justify-center space-x-1 h-32 opacity-20">
           {bars.map((bar, i) => (
             <motion.div
                key={i}
                animate={{
                    height: bar.height,
                }}
                transition={{
                    duration: bar.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-1 bg-brand-gold rounded-full"
             />
           ))}
        </div>

        <div className="text-center mt-20">
            <h5 className="text-xl font-bold uppercase italic tracking-tighter text-white mb-8">Ready to lose yourself in the music?</h5>
            <button className="px-12 py-5 border border-brand-gold text-brand-gold uppercase tracking-widest text-[10px] font-black hover:bg-brand-gold hover:text-brand-black transition-all duration-500 rounded-none shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                Join The Guestlist
            </button>
        </div>
      </div>
    </section>
  );
}

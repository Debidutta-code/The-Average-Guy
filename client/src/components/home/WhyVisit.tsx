"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Sparkles, Music, GlassWater, Utensils, Shield, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "01",
    title: "Rooftop Lounge",
    desc: "Open-air skyline ambience with premium seating. Experience Bhubaneswar from above.",
    bgText: "ROOFTOP",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop",
    icon: Sparkles,
    type: "rooftop"
  },
  {
    id: "02",
    title: "DJ Nights",
    desc: "Weekly nightlife experiences featuring energetic music and live DJs. Pulse of the city.",
    bgText: "NIGHTS",
    image: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
    icon: Music,
    type: "dj"
  },
  {
    id: "03",
    title: "Signature Cocktails",
    desc: "Crafted drinks designed for Embassy's nightlife culture. Mixology at its finest.",
    bgText: "MIXOLOGY",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
    icon: GlassWater,
    type: "cocktail"
  },
  {
    id: "04",
    title: "Fine Dining",
    desc: "Multi-cuisine menu with elevated presentation. Culinary excellence meets digital luxury.",
    bgText: "DINING",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    icon: Utensils,
    type: "dining"
  },
  {
    id: "05",
    title: "VIP Experience",
    desc: "Private tables, premium service and exclusive experiences. For those who demand more.",
    bgText: "VIP",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    icon: Shield,
    type: "vip"
  },
  {
    id: "06",
    title: "Celebrations",
    desc: "Birthdays, anniversaries and corporate takeovers. We host your most important moments.",
    bgText: "MEMORIES",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    icon: Sparkles,
    type: "celebration"
  }
];

export default function WhyVisit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * experiences.length),
            experiences.length - 1
          );
          setIndex(index);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-brand-black overflow-hidden">
      {/* Background Layer: Kinetic Typography & Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
                className="absolute inset-0"
            >
                <Image
                    src={experiences[activeIndex].image}
                    alt={experiences[activeIndex].title}
                    fill
                    className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
            </motion.div>
        </AnimatePresence>

        {/* Oversized Kinetic Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.h4
                    key={activeIndex}
                    initial={{ y: "20%", opacity: 0, scale: 1.2 }}
                    animate={{ y: 0, opacity: 0.05, scale: 1 }}
                    exit={{ y: "-20%", opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1.5, ease: "anticipate" }}
                    className="text-[40vw] font-black italic tracking-tighter text-white select-none whitespace-nowrap"
                >
                    {experiences[activeIndex].bgText}
                </motion.h4>
            </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-24 items-center">

            {/* Left: Content */}
            <div className="space-y-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-6">
                            <span className="text-brand-gold font-black italic text-5xl">{experiences[activeIndex].id}</span>
                            <div className="h-[1px] w-12 bg-brand-gold/30" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Embassy Experience</span>
                        </div>

                        <h3 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                            {experiences[activeIndex].title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-white/20 block" : "block"}>{word}</span>
                            ))}
                        </h3>

                        <p className="text-white/50 text-xl leading-relaxed max-w-md italic">
                            &quot;{experiences[activeIndex].desc}&quot;
                        </p>

                        <button className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-black text-brand-gold group hover:text-white transition-colors pt-4">
                            <span>Explore Details</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right: Decorative Visual/Icon */}
            <div className="hidden lg:flex justify-center relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                        transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
                        className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] backdrop-blur-3xl relative"
                    >
                        {/* Dynamic Floating Elements based on type */}
                        {experiences[activeIndex].type === "dj" && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                {[...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            height: [20, 60, 20],
                                            opacity: [0.2, 0.5, 0.2]
                                        }}
                                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-1 bg-brand-gold mx-1 rounded-full"
                                    />
                                ))}
                            </div>
                        )}

                        {experiences[activeIndex].type === "cocktail" && (
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-40 h-40 bg-brand-gold/10 blur-3xl rounded-full" />
                            </motion.div>
                        )}

                        <div className="relative z-10">
                            {(() => {
                                const Icon = experiences[activeIndex].icon;
                                return <Icon size={80} className="text-brand-gold" />;
                            })()}
                        </div>

                        {/* Status Label */}
                        <div className="absolute -bottom-4 bg-brand-gold text-brand-black px-6 py-2 text-[10px] font-black uppercase tracking-widest italic rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            Premium Destination
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Scroll Indicator Inside Panel */}
                <div className="absolute bottom-0 right-0 flex flex-col items-center space-y-4">
                    <div className="h-24 w-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-0 top-0 h-1/2 bg-brand-gold"
                        />
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-white/20 rotate-90">Experience</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

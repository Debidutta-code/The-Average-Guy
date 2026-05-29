"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function RooftopShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [particles, setParticles] = useState<{ x: string; y: string; opacity: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random(),
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden bg-brand-black py-24"
    >
      {/* Background Skyline Visual */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0 opacity-40 grayscale"
      >
        <Image
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop"
          alt="Bhubaneswar Skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
      </motion.div>

      {/* Floating Particles/Light Leaks */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-gold/30 rounded-full blur-[1px]"
            initial={{
              x: p.x,
              y: p.y,
              opacity: p.opacity
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ opacity, y: y1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] font-bold">The Rooftop Lounge</h2>
              <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
                Elevated <br />
                <span className="text-white/20">Nights Above</span> <br />
                The City
              </h3>
            </div>

            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-lg font-light">
              Experience Bhubaneswar from a new perspective. Our rooftop sanctuary blends luxury dining with an electric skyline energy.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white italic tracking-tighter">Skyline Views</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/30">360° Panorama</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white italic tracking-tighter">Elite Ambience</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/30">Luxury Seating</span>
                </div>
            </div>

            <Button className="px-12 py-8 bg-brand-gold text-brand-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-500 rounded-none shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                Reserve Rooftop Table
            </Button>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                    alt="Rooftop Dining"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white font-bold italic uppercase tracking-tighter text-2xl">Luxury Dining. Signature Cocktails. Skyline Energy.</p>
                </div>
            </div>

            {/* Ambient Glow Effect */}
            <div className="absolute -inset-10 bg-brand-gold/5 blur-[100px] -z-10 rounded-full animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

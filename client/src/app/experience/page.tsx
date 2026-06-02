"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-brand-black min-h-[300vh]">
      {/* Cinematic Intro */}
      <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: useTransform(scrollYProgress, [0, 0.3], [1, 1.5]), opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
            alt="The Lounge"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-brand-black/60" />
        </motion.div>

        <div className="relative z-10 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter text-white"
          >
            THE <span className="text-brand-gold">SOUL</span>
          </motion.h1>
          <p className="text-xs uppercase tracking-[0.5em] text-white/40 italic">Scroll to breathe the atmosphere</p>
        </div>
      </section>

      {/* Layered Storytelling Section 1 */}
      <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.6], [0, 1, 0]),
                    x: useTransform(scrollYProgress, [0.3, 0.4, 0.6], [-100, 0, -100])
                }}
                className="space-y-8"
            >
                <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em]">The Ambience</h2>
                <h3 className="text-4xl md:text-7xl font-bold italic uppercase tracking-tighter text-white leading-none">
                    Digital <br /> <span className="text-white/20">Brutalism</span>
                </h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-md">
                    Our design philosophy merges raw architectural elements with sophisticated neon aesthetics. It&apos;s a space that feels alive, breathing through light and shadow.
                </p>
            </motion.div>

            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.6], [0, 1, 0]),
                    scale: useTransform(scrollYProgress, [0.3, 0.4, 0.6], [0.8, 1, 0.8])
                }}
                className="aspect-[4/5] relative rounded-sm overflow-hidden"
            >
                <Image
                    src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop"
                    alt="Interior Detail"
                    fill
                    className="object-cover grayscale"
                />
            </motion.div>
        </div>
      </section>

      {/* Layered Storytelling Section 2 */}
      <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 0]),
                    scale: useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0.8, 1, 0.8])
                }}
                className="aspect-square relative rounded-sm overflow-hidden md:order-2"
            >
                <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                    alt="Mixology"
                    fill
                    className="object-cover"
                />
            </motion.div>

            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 0]),
                    x: useTransform(scrollYProgress, [0.6, 0.7, 0.9], [100, 0, 100])
                }}
                className="space-y-8 md:text-right"
            >
                <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em]">The Mixology</h2>
                <h3 className="text-4xl md:text-7xl font-bold italic uppercase tracking-tighter text-white leading-none">
                    Liquid <br /> <span className="text-white/20">Alchemy</span>
                </h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-md ml-auto">
                    Every cocktail is a potion. We blend exotic infusions with modern techniques to create flavors that linger long after the night ends.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Final CTA Spacer */}
      <div className="h-screen flex items-center justify-center relative bg-brand-black">
         <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]) }}
            className="text-center space-y-12"
         >
            <h2 className="text-5xl md:text-[8vw] font-black italic uppercase tracking-tighter text-white leading-none">
                Write Your <br /> <span className="text-brand-gold">Own Chapter</span>
            </h2>
            <button className="px-12 py-6 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-500 rounded-full">
                Visit Embassy
            </button>
         </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          THE FUTURE OF <br /> HYDRATION
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience a next-generation product showcase powered by advanced motion design and cinematic scrolling.
        </p>
        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Explore More
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

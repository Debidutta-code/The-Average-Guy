"use client";

import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      <HeroScene />

      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/20 to-brand-black z-[1]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.3, 1], delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-xs md:text-sm uppercase tracking-[0.5em] text-brand-gold font-medium">
            Elevated Dining Experience
          </h2>

          <h1 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-none italic uppercase">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.7 }}
                className="block"
              >
                EMBASSY
              </motion.span>
            </span>
            <span className="block overflow-hidden text-white/20">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.8 }}
                className="block"
              >
                BHUBANESWAR
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Where culinary art meets the vibrant pulse of nightlife. Experience the finest flavors in an atmosphere designed for the extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link
              href="/reservations"
              className="px-10 py-4 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 rounded-sm"
            >
              Book Your Table
            </Link>
            <Link
              href="/menu"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-500 rounded-sm"
            >
              Explore Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-90">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}

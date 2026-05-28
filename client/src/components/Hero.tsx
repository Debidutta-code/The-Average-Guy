"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero({ onReserve }: { onReserve?: () => void }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 border border-amber-500/30 rounded-full text-[10px] tracking-[0.3em] text-amber-500 uppercase mb-8">
            Bhubaneswar, Odisha
          </span>
          <h1 className="font-serif text-7xl md:text-9xl tracking-tighter leading-[0.9]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                CINEMATIC
              </motion.span>
            </span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-900">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block italic"
              >
                COFFEE
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex justify-center gap-6"
          >
            <Magnetic>
              <button
                onClick={onReserve}
                className="px-10 py-4 bg-amber-500 text-black font-bold rounded-full tracking-[0.2em] uppercase text-[10px] hover:bg-amber-400 transition-colors"
              >
                Book Experience
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-amber-500 to-transparent" />
          <span className="text-[10px] tracking-widest text-white/40 uppercase rotate-90 origin-left ml-2">
            Scroll to Explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}

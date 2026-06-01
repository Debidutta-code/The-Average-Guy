"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-brand-black flex flex-col items-center justify-center p-10"
        >
          <div className="relative overflow-hidden mb-12">
            <motion.h1
              initial={{ y: "100%", skewY: 10 }}
              animate={{ y: 0, skewY: 0 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
              className="text-4xl md:text-8xl font-black tracking-tighter text-white italic uppercase"
            >
              EMBASSY
            </motion.h1>
            {/* Gold Line Draw */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-gold origin-left"
            />
          </div>

          <div className="w-full max-w-xs h-[1px] bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand-gold/40"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-col items-center space-y-2"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold">Bhubaneswar</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-black italic">Elevated Nightlife</p>
          </motion.div>

          <div className="absolute bottom-10 right-10 text-white/[0.03] text-[15vw] font-black italic select-none">
            {Math.floor(progress)}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-brand-black flex flex-col items-center justify-center p-10"
        >
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
              className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase italic"
            >
              EMBASSY
            </motion.h1>
          </div>

          <div className="w-full max-w-xs h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="mt-4 text-xs tracking-widest uppercase"
          >
            Bhubaneswar • Elevated Experience
          </motion.p>

          <div className="absolute bottom-10 right-10 text-white/20 text-8xl font-black italic select-none">
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

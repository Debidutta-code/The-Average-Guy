"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-serif text-4xl tracking-[0.2em] text-amber-500 mb-4">
          D&apos; CAFE
        </h1>
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-amber-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            style={{ originX: 0 }}
          />
        </div>
        <p className="mt-4 font-mono text-[10px] tracking-widest text-white/40 uppercase">
          Brewing Excellence {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
}

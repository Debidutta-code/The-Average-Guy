"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const TextReveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn = ({ children, delay = 0, y = 20 }: { children: ReactNode; delay?: number; y?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

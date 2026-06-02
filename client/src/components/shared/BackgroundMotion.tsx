"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundMotion() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ x: string; y: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const generatedParticles = [...Array(15)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generatedParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Gradients */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-full h-full bg-brand-gold/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["10%", "-10%", "10%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-brand-amber/5 blur-[120px] rounded-full"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{
                x: p.x,
                y: p.y,
                opacity: 0
            }}
            animate={{
                y: ["0%", "100%"],
                opacity: [0, 0.3, 0]
            }}
            transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay
            }}
            className="absolute w-[1px] h-[1px] bg-brand-gold rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

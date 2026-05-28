'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface Particle {
  id: number;
  x: string;
  y: string;
  width: number;
  height: number;
  duration: number;
  delay: number;
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Wrap in a microtask/timeout to avoid synchronous setState in effect lint error
    const timer = setTimeout(() => {
      const newParticles = [...Array(30)].map((_, i) => ({
        id: i,
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5
      }));
      setParticles(newParticles);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full overflow-hidden bg-brand-dark-blue">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="sticky top-0 h-screen w-full"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
           <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue/60 via-brand-dark-blue/40 to-brand-dark-blue" />
        </div>

        {/* Floating Particles (Mediterranean Gold Dust) */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-brand-gold/20 blur-sm"
            initial={{
              x: particle.x,
              y: particle.y,
              width: particle.width,
              height: particle.height
            }}
            animate={{
              y: [null, '-20vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6 overflow-hidden"
          >
             <span className="text-brand-gold font-bold tracking-[0.6em] uppercase text-xs md:text-sm block mb-4">
                East India&apos;s 1st Greek Themed Rooftop
             </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            className="text-7xl md:text-[12rem] font-serif font-light text-white leading-none tracking-tighter uppercase mb-8"
          >
            OOPRE
          </motion.h1>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1.5 }}
             className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
             <div className="text-white/60 text-lg md:text-2xl font-light max-w-xl italic">
                &ldquo;Dine, Wine & Shine&rdquo; <br/>
                <span className="text-sm md:text-base not-italic uppercase tracking-widest text-brand-blue font-bold">Bhubaneswar&apos;s Premier Destination</span>
             </div>

             <div className="flex gap-6">
                <Link href="/reservations" className="bg-brand-blue text-white px-10 py-4 font-bold tracking-widest hover:bg-brand-gold hover:text-black transition-all duration-500 rounded-sm">
                   RESERVE NOW
                </Link>
             </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          >
             <span className="text-[10px] tracking-[0.3em] uppercase text-white font-bold">Discover</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

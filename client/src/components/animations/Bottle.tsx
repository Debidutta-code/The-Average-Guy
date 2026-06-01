"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Bottle() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Direct link to scroll
        },
      });

      // Stage 1: 0% -> 25% (Scale 1.0 to 1.1, Rotate slowly)
      tl.to(bottleRef.current, {
        scale: 1.1,
        rotateY: 45,
        duration: 0.25,
        ease: "power1.inOut",
      });

      // Stage 2: 25% -> 60% (Accelerate rotation, Scale to 1.25, Move downward)
      tl.to(scrollContainerRef.current, {
        yPercent: 15, // Using yPercent as suggested for better predictability
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.25);

      tl.to(bottleRef.current, {
        rotateY: 720,
        scale: 1.25,
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.25);

      // Stage 3: 60% -> 90% (Move downward significantly, Continue spinning)
      tl.to(scrollContainerRef.current, {
        yPercent: 150, // Move mostly off-screen downward
        duration: 0.3,
        ease: "power3.in",
      }, 0.6);

      tl.to(bottleRef.current, {
        rotateY: 1440,
        rotateX: 15,
        filter: "blur(4px)",
        duration: 0.3,
        ease: "power3.inOut",
      }, 0.6);

      // Stage 4: 90% -> 100% (Arrives in Section 2, Slows down, Settles)
      // We arrive from the top into the center of Section 2
      tl.fromTo(scrollContainerRef.current,
        { yPercent: -150 }, // Come from the top
        {
          yPercent: 0,
          duration: 0.1,
          ease: "power2.out",
        }, 0.9);

      tl.to(bottleRef.current, {
        rotateY: 1500,
        rotateX: 0,
        filter: "blur(0px)",
        scale: 1.1,
        duration: 0.1,
        ease: "power2.out",
      }, 0.9);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {/* Container for GSAP Scroll Position */}
      <div ref={scrollContainerRef} className="relative w-64 h-[450px] will-change-transform">
        {/* Container for Framer Motion Idle Animation */}
        <motion.div
          ref={bottleRef}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full will-change-transform"
        >
          {/* Modern Bottle Representation */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-blue-600/10 rounded-[60px] border border-white/20 backdrop-blur-md shadow-2xl overflow-hidden">
            {/* Liquid Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-blue-500/20 animate-pulse" />

            {/* Reflection */}
            <div className="absolute top-0 left-1/4 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

            {/* Label */}
            <div className="absolute top-1/2 left-0 right-0 h-24 bg-white/5 border-y border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
              <span className="text-[10px] tracking-[0.6em] font-bold text-white/60 uppercase mb-1">AQUA</span>
              <span className="text-[8px] tracking-[0.3em] font-medium text-white/30 uppercase">PURE FUTURE</span>
            </div>
          </div>

          {/* Bottle Cap */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-12 bg-white/10 rounded-t-2xl border border-white/20 backdrop-blur-md">
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
          </div>

          {/* Glow Shadow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-12 bg-blue-500/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

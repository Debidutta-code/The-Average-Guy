'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal animation
      const tl = gsap.timeline();

      tl.fromTo(
        '.hero-title span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        '.hero-ctas',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      // Scroll scaling effect for background image
      gsap.to(videoRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Media */}
      <div
        ref={videoRef}
        className="absolute inset-0 z-0 scale-105 transition-transform duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=2070&auto=format&fit=crop"
          alt="OOPRE Rooftop Sunset"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl">
        <div className="overflow-hidden mb-6">
          <h1 ref={titleRef} className="hero-title font-serif text-6xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tighter uppercase leading-[0.8]">
            <span className="block">OOPRE</span>
            <span className="block text-brand-blue drop-shadow-[0_0_30px_rgba(0,48,135,0.3)]">KITCHEN & BAR</span>
          </h1>
        </div>

        <p ref={subtitleRef} className="text-xl md:text-3xl text-white/90 font-medium mb-12 tracking-[0.2em] uppercase font-serif">
          Dine, Wine & Shine
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link href="/reservations" className="bg-brand-blue hover:bg-white hover:text-brand-blue text-white px-12 py-5 text-lg font-bold rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl shadow-brand-blue/20">
            RESERVE A TABLE
          </Link>
          <Link href="/menu" className="border border-white/40 text-white hover:bg-white hover:text-black px-12 py-5 text-lg font-bold rounded-full transition-all duration-500">
            EXPLORE MENU
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">The Rooftop Experience</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-blue via-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}

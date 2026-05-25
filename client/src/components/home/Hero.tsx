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
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal animation
      const tl = gsap.timeline();

      tl.fromTo(
        '.hero-title span',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: 'expo.out' }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        '.hero-ctas',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      );

      // Scroll scaling effect for background image
      gsap.to('.hero-image', {
        scale: 1.15,
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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-ivory flex items-center justify-center">
      {/* Background Media */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Modern White Cafe Interior"
          className="hero-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-brand-ivory z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl">
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-foreground/40 mb-4"
          >
            A Modern Luxury Cafe Experience
          </motion.p>
          <h1 ref={titleRef} className="hero-title text-6xl md:text-8xl lg:text-[10rem] font-serif font-medium text-foreground tracking-tight leading-[0.9]">
            <span className="block">The Monarch</span>
            <span className="block italic ml-4 md:ml-12">Mug</span>
          </h1>
        </div>

        <p ref={subtitleRef} className="text-base md:text-xl text-foreground/60 font-light italic mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed">
          Where premium coffee meets architectural minimalism. <br className="hidden md:block" />
          A sanctuary for conversations and curated lifestyle.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link href="/menu" className="group relative px-12 py-5 overflow-hidden rounded-full bg-foreground text-background transition-all duration-500 hover:scale-105">
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em]">Explore Menu</span>
            <div className="absolute inset-0 bg-brand-gold translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
          <Link href="/reservations" className="group px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground border border-foreground/10 rounded-full hover:bg-foreground/5 transition-all duration-500">
            Reserve Table
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-foreground/30 text-[9px] uppercase tracking-[0.3em] font-bold">Begin the journey</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/20 to-transparent" />
      </motion.div>
    </section>
  );
}

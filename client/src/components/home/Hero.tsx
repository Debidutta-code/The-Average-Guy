'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

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
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Luxury Cafe Interior"
          fill
          className="object-cover grayscale-[0.2]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="overflow-hidden mb-4">
          <h1 ref={titleRef} className="hero-title text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tighter uppercase leading-[0.9]">
            <span className="block">OLD TOWN</span>
            <span className="block text-primary italic">CAFE</span>
          </h1>
        </div>

        <p ref={subtitleRef} className="text-lg md:text-2xl text-white/80 font-medium mb-12 tracking-wide max-w-2xl mx-auto">
          A Heritage Haven in the Heart of Old Town Bhubaneswar.
          Where Comfort Meets Calm.
        </p>

        <div className="hero-ctas flex flex-col sm:row items-center justify-center gap-6">
          <Link href="/menu" className="bg-primary hover:bg-white hover:text-black text-white px-10 py-5 text-lg font-bold rounded-full transition-all duration-500 transform hover:scale-110">
            Explore Menu
          </Link>
          <Link href="/reservations" className="border border-white/20 text-white hover:bg-white/10 px-10 py-5 text-lg font-bold rounded-full transition-all duration-500">
            Reserve Table
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
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

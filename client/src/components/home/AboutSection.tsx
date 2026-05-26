'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth revealing animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.about-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
              alt="The Monarch Mug Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay" />
          </div>

          <div ref={contentRef} className="space-y-12">
            <div className="space-y-6">
              <span className="about-reveal block text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Our Philosophy</span>
              <h2 className="about-reveal text-5xl md:text-7xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
                Crafting <span className="italic">Moments</span> of Quiet Luxury.
              </h2>
            </div>

            <p className="about-reveal text-lg text-foreground/60 leading-relaxed font-light italic">
              The Monarch Mug is a modern white-themed sanctuary in Bhubaneswar. We believe in the beauty of minimalism, the depth of meaningful conversations, and the art of premium coffee culture.
            </p>

            <div className="about-reveal space-y-8 border-t border-black/5 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-3">The Space</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">Designed with natural lighting and modern architecture to create a calming, work-friendly environment.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-3">The Experience</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">From curated creative meetups to elevated dining, every detail is refined for your comfort.</p>
                </div>
              </div>
            </div>

            <div className="about-reveal flex flex-wrap gap-4 pt-4">
              {['White Aesthetic', 'Minimal Luxury', 'Coffee Culture', 'Work Friendly', 'Calm Ambience'].map((tag) => (
                <span key={tag} className="px-6 py-2 border border-black/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-foreground/40 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

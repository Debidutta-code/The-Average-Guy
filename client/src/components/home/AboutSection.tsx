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
      // Sticky storytelling animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, borderRadius: '100px' },
        {
          scale: 1,
          opacity: 1,
          borderRadius: '24px',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={imageRef} className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
            alt="Cafe Culture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
        </div>

        <div ref={contentRef} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Story</h3>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              MORE THAN JUST A <br />
              <span className="text-white/40">CAFE EXPERIENCE.</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            The Average Guy is a modern aesthetic cafe and community hangout space in Bhubaneswar. Known for its cozy ambiance, social events, networking culture, and chill vibes.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h4 className="text-3xl font-black text-brand-orange mb-2">4.4+</h4>
              <p className="text-white/40 text-sm uppercase tracking-wider font-bold">Google Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-brand-orange mb-2">150+</h4>
              <p className="text-white/40 text-sm uppercase tracking-wider font-bold">Happy Reviews</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            {['Cozy', 'Aesthetic', 'Pet Friendly', 'Work Friendly', 'Chill Vibes'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

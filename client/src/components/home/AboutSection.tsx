'use client';

import React, { useEffect, useRef } from 'react';
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
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
            alt="Greek Rooftop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
        </div>

        <div ref={contentRef} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm">East India’s 1st Greek Themed Rooftop</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-[1.1] tracking-tighter">
              GREEK <br />
              <span className="text-brand-blue">SPIRIT</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
            OOPRE Kitchen & Bar is a lifestyle destination designed to transport you straight to the sun-drenched shores of Mykonos. Located in the heart of Bhubaneswar, we offer a unique blend of Mediterranean elegance and urban energy.
          </p>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
             From the crisp white and blue accents of our decor to the world-class cuisines on our menu, every detail is crafted to create unforgettable memories.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-3xl font-serif font-black text-brand-gold mb-2">SKYLINE</h4>
              <p className="text-white/40 text-sm uppercase tracking-wider font-bold">Stunning Views</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif font-black text-brand-gold mb-2">WORLD</h4>
              <p className="text-white/40 text-sm uppercase tracking-wider font-bold">Global Flavors</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            {['Rooftop', 'Greek Aesthetic', 'Live Music', 'Global Cuisine', 'Sunset Views'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full text-xs font-bold text-white/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

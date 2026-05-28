'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RooftopOdyssey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const rooftopRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(skyRef.current, { yPercent: -20, opacity: 0.5 }, 0)
        .fromTo(rooftopRef.current, { yPercent: 100 }, { yPercent: 0 }, 0)
        .to(rooftopRef.current, { scale: 1.1 }, 0.5)
        .fromTo(cityRef.current, { yPercent: 100 }, { yPercent: 0 }, 0.8);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-dark-blue">
      {/* Sky Layer */}
      <div ref={skyRef} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506466010722-395ee2bef877?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-60"
          alt="Santorini Sky"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue via-transparent to-brand-dark-blue" />
      </div>

      {/* Title Overlay */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 text-center w-full px-6">
        <h2 className="font-serif text-5xl md:text-8xl text-white uppercase tracking-tighter">
          The Rooftop <span className="text-brand-blue">Odyssey</span>
        </h2>
        <p className="text-brand-gold font-bold tracking-[0.3em] uppercase mt-4">A Vertical Journey to the Clouds</p>
      </div>

      {/* Rooftop Layer */}
      <div ref={rooftopRef} className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Rooftop Vibe"
        />
        <div className="absolute bottom-1/4 left-10 md:left-20 z-20 max-w-md">
           <h3 className="font-serif text-4xl text-white mb-4">Mediterranean Soul</h3>
           <p className="text-white/70">Experience the essence of the Greek islands in the heart of the city.</p>
        </div>
      </div>

      {/* City View Layer */}
      <div ref={cityRef} className="absolute inset-0 z-20">
        <img
          src="https://images.unsplash.com/photo-1577640905050-83665af366b9?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Bhubaneswar City View"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue via-brand-dark-blue/20 to-transparent" />
        <div className="absolute bottom-20 right-10 md:right-20 z-30 max-w-md text-right">
           <h3 className="font-serif text-4xl text-white mb-4">Urban Sanctuary</h3>
           <p className="text-white/70">Where the city skyline meets Santorini blues.</p>
        </div>
      </div>
    </section>
  );
}

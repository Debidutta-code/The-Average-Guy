"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Music, GlassWater, Shield, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: "DJ Nights",
    bgText: "ENERGY",
    icon: Music,
    image: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
    desc: "Bhubaneswar's elite beats curated by top-tier residents. Lose yourself in the sound."
  },
  {
    title: "Signature Mixology",
    bgText: "VIBES",
    icon: GlassWater,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
    desc: "Avant-garde cocktails crafted for the adventurous. Liquid art in every glass."
  },
  {
    title: "VIP Lounge",
    bgText: "ELITE",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    desc: "Exclusive secluded zones for total privacy. Experience hospitality without limits."
  },
  {
    title: "Electric Vibe",
    bgText: "NIGHTLIFE",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    desc: "Immersive lighting and sound system for the ultimate high. The city's heartbeat."
  }
];

export default function NightlifePulse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".nightlife-panel");

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollRef.current?.offsetWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-brand-black overflow-hidden">
      <div ref={scrollRef} className="flex h-full w-[400vw]">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="nightlife-panel relative h-screen w-screen flex items-center justify-center overflow-hidden border-r border-white/5"
          >
            {/* Background Kinetic Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                <h4 className="text-[30vw] font-black italic tracking-tighter text-white select-none whitespace-nowrap">
                    {panel.bgText}
                </h4>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">

                <div className="relative group overflow-hidden rounded-sm aspect-[16/10] lg:aspect-square">
                    <Image
                        src={panel.image}
                        alt={panel.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-all duration-700" />
                </div>

                <div className="space-y-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                                <panel.icon className="text-brand-gold" size={20} />
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Unleash The Energy</span>
                        </div>
                        <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                            {panel.title.split(' ').map((word, idx) => (
                                <span key={idx} className={idx === 1 ? "text-white/20 block" : "block"}>{word}</span>
                            ))}
                        </h3>
                    </div>

                    <p className="text-white/50 text-xl leading-relaxed max-w-md italic border-l border-brand-gold/20 pl-8">
                        &quot;{panel.desc}&quot;
                    </p>

                    <div className="flex items-center space-x-12">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black italic text-white tracking-tighter">100%</span>
                            <span className="text-[8px] uppercase tracking-widest text-white/20">Immersion</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black italic text-white tracking-tighter">Premium</span>
                            <span className="text-[8px] uppercase tracking-widest text-white/20">Hospitality</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Panel Index Overlay */}
            <div className="absolute bottom-12 right-12 text-white/5 text-[15vw] font-black italic select-none leading-none">
                0{i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

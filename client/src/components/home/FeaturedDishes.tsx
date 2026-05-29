"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const signatureDishes = [
  {
    title: "Truffle Risotto",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop",
    description: "Creamy arborio rice infused with black truffle oil and finished with aged parmesan.",
  },
  {
    title: "Smoked Salmon",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    description: "Cold-smoked Atlantic salmon with capers, red onion, and dill cream cheese.",
  },
  {
    title: "Golden Ribeye",
    category: "Signature",
    image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=2070&auto=format&fit=crop",
    description: "Prime ribeye steak crusted with herbs and served with bone marrow butter.",
  },
];

export default function FeaturedDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-brand-black">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[300vw] flex flex-row relative"
        >
          {/* Section 1: Intro */}
          <div className="h-screen w-screen flex flex-col items-center justify-center px-6">
            <div className="max-w-4xl text-center space-y-8">
              <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em]">The Showcase</h2>
              <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
                Signature <br /> <span className="text-white/20">Creations</span>
              </h3>
              <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
                A curation of our most celebrated dishes, crafted with precision and passion to elevate your palate.
              </p>
            </div>
          </div>

          {/* Section 2 & 3: Dishes */}
          {signatureDishes.map((dish, index) => (
            <div
              key={index}
              className="h-screen w-screen flex items-center justify-center px-6 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div className="relative group overflow-hidden rounded-sm">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-all duration-700" />
                </div>

                <div className="space-y-6">
                  <span className="text-brand-gold text-xs uppercase tracking-widest">{dish.category}</span>
                  <h4 className="text-4xl md:text-6xl font-bold italic tracking-tighter uppercase">{dish.title}</h4>
                  <p className="text-white/50 text-lg leading-relaxed max-w-md">
                    {dish.description}
                  </p>
                  <button className="text-xs uppercase tracking-widest border-b border-brand-gold pb-2 hover:text-brand-gold transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] text-[30vw] font-black italic select-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

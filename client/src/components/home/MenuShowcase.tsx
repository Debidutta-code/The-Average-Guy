'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const menuItems = {
  greek: [
    { name: 'Moussaka Classic', price: '₹540', desc: 'Layers of eggplant, minced meat, and béchamel sauce.' },
    { name: 'Souvlaki Platter', price: '₹480', desc: 'Grilled skewers served with pita, tzatziki, and Greek salad.' },
    { name: 'Spanakopita', price: '₹380', desc: 'Spinach and feta cheese wrapped in flaky phyllo pastry.' },
  ],
  mains: [
    { name: 'Wood-Fired Pepperoni Pizza', price: '₹520', desc: 'Hand-stretched dough with premium pepperoni and mozzarella.' },
    { name: 'Fettuccine Alfredo', price: '₹460', desc: 'Rich and creamy parmesan sauce with fresh parsley.' },
    { name: 'Rooftop Special Burger', price: '₹490', desc: 'Double wagyu beef patty with truffle mayo.' },
  ],
  cocktails: [
    { name: 'Mykonos Sunset', price: '₹550', desc: 'Premium gin, elderflower, and fresh grapefruit.' },
    { name: 'The Oopre Sour', price: '₹580', desc: 'Bourbon, spiced honey, and aromatic bitters.' },
    { name: 'Santorini Spritz', price: '₹520', desc: 'Prosecco, Aperol, and a splash of Mediterranean soda.' },
  ],
};

export function MenuShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const windowWidth = window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -(scrollWidth - windowWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: '#menu-showcase-container',
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="menu-showcase-container" className="h-screen w-full overflow-hidden bg-brand-dark-blue flex items-center">
      <div className="absolute top-10 left-10 md:left-20 z-10 mt-10">
          <h2 className="text-5xl md:text-8xl font-serif font-light text-white tracking-tighter uppercase leading-none text-shadow-lg">
            Flavors <br/><span className="text-brand-blue ml-10 md:ml-20">of the World</span>
          </h2>
          <p className="text-brand-orange font-bold tracking-[0.3em] uppercase mt-4">A Cinematic Culinary Experience</p>
      </div>

      <div ref={scrollRef} className="flex gap-10 pl-[20vw] md:pl-[30vw] pr-20">
        {Object.entries(menuItems).flatMap(([category, items]) =>
          items.map((item, idx) => (
            <div key={`${category}-${idx}`} className="flex-shrink-0 w-[80vw] md:w-[450px] group">
               <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                  <img
                    src={"https://b.zmtcdn.com/data/menus/616/18821616/5c803a27efc7b7c84ace1c7a8306e7ae.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-white/70 text-sm font-light italic">{item.desc}</p>
                  </div>
               </div>
               <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-2 block">{category}</span>
                    <h4 className="text-2xl font-serif text-white uppercase">{item.name}</h4>
                  </div>
                  <span className="text-brand-blue font-serif text-xl">{item.price}</span>
               </div>
            </div>
          ))
        )}

        <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center items-start pl-20">
            <h3 className="text-4xl font-serif text-white mb-8">Ready to taste?</h3>
            <Link href="/menu" className="group flex items-center gap-4 text-white text-xl font-bold uppercase tracking-widest">
               View Full Menu
               <div className="w-12 h-[1px] bg-brand-gold group-hover:w-20 transition-all duration-500" />
            </Link>
        </div>
      </div>
    </section>
  );
}

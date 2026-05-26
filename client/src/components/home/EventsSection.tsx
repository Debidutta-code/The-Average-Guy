'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const dummyEvents = [
  {
    id: '1',
    title: 'Neon Nights: DJ Night',
    date: 'Friday, 9:00 PM',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop',
    category: 'Nightlife',
  },
  {
    id: '2',
    title: 'Sunset Acoustic Sessions',
    date: 'Sunday, 6:00 PM',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8a48740d7?q=80&w=1974&auto=format&fit=crop',
    category: 'Music',
  },
  {
    id: '3',
    title: 'The Greek Feast: Food Fest',
    date: 'Every Saturday',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop',
    category: 'Themed Night',
  },
];

export function EventsSection() {
  return (
    <section className="py-24 bg-brand-dark-blue relative overflow-hidden">
      {/* Decorative Greek Meander Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold opacity-20" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-9xl font-serif font-light text-white leading-[0.8] tracking-tighter uppercase mb-6">
              Live <br /> <span className="text-brand-blue">Moments</span>
            </h2>
            <p className="text-brand-orange font-bold tracking-[0.3em] uppercase text-sm">Where the Night Comes Alive</p>
          </div>
          <Link href="/events" className="group flex items-center gap-4 text-white text-lg font-bold uppercase tracking-widest mt-10 md:mt-20">
            Full Calendar
            <div className="w-10 h-[2px] bg-brand-gold group-hover:w-16 transition-all duration-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative overflow-hidden rounded-sm group h-[400px] md:h-full"
          >
             <img src={dummyEvents[0].image} alt={dummyEvents[0].title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue via-transparent to-transparent z-10" />
             <div className="absolute bottom-10 left-10 z-20">
                <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 block">{dummyEvents[0].date}</span>
                <h3 className="text-4xl md:text-6xl font-serif text-white uppercase mb-4">{dummyEvents[0].title}</h3>
                <p className="text-white/60 mb-6 max-w-md">{dummyEvents[0].category}</p>
                <Link href="/reservations" className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-brand-blue hover:text-white transition-all">BOOK TABLE</Link>
             </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
             {dummyEvents.slice(1, 3).map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative overflow-hidden rounded-sm group"
                >
                   <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue/80 via-transparent to-transparent z-10" />
                   <div className="absolute bottom-6 left-6 z-20">
                      <span className="text-brand-orange text-[10px] font-bold tracking-widest uppercase mb-2 block">{event.date}</span>
                      <h3 className="text-2xl font-serif text-white uppercase">{event.title}</h3>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

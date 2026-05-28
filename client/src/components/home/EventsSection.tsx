'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const dummyEvents = [
  {
    id: '1',
    title: 'Minimalist Latte Art Workshop',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop',
    category: 'Workshop',
  },
  {
    id: '2',
    title: 'Architectural Photography Meet',
    date: 'June 22, 2026',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
    category: 'Creative',
  },
  {
    id: '3',
    title: 'Slow Living Sunday Session',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    category: 'Community',
  },
];

export function EventsSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">What&apos;s On</span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
              Curated <span className="italic">Experiences</span>
            </h2>
          </div>
          <Link href="/events" className="text-foreground/40 hover:text-brand-gold font-bold text-xs uppercase tracking-widest group flex items-center transition-colors duration-300">
            View Calendar <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dummyEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-8">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-foreground rounded-full shadow-sm">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-foreground/40 text-[10px] uppercase tracking-widest font-medium">
                  <Calendar size={14} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <h4 className="text-2xl font-serif font-medium text-foreground leading-tight group-hover:text-brand-gold transition-colors duration-300">{event.title}</h4>
                <Link
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-foreground/60 hover:text-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  Join Experience <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

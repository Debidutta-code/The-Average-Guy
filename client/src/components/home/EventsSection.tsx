'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
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
    <section className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Happening Soon</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-[0.9] tracking-tighter uppercase">
              ROOFTOP <br />
              <span className="text-brand-blue">VIBES</span>
            </h2>
          </div>
          <Link href="/events" className="text-brand-gold font-bold text-lg p-0 h-auto group flex items-center">
            View All Events <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dummyEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 aspect-[4/5]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block">{event.category}</span>
                <h4 className="text-2xl font-serif font-bold text-white mb-4 leading-tight">{event.title}</h4>

                <div className="flex items-center text-white/50 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-white font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  Book Now <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventsSection } from "@/components/home/EventsSection";
import { Calendar, Music, Mic2, Disc, Star } from 'lucide-react';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-brand-dark-blue">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center relative">
         <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-brand-orange font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Bhubaneswar&apos;s Most Vibrant Rooftop</span>
          <h1 className="text-6xl md:text-9xl font-serif font-light text-white tracking-tighter uppercase leading-none mb-8">
            LIVE <br/><span className="text-brand-blue">EXPERIENCES</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
             <div className="flex flex-col items-center gap-2">
                <Disc className="text-brand-gold w-6 h-6" />
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">DJ Nights</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Mic2 className="text-brand-gold w-6 h-6" />
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Live Bands</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Music className="text-brand-gold w-6 h-6" />
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Acoustic Sunsets</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Star className="text-brand-gold w-6 h-6" />
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Themed Parties</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Featured/Upcoming Events (Reusing component for consistency) */}
      <EventsSection />

      {/* Full Schedule / Monthly Calendar Style */}
      <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-10">
           <div>
             <h2 className="text-4xl md:text-6xl font-serif text-white uppercase">Weekly <span className="text-brand-gold">Rhythm</span></h2>
             <p className="text-brand-blue font-bold tracking-widest uppercase text-xs mt-2">Every week at OOPRE</p>
           </div>
           <p className="text-white/40 max-w-xs text-sm font-light italic">Consistent vibes, different energies. Find your perfect night.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { day: 'Wed', title: 'Soulful Wednesdays', type: 'Unplugged Music', time: '8 PM Onwards' },
             { day: 'Fri', title: 'Friday Night Hustle', type: 'High Energy DJ', time: '9 PM Onwards' },
             { day: 'Sat', title: 'The Greek Gala', type: 'Themed Experience', time: 'All Day' },
             { day: 'Sun', title: 'Sunset Sundowners', type: 'Chill Lounge Vibes', time: '5 PM Onwards' },
           ].map((item, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -10 }}
               className="bg-zinc-900/30 border border-white/5 p-10 rounded-sm relative group overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors" />
                <span className="text-brand-blue font-bold text-5xl mb-6 block font-serif opacity-50">{item.day}</span>
                <h3 className="text-2xl text-white font-serif uppercase mb-2">{item.title}</h3>
                <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">{item.type}</p>
                <p className="text-white/40 text-sm font-light flex items-center gap-2">
                  <Calendar size={14} className="text-brand-gold" />
                  {item.time}
                </p>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Past Gallery Highlights */}
      <div className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h3 className="text-3xl font-serif text-white uppercase mb-12 flex items-center gap-4">
          The <span className="text-brand-blue">Archives</span>
          <div className="h-[1px] flex-grow bg-white/10" />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
             'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
             'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1924&auto=format&fit=crop',
             'https://images.unsplash.com/photo-1566737236582-782cf1ef5424?q=80&w=2070&auto=format&fit=crop',
           ].map((src, i) => (
             <div key={i} className="aspect-square rounded-sm overflow-hidden group">
                <img src={src} alt="Past Event" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
             </div>
           ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

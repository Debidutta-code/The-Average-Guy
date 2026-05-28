'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export function FloatingReservation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-brand-dark-blue border border-brand-gold/30 p-8 rounded-2xl shadow-2xl mb-6 w-[350px] backdrop-blur-xl"
          >
             <h3 className="font-serif text-2xl text-white mb-6 uppercase tracking-tighter">Reserve Your Sky</h3>
             <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-2">
                   <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Select Vibe</label>
                   <select className="bg-black/50 border border-white/10 text-white p-3 rounded-lg focus:outline-none focus:border-brand-blue">
                      <option>Sunset & Drinks</option>
                      <option>Late Night Party</option>
                      <option>Celebration Dinner</option>
                      <option>Casual Chill</option>
                   </select>
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Date</label>
                   <input type="date" className="bg-black/50 border border-white/10 text-white p-3 rounded-lg focus:outline-none focus:border-brand-blue" />
                </div>
             </div>
             <Link
               href="/reservations"
               className="block w-full bg-brand-blue hover:bg-white hover:text-brand-blue text-white text-center py-4 font-bold rounded-xl transition-all"
             >
                BOOK NOW
             </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-full bg-brand-gold text-brand-dark-blue flex items-center justify-center shadow-2xl shadow-brand-gold/20"
      >
        <Calendar size={32} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}

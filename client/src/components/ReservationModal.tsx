"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ReservationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-[2.5rem] p-12 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="font-serif text-4xl mb-2">Book a Table</h2>
            <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-10">Secure your midnight escape</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                  <option>Patia Branch</option>
                  <option>Sahid Nagar</option>
                </select>
                <input
                  type="number"
                  placeholder="Guests"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <input
                type="datetime-local"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
              />

              <button className="w-full bg-amber-500 text-black font-bold tracking-widest py-5 rounded-2xl hover:bg-amber-400 transition-colors uppercase text-xs mt-4">
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

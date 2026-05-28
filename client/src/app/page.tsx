"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import ExperienceCanvas from "@/components/ExperienceCanvas";
import ReservationModal from "@/components/ReservationModal";
import { useLenis } from "@/hooks/useLenis";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLenis();

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="noise" />
          <ExperienceCanvas />

          <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center pointer-events-none">
            <h1 className="font-serif text-2xl tracking-tighter pointer-events-auto">D&apos; CAFE</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="glass px-8 py-3 rounded-full text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors pointer-events-auto"
            >
              Reserve Table
            </button>
          </nav>

          <Hero />
          <Story />
          <Menu />
          <Gallery />

          <footer className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3 className="font-serif text-3xl">D&apos; Cafe</h3>
                <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                  The intersection of coffee, cinema, and cyberpunk culture in Bhubaneswar.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] tracking-widest text-white/40 uppercase">Locations</p>
                <div className="space-y-2">
                  <p className="text-sm">Patia / Infocity Outlet</p>
                  <p className="text-sm">Sahid Nagar Outlet</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] tracking-widest text-white/40 uppercase">Connect</p>
                <div className="flex gap-4">
                  <span className="text-sm text-amber-500 cursor-pointer hover:underline">Instagram</span>
                  <span className="text-sm text-amber-500 cursor-pointer hover:underline">Zomato</span>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
              <p className="text-[8px] tracking-widest text-white/20 uppercase">© 2024 D&apos; CAFE. BHUBANESWAR.</p>
              <p className="text-[8px] tracking-widest text-white/20 uppercase">Built for the future.</p>
            </div>
          </footer>

          <button
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-110 transition-transform"
          >
            <Zap size={20} className="text-black fill-black" />
          </button>

          <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.div>
      )}
    </main>
  );
}

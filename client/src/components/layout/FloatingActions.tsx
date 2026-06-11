"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-40 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-primary border border-slate-100 rounded-full flex items-center justify-center shadow-xl hover:bg-slate-50 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        href="/#book"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/20 hover:bg-secondary transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Book Appointment"
      >
        <Calendar size={26} />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Book Appointment
        </span>
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
};

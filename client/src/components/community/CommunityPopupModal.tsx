'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight } from 'lucide-react';

interface CommunityPopupModalProps {
  title: string;
  description: string;
  whatsappLink: string;
  delay: number;
}

export function CommunityPopupModal({
  title,
  description,
  whatsappLink,
  delay
}: CommunityPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('whatsapp_popup_last_shown');
    const now = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown) > twentyFourHours) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('whatsapp_popup_last_shown', now.toString());
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const closePopup = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:bottom-8 md:w-[400px] z-[101] bg-zinc-900 border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/20 rounded-full blur-[60px]" />

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative space-y-6">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-gold/20">
                <MessageCircle size={32} fill="currentColor" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight">
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePopup}
                className="flex items-center justify-center w-full bg-white hover:bg-brand-gold text-black hover:text-white font-bold h-14 rounded-xl transition-all duration-300 group"
              >
                Join Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[10px] text-white/20 text-center uppercase tracking-widest font-bold">
                Exclusive community updates
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

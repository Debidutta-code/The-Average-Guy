'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  whatsappLink: string;
}

export function FloatingWhatsAppButton({ whatsappLink }: FloatingWhatsAppButtonProps) {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="absolute -inset-4 bg-brand-orange/20 rounded-full blur-xl group-hover:bg-brand-orange/40 transition-all duration-500 animate-pulse" />
      <div className="relative w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-orange/50">
        <MessageCircle size={32} fill="currentColor" className="text-white" />

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Join The Average Guy Community
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-zinc-900" />
        </div>
      </div>
    </motion.a>
  );
}

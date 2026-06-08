"use client";

import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Chat With Us
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+1234567890"
        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative"
      >
        <Phone size={22} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Emergency Call
        </span>
      </a>

      {/* Book */}
      <Link
        href="/book"
        className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative"
      >
        <Calendar size={22} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Online Booking
        </span>
      </Link>
    </div>
  );
};

export default FloatingActions;

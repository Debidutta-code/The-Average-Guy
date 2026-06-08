"use client";

import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={30} />
        <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+1234567890"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <Phone size={26} />
        <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          Call Now
        </span>
      </a>

      {/* Book */}
      <Link
        href="/book"
        className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <Calendar size={26} />
        <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          Book Appointment
        </span>
      </Link>
    </div>
  );
};

export default FloatingActions;

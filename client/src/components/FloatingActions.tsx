'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-28 right-6 flex flex-col gap-4 z-[60] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a
        href="tel:+919999999999"
        className="bg-medical-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="Call Now"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-medical-500 text-white px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;

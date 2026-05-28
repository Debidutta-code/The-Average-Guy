'use client';

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1533628635777-112b2239b1c7",
  "https://images.unsplash.com/photo-1577640905050-83665af366b9",
  "https://images.unsplash.com/photo-1506466010722-395ee2bef877",
  "https://images.unsplash.com/photo-1544025162-d76694265947",
  "https://images.unsplash.com/photo-1536935338218-841272ce200d",
];

export function OopreTable() {
  return (
    <section className="py-24 bg-brand-dark-blue overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-serif text-5xl md:text-7xl text-white uppercase tracking-tighter">The <span className="text-brand-blue">Oopre</span> Table</h2>
        <p className="text-brand-gold font-bold tracking-[0.3em] uppercase mt-4">Tag @OOPRE_KITCHENBAR to be featured</p>
      </div>

      <div className="flex gap-4 animate-scroll whitespace-nowrap">
        {[...images, ...images].map((src, i) => (
          <div key={i} className="inline-block w-[300px] aspect-square overflow-hidden rounded-lg group">
            <img
              src={`${src}?q=80&w=800&auto=format&fit=crop`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              alt="User Story"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

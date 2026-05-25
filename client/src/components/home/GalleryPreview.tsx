'use client';

import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=2070&auto=format&fit=crop', size: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1482933220747-669527f5511b?q=80&w=1974&auto=format&fit=crop', size: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
];

export function GalleryPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm text-center">Visual Journey</h3>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter uppercase leading-none text-center">
            ROOFTOP <span className="text-brand-blue">ENERGY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${image.size} relative overflow-hidden rounded-2xl group`}
            >
              <img
                src={image.src}
                alt="OOPRE Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-black uppercase tracking-widest text-xs border border-white/20 px-4 py-2 rounded-full">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

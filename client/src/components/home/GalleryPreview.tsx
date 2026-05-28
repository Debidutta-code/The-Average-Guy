'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop', size: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1551887196-72e32afd7c3a?q=80&w=2021&auto=format&fit=crop', size: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop', size: 'col-span-1 row-span-1' },
];

export function GalleryPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background textured-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Visual Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight leading-none">
            A Glimpse of <span className="text-primary italic">Heritage</span>
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
              <Image
                src={image.src}
                alt="Cafe Gallery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-foreground font-black uppercase tracking-widest text-xs border border-white/20 px-4 py-2 rounded-full">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

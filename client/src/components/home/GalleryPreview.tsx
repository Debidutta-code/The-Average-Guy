'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', size: 'md:col-span-2 md:row-span-2', title: 'The Atrium' },
  { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop', size: 'md:col-span-1 md:row-span-1', title: 'Morning Light' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', size: 'md:col-span-1 md:row-span-1', title: 'Architectural Details' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop', size: 'md:col-span-1 md:row-span-2', title: 'Workspace' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', size: 'md:col-span-1 md:row-span-1', title: 'Quiet Corners' },
];

export function GalleryPreview() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Aesthetic Ambiance</span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-foreground tracking-tight leading-none">
              A Visual <span className="italic">Symphony</span>
            </h2>
          </div>
          <Link href="/gallery" className="text-foreground/40 hover:text-brand-gold font-bold text-[10px] uppercase tracking-[0.2em] border-b border-black/5 pb-2 transition-colors duration-300">
            Explore All Frames
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`${image.size} relative overflow-hidden rounded-xl group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[1px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <span className="text-foreground font-serif italic text-2xl mb-2">{image.title}</span>
                <div className="w-8 h-[1px] bg-brand-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

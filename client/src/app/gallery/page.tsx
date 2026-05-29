"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
    title: "The Main Lounge",
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Signature Sips",
  },
  {
    url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Nightlife Pulse",
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2",
    title: "Dining Elegance",
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    title: "Rooftop Views",
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Craft Mixology",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4">Visual Odyssey</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
            The <span className="text-white/20">Gallery</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${image.span} relative group overflow-hidden rounded-sm`}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-xs uppercase tracking-widest font-bold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-8 italic">Follow our journey on Instagram</p>
            <button className="px-12 py-4 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-[10px] uppercase tracking-widest transition-all duration-500">
                @embassy_bbsr
            </button>
        </div>
      </div>
    </div>
  );
}

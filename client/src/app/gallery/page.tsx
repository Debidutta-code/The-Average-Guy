"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
    "All", "Rooftop Evenings", "DJ Nights", "Signature Cocktails", "Weekend Vibes", "Celebrations", "Food Showcase", "Interiors", "Sunset Moments"
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
    title: "The Main Lounge",
    category: "Interiors"
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Signature Sips",
    category: "Signature Cocktails"
  },
  {
    url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Nightlife Pulse",
    category: "DJ Nights"
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2",
    title: "Dining Elegance",
    category: "Food Showcase"
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    title: "Rooftop Views",
    category: "Rooftop Evenings"
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Craft Mixology",
    category: "Signature Cocktails"
  },
  {
    url: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Birthday Party",
    category: "Celebrations"
  },
  {
    url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    title: "Skyline Sunset",
    category: "Sunset Moments"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? galleryImages : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4">Visual Odyssey</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
            The <span className="text-white/20">Gallery</span>
          </h1>
        </div>

        <Tabs defaultValue="All" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="bg-transparent border-b border-white/5 w-full justify-start h-auto p-0 rounded-none space-x-6 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                    <TabsTrigger
                        key={cat}
                        value={cat}
                        className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-brand-gold data-[state=active]:border-b data-[state=active]:border-brand-gold rounded-none pb-4 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-all shadow-none"
                    >
                        {cat}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>

        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
                <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, y: 100, scale: 1.15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                    delay: i % 4 * 0.1
                }}
                data-cursor="explore"
                className={`${image.span} relative group overflow-hidden rounded-sm`}
                >
                <div className="absolute inset-0 bg-brand-black z-10 transition-transform duration-1000 origin-top group-in-view:scale-y-0" />
                <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-brand-gold text-[10px] uppercase tracking-widest font-black mb-1">{image.category}</p>
                        <p className="text-white text-lg font-black italic uppercase tracking-tighter">{image.title}</p>
                    </div>
                </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 text-center">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-8 italic">Experience the vibe daily @embassy_bbsr</p>
            <button className="px-12 py-4 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-[10px] uppercase tracking-widest transition-all duration-500">
                View on Instagram
            </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function GalleryPage() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop', category: 'Interiors', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1511081138522-86197a8456a1?q=80&w=1974&auto=format&fit=crop', category: 'Cuisine', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop', category: 'Nightlife', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop', category: 'Cocktails', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1501339819302-ee4b8dd5a1b6?q=80&w=2070&auto=format&fit=crop', category: 'Rooftop', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop', category: 'Vibes', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', category: 'Cuisine', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', category: 'Nightlife', size: 'small' },
  ];

  return (
    <main className="min-h-screen bg-brand-dark-blue">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-xs mb-4 block">A Visual Odyssey</span>
          <h1 className="text-6xl md:text-9xl font-serif font-light text-white tracking-tighter uppercase leading-none mb-8">
            CAPTURED <br/><span className="text-brand-blue">MOMENTS</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light italic">
            &quot;We don&apos;t just serve food; we create scenes that last a lifetime.&quot;
          </p>
        </motion.div>
      </div>

      {/* Main Dynamic Gallery Grid */}
      <div className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden group rounded-sm break-inside-avoid"
            >
               <img
                 src={img.src}
                 alt={img.category}
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
               />

               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-brand-dark-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                  <h3 className="text-2xl font-serif text-white uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Oopre Story</h3>

                  <div className="mt-6 flex gap-2">
                     <div className="w-8 h-[1px] bg-white/30" />
                     <div className="w-2 h-[1px] bg-brand-gold" />
                  </div>
               </div>

               {/* Aesthetic Frame Corner */}
               <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* "Behind the Scenes" Section */}
      <div className="py-32 bg-brand-dark-blue/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">The Craft</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white uppercase leading-[0.9] mb-8">Where Detail <br/><span className="text-brand-blue">Meets Desire</span></h2>
              <p className="text-white/40 font-light leading-relaxed mb-10 max-w-md">
                 Every plate is a canvas, every drink a masterpiece. Witness the artistry that goes into Bhubaneswar’s premier rooftop kitchen.
              </p>
              <div className="flex gap-10">
                 <div>
                    <span className="text-3xl font-serif text-brand-gold block mb-1">20+</span>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Global Chefs</span>
                 </div>
                 <div>
                    <span className="text-3xl font-serif text-brand-gold block mb-1">500+</span>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Signature Items</span>
                 </div>
                 <div>
                    <span className="text-3xl font-serif text-brand-gold block mb-1">∞</span>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Memories</span>
                 </div>
              </div>
           </div>
           <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Chef Craft"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-brand-dark-blue/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-brand-gold border-b-[8px] border-b-transparent ml-1" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Image as ImageIcon, Search, Filter, Layers, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const dummyGallery = [
  { id: '1', url: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop', category: 'Interiors', date: 'Oct 24, 2024' },
  { id: '2', url: 'https://images.unsplash.com/photo-1511081138522-86197a8456a1?q=80&w=1974&auto=format&fit=crop', category: 'Cuisine', date: 'Oct 22, 2024' },
  { id: '3', url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop', category: 'Nightlife', date: 'Oct 20, 2024' },
  { id: '4', url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop', category: 'Cocktails', date: 'Oct 18, 2024' },
];

export default function AdminGalleryPage() {
  const [images] = useState(dummyGallery);
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Media Assets</span>
          <h1 className="text-5xl font-serif text-white uppercase tracking-tight">Gallery <span className="text-brand-blue">Vault</span></h1>
          <p className="text-white/40 mt-2 font-light italic">Manage the visual storytelling of OOPRE&apos;s rooftop experience.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
           <Button variant="outline" className="bg-white/5 border-white/10 text-white/60 hover:text-white uppercase text-[10px] font-bold tracking-widest px-6 h-10">
              <Layers size={14} className="mr-2" /> Categories
           </Button>
           <Button className="bg-brand-blue hover:bg-brand-gold text-white font-bold h-10 px-6 rounded-sm uppercase text-[10px] tracking-widest transition-all">
             <Plus size={16} className="mr-2" /> Upload Media
           </Button>
        </div>
      </div>

      {/* Stats / Info Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="bg-[#030D1B] border-white/5 p-6 flex items-center gap-6">
            <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center text-brand-blue">
               <ImageIcon size={24} />
            </div>
            <div>
               <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Total Media</p>
               <h4 className="text-2xl font-serif text-white">124 Items</h4>
            </div>
         </Card>
         <Card className="bg-[#030D1B] border-white/5 p-6 flex items-center gap-6">
            <div className="w-12 h-12 rounded-sm bg-brand-gold/10 flex items-center justify-center text-brand-gold">
               <Layers size={24} />
            </div>
            <div>
               <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Categories</p>
               <h4 className="text-2xl font-serif text-white">8 Groups</h4>
            </div>
         </Card>
         <Card className="bg-[#030D1B] border-white/5 p-6 flex items-center gap-6">
            <div className="w-12 h-12 rounded-sm bg-brand-orange/10 flex items-center justify-center text-brand-orange">
               <Search size={24} />
            </div>
            <div>
               <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Storage Used</p>
               <h4 className="text-2xl font-serif text-white">6.5 GB / 10 GB</h4>
            </div>
         </Card>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-[#030D1B] border-white/5 overflow-hidden group relative rounded-sm shadow-2xl">
                <div className="aspect-square relative overflow-hidden">
                   <img src={img.url} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />

                   {/* Actions Overlay */}
                   <div className="absolute inset-0 bg-brand-dark-blue/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                         <div className="bg-brand-blue/20 backdrop-blur-md px-3 py-1 rounded-sm border border-brand-blue/30">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-blue">{img.category}</span>
                         </div>
                         <button className="p-2 bg-red-500/10 text-red-500 rounded-sm hover:bg-red-500 hover:text-white transition-all shadow-lg">
                           <Trash2 size={16} />
                         </button>
                      </div>

                      <div className="space-y-4">
                         <div>
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Captured on</p>
                            <p className="text-sm font-serif text-white">{img.date}</p>
                         </div>
                         <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors">
                            View Original <ExternalLink size={12} />
                         </button>
                      </div>
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add Placeholder Card */}
        <button className="aspect-square border border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center gap-4 group hover:border-brand-blue/50 transition-all bg-white/[0.02]">
           <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-all">
              <Plus size={24} className="text-white/20 group-hover:text-brand-blue" />
           </div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Add New Asset</span>
        </button>
      </div>
    </div>
  );
}

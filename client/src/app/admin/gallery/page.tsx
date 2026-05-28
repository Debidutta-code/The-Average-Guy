'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

const dummyGallery = [
  { id: '1', url: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2070&auto=format&fit=crop', category: 'interior' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507764923214-c48469539fa4?q=80&w=1974&auto=format&fit=crop', category: 'coffee' },
];

export default function AdminGalleryPage() {
  const [images, setImages] = useState(dummyGallery);

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif font-bold tracking-tight">Gallery Management</h1>
          <p className="text-muted-foreground">Upload and organize cafe visuals.</p>
        </div>

        <Button className="bg-brand-gold hover:bg-foreground text-white font-bold px-8 h-12 rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/20">
          <Plus size={18} className="mr-2" /> Upload Photos
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <Card key={img.id} className="bg-white border-brand-latte/50 overflow-hidden group relative rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={img.url} alt="Gallery" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-mocha/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 backdrop-blur-sm">
               <div className="flex justify-end">
                  <Button variant="destructive" size="icon" className="h-8 w-8 rounded-xl shadow-lg">
                    <Trash2 size={16} />
                  </Button>
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-brand-gold/80 self-start px-3 py-1.5 rounded-full shadow-lg">
                 {img.category}
               </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

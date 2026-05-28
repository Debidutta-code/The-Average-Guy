'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

const dummyGallery = [
  { id: '1', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop', category: 'interior' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop', category: 'coffee' },
];

export default function AdminGalleryPage() {
  const [images, setImages] = useState(dummyGallery);

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Gallery Management</h1>
          <p className="text-white/40">Upload and organize cafe visuals.</p>
        </div>

        <Button className="bg-primary hover:bg-white hover:text-black font-bold">
          <Plus size={18} className="mr-2" /> Upload Photos
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <Card key={img.id} className="bg-zinc-900 border-white/5 overflow-hidden group relative">
            <img src={img.url} alt="Gallery" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
               <div className="flex justify-end">
                  <Button variant="destructive" size="icon" className="h-8 w-8">
                    <Trash2 size={16} />
                  </Button>
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 bg-black/50 self-start px-2 py-1 rounded">
                 {img.category}
               </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

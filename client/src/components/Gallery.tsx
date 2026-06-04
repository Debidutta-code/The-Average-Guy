'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Layers, Scissors, Sparkle } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Results', icon: <Layers size={18} /> },
  { id: 'acne', name: 'Acne', icon: <Sparkle size={18} /> },
  { id: 'hair', name: 'Hair Regrowth', icon: <Scissors size={18} /> },
  { id: 'treatments', name: 'Treatments', icon: <Camera size={18} /> },
];

const galleryItems = [
  { id: 1, category: 'acne', title: 'Severe Acne Improvement', image: '/gallery/before-after/acne-1.jpg' },
  { id: 2, category: 'hair', title: 'Hair Restoration Success', image: '/gallery/before-after/hair-1.jpg' },
  { id: 3, category: 'treatments', title: 'Laser Session', image: '/gallery/treatments/laser-1.jpg' },
  { id: 4, category: 'acne', title: 'Clear Skin Protocol', image: '/gallery/before-after/acne-2.jpg' },
  { id: 5, category: 'hair', title: 'Trichology Result', image: '/gallery/before-after/hair-2.jpg' },
  { id: 6, category: 'treatments', title: 'Clinical Setting', image: '/clinic/clinic-2.jpg' },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Transformation <span className="text-medical-500">Gallery</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Real results from our clinical treatments. Browse through our categorized success stories.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-medical-500 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-medical-50'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-square relative overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Fallback Label */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-[-1] p-4 text-center">
                  <p className="text-xs">{item.title}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-medical-500 uppercase tracking-widest mb-2">
                  {item.category}
                </p>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-medical-600 transition-colors">
                  {item.title}
                </h4>
              </div>
              <div className="absolute inset-0 bg-medical-600/0 group-hover:bg-medical-600/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

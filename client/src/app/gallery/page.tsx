"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ComparisonSliderProps {
  before: string;
  after: string;
  label: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ before, after, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e
      ? e.touches[0].clientX - container.left
      : (e as React.MouseEvent).clientX - container.left;
    const position = (x / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
      >
        <Image src={after} alt="After" fill className="object-cover" />
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={before} alt="Before" fill className="object-cover" />
        </div>
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-primary rounded-full" />
              <div className="w-1 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">Before</div>
        <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">After</div>
      </div>
      <h3 className="text-xl font-bold text-center text-slate-900">{label}</h3>
    </div>
  );
};

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const cases = [
    { id: 1, category: 'Acne', before: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&h=600&fit=crop', after: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop', label: 'Severe Acne Recovery (6 Weeks)' },
    { id: 2, category: 'Anti-Aging', before: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&h=600&fit=crop', after: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop', label: 'Fine Line Reduction' },
    { id: 3, category: 'Pigmentation', before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop', after: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop', label: 'Pigmentation Treatment' },
  ];

  const filteredCases = filter === 'All' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Visual Results</span>
          <h1 className="text-4xl md:text-7xl font-playfair font-bold text-slate-900 leading-tight">Patient <span className="text-primary italic">Transformations</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Real results from real patients. Explore our transformation gallery across various treatments.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-20">
          {['All', 'Acne', 'Anti-Aging', 'Pigmentation'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${filter === f ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-50 text-slate-500 border border-slate-100 hover:border-primary hover:text-primary'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filteredCases.map((c) => (
            <ComparisonSlider key={c.id} before={c.before} after={c.after} label={c.label} />
          ))}
        </div>

        <div className="mt-32 bg-primary rounded-[3rem] p-12 md:p-24 text-white text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8 italic relative z-10 leading-tight">Ready for Your Own Transformation?</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-xl mx-auto relative z-10 font-medium">Join thousands of happy patients who have achieved their dream skin with our expert guidance.</p>
          <Link href="/book" className="bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all inline-block shadow-2xl relative z-10">
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles, ArrowRight } from 'lucide-react';

const cases = [
  {
    title: "Severe Acne Transformation",
    description: "Results after 3 months of personalized clinical protocol including chemical peels and topical therapy.",
    before: "/gallery/before-after/acne-1-before.jpg",
    after: "/gallery/before-after/acne-1-after.jpg",
  },
  {
    title: "Hair Regrowth Success",
    description: "Significant improvement in hair density following 6 months of PRP and medical management.",
    before: "/gallery/before-after/hair-1-before.jpg",
    after: "/gallery/before-after/hair-1-after.jpg",
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-medical-600 bg-medical-50 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles size={16} />
              <span>Transformation Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
              Real Patient <span className="text-medical-500">Transformations</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Swipe the slider to see the clinical results achieved through our specialized dermatology protocols.
            </p>
          </div>
          <a href="#appointment" className="btn-primary hidden md:flex items-center gap-2">
            Book Your Consultation <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <div key={index} className="space-y-6">
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
              />
              <div className="space-y-2 px-2">
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 italic">&quot;The results exceeded my expectations. Dr. Partha&apos;s clinical approach is truly effective.&quot;</h3>
            <p className="text-medical-600 font-bold">— Satisfied Patient</p>
          </div>
          <div className="flex-shrink-0 flex gap-4">
             <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center text-medical-500">
                <Sparkles size={24} />
             </div>
             <div className="w-12 h-12 bg-medical-50 rounded-full flex items-center justify-center text-medical-200">
                <Sparkles size={24} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

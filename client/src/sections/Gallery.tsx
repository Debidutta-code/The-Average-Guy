"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Zap } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "Smile Transformation",
    desc: "Complete smile makeover using ceramic veneers.",
    before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "RCT & Crown",
    desc: "Root canal treatment followed by a zirconia crown.",
    before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Teeth Whitening",
    desc: "In-office whitening results after a single session.",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop"
  }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  const nextCase = () => setActiveIndex((prev) => (prev + 1) % cases.length);
  const prevCase = () => setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Results Gallery</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Real Transformations, <span className="text-primary">Real Smiles</span>.
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevCase}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCase}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Comparison View */}
          <div className="lg:col-span-8 relative group">
            <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex + (showBefore ? "-before" : "-after")}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={showBefore ? cases[activeIndex].before : cases[activeIndex].after}
                    alt={cases[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    {showBefore ? "Before Treatment" : "After Treatment"}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Toggle Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1">{cases[activeIndex].title}</h3>
                  <p className="text-white/80 text-sm">{cases[activeIndex].desc}</p>
                </div>
                <button
                  onMouseEnter={() => setShowBefore(true)}
                  onMouseLeave={() => setShowBefore(false)}
                  onTouchStart={() => setShowBefore(true)}
                  onTouchEnd={() => setShowBefore(false)}
                  className="bg-white text-primary px-6 py-3 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Maximize2 size={16} />
                  <span>Hold to see Before</span>
                </button>
              </div>
            </div>
          </div>

          {/* List/Select View */}
          <div className="lg:col-span-4 space-y-4">
            {cases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left p-6 rounded-3xl border-2 transition-all ${
                  activeIndex === idx
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    activeIndex === idx ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                  }`}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeIndex === idx ? "text-primary" : "text-slate-900"}`}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{item.desc}</p>
                  </div>
                </div>
              </button>
            ))}

            <div className="p-8 rounded-[32px] bg-slate-900 text-white mt-8 relative overflow-hidden group">
               <div className="relative z-10">
                 <h4 className="font-bold text-lg mb-2">Want a new smile?</h4>
                 <p className="text-white/60 text-sm mb-6 leading-relaxed">Book a consultation today and start your journey towards a perfect smile.</p>
                 <a href="#book" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors">
                   Get Started <ChevronRight size={16} />
                 </a>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;

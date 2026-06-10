"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section id="results" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <SectionHeading
          title="Clinical Transformations"
          subtitle="Witness the remarkable results of our specialized dental treatments and cosmetic procedures."
        />

        <div className="max-w-5xl mx-auto">
          {/* Treatment Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {images.beforeAfter.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`px-6 py-2.5 rounded-2xl font-bold transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Slider Column */}
            <div className="lg:col-span-8">
              <div
                ref={containerRef}
                className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl cursor-ew-resize select-none border border-white/20"
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
              >
                {/* After Image (Base) */}
                <Image
                  src={images.beforeAfter[activeIndex].after}
                  alt="After Treatment"
                  fill
                  className="object-cover"
                  draggable={false}
                />

                {/* Before Image (Overlay) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={images.beforeAfter[activeIndex].before}
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>

                {/* Vertical Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary border-4 border-white">
                    <MoveHorizontal size={20} />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full z-20 pointer-events-none">
                  Before
                </div>
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-primary/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full z-20 pointer-events-none">
                  After
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-4 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {images.beforeAfter[activeIndex].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    {images.beforeAfter[activeIndex].description || "Professional transformation focusing on both aesthetics and oral health functionality."}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Advanced Digital Planning</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Painless Procedure</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Natural-Looking Results</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

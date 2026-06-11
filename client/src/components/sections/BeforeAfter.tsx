"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";
import { Button } from "../ui/Button";

export const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const container = event.currentTarget.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - container.left) / container.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % images.beforeAfter.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + images.beforeAfter.length) % images.beforeAfter.length);
    setSliderPosition(50);
  };

  const currentData = images.beforeAfter[currentIndex];

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              badge="Real Results"
              title="Transforming Smiles, Changing Lives"
              description="See the actual results of our advanced dental treatments. We take pride in delivering life-changing aesthetic and functional improvements."
            />

            <div className="space-y-8 mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-8 rounded-[2rem] shadow-premium border border-slate-100"
                >
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{currentData.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{currentData.description}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-14 h-14"
                  onClick={prevCase}
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-14 h-14"
                  onClick={nextCase}
                >
                  <ChevronRight size={24} />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white cursor-ew-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleMove}
            >
              {/* After Image */}
              <Image
                src={currentData.after}
                alt="After treatment"
                fill
                className="object-cover"
                draggable={false}
              />

              {/* Before Image with Clip */}
              <div
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={currentData.before}
                  alt="Before treatment"
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute inset-y-0 z-20 w-1 bg-white shadow-xl cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary">
                  <div className="flex gap-1">
                    <ChevronLeft size={16} className="text-primary -mr-1" />
                    <ChevronRight size={16} className="text-primary -ml-1" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 z-30 px-4 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                Before
              </div>
              <div className="absolute top-6 right-6 z-30 px-4 py-1.5 bg-primary/80 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                After
              </div>
            </div>

            {/* Instruction Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white px-6 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                <Maximize2 size={16} />
              </div>
              <span className="text-xs font-bold text-slate-600 whitespace-nowrap">Drag slider to compare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

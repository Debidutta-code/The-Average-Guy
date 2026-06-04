"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface ComparisonItem {
  id: string;
  category: string;
  title: string;
  before: string;
  after: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: "1",
    category: "Acne",
    title: "Severe Acne Control",
    before: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1974&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    category: "Hair",
    title: "Advanced PRP Results",
    before: "https://images.unsplash.com/photo-1527799822394-465a3d6037cd?q=80&w=2071&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeItem, setActiveItem] = useState(COMPARISONS[0]);
  const isDragging = useRef(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;

    let clientX = 0;
    if ("touches" in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = event.clientX;
    }

    const container = event.currentTarget.getBoundingClientRect();
    const x = ((clientX - container.left) / container.width) * 100;

    if (x >= 0 && x <= 100) {
      setSliderPosition(x);
    }
  };

  const handleStart = () => { isDragging.current = true; };
  const handleEnd = () => { isDragging.current = false; };

  return (
    <section id="results" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Real Results</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Clinical Transformations
          </h2>
          <p className="text-slate-600 text-lg">
            Witness the visible impact of our advanced dermatological treatments.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 space-y-6">
            {COMPARISONS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full p-6 rounded-2xl border-2 transition-all text-left flex items-center justify-between group ${
                  activeItem.id === item.id
                  ? "bg-white border-medical-500 shadow-xl ring-4 ring-medical-50"
                  : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${activeItem.id === item.id ? "text-medical-600" : "text-slate-400"}`}>
                    {item.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeItem.id === item.id ? "bg-medical-500 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                  <MoveRight className="w-5 h-5" />
                </div>
              </button>
            ))}

            <div className="p-6 bg-medical-50 rounded-2xl border border-medical-100">
              <p className="text-sm text-medical-800 leading-relaxed">
                *Results vary per individual. All images are actual patients of {activeItem.id === "1" ? "our clinic" : "affiliated specialists"}.
              </p>
            </div>
          </div>

          <FadeIn direction="none" className="w-full lg:w-2/3 relative aspect-[4/3] rounded-3xl overflow-hidden border-8 border-white shadow-2xl cursor-ew-resize select-none">
            <div
              className="relative w-full h-full"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
              onMouseUp={handleEnd}
              onTouchEnd={handleEnd}
              onMouseLeave={handleEnd}
            >
              {/* After Image */}
              <Image
                src={activeItem.after}
                alt="After"
                fill
                className="object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-medical-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">AFTER</div>

              {/* Before Image Overlay */}
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-[100%] h-full" style={{ width: `calc(100% * 100 / ${sliderPosition})` }}>
                  <Image
                    src={activeItem.before}
                    alt="Before"
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold z-10">BEFORE</div>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border-4 border-medical-500 flex items-center justify-center">
                  <div className="flex gap-1">
                    <MoveLeft className="w-3 h-3 text-medical-600" />
                    <MoveRight className="w-3 h-3 text-medical-600" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : (event as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  }, [isDragging]);

  useEffect(() => {
    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", handleUp);
      window.addEventListener("touchend", handleUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="before-after" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-clinical-charcoal mb-4">Real Results.</h2>
          <p className="text-clinical-charcoal/60 uppercase tracking-widest text-sm">
            Visible improvement after 3 sessions of Acne Scar Treatment.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto aspect-[16/9] bg-clinical-charcoal/5 overflow-hidden cursor-ew-resize select-none border border-clinical-charcoal/10"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-center text-clinical-charcoal/20 text-sm font-bold uppercase tracking-[0.5em]">
              After State
            </div>
            {/* Mock After Image - using a colored div to represent the image if URL not available */}
            <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center">
                <span className="text-clinical-charcoal/40 font-serif italic text-2xl">Healthy, Clear Skin</span>
            </div>
          </div>

          {/* Before Image (Foreground Clipped) */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
             <div className="absolute inset-0 flex items-center justify-center text-clinical-charcoal/20 text-sm font-bold uppercase tracking-[0.5em]">
              Before State
            </div>
            {/* Mock Before Image */}
            <div className="w-full h-full bg-[#e2e8f0] flex items-center justify-center">
                 <span className="text-clinical-charcoal/40 font-serif italic text-2xl opacity-50">Active Acne & Scars</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 w-px bg-white"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-clinical-charcoal text-white flex items-center justify-center rounded-full shadow-xl border-4 border-white">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 z-30 bg-clinical-charcoal text-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold">
            Before
          </div>
          <div className="absolute bottom-6 right-6 z-30 bg-clinical-charcoal text-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold">
            After
          </div>
        </div>
      </div>
    </section>
  );
}

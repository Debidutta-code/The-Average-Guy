'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-xl"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-medical-500 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest shadow-lg">
          {afterLabel}
        </div>
        {/* Fallback label */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-[-1]">
          <span>{afterLabel} Image</span>
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest shadow-lg">
          {beforeLabel}
        </div>
        {/* Fallback label */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-[-1]">
          <span>{beforeLabel} Image</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-medical-500">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-medical-200 rounded-full"></div>
            <div className="w-1 h-3 bg-medical-500 rounded-full"></div>
            <div className="w-1 h-3 bg-medical-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        className="relative aspect-video rounded-[32px] overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <Image
          src={afterImage}
          alt="After treatment"
          fill
          className="object-cover"
        />

        {/* Before Image (Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full" style={{ width: containerRef.current?.offsetWidth }}>
             <Image
              src={beforeImage}
              alt="Before treatment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-20 group"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-sm" />
          <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary transform -translate-y-1/2 hover:scale-110 transition-transform">
            <MoveHorizontal size={24} />
          </div>

          {/* Labels */}
          <div className="absolute top-4 -left-16 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Before</div>
          <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">After</div>
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-foreground/60 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const Transformations = () => {
  const cases = [
    {
      before: "/images/before-after/case1-before.jpg",
      after: "/images/before-after/case1-after.jpg",
      title: "Smile Makeover",
      description: "Full mouth rehabilitation and aesthetic smile design.",
    },
    {
      before: "/images/before-after/case2-before.jpg",
      after: "/images/before-after/case2-after.jpg",
      title: "Teeth Straightening",
      description: "Correction of crowding using advanced aligners.",
    },
  ];

  return (
    <section id="results" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Transformations</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Real Results, <span className="text-primary">Real Smiles</span>
          </h3>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Witness the life-changing results of our cosmetic and restorative dental procedures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={item.before}
              afterImage={item.after}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

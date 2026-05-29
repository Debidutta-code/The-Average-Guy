"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

export default function TransformationShowcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = (clientX - rect.left) / rect.width;
    setSliderPos(Math.max(0, Math.min(100, x * 100)));
  };

  return (
    <section className="bg-black py-32" id="transformations">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.5em] text-qnts-lime">
              Proof of Concept
            </span>
            <h2 className="mb-8 text-5xl font-black text-white md:text-8xl">
              RESULTS <br />
              <span className="text-qnts-red italic">DON&apos;T LIE</span>
            </h2>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <div className="text-5xl font-black text-white">18kg</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Avg. Fat Loss
                </div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">90%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Confidence Boost
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Slider */}
          <div
            ref={containerRef}
            className="group relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-3xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80"
                alt="After"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 right-6 rounded-lg bg-qnts-lime px-4 py-2 text-xs font-black uppercase text-black">
                After
              </div>
            </div>

            {/* Before Image Overlay */}
            <div
              className="absolute inset-0 z-[5]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1541534741688-6078c64b52d2?auto=format&fit=crop&q=80"
                alt="Before"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute bottom-6 left-6 rounded-lg bg-white/20 px-4 py-2 text-xs font-black uppercase text-white backdrop-blur-md">
                Before
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute inset-y-0 z-10 w-1 bg-qnts-lime shadow-[0_0_20px_rgba(223,255,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-qnts-lime p-2 text-black shadow-2xl">
                <MoveHorizontal size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Text */}
        <div className="mt-32 overflow-hidden border-y border-white/5 py-10">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap text-7xl font-black uppercase italic tracking-tighter text-white/5 md:text-9xl"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="mr-20">
                Natural Transformation • 90 Day Challenge • Results Don&apos;t Lie •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

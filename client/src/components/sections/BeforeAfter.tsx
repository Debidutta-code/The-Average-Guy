"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";
import { motion, AnimatePresence } from "framer-motion";

export const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Transformations That Matter"
          subtitle="Real results for real patients. See the difference our expert care can make to your smile."
        />

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {images.beforeAfter.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeIndex === index
                    ? "bg-primary text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={images.beforeAfter[activeIndex].before}
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-md">
                    Before
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={images.beforeAfter[activeIndex].after}
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-md">
                    After
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80&w=2070&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="py-32 overflow-hidden bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 bg-gradient-to-r from-black via-transparent to-black" />

      <div className="container mx-auto px-6 mb-16 relative z-20">
        <h2 className="font-serif text-5xl md:text-7xl">Immersive <br /> <span className="text-white/30">Visions</span></h2>
      </div>

      <div className="flex gap-8 relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="relative w-[400px] h-[500px] flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src={img}
                alt="Cafe Gallery"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

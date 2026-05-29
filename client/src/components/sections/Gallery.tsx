"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1574673139724-c9831ca193d0?auto=format&fit=crop&q=80",
];

export default function Gallery() {
  return (
    <section className="bg-black section-padding" id="gallery">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2>
            VISUAL <span className="text-qnts-lime italic">LEGACY</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-zinc-900 border border-white/5 ${
                i === 0 || i === 3 ? "aspect-[3/4] md:row-span-2" : "aspect-square md:aspect-video"
              }`}
            >
              <Image
                src={img}
                alt="Gallery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                 <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Cinematic</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

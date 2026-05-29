"use client";

import { motion } from "framer-motion";

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
    <section className="bg-black py-32" id="gallery">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black text-white md:text-7xl">
            VISUAL <span className="text-qnts-red italic">LEGACY</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-zinc-900 ${
                i === 0 || i === 3 ? "row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt="Gallery"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                 <span className="text-white text-xs font-black uppercase tracking-[0.5em]">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

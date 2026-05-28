"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                alt="Cafe Vibe"
                fill
                className="object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 aspect-square glass rounded-2xl p-8 flex items-center justify-center">
               <p className="font-serif text-lg text-amber-500 text-center italic">
                 &quot;A Midnight Escape in the heart of Odisha.&quot;
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              More than Coffee. <br />
              <span className="text-white/40">An Urban Sanctuary.</span>
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
              Nestled in the vibrant hubs of Patia and Sahid Nagar, D&apos; Cafe isn&apos;t just about the brew.
              It&apos;s where late-night conversations spark, music flows, and the Gen Z culture of Bhubaneswar
              finds its home.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-amber-500 font-bold text-2xl">4.3+</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Zomato Rating</p>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold text-2xl">24/7</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">The Vibe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

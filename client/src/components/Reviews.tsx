"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  { text: "Best Desi Mocha in Bhubaneswar.", author: "Rahul S." },
  { text: "Perfect late-night chill spot.", author: "Ananya D." },
  { text: "Affordable and aesthetic.", author: "Pritam K." },
  { text: "Vibes are unmatched.", author: "Sneha M." },
  { text: "The Momo Maggi is a must-try!", author: "Vikram R." },
  { text: "Cyberpunk vibe in the heart of Odisha.", author: "Siddharth B." },
];

export default function Reviews() {
  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-amber-500 mb-4">Voices</p>
        <h2 className="font-serif text-5xl md:text-7xl">The Vibe.</h2>
      </div>

      <div className="flex space-x-8">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex space-x-8 whitespace-nowrap"
        >
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div
              key={i}
              className="glass p-8 rounded-2xl border border-white/5 w-[350px] shrink-0"
            >
              <p className="text-xl italic mb-6 text-white/90">&quot;{review.text}&quot;</p>
              <p className="text-[10px] tracking-widest uppercase text-white/40">— {review.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Rahul S.", text: "The most premium gym experience in Bhubaneswar. Period.", rating: 5 },
  { name: "Priya M.", text: "Lost 12kg in 3 months with their Pro plan. Best coaches ever!", rating: 5 },
  { name: "Vikram K.", text: "The CrossFit arena is world-class. Absolute energy!", rating: 5 },
  { name: "Sneha R.", text: "Elite vibe, premium equipment, and amazing community.", rating: 5 },
  { name: "Amit T.", text: "Finally a gym that feels like a high-end luxury brand.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-32 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-5xl font-black text-white md:text-7xl">
          THE <span className="text-qnts-lime italic">TRIBE</span> SPEAKS
        </h2>
      </div>

      <div className="flex gap-8">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[350px] rounded-[30px] border border-white/5 bg-zinc-900/50 p-10 backdrop-blur-xl"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-qnts-lime text-xl">★</span>
                ))}
              </div>
              <p className="mb-8 text-lg font-medium text-white italic whitespace-normal">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-qnts-lime/20" />
                <span className="font-bold text-white uppercase tracking-widest text-xs">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

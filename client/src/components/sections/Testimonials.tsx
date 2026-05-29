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
    <section className="bg-black section-padding overflow-hidden" id="testimonials">
      <div className="container-custom mb-16 text-center">
        <h2>
          THE <span className="text-qnts-lime italic">TRIBE</span> SPEAKS
        </h2>
      </div>

      <div className="flex">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[320px] rounded-[2rem] border border-white/5 bg-zinc-900/40 p-8 backdrop-blur-xl"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-qnts-lime text-xs">★</span>
                ))}
              </div>
              <p className="mb-6 text-[15px] font-medium text-white/80 italic whitespace-normal leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-qnts-lime/10 border border-qnts-lime/20" />
                <span className="font-black text-white uppercase tracking-widest text-[9px]">
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

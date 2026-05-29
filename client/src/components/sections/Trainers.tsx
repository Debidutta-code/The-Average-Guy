"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Alex 'The Titan' Rivera",
    role: "Head Coach / CrossFit",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80",
    stats: "12Y Exp",
  },
  {
    name: "Sarah Jenkins",
    role: "Yoga & Flow Master",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80",
    stats: "8Y Exp",
  },
  {
    name: "Marcus Thorne",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    stats: "10Y Exp",
  },
  {
    name: "Elena Petrova",
    role: "Nutrition & Fat Loss",
    image: "https://images.unsplash.com/photo-1571731956622-39ed27068593?auto=format&fit=crop&q=80",
    stats: "15Y Exp",
  },
];

export default function Trainers() {
  return (
    <section className="bg-[#050505] py-32" id="trainers">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-5xl font-black text-white md:text-7xl">
            ELITE <span className="text-qnts-red italic">COACHES</span>
          </h2>
          <p className="mx-auto max-w-xl text-white/50">
            Learn from athletes, nutritionists, and world-class strength
            specialists.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-qnts-lime">
                    {trainer.stats}
                  </span>
                  <div className="flex gap-2">
                    <Instagram size={14} className="text-white hover:text-qnts-lime cursor-pointer" />
                    <Twitter size={14} className="text-white hover:text-qnts-lime cursor-pointer" />
                  </div>
                </div>
                <h3 className="mb-1 text-2xl font-black italic text-white leading-none">
                  {trainer.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  {trainer.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

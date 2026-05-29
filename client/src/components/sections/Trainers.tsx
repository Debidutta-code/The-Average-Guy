"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";

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
    <section className="bg-[#050505] section-padding" id="trainers">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4">
            ELITE <span className="text-qnts-lime italic">COACHES</span>
          </h2>
          <p className="mx-auto max-w-lg">
            Learn from athletes, nutritionists, and world-class strength
            specialists.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-qnts-lime">
                    {trainer.stats}
                  </span>
                  <div className="flex gap-2">
                    <Instagram size={14} className="text-white/60 hover:text-qnts-lime cursor-pointer transition-colors" />
                    <Twitter size={14} className="text-white/60 hover:text-qnts-lime cursor-pointer transition-colors" />
                  </div>
                </div>
                <h3 className="mb-1 text-xl leading-none">
                  {trainer.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
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

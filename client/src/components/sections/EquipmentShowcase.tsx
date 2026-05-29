"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipments = [
  {
    name: "Hammer Strength",
    type: "Plate Loaded",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80",
  },
  {
    name: "Free Weights",
    type: "Dumbbells/Barbells",
    image: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&q=80",
  },
  {
    name: "Functional Rig",
    type: "Custom CrossFit Rig",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?auto=format&fit=crop&q=80",
  },
  {
    name: "Cardio Zone",
    type: "High-End Treadmills",
    image: "https://images.unsplash.com/photo-1571731956622-39ed27068593?auto=format&fit=crop&q=80",
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="bg-black section-padding overflow-hidden" id="equipment">
      <div className="container-custom mb-12">
        <h2>
          PREMIUM <span className="text-qnts-lime italic">ARSENAL</span>
        </h2>
      </div>

      <div className="flex gap-6 px-6 md:px-[calc((100vw-1280px)/2+1.5rem)] overflow-x-auto no-scrollbar pb-8">
        {equipments.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative min-w-[280px] md:min-w-[400px] aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="italic mb-1">{item.name}</h3>
              <p className="text-[9px] font-black uppercase tracking-widest text-qnts-lime">
                {item.type}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

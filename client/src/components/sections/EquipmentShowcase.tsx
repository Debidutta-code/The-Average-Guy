"use client";

import { motion } from "framer-motion";

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
    <section className="bg-black py-32 overflow-hidden" id="equipment">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-5xl font-black text-white md:text-7xl">
          PREMIUM <span className="text-qnts-lime italic">ARSENAL</span>
        </h2>
      </div>

      <div className="flex gap-8 px-6 md:px-20 overflow-x-auto no-scrollbar">
        {equipments.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative min-w-[300px] md:min-w-[450px] aspect-[16/10] overflow-hidden rounded-3xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-black italic text-white">{item.name}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-qnts-lime">
                {item.type}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

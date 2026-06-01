"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Pure Filtration",
    description: "Advanced multi-stage purification system ensuring every drop is as pure as nature intended.",
  },
  {
    title: "Thermal Control",
    description: "Triple-walled vacuum insulation keeping your beverages at the perfect temperature for 48 hours.",
  },
  {
    title: "Smart Tracking",
    description: "Integrated biometric sensors that monitor your hydration levels in real-time via our companion app.",
  },
];

export function ProductSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-mesh">
      <div className="z-10 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Crafted For Modern Lifestyles</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Our bottle is more than just a container; it&apos;s a testament to engineering excellence and aesthetic perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="glass p-8 rounded-3xl group hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-blue-400 font-bold">{i + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

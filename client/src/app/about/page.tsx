"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-brand-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="h-[80vh] relative flex items-center justify-center pt-24">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Ambience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="text-6xl md:text-[12vw] font-black italic uppercase tracking-tighter leading-none"
          >
            OUR <span className="text-white/20">STORY</span>
          </motion.h1>
        </div>
      </section>

      {/* Narrative Section 1 */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em]">The Beginning</h2>
              <h3 className="text-4xl md:text-6xl font-bold italic uppercase tracking-tighter">
                Born from <br /> <span className="text-white/20">Bhubaneswar</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed">
                Founded with a vision to redefine the hospitality landscape of Odisha, Embassy Bhubaneswar emerged as a beacon of modern luxury. We sought to create a space where the city&apos;s elite could gather, dine, and experience nightlife in its most cinematic form.
              </p>
              <p className="text-white/50 text-lg leading-relaxed">
                Every corner of our lounge is a testament to our commitment to design, atmosphere, and the pursuit of perfection in service.
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-square relative rounded-sm overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                  alt="Founder Vision"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 backdrop-blur-3xl rounded-full -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Full Width Image */}
      <section className="h-[70vh] relative overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Experience"
          fill
          className="object-cover scale-110 group-hover:scale-100 transition-all duration-[3s] grayscale"
        />
        <div className="absolute inset-0 bg-brand-black/60 flex items-center justify-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white/40 mix-blend-overlay">
                Digital Luxury
            </h2>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Year Founded", value: "2023" },
              { label: "Signature Dishes", value: "45+" },
              { label: "Elite Members", value: "1200+" },
              { label: "Awards Won", value: "08" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-4xl md:text-6xl font-black italic text-brand-gold tracking-tighter">{stat.value}</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

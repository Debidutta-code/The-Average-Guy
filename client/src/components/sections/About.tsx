"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#050505] section-padding" id="about">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Side: Visuals */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 md:max-w-md mx-auto lg:ml-0">
              <Image
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80"
                alt="Founder"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            {/* Floating Stats */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-4 rounded-2xl bg-qnts-lime p-6 text-black shadow-2xl md:left-6 lg:-left-6"
            >
              <div className="text-3xl font-black italic">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                Years of Mastery
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-qnts-lime"
            >
              The Architecture of Strength
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              REDEFINING THE <br />
              <span className="italic text-qnts-lime">
                FITNESS STANDARD
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10 max-w-lg"
            >
              At QNTS FITNESS, we don&apos;t just build muscles; we build elite mindsets.
              Our facility combines cinematic luxury with raw, high-performance
              training environments designed to push you beyond your limits.
            </motion.p>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2 max-w-xl">
              {[
                { icon: Zap, title: "High Intensity", desc: "Push your limits with elite training." },
                { icon: Award, title: "Certified Pro", desc: "Train with the industry best." },
                { icon: Users, title: "Community", desc: "Join a tribe of high-achievers." },
                { icon: Target, title: "Precision", desc: "Data-driven transformation plans." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-qnts-lime transition-colors group-hover:bg-qnts-lime group-hover:text-black">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

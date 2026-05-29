"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#050505] py-32" id="about">
      <div className="container mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left Side: Visuals */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
              <Image
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80"
                alt="Founder"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            {/* Floating Stats */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -left-10 rounded-2xl bg-qnts-lime p-8 text-black shadow-2xl"
            >
              <div className="text-4xl font-black italic">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">
                Years of Mastery
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-qnts-lime"
            >
              The Architecture of Strength
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-5xl font-black leading-tight text-white md:text-7xl"
            >
              REDEFINING THE <br />
              <span className="italic text-qnts-red underline decoration-qnts-lime">
                FITNESS STANDARD
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-lg text-white/60"
            >
              At QNTS FITNESS, we don&apos;t just build muscles; we build elite mindsets.
              Our facility combines cinematic luxury with raw, high-performance
              training environments designed to push you beyond your perceived
              limits.
            </motion.p>

            {/* Features Grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { icon: Zap, title: "High Intensity", desc: "Push your limits with elite training." },
                { icon: Award, title: "Certified Pro", desc: "Train with the industry best." },
                { icon: Users, title: "Community", desc: "Join a tribe of high-achievers." },
                { icon: Target, title: "Precision", desc: "Data-driven transformation plans." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-qnts-lime transition-colors group-hover:bg-qnts-lime group-hover:text-black">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-white/40">{item.desc}</p>
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

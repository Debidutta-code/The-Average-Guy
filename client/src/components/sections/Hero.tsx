"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ShieldCheck, Users, Star, Award } from "lucide-react";
import NeuralBackground from "./NeuralBackground";
import Image from "next/image";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const stats = [
  { icon: Award, label: "15+ Years Exp." },
  { icon: Users, label: "10k+ Patients" },
  { icon: Star, label: "4.9★ Rating" },
  { icon: ShieldCheck, label: "NABH Facility" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:h-[850px] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      <NeuralBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Content Side */}
          <div className="lg:col-span-7 max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Advanced Neuroscience Center
              </div>
            </FadeIn>

            <TextReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-[1.15] mb-6 tracking-tight">
                Advanced <span className="text-gradient">Neurological Care</span> <br className="hidden md:block" /> For Every Stage Of Life
              </h1>
            </TextReveal>

            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Personalized diagnosis, treatment, and long-term care for neurological disorders using modern evidence-based medicine.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-16">
                <Button size="lg" className="rounded-full px-8 h-12 text-sm font-bold tracking-wide">
                  Book Consultation
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full px-6 h-12 text-sm font-bold gap-2 hover:bg-primary/5 transition-colors">
                  <PlayCircle className="w-4 h-4" />
                  Watch Patient Stories
                </Button>
              </div>
            </FadeIn>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
                  <div className="flex items-center gap-3">
                    <stat.icon className="text-primary w-5 h-5 shrink-0 opacity-80" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 w-full aspect-[4/5] lg:aspect-[3/4] max-w-[450px] mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Arpan Deep"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Refined Stat Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-8 glass px-5 py-4 rounded-2xl border-white/10 shadow-xl backdrop-blur-xl"
              >
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Recovery Rate</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -right-8 glass px-5 py-4 rounded-2xl border-white/10 shadow-xl backdrop-blur-xl"
              >
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Emergency Care</div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}

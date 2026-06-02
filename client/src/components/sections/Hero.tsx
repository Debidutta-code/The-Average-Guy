"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ShieldCheck, Users, Star, Award } from "lucide-react";
import NeuralBackground from "./NeuralBackground";
import Image from "next/image";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const stats = [
  { icon: Award, label: "15+ Years Experience" },
  { icon: Users, label: "10,000+ Patients Treated" },
  { icon: Star, label: "4.9★ Patient Satisfaction" },
  { icon: ShieldCheck, label: "NABH Accredited Facility" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <NeuralBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-sm font-semibold mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Advanced Neuroscience Center
              </div>
            </FadeIn>

            <TextReveal>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-playfair leading-[1.1] mb-6">
                Advanced <span className="text-gradient">Neurological Care</span> For Every Stage Of Life
              </h1>
            </TextReveal>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Personalized diagnosis, treatment, and long-term care for neurological disorders using modern evidence-based medicine.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg gap-2 glass">
                  <PlayCircle className="w-5 h-5" />
                  Watch Patient Stories
                </Button>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
                  <div className="flex flex-col gap-2">
                    <stat.icon className="text-primary w-6 h-6" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Arpan Deep"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass p-6 rounded-2xl border-white/20 shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm font-medium">Recovery Rate</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-10 glass p-6 rounded-2xl border-white/20 shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm font-medium">Emergency Care</div>
              </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

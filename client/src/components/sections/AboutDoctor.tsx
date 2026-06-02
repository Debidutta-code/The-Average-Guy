"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Microscope } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const credentials = [
  { icon: GraduationCap, text: "DM Neurology - AIIMS" },
  { icon: GraduationCap, text: "MD Medicine - PGI" },
  { icon: GraduationCap, text: "MBBS - GMC Mumbai" },
  { icon: Award, text: "15+ Yrs Excellence" },
];

const achievements = [
  {
    icon: Microscope,
    title: "Research Contributions",
    description: "Published 30+ papers in international journals on neuro-plasticity and stroke recovery.",
  },
  {
    icon: BookOpen,
    title: "Professional Memberships",
    description: "Life Member of American Academy of Neurology (AAN) and Indian Academy of Neurology (IAN).",
  },
];

export default function AboutDoctor() {
  return (
    <section id="about" className="bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Editorial Image Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop"
                alt="Dr. Arpan Deep"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold font-playfair text-white">Dr. Arpan Deep</h3>
                <p className="text-primary font-bold tracking-widest uppercase text-[10px] mt-1">Chief Neurologist</p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <TextReveal>
                <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 leading-tight">
                  Pioneering <span className="text-primary italic">Precision</span> <br /> Medicine in Neurology
                </h2>
              </TextReveal>

              <FadeIn delay={0.2}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                  Dr. Arpan Deep is a globally recognized neurologist with a mission to bridge the gap between advanced neurological research and compassionate patient care.
                </p>
              </FadeIn>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {credentials.map((cred, i) => (
                  <FadeIn key={i} delay={0.3 + i * 0.05}>
                    <div className="flex items-center gap-3 p-4 rounded-2xl glass border-white/5 h-full">
                      <cred.icon className="text-primary shrink-0 opacity-80" size={18} />
                      <span className="text-xs font-bold uppercase tracking-tight text-muted-foreground">{cred.text}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="space-y-12">
                {achievements.map((ach, i) => (
                  <FadeIn key={i} delay={0.5 + i * 0.1}>
                    <div className="relative pl-12 border-l border-primary/20">
                      <div className="absolute -left-5 top-0 w-10 h-10 rounded-full glass flex items-center justify-center text-primary border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <ach.icon size={20} />
                      </div>
                      <h4 className="text-xl font-bold mb-3 font-playfair">{ach.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.7}>
                <div className="mt-16 p-8 rounded-[2rem] bg-primary/5 border border-primary/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all" />
                  <h5 className="text-[10px] font-black mb-4 uppercase tracking-[0.3em] text-primary">Notable Publications</h5>
                  <ul className="space-y-4 text-xs italic text-muted-foreground font-medium">
                    <li className="flex gap-2">
                        <span className="text-primary opacity-50">•</span>
                        &ldquo;Neural Plasticity and Functional Recovery in Ischemic Stroke&rdquo; - Lancet Neurology, 2021
                    </li>
                    <li className="flex gap-2">
                        <span className="text-primary opacity-50">•</span>
                        &ldquo;Advancements in Non-Invasive Brain Stimulation for Migraine&rdquo; - NEJM, 2019
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Microscope } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "DM Neurology - AIIMS, New Delhi" },
  { icon: GraduationCap, text: "MD Medicine - PGI Chandigarh" },
  { icon: GraduationCap, text: "MBBS - Grant Medical College, Mumbai" },
  { icon: Award, text: "15+ Years of Clinical Excellence" },
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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Editorial Image Side */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop"
                alt="Dr. Arpan Deep"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold font-playfair text-white">Dr. Arpan Deep</h3>
                <p className="text-primary font-medium tracking-widest uppercase text-sm mt-2">Chief Neurologist</p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-7 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold font-playfair mb-8 leading-tight">
                Pioneering <span className="text-primary italic">Precision</span> Medicine in Neurology
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Dr. Arpan Deep is a globally recognized neurologist with a mission to bridge the gap between advanced neurological research and compassionate patient care. With over 15 years of experience, he has specialized in treating the most complex neurological disorders.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass border-white/5">
                    <cred.icon className="text-primary shrink-0" size={24} />
                    <span className="text-sm font-medium">{cred.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-10">
                {achievements.map((ach, i) => (
                  <div key={i} className="relative pl-16 border-l border-primary/20">
                    <div className="absolute -left-6 top-0 w-12 h-12 rounded-full glass flex items-center justify-center text-primary border-primary/20">
                      <ach.icon size={24} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 font-playfair">{ach.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <h5 className="text-lg font-bold mb-4 uppercase tracking-widest text-primary">Notable Publications</h5>
                <ul className="space-y-4 text-sm italic text-muted-foreground">
                  <li>&ldquo;Neural Plasticity and Functional Recovery in Ischemic Stroke&rdquo; - Lancet Neurology, 2021</li>
                  <li>&ldquo;Advancements in Non-Invasive Brain Stimulation for Migraine&rdquo; - NEJM, 2019</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

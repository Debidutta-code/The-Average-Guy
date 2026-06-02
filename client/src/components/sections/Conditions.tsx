"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Activity,
  BrainCircuit,
  Dna,
  Timer,
  Ear,
  Eye,
  Moon
} from "lucide-react";

const conditions = [
  {
    title: "Migraine",
    icon: Zap,
    description: "Personalized headache management plans.",
    glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
  },
  {
    title: "Stroke",
    icon: Timer,
    description: "Rapid recovery and post-stroke protocols.",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Epilepsy",
    icon: Activity,
    description: "Comprehensive seizure control and management.",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  },
  {
    title: "Parkinson's",
    icon: BrainCircuit,
    description: "Specialized care for movement disorders.",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
  },
  {
    title: "Dementia",
    icon: Timer,
    description: "Compassionate memory and cognitive care.",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
  },
  {
    title: "Neuropathy",
    icon: Dna,
    description: "Relief for nerve pain and numbness.",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  },
  {
    title: "Multiple Sclerosis",
    icon: Ear,
    description: "Managing autoimmune neurological conditions.",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
  },
  {
    title: "Sleep Disorders",
    icon: Moon,
    description: "Sleep hygiene and medical interventions.",
    glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
  },
];

export default function Conditions() {
  return (
    <section id="conditions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">Conditions We Treat</h2>
            <p className="text-muted-foreground text-lg">
              Expert diagnosis and evidence-based treatment for a wide spectrum of neurological disorders.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <div className="glass p-4 rounded-2xl border-primary/20 text-primary font-semibold flex items-center gap-3">
              <Eye size={20} />
              Comprehensive Care
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, i) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative glass p-8 rounded-2xl border-white/5 transition-all duration-300 ${condition.glow}`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <condition.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold font-playfair mb-3">{condition.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {condition.description}
              </p>

              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Learn More →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

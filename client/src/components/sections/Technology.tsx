"use client";

import { motion } from "framer-motion";
import { Cpu, Monitor, Zap, FileJson, Video, Search } from "lucide-react";

const technologies = [
  {
    title: "EEG",
    description: "High-resolution Electroencephalography for precise seizure and brainwave analysis.",
    icon: Zap,
  },
  {
    title: "EMG & NCV",
    description: "Electromyography and Nerve Conduction Velocity testing for neuromuscular diagnosis.",
    icon: Cpu,
  },
  {
    title: "Neuroimaging",
    description: "Advanced interpretation of 3T MRI and PET scans with AI-assisted diagnostic tools.",
    icon: Search,
  },
  {
    title: "Digital Records",
    description: "Fully integrated digital patient records for seamless care coordination.",
    icon: FileJson,
  },
  {
    title: "Telemedicine",
    description: "Premium virtual consultation platform for global patient outreach.",
    icon: Video,
  },
  {
    title: "Brain Screening",
    description: "Comprehensive cognitive health and early dementia screening protocols.",
    icon: Monitor,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">Cutting-Edge Facilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our clinic is equipped with the latest advancements in neurological technology to ensure accurate diagnosis and effective treatment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group glass p-10 rounded-3xl border-white/5 overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500 rounded-full" />

              <div className="mb-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <tech.icon size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-bold font-playfair mb-4">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Active Diagnostic Unit</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

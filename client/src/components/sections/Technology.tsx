"use client";

import { Cpu, Monitor, Zap, FileJson, Video, Search, ChevronRight } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const technologies = [
  {
    title: "EEG",
    label: "Neuro-Electrics",
    description: "High-resolution Electroencephalography for precise seizure and brainwave analysis.",
    icon: Zap,
  },
  {
    title: "EMG & NCV",
    label: "Neuromuscular",
    description: "Electromyography and Nerve Conduction Velocity testing for precise diagnosis.",
    icon: Cpu,
  },
  {
    title: "Neuroimaging",
    label: "Radiology AI",
    description: "Advanced interpretation of 3T MRI and PET scans with AI-assisted diagnostic tools.",
    icon: Search,
  },
  {
    title: "Digital Records",
    label: "Data Integrity",
    description: "Fully integrated digital patient records for seamless care coordination and privacy.",
    icon: FileJson,
  },
  {
    title: "Telemedicine",
    label: "Remote Connect",
    description: "Premium virtual consultation platform for global patient outreach and follow-ups.",
    icon: Video,
  },
  {
    title: "Brain Health",
    label: "Screening Unit",
    description: "Comprehensive cognitive health and early dementia screening protocols for all ages.",
    icon: Monitor,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="container relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-6 tracking-tight italic">
              Advanced <span className="text-primary not-italic">Diagnostics</span>
            </h2>
          </TextReveal>
          <p className="text-muted-foreground text-base">
            Utilizing the latest advancements in neurological technology to ensure diagnostic accuracy and therapeutic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <FadeIn key={tech.title} delay={i * 0.1}>
              <div className="relative group">
                <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative glass p-10 rounded-[2.5rem] border-white/5 overflow-hidden flex flex-col h-full bg-black/40 hover:bg-black/60 transition-all duration-500">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500 shadow-xl">
                      <tech.icon size={26} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-primary/40 group-hover:text-primary transition-colors duration-500 px-3 py-1 rounded-full border border-white/5">
                        {tech.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-playfair mb-4 text-white">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-medium">
                    {tech.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between group-hover:border-primary/20 transition-colors duration-500">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Unit</span>
                    </div>
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

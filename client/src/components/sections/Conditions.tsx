"use client";

import {
  Zap,
  Activity,
  BrainCircuit,
  Dna,
  Timer,
  Ear,
  Eye,
  Moon,
  ChevronRight
} from "lucide-react";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const conditions = [
  {
    title: "Migraine",
    icon: Zap,
    description: "Personalized headache management plans using latest abortive and preventive therapies.",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
  },
  {
    title: "Stroke",
    icon: Timer,
    description: "Rapid recovery and post-stroke protocols focused on neuro-plasticity restoration.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Epilepsy",
    icon: Activity,
    description: "Comprehensive seizure control and management for a life without interruptions.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Parkinson's",
    icon: BrainCircuit,
    description: "Specialized care for movement disorders and long-term quality of life maintenance.",
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Dementia",
    icon: Timer,
    description: "Compassionate memory and cognitive care with family-centered support programs.",
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Neuropathy",
    icon: Dna,
    description: "Relief for nerve pain, numbness, and complex peripheral nerve conditions.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Multiple Sclerosis",
    icon: Ear,
    description: "Advanced management for autoimmune neurological conditions and relapse prevention.",
    color: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Sleep Disorders",
    icon: Moon,
    description: "Medical interventions and sleep hygiene protocols for restorative neurological health.",
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
  },
];

export default function Conditions() {
  return (
    <section id="conditions" className="bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <TextReveal>
              <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-6 tracking-tight italic">
                Clinical <span className="text-primary not-italic">Specialties</span>
              </h2>
            </TextReveal>
            <p className="text-muted-foreground text-base">
              Expert diagnosis and evidence-based treatment for a wide spectrum of complex neurological disorders.
            </p>
          </div>
          <FadeIn>
            <div className="glass px-6 py-3 rounded-full border-primary/20 text-primary font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
              <Eye size={14} />
              Comprehensive Assessment
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, i) => (
            <FadeIn key={condition.title} delay={i * 0.05}>
              <div className="group relative glass p-8 rounded-[2.5rem] border-white/5 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 h-full flex flex-col overflow-hidden">
                {/* Background Gradient Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${condition.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${condition.iconColor} group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm`}>
                  <condition.icon size={22} />
                </div>

                <h3 className="text-xl font-bold font-playfair mb-4 text-white group-hover:text-primary transition-colors">
                    {condition.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-medium">
                  {condition.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 group-hover:text-primary transition-all duration-300">
                  Protocol Details <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

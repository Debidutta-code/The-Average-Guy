"use client";

import { Star, Quote, ChevronRight } from "lucide-react";
import Image from "next/image";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const testimonials = [
  {
    name: "Rajesh Kumar",
    condition: "Post-Stroke Recovery",
    story: "After my stroke, I lost significant motor control. Dr. Arpan's tailored rehabilitation protocol was life-changing. Within 6 months, I'm back to walking.",
    recovery: "6 Months",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Sneha Mohanty",
    condition: "Chronic Migraine",
    story: "I had been suffering for 10 years. The precision diagnostics here identified triggers no one else found. I am finally migraine-free.",
    recovery: "3 Months",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Amitabh Das",
    condition: "Early Parkinson's",
    story: "The holistic approach to my Parkinson's treatment has significantly slowed the progression of tremors and improved my daily movement.",
    recovery: "Ongoing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="max-w-xl">
            <TextReveal>
                <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-6 italic">Stories of <span className="text-primary not-italic">Resilience</span></h2>
            </TextReveal>
            <p className="text-muted-foreground text-base leading-relaxed">
              Every recovery is a testament to the power of modern medicine and the human spirit. We are honored to be part of these journeys.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <FadeIn>
                <div className="flex gap-6 items-center glass px-8 py-6 rounded-3xl border-white/5">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
                        <Image
                        src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop`}
                        alt="User"
                        fill
                        />
                    </div>
                    ))}
                </div>
                <div>
                    <div className="text-lg font-bold text-white">4.9/5.0</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Patient Satisfaction</div>
                </div>
                </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <FadeIn key={i} delay={i * 0.1}>
                <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col h-full hover:bg-white/[0.08] transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -z-10 group-hover:bg-primary/10 transition-all" />

                    <div className="flex items-center gap-4 mb-10">
                        <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                        <Image src={testi.image} alt={testi.name} fill className="object-cover" />
                        </div>
                        <div>
                        <h4 className="font-bold text-sm text-white">{testi.name}</h4>
                        <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em]">{testi.condition}</p>
                        </div>
                    </div>

                    <div className="mb-10 relative">
                        <Quote className="text-primary/10 absolute -top-4 -left-4 w-10 h-10" />
                        <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10 font-medium">
                        &ldquo;{testi.story}&rdquo;
                        </p>
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                        <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1 font-bold">Recovery Timeline</p>
                        <p className="text-xs font-black text-primary uppercase">{testi.recovery}</p>
                        </div>
                        <div className="flex gap-1">
                        {[...Array(testi.rating)].map((_, i) => (
                            <Star key={i} size={10} className="fill-primary text-primary" />
                        ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 hover:text-primary hover:gap-4 transition-all">
            More Success Stories <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check, Clock, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

const plans = [
  {
    name: "Initial Consultation",
    price: "3,000",
    duration: "45-60 Min",
    description: "In-depth clinical assessment and diagnostic roadmap for new patients.",
    features: ["Physical Examination", "History Review", "Initial Diagnosis"],
    popular: false,
  },
  {
    name: "Standard Follow-up",
    price: "1,500",
    duration: "20-30 Min",
    description: "Routine progress monitoring and therapeutic adjustments.",
    features: ["Progress Review", "Medicine Adjustment", "Q&A Session"],
    popular: true,
  },
  {
    name: "Virtual Session",
    price: "2,500",
    duration: "30-45 Min",
    description: "Expert neurological advice via encrypted premium video platform.",
    features: ["Global Video Access", "Digital Prescriptions", "Video Evaluation"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-6 tracking-tight italic">
              Premium <span className="text-primary not-italic">Care Plans</span>
            </h2>
          </TextReveal>
          <p className="text-muted-foreground text-base">
            Transparent, value-based healthcare designed for comprehensive neurological recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div className={`relative glass p-10 rounded-[2.5rem] border-white/5 flex flex-col h-full overflow-hidden transition-all duration-500 hover:bg-white/[0.08] ${
                plan.popular ? "border-primary/40 ring-1 ring-primary/20 bg-primary/[0.02]" : ""
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary px-5 py-2 rounded-bl-2xl flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black">
                    <Sparkles size={12} />
                    Most Requested
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-xl font-bold font-playfair mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-white">₹{plan.price}</span>
                    <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">/ session</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                    <Clock size={12} />
                    {plan.duration}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-10 font-medium italic">
                  &ldquo;{plan.description}&rdquo;
                </p>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-muted-foreground">
                      <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                        <Check size={10} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full rounded-2xl h-14 text-sm font-bold tracking-wide transition-all duration-300 ${
                    !plan.popular ? "glass hover:bg-primary hover:text-white hover:border-transparent" : "shadow-lg shadow-primary/20"
                  }`}
                >
                  <CreditCard className="mr-2" size={18} />
                  Book Now
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
            {["NABH Accredited", "ISO 9001:2015", "Secure Digital Records"].map(badge => (
                <div key={badge} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em]">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {badge}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

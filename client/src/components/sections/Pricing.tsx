"use client";

import { motion } from "framer-motion";
import { Check, Clock, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Initial Consultation",
    price: "3,000",
    duration: "45-60 Minutes",
    description: "Detailed evaluation of neurological history and primary clinical examination.",
    features: ["Physical Examination", "History Review", "Initial Diagnosis", "Treatment Roadmap"],
    popular: false,
  },
  {
    name: "Follow-up Session",
    price: "1,500",
    duration: "20-30 Minutes",
    description: "Regular monitoring and adjustment of treatment plans based on progress.",
    features: ["Progress Assessment", "Medicine Adjustment", "Question & Answer", "Recovery Tracking"],
    popular: true,
  },
  {
    name: "Video Consultation",
    price: "2,500",
    duration: "30-45 Minutes",
    description: "Expert neurological advice from the comfort of your home, globally accessible.",
    features: ["Global Access", "Digital Prescriptions", "Video Evaluation", "Follow-up Chat"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6 italic">
            Premium <span className="text-primary not-italic">Care Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent, value-based healthcare designed for comprehensive recovery and long-term neurological health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass p-10 rounded-[2.5rem] border-white/5 flex flex-col h-full overflow-hidden ${
                plan.popular ? "border-primary/30 ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary px-6 py-2 rounded-bl-3xl flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neuro-dark">
                  <Sparkles size={14} />
                  Most Requested
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-bold font-playfair mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/ session</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <Clock size={16} />
                  {plan.duration}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-10">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full rounded-2xl h-14 text-lg font-bold ${
                  !plan.popular ? "glass" : ""
                }`}
              >
                <CreditCard className="mr-2" size={20} />
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground text-xs uppercase tracking-[0.3em]">
          All major insurance cards accepted • NABH Standard Facility
        </p>
      </div>
    </section>
  );
}

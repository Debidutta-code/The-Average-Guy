"use client";

import { motion } from "framer-motion";
import { MessageSquare, Microscope, Sparkles, HeartPulse } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Initial discussion to understand your dental concerns and health history.",
    color: "bg-blue-500",
  },
  {
    icon: Microscope,
    title: "Diagnosis",
    description: "Detailed oral examination and X-rays using advanced diagnostic tools.",
    color: "bg-teal-500",
  },
  {
    icon: Sparkles,
    title: "Treatment",
    description: "Expert execution of the personalized treatment plan with painless techniques.",
    color: "bg-indigo-500",
  },
  {
    icon: HeartPulse,
    title: "Follow-Up Care",
    description: "Ongoing support and post-treatment guidance to maintain your perfect smile.",
    color: "bg-emerald-500",
  }
];

export const TreatmentProcess = () => {
  return (
    <section id="treatment-process" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          badge="How It Works"
          title="Your Journey to a Perfect Smile"
          description="We follow a systematic and patient-centric approach to ensure the best possible outcomes for every treatment."
          centered
        />

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-white shadow-premium border-8 border-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-2xl`}>
                    <div className={`w-14 h-14 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg shadow-primary/20`}>
                      <step.icon size={28} />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-primary font-black text-sm">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

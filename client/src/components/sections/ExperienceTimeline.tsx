"use client";

import { motion } from "framer-motion";
import { Calendar, Stethoscope, Microchip, ClipboardList, Activity } from "lucide-react";
import { TextReveal } from "@/components/ui/Animations";

const steps = [
  {
    title: "Initial Appointment",
    description: "Seamlessly schedule your consultation through our premium portal or concierge line.",
    icon: Calendar,
  },
  {
    title: "Clinical Evaluation",
    description: "In-depth assessment with Dr. Arpan Deep focusing on your unique history.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art EEG, EMG, and Neuroimaging for precise root identification.",
    icon: Microchip,
  },
  {
    title: "Personalized Care",
    description: "Tailored evidence-based therapeutic plan including modern medical interventions.",
    icon: ClipboardList,
  },
  {
    title: "Ongoing Monitoring",
    description: "Continuous follow-ups and health tracking to ensure sustained health.",
    icon: Activity,
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-6 tracking-tight italic">
                The Patient <span className="not-italic text-primary">Journey</span>
            </h2>
          </TextReveal>
          <p className="text-muted-foreground text-base">
            Experience a structured, world-class clinical journey designed for precision and patient comfort.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center`}
              >
                {/* Icon Bubble */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-2xl glass border-primary/30 flex items-center justify-center z-10 bg-black shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <step.icon size={20} className="text-primary" />
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className={`p-4 ${
                    i % 2 === 0 ? "md:pr-20" : "md:pl-20 text-left md:text-right"
                  }`}>
                    <h3 className="text-xl font-bold font-playfair mb-3 text-white">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm ml-0 md:ml-auto mr-0 md:mr-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

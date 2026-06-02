"use client";

import { motion } from "framer-motion";
import { Calendar, Stethoscope, Microchip, ClipboardList, Activity } from "lucide-react";

const steps = [
  {
    title: "Appointment Booking",
    description: "Seamlessly schedule your consultation through our premium portal or dedicated concierge line.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Evaluation",
    description: "In-depth clinical assessment with Dr. Arpan Deep focusing on your unique neurological history.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art EEG, EMG, and Neuroimaging to identify the precise root of the condition.",
    icon: Microchip,
  },
  {
    title: "Personalized Treatment",
    description: "Tailored evidence-based therapeutic plan including modern medicine and lifestyle interventions.",
    icon: ClipboardList,
  },
  {
    title: "Long-Term Monitoring",
    description: "Continuous follow-ups and digital health tracking to ensure sustained neurological health.",
    icon: Activity,
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">Your Journey to Recovery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience a structured, world-class patient journey designed for clarity, comfort, and clinical excellence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center`}
              >
                {/* Icon Bubble */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[40px] h-[40px] rounded-full glass border-primary/50 flex items-center justify-center z-10 bg-black shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <step.icon size={18} className="text-primary" />
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 p-4">
                  <div className={`glass p-8 rounded-2xl border-white/5 hover:border-primary/20 transition-colors ${
                    i % 2 === 0 ? "md:mr-12" : "md:ml-12 text-left md:text-right"
                  }`}>
                    <h3 className="text-2xl font-bold font-playfair mb-4 text-white">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}

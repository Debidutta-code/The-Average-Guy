"use client";

import { Card } from "../ui/Card";
import {
  Heart,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Stethoscope,
  Sparkles,
  Clock3,
  CheckCircle2,
  HandHeart,
  Microscope
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Painless Procedures",
    description: "Advanced techniques and anesthesia options to ensure a completely comfortable experience.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Stethoscope,
    title: "Experienced Dentists",
    description: "Our highly qualified team brings years of expertise in specialized dental treatments.",
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    icon: Microscope,
    title: "Modern Technology",
    description: "Equipped with state-of-the-art diagnostic and treatment tools for precise results.",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: HandHeart,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your specific oral health needs and goals.",
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    icon: CheckCircle2,
    title: "Affordable Treatments",
    description: "Premium dental care accessible at competitive prices with transparent billing.",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    description: "Strict sterilization protocols following international safety and hygiene standards.",
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    icon: Clock3,
    title: "Emergency Support",
    description: "Priority assistance for dental emergencies to provide immediate pain relief.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: Heart,
    title: "Patient Safety",
    description: "Your health and safety are our top priorities throughout your dental journey.",
    color: "text-cyan-600",
    bg: "bg-cyan-50"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="Exceptional Care for Every Patient"
          description="We are committed to providing the highest quality dental services in a welcoming and professional environment."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="h-full p-8 border-none shadow-premium hover:shadow-premium-hover group transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

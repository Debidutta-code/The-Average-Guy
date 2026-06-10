import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import {
  Cpu,
  UserCheck,
  Sparkles,
  Wallet,
  HeartHandshake,
  CalendarCheck
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We use the latest dental equipment and digital imaging for precise diagnosis and treatment.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
  },
  {
    icon: UserCheck,
    title: "Experienced Team",
    description: "Our skilled specialists have years of experience in complex dental procedures and patient care.",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400"
  },
  {
    icon: Sparkles,
    title: "Hygienic Environment",
    description: "We follow strict sterilization protocols to ensure a safe and clean environment for every patient.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Get premium quality dental care at transparent and competitive prices with flexible payment options.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: HeartHandshake,
    title: "Patient-Focused Care",
    description: "We prioritize your comfort and listen to your concerns to provide personalized treatment plans.",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description: "Schedule your visit quickly through our online booking system or a simple phone call.",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <SectionHeading
          title="Clinical Excellence"
          subtitle="Discover why thousands of patients trust MO Dental Clinic for their oral health and smile transformations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col p-8 rounded-3xl border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white dark:bg-slate-900 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${reason.color}`}>
                  <reason.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {reason.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

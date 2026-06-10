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

const reasons = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We use the latest dental equipment and digital imaging for precise diagnosis and treatment.",
    color: "text-blue-500 bg-blue-50"
  },
  {
    icon: UserCheck,
    title: "Experienced Team",
    description: "Our skilled specialists have years of experience in complex dental procedures and patient care.",
    color: "text-teal-500 bg-teal-50"
  },
  {
    icon: Sparkles,
    title: "Hygienic Environment",
    description: "We follow strict sterilization protocols to ensure a safe and clean environment for every patient.",
    color: "text-purple-500 bg-purple-50"
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Get premium quality dental care at transparent and competitive prices with flexible payment options.",
    color: "text-emerald-500 bg-emerald-50"
  },
  {
    icon: HeartHandshake,
    title: "Patient-Focused Care",
    description: "We prioritize your comfort and listen to your concerns to provide personalized treatment plans.",
    color: "text-rose-500 bg-rose-50"
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description: "Schedule your visit quickly through our online booking system or a simple phone call.",
    color: "text-amber-500 bg-amber-50"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Choose MO Dental Clinic?"
          subtitle="We combine clinical excellence with a gentle approach to give you the best dental experience in Bhubaneswar."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} delay={index * 0.1} className="flex gap-6 items-start">
              <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${reason.color}`}>
                <reason.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Stethoscope,
  Smile,
  ShieldCheck,
  Zap,
  UserPlus
} from "lucide-react";

const services = [
  {
    title: "Root Canal Treatment (RCT)",
    desc: "Advanced, painless root canal procedures to save your natural teeth with precision and comfort.",
    icon: <Zap className="text-primary" size={28} />,
    tag: "Most Popular"
  },
  {
    title: "Teeth Cleaning & Scaling",
    desc: "Professional deep cleaning to remove plaque, tartar, and stains for a fresh, healthy smile.",
    icon: <Sparkles className="text-primary" size={28} />
  },
  {
    title: "Braces & Alignment",
    desc: "Modern orthodontic solutions including traditional braces and clear aligners for perfect spacing.",
    icon: <Smile className="text-primary" size={28} />
  },
  {
    title: "Dental Fillings",
    desc: "High-quality, tooth-colored composite fillings to restore damaged or decayed teeth naturally.",
    icon: <ShieldCheck className="text-primary" size={28} />
  },
  {
    title: "Tooth Extraction",
    desc: "Safe and gentle tooth removal performed under local anesthesia to ensure zero discomfort.",
    icon: <Stethoscope className="text-primary" size={28} />
  },
  {
    title: "Teeth Whitening",
    desc: "Professional-grade whitening treatments to brighten your smile by several shades safely.",
    icon: <UserPlus className="text-primary" size={28} />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Services</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Dental Solutions for Your Whole Family
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We offer a wide range of specialized dental treatments using the latest technology to ensure your comfort and the best possible clinical outcomes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              {service.tag && (
                <div className="absolute top-6 right-6 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {service.tag}
                </div>
              )}

              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm mb-8">
                {service.desc}
              </p>

              <a
                href="#book"
                className="text-primary font-bold text-sm flex items-center gap-2 group/link"
              >
                <span>Book Consultation</span>
                <Zap size={14} className="fill-primary transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-8">Not sure what you need? We provide free initial consultations.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-primary transition-colors border-b-2 border-primary/20 pb-1"
          >
            View All Services & Pricing
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;

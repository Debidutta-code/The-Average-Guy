"use client";

import Image from "next/image";
import { Star, Phone, MessageSquare, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/30 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold tracking-wide">5.0 ⭐ (13 Reviews)</span>
              <div className="w-1 h-1 bg-primary/30 rounded-full mx-1" />
              <span className="text-xs font-semibold">Bapuji Nagar, Bhubaneswar</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
            >
              Advanced & <span className="text-primary">Gentle</span> Dental Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience modern dental precision with a touch of comfort. From painless RCT to perfect smiles, Kapoor&apos;s Dental Care Centre is your trusted family dentist in Bhubaneswar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#book"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight size={20} />
              </a>
              <div className="flex gap-4 w-full sm:w-auto">
                <a
                  href="tel:+910000000000"
                  className="flex-1 sm:flex-none p-4 rounded-full border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-semibold"
                >
                  <Phone size={20} className="text-primary" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/910000000000"
                  className="flex-1 sm:flex-none p-4 rounded-full border-2 border-green-200 text-green-700 hover:bg-green-50 transition-all flex items-center justify-center gap-2 font-semibold"
                >
                  <MessageSquare size={20} className="text-green-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <ShieldCheck size={18} className="text-green-500" />
                <span>Painless Treatments</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium border-l border-slate-200 pl-6">
                <Clock size={18} className="text-primary" />
                <span>Opens 5:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative w-full max-w-[500px] lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Dental Clinic"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  K
                </div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-tighter leading-none">
                  Kapoor&apos;s<br/>Dental
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium">Trusted by 1000+ happy patients in Bhubaneswar.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

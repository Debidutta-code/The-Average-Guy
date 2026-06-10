"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-clinical-charcoal/[0.02] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-clinical-charcoal leading-[1.1] mb-8">
              Science-Backed <br />
              Dermatology. <br />
              <span className="italic font-light">Results-Driven Care.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-clinical-charcoal/70 mb-12 max-w-xl leading-relaxed"
          >
            Advanced clinical dermatology and aesthetic cosmetology tailored to
            your skin&apos;s unique anatomy. Experience medical excellence with a premium touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#book"
              className="group bg-clinical-charcoal text-white px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3 hover:bg-clinical-obsidian transition-all"
            >
              Book Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#treatments"
              className="bg-white border border-clinical-charcoal/20 text-clinical-charcoal px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold text-center hover:border-clinical-charcoal transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:flex absolute bottom-20 right-10 bg-white border border-clinical-charcoal/10 p-8 flex-col space-y-4 max-w-xs shadow-sm"
      >
        <span className="text-4xl font-serif">15+</span>
        <p className="text-xs uppercase tracking-widest leading-loose text-clinical-charcoal/60">
          Years of Clinical Excellence in Advanced Dermatology and Laser Treatments.
        </p>
      </motion.div>
    </section>
  );
}

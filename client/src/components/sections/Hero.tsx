"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Phone, Calendar, ShieldCheck, Zap, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { images } from "@/data/images";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium text-sm mb-8"
            >
              <span className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </span>
              <span className="text-white/90">Trusted by 269+ Happy Patients</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Your Smile Deserves <br />
              <span className="text-gradient">Expert Care</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Experience premium dental treatments, cosmetic dentistry, and advanced implants with our 5-star rated specialists in Bhubaneswar.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="#book">
                <Button size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-xl shadow-primary/25 hover:scale-105 transition-transform duration-300">
                  <Calendar className="mr-2 h-5 w-5" /> Book Appointment
                </Button>
              </Link>
              <a href="tel:7008520133">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-2xl bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, text: "Modern Equipment" },
                { icon: Zap, text: "Fast Recovery" },
                { icon: Heart, text: "Painless Care" },
                { icon: Star, text: "5.0 Google Rating" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-2 text-slate-400 text-sm font-medium"
                >
                  <item.icon size={16} className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            {/* Main Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-400 rounded-[42px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] md:aspect-auto">
                <Image
                  src={images.hero}
                  alt="MO Dental Clinic Premium Care"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Trust Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/4 -right-8 bg-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-2xl z-20 border border-white/20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg shadow-yellow-400/20">
                  <Star fill="currentColor" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">5.0 / 5.0</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Google Reviews</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-1/4 -left-12 bg-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-2xl z-20 border border-white/20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Calendar />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Open Daily</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">9:00 AM - 9:00 PM</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0F172A] to-transparent z-10" />
    </section>
  );
};

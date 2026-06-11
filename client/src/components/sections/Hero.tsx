"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Phone, Calendar, ShieldCheck, Heart, Award, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { images } from "@/data/images";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Soft Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-sm mb-8"
            >
              <Sparkles size={16} />
              <span>5.0 ★ Google Rated Dental Clinic</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Your Trusted <br />
              <span className="text-gradient">Dental Partner</span> <br />
              in Bhubaneswar
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
              Advanced dental treatments, painless procedures, and personalized care using modern technology for healthier and more confident smiles.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="#book">
                <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                  <Calendar className="mr-2 h-5 w-5" /> Book Appointment
                </Button>
              </Link>
              <a href="tel:+917008520133">
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-2xl border-slate-200 hover:bg-slate-50 transition-all">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </div>

            {/* Feature Points */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, text: "Advanced Tech" },
                { icon: Heart, text: "Painless Care" },
                { icon: Award, text: "Expert Team" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-slate-700 font-bold"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            {/* Image Container with Decorative Elements */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium aspect-[4/5] md:aspect-[5/6] border-8 border-white">
                <Image
                  src={images.hero}
                  alt="MO Dental Clinic Bhubaneswar Premium Interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Trust Badge Floating */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-12 -right-8 bg-white p-5 rounded-3xl shadow-2xl z-20 border border-slate-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg shadow-yellow-400/20">
                    <Star fill="currentColor" size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 leading-tight">5.0 ★</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Google Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Patient Badge Floating */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2.5rem] shadow-2xl z-20 border border-slate-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-100 shadow-sm">
                         <Image src={`/images/testimonials/patient${i}.webp`} alt="Patient" width={48} height={48} className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900 leading-tight">269+</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Happy Patients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

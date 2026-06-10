"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Phone, Calendar, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { images } from "@/data/images";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Star size={16} fill="currentColor" />
              <span>5.0 Rating (269+ Reviews)</span>
              <span className="mx-2 w-1 h-1 bg-primary rounded-full" />
              <span>Open Daily: 9AM - 9PM</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Your Smile Deserves <br />
              <span className="text-gradient">Expert Care</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              Trusted dental treatments, cosmetic dentistry, implants, root canal treatments and complete oral care in Bhubaneswar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#book">
                <Button size="lg" className="gap-2">
                  <Calendar size={20} /> Book Appointment
                </Button>
              </Link>
              <a href="tel:7008520133">
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone size={20} /> Call Now
                </Button>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-sm font-medium">Expert Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-sm font-medium">Modern Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-sm font-medium">Painless Care</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10">
              <Image
                src={images.hero}
                alt="MO Dental Clinic Interior"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
                  <Star fill="currentColor" />
                </div>
                <div>
                  <div className="text-xl font-bold">5.0</div>
                  <div className="text-sm text-slate-500">Google Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

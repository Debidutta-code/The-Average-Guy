'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentForm from "@/components/AppointmentForm";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Star, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 z-10" />
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
            <Image
              src="/clinic/clinic-1.jpg"
              alt="Dr. Partha Mohapatra Clinic"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-medical-50 border border-medical-100 text-medical-600 px-4 py-1.5 rounded-full mb-6">
              <Star size={16} className="fill-medical-500" />
              <span className="text-sm font-semibold">4.9 ⭐ (983 Google Reviews)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              Dr.(Maj) Partha <br />
              <span className="text-medical-500">Mohapatra</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light leading-relaxed">
              Dermatologist & Skin Specialist providing advanced care with trusted clinical expertise in Bhubaneswar.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#appointment" className="btn-primary flex items-center space-x-2">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </a>
              <a
                href="https://wa.me/919999999999?text=Hello%20Dr.%20Partha%20Mohapatra,%20I%20would%20like%20to%20book%20a%20dermatology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center space-x-2"
              >
                <span>WhatsApp Consultation</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 text-slate-500">
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-green-500" />
                <span className="text-sm font-medium">Open &bull; Closes 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={18} className="text-medical-500" />
                <span className="text-sm font-medium">Verified Specialist</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Line Section */}
      <section className="bg-medical-500 py-6">
        <div className="container mx-auto px-6">
          <p className="text-white text-center text-lg font-medium">
            “Advanced Dermatology Care with Trusted Clinical Expertise in Bhubaneswar”
          </p>
        </div>
      </section>

      <About />
      <Services />
      <Reviews />
      <Gallery />
      <AppointmentForm />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

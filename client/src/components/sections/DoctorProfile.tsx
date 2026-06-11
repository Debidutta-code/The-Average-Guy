"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, CheckCircle2, Star, Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";
import { Card } from "../ui/Card";

const expertise = [
  "Advanced Dental Implants",
  "Painless Root Canal Therapy",
  "Smile Designing & Veneers",
  "Orthodontic Aligners",
  "Full Mouth Rehabilitation",
  "Pediatric Dental Care"
];

const achievements = [
  { icon: Award, text: "Gold Medalist in Oral Surgery" },
  { icon: GraduationCap, text: "Specialized in Advanced Endodontics" },
  { icon: Star, text: "10+ Years of Clinical Excellence" },
  { icon: Heart, text: "Treated 5000+ Happy Patients" }
];

export const DoctorProfile = () => {
  return (
    <section id="doctor" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              badge="Meet Our Expert"
              title="Dr. Debidutta Acharya"
              description="Lead Dentist & Founder of MO Dental Clinic, dedicated to providing excellence in oral healthcare with a gentle touch."
              className="mb-8"
            />

            <div className="space-y-6 mb-10">
              <p className="text-slate-600 leading-relaxed font-medium">
                Dr. Debidutta Acharya is a renowned dental surgeon in Bhubaneswar with a passion for creating perfect smiles. With over a decade of experience, he specializes in painless dental procedures and aesthetic smile transformations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-primary" />
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {expertise.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-primary p-8 md:p-10 border-none relative overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-700" />
              <p className="text-white text-lg font-bold italic leading-relaxed relative z-10">
                &quot;My philosophy is simple: Treat every patient as if they were my own family. I am committed to providing the highest quality dental care using the most advanced techniques available today.&quot;
              </p>
              <div className="mt-6 flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Star fill="currentColor" size={20} />
                </div>
                <span className="text-white/90 font-black uppercase tracking-widest text-xs">Dr. Debidutta Acharya</span>
              </div>
            </Card>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src={images.doctors.main}
                alt="Dr. Debidutta Acharya - Best Dentist in Bhubaneswar"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Background decorative circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-10 blur-3xl" />

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-slate-50"
            >
              <div className="text-center">
                <div className="text-5xl font-black text-primary leading-none">10+</div>
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">Years of <br /> Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Heart, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
              <Image
                src={images.gallery.consultation}
                alt="Patient consultation at MO Dental Clinic"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-[3rem] -z-10 hidden md:block" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-50 hidden md:block"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">10+ Years</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Clinical Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              badge="About Our Clinic"
              title="A Modern Approach to Family Dental Care"
              description="At MO Dental Clinic, we believe that everyone deserves a healthy, beautiful smile. Our mission is to provide world-class dental care in a comfortable and friendly environment."
              className="mb-8"
            />

            <div className="space-y-8 mb-10">
              <p className="text-slate-600 leading-relaxed font-medium">
                Located in the heart of Bhubaneswar, MO Dental Clinic has established itself as a leader in advanced dental treatments. We combine years of clinical experience with the latest dental technology to deliver results that exceed expectations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Modern Facilities", desc: "State-of-the-art equipment" },
                  { icon: Heart, title: "Patient-First", desc: "Compassionate, gentle care" },
                  { icon: CheckCircle2, title: "Expert Diagnosis", desc: "Precision treatment planning" },
                  { icon: Award, title: "Quality Materials", desc: "International standard products" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900">Our Philosophy</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                &quot;We treat our patients like family. Every procedure is explained in detail, and every treatment is tailored to the individual needs of our patients, ensuring complete transparency and trust.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-slate-200">
                  <Image src={images.doctors.main} alt="Dr. MO" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. D. Acharya</div>
                  <div className="text-[10px] text-primary font-black uppercase tracking-widest">Chief Dental Surgeon</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { doctor } from "@/data/doctors";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2, Award, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const DoctorProfile = () => {
  return (
    <section className="section-padding bg-white dark:bg-[#0F172A]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium Image Frame */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-teal-400/30 rounded-[64px] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000" />
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-slate-800 aspect-[4/5] md:aspect-auto">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-2xl z-20 border border-slate-100 dark:border-slate-800 text-center"
            >
              <div className="text-4xl font-black text-primary mb-1">{doctor.experience}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Experience</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Meet Our Visionary Surgeon"
              subtitle="Providing excellence in dentistry with a compassionate heart and modern techniques."
              centered={false}
            />

            <div className="mb-8">
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{doctor.name}</h3>
              <p className="text-2xl text-primary font-bold">{doctor.title}</p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg italic">
              &quot;{doctor.bio}&quot;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 transition-transform">
                  <BookOpen size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Education</p>
                  <p className="font-bold text-slate-900 dark:text-white">{doctor.qualification}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Specialization</p>
                  <p className="font-bold text-slate-900 dark:text-white">Implantology</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <h4 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-6">Area of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {doctor.specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[40px] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Award className="absolute -bottom-4 -right-4 w-32 h-32 text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h4 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-6">Prestigious Certifications</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.certifications.map((cert, index) => (
                  <li key={index} className="text-sm font-bold text-slate-600 dark:text-slate-400 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

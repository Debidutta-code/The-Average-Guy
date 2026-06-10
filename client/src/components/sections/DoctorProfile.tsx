import Image from "next/image";
import { doctor } from "@/data/doctors";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2, Award, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const DoctorProfile = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-slate-800">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <div>
            <SectionHeading
              title="Meet Our Expert Surgeon"
              centered={false}
            />

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{doctor.name}</h3>
            <p className="text-xl text-primary font-semibold mb-6">{doctor.title}</p>

            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              {doctor.bio}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <BookOpen className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Qualification</p>
                  <p className="font-semibold">{doctor.qualification}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                  <Clock className="text-teal-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Experience</p>
                  <p className="font-semibold">{doctor.experience}</p>
                </div>
              </div>
            </div>

            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="text-primary" /> Specializations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {doctor.specializations.map((spec, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={18} />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold mb-3">Certifications</h4>
              <ul className="space-y-2">
                {doctor.certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

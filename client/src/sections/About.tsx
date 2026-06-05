"use client";

import Image from "next/image";
import { CheckCircle2, Award, HeartPulse, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Award className="text-primary" size={24} />,
      title: "Clinical Excellence",
      desc: "Specialized in advanced dental procedures with a focus on long-term oral health."
    },
    {
      icon: <HeartPulse className="text-primary" size={24} />,
      title: "Patient Comfort",
      desc: "We prioritize a painless experience using modern techniques and a gentle touch."
    },
    {
      icon: <UserRound className="text-primary" size={24} />,
      title: "Expert Care",
      desc: "Trusted by the Bapuji Nagar community for personalized and honest dental advice."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                alt="Our Dental Clinic"
                width={600}
                height={800}
                className="object-cover aspect-[3/4]"
              />
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-50 rounded-full -z-10" />

            <div className="absolute bottom-10 right-10 z-20 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-[240px] hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">5.0</div>
              <div className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Google Rating</div>
              <p className="text-xs text-slate-500 leading-relaxed">Top-rated dental care centre in Bapuji Nagar, Bhubaneswar.</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">About the Clinic</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Where Dental Expertise Meets <span className="text-primary italic">Compassionate</span> Care.
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Kapoor&apos;s Dental Care Centre, we believe a healthy smile is the foundation of confidence. Located in the heart of Bapuji Nagar, our clinic is dedicated to providing high-quality, precision-based dental treatments in a relaxing environment.
              </p>

              <div className="space-y-8 mb-10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Modern Equipment", "Painless Procedures", "Sterilized Environment", "Expert Diagnosis"].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg"
              >
                Learn More About Us
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

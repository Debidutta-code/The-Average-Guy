"use client";

import Image from "next/image";
import { services } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-white dark:bg-[#0F172A]">
      <div className="container-custom">
        <SectionHeading
          title="Our Specialized Treatments"
          subtitle="Experience world-class dental care with our comprehensive range of services, tailored to your unique needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="group p-0 overflow-hidden flex flex-col h-full rounded-3xl border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md p-2.5 rounded-2xl text-primary shadow-lg">
                    <service.icon size={22} />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="#book"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                  >
                    View Details
                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-2 duration-300" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Specialized Services"
          title="Comprehensive Dental Solutions"
          description="From routine checkups to complex surgeries, we provide a full range of dental services under one roof."
          centered
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
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-premium hover:shadow-premium-hover group transition-all duration-500">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary z-10 transition-transform duration-500 group-hover:rotate-6">
                    <service.icon size={24} />
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-sm font-black uppercase tracking-widest text-primary group/link"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
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

"use client";

import Image from "next/image";
import { services } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Premium Services"
          subtitle="We offer a wide range of dental treatments using the latest technology to ensure the best results for our patients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={service.id} className="group p-0 overflow-hidden flex flex-col h-full" delay={index * 0.05}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-primary p-2 rounded-lg inline-block mb-2">
                    <service.icon size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#book"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                >
                  Learn More <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

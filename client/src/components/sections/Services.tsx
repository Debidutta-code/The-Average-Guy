import { SERVICES } from "@/data/constants";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Expert Solutions</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Our Clinical Services
          </h2>
          <p className="text-slate-600 text-lg">
            We provide a comprehensive range of dermatology and hair care services using the latest medical technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} direction="up">
              <div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-medical-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-medical-600" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Treating Symptoms</p>
                    <div className="flex flex-wrap gap-2">
                      {service.symptoms.map((symptom) => (
                        <span key={symptom} className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#book"
                    className="w-full py-3 bg-white border border-medical-500 text-medical-600 font-bold rounded-xl text-center hover:bg-medical-500 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Book Treatment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-1 pl-4 bg-medical-50 rounded-full border border-medical-100">
            <span className="text-sm font-medium text-medical-700">Looking for a specific treatment not listed?</span>
            <Link
              href="#contact"
              className="bg-medical-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1"
            >
              Consult with us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

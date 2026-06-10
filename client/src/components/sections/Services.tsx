import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">
              Comprehensive Care for <span className="text-primary">Every Need</span>
            </h3>
            <p className="text-foreground/60 text-lg leading-relaxed">
              From routine checkups to complex surgeries, we offer a full range of dental services using the latest technology.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center space-x-2 text-primary font-bold hover:translate-x-2 transition-transform"
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.slug}
              className="group bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-nowrap">
                  {service.title}
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm group-hover:space-x-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/services"
            className="btn btn-outline w-full"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

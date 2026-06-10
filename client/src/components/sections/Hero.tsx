import Link from "next/link";
import Image from "next/image";
import { Phone, Star, ShieldCheck, Clock, Award } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-24 z-0 hidden lg:block" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Star size={16} fill="currentColor" />
              <span>4.9★ Rated Dental Clinic in Bhubaneswar</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-foreground">
              Healthy Smiles <br />
              <span className="text-primary">Begin Here</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
              Professional dental care, painless treatments, modern technology, and personalized attention for every patient at Smile Planet Dental Care.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#book" className="btn btn-primary w-full sm:w-auto h-14 text-lg">
                Book Appointment
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="btn btn-outline w-full sm:w-auto h-14 text-lg flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-primary" size={20} />
                <span className="text-sm font-medium text-foreground/70">Painless Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-primary" size={20} />
                <span className="text-sm font-medium text-foreground/70">Modern Tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-primary" size={20} />
                <span className="text-sm font-medium text-foreground/70">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/hero/hero-patient.jpg"
                alt="Smiling patient at Smile Planet Dental Care"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Verified Reviews</p>
                  <p className="text-xl font-bold text-foreground">47+ Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

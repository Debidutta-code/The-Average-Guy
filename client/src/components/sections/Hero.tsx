import Image from "next/image";
import Link from "next/link";
import { CLINIC_DATA } from "@/data/constants";
import { Star, MapPin, ArrowRight, Phone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-50/50 rounded-l-[100px] -z-10" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-medical-100/30 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" duration={0.8}>
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {CLINIC_DATA.rating} ⭐ Google Rating
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1]">
                  Expert Care for Your <br />
                  <span className="text-medical-500">Skin & Hair.</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                  Bhubaneswar&apos;s leading dermatologist <span className="font-semibold text-slate-900">{CLINIC_DATA.name}</span> provides advanced clinical solutions for lasting results.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <MapPin className="w-5 h-5 text-medical-500" />
                  {CLINIC_DATA.location}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
                <div className="text-slate-500 font-medium">
                  Nayapalli & Unit 4 Region
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#book"
                  className="px-8 py-4 bg-medical-500 text-white rounded-xl font-bold text-lg hover:bg-medical-600 transition-all shadow-lg shadow-medical-200 flex items-center justify-center gap-2 group"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`https://wa.me/${CLINIC_DATA.whatsapp.replace(/[\s+]/g, '')}`}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-green-500" />
                  WhatsApp Consult
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&q=80`}
                        alt="Patient"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">10,000+</span> Happy Patients in Odisha
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" duration={0.8} delay={0.2} className="relative">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto">
              {/* Background Shapes */}
              <div className="absolute -inset-4 bg-medical-500/10 rounded-[40px] rotate-3 -z-10" />
              <div className="absolute inset-0 bg-slate-100 rounded-[30px] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                  alt="Dr. Partha Mohapatra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-medical-600 fill-medical-600" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">Top Rated Specialist</div>
                </div>
                <p className="text-[11px] text-slate-500">Recognized for clinical excellence and patient care.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/data/siteData";
import { ArrowRight, Filter } from "lucide-react";

export const metadata = {
  title: "Treatments | SkinCare Clinic",
  description: "Explore our wide range of dermatology and cosmetic treatments including acne treatment, laser hair reduction, and anti-aging solutions.",
};

export default function TreatmentsListing() {
  const categories = Array.from(new Set(treatments.map(t => t.category)));

  return (
    <div className="pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Medical & Aesthetic</span>
          <h1 className="text-4xl md:text-7xl font-playfair font-bold text-slate-900 leading-tight">Professional <span className="text-primary italic">Treatments</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Expert solutions for all your skin and hair concerns. We use the latest technology and medical expertise.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/4">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 sticky top-32">
              <div className="flex items-center space-x-3 mb-8">
                <Filter size={18} className="text-primary" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Filters</h3>
              </div>
              <div className="space-y-2">
                <button className="block w-full text-left px-5 py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20">All Treatments</button>
                {categories.map((cat, i) => (
                  <button key={i} className="block w-full text-left px-5 py-3 rounded-xl hover:bg-white border border-transparent hover:border-slate-100 text-slate-500 hover:text-primary text-xs font-bold uppercase tracking-widest transition-all">
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {treatments.map((treatment) => (
                <div key={treatment.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop`}
                      alt={treatment.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                      {treatment.category}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{treatment.title}</h3>
                    <p className="text-slate-600 mb-8 line-clamp-2 text-sm leading-relaxed">
                      {treatment.shortDescription}
                    </p>
                    <Link href={`/treatments/${treatment.slug}`} className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
                      <span className="text-xs uppercase tracking-[0.2em]">Procedure Details</span>
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900">Our Treatments</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert solutions for all your skin and hair concerns. We use the latest technology and medical expertise.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-2 mb-6">
                <Filter size={18} className="text-primary" />
                <h3 className="font-bold text-slate-900">Filter by Category</h3>
              </div>
              <div className="space-y-3">
                <button className="block w-full text-left px-4 py-2 rounded-lg bg-primary text-white font-medium">All Treatments</button>
                {categories.map((cat, i) => (
                  <button key={i} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-200 text-slate-700 transition-colors">
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatments.map((treatment) => (
                <div key={treatment.id} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56">
                    <Image
                      src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop`}
                      alt={treatment.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{treatment.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{treatment.title}</h3>
                    <p className="text-slate-600 mb-6 line-clamp-2">
                      {treatment.shortDescription}
                    </p>
                    <Link href={`/treatments/${treatment.slug}`} className="inline-flex items-center text-primary font-bold hover:space-x-2 transition-all">
                      <span>View Procedure Details</span>
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

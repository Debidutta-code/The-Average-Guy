import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorProfile } from '@/data/siteData';
import { Award, GraduationCap, Globe, BookOpen, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';
import JSONLD from '@/components/JSONLD';

export const metadata = {
  title: "About Dr. Elena Vance | Expert Dermatologist",
  description: "Learn more about Dr. Elena Vance's qualifications, experience, and philosophy of care at SkinCare Clinic.",
};

export default function AboutPage() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctorProfile.name,
    "image": "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&h=1000&fit=crop",
    "medicalSpecialty": "Dermatology",
    "description": doctorProfile.philosophy,
    "award": doctorProfile.awards
  };

  return (
    <div className="pt-32 pb-24">
      <JSONLD data={doctorSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&h=1000&fit=crop" alt={doctorProfile.name} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full -z-10 blur-[80px] opacity-20" />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 leading-tight">
              Dedicated to the Art & Science of <span className="text-primary italic">Skin Health</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {doctorProfile.philosophy}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <div className="flex items-center space-x-3 text-slate-700">
                  <ShieldCheck className="text-primary" />
                  <span className="font-bold">Board Certified</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700">
                  <Award className="text-primary" />
                  <span className="font-bold">Award Winning Specialist</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700">
                  <GraduationCap className="text-primary" />
                  <span className="font-bold">International Fellow</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700">
                  <Globe className="text-primary" />
                  <span className="font-bold">Global Experience</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           {/* Main Bio */}
           <div className="lg:col-span-8 space-y-12">
              <section className="space-y-6">
                 <h2 className="text-3xl font-playfair font-bold text-slate-900">Professional Journey</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                    Dr. Elena Vance is a world-renowned dermatologist with over 15 years of dedicated practice in clinical and aesthetic dermatology. Her journey began with a passion for understanding the skin&apos;s complex biological processes and has evolved into a career focused on providing life-changing transformations for her patients.
                 </p>
                 <p className="text-lg text-slate-600 leading-relaxed">
                    {doctorProfile.training}
                 </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                 <section className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center space-x-3">
                       <GraduationCap className="text-primary" />
                       <span>Qualifications</span>
                    </h3>
                    <ul className="space-y-4">
                       {doctorProfile.qualifications.map((q, i) => (
                         <li key={i} className="flex items-start space-x-3 text-slate-600 font-medium leading-tight">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{q}</span>
                         </li>
                       ))}
                    </ul>
                 </section>
                 <section className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center space-x-3">
                       <Award className="text-primary" />
                       <span>Certifications</span>
                    </h3>
                    <ul className="space-y-4">
                       {doctorProfile.certifications.map((c, i) => (
                         <li key={i} className="flex items-start space-x-3 text-slate-600 font-medium leading-tight">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{c}</span>
                         </li>
                       ))}
                    </ul>
                 </section>
              </div>

              <section className="space-y-6 pt-12">
                 <h3 className="text-2xl font-bold flex items-center space-x-3">
                    <BookOpen className="text-primary" />
                    <span>Publications & Research</span>
                 </h3>
                 <p className="text-lg text-slate-600 leading-relaxed italic">
                    &quot;{doctorProfile.publications}&quot;
                 </p>
              </section>
           </div>

           {/* Sidebar Info */}
           <div className="lg:col-span-4 space-y-12">
              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200">
                 <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Memberships</h4>
                 <ul className="space-y-6">
                    {doctorProfile.memberships.map((m, i) => (
                      <li key={i} className="flex items-center space-x-4">
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                            <CheckCircle2 size={20} />
                         </div>
                         <span className="font-bold text-slate-700 text-sm">{m}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-primary p-10 rounded-[40px] text-white text-center">
                 <Heart className="mx-auto mb-6" size={40} />
                 <h4 className="text-2xl font-playfair font-bold mb-4 italic">Experience the Difference</h4>
                 <p className="text-primary-100 mb-8 leading-relaxed">Dr. Vance is currently accepting new patients for medical and aesthetic consultations.</p>
                 <Link href="/book" className="block w-full bg-white text-primary py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                    Schedule Your Visit
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

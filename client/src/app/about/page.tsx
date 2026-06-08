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
    <div className="pb-32">
      <JSONLD data={doctorSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&h=1000&fit=crop"
                alt={doctorProfile.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-[100px] opacity-30" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100/50 rounded-full -z-10 blur-[100px] opacity-30" />
          </div>
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Expert Profile</span>
              <h1 className="text-4xl md:text-7xl font-playfair font-bold text-slate-900 leading-[1.1] mt-6">
                Dedicated to the Art & Science of <span className="text-primary italic">Skin Health</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary/20 pl-6">
              {doctorProfile.philosophy}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
               <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><ShieldCheck /></div>
                  <span className="font-bold text-slate-800 text-sm">Board Certified Specialist</span>
               </div>
               <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Award /></div>
                  <span className="font-bold text-slate-800 text-sm">Award Winning Clinician</span>
               </div>
               <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><GraduationCap /></div>
                  <span className="font-bold text-slate-800 text-sm">International Fellow</span>
               </div>
               <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Globe /></div>
                  <span className="font-bold text-slate-800 text-sm">Global Clinical Experience</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           {/* Main Bio */}
           <div className="lg:col-span-8 space-y-20">
              <section className="space-y-8">
                 <h2 className="text-3xl font-playfair font-bold text-slate-900 flex items-center gap-4">
                   Professional Journey
                   <div className="h-px bg-slate-100 flex-grow" />
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                    Dr. Elena Vance is a world-renowned dermatologist with over 15 years of dedicated practice in clinical and aesthetic dermatology. Her journey began with a passion for understanding the skin&apos;s complex biological processes and has evolved into a career focused on providing life-changing transformations for her patients.
                 </p>
                 <p className="text-lg text-slate-600 leading-relaxed">
                    {doctorProfile.training}
                 </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                 <section className="space-y-8 bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100">
                    <h3 className="text-2xl font-bold flex items-center space-x-3 text-slate-900">
                       <GraduationCap className="text-primary" />
                       <span>Qualifications</span>
                    </h3>
                    <ul className="space-y-5">
                       {doctorProfile.qualifications.map((q, i) => (
                         <li key={i} className="flex items-start space-x-4 text-slate-600 font-bold text-sm leading-tight">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{q}</span>
                         </li>
                       ))}
                    </ul>
                 </section>
                 <section className="space-y-8 bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100">
                    <h3 className="text-2xl font-bold flex items-center space-x-3 text-slate-900">
                       <Award className="text-primary" />
                       <span>Certifications</span>
                    </h3>
                    <ul className="space-y-5">
                       {doctorProfile.certifications.map((c, i) => (
                         <li key={i} className="flex items-start space-x-4 text-slate-600 font-bold text-sm leading-tight">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{c}</span>
                         </li>
                       ))}
                    </ul>
                 </section>
              </div>

              <section className="space-y-8 bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 text-primary/5"><BookOpen size={120} /></div>
                 <h3 className="text-2xl font-bold flex items-center space-x-3 relative z-10 text-slate-900">
                    <BookOpen className="text-primary" />
                    <span>Research Excellence</span>
                 </h3>
                 <p className="text-xl text-slate-700 leading-relaxed italic relative z-10 font-medium">
                    &quot;{doctorProfile.publications}&quot;
                 </p>
              </section>
           </div>

           {/* Sidebar Info */}
           <div className="lg:col-span-4 space-y-12">
              <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800 shadow-xl">
                 <h4 className="font-bold text-white mb-10 uppercase text-[10px] tracking-[0.3em] opacity-50">Memberships</h4>
                 <ul className="space-y-8">
                    {doctorProfile.memberships.map((m, i) => (
                      <li key={i} className="flex items-center space-x-5 group">
                         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                            <CheckCircle2 size={24} />
                         </div>
                         <span className="font-bold text-slate-300 text-sm leading-tight">{m}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-primary p-12 rounded-[3rem] text-white text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mt-16" />
                 <Heart className="mx-auto mb-8 relative z-10" size={48} />
                 <h4 className="text-3xl font-playfair font-bold mb-6 italic relative z-10 leading-tight">Begin Your Skin Journey</h4>
                 <p className="text-primary-100 mb-10 leading-relaxed relative z-10 font-medium">Dr. Vance is currently accepting new patients for medical and aesthetic consultations.</p>
                 <Link href="/book" className="block w-full bg-white text-primary py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-xl relative z-10">
                    Schedule Visit
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

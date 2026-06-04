'use client';

import Image from "next/image";
import { Award, UserCheck, ShieldCheck } from "lucide-react";
import { FadeIn } from "./wrappers/FadeIn";

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="relative group">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/doctor/profile.jpg"
                alt="Dr. Partha Mohapatra - Best Dermatologist in Bhubaneswar"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 z-[-1]">
                <span className="text-sm">Doctor Profile Photo</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-medical-100 p-3 rounded-full text-medical-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Specialization</p>
                  <p className="text-lg font-bold text-slate-900">Skin & Hair Specialist</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="space-y-6">
            <div className="inline-block px-4 py-1 bg-medical-100 text-medical-600 rounded-full text-sm font-bold uppercase tracking-wider">
              Expert Dermatologist
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Skin & Hair Specialist in <span className="text-medical-500">Bhubaneswar</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dr.(Maj) Partha Mohapatra is widely recognized as a top-tier <strong>skin specialist in Bhubaneswar Odisha</strong>. With a commitment to clinical excellence, he provides comprehensive dermatology and trichology solutions near <strong>Unit 4</strong> and <strong>Nayapalli</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              His clinic focuses on delivering advanced medical-grade treatments tailored to individual patient needs, combining modern technology with a patient-centric approach to achieve optimal results in skin rejuvenation and hair restoration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <UserCheck className="text-medical-500 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Expertise</h4>
                  <p className="text-sm text-slate-500">Medical & Aesthetic Dermatology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="text-medical-500 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Clinical Trust</h4>
                  <p className="text-sm text-slate-500">Trusted by 10,000+ Patients</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-outline inline-block">
                Visit Our Unit 4 Clinic
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

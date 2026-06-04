import React from 'react';
import { MapPin, ShieldCheck, Award } from 'lucide-react';

const LocalSEOContent = () => {
  return (
    <section className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              📍 Local Dermatology Services in <span className="text-medical-500">Bhubaneswar</span>
            </h2>
            <div className="w-24 h-1 bg-medical-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-500">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Skin Specialist in Nayapalli & Unit 4</h3>
              <p className="text-slate-600 leading-relaxed">
                Searching for the <strong>best dermatologist in Bhubaneswar</strong>? Dr. Partha Mohapatra provides world-class skin and hair care near <strong>Unit 4</strong> and <strong>Nayapalli</strong> areas. Our clinic is centrally located to serve patients across Bhubaneswar with advanced medical-grade aesthetic and clinical dermatology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-500">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Trusted Skin Clinic Bhubaneswar</h3>
              <p className="text-slate-600 leading-relaxed">
                As a leading <strong>skin specialist in Bhubaneswar Odisha</strong>, we focus on evidence-based treatments for acne, hair loss, and chronic skin allergies. Whether you need a <strong>hair treatment clinic in Bhubaneswar</strong> or specialized laser procedures, our Unit 4 facility offers the latest technology and trusted clinical expertise.
              </p>
            </div>
          </div>

          <div className="bg-medical-500 p-8 md:p-12 rounded-[40px] text-white text-center space-y-6">
            <Award className="mx-auto" size={48} />
            <h3 className="text-2xl md:text-3xl font-display font-bold">Comprehensive Care for Every Skin Type</h3>
            <p className="text-medical-100 text-lg max-w-2xl mx-auto">
              Our clinical protocols are specifically designed for Indian skin types, ensuring safe and effective results for all our patients in the capital city.
            </p>
            <div className="pt-4">
              <a href="#appointment" className="bg-white text-medical-600 px-8 py-4 rounded-xl font-bold hover:bg-medical-50 transition-colors inline-block">
                Schedule Your Visit Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOContent;

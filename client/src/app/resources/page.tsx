import React from 'react';
import { Download, FileText, ChevronRight, CreditCard, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const sections = [
    {
      title: "Patient Forms",
      items: [
        { name: "New Patient Registration", size: "1.2 MB", type: "PDF" },
        { name: "Medical History Questionnaire", size: "850 KB", type: "PDF" },
        { name: "Consent for Photography", size: "450 KB", type: "PDF" }
      ]
    },
    {
      title: "Treatment Care Guides",
      items: [
        { name: "Post-Chemical Peel Care", size: "600 KB", type: "PDF" },
        { name: "Laser Aftercare Instructions", size: "720 KB", type: "PDF" },
        { name: "Acne Management Lifestyle Tips", size: "1.5 MB", type: "PDF" }
      ]
    }
  ];

  const paymentOptions = [
    { name: "Major Credit Cards", icon: <CreditCard className="text-primary" /> },
    { name: "Health Insurance", icon: <ShieldCheck className="text-primary" /> },
    { name: "Interest-Free EMI", icon: <CreditCard className="text-primary" /> },
    { name: "Digital Wallets", icon: <CreditCard className="text-primary" /> }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Patient Resources</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to prepare for your visit and manage your payments.</p>
        </div>

        <section className="mb-24">
           <div className="bg-slate-900 rounded-[40px] p-12 md:p-16 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold italic">Insurance & Payment</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                       We strive to make world-class dermatology accessible. We accept a wide range of insurance plans and provide flexible payment options.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {paymentOptions.map((opt, i) => (
                         <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            {opt.icon}
                            <span className="font-bold text-sm">{opt.name}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-white/5 p-10 rounded-[32px] border border-white/10 space-y-6">
                    <h3 className="text-xl font-bold">Accepted Insurances</h3>
                    <div className="flex flex-wrap gap-4">
                       {["BlueCross", "Aetna", "Cigna", "UnitedHealthcare", "Medicare"].map((ins) => (
                         <span key={ins} className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{ins}</span>
                       ))}
                    </div>
                    <p className="text-xs text-slate-500 italic">*Please contact us to confirm your specific plan coverage before your visit.</p>
                 </div>
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {sections.map((section, idx) => (
             <div key={idx} className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
                   <FileText className="text-primary" />
                   <span>{section.title}</span>
                </h2>
                <div className="space-y-4">
                   {section.items.map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                              <Download size={24} />
                           </div>
                           <div>
                              <p className="font-bold text-slate-900">{item.name}</p>
                              <p className="text-xs text-slate-400 font-medium uppercase">{item.type} • {item.size}</p>
                           </div>
                        </div>
                        <button className="p-3 bg-slate-50 rounded-full text-slate-400 hover:bg-primary hover:text-white transition-all">
                           <ChevronRight size={20} />
                        </button>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        <div className="mt-24 bg-primary rounded-[40px] p-12 text-center text-white shadow-2xl">
           <h3 className="text-3xl md:text-5xl font-playfair font-bold mb-4 italic">Ready to Begin?</h3>
           <p className="text-primary-100 mb-12 max-w-xl mx-auto">Our patient coordinators are available to answer any questions about treatments, costs, or insurance.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/book" className="bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all">
                 Book Appointment
              </Link>
              <a href="tel:+1234567890" className="border-2 border-white/30 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                 Speak with Coordinator
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}

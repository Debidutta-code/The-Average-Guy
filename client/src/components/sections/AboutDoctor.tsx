import Image from "next/image";
import { CLINIC_DATA } from "@/data/constants";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutDoctor() {
  const highlights = [
    "Specialist in Clinical & Cosmetic Dermatology",
    "Expertise in Laser Skin Treatments",
    "Advanced Hair Restoration Therapies",
    "Pioneering Acne & Scar Management",
    "Personalized Patient-Centric Care",
    "State-of-the-art Clinical Facility"
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute -inset-6 bg-medical-500 rounded-3xl -rotate-6 opacity-10" />
              <div className="absolute inset-0 bg-white p-4 rounded-3xl shadow-xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop"
                    alt="Doctor at Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-10 -right-10 bg-medical-600 text-white p-8 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 border-8 border-white">
                <span className="text-3xl font-bold leading-none">{CLINIC_DATA.experience}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Years</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="space-y-8">
            <div className="space-y-4">
              <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Meet the Doctor</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Your Skin Health is <br />
                Our Primary Mission.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {CLINIC_DATA.name} is a distinguished dermatologist in Bhubaneswar with over {CLINIC_DATA.experience} years of clinical experience. He specializes in providing advanced, evidence-based treatments for a wide spectrum of skin and hair concerns.
              </p>
              <p className="text-slate-600 leading-relaxed italic border-l-4 border-medical-500 pl-4">
                &quot;My philosophy is simple: Every patient deserves a personalized approach that combines clinical precision with compassionate care.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-medical-600" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex gap-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">MBBS, MD</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Education</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-slate-900">IADVL</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Membership</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

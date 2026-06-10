import { Award, BookOpen, CheckCircle } from "lucide-react";

export default function DoctorProfile() {
  return (
    <section className="py-24 px-6 bg-clinical-white border-t border-clinical-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] bg-clinical-charcoal/5 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 flex items-center justify-center text-clinical-charcoal/10 font-serif italic text-4xl p-12 text-center">
                Dr. Debidutta Acharya <br />
                <span className="text-xl">MD, DNB (Dermatology)</span>
               </div>
               {/* Border Accent */}
               <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r border-b border-clinical-charcoal/20 -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-clinical-charcoal/40 mb-4 block">
              Meet the Expert
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-clinical-charcoal mb-8">
              Clinical Excellence <br /> Meets Aesthetic Artistry.
            </h2>
            <p className="text-lg text-clinical-charcoal/60 leading-relaxed mb-10">
              Dr. Debidutta Acharya is a board-certified dermatologist with over 15 years
              of experience in medical and aesthetic dermatology. Specializing in advanced
              laser therapeutics and complex clinical skin conditions.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 border border-clinical-charcoal/10 flex items-center justify-center">
                  <Award size={20} className="text-clinical-charcoal" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Board Certifications</h4>
                  <p className="text-sm text-clinical-charcoal/60">MD (Dermatology, Venereology & Leprosy), DNB (New Delhi)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 border border-clinical-charcoal/10 flex items-center justify-center">
                  <BookOpen size={20} className="text-clinical-charcoal" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Professional Affiliations</h4>
                  <p className="text-sm text-clinical-charcoal/60">Indian Association of Dermatologists (IADVL), American Academy of Dermatology (AAD)</p>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4">
                {[
                  "Clinical Dermatology",
                  "Laser Therapeutics",
                  "Pediatric Skin Care",
                  "Aesthetic Injections",
                  "Dermatosurgery",
                  "Skin Rejuvenation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-clinical-charcoal" />
                    <span className="text-xs uppercase tracking-widest font-medium text-clinical-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

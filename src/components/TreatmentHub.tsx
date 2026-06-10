import { Stethoscope, Sparkles } from "lucide-react";

const medicalServices = [
  "Acne & Scar Management",
  "Eczema & Psoriasis",
  "Mole Vetting & Skin Cancer",
  "Pediatric Dermatology",
  "Rosacea Treatment",
  "Hair Loss Clinical Therapy"
];

const aestheticServices = [
  "Laser Hair Reduction",
  "Chemical Peels (Advanced)",
  "HydraFacial & Glow Therapy",
  "Dermal Fillers & Botox",
  "Microneedling (Dermapen 4)",
  "Skin Resurfacing"
];

export default function TreatmentHub() {
  return (
    <section id="treatments" className="py-24 px-6 bg-clinical-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-clinical-charcoal/40 mb-4 block">
            Specialized Care
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-clinical-charcoal max-w-2xl">
            A Dual Approach to <br /> Dermatological Health.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-clinical-charcoal/10 border border-clinical-charcoal/10">
          {/* Medical Dermatology */}
          <div className="bg-white p-12 md:p-16 hover:bg-clinical-charcoal/[0.01] transition-colors">
            <div className="w-12 h-12 bg-clinical-charcoal text-white flex items-center justify-center mb-10">
              <Stethoscope size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-6">Medical Dermatology</h3>
            <p className="text-clinical-charcoal/60 mb-10 leading-relaxed max-w-md">
              Diagnosis and treatment of all medical conditions affecting the skin,
              hair, and nails with clinical precision.
            </p>
            <ul className="space-y-4">
              {medicalServices.map((service) => (
                <li key={service} className="flex items-center text-sm font-medium uppercase tracking-widest text-clinical-charcoal/80">
                  <div className="w-1.5 h-1.5 bg-clinical-charcoal mr-4" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Aesthetic Cosmetology */}
          <div className="bg-white p-12 md:p-16 hover:bg-clinical-charcoal/[0.01] transition-colors">
            <div className="w-12 h-12 bg-clinical-charcoal text-white flex items-center justify-center mb-10">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-6">Aesthetic Cosmetology</h3>
            <p className="text-clinical-charcoal/60 mb-10 leading-relaxed max-w-md">
              Advanced aesthetic procedures designed to enhance your natural features
              and restore youthful skin vitality.
            </p>
            <ul className="space-y-4">
              {aestheticServices.map((service) => (
                <li key={service} className="flex items-center text-sm font-medium uppercase tracking-widest text-clinical-charcoal/80">
                  <div className="w-1.5 h-1.5 bg-clinical-charcoal mr-4" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

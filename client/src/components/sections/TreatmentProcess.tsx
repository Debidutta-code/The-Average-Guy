import { Search, Stethoscope, Scissors, HeartPulse } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "Detailed discussion about your concerns and dental history.",
    icon: Search,
  },
  {
    title: "Diagnosis",
    description: "Thorough clinical examination and digital X-rays if needed.",
    icon: Stethoscope,
  },
  {
    title: "Treatment",
    description: "Personalized procedure using painless and modern technology.",
    icon: Scissors,
  },
  {
    title: "Follow-Up Care",
    description: "Ensuring long-term success and maintaining your oral health.",
    icon: HeartPulse,
  },
];

export const TreatmentProcess = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">How We Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Our Treatment <span className="text-primary">Process</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary shadow-lg group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <step.icon size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-foreground/60 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

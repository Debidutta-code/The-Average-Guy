import {
  Zap,
  Droplets,
  Sparkles,
  UserRound,
  ShieldAlert,
  Trophy
} from "lucide-react";

const services = [
  {
    title: "Acne Treatment",
    description: "Personalized clinical protocols to treat active acne and prevent future breakouts effectively.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Hair Loss Treatment",
    description: "Advanced trichology solutions for hair thinning, alopecia, and scalp rejuvenation.",
    icon: <UserRound className="w-8 h-8" />,
  },
  {
    title: "Skin Allergy Treatment",
    description: "Comprehensive diagnosis and management of chronic skin allergies and irritations.",
    icon: <ShieldAlert className="w-8 h-8" />,
  },
  {
    title: "Laser Hair Removal",
    description: "Safe, medical-grade laser technology for permanent and painless hair reduction.",
    icon: <Droplets className="w-8 h-8" />,
  },
  {
    title: "Scar Treatment",
    description: "Effective procedures to reduce the appearance of acne scars, surgical scars, and keloids.",
    icon: <Trophy className="w-8 h-8" />,
  },
  {
    title: "Anti-Aging Treatment",
    description: "Modern aesthetic procedures to restore skin elasticity and reduce fine lines and wrinkles.",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Our <span className="text-medical-500">Specialized</span> Services
          </h2>
          <p className="text-slate-600 text-lg">
            We provide a wide range of dermatology and trichology services using the latest medical technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-medical-200 hover:shadow-xl hover:shadow-medical-500/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-medical-50 rounded-xl flex items-center justify-center text-medical-500 mb-6 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

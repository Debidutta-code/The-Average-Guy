import Image from "next/image";
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
    image: "/gallery/treatments/skin-1.jpg" // Placeholder for themed visual
  },
  {
    title: "Hair Loss Treatment",
    description: "Advanced trichology solutions for hair thinning, alopecia, and scalp rejuvenation.",
    icon: <UserRound className="w-8 h-8" />,
    image: "/gallery/treatments/hair-1.jpg"
  },
  {
    title: "Skin Allergy Treatment",
    description: "Comprehensive diagnosis and management of chronic skin allergies and irritations.",
    icon: <ShieldAlert className="w-8 h-8" />,
    image: "/gallery/treatments/skin-2.jpg"
  },
  {
    title: "Laser Hair Removal",
    description: "Safe, medical-grade laser technology for permanent and painless hair reduction.",
    icon: <Droplets className="w-8 h-8" />,
    image: "/gallery/treatments/laser-1.jpg"
  },
  {
    title: "Scar Treatment",
    description: "Effective procedures to reduce the appearance of acne scars, surgical scars, and keloids.",
    icon: <Trophy className="w-8 h-8" />,
    image: "/gallery/treatments/skin-3.jpg"
  },
  {
    title: "Anti-Aging Treatment",
    description: "Modern aesthetic procedures to restore skin elasticity and reduce fine lines and wrinkles.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "/gallery/treatments/skin-4.jpg"
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Advanced Skin & Hair <span className="text-medical-500">Treatments</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We provide specialized dermatology and trichology services in Bhubaneswar using the latest medical-grade technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-100 bg-white overflow-hidden hover:border-medical-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-medical-600/10 group-hover:bg-medical-600/0 transition-colors" />
                {/* Fallback label if image is generic */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-[-1]">
                  <span>{service.title} Visual</span>
                </div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-500 mb-6 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

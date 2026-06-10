import { Shield, CreditCard, Cpu, Heart, Users, Smile } from "lucide-react";

const features = [
  {
    title: "Painless Procedures",
    description: "Advanced techniques ensuring maximum comfort and minimal discomfort during treatments.",
    icon: Shield,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Affordable Pricing",
    description: "Premium dental care that fits your budget with transparent and honest pricing.",
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Modern Equipment",
    description: "Equipped with the latest dental technology for precise diagnosis and efficient treatment.",
    icon: Cpu,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Experienced Dentist",
    description: "Highly skilled professionals dedicated to providing the best clinical outcomes.",
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Personalized Care",
    description: "Every patient is unique. We tailor our treatments to meet your specific needs.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Friendly Environment",
    description: "A welcoming and stress-free atmosphere designed to make you feel at home.",
    icon: Smile,
    color: "bg-amber-50 text-amber-600",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Experience Excellence in Dental Care
          </h3>
          <p className="text-foreground/60 text-lg leading-relaxed">
            We combine expertise, technology, and compassion to provide a dental experience that is as comfortable as it is effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { CLINIC_DATA } from "@/data/constants";
import { Users, Award, Star, Clock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function TrustBar() {
  const stats = [
    { label: "Patients Treated", value: CLINIC_DATA.patientsServed, icon: Users },
    { label: "Years Experience", value: CLINIC_DATA.experience, icon: Award },
    { label: "Google Rating", value: CLINIC_DATA.rating, icon: Star },
    { label: "Emergency Support", value: "Available", icon: Clock },
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1} direction="up">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                <div className="w-12 h-12 rounded-xl bg-medical-50 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

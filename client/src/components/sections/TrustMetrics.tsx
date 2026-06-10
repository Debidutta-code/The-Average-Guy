import { Card } from "../ui/Card";
import { Users, Star, Settings, Award } from "lucide-react";

const metrics = [
  {
    icon: Users,
    label: "Happy Patients",
    value: "269+",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Star,
    label: "Google Rating",
    value: "5.0",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Settings,
    label: "Modern Equipment",
    value: "High Tech",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Award,
    label: "Experience",
    value: "Expert Care",
    color: "bg-purple-50 text-purple-600",
  },
];

export const TrustMetrics = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => (
            <Card key={index} className="text-center" delay={index * 0.1}>
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">{item.value}</h3>
              <p className="text-slate-500 text-sm font-medium">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

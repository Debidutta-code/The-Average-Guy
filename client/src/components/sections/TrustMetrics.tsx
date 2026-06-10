import { Card } from "../ui/Card";
import { Users, Star, Settings, Award } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: Users,
    label: "Happy Patients",
    value: "269+",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Star,
    label: "Google Rating",
    value: "5.0",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Settings,
    label: "Modern Equipment",
    value: "High Tech",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
  {
    icon: Award,
    label: "Expert Doctors",
    value: "10+ Yrs",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
];

export const TrustMetrics = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center p-8 rounded-3xl border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white dark:bg-slate-900 group">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-base font-semibold uppercase tracking-wider">
                  {item.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

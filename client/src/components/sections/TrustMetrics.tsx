"use client";

import { Card } from "../ui/Card";
import { Users, Star, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const metrics = [
  {
    icon: Users,
    label: "Happy Patients",
    value: 269,
    suffix: "+",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    label: "Google Rating",
    value: 5.0,
    suffix: ".0",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Settings,
    label: "Modern Equipment",
    value: 100,
    suffix: "%",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: ShieldCheck,
    label: "Success Rate",
    value: 99,
    suffix: "%",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return <span ref={countRef}>{value === 5 ? "5.0" : count}{suffix}</span>;
};

export const TrustMetrics = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center p-8 md:p-10 border-slate-100 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-500 bg-white group border-none">
                <div className={`w-20 h-20 rounded-[2rem] ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon size={36} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-3 text-slate-900">
                  <Counter value={item.value} suffix={item.suffix} />
                </h3>
                <p className="text-slate-500 text-sm font-black uppercase tracking-[0.15em]">
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

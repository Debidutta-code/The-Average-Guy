"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "1,999",
    desc: "Start your journey with essential access.",
    features: ["Gym Access", "Locker Room", "Cardio Zone", "Basic Training Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "3,499",
    desc: "The sweet spot for serious fitness enthusiasts.",
    features: ["All Basic Features", "CrossFit Classes", "Zumba & Yoga", "Nutrition Guide"],
    popular: true,
  },
  {
    name: "Elite",
    price: "5,999",
    desc: "Unlimited power. Maximum results.",
    features: ["All Pro Features", "Personal Trainer", "Sauna & Recovery", "Priority Support"],
    popular: false,
  },
];

export default function MembershipPlans() {
  return (
    <section className="bg-[#050505] py-32" id="plans">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.5em] text-qnts-red">
            Investment in Self
          </span>
          <h2 className="text-5xl font-black text-white md:text-7xl">
            CHOOSE YOUR <span className="text-qnts-lime italic">TIER</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-qnts-lime ring-4 ring-qnts-lime/20"
                  : "bg-zinc-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`mb-2 text-2xl font-black uppercase ${
                    plan.popular ? "text-black" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-black/60" : "text-white/40"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="mb-10 flex items-baseline gap-2">
                <span
                  className={`text-6xl font-black ${
                    plan.popular ? "text-black" : "text-white"
                  }`}
                >
                  ₹{plan.price}
                </span>
                <span
                  className={`text-sm font-bold uppercase opacity-60 ${
                    plan.popular ? "text-black" : "text-white"
                  }`}
                >
                  /mo
                </span>
              </div>

              <div className="mb-10 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check
                      className={plan.popular ? "text-black" : "text-qnts-lime"}
                      size={18}
                    />
                    <span
                      className={`text-sm font-medium ${
                        plan.popular ? "text-black/80" : "text-white/70"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full rounded-2xl py-5 text-sm font-black uppercase tracking-widest transition-all ${
                  plan.popular
                    ? "bg-black text-white hover:scale-105"
                    : "bg-white text-black hover:bg-qnts-lime"
                }`}
              >
                Join {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

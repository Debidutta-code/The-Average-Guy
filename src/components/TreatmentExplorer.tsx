"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Zap } from "lucide-react";

const treatments = [
  {
    id: "laser",
    name: "Laser Hair Reduction",
    indications: "Unwanted hair growth, Hirsutism, Folliculitis",
    duration: "30 - 60 Minutes",
    downtime: "Zero downtime, mild redness for 1 hour",
    description: "Our FDA-approved triple-wavelength laser technology targets hair follicles at multiple depths for permanent reduction."
  },
  {
    id: "peels",
    name: "Chemical Peels",
    indications: "Hyperpigmentation, Acne, Fine lines, Dull skin",
    duration: "45 Minutes",
    downtime: "2-3 days of mild flaking",
    description: "Medical-grade chemical exfoliants are applied to remove dead skin cells and stimulate the production of new skin cells."
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    indications: "Congested pores, Dry skin, Uneven texture",
    duration: "45 Minutes",
    downtime: "Zero downtime, immediate glow",
    description: "A multi-step treatment that cleanses, exfoliates, and extracts impurities while infusing the skin with hydration and antioxidants."
  },
  {
    id: "microneedling",
    name: "Microneedling (Dermapen 4)",
    indications: "Acne scars, Large pores, Stretch marks",
    duration: "60 Minutes",
    downtime: "24-48 hours of redness",
    description: "Creates controlled micro-injuries to trigger the body's natural wound healing process, resulting in increased collagen production."
  }
];

export default function TreatmentExplorer() {
  const [activeTab, setActiveTab] = useState(treatments[0].id);
  const activeTreatment = treatments.find((t) => t.id === activeTab) || treatments[0];

  return (
    <section className="py-24 px-6 bg-clinical-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Tabs List */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-serif mb-12">Treatment Explorer</h2>
            <div className="flex flex-col space-y-2">
              {treatments.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`text-left py-6 px-8 transition-all border ${
                    activeTab === t.id
                      ? "bg-white text-clinical-charcoal border-white"
                      : "bg-transparent text-white/50 border-white/10 hover:border-white/30"
                  } text-sm uppercase tracking-widest font-bold`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Details Pane */}
          <div className="w-full md:w-2/3 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <h3 className="text-5xl font-serif">{activeTreatment.name}</h3>
                <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                  {activeTreatment.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 text-white">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Indications</p>
                      <p className="text-sm font-medium">{activeTreatment.indications}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 text-white">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Session Duration</p>
                      <p className="text-sm font-medium">{activeTreatment.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 text-white">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Expected Downtime</p>
                      <p className="text-sm font-medium">{activeTreatment.downtime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

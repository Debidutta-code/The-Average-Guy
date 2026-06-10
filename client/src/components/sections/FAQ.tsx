"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "../ui/SectionHeading";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <SectionHeading
          title="Patient Education"
          subtitle="Empowering you with knowledge. Find answers to common questions about dental health and treatments."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                openIndex === index
                  ? "bg-white dark:bg-slate-900 border-primary shadow-xl shadow-primary/5"
                  : "bg-white/50 dark:bg-slate-900/50 border-slate-200/60 dark:border-slate-800 hover:border-primary/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                    openIndex === index ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-lg font-bold transition-colors ${
                    openIndex === index ? "text-primary" : "text-slate-900 dark:text-white"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index ? "bg-primary text-white rotate-0" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pl-20 pr-12 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                      <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 mb-6" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

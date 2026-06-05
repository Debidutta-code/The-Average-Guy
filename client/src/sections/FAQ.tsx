"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is dental treatment painful?",
    answer: "At Kapoor's Dental Care Centre, we use modern local anesthesia and advanced techniques to ensure that procedures like RCT or extractions are virtually painless. Your comfort is our top priority."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Yes, we recommend booking an appointment to ensure you receive timely care without long waiting periods. However, we do our best to accommodate emergency cases as quickly as possible."
  },
  {
    question: "How long does a Root Canal Treatment (RCT) take?",
    answer: "A standard RCT usually takes 1 to 2 sessions of about 45-60 minutes each, depending on the complexity of the case. Modern technology allows us to complete many cases in a single visit."
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer: "Yes, professional teeth whitening at our clinic is perfectly safe. we use clinical-grade whitening agents that are designed to lift stains without damaging the structural integrity of your enamel."
  },
  {
    question: "What are your clinic timings?",
    answer: "Our clinic is open from 5:00 PM onwards, Monday to Saturday. We recommend calling ahead or booking through our website to secure your preferred slot."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="lg:w-1/3">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Common Questions</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Everything You Need to <span className="text-primary italic">Know</span>.
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Find answers to the most common questions about our dental services and clinical procedures.
            </p>
            <div className="p-8 rounded-[32px] bg-primary text-white">
               <h4 className="font-bold text-lg mb-2">Still have questions?</h4>
               <p className="text-white/80 text-sm mb-6">Can&apos;t find the answer you&apos;re looking for? Reach out to us directly via WhatsApp or Phone.</p>
               <a href="tel:+910000000000" className="inline-block bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
                 Contact Support
               </a>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-[24px] border transition-all duration-300 ${
                  openIndex === idx ? "bg-white border-primary/20 shadow-lg shadow-primary/5" : "bg-white/50 border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === idx ? "text-primary" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === idx ? "bg-primary text-white rotate-0" : "bg-slate-100 text-slate-500"
                  }`}>
                    {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 text-slate-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

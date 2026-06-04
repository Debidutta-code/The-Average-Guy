'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the consultation fee?",
    answer: "Please contact the clinic directly via phone or WhatsApp for the current consultation fee, as it may vary based on the specialization and time required for the assessment."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Yes, we highly recommend booking an appointment in advance to ensure minimal waiting time and a guaranteed slot with Dr. Partha Mohapatra."
  },
  {
    question: "How long does a typical skin treatment take?",
    answer: "Most clinical procedures take between 30 to 60 minutes. However, the duration depends entirely on the type of treatment and the specific area being addressed."
  },
  {
    question: "Is laser hair removal treatment safe?",
    answer: "Absolutely. We use medical-grade, US FDA-approved laser technology which is safe for Indian skin types when performed under clinical supervision."
  },
  {
    question: "What common skin conditions are treated at the clinic?",
    answer: "We treat a wide spectrum of conditions including acne, hair loss, skin allergies, pigmentation, scars, fungal infections, and anti-aging concerns."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-medical-500">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Got questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'border-medical-300 bg-medical-50/30' : 'border-slate-100 bg-white hover:border-medical-200'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === index ? 'text-medical-600' : 'text-slate-900'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors ${
                  openIndex === index ? 'bg-medical-500 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-medical-100/50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

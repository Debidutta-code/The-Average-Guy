"use client";

import { useState } from "react";
import { FAQS } from "@/data/constants";
import { Plus, Minus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="right">
            <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 leading-tight">
              Patient Support <br />
              & Transparency
            </h2>
            <p className="text-slate-600 text-lg mt-6 max-w-md">
              We believe in informed healthcare. If you have any other questions, feel free to reach out to us.
            </p>

            <div className="mt-10 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900">Still have questions?</h4>
              <p className="text-sm text-slate-500 mt-2">Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.</p>
              <button className="mt-6 px-6 py-3 bg-medical-500 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-medical-600 transition-colors">
                Get in Touch
              </button>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "border-medical-500 bg-medical-50/30" : "border-slate-100 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-bold transition-colors ${openIndex === index ? "text-medical-700" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-medical-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-medical-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

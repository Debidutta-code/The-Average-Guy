import React from 'react';
import { HelpCircle } from 'lucide-react';
import JSONLD from '@/components/JSONLD';

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      items: [
        { q: "What should I bring to my first appointment?", a: "Please bring any previous skin medical records and a list of current medications or skincare products you are using." },
        { q: "Do you accept insurance?", a: "We work with several major insurance providers. Please contact our front desk to verify your specific coverage." }
      ]
    },
    {
      category: "Treatments",
      items: [
        { q: "Is laser hair reduction painful?", a: "Most patients describe the sensation as a light snap of a rubber band. Our advanced cooling technology makes the procedure very comfortable." },
        { q: "How many acne sessions will I need?", a: "Depending on severity, most patients see significant results within 4-6 sessions scheduled 2-4 weeks apart." }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(cat => cat.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    })))
  };

  return (
    <div className="pt-32 pb-24">
      <JSONLD data={faqSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-16">Frequently Asked Questions</h1>

        <div className="space-y-12">
          {faqs.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary border-b border-slate-100 pb-4">{cat.category}</h2>
              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-start space-x-3">
                       <HelpCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                       <span>{item.q}</span>
                    </h3>
                    <p className="text-slate-600 leading-relaxed ml-8">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

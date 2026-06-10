"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is root canal treatment painful?",
    answer: "No, with modern anesthesia and advanced techniques used at Smile Planet, root canal treatment is as comfortable as getting a filling. Most patients feel immediate relief from the pain they were experiencing before the treatment.",
  },
  {
    question: "How long does a dental implant procedure take?",
    answer: "The entire process can take 3 to 6 months. It involves placing the implant, allowing it to heal and integrate with the bone, and then attaching the crown. Each case varies based on the patient's bone density and healing rate.",
  },
  {
    question: "What are the benefits of clear aligners over traditional braces?",
    answer: "Clear aligners are virtually invisible, removable for eating and cleaning, and generally more comfortable than metal braces. They allow you to maintain better oral hygiene during treatment.",
  },
  {
    question: "How often should I visit the dentist for a checkup?",
    answer: "We recommend a professional checkup and cleaning every 6 months to maintain optimal oral health and detect any potential issues early.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we prioritize dental emergencies such as severe toothaches, broken teeth, or knocked-out teeth. Please call us immediately if you have an emergency.",
  },
  {
    question: "At what age should a child first visit the dentist?",
    answer: "The American Academy of Pediatric Dentistry recommends that a child should see a dentist by their first birthday or when their first tooth appears.",
  },
  {
    question: "How much does teeth whitening cost?",
    answer: "Teeth whitening costs vary depending on the method used. We offer both in-office professional whitening and take-home kits. Contact us for a specific quote.",
  },
  {
    question: "How long do dental crowns last?",
    answer: "With proper care and good oral hygiene, dental crowns can last between 10 and 15 years, or even longer.",
  },
  {
    question: "What should I do if my tooth is knocked out?",
    answer: "Hold the tooth by the crown, rinse it gently with water (don't scrub), and try to place it back in the socket. If that's not possible, keep it in a container of milk and see us immediately.",
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes, we use digital X-rays which emit up to 90% less radiation than traditional film X-rays. They are essential for accurate diagnosis.",
  },
  {
    question: "Do you provide painless injections?",
    answer: "Yes, we use topical numbing gels and precise injection techniques to make the local anesthesia process as painless as possible.",
  },
  {
    question: "How can I prevent bad breath?",
    answer: "Regular brushing, flossing, tongue cleaning, and staying hydrated are key. Professional cleanings help remove the bacteria that cause persistent bad breath.",
  },
  {
    question: "What is smile designing?",
    answer: "Smile designing is a cosmetic process that improves the appearance of your smile through procedures like veneers, bonding, whitening, and gum contouring.",
  },
  {
    question: "How long does a professional cleaning take?",
    answer: "A typical professional cleaning and examination take about 45 minutes to an hour.",
  },
  {
    question: "What types of payment do you accept?",
    answer: "We accept cash, all major credit/debit cards, UPI, and offer flexible EMI options for major treatments.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Dental FAQ
          </h3>
          <p className="text-foreground/60 text-lg">
            Find answers to some of the most frequently asked questions about our treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <ChevronDown
                  className={`text-primary shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className="px-8 pb-6 text-foreground/60 leading-relaxed border-t border-slate-50 pt-4">
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is there a free trial session?",
    a: "Yes! We offer a one-day complimentary pass for you to experience our premium facilities and atmosphere.",
  },
  {
    q: "Do you provide personal training?",
    a: "Absolutely. We have a team of certified elite coaches specializing in everything from fat loss to professional bodybuilding.",
  },
  {
    q: "What are the gym timings?",
    a: "We are open from 5:30 AM to 10:00 PM every day to accommodate all schedules.",
  },
  {
    q: "Are CrossFit classes included in the membership?",
    a: "CrossFit is included in our Pro and Elite membership tiers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] section-padding" id="faq">
      <div className="container-custom max-w-3xl">
        <h2 className="mb-16 text-center italic">
          QUESTIONS?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left group"
              >
                <span className="text-lg font-bold text-white transition-colors group-hover:text-qnts-lime">
                  {faq.q}
                </span>
                <span className="text-qnts-lime shrink-0 ml-4">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-white/50 leading-relaxed max-w-2xl">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

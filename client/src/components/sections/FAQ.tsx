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
    <section className="bg-[#050505] py-32" id="faq">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-20 text-center text-5xl font-black text-white md:text-7xl italic">
          QUESTIONS?
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <span className="text-xl font-bold text-white md:text-2xl transition-colors hover:text-qnts-lime">
                  {faq.q}
                </span>
                <span className="text-qnts-lime">
                  {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="py-4 text-lg text-white/50">{faq.a}</p>
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

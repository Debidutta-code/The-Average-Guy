"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I know if I need to see a neurologist?",
    answer: "You should consider seeing a neurologist if you experience persistent symptoms such as chronic headaches, dizziness, numbness or tingling, muscle weakness, memory loss, or coordination issues.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer: "While many patients are referred by their general practitioners, we also accept direct bookings for initial consultations and second opinions.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring any previous medical records, recent MRI/CT scan reports, a list of current medications, and any specific questions regarding your symptoms.",
  },
  {
    question: "Does the clinic offer neuro-diagnostic testing on-site?",
    answer: "Yes, we have state-of-the-art facilities for EEG, EMG, and NCV testing available directly within our clinic premises.",
  },
  {
    question: "Is tele-consultation available for international patients?",
    answer: "Absolutely. We offer premium video consultation services for patients globally, providing expert neurological advice and second opinions.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-neuro-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg italic">
            Providing clarity and transparency for your neurological health journey.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass px-8 rounded-2xl border-white/5 border-none">
              <AccordionTrigger className="text-left text-lg font-bold font-playfair hover:no-underline hover:text-primary transition-colors py-6 border-none focus-visible:ring-0">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

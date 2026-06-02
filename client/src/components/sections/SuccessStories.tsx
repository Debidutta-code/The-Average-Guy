"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    condition: "Post-Stroke Recovery",
    story: "After my stroke, I lost significant motor control. Dr. Arpan's tailored rehabilitation protocol was life-changing. Within 6 months, I'm back to walking and partial office work.",
    recovery: "6 Months",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Sneha Mohanty",
    condition: "Chronic Migraine",
    story: "I had been suffering for 10 years. The precision diagnostics here identified triggers no one else found. I am finally migraine-free for 3 months straight.",
    recovery: "3 Months",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Amitabh Das",
    condition: "Early Parkinson's",
    story: "The holistic approach to my Parkinson's treatment, combining medicine with specific lifestyle changes, has significantly slowed the progression of tremors.",
    recovery: "Ongoing Care",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6 italic">Stories of <span className="text-primary not-italic">Resilience</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every recovery is a testament to the power of modern medicine and the human spirit. We are honored to be part of these journeys.
            </p>
          </motion.div>
          <div className="flex justify-start lg:justify-end">
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden relative">
                    <Image
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop`}
                      alt="User"
                      fill
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className="text-primary font-bold">10k+</span> Happy Patients
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 flex flex-col h-full hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={testi.image} alt={testi.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testi.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{testi.condition}</p>
                </div>
              </div>

              <div className="mb-6 relative">
                <Quote className="text-primary/20 absolute -top-4 -left-4 w-12 h-12" />
                <p className="text-muted-foreground leading-relaxed italic relative z-10">
                  &ldquo;{testi.story}&rdquo;
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Recovery Timeline</p>
                  <p className="font-bold text-primary">{testi.recovery}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            Read More Success Stories <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

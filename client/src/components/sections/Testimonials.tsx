"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";
import { Card } from "../ui/Card";

const reviews = [
  {
    name: "Sandeep Mohanty",
    role: "Patient",
    image: images.testimonials.p1,
    review: "Excellent experience at MO Dental Clinic. Dr. Acharya is very professional and explained the whole procedure. The clinic is very clean and uses the latest technology. Highly recommended for root canal treatment.",
    rating: 5,
    treatment: "Root Canal"
  },
  {
    name: "Priyanka Das",
    role: "Patient",
    image: images.testimonials.p2,
    review: "The best dental clinic in Bhubaneswar. I was worried about my wisdom tooth extraction, but it was completely painless. The staff is very friendly and caring. 5 stars for the service!",
    rating: 5,
    treatment: "Tooth Extraction"
  },
  {
    name: "Rajesh Kumar",
    role: "Patient",
    image: images.testimonials.p3,
    review: "Got my dental implants done here. The results are amazing and look completely natural. Dr. Acharya is a master of his craft. Thank you MO Dental team for the wonderful smile transformation.",
    rating: 5,
    treatment: "Dental Implants"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading
              badge="Patient Testimonials"
              title="What Our Patients Say About Us"
              description="Join 269+ happy patients who have experienced premium dental care at MO Dental Clinic. Your satisfaction is our greatest achievement."
            />

            <div className="flex gap-4 mb-12">
              <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="text-3xl font-black text-slate-900 leading-none">5.0</div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">Google Rating</div>
                </div>
              </div>
              <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="text-3xl font-black text-slate-900 leading-none">269+</div>
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">Verified <br /> Reviews</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
                className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="relative h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Card className="h-full p-10 md:p-14 border-none shadow-premium-hover flex flex-col justify-between group overflow-hidden bg-white">
                    <Quote className="absolute -top-6 -left-6 w-32 h-32 text-primary/5" />

                    <div>
                      <div className="flex text-yellow-400 mb-8">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed italic mb-8 relative z-10">
                        &quot;{reviews[activeIndex].review}&quot;
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-slate-100 shrink-0">
                          <Image
                            src={reviews[activeIndex].image}
                            alt={reviews[activeIndex].name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-lg leading-none mb-1">{reviews[activeIndex].name}</h4>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.15em]">{reviews[activeIndex].role}</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                        {reviews[activeIndex].treatment}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

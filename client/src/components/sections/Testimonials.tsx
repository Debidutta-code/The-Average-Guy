"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Mohanty",
    text: "The root canal treatment was absolutely painless. Dr. Partha is very patient and explained everything clearly. Highly recommend Smile Planet!",
    rating: 5,
    treatment: "Root Canal Treatment",
  },
  {
    name: "Sriya Das",
    text: "Best dental clinic in Bhubaneswar. The staff is friendly, and the clinic is super clean. I got my teeth whitening done, and the results are amazing.",
    rating: 5,
    treatment: "Teeth Whitening",
  },
  {
    name: "Rajesh Kumar",
    text: "Affordable dental implants with top-notch quality. I was worried about the cost, but they have very reasonable pricing compared to others.",
    rating: 5,
    treatment: "Dental Implants",
  },
  {
    name: "Priya Sharma",
    text: "My daughter was so comfortable during her extraction. Dr. Partha has a magical way with kids. Extremely satisfied with the care.",
    rating: 5,
    treatment: "Kids Dentistry",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Patient Stories</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            What Our Patients <span className="text-primary">Say</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
            <Quote className="absolute top-10 right-10 text-primary/10" size={120} />

            <div className="relative z-10">
              <div className="flex space-x-1 mb-6 text-amber-400">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-display leading-relaxed text-foreground mb-8">
                &quot;{testimonials[activeIndex].text}&quot;
              </p>

              <div>
                <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-primary font-medium">{testimonials[activeIndex].treatment}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

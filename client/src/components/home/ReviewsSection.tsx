'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Dash",
    role: "Local Guide",
    content: "The best heritage cafe in Bhubaneswar. The ambiance is so calm and the ginger tea is exactly what you need on a slow evening. A must-visit in Old Town!",
    rating: 5
  },
  {
    name: "Priyanka Mohanty",
    role: "Food Blogger",
    content: "Loved the vintage vibes and the library corner. It&apos;s rare to find such a peaceful spot in the city. The Paneer Tikka Pizza was surprisingly good!",
    rating: 5
  },
  {
    name: "Amit Sharma",
    role: "Cafe Regular",
    content: "Old Town Cafe has a soul. From the architecture to the soft music and excellent coffee, everything is curated for comfort. 10/10 recommendation.",
    rating: 5
  }
];

export function ReviewsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-heritage-beige/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote className="text-primary w-96 h-96 absolute -top-20 -left-20 rotate-12" />
        <Quote className="text-primary w-96 h-96 absolute -bottom-20 -right-20 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
            What Our <span className="text-primary italic">Guests Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-3xl vintage-shadow relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-accent" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground italic leading-relaxed mb-8">
                &quot;{review.content}&quot;
              </p>
              <div>
                <h4 className="font-bold text-foreground text-xl">{review.name}</h4>
                <p className="text-sm text-primary font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border shadow-sm">
            <span className="text-sm font-bold text-foreground">Excellent 4.9/5 on Google Reviews</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-accent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

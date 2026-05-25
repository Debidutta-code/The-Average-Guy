'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    comment: 'The best vibe in Bhubaneswar! Their cold brew is out of this world and the staff is super friendly.',
    rating: 5,
  },
  {
    name: 'Ananya Dash',
    comment: 'Perfect place for networking and work. I love the community events they host every weekend.',
    rating: 5,
  },
  {
    name: 'Siddharth Mohanty',
    comment: 'Aesthetic at its peak. The bento grid style events and the music nights are just amazing.',
    rating: 4,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />

        <div className="text-center mb-16 space-y-4 relative z-10">
          <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Community Voices</h3>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            REVIEWS <span className="text-white/20">& LOVE</span>
          </h2>
        </div>

        <div className="flex flex-col md:row gap-8 relative z-10 overflow-x-auto pb-12 scrollbar-hide">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="min-w-full md:min-w-[400px] flex-1 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5" size={60} />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? '#FF6B00' : 'transparent'} color={i < review.rating ? '#FF6B00' : '#333'} />
                ))}
              </div>
              <p className="text-xl text-white/80 font-medium mb-8 leading-relaxed italic">
                "{review.comment}"
              </p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Local Guide</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

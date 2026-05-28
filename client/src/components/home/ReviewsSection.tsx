'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    comment: 'The best rooftop vibe in Bhubaneswar! Their Greek salad is fresh and the Mykonos Sunset cocktail is a must-try.',
    rating: 5,
  },
  {
    name: 'Ananya Dash',
    comment: 'East India’s first Greek themed rooftop and it lives up to the hype. Perfect for sunset drinks with friends.',
    rating: 5,
  },
  {
    name: 'Siddharth Mohanty',
    comment: 'Amazing energy during the DJ nights. The Mediterranean aesthetic is stunning and very Instagrammable.',
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />

        <div className="text-center mb-16 space-y-4 relative z-10">
          <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Community Voices</h3>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter uppercase leading-none">
            REVIEWS <span className="text-brand-blue">& LOVE</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative z-10 overflow-x-auto pb-12 scrollbar-hide">
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
                  <Star key={i} size={16} fill={i < review.rating ? '#D4AF37' : 'transparent'} color={i < review.rating ? '#D4AF37' : '#333'} />
                ))}
              </div>
              <p className="text-xl text-white/80 font-medium mb-8 leading-relaxed italic">
                &ldquo;{review.comment}&rdquo;
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

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priyanka Mohanty',
    comment: 'The Monarch Mug redefined my perception of a cafe. The white-themed minimalism is incredibly calming, and their attention to detail is evident in every cup.',
    rating: 5,
  },
  {
    name: 'Arjun Das',
    comment: 'An architectural masterpiece. Perfect for focused work or deep conversations. The natural lighting and the premium coffee culture make it the best in Bhubaneswar.',
    rating: 5,
  },
  {
    name: 'Sneha Rao',
    comment: 'A sanctuary for those who appreciate slow living and quiet luxury. The staff is refined, and the aesthetic is simply unmatched.',
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-ivory overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20 space-y-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Voices of the Community</span>
          <h2 className="text-5xl md:text-7xl font-serif font-medium text-foreground tracking-tight leading-none">
            Refined <span className="italic">Appreciation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: 'easeOut' }}
              className="bg-white p-12 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? '#C5A059' : 'transparent'} color={i < review.rating ? '#C5A059' : '#E5E5E5'} />
                  ))}
                </div>
                <p className="text-lg text-foreground/70 font-light leading-relaxed italic mb-12">
                  &quot;{review.comment}&quot;
                </p>
              </div>
              <div className="border-t border-black/5 pt-8">
                <h4 className="text-foreground font-bold text-sm tracking-tight">{review.name}</h4>
                <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold mt-1">Refined Patron</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white rounded-full shadow-sm border border-black/5">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-latte overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Patron" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">4.9/5 from 200+ patrons</span>
          </div>
        </div>
      </div>
    </section>
  );
}

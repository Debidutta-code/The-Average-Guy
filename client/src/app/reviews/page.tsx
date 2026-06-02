"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya Mishra",
    rating: 5,
    text: "The best rooftop experience in Bhubaneswar. The cocktails are truly world-class and the vibe is unmatched.",
    date: "2 weeks ago",
  },
  {
    name: "Rahul Sharma",
    rating: 4,
    text: "Amazing food and service. The Embassy Special Biryani is a must-try. Digital luxury at its best.",
    date: "1 month ago",
  },
  {
    name: "Priyanka Dash",
    rating: 5,
    text: "Cinematic atmosphere. Felt like I was in a high-end lounge in Mumbai or Dubai. Great job!",
    date: "3 days ago",
  },
  {
    name: "Soumya Ranjan",
    rating: 5,
    text: "The DJ nights are electric. Best place for weekend parties with friends. Highly recommended.",
    date: "1 week ago",
  },
  {
      name: "Debasish Pati",
      rating: 5,
      text: "The interior design is just wow. Every corner is instagrammable. Food is equally good.",
      date: "2 months ago",
  }
];

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4">Guest Voices</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
            The <span className="text-white/20">Experience</span>
          </h1>
        </div>

        {/* Marquee Effect (Simulation with Flex and Animation) */}
        <div className="relative overflow-hidden py-12 mb-24">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex space-x-8 w-fit"
            >
                {[...reviews, ...reviews].map((review, i) => (
                    <div key={i} className="w-[400px] shrink-0 bg-white/[0.02] border border-white/5 p-10 space-y-6 rounded-sm">
                        <div className="flex space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                            ))}
                        </div>
                        <p className="text-white/60 italic leading-relaxed text-lg">
                            &quot;{review.text}&quot;
                        </p>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs">{review.name}</h4>
                                <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">{review.date}</p>
                            </div>
                            <Quote size={24} className="text-white/5" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-12 bg-brand-gold/[0.03] border border-brand-gold/10 text-center space-y-4">
                <h3 className="text-6xl font-black italic text-brand-gold tracking-tighter">4.2</h3>
                <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Average Google Rating</p>
            </div>
            <div className="p-12 bg-white/[0.02] border border-white/5 text-center space-y-4">
                <h3 className="text-6xl font-black italic text-white tracking-tighter">5K+</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Verified Reviews</p>
            </div>
            <div className="p-12 bg-white/[0.02] border border-white/5 text-center space-y-4">
                <h3 className="text-6xl font-black italic text-white tracking-tighter">98%</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Recommendation Rate</p>
            </div>
        </div>

        <div className="mt-24 text-center">
            <button className="px-12 py-5 bg-white text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-all duration-500 rounded-sm">
                Write a Review
            </button>
        </div>
      </div>
    </div>
  );
}

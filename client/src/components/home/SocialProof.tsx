"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya Mishra",
    text: "The rooftop ambience is one of the best in Bhubaneswar. Perfect for golden hour.",
    rating: 5
  },
  {
    name: "Rahul Sharma",
    text: "Great music, cocktails and atmosphere. The energy during DJ nights is electric.",
    rating: 5
  },
  {
    name: "Priyanka Dash",
    text: "The rooftop seating completely changes the experience. Highly recommended for celebrations.",
    rating: 5
  },
  {
    name: "Soumya Ranjan",
    text: "Perfect destination for weekend outings with friends. The food is as good as the vibe.",
    rating: 4
  }
];

export default function SocialProof() {
  return (
    <section className="py-40 bg-brand-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6">Social Proof</h2>
            <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                GUEST <span className="text-white/20">VOICES</span>
            </h3>
        </div>

        <div className="relative">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex space-x-8 w-fit"
            >
                {[...reviews, ...reviews].map((review, i) => (
                    <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-white/[0.02] border border-white/5 p-12 space-y-8 rounded-sm group hover:border-brand-gold/20 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < review.rating ? "#D4AF37" : "transparent"} color="#D4AF37" />
                                ))}
                            </div>
                            <Quote size={32} className="text-white/5 group-hover:text-brand-gold/10 transition-colors" />
                        </div>

                        <p className="text-white/60 italic leading-relaxed text-xl">
                            &quot;{review.text}&quot;
                        </p>

                        <div className="pt-8 border-t border-white/5">
                            <h4 className="font-black uppercase tracking-widest text-xs text-white">{review.name}</h4>
                            <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">Verified Guest</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}

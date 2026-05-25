'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CommunityBannerProps {
  title: string;
  description: string;
  whatsappLink: string;
  buttonText: string;
  bannerImage?: string;
}

export function CommunityBanner({
  title,
  description,
  whatsappLink,
  buttonText,
  bannerImage
}: CommunityBannerProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative rounded-[40px] border border-white/10 bg-zinc-900/50 backdrop-blur-3xl overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                <MessageCircle size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">WhatsApp Community</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                  {title.split(' ').map((word, i) => (
                    <span key={i} className={i === 2 ? "text-brand-orange" : ""}>{word}{' '}</span>
                  ))}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="bg-brand-orange hover:bg-white text-white hover:text-black font-black text-lg py-8 px-12 rounded-2xl group transition-all duration-500"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                    <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="relative h-[400px] lg:h-full min-h-[500px] overflow-hidden bg-zinc-800">
              {bannerImage ? (
                <img
                  src={bannerImage}
                  alt="Community"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                   <MessageCircle size={120} className="text-white/5" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent lg:bg-gradient-to-l lg:from-zinc-900/80" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

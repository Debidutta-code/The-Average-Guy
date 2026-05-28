'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Coffee, Heart, Leaf } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Artisanal Coffee",
      description: "Carefully sourced beans brewed to perfection in a vintage setting."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Library Corner",
      description: "A curated collection of books for those slow, thoughtful afternoons."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Nature & Greenery",
      description: "Plant-filled spaces that bring a breath of fresh air to your visit."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heritage Vibe",
      description: "Preserving the architectural beauty and soul of Old Town Bhubaneswar."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background textured-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                A Quaint Haven in <span className="text-primary italic">Historic Lanes</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Old Town Cafe is born out of a love for the timeless charm of Bhubaneswar{"'"}s heritage. Located in the heart of Old Town, our cafe is a blend of traditional Odisha architecture and modern comfort.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you{"'"}re looking for a quiet spot to read, a cozy space for conversations, or simply want to soak in the vintage atmosphere with a cup of artisanal coffee, we{"'"}ve created the perfect sanctuary for you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border hover:border-white/30 transition-all">
                  <div className="text-primary shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-8 font-bold border-primary text-primary hover:bg-primary hover:text-foreground">
                  Read Full Story
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image/Video Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative w-full h-64 rounded-3xl overflow-hidden vintage-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
                    alt="Cafe Interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-80 rounded-3xl overflow-hidden vintage-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                    alt="Coffee"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden vintage-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop"
                    alt="Reading Corner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-64 rounded-3xl overflow-hidden vintage-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80&w=2070&auto=format&fit=crop"
                    alt="Ambiance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]"
            >
              <p className="font-serif font-bold text-xl leading-tight italic">
                &quot;A breath of fresh air in Old Town&quot;
              </p>
              <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-70">- Local Visitor</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

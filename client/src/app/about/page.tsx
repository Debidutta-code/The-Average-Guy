'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const milestones = [
    { year: "2018", title: "The Inspiration", desc: "A dream to create a sanctuary in the heart of Old Town." },
    { year: "2019", title: "The Restoration", desc: "Painstakingly restoring a heritage structure to its former glory." },
    { year: "2021", title: "The Opening", desc: "Opening our doors to the community for the first time." },
    { year: "Today", title: "The Legacy", desc: "A beloved space for conversations, coffee, and comfort." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 overflow-hidden bg-heritage-beige/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Story</span>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-foreground leading-[0.9]">
                Born from <br /> <span className="text-primary italic">Tradition</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Old Town Cafe isn&apos;t just a place for coffee; it&apos;s a bridge between the historic past of Bhubaneswar and the vibrant present of its people.
              </p>
              <div className="flex gap-4">
                <Link href="/menu">
                  <Button size="lg" className="rounded-full px-8 py-7 font-bold">Explore Our Flavors</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-7 font-bold border-primary text-primary">Get in Touch</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden vintage-shadow">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                  alt="Cafe Heritage"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">What We <span className="text-primary italic">Stand For</span></h2>
            <p className="text-lg text-muted-foreground">Every element of Old Town Cafe is infused with our core philosophy of comfort and community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart className="w-10 h-10" />, title: "Soulful Hospitality", desc: "We treat every guest like family, ensuring a warm and personalized experience." },
              { icon: <MapPin className="w-10 h-10" />, title: "Heritage Focus", desc: "Preserving and celebrating the architectural and cultural spirit of Old Town." },
              { icon: <Sparkles className="w-10 h-10" />, title: "Quality Above All", desc: "From specialty beans to farm-fresh ingredients, we never compromise on taste." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[32px] bg-heritage-beige/20 hover:bg-heritage-beige/40 transition-colors border border-transparent hover:border-white/20"
              >
                <div className="text-primary mb-6">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 md:px-12 bg-heritage-beige/10 textured-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32 space-y-6">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Journey</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">The Making of <br /><span className="text-primary italic">Old Town Cafe</span></h2>
              <p className="text-lg text-muted-foreground">It took years of dedication and passion to transform this vision into the cozy reality you see today.</p>
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop"
                className="rounded-3xl h-80 w-full object-cover mt-8 vintage-shadow"
                alt="Early Days"
              />
            </div>

            <div className="space-y-24 pt-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="text-4xl md:text-6xl font-serif font-bold text-primary/20 group-hover:text-primary transition-colors duration-500 shrink-0">
                    {m.year}
                  </div>
                  <div className="space-y-3 pt-2 md:pt-4">
                    <h4 className="text-2xl font-bold text-foreground">{m.title}</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

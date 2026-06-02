"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Shield, Music, GlassWater } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "The Vault",
    capacity: "10-15 Guests",
    description: "Our most secluded space. Deep leather seating, private sound control, and personal butler service.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    features: ["Private Entrance", "Personal Mixologist", "Custom Playlists"]
  },
  {
    name: "The Sky Deck",
    capacity: "30-50 Guests",
    description: "High-altitude luxury. Breathtaking city views, neon ambient lighting, and dedicated bar access.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop",
    features: ["Rooftop Access", "Live DJ Setup", "Gourmet Buffet Options"]
  }
];

export default function PrivateDiningPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4">Elite Gatherings</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
            Private <span className="text-white/20">Spaces</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group border border-white/5 bg-white/[0.02] overflow-hidden rounded-sm hover:border-brand-gold/30 transition-all duration-500"
            >
              <div className="h-[400px] relative overflow-hidden">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest">
                  {tier.capacity}
                </div>
              </div>

              <div className="p-12 space-y-8">
                <h3 className="text-4xl font-bold uppercase italic tracking-tighter text-white">{tier.name}</h3>
                <p className="text-white/40 leading-relaxed text-lg italic">
                  &quot;{tier.description}&quot;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full py-8 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-black transition-all duration-500 rounded-none">
                  Request Booking
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-24 border-y border-white/5">
           {[
             { icon: Shield, label: "Total Privacy", desc: "Secluded zones for discrete gatherings." },
             { icon: Users, label: "Custom Service", desc: "Dedicated staff for your event." },
             { icon: Music, label: "Sound Control", desc: "Private audio systems and DJs." },
             { icon: GlassWater, label: "Curated Menus", desc: "Bespoke food & drink selections." },
           ].map((item, i) => (
             <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/5 flex items-center justify-center border border-brand-gold/10">
                   <item.icon className="text-brand-gold" size={24} />
                </div>
                <h4 className="text-white uppercase font-bold text-xs tracking-widest">{item.label}</h4>
                <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </section>

        {/* Final Enquiry Form Placeholder */}
        <section className="mt-32 max-w-2xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                Plan Your <span className="text-brand-gold">Takeover</span>
            </h2>
            <p className="text-white/40 italic">Whether it&apos;s a corporate gala or a wild celebration, we provide the canvas. You create the memories.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="px-12 py-6 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-500 rounded-none">
                    Download Party Brochure
                </Button>
                <Button variant="outline" className="px-12 py-6 border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-500 rounded-none bg-transparent">
                    Talk to Event Manager
                </Button>
            </div>
        </section>
      </div>
    </div>
  );
}

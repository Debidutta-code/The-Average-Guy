"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PartyPopper, Cake, Users, Briefcase, Heart, DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const celebrations = [
  { title: "Birthday Parties", icon: Cake, desc: "Make your special day cinematic with custom decor and DJ sets." },
  { title: "Anniversaries", icon: Heart, desc: "Celebrate milestones with rooftop sunset dining and champagne." },
  { title: "Corporate Events", icon: Briefcase, desc: "Impress clients and teams with elite service and presentation." },
  { title: "Private Gatherings", icon: Users, desc: "Secluded VIP zones for intimate group experiences." },
  { title: "Bachelor Parties", icon: PartyPopper, desc: "High-energy nights with premium bottle service." },
  { title: "Farewell Events", icon: DoorOpen, desc: "Send off in style with curated food and drink packages." }
];

export default function CelebrationsSection() {
  return (
    <section className="py-40 bg-brand-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">Host Your Event</h2>
            <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
              CELEBRATE <br /> <span className="text-white/20">WITH US</span>
            </h3>
          </div>
          <p className="text-white/40 text-lg max-w-sm italic mb-4">
            From intimate gatherings to grand takeovers, we provide the canvas for your memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {celebrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-black p-12 group hover:bg-brand-gold/[0.02] transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/5 flex items-center justify-center mb-8 border border-brand-gold/10 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
                <item.icon size={20} />
              </div>
              <h4 className="text-2xl font-bold text-white uppercase italic tracking-tighter mb-4">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-8">{item.desc}</p>

              <ul className="space-y-3 mb-10">
                {["Dedicated Seating", "Food Packages", "Bev Packages", "Coordination"].map((feat) => (
                    <li key={feat} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-brand-gold" />
                        <span>{feat}</span>
                    </li>
                ))}
              </ul>

              <button className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-gold border-b border-brand-gold/20 pb-1 hover:border-brand-gold transition-all">
                Plan Your Event
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <Button className="px-16 py-8 bg-white text-brand-black font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-gold transition-all duration-500 rounded-none shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                Reserve Your Date
            </Button>
        </div>
      </div>
    </section>
  );
}

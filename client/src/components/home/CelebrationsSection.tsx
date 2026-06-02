"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PartyPopper, Cake, Users, Briefcase, Heart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/shared/SplitText";

const celebrations = [
  {
    title: "Birthday Parties",
    icon: Cake,
    desc: "Make your special day cinematic with custom decor and DJ sets.",
    image: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Anniversaries",
    icon: Heart,
    desc: "Celebrate milestones with rooftop sunset dining.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Corporate Events",
    icon: Briefcase,
    desc: "Impress teams with elite service.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Private Takeovers",
    icon: Users,
    desc: "Secluded VIP zones for exclusive group experiences.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Bachelor Parties",
    icon: PartyPopper,
    desc: "High-energy nights with bottle service.",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  }
];

export default function CelebrationsSection() {
  return (
    <section className="py-40 bg-brand-black overflow-hidden relative">
      {/* Subtle Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] select-none pointer-events-none italic uppercase tracking-tighter">
        EVENTS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6">Unforgettable Moments</h2>
            <h3 className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter text-white leading-[0.8]">
                <SplitText text="CELEBRATE" /> <br />
                <span className="text-white/10"><SplitText text="WITH US" delay={0.5} /></span>
            </h3>
          </div>
          <div className="max-w-sm space-y-6">
            <p className="text-white/40 text-lg leading-relaxed italic">
                &quot;From intimate gatherings to grand rooftop takeovers, we provide the cinematic canvas for your memories.&quot;
            </p>
            <div className="h-[1px] w-20 bg-brand-gold" />
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px] md:auto-rows-[450px]">

            {/* 1. Large Card: Birthday */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 md:row-span-1 relative group overflow-hidden rounded-sm border border-white/5"
            >
                <Image src={celebrations[0].image} alt="Birthday" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] opacity-40 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-black/50 backdrop-blur-xl">
                            <Cake className="text-brand-gold" size={20} />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">The Ultimate Bash</span>
                    </div>
                    <h4 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-4 leading-none">{celebrations[0].title}</h4>
                    <p className="text-white/50 text-sm max-w-md italic mb-8">{celebrations[0].desc}</p>
                    <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-black text-brand-gold hover:text-white transition-colors group/btn">
                        <span>Plan Your Celebration</span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </motion.div>

            {/* 2. Small Card: Anniversaries */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-sm bg-white/[0.02] border border-white/5 p-12 flex flex-col justify-center"
            >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <Heart size={200} strokeWidth={1} />
                </div>
                <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4">{celebrations[1].title}</h4>
                <p className="text-white/40 text-sm italic mb-8 leading-relaxed">{celebrations[1].desc}</p>
                <div className="space-y-3 mb-10">
                    {["Champagne Toast", "Rooftop Seating", "Sunset Views"].map(t => (
                        <div key={t} className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-white/30 font-black">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                            <span>{t}</span>
                        </div>
                    ))}
                </div>
                <button className="text-[10px] uppercase tracking-widest font-black text-brand-gold border-b border-brand-gold/20 pb-1 w-fit hover:border-brand-gold transition-all">Explore Experience</button>
            </motion.div>

            {/* 3. Medium Card: Bachelor Parties */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 md:row-span-1 relative group overflow-hidden rounded-sm border border-white/5"
            >
                <Image src={celebrations[4].image} alt="Bachelor" fill className="object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/40 transition-colors" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="flex items-center space-x-3 mb-4">
                        <PartyPopper size={16} className="text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">High Energy</span>
                    </div>
                    <h4 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-2">{celebrations[4].title}</h4>
                    <p className="text-white/40 text-xs italic max-w-xs">{celebrations[4].desc}</p>
                </div>
            </motion.div>

            {/* 4. Medium Card: Corporate */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-6 md:row-span-1 relative group overflow-hidden rounded-sm border border-white/5 flex flex-col md:flex-row bg-white/[0.01]"
            >
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6">
                        <Briefcase size={16} className="text-brand-gold" />
                    </div>
                    <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4 leading-tight">{celebrations[2].title}</h4>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-black mb-6">Elite Professional <br /> Service</p>
                    <button className="text-[10px] uppercase tracking-widest font-black text-white/40 hover:text-brand-gold transition-colors w-fit italic border-b border-white/10">Inquire</button>
                </div>
                <div className="w-full md:w-1/2 relative h-full overflow-hidden">
                    <Image src={celebrations[2].image} alt="Corporate" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60" />
                </div>
            </motion.div>

        </div>

        <div className="mt-32 text-center flex flex-col items-center">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] mb-12 font-bold">Ready to write your chapter?</p>
            <Button className="px-16 py-10 bg-brand-gold text-brand-black font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 rounded-none shadow-[0_0_80px_rgba(212,175,55,0.15)] relative group overflow-hidden">
                <span className="relative z-10">Reserve Your Date</span>
                <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                />
            </Button>
        </div>
      </div>
    </section>
  );
}

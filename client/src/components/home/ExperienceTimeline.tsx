"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    time: "6 PM",
    title: "Golden Hour Rooftop",
    desc: "Enjoy sunset views over Bhubaneswar while sipping handcrafted cocktails.",
    color: "bg-brand-amber"
  },
  {
    time: "8 PM",
    title: "Dining Experience",
    desc: "Premium cuisine and signature dishes begin taking center stage.",
    color: "bg-white"
  },
  {
    time: "10 PM",
    title: "The Energy Builds",
    desc: "Music rises, lights transition and the venue transforms.",
    color: "bg-brand-crimson"
  },
  {
    time: "11 PM+",
    title: "Nightlife Pulse",
    desc: "DJ performances, cocktails and social experiences.",
    color: "bg-brand-gold"
  },
  {
    time: "Late Night",
    title: "Vibrant Hub",
    desc: "Embassy becomes one of the city's most vibrant nightlife destinations.",
    color: "bg-brand-graphite"
  }
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-40 bg-brand-black overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-32 text-center">
            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6">The Journey</h2>
            <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                THE EMBASSY <span className="text-white/20">EXPERIENCE</span>
            </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

            <div className="space-y-32">
                {events.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col md:flex-row items-center justify-center relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Time Bubble */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-white/10 bg-brand-black flex items-center justify-center z-10 hidden md:flex">
                             <div className={`w-2 h-2 rounded-full ${event.color} animate-pulse`} />
                        </div>

                        <div className="w-full md:w-1/2 px-12 text-center md:text-left">
                            <span className="text-brand-gold font-black italic text-4xl mb-4 block">{event.time}</span>
                            <h4 className="text-2xl md:text-4xl font-bold uppercase italic tracking-tighter text-white mb-6">
                                {event.title}
                            </h4>
                            <p className="text-white/40 leading-relaxed text-lg max-w-sm mx-auto md:mx-0 italic">
                                &quot;{event.desc}&quot;
                            </p>
                        </div>
                        <div className="w-full md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

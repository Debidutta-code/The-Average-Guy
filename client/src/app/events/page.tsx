"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Ticket, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const eventCategories = ["All", "DJ Nights", "Live Music", "Ladies Night", "Weekend Specials", "Mixology Sessions", "Private Events"];

const events = [
  {
    title: "Neon Friday Night",
    date: 24,
    month: "MAR",
    time: "08:00 PM onwards",
    type: "DJ Night",
    category: "DJ Nights",
    entry: "Cover Charge Applies",
    description: "Experience the pulse of the city with our signature Friday night beats. Featuring DJ Zest on the decks.",
    image: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Acoustic Sundays",
    date: 26,
    month: "MAR",
    time: "07:00 PM onwards",
    type: "Live Music",
    category: "Live Music",
    entry: "Free Entry",
    description: "Unwind with soulful acoustic performances and curated wine pairings under the stars.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mixology Masterclass",
    date: 29,
    month: "MAR",
    time: "05:00 PM",
    type: "Special Event",
    category: "Mixology Sessions",
    entry: "Prior Registration",
    description: "Learn the secrets behind our signature cocktails from our award-winning mixologists.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
  },
  {
    title: "Glow Ladies Night",
    date: 30,
    month: "MAR",
    time: "08:00 PM onwards",
    type: "Themed Night",
    category: "Ladies Night",
    entry: "Complimentary Drinks for Ladies",
    description: "Shine bright at our weekly ladies night with special drink offers and high-energy music.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
  }
];

function DateBadge({ date, month }: { date: number; month: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count < date) setCount(prev => prev + 1);
        }, 30);
        return () => clearTimeout(timer);
    }, [count, date]);

    return (
        <div className="w-20 h-20 bg-brand-gold flex flex-col items-center justify-center rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <span className="text-brand-black text-3xl font-black italic leading-none">{count}</span>
            <span className="text-brand-black text-[10px] font-black uppercase tracking-widest">{month}</span>
        </div>
    );
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? events : events.filter(e => e.category === activeTab);

  const handleWhatsApp = (title: string) => {
    const msg = `Hi Embassy! I'm interested in booking for the event: ${title}. Please share details.`;
    window.open(`https://wa.me/919090909090?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4">What&apos;s On</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
            Live <span className="text-white/20">Events</span>
          </h1>
        </div>

        <Tabs defaultValue="All" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="bg-transparent border-b border-white/5 w-full justify-start h-auto p-0 rounded-none space-x-6 overflow-x-auto no-scrollbar">
                {eventCategories.map((cat) => (
                    <TabsTrigger
                        key={cat}
                        value={cat}
                        className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-brand-gold data-[state=active]:border-b data-[state=active]:border-brand-gold rounded-none pb-4 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-all shadow-none"
                    >
                        {cat}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/50 via-brand-gold/20 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-32">
            {filtered.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 relative ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center Badge */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                    <DateBadge date={event.date} month={event.month} />
                </div>

                <div className="w-full md:w-1/2">
                    <div className="group relative h-[400px] overflow-hidden rounded-sm border border-white/5">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 md:hidden">
                             <DateBadge date={event.date} month={event.month} />
                        </div>
                    </div>
                </div>

                <div className={`w-full md:w-1/2 space-y-6 ${i % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="space-y-2">
                        <div className={`flex items-center space-x-2 text-brand-gold text-[10px] uppercase tracking-widest ${i % 2 !== 0 ? "justify-end" : ""}`}>
                            <Clock size={12} />
                            <span>{event.time}</span>
                            <span className="opacity-30 mx-2">|</span>
                            <span>{event.type}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-tight">{event.title}</h3>
                        <p className="text-brand-amber text-[10px] uppercase tracking-widest font-black">{event.entry}</p>
                    </div>

                    <p className="text-white/40 leading-relaxed italic max-w-md mx-auto md:mx-0">
                        &quot;{event.description}&quot;
                    </p>

                    <div className={`flex flex-col sm:flex-row items-center gap-4 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                        <button
                            data-cursor="reserve"
                            className="w-full sm:w-auto px-10 py-4 bg-white text-brand-black text-[10px] uppercase tracking-widest font-black transition-all duration-500 rounded-none shadow-[0_0_30px_rgba(255,255,255,0.1)] relative group/btn overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <Ticket size={14} />
                                <span>Get Access</span>
                            </span>
                            <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                        </button>
                        <button
                            onClick={() => handleWhatsApp(event.title)}
                            className="w-full sm:w-auto px-10 py-4 border border-brand-gold/20 text-brand-gold hover:bg-brand-gold/10 text-[10px] uppercase tracking-widest font-black transition-all duration-500 rounded-none flex items-center justify-center space-x-2"
                        >
                            <MessageCircle size={14} />
                            <span>WhatsApp Booking</span>
                        </button>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="mt-40 p-20 border border-brand-gold/10 bg-brand-gold/[0.01] text-center space-y-10 rounded-sm relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">Host Your Own <span className="text-brand-gold">Experience</span></h2>
            <p className="text-white/40 max-w-xl mx-auto italic text-lg leading-relaxed">From high-energy corporate takeovers to intimate private celebrations, make Embassy the cinematic canvas for your night.</p>
            <button className="px-16 py-6 bg-brand-gold text-brand-black hover:bg-white text-[10px] uppercase tracking-widest font-black transition-all duration-500 rounded-none shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                Enquire Now
            </button>
        </section>
      </div>
    </div>
  );
}

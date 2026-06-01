"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Ticket, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const eventCategories = ["All", "DJ Nights", "Live Music", "Ladies Night", "Weekend Specials", "Mixology Sessions", "Private Events"];

const events = [
  {
    title: "Neon Friday Night",
    date: "FRI, 24 MAR",
    time: "08:00 PM onwards",
    type: "DJ Night",
    category: "DJ Nights",
    entry: "Cover Charge Applies",
    description: "Experience the pulse of the city with our signature Friday night beats. Featuring DJ Zest on the decks.",
    image: "https://images.unsplash.com/photo-1514525253344-96d32f81498c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Acoustic Sundays",
    date: "SUN, 26 MAR",
    time: "07:00 PM onwards",
    type: "Live Music",
    category: "Live Music",
    entry: "Free Entry",
    description: "Unwind with soulful acoustic performances and curated wine pairings under the stars.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mixology Masterclass",
    date: "WED, 29 MAR",
    time: "05:00 PM",
    type: "Special Event",
    category: "Mixology Sessions",
    entry: "Prior Registration",
    description: "Learn the secrets behind our signature cocktails from our award-winning mixologists.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop",
  },
  {
    title: "Glow Ladies Night",
    date: "THU, 30 MAR",
    time: "08:00 PM onwards",
    type: "Themed Night",
    category: "Ladies Night",
    entry: "Complimentary Drinks for Ladies",
    description: "Shine bright at our weekly ladies night with special drink offers and high-energy music.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
  }
];

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

        <div className="space-y-12">
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5 overflow-hidden rounded-sm hover:border-brand-gold/30 transition-colors"
            >
              <div className={`relative h-[400px] ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest">
                  {event.type}
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center space-y-8 bg-white/[0.02]">
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-brand-gold text-[10px] uppercase tracking-widest">
                        <Calendar size={12} />
                        <span>{event.date}</span>
                        <span className="opacity-30 mx-2">|</span>
                        <Clock size={12} />
                        <span>{event.time}</span>
                    </div>
                    <h3 className="text-4xl font-bold uppercase italic tracking-tighter text-white">{event.title}</h3>
                    <p className="text-brand-amber text-[10px] uppercase tracking-widest font-black">{event.entry}</p>
                </div>

                <p className="text-white/40 leading-relaxed italic">
                  {event.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                        data-cursor="reserve"
                        className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 hover:bg-brand-gold hover:text-brand-black text-[10px] uppercase tracking-widest font-bold transition-all duration-500 rounded-sm flex items-center justify-center space-x-2"
                    >
                        <Ticket size={14} />
                        <span>Book Entry</span>
                    </button>
                    <button
                        onClick={() => handleWhatsApp(event.title)}
                        className="w-full sm:w-auto px-8 py-3 border border-brand-gold/20 text-brand-gold hover:bg-brand-gold/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-500 rounded-sm flex items-center justify-center space-x-2"
                    >
                        <MessageCircle size={14} />
                        <span>WhatsApp Booking</span>
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Private Events CTA */}
        <section className="mt-32 p-16 border border-brand-gold/20 bg-brand-gold/[0.02] text-center space-y-8 rounded-sm">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">Host Your Own <span className="text-brand-gold">Experience</span></h2>
            <p className="text-white/40 max-w-xl mx-auto italic">From corporate takeovers to private celebrations, make Embassy yours for the night. Our dedicated events team will craft every detail.</p>
            <button className="px-12 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black text-[10px] uppercase tracking-widest font-bold transition-all duration-500">
                Enquire Now
            </button>
        </section>
      </div>
    </div>
  );
}

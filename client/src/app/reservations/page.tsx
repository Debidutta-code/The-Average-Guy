'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Calendar, Clock, Users, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

export default function ReservationsPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Table secured! We'll confirm your vibe shortly.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-brand-dark-blue selection:bg-brand-gold/30">
      <Toaster position="top-center" richColors />
      <Navbar />

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-blue/5 rounded-full blur-[120px] -mr-[25vw] -mt-[10vw]" />
         <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-gold/5 rounded-full blur-[100px] -ml-[20vw] -mb-[10vw]" />
      </div>

      <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* Left Side: Content & Vibe */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Exclusive Rooftop Access</span>
              <h1 className="text-6xl md:text-[5.5rem] font-serif font-light text-white tracking-tighter uppercase leading-[0.85] mb-10">
                SECURE <br />
                <span className="text-brand-blue">YOUR SKY.</span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed font-light italic mb-12 max-w-md">
                Experience Bhubaneswar&apos;s first Greek-themed destination. Whether it&apos;s a sunset spritz or a midnight celebration, your table awaits.
              </p>

              <div className="space-y-10">
                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-500">
                      <Sparkles size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-serif text-xl uppercase mb-1">Pick Your Energy</h4>
                       <p className="text-white/30 text-sm font-light">Select from Sunset Lounge, Main Deck, or Bar VIP areas.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-serif text-xl uppercase mb-1">Instant Registry</h4>
                       <p className="text-white/30 text-sm font-light">Direct integration with our hosting team for guaranteed seating.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-serif text-xl uppercase mb-1">Large Gatherings</h4>
                       <p className="text-white/30 text-sm font-light italic">For parties of 10+, please contact +91 74400 26026 directly.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-[#030D1B] p-8 md:p-16 rounded-sm border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Form Decorative Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 -mr-16 -mt-16 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/5 -ml-16 -mb-16 rounded-full blur-3xl" />

              <div className="relative z-10 mb-12 flex justify-between items-end">
                 <div>
                    <h3 className="text-3xl font-serif text-white uppercase">Table <span className="text-brand-gold">Registry</span></h3>
                    <div className="w-12 h-[1px] bg-brand-gold mt-2" />
                 </div>
                 <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Oopre Kitchen & Bar</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</Label>
                    <Input id="name" required placeholder="EG. ARISTOTLE" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus:border-brand-blue transition-colors px-0 placeholder:text-white/10" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone Number</Label>
                    <Input id="phone" required placeholder="+91 XXX XXX XXXX" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus:border-brand-blue transition-colors px-0 placeholder:text-white/10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="space-y-4">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                       <Calendar size={12} className="text-brand-gold" /> Date
                    </Label>
                    <Input id="date" type="date" required className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus:border-brand-blue transition-colors px-0 invert-calendar" />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                       <Clock size={12} className="text-brand-gold" /> Time
                    </Label>
                    <Input id="time" type="time" required className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus:border-brand-blue transition-colors px-0 invert-calendar" />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                       <Users size={12} className="text-brand-gold" /> Guests
                    </Label>
                    <Input id="guests" type="number" min="1" required placeholder="2" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus:border-brand-blue transition-colors px-0 placeholder:text-white/10" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="notes" className="text-[10px] font-bold uppercase tracking-widest text-white/40">Special Requirements</Label>
                  <Textarea id="notes" placeholder="Birthday celebrations, dietary requests, or preferred zone..." className="bg-transparent border-0 border-b border-white/10 rounded-none text-white min-h-[80px] focus:border-brand-blue transition-colors px-0 resize-none placeholder:text-white/10" />
                </div>

                <Button type="submit" disabled={loading} className="w-full h-16 bg-brand-blue hover:bg-brand-gold text-white hover:text-black font-bold text-sm tracking-[0.3em] uppercase rounded-sm transition-all duration-500 shadow-xl shadow-brand-blue/10">
                  {loading ? "PROCESSING..." : "CONFIRM REGISTRY"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

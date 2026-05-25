'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function ReservationsPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Reservation request received. We'll confirm your table shortly.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-brand-ivory">
      <Toaster position="top-center" richColors />
      <Navbar />

      {/* Editorial Header */}
      <div className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Table Curation</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-none">
            Reserve a <span className="italic">Space</span>
          </h1>
          <p className="text-foreground/40 max-w-xl mx-auto mt-12 text-sm md:text-base font-light italic leading-relaxed">
            Secure your sanctuary for quiet reflection, meaningful conversations, or focused work sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
                The <span className="italic">Process</span>
              </h2>
              <div className="w-12 h-[1px] bg-brand-gold mt-6" />
            </div>

            <div className="space-y-12">
               <div className="flex items-center gap-8">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-brand-gold text-[10px] font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80">Select Occasion</h4>
                    <p className="text-foreground/50 text-xs mt-2 font-light italic">From morning coffee rituals to intimate gatherings.</p>
                  </div>
               </div>
               <div className="flex items-center gap-8">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-brand-gold text-[10px] font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80">Coordinate Time</h4>
                    <p className="text-foreground/50 text-xs mt-2 font-light italic">Choose a moment that aligns with your rhythm.</p>
                  </div>
               </div>
               <div className="flex items-center gap-8">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-brand-gold text-[10px] font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80">Await Confirmation</h4>
                    <p className="text-foreground/50 text-xs mt-2 font-light italic">Our concierge will ensure everything is prepared for you.</p>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-white/50 border border-black/5 rounded-xl italic text-foreground/40 text-sm font-light">
              Note: For private events or groups exceeding 8 patrons, please reach out to our concierge directly.
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-2xl shadow-[0_4px_60px_rgba(0,0,0,0.03)] border border-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
              <span className="text-[12rem] font-serif font-medium text-foreground">M</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Patron Name</Label>
                  <Input id="name" required placeholder="Full Name" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-10 font-light" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Email Address</Label>
                  <Input id="email" type="email" required placeholder="hello@vane.com" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-10 font-light" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Contact Number</Label>
                  <Input id="phone" required placeholder="+91 00000 00000" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-10 font-light" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="guests" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Patrons</Label>
                  <Input id="guests" type="number" min="1" required placeholder="Number of Guests" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-10 font-light" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label htmlFor="date" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Selected Date</Label>
                  <Input id="date" type="date" required className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors h-10 font-light" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="time" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Selected Time</Label>
                  <Input id="time" type="time" required className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors h-10 font-light" />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="notes" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Special Preferences</Label>
                <Textarea id="notes" placeholder="Dietary notes or special occasions..." className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 min-h-[80px] font-light resize-none" />
              </div>
              <div className="pt-4">
                <Button type="submit" disabled={loading} className="w-full h-14 bg-foreground text-background hover:bg-brand-gold hover:text-white transition-all duration-500 rounded-full font-bold uppercase tracking-[0.2em] text-[10px]">
                  {loading ? "Processing..." : "Complete Reservation"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

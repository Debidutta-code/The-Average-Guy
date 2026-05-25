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
      toast.success("Reservation request sent! We will contact you shortly.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black">
      <Toaster position="top-center" richColors />
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
              SECURE <br />
              <span className="text-brand-orange">YOUR SPOT.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-12">
              Book a table for your next coffee date, work session, or group hangout. For events or large parties (10+ people), please call us directly.
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <span className="font-bold">01</span>
                  </div>
                  <p className="text-xl font-bold">Pick your date & time</p>
               </div>
               <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <span className="font-bold">02</span>
                  </div>
                  <p className="text-xl font-bold">Specify number of guests</p>
               </div>
               <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <span className="font-bold">03</span>
                  </div>
                  <p className="text-xl font-bold">Get instant confirmation</p>
               </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="text-8xl font-black text-white">AVG</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/60">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/60">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 text-white h-12" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/60">Phone Number</Label>
                  <Input id="phone" required placeholder="+91 00000 00000" className="bg-white/5 border-white/10 text-white h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-white/60">Number of Guests</Label>
                  <Input id="guests" type="number" min="1" required placeholder="2" className="bg-white/5 border-white/10 text-white h-12" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white/60">Reservation Date</Label>
                  <Input id="date" type="date" required className="bg-white/5 border-white/10 text-white h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-white/60">Preferred Time</Label>
                  <Input id="time" type="time" required className="bg-white/5 border-white/10 text-white h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-white/60">Special Requests (Optional)</Label>
                <Textarea id="notes" placeholder="Any dietary preferences or special occasions..." className="bg-white/5 border-white/10 text-white min-h-[100px]" />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-14 bg-brand-orange hover:bg-white hover:text-black text-white font-bold text-lg rounded-xl transition-all">
                {loading ? "Processing..." : "Complete Reservation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

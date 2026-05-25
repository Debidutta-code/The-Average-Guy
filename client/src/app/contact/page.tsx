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
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you soon.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black">
      <Toaster position="top-center" richColors />
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
            SAY <span className="text-brand-gold">HELLO.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Have a question, feedback, or just want to chat? Reach out to us. We love hearing from our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-4">
               <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Contact Info</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-gold" size={24} />
                    <div>
                      <p className="text-white font-bold">Visit Us</p>
                      <p className="text-white/50 text-sm">4th Floor, Rooftop, Patia / Chandrasekharpur, Bhubaneswar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-gold" size={24} />
                    <div>
                      <p className="text-white font-bold">Call Us</p>
                      <p className="text-white/50 text-sm">+91 74400 26026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-brand-gold" size={24} />
                    <div>
                      <p className="text-white font-bold">Email Us</p>
                      <p className="text-white/50 text-sm">hello@oopre.in</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Follow Us</h3>
               <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-white hover:bg-brand-gold transition-all">
                    <span className="font-bold text-xs uppercase">IG</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-white hover:bg-brand-gold transition-all">
                    <span className="font-bold text-xs uppercase">FB</span>
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/60">Your Name</Label>
                    <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/60">Your Email</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 text-white h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/60">Subject</Label>
                  <Input id="subject" required placeholder="Event Inquiry, Feedback, etc." className="bg-white/5 border-white/10 text-white h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/60">Your Message</Label>
                  <Textarea id="message" required placeholder="Tell us something..." className="bg-white/5 border-white/10 text-white min-h-[150px]" />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-14 bg-brand-gold hover:bg-white hover:text-black text-white font-bold text-lg rounded-xl transition-all">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

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
import { Mail, Phone, MapPin, Camera, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message received. Our curator will contact you shortly.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-brand-ivory">
      <Toaster position="top-center" richColors />
      <Navbar />

      {/* Editorial Header */}
      <div className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Inquiries</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-none">
            Let&apos;s <span className="italic">Connect</span>
          </h1>
          <p className="text-foreground/40 max-w-xl mx-auto mt-12 text-sm md:text-base font-light italic leading-relaxed">
            Whether it&apos;s a creative collaboration, a private event, or a simple hello, we welcome all conversations that celebrate the art of life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
          <div className="lg:col-span-1 space-y-20">
            <div className="space-y-8">
               <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px]">Contact Particulars</h3>
               <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-brand-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">The Destination</p>
                      <p className="text-foreground/50 text-sm font-light leading-relaxed">Plot No. 125, Patharagadia,<br />Bhubaneswar, 751024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-brand-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">Direct Line</p>
                      <p className="text-foreground/50 text-sm font-light leading-relaxed">+91 97066 13566</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-brand-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">Digital Post</p>
                      <p className="text-foreground/50 text-sm font-light leading-relaxed italic">concierge@themonarchmug.com</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px]">Social Curation</h3>
               <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-foreground/40 hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                    <Camera size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-foreground/40 hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                    <MessageCircle size={20} />
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.02)] border border-black/5">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Full Name</Label>
                    <Input id="name" required placeholder="E.g. Julian Vane" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-12 font-light" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Email Address</Label>
                    <Input id="email" type="email" required placeholder="E.g. julian@vane.com" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-12 font-light" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">The Subject</Label>
                  <Input id="subject" required placeholder="Nature of your inquiry" className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 h-12 font-light" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">The Message</Label>
                  <Textarea id="message" required placeholder="Write your thoughts..." className="bg-transparent border-0 border-b border-black/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-gold transition-colors placeholder:text-foreground/10 min-h-[120px] font-light resize-none" />
                </div>
                <div className="pt-4">
                  <Button type="submit" disabled={loading} className="w-full md:w-auto px-16 h-14 bg-foreground text-background hover:bg-brand-gold hover:text-white transition-all duration-500 rounded-full font-bold uppercase tracking-[0.2em] text-[10px]">
                    {loading ? "Transmitting..." : "Send Inquiry"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.018861111111!2d85.7766!3d20.3155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzU1LjgiTiA4NcKwNDYnMzUuOCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </main>
  );
}

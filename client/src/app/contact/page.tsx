"use client";

import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4">Connect With Us</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
            The <span className="text-white/20">Contact</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-brand-gold" />
                        <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Location</h3>
                    </div>
                    <p className="text-xl font-medium leading-relaxed">
                        Chandrasekharpur, <br />
                        Bhubaneswar, Odisha <br />
                        751024
                    </p>
                    <Link href="#" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-white/30 hover:text-brand-gold transition-colors pt-4">
                        <span>Get Directions</span>
                        <ArrowUpRight size={14} />
                    </Link>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-brand-gold" />
                        <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Contact</h3>
                    </div>
                    <p className="text-xl font-medium">
                        +91 9090909090 <br />
                    </p>
                    <div className="flex items-center space-x-2 pt-2">
                        <Mail size={16} className="text-brand-gold" />
                        <span className="text-sm">hello@embassybbsr.com</span>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Opening Hours</h3>
                <div className="grid grid-cols-1 gap-4 max-w-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 text-sm uppercase tracking-widest">Mon - Thu</span>
                        <span className="text-sm font-bold">12:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 text-sm uppercase tracking-widest">Fri - Sun</span>
                        <span className="text-sm font-bold text-brand-gold">12:00 - 01:00</span>
                    </div>
                </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="h-[500px] w-full relative rounded-sm overflow-hidden border border-white/5 grayscale contrast-125">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.785444853037!2d85.8166!3d20.3233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090909090909%3A0x9090909090909090!2sChandrasekharpur%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            <div className="glass-card p-8 flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-white/50">Need instant assistance?</p>
                <button className="px-8 py-3 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-500">
                    Live WhatsApp Chat
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

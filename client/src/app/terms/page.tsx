'use client';

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="bg-brand-ivory min-h-screen">
      <Navbar />

      <div className="pt-48 pb-20 px-6 max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Legal</span>
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight leading-none italic">Terms of Service</h1>
          <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest">Last updated: May 2026</p>
        </div>

        <section className="space-y-12 text-foreground/60 leading-relaxed font-light italic text-lg bg-white p-12 md:p-20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/5">
          <p>
            Welcome to The Monarch Mug. By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">1. Use of Website</h2>
            <p>
              The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">2. Reservations & Events</h2>
            <p>
              Reservations are subject to availability. We reserve the right to cancel or modify reservations in certain circumstances. Event tickets purchased through external links are subject to the terms and conditions of the respective ticket provider.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">3. Conduct</h2>
            <p>
              We strive to maintain a refined community environment. We reserve the right to refuse service or entry to anyone who violates our community standards or engages in disruptive behavior at our venue.
            </p>
          </div>

          <div className="space-y-4 pt-12 border-t border-black/5">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">Contact</h2>
            <p>
              For any questions regarding our terms, please contact us at:
            </p>
            <p className="text-brand-gold font-bold not-italic tracking-widest uppercase text-sm">
              hello@themonarchmug.com
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

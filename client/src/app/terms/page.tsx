'use client';

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Terms of <span className="text-brand-orange">Service</span></h1>
          <p className="text-white/40 italic">Last updated: May 2026</p>
        </div>

        <section className="space-y-6 text-white/70 leading-relaxed text-lg">
          <p>
            Welcome to The Average Guy. By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Use of Website</h2>
            <p>
              The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Reservations & Events</h2>
            <p>
              Reservations are subject to availability. We reserve the right to cancel or modify reservations in certain circumstances. Event tickets purchased through external links are subject to the terms and conditions of the respective ticket provider.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Conduct</h2>
            <p>
              We strive to maintain a positive community environment. We reserve the right to refuse service or entry to anyone who violates our community standards or engages in disruptive behavior at our venue.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5 mt-12">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Contact</h2>
            <p>
              For any questions regarding our terms, please contact us.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

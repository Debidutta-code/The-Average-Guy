'use client';

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-ivory min-h-screen">
      <Navbar />

      <div className="pt-48 pb-20 px-6 max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Legal</span>
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight leading-none italic">Privacy Policy</h1>
          <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest">Last updated: May 2026</p>
        </div>

        <section className="space-y-12 text-foreground/60 leading-relaxed font-light italic text-lg bg-white p-12 md:p-20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/5">
          <p>
            At The Monarch Mug, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">1. Information We Collect</h2>
            <p>
              When you make a reservation, contact us, or sign up for our newsletter, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 not-italic">
              <li>Name and contact details (email, phone number)</li>
              <li>Reservation details (date, time, number of guests)</li>
              <li>Feedback and reviews you provide</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">2. How We Use Your Information</h2>
            <p>
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 not-italic">
              <li>Process and confirm your reservations</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send updates about upcoming events (if opted in)</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="space-y-4 pt-12 border-t border-black/5">
            <h2 className="text-2xl font-serif font-medium text-foreground italic">Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
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

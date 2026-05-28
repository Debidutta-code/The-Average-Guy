'use client';

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Privacy Policy</h1>
          <p className="text-white/40 italic">Last updated: May 2026</p>
        </div>

        <section className="space-y-6 text-white/70 leading-relaxed text-lg">
          <p>
            At OOPRE Kitchen & Bar, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Information We Collect</h2>
            <p>
              When you make a reservation, contact us, or sign up for our newsletter, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email, phone number)</li>
              <li>Reservation details (date, time, number of guests)</li>
              <li>Feedback and reviews you provide</li>
            </ul>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. How We Use Your Information</h2>
            <p>
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and confirm your reservations</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send updates about upcoming events (if opted in)</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5 mt-12">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
            </p>
            <p className="text-brand-gold font-bold">
              +91 74400 26026 <br />
              hello@oopre.in
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

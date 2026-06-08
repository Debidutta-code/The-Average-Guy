"use client";

import React, { useState } from 'react';
import { Camera, Send, Shield, Video, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white rounded-[40px] p-12 text-center shadow-2xl border border-slate-100">
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Consultation Received</h2>
          <p className="text-slate-600 mb-12">Our dermatologists will review your submission and get back to you within 24 hours with a preliminary assessment.</p>
          <Link href="/" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-600 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
               <Video size={16} />
               <span>Virtual Care Available</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 leading-tight">
              Online Skin <span className="text-primary italic">Consultation</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Get professional dermatological advice from the comfort of your home. Upload images and describe your concerns for a quick expert review.
            </p>

            <div className="space-y-6 pt-8">
               <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">100% Private & Secure</p>
                    <p className="text-sm text-slate-500">Your medical data and images are encrypted and viewed only by qualified specialists.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">24-Hour Response</p>
                    <p className="text-sm text-slate-500">We aim to provide professional feedback on all virtual consultations within one business day.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Describe Your Concern</label>
                <textarea required rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Please provide details about your symptoms, duration, and any previous treatments..." />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 block">Upload Photos (Max 3)</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative group aspect-square rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center cursor-pointer">
                      <Camera size={32} className="text-slate-400 mb-2" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Image {i}</span>
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">Clear, well-lit photos help our doctors provide a more accurate assessment.</p>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-primary-600 transition-all shadow-lg shadow-primary/20">
                  <Send size={20} />
                  <span>Submit Consultation Request</span>
                </button>
              </div>

              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                By submitting, you agree to our virtual care terms and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

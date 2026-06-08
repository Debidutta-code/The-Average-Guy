"use client";

import React, { useState } from 'react';
import { Phone, Send, CheckCircle2 } from 'lucide-react';

const CallbackForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl text-center">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
           <CheckCircle2 size={32} />
        </div>
        <h4 className="text-xl font-bold mb-2">Request Received</h4>
        <p className="text-sm text-slate-500">We will call you back shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl">
       <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Phone className="text-primary" size={20} />
          <span>Quick Callback</span>
       </h4>
       <form onSubmit={handleSubmit} className="space-y-4">
          <input required className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your Name" />
          <input required type="tel" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Phone Number" />
          <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-600 transition-all">
             <Send size={16} />
             <span>Request Callback</span>
          </button>
       </form>
    </div>
  );
};

export default CallbackForm;

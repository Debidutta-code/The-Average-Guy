"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black section-padding" id="contact">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6">
              JOIN THE <br />
              <span className="text-qnts-lime italic underline decoration-white/10 underline-offset-8">ELITE.</span>
            </h2>
            <p className="mb-12 max-w-md">
              Ready to transcend your limits? Connect with us and start your
              transformation journey today.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, text: "+91 98765 43210", label: "Call Us" },
                { icon: Mail, text: "power@qntsfitness.com", label: "Email Us" },
                { icon: MapPin, text: "KIIT Square, Bhubaneswar", label: "Visit Us" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-qnts-lime">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/30">
                      {item.label}
                    </div>
                    <div className="text-base font-bold text-white/80">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 md:p-12 backdrop-blur-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-white/30">Full Name</label>
                <input
                  type="text"
                  className="w-full border-b border-white/5 bg-transparent py-3 text-white outline-none focus:border-qnts-lime transition-colors text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-white/30">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border-b border-white/5 bg-transparent py-3 text-white outline-none focus:border-qnts-lime transition-colors text-sm"
                  placeholder="+91"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-white/30">Preferred Program</label>
                <select className="w-full border-b border-white/5 bg-transparent py-3 text-white outline-none focus:border-qnts-lime transition-colors appearance-none cursor-pointer text-sm">
                  <option className="bg-zinc-900">Fat Loss</option>
                  <option className="bg-zinc-900">Muscle Building</option>
                  <option className="bg-zinc-900">CrossFit</option>
                </select>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-qnts-lime py-4 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-white active:scale-95 shadow-xl shadow-qnts-lime/5">
                Send Request <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

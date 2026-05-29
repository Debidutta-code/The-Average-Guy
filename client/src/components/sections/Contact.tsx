"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black py-32" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-5xl font-black text-white md:text-8xl">
              JOIN THE <br />
              <span className="text-qnts-lime italic">ELITE.</span>
            </h2>
            <p className="mb-12 text-lg text-white/50">
              Ready to transcend your limits? Connect with us and start your
              transformation journey today.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, text: "+91 98765 43210", label: "Call Us" },
                { icon: Mail, text: "power@qntsfitness.com", label: "Email Us" },
                { icon: MapPin, text: "KIIT Square, Bhubaneswar", label: "Visit Us" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-qnts-lime">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
                      {item.label}
                    </div>
                    <div className="text-xl font-bold text-white">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-white/5 bg-zinc-900/50 p-10 md:p-16 backdrop-blur-xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                <input
                  type="text"
                  className="w-full border-b border-white/10 bg-transparent py-4 text-white outline-none focus:border-qnts-lime transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border-b border-white/10 bg-transparent py-4 text-white outline-none focus:border-qnts-lime transition-colors"
                  placeholder="+91"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Preferred Program</label>
                <select className="w-full border-b border-white/10 bg-transparent py-4 text-white outline-none focus:border-qnts-lime transition-colors appearance-none cursor-pointer">
                  <option className="bg-black">Fat Loss</option>
                  <option className="bg-black">Muscle Building</option>
                  <option className="bg-black">CrossFit</option>
                </select>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-qnts-lime py-6 text-sm font-black uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95">
                Send Request <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

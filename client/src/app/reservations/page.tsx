"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "Dinner",
    specialRequest: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Reservation Request - Embassy Bhubaneswar*%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Date:* ${formData.date}%0A
*Time:* ${formData.time}%0A
*Guests:* ${formData.guests}%0A
*Occasion:* ${formData.occasion}%0A
*Special Request:* ${formData.specialRequest || "None"}`;

    window.open(`https://wa.me/919090909090?text=${message}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em]">Book Your Experience</h2>
              <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                Reserve <br /> <span className="text-white/20">A Table</span>
              </h1>
            </div>

            <p className="text-white/50 text-lg leading-relaxed max-w-md">
              Secure your spot at Bhubaneswar&apos;s most sought-after destination. For larger parties or corporate bookings, please contact our events team directly.
            </p>

            <div className="space-y-6">
                {[
                    { icon: Calendar, text: "Advanced bookings recommended" },
                    { icon: Users, text: "Groups of 10+ require prior notice" },
                    { icon: Clock, text: "Table held for 15 minutes post booking" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 text-white/30 text-xs uppercase tracking-widest">
                        <item.icon size={16} className="text-brand-gold" />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 space-y-8"
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Phone Number</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Date</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Time</label>
                  <input
                    required
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} className="bg-brand-black">{n} Guests</option>)}
                    <option value="10+" className="bg-brand-black">10+ Guests</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Occasion</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                  >
                    {["Dinner", "Birthday", "Anniversary", "Business", "Date Night", "Other"].map(o => <option key={o} value={o} className="bg-brand-black">{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Special Request (Optional)</label>
                <textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-gold outline-none transition-colors text-sm text-white"
                  placeholder="Tell us anything we should know..."
                />
              </div>

              <Button
                type="submit"
                className="w-full py-8 bg-brand-gold text-brand-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-500 rounded-none flex items-center justify-center space-x-3"
              >
                <Send size={16} />
                <span>Confirm on WhatsApp</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

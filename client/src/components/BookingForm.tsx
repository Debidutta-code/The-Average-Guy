"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle2, User, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const services = [
    "Root Canal Treatment (RCT)",
    "Teeth Whitening",
    "Dental Implants",
    "Braces & Alignment",
    "General Checkup",
    "Scaling & Cleaning",
    "Tooth Extraction"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-green-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8 max-w-sm mx-auto">
          Thank you for choosing Kapoor&apos;s Dental Care Centre. Our team will contact you shortly to confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div id="book" className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
        <p className="text-slate-500 mb-10">Fill in the details below and we&apos;ll get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none transition-all text-slate-800 placeholder:text-slate-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none transition-all text-slate-800 placeholder:text-slate-300"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Preferred Service</label>
              <select
                className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none transition-all text-slate-800"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select a service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none transition-all text-slate-800"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message (Optional)</label>
            <textarea
              rows={3}
              placeholder="Tell us about your dental concern..."
              className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none transition-all text-slate-800 placeholder:text-slate-300 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20",
              status === "loading" ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark text-white hover:-translate-y-1"
            )}
          >
            {status === "loading" ? "Processing..." : "Confirm Appointment"}
            <ChevronRight size={20} />
          </button>

          {status === "error" && (
            <p className="text-center text-red-500 text-sm font-medium">Something went wrong. Please try again or call us directly.</p>
          )}
        </form>
      </div>

      {/* Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl -z-0" />
    </div>
  );
};

export default BookingForm;

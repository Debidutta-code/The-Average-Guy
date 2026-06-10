"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    patientPhone: "",
    date: "",
    time: "",
    reason: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        apiSecret: "SECRET_KEY_FOR_JWT",
        clinicName: "Aura Skin Clinic",
        doctorEmail: "debiduttaacharya.dev@gmail.com",
        ...formData,
      };

      const response = await fetch("http://localhost:5000/api/trigger-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          patientName: "",
          patientPhone: "",
          date: "",
          time: "",
          reason: "",
        });
      } else {
        throw new Error("Failed to book appointment. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Connection error.");
    }
  };

  return (
    <section id="book" className="py-24 px-6 bg-clinical-charcoal text-white relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Secure Your Slot.</h2>
          <p className="text-white/60 uppercase tracking-widest text-xs">
            Professional consultation for clinical excellence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Full Name</label>
              <input
                required
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Phone Number</label>
              <input
                required
                type="tel"
                name="patientPhone"
                value={formData.patientPhone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Preferred Date</label>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Preferred Time</label>
              <input
                required
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Reason for Visit</label>
            <select
              required
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors appearance-none"
            >
              <option value="" className="bg-clinical-charcoal">Select Service</option>
              <option value="Medical Consultation" className="bg-clinical-charcoal">Medical Consultation</option>
              <option value="Laser Treatment" className="bg-clinical-charcoal">Laser Treatment</option>
              <option value="Aesthetic Procedure" className="bg-clinical-charcoal">Aesthetic Procedure</option>
              <option value="Follow-up" className="bg-clinical-charcoal">Follow-up Visit</option>
            </select>
          </div>

          <button
            disabled={status === "loading"}
            type="submit"
            className="w-full bg-white text-clinical-charcoal py-5 text-sm uppercase tracking-[0.3em] font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-3"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Securing slot...
              </>
            ) : (
              "Confirm Booking"
            )}
          </button>

          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/10 border border-red-500/20 p-4 text-red-500 text-xs text-center uppercase tracking-widest"
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-clinical-charcoal/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-12 max-w-md w-full text-center relative"
            >
              <button
                onClick={() => setStatus("idle")}
                className="absolute top-6 right-6 text-clinical-charcoal/20 hover:text-clinical-charcoal transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 bg-clinical-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-8">
                <Check size={32} />
              </div>

              <h3 className="text-3xl font-serif text-clinical-charcoal mb-4">Request Sent.</h3>
              <p className="text-clinical-charcoal/60 leading-relaxed mb-8">
                Your appointment request has been received. Our clinical coordinator
                will contact you shortly to confirm your final slot.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="w-full border border-clinical-charcoal py-4 text-xs uppercase tracking-[0.2em] font-bold text-clinical-charcoal hover:bg-clinical-charcoal hover:text-white transition-all"
              >
                Return to Site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState } from "react";
import { SERVICES, CLINIC_DATA } from "@/data/constants";
import { Check, Calendar, Clock, User, ChevronRight, MessageSquare, Phone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import confetti from "canvas-confetti";

export default function AppointmentSystem() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    whatsapp: true,
  });

  const timeSlots = ["10:30 AM", "11:30 AM", "12:30 PM", "04:30 PM", "05:30 PM", "06:30 PM"];
  const dates = [
    { label: "Today", date: new Date().toISOString().split('T')[0] },
    { label: "Tomorrow", date: new Date(Date.now() + 86400000).toISOString().split('T')[0] },
    { label: "Day After", date: new Date(Date.now() + 172800000).toISOString().split('T')[0] },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2F80ED', '#B3D4FF', '#004AAD']
    });
    setStep(4);
  };

  return (
    <section id="book" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-medical-50 rounded-full blur-3xl -z-10 -mr-32 -mt-32" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Quick Booking</span>
                <h2 className="text-4xl font-display font-bold text-slate-900 mt-2">
                  Ready for Better Skin?
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Book your clinical consultation in less than 60 seconds. Our team will call you back to confirm the slot.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-medical-500 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Instant Booking</div>
                    <div className="text-xs text-slate-500">{CLINIC_DATA.phone}</div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">WhatsApp Support</div>
                    <div className="text-xs text-slate-500">Available 10AM - 8PM</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-medical-950 rounded-3xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-medical-950 bg-slate-700" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-300">Join 10k+ patients</span>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  &quot;The booking process was so seamless. I received a WhatsApp confirmation immediately!&quot;
                </p>
                <p className="text-xs text-medical-400 mt-2">— Priyadarshini R.</p>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-3 bg-white rounded-[32px] shadow-2xl border border-slate-100 p-8 md:p-10 relative">

              {/* Progress Steps */}
              {step < 4 && (
                <div className="flex items-center gap-2 mb-10">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step >= s ? "bg-medical-500 text-white" : "bg-slate-100 text-slate-400"
                      }`}>
                        {step > s ? <Check className="w-4 h-4" /> : s}
                      </div>
                      {s < 3 && <div className={`h-1 flex-1 rounded-full ${step > s ? "bg-medical-500" : "bg-slate-100"}`} />}
                    </div>
                  ))}
                </div>
              )}

              {step === 1 && (
                <FadeIn direction="none" className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">Select a Service</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setFormData({ ...formData, service: s.title });
                          handleNext();
                        }}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.service === s.title
                          ? "border-medical-500 bg-medical-50"
                          : "border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-sm">{s.title}</div>
                        <div className="text-[10px] text-slate-500 uppercase mt-1">Consultation</div>
                      </button>
                    ))}
                  </div>
                </FadeIn>
              )}

              {step === 2 && (
                <FadeIn direction="none" className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-medical-500" /> Choose Date
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {dates.map((d) => (
                        <button
                          key={d.date}
                          onClick={() => setFormData({ ...formData, date: d.date })}
                          className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                            formData.date === d.date
                            ? "border-medical-500 bg-medical-50 text-medical-700"
                            : "border-slate-100 hover:border-slate-200 text-slate-600"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-medical-500" /> Select Time
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setFormData({ ...formData, time: t })}
                          className={`py-3 rounded-xl border-2 font-bold text-xs transition-all ${
                            formData.time === t
                            ? "border-medical-500 bg-medical-50 text-medical-700"
                            : "border-slate-100 hover:border-slate-200 text-slate-600"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button onClick={handleBack} className="flex-1 py-4 text-slate-500 font-bold hover:text-slate-700">Back</button>
                    <button
                      disabled={!formData.date || !formData.time}
                      onClick={handleNext}
                      className="flex-[2] py-4 bg-medical-500 text-white rounded-xl font-bold disabled:opacity-50"
                    >
                      Continue
                    </button>
                  </div>
                </FadeIn>
              )}

              {step === 3 && (
                <FadeIn direction="none" className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-medical-500" /> Patient Details
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-500 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-500 transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-medical-50 rounded-xl">
                      <input
                        type="checkbox"
                        checked={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                        className="w-5 h-5 rounded border-medical-300 text-medical-600 focus:ring-medical-500"
                      />
                      <span className="text-sm text-medical-800 font-medium">Get appointment updates on WhatsApp</span>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={handleBack} className="flex-1 py-4 text-slate-500 font-bold">Back</button>
                      <button type="submit" className="flex-[2] py-4 bg-medical-500 text-white rounded-xl font-bold hover:bg-medical-600 shadow-lg">
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </FadeIn>
              )}

              {step === 4 && (
                <FadeIn direction="none" className="text-center py-8 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 stroke-[3]" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900">Appointment Requested!</h3>
                  <p className="text-slate-600">
                    Thank you <span className="font-bold text-slate-900">{formData.name}</span>. We have received your request for <span className="font-bold text-slate-900">{formData.service}</span> on <span className="font-bold text-slate-900">{formData.date}</span> at <span className="font-bold text-slate-900">{formData.time}</span>.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl text-left border border-slate-100">
                    <p className="text-sm font-medium text-slate-700">What happens next?</p>
                    <ul className="text-xs text-slate-500 mt-3 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-medical-500" /> Our clinic manager will call you to confirm.</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-medical-500" /> You will receive a WhatsApp message shortly.</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-medical-500" /> Please arrive 10 mins before your slot.</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-medical-600 font-bold hover:underline"
                  >
                    Book another appointment <ChevronRight className="w-4 h-4" />
                  </button>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

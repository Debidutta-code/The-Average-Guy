'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Calendar, User, Phone, Mail, MessageSquare, ClipboardList, Clock } from 'lucide-react';

const services = [
  "Acne Treatment",
  "Hair Loss Treatment",
  "Skin Allergy Treatment",
  "Laser Hair Removal",
  "Scar Treatment",
  "Anti-Aging Treatment",
  "General Consultation"
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-medical-100 text-center space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Appointment Received!</h3>
        <p className="text-slate-600 text-lg">
          Your appointment request has been received. Our clinic will contact you shortly to confirm the schedule.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setStatus('idle')}
            className="btn-outline"
          >
            Book Another
          </button>
          <a
            href="https://wa.me/919999999999?text=Hello%20Dr.%20Partha%20Mohapatra,%20I%20just%20booked%20an%20appointment%20online."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            Confirm on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <section id="appointment" className="section-padding bg-medical-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                Book Your <span className="text-medical-500">Consultation</span>
              </h2>
              <p className="text-lg text-slate-600">
                Take the first step towards healthier skin and hair. Fill out the form and our team will get back to you within 2-4 business hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <CheckCircle2 className="text-medical-500" />, text: "Professional Clinical Assessment" },
                { icon: <CheckCircle2 className="text-medical-500" />, text: "Personalized Treatment Plans" },
                { icon: <CheckCircle2 className="text-medical-500" />, text: "Modern Diagnostic Equipment" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-medical-100 shadow-sm">
              <p className="text-sm text-slate-500 mb-2">Need immediate assistance?</p>
              <a href="tel:+919999999999" className="text-2xl font-bold text-medical-600 hover:underline">
                +91 99999 99999
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-medical-500" /> Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-medical-500'} outline-none transition-all`}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Phone size={16} className="text-medical-500" /> Phone Number*
                  </label>
                  <input
                    type="tel"
                    placeholder="10 digit number"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-medical-500'} outline-none transition-all`}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Mail size={16} className="text-medical-500" /> Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <ClipboardList size={16} className="text-medical-500" /> Select Service*
                </label>
                <select
                  className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-medical-500'} outline-none transition-all appearance-none bg-white`}
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Choose a treatment</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Calendar size={16} className="text-medical-500" /> Preferred Date*
                  </label>
                  <input
                    type="date"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.date ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-medical-500'} outline-none transition-all`}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                  {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Clock size={16} className="text-medical-500" /> Preferred Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 outline-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-medical-500" /> Message (Optional)
                </label>
                <textarea
                  placeholder="Tell us about your concern..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-500 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 text-lg disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Confirm Booking Request</span>
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-center text-red-500 text-sm mt-2">
                  Something went wrong. Please try again or contact us via WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;

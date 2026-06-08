import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import JSONLD from '@/components/JSONLD';
import Link from 'next/link';

export const metadata = {
  title: "Contact Us | SkinCare Clinic",
  description: "Get in touch with SkinCare Clinic for any inquiries or to schedule an appointment. We are located in the heart of the Wellness District.",
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "SkinCare Clinic",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Avenue",
      "addressLocality": "Wellness District",
      "addressRegion": "ST",
      "postalCode": "560001",
      "addressCountry": "US"
    },
    "telephone": "+1-234-567-890",
    "openingHours": "Mo-Sa 10:00-20:00"
  };

  return (
    <div className="pb-24">
      <JSONLD data={localBusinessSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Have questions? We&apos;re here to help. Reach out to our team for any medical or aesthetic inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Our Location</h3>
                  <p className="text-slate-600 leading-relaxed">
                    123 Medical Avenue,<br />
                    Wellness District, City 560001
                  </p>
                  <p className="text-sm text-slate-400 mt-2">Ample parking available.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
                  <p className="text-slate-600">Main: +1 (234) 567-890</p>
                  <p className="text-slate-600">Emergency: +1 (234) 999-000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                  <p className="text-slate-600">info@skincareclinic.com</p>
                  <p className="text-slate-600">support@skincareclinic.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Working Hours</h3>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 08:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
               <h3 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Follow Our Journey</h3>
               <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 md:p-12">
               <h3 className="text-2xl font-playfair font-bold mb-8">Send a Message</h3>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Name</label>
                    <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Appointment Inquiry" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={6} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="How can we help you today?" />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-primary-600 transition-all shadow-lg shadow-primary/20">
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </div>
               </form>
            </div>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-24 rounded-[40px] overflow-hidden aspect-[21/9] bg-slate-100 border border-slate-200 relative group">
           <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl uppercase tracking-widest">
              Google Maps Integration
           </div>
           {/* Real map would be an iframe here */}
           <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm hidden md:block">
              <p className="font-bold text-slate-900 mb-2">SkinCare Clinic</p>
              <p className="text-sm text-slate-600">123 Medical Avenue, Wellness District</p>
              <Link href="#" className="text-primary font-bold text-xs mt-4 inline-block hover:underline">Get Directions</Link>
           </div>
        </div>
      </div>
    </div>
  );
}

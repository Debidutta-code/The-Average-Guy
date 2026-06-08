import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock, ShieldCheck, Award, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Trust */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-playfair font-bold text-white">
              SkinCare<span className="text-primary">Clinic</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium dermatology and cosmetic clinic dedicated to providing world-class skin and hair care solutions since 2008.
            </p>
            <div className="flex gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary" title="US-FDA Approved"><ShieldCheck size={24} /></div>
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary" title="Award Winning"><Award size={24} /></div>
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary" title="Patient First"><Heart size={24} /></div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Facebook size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Instagram size={18} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Dr. Elena</Link></li>
              <li><Link href="/treatments" className="hover:text-primary transition-colors">Our Treatments</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Before & After</Link></li>
              <li><Link href="/locations/bhubaneswar" className="hover:text-primary transition-colors">Location: Bhubaneswar</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Patient Resources</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Specialties</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/treatments/acne-treatment" className="hover:text-primary transition-colors">Acne & Scarring</Link></li>
              <li><Link href="/treatments/laser-hair-reduction" className="hover:text-primary transition-colors">Laser Reduction</Link></li>
              <li><Link href="/treatments/anti-aging" className="hover:text-primary transition-colors">Anti-Aging Solutions</Link></li>
              <li><Link href="/assessment" className="hover:text-primary transition-colors italic">Free Skin Assessment</Link></li>
              <li><Link href="/consultation" className="hover:text-primary transition-colors">Online Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Direct Contact</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span>123 Medical Avenue, Wellness District, City 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary" size={18} />
                <a href="tel:+1234567890" className="hover:text-primary font-bold">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start space-x-3 pt-2">
                <Clock className="text-primary mt-1" size={18} />
                <div>
                  <p>Mon - Sat: 10 AM - 8 PM</p>
                  <p className="text-slate-500">Sunday: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 uppercase tracking-widest">© {new Date().getFullYear()} SkinCare Clinic. Medical Excellence in Dermatology.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <Link href="/privacy" className="hover:text-white">Privacy</Link>
             <Link href="/terms" className="hover:text-white">Terms</Link>
             <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { Phone, Mail, MapPin, Star, Facebook, Instagram, Twitter, ChevronRight } from "lucide-react";
import { services } from "@/data/services";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-2xl">MO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none">
                  MO DENTAL
                </span>
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
                  Clinic & Care
                </span>
              </div>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Your trusted partner for advanced, painless, and personalized dental care in Bhubaneswar. We combine modern technology with expert care for your perfect smile.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">5.0 Rating</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">269+ Verified Google Reviews</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {["About Us", "Our Services", "Clinic Gallery", "Patient Reviews", "Book Appointment", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-slate-600 text-sm leading-relaxed">
                  Plot No-2405, Front of Apollo Pharmacy, Golakha, Mancheswar, Bhubaneswar, Odisha 751010
                </span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <a href="tel:+917008520133" className="text-slate-600 hover:text-primary transition-colors font-semibold">
                  +91 70085 20133
                </a>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@modentalclinic.com" className="text-slate-600 hover:text-primary transition-colors">
                  info@modentalclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} MO Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

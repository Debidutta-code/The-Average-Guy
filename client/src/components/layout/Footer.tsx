import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                Smile<span className="text-primary">Planet</span>
              </span>
            </Link>
            <p className="text-foreground/60 leading-relaxed">
              Leading dental care clinic in Bhubaneswar providing painless treatments with modern technology and personalized care.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Clinic Gallery", "Patient Reviews", "Book Appointment"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {["Dental Implants", "Root Canal Treatment", "Braces & Aligners", "Teeth Whitening", "Kids Dentistry"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-foreground/60">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground/60">
                <Phone size={20} className="text-primary shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground/60">
                <Mail size={20} className="text-primary shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-foreground/40">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

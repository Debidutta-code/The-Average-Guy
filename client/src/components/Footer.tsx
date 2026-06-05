import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-display font-bold text-2xl text-primary leading-tight">
                Kapoor&apos;s
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Dental Care Centre
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Providing premium dental care in Bhubaneswar since [Year]. We combine advanced technology with a gentle touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-slate-800 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-slate-500 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-slate-500 hover:text-primary text-sm transition-colors">Our Services</Link></li>
              <li><Link href="#gallery" className="text-slate-500 hover:text-primary text-sm transition-colors">Gallery</Link></li>
              <li><Link href="#faq" className="text-slate-500 hover:text-primary text-sm transition-colors">FAQs</Link></li>
              <li><Link href="#book" className="text-slate-500 hover:text-primary text-sm transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-slate-800 mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm">Root Canal Treatment (RCT)</li>
              <li className="text-slate-500 text-sm">Teeth Whitening</li>
              <li className="text-slate-500 text-sm">Dental Implants</li>
              <li className="text-slate-500 text-sm">Braces & Aligners</li>
              <li className="text-slate-500 text-sm">Pediatric Dentistry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-slate-800 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-500 text-sm leading-relaxed">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>216, Bapuji Nagar, Bhubaneswar, Odisha</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Clock size={18} className="text-primary shrink-0" />
                <span>Mon-Sat: 5:00 PM - Late Night</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@kapoordental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Kapoor&apos;s Dental Care Centre. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-xs">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

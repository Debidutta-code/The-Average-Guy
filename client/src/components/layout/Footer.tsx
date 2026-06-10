import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">MO</span>
              </div>
              <span className="text-xl font-bold text-white">
                DENTAL CLINIC
              </span>
            </div>
            <p className="mb-6 text-slate-400">
              Your Smile Deserves Expert Care. Trusted dental treatments and oral care in Bhubaneswar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#book" className="hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Root Canal Treatment</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Teeth Whitening</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Orthodontics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>Plot No. 2405, Infront of Apollo Pharmacy, Mancheswar, Bhubaneswar</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 7008520133</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@modentalclinic.com</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="text-primary shrink-0" size={20} />
                <span>Available on WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MO Dental Clinic. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

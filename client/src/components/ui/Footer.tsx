import Link from "next/link";
import { CLINIC_DATA } from "@/data/constants";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                {CLINIC_DATA.name}
              </h3>
              <p className="text-slate-400 text-sm mt-1">{CLINIC_DATA.title}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing premium dermatology and hair care services in Bhubaneswar.
              Our focus is on delivering clinical excellence with a patient-first approach.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-medical-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-medical-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-medical-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#services" className="hover:text-medical-400 transition-colors">Our Services</Link></li>
              <li><Link href="#about" className="hover:text-medical-400 transition-colors">About Dr. Partha</Link></li>
              <li><Link href="#gallery" className="hover:text-medical-400 transition-colors">Clinic Gallery</Link></li>
              <li><Link href="#book" className="hover:text-medical-400 transition-colors">Book Appointment</Link></li>
              <li><Link href="#reviews" className="hover:text-medical-400 transition-colors">Patient Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical-500 shrink-0" />
                <span>{CLINIC_DATA.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-medical-500 shrink-0" />
                <span>{CLINIC_DATA.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-medical-500 shrink-0" />
                <span>{CLINIC_DATA.email}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Clinic Hours</h4>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <p className="text-sm text-slate-300 font-medium">{CLINIC_DATA.workingHours}</p>
              <p className="text-[11px] text-slate-500 mt-2 uppercase tracking-wider">Sunday: Closed</p>
            </div>
            <Link
              href="#book"
              className="mt-6 inline-block w-full py-3 bg-medical-500 text-white text-center rounded-lg font-semibold hover:bg-medical-600 transition-colors"
            >
              Request a Callback
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_DATA.clinicName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

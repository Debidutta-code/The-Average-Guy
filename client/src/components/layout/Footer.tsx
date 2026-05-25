import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="group inline-block mb-6">
            <div className="text-2xl font-bold tracking-tighter text-white flex flex-col">
              <span className="text-brand-orange leading-none">THE</span>
              <span className="leading-none">AVERAGE GUY</span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            A modern aesthetic cafe and community hangout space in Bhubaneswar known for its cozy ambiance, social events, and premium cafe experience.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
              <span className="text-xs font-bold">FB</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-orange">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
            <li><Link href="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/reservations" className="hover:text-white transition-colors">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-orange">Contact Info</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-start">
              <MapPin className="mr-3 text-brand-orange flex-shrink-0" size={18} />
              <span>Plot No. 125, 200ft Road, near Sidheswar Temple, Patharagadia, Bhubaneswar, 751024</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-brand-orange flex-shrink-0" size={18} />
              <span>+91 97066 13566</span>
            </li>
            <li className="flex items-center">
              <Clock className="mr-3 text-brand-orange flex-shrink-0" size={18} />
              <span>11:00 AM – 10:00 PM (All Days)</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-orange">Newsletter</h4>
          <p className="text-sm text-white/50 mb-4">Join our community and get updates on new events and offers.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-brand-orange transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-brand-orange text-white text-xs font-bold px-4 rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} The Average Guy. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

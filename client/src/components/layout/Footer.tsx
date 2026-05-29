import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute -bottom-10 -left-10 text-[20vw] font-black text-white/[0.02] leading-none select-none italic tracking-tighter">
        EMBASSY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white italic">EMBASSY.</h2>
            <p className="text-white/40 max-w-xs leading-relaxed">
              Bhubaneswar&apos;s premier social destination. Where culinary art meets the vibrant pulse of nightlife.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Menu", "Gallery", "Events", "About", "Contact", "Reservations"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-8">Visit Us</h3>
            <ul className="space-y-6 text-white/60">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="shrink-0 text-brand-gold" />
                <span>Chandrasekharpur, Bhubaneswar, Odisha 751024</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="shrink-0 text-brand-gold" />
                <span>+91 9090909090</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="shrink-0 text-brand-gold" />
                <span>hello@embassybbsr.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-8">Hours</h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>12 PM - 12 AM</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Fri - Sun</span>
                <span>12 PM - 01 AM</span>
              </li>
            </ul>
            <Link
              href="/reservations"
              className="mt-8 block w-full py-4 bg-white/5 border border-white/10 text-center uppercase text-xs tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-500 rounded-sm"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 Embassy Bhubaneswar. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

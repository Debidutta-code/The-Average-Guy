import Link from "next/link";
import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}

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
            <p className="text-white/40 max-w-xs leading-relaxed text-sm italic">
              Bhubaneswar&apos;s premier social destination. Where culinary art meets the vibrant pulse of nightlife and rooftop elegance.
            </p>
            <div className="flex items-center space-x-4">
                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                    <InstagramIcon size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                    <FacebookIcon size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                    <MessageCircle size={18} />
                </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Menu", "Gallery", "Events", "Experience", "Contact", "Reservations", "Private-Dining"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center group">
                    <span>{item.replace('-', ' ')}</span>
                    <ArrowUpRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8">Presence</h3>
            <ul className="space-y-4">
              {["Zomato", "Swiggy", "District", "BookMyShow"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8">Visit Us</h3>
            <ul className="space-y-4 text-white/40 text-sm mb-8">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="shrink-0 text-brand-gold" />
                <span className="italic">Chandrasekharpur, Bhubaneswar</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="shrink-0 text-brand-gold" />
                <span>+91 9090909090</span>
              </li>
            </ul>
            <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
                <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Opening Hours</p>
                <p className="text-xs text-white/60">12:00 PM - 12:00 AM (Mon-Thu)</p>
                <p className="text-xs text-brand-gold font-bold mt-1">12:00 PM - 01:00 AM (Fri-Sun)</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 Embassy Bhubaneswar. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

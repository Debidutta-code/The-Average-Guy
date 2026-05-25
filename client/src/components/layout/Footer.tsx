import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-ivory text-foreground pt-32 pb-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="group inline-block mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.4em] font-medium text-foreground/40 uppercase leading-none mb-1">The</span>
              <span className="text-2xl font-serif font-semibold tracking-tight text-foreground leading-none">
                Monarch Mug
              </span>
            </div>
          </Link>
          <p className="text-foreground/60 text-sm leading-relaxed mb-8 font-light italic">
            Coffee • Conversations • Community
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/40 hover:text-brand-gold transition-colors duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest">IG</span>
            </a>
            <a href="#" className="text-foreground/40 hover:text-brand-gold transition-colors duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest">FB</span>
            </a>
            <a href="#" className="text-foreground/40 hover:text-brand-gold transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foreground/80">Curation</h4>
          <ul className="space-y-4 text-sm text-foreground/50">
            <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">The Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
            <li><Link href="/reservations" className="hover:text-brand-gold transition-colors">Reservations</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foreground/80">Destination</h4>
          <ul className="space-y-6 text-sm text-foreground/50 font-light">
            <li className="flex items-start">
              <MapPin className="mr-3 text-brand-gold flex-shrink-0" size={16} />
              <span className="leading-relaxed">Plot No. 125, Patharagadia,<br />Bhubaneswar, 751024</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-brand-gold flex-shrink-0" size={16} />
              <span>+91 97066 13566</span>
            </li>
            <li className="flex items-center">
              <Clock className="mr-3 text-brand-gold flex-shrink-0" size={16} />
              <span>11:00 AM – 10:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foreground/80">Newsletter</h4>
          <p className="text-sm text-foreground/50 mb-6 font-light leading-relaxed">Subscribe to receive updates on our seasonal collections and curated events.</p>
          <div className="relative border-b border-black/10 pb-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent py-2 text-sm focus:outline-none placeholder:text-foreground/20 italic"
            />
            <button className="absolute right-0 top-2 text-[10px] uppercase tracking-widest font-bold text-brand-gold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-foreground/30 space-y-4 md:space-y-0 font-medium">
        <p>© {new Date().getFullYear()} The Monarch Mug. Designed for slowing down.</p>
        <div className="flex space-x-8">
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

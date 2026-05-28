import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="group inline-block mb-6">
            <div className="text-2xl font-bold tracking-tighter text-foreground flex flex-col">
              <span className="text-primary leading-none">OLD TOWN</span>
              <span className="leading-none">CAFE</span>
            </div>
          </Link>
          <p className="text-foreground/70 text-sm leading-relaxed mb-6">
            A heritage haven in Old Town Bhubaneswar. Experience the charm of vintage Odisha with artisanal coffee, a quiet library corner, and comfort food.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" aria-label="Follow us on Instagram">
              <span className="text-xs font-bold text-foreground" aria-hidden="true">IG</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" aria-label="Follow us on Facebook">
              <span className="text-xs font-bold text-foreground" aria-hidden="true">FB</span>
            </a>
            <a href="mailto:hello@oldtowncafe.in" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" aria-label="Email us">
              <Mail size={18} className="text-foreground" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-primary uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-foreground/70 font-medium">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
            <li><Link href="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/reservations" className="hover:text-primary transition-colors font-bold text-primary">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-primary uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-sm text-foreground/70 font-medium">
            <li className="flex items-start">
              <MapPin className="mr-3 text-primary flex-shrink-0" size={18} />
              <span>Plot No. 125, 200ft Road, near Sidheswar Temple, Patharagadia, Bhubaneswar, 751024</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-primary flex-shrink-0" size={18} />
              <span>+91 97066 13566</span>
            </li>
            <li className="flex items-center">
              <Clock className="mr-3 text-primary flex-shrink-0" size={18} />
              <span>11:00 AM – 10:00 PM (All Days)</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-primary uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-foreground/70 mb-4 font-medium">Join our community and get updates on new events and offers.</p>
          <div className="relative">
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-primary/5 border border-primary/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
              required
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary text-foreground text-xs font-bold px-4 rounded-md hover:bg-primary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50 font-medium space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Old Town Cafe Bhubaneswar. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

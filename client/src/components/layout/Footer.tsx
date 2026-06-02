import Link from "next/link";
import { Activity, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Activity className="text-primary w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight font-playfair">
                NEURO<span className="text-primary">CARE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Advancing neurological medicine through research, technology, and compassionate human-centered care.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Dr. Arpan Deep</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Specialties</Link></li>
              <li><Link href="#technology" className="hover:text-primary transition-colors">Our Technology</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">Common FAQs</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Conditions</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Migraine & Headache</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Stroke Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Epilepsy & Seizures</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Parkinson&apos;s Care</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Memory Disorders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Luxury Healthcare Hub, Block A, Bhubaneswar, Odisha 751001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91-999-999-9999</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contact@neurocare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NeuroCare Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

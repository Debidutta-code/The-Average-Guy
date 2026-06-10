export default function Footer() {
  return (
    <footer className="bg-white border-t border-clinical-charcoal/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-serif font-bold mb-6 tracking-tight">
            AURA<span className="font-light">SKIN CLINIC</span>
          </h3>
          <p className="text-clinical-charcoal/60 max-w-sm leading-relaxed">
            Leading dermatology and cosmetology clinic providing science-backed treatments
            for healthy, radiant skin.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-clinical-charcoal/60 text-sm">
            <li>123 Medical Plaza, Wellness District</li>
            <li>+1 (555) 0123 4567</li>
            <li>contact@auraskinclinic.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Hours</h4>
          <ul className="space-y-4 text-clinical-charcoal/60 text-sm">
            <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-clinical-charcoal/5 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-clinical-charcoal/40 uppercase tracking-widest">
          © {new Date().getFullYear()} Aura Skin Clinic. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-xs text-clinical-charcoal/40 uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-clinical-charcoal transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-clinical-charcoal transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

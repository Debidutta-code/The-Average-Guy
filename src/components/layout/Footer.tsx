import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-gold" />
            <span className="text-xl font-playfair font-bold">
              Coffee <span className="text-gold">Monk</span>
            </span>
          </div>

          <div className="text-secondary text-sm font-medium">
            Coffee Monk © 2026. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-gold transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

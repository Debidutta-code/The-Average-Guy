import { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6',
        isScrolled
          ? 'bg-black/85 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Coffee className="w-8 h-8 text-gold group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-playfair font-bold tracking-tight">
            Coffee <span className="text-gold">Monk</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300">
            Book Table
          </button>
        </div>

        {/* Mobile Toggle Placeholder */}
        <div className="md:hidden text-white">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

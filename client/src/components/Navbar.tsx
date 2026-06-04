'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className={`text-xl md:text-2xl font-display font-bold leading-tight transition-colors duration-300 ${isScrolled || pathname !== '/' ? 'text-medical-600' : 'text-slate-900'}`}>
            Dr. Partha Mohapatra
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${isScrolled || pathname !== '/' ? 'text-slate-400' : 'text-slate-500'}`}>
            Dermatology Clinic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors uppercase tracking-wider ${
                pathname === link.href ? 'text-medical-500' : 'text-slate-600 hover:text-medical-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className={`btn-primary py-2.5 px-6 text-sm uppercase tracking-widest font-bold shadow-medical-500/20 transition-all duration-300 ${
              isScrolled ? 'scale-100' : 'scale-105'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-900 focus:outline-none p-2 bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-[100] animate-in fade-in slide-in-from-right duration-300">
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-medical-600 leading-tight">
                  Dr. Partha Mohapatra
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Dermatology Clinic
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-900 focus:outline-none p-2 bg-slate-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-3xl font-display font-bold ${
                    pathname === link.href ? 'text-medical-500' : 'text-slate-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/book"
                className="btn-primary w-full text-center py-5 text-lg uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

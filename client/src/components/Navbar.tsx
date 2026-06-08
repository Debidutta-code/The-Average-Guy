"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed w-full z-[100] transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl py-3 shadow-sm border-b border-slate-100"
          : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-10">
              <Link href="/" className="group flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-playfair font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                  S
                </div>
                <span className="text-2xl font-playfair font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                  SkinCare<span className="text-primary group-hover:text-slate-900 transition-colors">Clinic</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="flex items-center bg-slate-100/50 backdrop-blur-sm rounded-full p-1 border border-slate-200/50">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all rounded-full",
                        isActive
                          ? "bg-white text-primary shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="ml-6 flex items-center space-x-4">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-slate-700 hover:text-primary font-bold text-sm transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Phone size={14} />
                  </div>
                  <span className="hidden xl:inline">+1 (234) 567-890</span>
                </a>
                <Link
                  href="/book"
                  className="bg-primary text-white px-7 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 flex items-center group"
                >
                  <Calendar size={16} className="mr-2" />
                  <span>Book Now</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mobile/Tablet Toggle */}
            <div className="lg:hidden flex items-center space-x-4 relative z-10">
              <a href="tel:+1234567890" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                <Phone size={18} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-full transition-all border shadow-sm",
                  isOpen ? "bg-white border-slate-200 text-slate-900 rotate-90" : "bg-white border-slate-200 text-slate-900"
                )}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed inset-x-0 top-0 pt-24 pb-8 bg-white shadow-2xl border-b border-slate-100 z-[90]"
            >
              <div className="px-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "flex justify-between items-center px-6 py-5 rounded-2xl text-lg font-bold transition-all",
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={18} className={cn("transition-transform", isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")} />
                    </Link>
                  );
                })}
                <div className="pt-6 px-2">
                  <Link
                    href="/book"
                    className="flex items-center justify-center w-full bg-primary text-white px-6 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20"
                  >
                    <Calendar size={20} className="mr-3" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
                <div className="flex justify-center items-center space-x-4 pt-8 text-slate-400">
                  <div className="h-px bg-slate-100 flex-grow" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Contact Us</span>
                  <div className="h-px bg-slate-100 flex-grow" />
                </div>
                <div className="text-center pt-4">
                  <p className="text-slate-500 text-sm mb-1 font-medium">Available Mon-Sat: 10AM - 8PM</p>
                  <a href="tel:+1234567890" className="text-slate-900 font-bold text-xl">+1 (234) 567-890</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[80]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
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
        "fixed w-full z-[100] transition-all duration-300",
        scrolled ? "bg-white shadow-[0_2px_20px_rgb(0,0,0,0.06)] py-2 border-b border-slate-50" : "bg-white/80 backdrop-blur-sm py-4"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-playfair font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                  S
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                  SkinCareClinic
                </span>
              </Link>
            </div>

            {/* Center Navigation - Desktop only */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-bold tracking-wide transition-all relative py-1",
                      isActive ? "text-primary" : "text-slate-600 hover:text-primary"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 sm:gap-8">
              <a
                href="tel:+1234567890"
                className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm font-bold"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>

              <Link
                href="/book"
                className="bg-primary text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-primary-600 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Book <span className="hidden sm:inline">Appointment</span></span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-0 top-[73px] bg-white z-[90] p-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={link.name}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "text-3xl font-bold transition-all block py-2",
                            isActive ? "text-primary" : "text-slate-900"
                          )}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="h-px bg-slate-100"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Speak with us</p>
                    <a href="tel:+1234567890" className="flex items-center gap-3 text-2xl font-bold text-slate-900 hover:text-primary transition-colors">
                      <Phone size={24} className="text-primary" />
                      <span>+1 (234) 567-890</span>
                    </a>
                  </div>

                  <Link
                    href="/book"
                    className="flex items-center justify-center w-full bg-primary text-white p-5 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:bg-primary-600 transition-all active:scale-[0.98]"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

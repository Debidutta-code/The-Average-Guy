"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-slate-200 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-display font-bold text-xl md:text-2xl text-primary leading-tight">
            Kapoor&apos;s
          </span>
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Dental Care Centre
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#book"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="#book"
              className="bg-primary text-white text-center py-4 rounded-xl font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
            <div className="flex grid grid-cols-2 gap-4">
              <a
                href="tel:+910000000000"
                className="flex items-center justify-center space-x-2 bg-slate-100 py-3 rounded-xl text-slate-700 font-medium"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/910000000000"
                className="flex items-center justify-center space-x-2 bg-green-50 py-3 rounded-xl text-green-700 font-medium"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

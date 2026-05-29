"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Locations", href: "#locations" },
  { name: "Plans", href: "#plans" },
  { name: "Transformations", href: "#transformations" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[60] w-full transition-all duration-500 ${
        isScrolled ? "bg-black/80 py-4 backdrop-blur-xl" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          QNTS<span className="text-qnts-lime">FITNESS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-qnts-lime"
            >
              {link.name}
            </Link>
          ))}
          <button className="rounded-full bg-qnts-lime px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full flex w-full flex-col items-center gap-8 bg-black/95 py-10 backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold uppercase tracking-widest text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="rounded-full bg-qnts-lime px-10 py-4 text-base font-bold uppercase tracking-widest text-black">
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

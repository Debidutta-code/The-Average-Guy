"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Calendar, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-4"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full w-12 h-12 glass border-white/10 hover:bg-primary transition-all shadow-xl"
            >
              <ChevronUp size={24} />
            </Button>

            <a href="tel:+919999999999" className="block">
              <Button
                size="icon"
                className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
              >
                <Phone size={24} className="text-white" />
              </Button>
            </a>

            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="icon"
                className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all"
              >
                <MessageSquare size={24} className="text-white" />
              </Button>
            </a>

            <a href="#book" className="block">
              <Button
                size="lg"
                className="rounded-full h-14 px-6 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all font-bold gap-2"
              >
                <Calendar size={20} />
                <span className="hidden md:inline">Book Now</span>
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

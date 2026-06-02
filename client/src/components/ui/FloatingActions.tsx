"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
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
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-3"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full w-10 h-10 glass border-white/10 hover:bg-primary transition-all shadow-xl"
            >
              <ChevronUp size={18} />
            </Button>

            <a href="tel:+919999999999" className="block">
              <Button
                size="icon"
                className="rounded-full w-10 h-10 bg-blue-600 hover:bg-blue-700 shadow-lg transition-all"
              >
                <Phone size={18} className="text-white" />
              </Button>
            </a>

            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="icon"
                className="rounded-full w-12 h-12 bg-emerald-600 hover:bg-emerald-700 shadow-[0_0_15px_rgba(5,150,105,0.4)] transition-all"
              >
                <MessageSquare size={22} className="text-white" />
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

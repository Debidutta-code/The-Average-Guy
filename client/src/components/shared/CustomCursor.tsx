"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view">("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("magnetic");

      const isViewable = target.closest(".group");

      if (isInteractive) {
        setIsHovered(true);
        setCursorType("pointer");
      } else if (isViewable) {
        setIsHovered(true);
        setCursorType("view");
      } else {
        setIsHovered(false);
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: isHovered ? 80 : 32,
        height: isHovered ? 80 : 32,
        border: `1px solid ${isHovered ? "rgba(212, 175, 55, 0.5)" : "rgba(212, 175, 55, 0.8)"}`,
        backgroundColor: isHovered ? "rgba(212, 175, 55, 0.1)" : "transparent",
      }}
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
    >
      {cursorType === "view" && (
        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">View</span>
      )}
      {cursorType === "default" && (
        <div className="w-1 h-1 bg-brand-gold rounded-full" />
      )}
    </motion.div>
  );
}

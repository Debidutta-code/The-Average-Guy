"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "chars" | "words";
}

export default function SplitText({ text, className = "", delay = 0, type = "chars" }: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "chars" ? 0.02 : 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const items = type === "chars" ? text.split("") : text.split(" ");

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block overflow-hidden ${className}`}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          className="inline-block"
          style={{ whiteSpace: item === " " ? "pre" : "normal" }}
        >
          {item}
          {type === "words" && i !== items.length - 1 && " "}
        </motion.span>
      ))}
    </motion.span>
  );
}

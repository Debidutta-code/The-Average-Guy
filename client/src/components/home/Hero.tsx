"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000"
          alt="Luxury Background"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium leading-tight">
            Discover <span className="text-amber-500 italic">Exceptional</span> <br />
            Companions
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Experience the pinnacle of luxury companionship. Discreet, elegant, and tailored to your sophisticated lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild variant="premium" size="lg" className="rounded-full px-8 h-12 text-base font-semibold">
              <Link href="/companions">Browse Collection</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-semibold border-amber-500/20 hover:bg-amber-500/10">
              <Link href="/about">Our Philosophy</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Trust Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/80">12 Verified Companions Available Now</span>
      </motion.div>
    </section>
  );
}

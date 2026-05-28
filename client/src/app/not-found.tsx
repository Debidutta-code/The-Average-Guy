'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-9xl font-serif text-primary opacity-20">404</h1>
          <h2 className="text-4xl md:text-5xl font-serif">Lost in the Lanes?</h2>
          <p className="text-foreground/60 max-w-md mx-auto text-lg italic">
            Even in the historic lanes of Old Town, one might wander off. Let us guide you back to comfort.
          </p>
        </div>

        <Link
          href="/"
          className="px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all rounded-none uppercase tracking-widest text-sm"
        >
          Back to the Haven
        </Link>
      </div>

      <Footer />
    </main>
  );
}

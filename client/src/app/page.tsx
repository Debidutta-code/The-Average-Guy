import { Hero } from "@/components/home/Hero";
import { SearchBar } from "@/components/home/SearchBar";
import { Featured } from "@/components/home/Featured";
import { Shield, Clock, Lock, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <SearchBar />
      <Featured />

      {/* Trust Signals Section */}
      <section className="py-24 bg-accent/20 border-y border-border/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold">Fully Verified</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every companion profile is meticulously vetted and verified to ensure authenticity and your safety.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-semibold">100% Discreet</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We prioritize your privacy. All bookings and communications are handled with the utmost confidentiality.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold">24/7 Concierge</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our dedicated support team is available around the clock to assist with your bookings and inquiries.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">Seamless Booking</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A streamlined process from selection to deposit, designed for the convenience of our elite clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-playfair">Where Sophistication <br /> Meets Desire</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Lumina Companions is not just a platform; it is a gateway to unforgettable experiences. We curate a collection of the world&apos;s most charming, intelligent, and beautiful individuals to provide companionship that transcends the ordinary.
          </p>
          <div className="pt-8">
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-amber-500">The Lumina Standard</span>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 border-t border-border/50">
        <div className="container px-4 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl font-bold tracking-tighter text-amber-500 uppercase">Lumina</span>
            <span className="text-xl font-light tracking-widest uppercase">Companions</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Lumina Companions. All rights reserved. Discreet & Premium.</p>
          <div className="flex items-center justify-center gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <a href="/safety" className="hover:text-amber-500">Safety</a>
            <a href="/about" className="hover:text-amber-500">Privacy</a>
            <a href="/about" className="hover:text-amber-500">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

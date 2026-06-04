import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
          alt="Luxury Lifestyle"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="text-6xl md:text-8xl font-playfair">Our Story</h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-amber-500">The Art of Companionship</p>
        </div>
      </section>

      <div className="container px-4 max-w-4xl mx-auto space-y-24">
        {/* Intro */}
        <section className="text-center space-y-8">
          <h2 className="text-4xl font-playfair leading-tight">Founded on the principles of <br /> elegance, discretion, and excellence.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Lumina Companions was established to bridge the gap between high-end clients and the world&apos;s most exceptional individuals. We understood that for the modern elite, time is the most valuable currency, and companionship is an art form that requires careful curation.
          </p>
        </section>

        {/* Philosophy Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair">The Lumina Standard</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t just list profiles; we build relationships. Every companion on our platform has been personally interviewed and vetted to ensure they possess the intellectual depth, social grace, and physical beauty that our clients expect.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800"
              alt="Social Setting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl -rotate-3 md:order-1 order-2">
            <Image
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800"
              alt="Fine Dining"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 md:order-2 order-1">
            <h3 className="text-3xl font-playfair">Global Presence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are in London, Dubai, or New York, Lumina provides access to local and traveling companions who understand the nuances of international luxury travel and high-stakes social environments.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="text-center bg-accent/20 rounded-[3rem] py-20 px-8 space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair">Experience the Extraordinary</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join our community of elite clients and discover a level of companionship that is as refined as it is memorable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="premium" size="lg" className="rounded-full px-12">
              <Link href="/companions">Browse Collection</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-12">
              <Link href="/dashboard">Apply to Join</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import RooftopShowcase from "@/components/home/RooftopShowcase";
import NightlifePulse from "@/components/home/NightlifePulse";
import WhyVisit from "@/components/home/WhyVisit";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import CocktailShowcase from "@/components/home/CocktailShowcase";
import StatsSection from "@/components/home/StatsSection";
import CelebrationsSection from "@/components/home/CelebrationsSection";
import SocialProof from "@/components/home/SocialProof";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* 1. Why Visit Cards */}
      <WhyVisit />

      {/* 2. Rooftop Highlight */}
      <RooftopShowcase />

      {/* 3. The Embassy Journey (Timeline) */}
      <ExperienceTimeline />

      {/* 4. Brand Intro Section */}
      <section className="py-32 bg-brand-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] font-bold">The Philosophy</h2>
                <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-white">
                  Where Taste <br /> Meets <span className="text-white/20">Nightlife</span>
                </h3>
              </div>

              <div className="space-y-8 text-white/50 text-lg leading-relaxed max-w-xl font-light">
                <p>
                  Embassy Bhubaneswar isn&apos;t just a restaurant; it&apos;s a cinematic journey into the world of elevated hospitality. We believe that dining should be an immersive experience that engages all your senses.
                </p>
                <p>
                  From our meticulously crafted menu featuring global cuisines to our neon-soaked lounge atmosphere, every detail at Embassy is designed to transport you to a world of digital luxury.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                  alt="Embassy Ambience"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-64 h-80 hidden md:block border border-white/10 p-2 bg-brand-black/80 backdrop-blur-xl">
                <div className="w-full h-full relative">
                  <Image
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2025&auto=format&fit=crop"
                    alt="Embassy Drink"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats in Numbers */}
      <StatsSection />

      {/* 6. Signature Cocktails */}
      <CocktailShowcase />

      {/* 7. Culinary Showcase */}
      <FeaturedDishes />

      {/* 8. Nightlife Pulse Section */}
      <NightlifePulse />

      {/* 9. Social Proof (Reviews) */}
      <SocialProof />

      {/* 10. Celebrations Section */}
      <CelebrationsSection />

      {/* 11. Experience CTA */}
      <section className="py-40 bg-brand-black relative flex items-center justify-center text-center px-6 border-t border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 grayscale">
            <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover"
            />
        </div>
        <div className="container mx-auto relative z-10 space-y-12">
            <h2 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter leading-tight text-white">
                Ready to <br /> <span className="text-brand-gold">Experience?</span>
            </h2>
            <Link
                href="/reservations"
                className="inline-block px-12 py-6 bg-brand-gold text-brand-black text-sm uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
                Reserve Your Spot
            </Link>
        </div>
      </section>
    </div>
  );
}

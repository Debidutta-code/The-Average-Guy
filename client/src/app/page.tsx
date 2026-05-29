import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Brand Intro Section */}
      <section className="py-32 bg-brand-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em]">The Philosophy</h2>
                <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                  Where Taste <br /> Meets <span className="text-white/20">Nightlife</span>
                </h3>
              </div>

              <div className="space-y-8 text-white/50 text-lg leading-relaxed max-w-xl">
                <p>
                  Embassy Bhubaneswar isn&apos;t just a restaurant; it&apos;s a cinematic journey into the world of elevated hospitality. We believe that dining should be an immersive experience that engages all your senses.
                </p>
                <p>
                  From our meticulously crafted menu featuring global cuisines to our neon-soaked lounge atmosphere, every detail at Embassy is designed to transport you to a world of digital luxury.
                </p>
              </div>

              <div className="flex space-x-12 pt-8">
                <div>
                  <p className="text-3xl font-bold text-white tracking-tighter">4.2★</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Google Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tighter">10K+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Happy Guests</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tighter">50+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Signature Cocktails</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                  alt="Embassy Ambience"
                  fill
                  className="object-cover grayscale"
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

      <FeaturedDishes />

      {/* Experience CTA */}
      <section className="py-40 bg-brand-black relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <Image
                src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover"
            />
        </div>
        <div className="container mx-auto relative z-10 space-y-12">
            <h2 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter leading-tight">
                Ready to <br /> <span className="text-brand-gold">Experience?</span>
            </h2>
            <Link
                href="/reservations"
                className="inline-block px-12 py-6 bg-brand-gold text-brand-black text-sm uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 rounded-full"
            >
                Reserve Your Spot
            </Link>
        </div>
      </section>
    </div>
  );
}

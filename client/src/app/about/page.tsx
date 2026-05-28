import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter uppercase mb-12">
          OUR <span className="text-brand-blue">STORY</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
            <p>
              OOPRE Kitchen & Bar is East India’s first Greek-themed rooftop destination, born from a vision to bring the energetic spirit of the Mediterranean to Bhubaneswar.
            </p>
            <p>
              Perched on the 4th floor, our rooftop sanctuary offers breathtaking views of the city skyline, making it the perfect spot for soulful sunset drinks or vibrant weekend parties.
            </p>
            <p>
              Our &ldquo;Dine, Wine & Shine&rdquo; philosophy is reflected in every aspect of our experience. From our hand-stretched wood-fired pizzas to our signature cocktails, we blend global flavors with local warmth.
            </p>
            <p>
              Whether it&apos;s a corporate meet, an alumni gathering, or a themed DJ night, OOPRE is where Bhubaneswar comes to celebrate life.
            </p>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1493857671277-59742aaade6e?q=80&w=2070&auto=format&fit=crop" alt="Greek Rooftop Vibe" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </main>
  );
}

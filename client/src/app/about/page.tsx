import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-ivory">
      <Navbar />

      {/* Editorial Header */}
      <div className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Heritage</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-[0.9]">
            The Art of <br />
            <span className="italic">Slow Living</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 text-lg text-foreground/60 leading-relaxed font-light italic">
            <p>
              The Monarch Mug was conceived as a sanctuary for those who appreciate the finer nuances of life. Situated in Bhubaneswar, our space is an architectural tribute to minimalism, designed to foster deep connections and quiet reflection.
            </p>
            <p>
              Every element of our interior, from the soft white palettes to the natural timber accents, has been curated to create an atmosphere of effortless luxury. We believe that a cafe should be more than a destination; it should be an experience that lingers.
            </p>
            <p className="not-italic font-normal text-foreground/80">
              Our commitment to excellence extends from the provenance of our beans to the precision of our service. We invite you to step into a world where time slows down, and every conversation is elevated.
            </p>
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="The Monarch Mug Ambiance" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <AboutSection />

      {/* Values Section */}
      <div className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">01. Minimalist Design</span>
            <p className="text-foreground/60 font-light leading-relaxed">Our space is an ode to clean lines and bright aesthetics, providing a clutter-free environment for the mind to flourish.</p>
          </div>
          <div className="space-y-6">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">02. Curated Culture</span>
            <p className="text-foreground/60 font-light leading-relaxed">From the music we play to the events we host, every detail is carefully selected to maintain a refined social experience.</p>
          </div>
          <div className="space-y-6">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">03. Exceptional Quality</span>
            <p className="text-foreground/60 font-light leading-relaxed">We source only the highest grade beans and ingredients, ensuring that every serving is a testament to our pursuit of perfection.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

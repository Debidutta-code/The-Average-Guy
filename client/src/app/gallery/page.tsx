import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GalleryPreview } from "@/components/home/GalleryPreview";

export default function GalleryPage() {
  const aestheticImages = [
    { src: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2070&auto=format&fit=crop', title: 'The Main Hall' },
    { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop', title: 'Morning Rays' },
    { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a233e9?q=80&w=2070&auto=format&fit=crop', title: 'Curated Seating' },
    { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop', title: 'Minimalist Workspace' },
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', title: 'Evening Glow' },
    { src: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=2070&auto=format&fit=crop', title: 'Architectural Perspective' },
  ];

  return (
    <main className="min-h-screen bg-brand-ivory">
      <Navbar />

      {/* Editorial Header */}
      <div className="pt-48 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Visuals</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-none">
          A Frame of <br />
          <span className="italic">Serenity</span>
        </h1>
        <p className="text-foreground/40 max-w-xl mx-auto mt-12 text-sm md:text-base font-light italic leading-relaxed">
          Exploring the interplay of light, architecture, and premium coffee culture. Each frame is a story of quiet luxury.
        </p>
      </div>

      <GalleryPreview />

      {/* Masonry-style Grid */}
      <div className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aestheticImages.map((img, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] mb-6">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <h4 className="text-sm font-serif font-medium text-foreground italic group-hover:text-brand-gold transition-colors">{img.title}</h4>
                <span className="text-[9px] uppercase tracking-widest text-foreground/20 font-bold">0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Section */}
      <div className="py-48 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-4xl font-serif font-medium text-foreground leading-relaxed italic opacity-80">
            &quot;We design spaces that don&apos;t just look beautiful, but feel like a sanctuary for the soul.&quot;
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-12" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 mt-6 block">The Monarch Design Philosophy</span>
        </div>
      </div>

      <Footer />
    </main>
  );
}

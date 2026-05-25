import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GalleryPreview } from "@/components/home/GalleryPreview";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
          VISUAL <span className="text-brand-orange">JOURNEY</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto mt-6 text-lg">
          A glimpse into the soul of The Average Guy—where every corner tells a story and every moment is a memory.
        </p>
      </div>
      <GalleryPreview />
      <div className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511081138522-86197a8456a1?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501339819302-ee4b8dd5a1b6?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
          ].map((src, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-3xl group relative">
               <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

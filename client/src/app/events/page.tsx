import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventsSection } from "@/components/home/EventsSection";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-brand-ivory">
      <Navbar />
      <div className="pt-48 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Gatherings</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-none">
          Curated <br />
          <span className="italic">Experiences</span>
        </h1>
        <p className="text-foreground/40 max-w-xl mx-auto mt-12 text-sm md:text-base font-light italic leading-relaxed">
          Join our community for a series of thoughtfully curated events, from workshops to slow living sessions.
        </p>
      </div>
      <EventsSection />
      <div className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-brand-gold" />
          <h3 className="text-xs font-bold text-foreground/40 uppercase tracking-[0.3em]">Past Memories</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: 'Jazz Night', date: 'May 10, 2026' },
            { title: 'Tech Talk', date: 'May 15, 2026' },
            { title: 'Art Workshop', date: 'May 20, 2026' },
            { title: 'Standup Comedy', date: 'May 25, 2026' },
          ].map((event, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-6 overflow-hidden border border-black/5">
                <div className="w-full h-full bg-brand-latte/20 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h4 className="text-foreground font-serif font-medium italic text-lg">{event.title}</h4>
              <p className="text-foreground/30 text-xs mt-1">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventsSection } from "@/components/home/EventsSection";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase">
          COMMUNITY <span className="text-primary">EVENTS</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto mt-6 text-lg">
          Join us for music nights, open mics, creative meetups, and more.
        </p>
      </div>
      <EventsSection />
      <div className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-12 uppercase tracking-tighter">Past Memories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Jazz Night', date: 'May 10, 2026' },
            { title: 'Tech Talk', date: 'May 15, 2026' },
            { title: 'Art Workshop', date: 'May 20, 2026' },
            { title: 'Standup Comedy', date: 'May 25, 2026' },
          ].map((event, i) => (
            <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 group hover:border-primary transition-colors">
              <div className="aspect-square rounded-xl bg-zinc-800 mb-4 overflow-hidden">
                <div className="w-full h-full bg-zinc-800 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-foreground font-bold text-lg">{event.title}</h4>
              <p className="text-white/40 text-sm">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

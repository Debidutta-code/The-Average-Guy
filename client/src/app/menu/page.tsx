import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuShowcase } from "@/components/home/MenuShowcase";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter uppercase">
          GLOBAL <span className="text-brand-blue">FLAVORS</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto mt-6 text-lg font-light">
          From Greek specialties to world cuisines, explore a menu crafted for the sophisticated palate.
        </p>
      </div>
      <MenuShowcase />
      <div className="pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 p-12 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4 uppercase tracking-wider">Greek Specials</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">Moussaka Classic</h4>
                <p className="text-white/40 text-sm">Layers of eggplant, minced meat, and béchamel.</p>
              </div>
              <span className="text-brand-gold font-serif font-bold">₹540</span>
            </li>
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">Souvlaki Platter</h4>
                <p className="text-white/40 text-sm">Grilled skewers served with pita and tzatziki.</p>
              </div>
              <span className="text-brand-gold font-serif font-bold">₹480</span>
            </li>
          </ul>
        </div>
        <div className="bg-zinc-900/50 p-12 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4 uppercase tracking-wider">Wood-Fired Pizzas</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">Margherita</h4>
                <p className="text-white/40 text-sm">Fresh basil, mozzarella, and san marzano tomatoes.</p>
              </div>
              <span className="text-brand-gold font-serif font-bold">₹420</span>
            </li>
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">Mediterranean Special</h4>
                <p className="text-white/40 text-sm">Olives, feta, sundried tomatoes, and bell peppers.</p>
              </div>
              <span className="text-brand-gold font-serif font-bold">₹510</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuShowcase } from "@/components/home/MenuShowcase";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase">
          OUR <span className="text-primary">MENU</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto mt-6 text-lg">
          Explore our curated selection of premium coffees, artisanal snacks, and delightful desserts.
        </p>
      </div>
      <MenuShowcase />
      <div className="pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 p-12 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-white/10 pb-4">Specialty Brews</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-foreground font-bold">Pour Over (V60)</h4>
                <p className="text-white/40 text-sm">Single origin beans, hand-poured.</p>
              </div>
              <span className="text-primary font-bold">₹280</span>
            </li>
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-foreground font-bold">Vietnamese Coffee</h4>
                <p className="text-white/40 text-sm">Strong drip coffee with condensed milk.</p>
              </div>
              <span className="text-primary font-bold">₹240</span>
            </li>
          </ul>
        </div>
        <div className="bg-zinc-900/50 p-12 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-white/10 pb-4">Artisanal Bites</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-foreground font-bold">Classic Croissant</h4>
                <p className="text-white/40 text-sm">Buttery, flaky, and golden.</p>
              </div>
              <span className="text-primary font-bold">₹150</span>
            </li>
            <li className="flex justify-between items-end">
              <div>
                <h4 className="text-foreground font-bold">Shakshuka</h4>
                <p className="text-white/40 text-sm">Poached eggs in spicy tomato sauce.</p>
              </div>
              <span className="text-primary font-bold">₹320</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

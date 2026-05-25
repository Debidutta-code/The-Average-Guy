import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuShowcase } from "@/components/home/MenuShowcase";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-ivory">
      <Navbar />

      {/* Editorial Header */}
      <div className="pt-48 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Catalog</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-foreground tracking-tight leading-none">
          A Curation of <br />
          <span className="italic">Flavors</span>
        </h1>
        <p className="text-foreground/40 max-w-xl mx-auto mt-12 text-sm md:text-base font-light italic leading-relaxed">
          From slow-steeped cold brews to artisanal patisserie, each offering is a testament to our commitment to quality and craftsmanship.
        </p>
      </div>

      <MenuShowcase />

      {/* Additional Menu Sections */}
      <div className="pb-32 px-6 md:px-12 max-w-5xl mx-auto space-y-32">
        {/* Specialty Brews */}
        <div className="bg-white p-12 md:p-20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/5">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground italic">Specialty Brews</h3>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Pour Over (V60)</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Single origin beans, hand-poured with precision.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹280</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Vietnamese Drip</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Strong drip coffee balanced with sweet condensed milk.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹240</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Kyoto Cold Drip</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Slow drip extracted over 12 hours for a clean profile.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹310</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Aeropress Single Origin</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Full-bodied extraction highlighting seasonal notes.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹260</span>
            </li>
          </ul>
        </div>

        {/* Artisanal Bites */}
        <div className="bg-white p-12 md:p-20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/5">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground italic">Artisanal Bites</h3>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Butter Croissant</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Authentic French pastry, flaky and golden.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹150</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Heirloom Shakshuka</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Poached organic eggs in a spiced tomato reduction.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹320</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Truffle Brioche Toast</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">House brioche with truffle honey and sea salt.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹280</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div className="max-w-[70%]">
                <h4 className="text-foreground font-medium tracking-tight">Burrata Garden Salad</h4>
                <p className="text-foreground/40 text-xs mt-2 font-light italic">Fresh burrata, citrus segments, and basil oil.</p>
              </div>
              <span className="text-foreground/80 text-sm font-medium">₹390</span>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}

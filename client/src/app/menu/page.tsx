'use client';

import { motion } from 'framer-motion';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuShowcase } from "@/components/home/MenuShowcase";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-dark-blue">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,91,161,0.3)_0%,transparent_70%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Taste the Mediterranean</span>
          <h1 className="text-6xl md:text-9xl font-serif font-light text-white tracking-tighter uppercase leading-none">
            GLOBAL <br/><span className="text-brand-blue">GASTRONOMY</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mt-10 text-lg font-light leading-relaxed">
            From the sun-drenched coasts of Greece to the vibrant streets of Asia,
            our menu is a curated journey of global flavors, crafted with premium local ingredients.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Showcase (Reuse existing or similar) */}
      <MenuShowcase />

      {/* Detailed Categories */}
      <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">

        {/* Greek & Mediterranean */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
             <div>
               <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tight">The Greek <span className="text-brand-blue">Legacy</span></h2>
               <p className="text-brand-gold font-bold tracking-widest uppercase text-xs mt-2">Authentic Santorini Vibes</p>
             </div>
             <p className="text-white/40 max-w-xs text-sm font-light italic">Signature dishes inspired by traditional Mediterranean recipes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <MenuItem
              title="Moussaka Classic"
              price="₹540"
              desc="Traditional layers of eggplant, slow-cooked minced meat, and rich béchamel, baked to golden perfection."
            />
            <MenuItem
              title="Souvlaki Platter"
              price="₹480"
              desc="Grilled chicken or lamb skewers, served with warm pita, house-made tzatziki, and Greek salad."
            />
            <MenuItem
              title="Spanakopita"
              price="₹380"
              desc="Fresh spinach, leeks, and feta cheese wrapped in layers of crispy, buttery phyllo pastry."
            />
            <MenuItem
              title="Greek Mezze Board"
              price="₹650"
              desc="A celebratory platter of hummus, babaganoush, olives, feta, dolmades, and toasted pita."
            />
          </div>
        </section>

        {/* Global Classics */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8 text-right md:text-left">
             <div className="order-1 md:order-2">
               <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tight">Global <span className="text-brand-gold">Classics</span></h2>
               <p className="text-brand-orange font-bold tracking-widest uppercase text-xs mt-2">World Flavors Under One Rooftop</p>
             </div>
             <p className="text-white/40 max-w-xs text-sm font-light italic order-2 md:order-1">Carefully selected international favorites for the urban explorer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <MenuItem
              title="Wood-Fired Truffle Pizza"
              price="₹580"
              desc="Wild mushrooms, truffle oil, fresh mozzarella, and aromatic thyme on a leopard-crusted base."
            />
            <MenuItem
              title="Pan-Seared Atlantic Salmon"
              price="₹850"
              desc="Served with lemon-dill butter, crushed potatoes, and seasonal Mediterranean greens."
            />
            <MenuItem
              title="Prawns Sagaki"
              price="₹620"
              desc="Juicy prawns simmered in a rich tomato and ouzo sauce, finished with crumbled feta."
            />
            <MenuItem
              title="Classic Tiramisu"
              price="₹350"
              desc="Espresso-soaked savoiardi, mascarpone cream, and a dusting of premium Valrhona cocoa."
            />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

function MenuItem({ title, price, desc }: { title: string, price: string, desc: string }) {
  return (
    <div className="group cursor-default">
      <div className="flex justify-between items-baseline mb-3">
        <h3 className="text-xl md:text-2xl font-serif text-white uppercase group-hover:text-brand-blue transition-colors duration-300">{title}</h3>
        <div className="flex-grow mx-4 border-b border-dotted border-white/20 mb-1" />
        <span className="text-brand-gold font-serif text-xl">{price}</span>
      </div>
      <p className="text-white/40 font-light text-sm md:text-base leading-relaxed group-hover:text-white/60 transition-colors duration-300">
        {desc}
      </p>
    </div>
  );
}

'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const menuItems = {
  greek: [
    { name: 'Moussaka Classic', price: '₹540', desc: 'Layers of eggplant, minced meat, and béchamel sauce.' },
    { name: 'Souvlaki Platter', price: '₹480', desc: 'Grilled skewers served with pita, tzatziki, and Greek salad.' },
    { name: 'Spanakopita', price: '₹380', desc: 'Spinach and feta cheese wrapped in flaky phyllo pastry.' },
  ],
  mains: [
    { name: 'Wood-Fired Pepperoni Pizza', price: '₹520', desc: 'Hand-stretched dough with premium pepperoni and mozzarella.' },
    { name: 'Fettuccine Alfredo', price: '₹460', desc: 'Rich and creamy parmesan sauce with fresh parsley.' },
    { name: 'Rooftop Special Burger', price: '₹490', desc: 'Double wagyu beef patty with truffle mayo.' },
  ],
  cocktails: [
    { name: 'Mykonos Sunset', price: '₹550', desc: 'Premium gin, elderflower, and fresh grapefruit.' },
    { name: 'The Oopre Sour', price: '₹580', desc: 'Bourbon, spiced honey, and aromatic bitters.' },
    { name: 'Santorini Spritz', price: '₹520', desc: 'Prosecco, Aperol, and a splash of Mediterranean soda.' },
  ],
};

export function MenuShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm text-center">Global Flavors</h3>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter uppercase leading-none text-center">
            CRAFTED <span className="text-brand-blue">MENU</span>
          </h2>
        </div>

        <Tabs defaultValue="greek" className="w-full">
          <TabsList className="w-full justify-center bg-transparent gap-8 mb-12 border-b border-white/10 rounded-none h-auto p-0 pb-4">
            {Object.keys(menuItems).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-transparent text-white/40 data-[state=active]:text-brand-blue data-[state=active]:bg-transparent border-none text-xl font-serif font-black uppercase tracking-tighter transition-all px-0"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-xl font-serif font-bold text-white group-hover:text-brand-blue transition-colors uppercase">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-white/20 mx-4 mb-1" />
                      <span className="text-brand-gold font-black font-serif">{item.price}</span>
                    </div>
                    <p className="text-white/40 text-sm italic">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

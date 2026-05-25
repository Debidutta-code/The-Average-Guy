'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Cold Brew Premium', price: '₹220', desc: 'Slow-steeped for 18 hours for maximum flavor.' },
    { name: 'Vanilla Bean Latte', price: '₹240', desc: 'Double espresso with house-made vanilla syrup.' },
    { name: 'Spanish Latte', price: '₹260', desc: 'A sweet and creamy condensed milk masterpiece.' },
  ],
  food: [
    { name: 'Avocado Toast', price: '₹350', desc: 'Sourdough bread, mashed avocado, poached egg.' },
    { name: 'Peri Peri Burger', price: '₹280', desc: 'Spicy grilled chicken with charcoal bun.' },
    { name: 'Truffle Fries', price: '₹190', desc: 'Hand-cut potatoes tossed in truffle oil.' },
  ],
  desserts: [
    { name: 'Lotus Biscoff Cheesecake', price: '₹310', desc: 'Creamy cheesecake topped with biscoff spread.' },
    { name: 'Dark Chocolate Brownie', price: '₹180', desc: 'Warm fudgy brownie served with vanilla gelato.' },
  ],
};

export function MenuShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Taste The Premium</h3>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            CRAFTED <span className="text-white/20">MENU</span>
          </h2>
        </div>

        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="w-full justify-center bg-transparent gap-8 mb-12 border-b border-white/10 rounded-none h-auto p-0 pb-4">
            {Object.keys(menuItems).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-transparent text-white/40 data-[state=active]:text-brand-orange data-[state=active]:bg-transparent border-none text-xl font-black uppercase tracking-tighter transition-all px-0"
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
                      <h4 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-white/20 mx-4 mb-1" />
                      <span className="text-brand-orange font-black">{item.price}</span>
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

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
    <section className="py-24 px-6 md:px-12 bg-background textured-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Taste The Tradition</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight leading-none">
            Signature <span className="text-primary italic">Selection</span>
          </h2>
        </div>

        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="w-full justify-center bg-transparent gap-8 mb-12 border-b border-primary/20 rounded-none h-auto p-0 pb-4">
            {Object.keys(menuItems).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-transparent text-foreground/60 data-[state=active]:text-primary data-[state=active]:bg-transparent border-none text-xl font-serif font-bold capitalize tracking-tight transition-all px-0 cursor-pointer"
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
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-white/20 mx-4 mb-1" />
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm italic">{item.desc}</p>
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

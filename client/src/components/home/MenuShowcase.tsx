'use client';

import React from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Monarch Signature Cold Brew', price: '₹220', desc: 'Slow-steeped for 18 hours in artisanal white porcelain.' },
    { name: 'Velvet Vanilla Latte', price: '₹240', desc: 'Double origin espresso with hand-scraped vanilla bean.' },
    { name: 'Spanish Cream Latte', price: '₹260', desc: 'A sophisticated blend of sweet milk and robust roast.' },
    { name: 'Rose Water Macchiato', price: '₹210', desc: 'Floral notes balanced with smooth textured milk.' },
  ],
  dining: [
    { name: 'Artisanal Avocado Sourdough', price: '₹350', desc: 'Organic avocado, micro-greens, and Himalayan pink salt.' },
    { name: 'Wild Mushroom Brioche', price: '₹320', desc: 'Truffle-infused forest mushrooms on toasted brioche.' },
    { name: 'Mediterranean Burrata', price: '₹420', desc: 'Creamy burrata, heirloom tomatoes, and basil oil.' },
    { name: 'Truffle Parmesan Pommes', price: '₹210', desc: 'Golden fries finished with shaved parmesan and truffle.' },
  ],
  patisserie: [
    { name: 'Ivory Velvet Cheesecake', price: '₹310', desc: 'Mascarpone and white chocolate on a butter crust.' },
    { name: 'Dark Ganache Brownie', price: '₹180', desc: '70% dark chocolate with a hint of sea salt.' },
    { name: 'Almond Croissant', price: '₹190', desc: 'Flaky layers filled with sweet almond frangipane.' },
  ],
};

export function MenuShowcase() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">The Collection</span>
          <h2 className="text-5xl md:text-7xl font-serif font-medium text-foreground tracking-tight leading-none">
            A Taste of <span className="italic">Elegance</span>
          </h2>
        </div>

        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="w-full justify-center bg-transparent gap-12 mb-20 border-none rounded-none h-auto p-0">
            {Object.keys(menuItems).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-transparent text-foreground/30 data-[state=active]:text-foreground data-[state=active]:bg-transparent border-none text-[11px] font-bold uppercase tracking-[0.3em] transition-all px-0 relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all data-[state=active]:after:w-full"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="grid grid-cols-1 gap-y-16"
                >
                  {items.map((item, i) => (
                    <div
                      key={item.name}
                      className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/5 pb-8"
                    >
                      <div className="max-w-xl">
                        <h4 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3 group-hover:text-brand-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-foreground/40 text-sm font-light leading-relaxed italic">{item.desc}</p>
                      </div>
                      <span className="text-foreground/80 font-medium tracking-widest text-sm mt-4 md:mt-0">{item.price}</span>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        <div className="mt-24 text-center">
          <Link href="/menu" className="inline-block px-12 py-5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-foreground hover:bg-foreground hover:text-white transition-all duration-500">
            View Complete Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

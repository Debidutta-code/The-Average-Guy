"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const categories = [
  "All", "Starters", "Main Course", "Chinese", "Tandoor", "Biryani", "Desserts", "Cocktails", "Mocktails", "Coffee"
];

const menuItems = [
  {
    name: "Truffle Mushroom Soup",
    price: "₹450",
    category: "Starters",
    description: "Wild mushrooms, truffle oil, cream, sourdough crostini.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    signature: true,
  },
  {
    name: "Crispy Chili Lotus Stem",
    price: "₹380",
    category: "Chinese",
    description: "Crispy lotus root, honey chili glaze, sesame seeds.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop",
    signature: false,
  },
  {
    name: "Embassy Special Biryani",
    price: "₹650",
    category: "Biryani",
    description: "Slow-cooked aromatic basmati rice, tender lamb, saffron, caramelized onions.",
    image: "https://images.unsplash.com/photo-1563379091339-03b17af4a4f9?q=80&w=2020&auto=format&fit=crop",
    signature: true,
  },
  {
    name: "Paneer Tikka Angara",
    price: "₹420",
    category: "Tandoor",
    description: "Spiced paneer, charcoal smoked, mint chutney.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2017&auto=format&fit=crop",
    signature: false,
  },
  {
    name: "Neon Sunset Cocktail",
    price: "₹750",
    category: "Cocktails",
    description: "Gin, hibiscus syrup, lime, elderflower tonic, gold flakes.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    signature: true,
  },
  {
    name: "Tandoori Chicken Tikka",
    price: "₹480",
    category: "Tandoor",
    description: "Marinated chicken thighs, roasted in traditional clay oven.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2070&auto=format&fit=crop",
    signature: false,
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4"
          >
            Culinary Art
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter"
          >
            The <span className="text-white/20">Menu</span>
          </motion.h1>
        </div>

        {/* Categories Tabs */}
        <Tabs defaultValue="All" className="mb-12" onValueChange={setActiveCategory}>
          <TabsList className="bg-transparent border-b border-white/5 w-full justify-start h-auto p-0 rounded-none space-x-6 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-brand-gold data-[state=active]:border-b data-[state=active]:border-brand-gold rounded-none pb-4 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-all shadow-none"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group bg-white/[0.02] border-white/5 hover:border-brand-gold/30 transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      {item.signature && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest">
                          Signature
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold uppercase italic tracking-tight group-hover:text-brand-gold transition-colors text-white">
                        {item.name}
                      </h3>
                      <span className="text-brand-gold font-bold">{item.price}</span>
                    </div>

                    <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full border-white/10 text-[10px] uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all duration-500 rounded-none bg-transparent text-white">
                          Quick View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-brand-black border-white/10 text-white max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-black italic uppercase tracking-tighter text-brand-gold">
                            {item.name}
                          </DialogTitle>
                          <DialogDescription className="text-white/60 text-lg">
                            {item.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                           <div className="aspect-square relative rounded-sm overflow-hidden">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                           </div>
                           <div className="space-y-6">
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-1">Price</p>
                                <p className="text-2xl font-bold">{item.price}</p>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-1">Category</p>
                                <p className="text-white/60">{item.category}</p>
                              </div>
                              <Button className="w-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-500 rounded-none">
                                Reserve Table to Order
                              </Button>
                           </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

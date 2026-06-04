"use client";

import { useState } from "react";
import { companions } from "@/data/companions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, MapPin, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanionsPage() {
  const [filter, setFilter] = useState("All");

  const filteredCompanions = filter === "All"
    ? companions
    : companions.filter(c => c.cities.some(city => city.toLowerCase().includes(filter.toLowerCase())) || c.bodyType === filter);

  const categories = ["All", "London", "Paris", "New York", "Dubai", "Slim", "Curvy", "Athletic"];

  return (
    <div className="container px-4 py-12 pb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-playfair mb-2">Our Collection</h1>
          <p className="text-muted-foreground">Discover the perfect companion for your next occasion.</p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Filter size={18} className="text-muted-foreground mr-2 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all shrink-0 ${
                filter === cat
                  ? "bg-amber-500 text-white"
                  : "bg-accent/50 text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCompanions.map((companion) => (
            <motion.div
              key={companion.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/companions/${companion.id}`}>
                <Card className="overflow-hidden border-none bg-accent/30 group cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={companion.mainImage}
                      alt={companion.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      {companion.verified && (
                        <Badge className="bg-blue-500/20 text-blue-400 backdrop-blur-md border-blue-500/30 flex items-center gap-1">
                          <ShieldCheck size={12} /> Verified
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-semibold">{companion.name}</h3>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star size={14} fill="currentColor" />
                          <span className="text-sm font-medium">{companion.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-white/70 text-xs">
                        <MapPin size={12} />
                        <span>{companion.cities.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 italic">
                      &quot;{companion.tagline}&quot;
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Starting Rate</span>
                      <span className="font-bold text-amber-500">{formatCurrency(companion.rates.hourly)}/hr</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredCompanions.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-foreground">No companions found matching your criteria.</p>
          <button onClick={() => setFilter("All")} className="text-amber-500 mt-4 font-semibold hover:underline">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

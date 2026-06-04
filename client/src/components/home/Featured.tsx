"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, MapPin } from "lucide-react";
import { companions } from "@/data/companions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export function Featured() {
  const featured = companions.slice(0, 4);

  return (
    <section className="py-24 container px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4">
          <Badge variant="premium" className="px-4 py-1 uppercase tracking-widest">Editor&apos;s Choice</Badge>
          <h2 className="text-4xl md:text-5xl font-playfair">Featured Companions</h2>
          <p className="text-muted-foreground max-w-lg">
            Our most exclusive and highly-rated companions, handpicked for their exceptional charm and sophistication.
          </p>
        </div>
        <Link href="/companions" className="text-amber-500 font-semibold hover:underline decoration-2 underline-offset-8 transition-all">
          View All Companions →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((companion, index) => (
          <motion.div
            key={companion.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href={`/companions/${companion.id}`}>
              <Card className="overflow-hidden border-none bg-accent/30 group cursor-pointer">
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
                      <span>{companion.cities[0]}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <span className="font-bold text-amber-500">{formatCurrency(companion.rates.hourly)}/hr</span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

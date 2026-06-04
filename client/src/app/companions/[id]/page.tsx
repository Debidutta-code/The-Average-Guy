"use client";

import { use, useState } from "react";
import { companions } from "@/data/companions";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import {
  Star, ShieldCheck, Globe, User,
  Ruler, Languages, CheckCircle2,
  ArrowLeft, Share2, Heart, Clock
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookingFlow } from "@/components/booking/BookingFlow";

export default function CompanionProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const companion = companions.find(c => c.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!companion) {
    notFound();
  }

  return (
    <div className="pb-32">
      {/* Top Navigation / Breadcrumb */}
      <div className="container px-4 py-6 flex items-center justify-between">
        <Link href="/companions" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-amber-500 transition-colors">
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        <div className="flex gap-4">
          <button className="p-2 rounded-full hover:bg-accent transition-colors"><Share2 size={18} /></button>
          <button className="p-2 rounded-full hover:bg-accent transition-colors"><Heart size={18} /></button>
        </div>
      </div>

      <div className="container px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Gallery Section */}
        <div className="lg:col-span-7 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-accent"
          >
            <Image
              src={companion.images[activeImage] || companion.mainImage}
              alt={companion.name}
              fill
              className="object-cover"
              priority
            />
            {companion.verified && (
              <div className="absolute top-6 left-6">
                <Badge className="bg-blue-500 text-white px-4 py-1.5 flex items-center gap-1 text-sm shadow-xl">
                  <ShieldCheck size={16} /> Verified Profile
                </Badge>
              </div>
            )}
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {companion.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === idx ? "border-amber-500" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`${companion.name} ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-playfair">{companion.name}</h1>
              <div className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                <Star size={18} fill="currentColor" />
                <span className="font-bold">{companion.rating}</span>
                <span className="text-xs text-muted-foreground ml-1">({companion.reviewCount} reviews)</span>
              </div>
            </div>
            <p className="text-xl text-amber-500 italic font-light tracking-wide">
              &quot;{companion.tagline}&quot;
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 py-8 border-y border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground">
                <User size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Age</p>
                <p className="font-medium">{companion.age} Years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground">
                <Ruler size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Height</p>
                <p className="font-medium">{companion.height}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground">
                <Languages size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Languages</p>
                <p className="font-medium">{companion.languages.join(", ")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground">
                <Globe size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Nationality</p>
                <p className="font-medium">{companion.nationality}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About {companion.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {companion.description}
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              {companion.personality}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services Offered</h3>
            <div className="flex flex-wrap gap-2">
              {companion.services.map((service) => (
                <Badge key={service} variant="secondary" className="px-3 py-1 bg-accent/50 text-foreground flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={14} className="text-amber-500" /> {service}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-accent/30 p-6 rounded-2xl border border-border/50">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Rates</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock size={14} /> Currency: USD
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/50 p-3 rounded-xl border border-border/50">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">1 Hour</p>
                <p className="text-xl font-bold text-amber-500">{formatCurrency(companion.rates.hourly)}</p>
              </div>
              <div className="bg-background/50 p-3 rounded-xl border border-border/50">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">2 Hours</p>
                <p className="text-xl font-bold text-amber-500">{formatCurrency(companion.rates.twoHours)}</p>
              </div>
              <div className="bg-background/50 p-3 rounded-xl border border-border/50">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Overnight</p>
                <p className="text-xl font-bold text-amber-500">{formatCurrency(companion.rates.overnight)}</p>
              </div>
              <div className="bg-background/50 p-3 rounded-xl border border-border/50">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Weekend</p>
                <p className="text-xl font-bold text-amber-500">{formatCurrency(companion.rates.weekend)}</p>
              </div>
            </div>
          </div>

          <BookingFlow companion={companion} />

          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-medium">
            Secure & Discreet Booking Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}

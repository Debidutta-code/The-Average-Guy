"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

const locations = [
  {
    name: "KIIT Square",
    address: "Bhubaneswar, Odisha",
    phone: "+91 98765 43210",
    hours: "5:30 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80",
    facilities: ["CrossFit Arena", "Yoga Studio", "Sauna"],
  },
  {
    name: "Raghunathpur",
    address: "Bhubaneswar, Odisha",
    phone: "+91 98765 43211",
    hours: "5:30 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1574673139724-c9831ca193d0?auto=format&fit=crop&q=80",
    facilities: ["Rooftop Training", "Zumba Zone", "Personal Training"],
  },
];

export default function Locations() {
  return (
    <section className="bg-black section-padding" id="locations">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4">
            OUR <span className="text-qnts-lime italic">DOMAINS</span>
          </h2>
          <p className="mx-auto max-w-lg">
            Choose your battlefield. Each QNTS location is equipped with
            premium-grade machinery and elite recovery zones.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/50 border border-white/5"
            >
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="relative p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="italic">{loc.name}</h3>
                  <div className="flex items-center gap-2 text-qnts-lime">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-qnts-lime" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Live Pulse</span>
                  </div>
                </div>

                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 text-white/50">
                    <MapPin className="text-qnts-lime" size={16} />
                    <span className="text-xs">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/50">
                    <Phone className="text-qnts-lime" size={16} />
                    <span className="text-xs">{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/50">
                    <Clock className="text-qnts-lime" size={16} />
                    <span className="text-xs">{loc.hours}</span>
                  </div>
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  {loc.facilities.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white/40"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-qnts-lime">
                  Explore Facility <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";

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
    <section className="bg-black py-32" id="locations">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-5xl font-black text-white md:text-7xl">
            OUR <span className="text-qnts-lime italic">DOMAINS</span>
          </h2>
          <p className="mx-auto max-w-xl text-white/50">
            Choose your battlefield. Each QNTS location is equipped with
            premium-grade machinery and elite recovery zones.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              <div className="relative p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-3xl font-black text-white">{loc.name}</h3>
                  <div className="flex items-center gap-2 text-qnts-lime">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-qnts-lime" />
                    <span className="text-[10px] font-bold uppercase">Live Pulse</span>
                  </div>
                </div>

                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 text-white/60">
                    <MapPin className="text-qnts-lime" size={18} />
                    <span className="text-sm">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Phone className="text-qnts-lime" size={18} />
                    <span className="text-sm">{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Clock className="text-qnts-lime" size={18} />
                    <span className="text-sm">{loc.hours}</span>
                  </div>
                </div>

                <div className="mb-10 flex flex-wrap gap-2">
                  {loc.facilities.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-black uppercase text-black transition-colors hover:bg-qnts-lime">
                  Explore Facility <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

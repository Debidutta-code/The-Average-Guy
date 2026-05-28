"use client";

import { MapPin, Phone, Clock } from "lucide-react";

const LOCATIONS = [
  {
    name: "Patia / Infocity Outlet",
    address: "Infocity, Patia, Bhubaneswar, Odisha",
    phone: "+91 78943 05018",
    time: "3:30 PM – 10:30 PM"
  },
  {
    name: "Sahid Nagar Outlet",
    address: "Sahid Nagar, Bhubaneswar, Odisha",
    phone: "+91 63727 17038",
    time: "1 PM – 11 PM"
  }
];

export default function Location() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-amber-500 mb-4">Visit Us</p>
            <h2 className="font-serif text-5xl md:text-7xl mb-12">Locate the Vibe.</h2>

            <div className="space-y-12">
              {LOCATIONS.map((loc, i) => (
                <div key={i} className="group cursor-pointer">
                  <h3 className="text-2xl mb-4 group-hover:text-amber-500 transition-colors">{loc.name}</h3>
                  <div className="space-y-2 text-white/40 text-sm">
                    <p className="flex items-center gap-3"><MapPin size={14} /> {loc.address}</p>
                    <p className="flex items-center gap-3"><Phone size={14} /> {loc.phone}</p>
                    <p className="flex items-center gap-3"><Clock size={14} /> {loc.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[500px] w-full bg-white/5 rounded-3xl overflow-hidden grayscale contrast-125 border border-white/10 relative">
             {/* Mock Cyberpunk Map UI */}
             <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/toner-v2/static/-122.4194,37.7749,12/1000x1000.png?key=get_your_own_key')] bg-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-amber-500 rounded-full animate-ping" />
                <div className="w-4 h-4 bg-amber-500 rounded-full absolute top-0" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Heart, Zap } from 'lucide-react';

export default function FacilitiesPage() {
  const rooms = [
    { title: "Consultation Suite", desc: "Private and comfortable spaces for thorough skin analysis.", img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop" },
    { title: "Laser Procedure Room", desc: "Equipped with US-FDA approved laser technologies.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" },
    { title: "Medi-Facial Lounge", desc: "A serene environment for relaxing and effective skin treatments.", img: "https://images.unsplash.com/photo-1519494140261-d586d7a60b1e?w=800&h=600&fit=crop" },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">World-Class Facilities</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Experience clinical excellence in a luxury environment designed for your comfort and safety.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <div key={i} className="group bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100">
               <div className="relative h-64 overflow-hidden">
                  <Image src={room.img} alt={room.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{room.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{room.desc}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-slate-950 rounded-[40px] p-12 md:p-20 text-white">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-3xl md:text-5xl font-playfair font-bold italic">Our Standards</h2>
                 <p className="text-slate-400 text-lg leading-relaxed">We maintain the highest levels of hygiene and clinical protocols to ensure your safety at every step of your journey.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                       <Shield className="text-primary" />
                       <span className="font-medium">Sterilized Equipment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <Heart className="text-primary" />
                       <span className="font-medium">Patient Comfort</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <Sparkles className="text-primary" />
                       <span className="font-medium">Modern Tech</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <Zap className="text-primary" />
                       <span className="font-medium">Efficient Care</span>
                    </div>
                 </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                 <Image src="https://images.unsplash.com/photo-1631217816660-ad35355996b0?w=800&h=600&fit=crop" alt="Clinical Standards" fill className="object-cover" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

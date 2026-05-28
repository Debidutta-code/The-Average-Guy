'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Save, Globe, Smartphone, ShieldCheck, MapPin, Clock } from 'lucide-react';

export default function AdminSettingsPage() {
  return (
    <div className="space-y-12">
      <div>
        <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Global Configuration</span>
        <h1 className="text-5xl font-serif text-white uppercase tracking-tight">System <span className="text-brand-blue">Settings</span></h1>
        <p className="text-white/40 mt-2 font-light italic">Modify business details, rooftop hours, and social media presence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         {/* Left Column: Business & Location */}
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="lg:col-span-7 space-y-10"
         >
            <Card className="bg-[#030D1B] border-white/5 p-10 text-white space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Globe size={120} />
               </div>

               <div>
                  <h3 className="text-2xl font-serif uppercase flex items-center gap-4">
                     <ShieldCheck size={20} className="text-brand-blue" />
                     Brand <span className="text-brand-gold">Identity</span>
                  </h3>
                  <div className="h-[1px] w-20 bg-white/10 mt-4" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Official Entity Name</Label>
                     <Input defaultValue="OOPRE Kitchen & Bar" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Brand Tagline</Label>
                     <Input defaultValue="Dine, Wine & Shine" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Rooftop Physical Address</Label>
                     <Textarea defaultValue="4th Floor, Rooftop, Patia / Chandrasekharpur, Bhubaneswar, Odisha" className="bg-white/5 border-white/10 rounded-sm min-h-[100px] focus:border-brand-blue/50" />
                  </div>
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Primary Contact Phone</Label>
                     <Input defaultValue="+91 74400 26026" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Operating Hours</Label>
                     <Input defaultValue="12:00 PM – 11:30 PM" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
               </div>

               <Button className="bg-brand-blue hover:bg-brand-gold text-white w-full font-bold h-14 uppercase tracking-[0.2em] transition-all relative z-10">
                  <Save size={18} className="mr-2" /> Commit Brand Changes
               </Button>
            </Card>

            <Card className="bg-[#030D1B] border-white/5 p-10 text-white space-y-10">
               <div>
                  <h3 className="text-2xl font-serif uppercase flex items-center gap-4">
                     <MapPin size={20} className="text-brand-orange" />
                     Digital <span className="text-brand-blue">Footprint</span>
                  </h3>
                  <div className="h-[1px] w-20 bg-white/10 mt-4" />
               </div>

               <div className="space-y-8">
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Embedded Map Coordinate URL</Label>
                     <Input placeholder="Google Maps Embed Link..." className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
               </div>
            </Card>
         </motion.div>

         {/* Right Column: Social & Advanced */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="lg:col-span-5 space-y-10"
         >
            <Card className="bg-[#030D1B] border-white/5 p-10 text-white space-y-10">
               <div>
                  <h3 className="text-2xl font-serif uppercase flex items-center gap-4">
                     <Smartphone size={20} className="text-brand-gold" />
                     Social <span className="text-brand-orange">Channels</span>
                  </h3>
                  <div className="h-[1px] w-20 bg-white/10 mt-4" />
               </div>

               <div className="space-y-6">
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Instagram Profile</Label>
                     <Input placeholder="https://instagram.com/oopre_bar" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Facebook Page</Label>
                     <Input placeholder="https://facebook.com/oopre" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">WhatsApp Business</Label>
                     <Input defaultValue="+91 74400 26026" className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
                  <div className="space-y-3">
                     <Label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Zomato / Swiggy URL</Label>
                     <Input placeholder="https://zomato.com/..." className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50" />
                  </div>
               </div>

               <Button className="border border-white/10 hover:bg-white hover:text-black bg-transparent w-full font-bold h-14 uppercase tracking-[0.2em] transition-all">
                  Sync Social Links
               </Button>
            </Card>

            <Card className="bg-brand-orange/5 border-brand-orange/10 p-10 text-white">
               <h3 className="text-xl font-serif uppercase mb-4 text-brand-orange">Emergency Sync</h3>
               <p className="text-xs text-white/40 leading-relaxed mb-8">
                  Clears global cache and forces a re-render of the public website. Use this after significant menu or event updates.
               </p>
               <Button variant="outline" className="w-full border-brand-orange/30 text-brand-orange hover:bg-brand-orange hover:text-white uppercase text-[10px] font-bold tracking-[0.2em] h-12">
                  Purge Cloud Cache
               </Button>
            </Card>
         </motion.div>
      </div>
    </div>
  );
}

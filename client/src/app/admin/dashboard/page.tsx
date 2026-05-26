'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquare, IndianRupee, TrendingUp, ArrowUpRight, Activity, Clock, Coffee, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { name: 'Total Reservations', value: '128', icon: MessageSquare, change: '+12%', color: 'text-brand-blue' },
  { name: 'Upcoming Events', value: '4', icon: Calendar, change: '+2', color: 'text-brand-gold' },
  { name: 'Weekly Visitors', value: '850', icon: Users, change: '+5%', color: 'text-brand-orange' },
  { name: 'Revenue (Est)', value: '₹45,000', icon: IndianRupee, change: '+8%', color: 'text-green-500' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-12 max-w-[1400px]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex justify-between items-end"
      >
        <div>
           <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">System Overview</span>
           <h1 className="text-5xl font-serif text-white uppercase tracking-tight leading-none">Command <span className="text-brand-blue">Center</span></h1>
           <p className="text-white/40 mt-4 font-light italic">Welcome back, Oopre Manager. Here&apos;s your rooftop&apos;s heartbeat today.</p>
        </div>
        <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-sm flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
           <Clock size={14} className="text-brand-gold" />
           {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-[#030D1B] border-white/5 text-white hover:border-brand-blue/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
                <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                  <CardTitle className="text-[10px] font-bold tracking-widest text-white/40 uppercase">{stat.name}</CardTitle>
                  <Icon size={18} className={stat.color} />
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-4xl font-serif mb-2">{stat.value}</div>
                  <div className="flex items-center gap-2">
                     <div className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                        <TrendingUp size={10} />
                        {stat.change}
                     </div>
                     <span className="text-[10px] text-white/20 uppercase tracking-widest">Growth</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Activity Feed */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="lg:col-span-8"
         >
            <Card className="bg-[#030D1B] border-white/5 text-white p-10 h-full overflow-hidden relative">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-serif uppercase flex items-center gap-3">
                     <Activity size={20} className="text-brand-blue" />
                     Live <span className="text-brand-gold">Activity</span>
                  </h3>
                  <button className="text-[10px] font-bold tracking-widest text-white/40 uppercase hover:text-white transition-colors">View All Logs</button>
               </div>
               <div className="space-y-8">
                  {[
                    { text: 'New reservation request from Anjali for 4 people.', time: '2 mins ago', type: 'booking' },
                    { text: 'Menu updated: Added "Oozing Mediterranean Pizza".', time: '45 mins ago', type: 'menu' },
                    { text: 'New gallery submission: Sunset over Bhubaneswar.', time: '2 hours ago', type: 'gallery' },
                    { text: 'System Check: Server performance optimal (99.9% uptime).', time: '12 hours ago', type: 'system' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start border-b border-white/5 pb-6 last:border-0 relative group">
                       <div className="mt-1">
                          <div className={`w-3 h-3 rounded-full border-2 border-[#030D1B] ${i === 0 ? 'bg-brand-blue animate-pulse shadow-[0_0_10px_#005BA1]' : 'bg-white/10'}`} />
                       </div>
                       <div className="flex-grow">
                          <p className="text-sm text-white/80 font-light group-hover:text-white transition-colors">{item.text}</p>
                          <span className="text-[10px] text-white/30 uppercase tracking-widest mt-2 block font-bold">{item.time}</span>
                       </div>
                       <ArrowUpRight size={14} className="text-white/10 group-hover:text-brand-gold transition-colors" />
                    </div>
                  ))}
               </div>
            </Card>
         </motion.div>

         {/* Quick Controls */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="lg:col-span-4"
         >
            <Card className="bg-[#030D1B] border-white/5 text-white p-10 h-full">
               <h3 className="text-2xl font-serif uppercase mb-10">Management <span className="text-brand-gold">Vault</span></h3>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'Create Event', icon: Calendar, color: 'hover:border-brand-blue/50 group-hover:text-brand-blue' },
                    { label: 'Edit Menu', icon: Coffee, color: 'hover:border-brand-gold/50 group-hover:text-brand-gold' },
                    { label: 'Media Library', icon: ImageIcon, color: 'hover:border-brand-orange/50 group-hover:text-brand-orange' },
                    { label: 'System Settings', icon: SettingsIcon, iconName: 'Settings' }
                  ].map((btn, i) => {
                    const Icon = btn.icon || SettingsIcon;
                    return (
                      <button key={i} className={`flex items-center justify-between p-5 bg-white/5 border border-transparent rounded-sm group transition-all duration-300 ${btn.color || 'hover:border-white/20'}`}>
                         <div className="flex items-center gap-4">
                            <Icon size={18} className="text-white/20 transition-colors group-hover:text-white" />
                            <span className="text-xs font-bold tracking-widest uppercase">{btn.label}</span>
                         </div>
                         <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    );
                  })}
               </div>

               <div className="mt-12 p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-sm">
                  <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-2">Cloud Usage</p>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-[65%] h-full bg-brand-blue" />
                  </div>
                  <p className="text-[10px] text-white/30 mt-3 font-bold uppercase tracking-widest flex justify-between">
                     <span>Media Storage</span>
                     <span>6.5 / 10 GB</span>
                  </p>
               </div>
            </Card>
         </motion.div>
      </div>
    </div>
  );
}

function SettingsIcon({ size, className }: { size: number, className: string }) {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className={className}
      >
         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
         <circle cx="12" cy="12" r="3" />
      </svg>
   )
}

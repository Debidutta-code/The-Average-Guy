'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquare, IndianRupee } from 'lucide-react';

const stats = [
  { name: 'Total Reservations', value: '128', icon: MessageSquare, change: '+12%', changeType: 'increase' },
  { name: 'Upcoming Events', value: '4', icon: Calendar, change: '+2', changeType: 'increase' },
  { name: 'Weekly Visitors', value: '850', icon: Users, change: '+5%', changeType: 'increase' },
  { name: 'Revenue (Est)', value: '₹45,000', icon: IndianRupee, change: '+8%', changeType: 'increase' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tighter uppercase">Dashboard</h1>
        <p className="text-white/40">Overview of your cafe's performance and activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="bg-zinc-900 border-white/5 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/60">{stat.name}</CardTitle>
                <Icon size={16} className="text-brand-orange" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-500 mt-1">
                  {stat.change} <span className="text-white/20">from last month</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="bg-zinc-900 border-white/5 text-white p-8">
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            <div className="space-y-6">
               {[
                 'New reservation from Anjali for 4 people.',
                 'Updated "Acoustic Night" event details.',
                 'Added 3 new photos to the Gallery.',
                 'New review received: "Amazing coffee!"',
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start border-b border-white/5 pb-4 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-brand-orange mt-2" />
                    <p className="text-sm text-white/70">{item}</p>
                 </div>
               ))}
            </div>
         </Card>
         <Card className="bg-zinc-900 border-white/5 text-white p-8">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
               <button className="p-4 bg-white/5 hover:bg-brand-orange rounded-2xl text-sm font-bold transition-all">Add Event</button>
               <button className="p-4 bg-white/5 hover:bg-brand-orange rounded-2xl text-sm font-bold transition-all">New Menu Item</button>
               <button className="p-4 bg-white/5 hover:bg-brand-orange rounded-2xl text-sm font-bold transition-all">Upload Photos</button>
               <button className="p-4 bg-white/5 hover:bg-brand-orange rounded-2xl text-sm font-bold transition-all">Site Settings</button>
            </div>
         </Card>
      </div>
    </div>
  );
}

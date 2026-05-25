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
        <h1 className="text-4xl font-serif font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your cafe&apos;s performance and activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="bg-white/50 backdrop-blur-md border-brand-latte/50 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
                <Icon size={16} className="text-brand-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-serif font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">
                  {stat.change} <span className="text-muted-foreground/60">from last month</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="bg-white/50 backdrop-blur-md border-brand-latte/50 shadow-sm p-8">
            <h3 className="text-xl font-serif font-bold mb-6">Recent Activity</h3>
            <div className="space-y-6">
               {[
                 'New reservation from Anjali for 4 people.',
                 'Updated "Acoustic Night" event details.',
                 'Added 3 new photos to the Gallery.',
                 'New review received: "Amazing coffee!"',
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start border-b border-brand-latte/30 pb-4 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                 </div>
               ))}
            </div>
         </Card>
         <Card className="bg-white/50 backdrop-blur-md border-brand-latte/50 shadow-sm p-8">
            <h3 className="text-xl font-serif font-bold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
               <button className="p-4 bg-brand-beige/50 hover:bg-brand-gold hover:text-white rounded-2xl text-sm font-bold transition-all border border-brand-latte/50">Add Event</button>
               <button className="p-4 bg-brand-beige/50 hover:bg-brand-gold hover:text-white rounded-2xl text-sm font-bold transition-all border border-brand-latte/50">New Menu Item</button>
               <button className="p-4 bg-brand-beige/50 hover:bg-brand-gold hover:text-white rounded-2xl text-sm font-bold transition-all border border-brand-latte/50">Upload Photos</button>
               <button className="p-4 bg-brand-beige/50 hover:bg-brand-gold hover:text-white rounded-2xl text-sm font-bold transition-all border border-brand-latte/50">Site Settings</button>
            </div>
         </Card>
      </div>
    </div>
  );
}

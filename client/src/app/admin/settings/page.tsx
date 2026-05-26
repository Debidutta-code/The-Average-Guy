'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function AdminSettingsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground uppercase">Site Settings</h1>
        <p className="text-foreground/40">Configure business details and global configurations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <Card className="bg-white border-foreground/5 p-8 text-foreground space-y-8 shadow-sm">
            <h3 className="text-xl font-serif font-bold border-b border-foreground/5 pb-4">Business Information</h3>

            <div className="space-y-6">
               <div className="space-y-2">
                  <Label>Business Name</Label>
                  <Input defaultValue="The Monarch Mug" className="bg-brand-ivory border-foreground/10" />
               </div>
               <div className="space-y-2">
                  <Label>Tagline</Label>
                  <Input defaultValue="Coffee • Conversations • Community" className="bg-brand-ivory border-foreground/10" />
               </div>
               <div className="space-y-2">
                  <Label>Address</Label>
                  <Textarea defaultValue="Plot No. 125, 200ft Road, near Sidheswar Temple, Patharagadia, Bhubaneswar, Odisha 751024, India" className="bg-brand-ivory border-foreground/10" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <Label>Phone</Label>
                     <Input defaultValue="+91 97066 13566" className="bg-brand-ivory border-foreground/10" />
                  </div>
                  <div className="space-y-2">
                     <Label>Opening Hours</Label>
                     <Input defaultValue="11:00 AM – 10:00 PM" className="bg-brand-ivory border-foreground/10" />
                  </div>
               </div>
            </div>
            <Button className="bg-foreground text-background w-full font-bold h-12 hover:bg-brand-gold transition-colors">Update Details</Button>
         </Card>

         <Card className="bg-white border-foreground/5 p-8 text-foreground space-y-8 shadow-sm">
            <h3 className="text-xl font-serif font-bold border-b border-foreground/5 pb-4">Social Media Links</h3>

            <div className="space-y-6">
               <div className="space-y-2">
                  <Label>Instagram URL</Label>
                  <Input placeholder="https://instagram.com/..." className="bg-brand-ivory border-foreground/10" />
               </div>
               <div className="space-y-2">
                  <Label>Facebook URL</Label>
                  <Input placeholder="https://facebook.com/..." className="bg-brand-ivory border-foreground/10" />
               </div>
               <div className="space-y-2">
                  <Label>WhatsApp Number</Label>
                  <Input defaultValue="+91 97066 13566" className="bg-brand-ivory border-foreground/10" />
               </div>
               <div className="space-y-2">
                  <Label>External Booking Link</Label>
                  <Input placeholder="https://..." className="bg-brand-ivory border-foreground/10" />
               </div>
            </div>
            <Button className="border border-foreground/10 hover:bg-foreground hover:text-background w-full font-bold h-12 transition-all">Save Social Links</Button>
         </Card>
      </div>
    </div>
  );
}

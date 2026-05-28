'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2, Calendar, Loader2, Search, MapPin, Users, Music } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  coverImage?: string;
  artist?: string;
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    coverImage: '',
    artist: ''
  });

  const fetchEvents = async () => {
    try {
      const response = await apiFetch('/events');
      setEvents(response.data);
    } catch {
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const response = await apiFetch('/events');
        if (mounted) {
          setTimeout(() => {
            if (mounted) {
              setEvents(response.data);
              setLoading(false);
            }
          }, 0);
        }
      } catch {
        if (mounted) toast.error("Failed to fetch events");
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingEvent) {
        await apiFetch(`/events/${editingEvent._id}`, {
          method: 'PATCH',
          body: JSON.stringify(formData)
        });
        toast.success("Event updated successfully");
      } else {
        await apiFetch('/events', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        toast.success("New event published");
      }
      fetchEvents();
      setIsDialogOpen(false);
      resetForm();
    } catch {
      toast.error("Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? This action is permanent.")) return;
    try {
      await apiFetch(`/events/${id}`, { method: 'DELETE' });
      toast.success("Event removed");
      fetchEvents();
    } catch {
      toast.error("Failed to delete event");
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      description: '',
      coverImage: '',
      artist: ''
    });
    setEditingEvent(null);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date.split('T')[0],
      time: event.time || '',
      description: event.description,
      coverImage: event.coverImage || '',
      artist: event.artist || ''
    });
    setIsDialogOpen(true);
  };

  const filteredEvents = events.filter(e =>
    e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.artist?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Event Calendar</span>
          <h1 className="text-5xl font-serif text-white uppercase tracking-tight">Rooftop <span className="text-brand-blue">Experiences</span></h1>
          <p className="text-white/40 mt-2 font-light italic">Schedule DJ nights, live bands, and themed Mediterranean parties.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
           <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 flex items-center gap-3 flex-grow md:w-64">
              <Search size={16} className="text-white/30" />
              <input
                type="text"
                placeholder="Search events or artists..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>

           <Dialog open={isDialogOpen} onOpenChange={(open) => {
             setIsDialogOpen(open);
             if (!open) resetForm();
           }}>
             <DialogTrigger>
               <div className="bg-brand-blue hover:bg-brand-gold text-white font-bold h-10 px-6 rounded-sm uppercase text-[10px] tracking-widest transition-all flex items-center justify-center cursor-pointer">
                 <Plus size={16} className="mr-2" /> Add Event
               </div>
             </DialogTrigger>
             <DialogContent className="bg-[#030D1B] border-white/10 text-white sm:max-w-[700px] font-sans">
               <DialogHeader className="pb-6 border-b border-white/5">
                 <DialogTitle className="text-3xl font-serif font-light uppercase">{editingEvent ? 'Modify' : 'New'} <span className="text-brand-blue">Event</span></DialogTitle>
               </DialogHeader>
               <div className="grid gap-8 py-8">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-3">
                     <Label htmlFor="title" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Event Title</Label>
                     <Input
                       id="title"
                       value={formData.title}
                       onChange={(e) => setFormData({...formData, title: e.target.value})}
                       placeholder="e.g. Neon Mykonos Night"
                       className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                     />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-3">
                       <Label htmlFor="date" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Date</Label>
                       <Input
                         id="date"
                         type="date"
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50 invert-calendar"
                       />
                     </div>
                     <div className="space-y-3">
                       <Label htmlFor="time" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Time</Label>
                       <Input
                         id="time"
                         type="text"
                         value={formData.time}
                         onChange={(e) => setFormData({...formData, time: e.target.value})}
                         placeholder="9:00 PM"
                         className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                       />
                     </div>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <Label htmlFor="artist" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Main Artist / Performer</Label>
                   <Input
                     id="artist"
                     value={formData.artist}
                     onChange={(e) => setFormData({...formData, artist: e.target.value})}
                     placeholder="e.g. DJ Aris or Acoustic Duo"
                     className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                   />
                 </div>
                 <div className="space-y-3">
                   <Label htmlFor="desc" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Event Narrative</Label>
                   <Textarea
                     id="desc"
                     value={formData.description}
                     onChange={(e) => setFormData({...formData, description: e.target.value})}
                     placeholder="Describe the energy and vibe..."
                     className="bg-white/5 border-white/10 rounded-sm min-h-[120px] focus:border-brand-blue/50"
                   />
                 </div>
                 <div className="space-y-3">
                   <Label htmlFor="image" className="text-[10px] uppercase tracking-widest font-bold text-white/40">Promo Image URL (Cloudinary Preferred)</Label>
                   <Input
                     id="image"
                     value={formData.coverImage}
                     onChange={(e) => setFormData({...formData, coverImage: e.target.value})}
                     placeholder="https://res.cloudinary.com/..."
                     className="bg-white/5 border-white/10 rounded-sm h-12 focus:border-brand-blue/50"
                   />
                 </div>
               </div>
               <DialogFooter className="pt-6 border-t border-white/5">
                 <Button
                   onClick={handleSave}
                   disabled={saving}
                   className="bg-brand-gold hover:bg-white hover:text-black w-full h-14 font-bold uppercase tracking-[0.2em] transition-all"
                 >
                   {saving ? <Loader2 className="animate-spin" /> : 'Publish Event'}
                 </Button>
               </DialogFooter>
             </DialogContent>
           </Dialog>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 className="animate-spin text-brand-gold" size={48} strokeWidth={1} />
          <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Syncing Calendar...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredEvents.length === 0 && (
             <div className="text-center py-32 border border-dashed border-white/5 rounded-sm">
                <p className="text-white/20 text-sm italic font-light">The rooftop calendar is currently quiet.</p>
             </div>
          )}

          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-[#030D1B] border-white/5 overflow-hidden text-white hover:border-brand-blue/30 transition-all group relative">
                   <div className="flex flex-col md:flex-row">
                      {/* Event Visual */}
                      <div className="w-full md:w-72 h-48 md:h-auto relative overflow-hidden">
                         {event.coverImage ? (
                            <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                         ) : (
                            <div className="w-full h-full bg-white/5 flex items-center justify-center">
                               <Music size={40} className="text-white/10" />
                            </div>
                         )}
                         <div className="absolute inset-0 bg-gradient-to-r from-[#030D1B] via-transparent to-transparent hidden md:block" />
                      </div>

                      {/* Event Details */}
                      <div className="flex-grow p-8 md:p-10 flex flex-col justify-between relative">
                         <div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                               <div>
                                  <div className="flex items-center gap-4 mb-2">
                                     <span className="bg-brand-blue/20 text-brand-blue text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase">Confirmed</span>
                                     <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                                        <Calendar size={10} className="text-brand-gold" />
                                        {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} at {event.time}
                                     </span>
                                  </div>
                                  <h3 className="text-3xl font-serif text-white uppercase group-hover:text-brand-blue transition-colors">{event.title}</h3>
                               </div>
                               <div className="flex gap-2">
                                  <button onClick={() => handleEdit(event)} className="p-3 bg-white/5 rounded-sm text-white/30 hover:bg-brand-gold hover:text-black transition-all"><Edit size={18} /></button>
                                  <button onClick={() => handleDelete(event._id)} className="p-3 bg-white/5 rounded-sm text-white/30 hover:bg-red-500 hover:text-white transition-all"><Trash2 size={18} /></button>
                               </div>
                            </div>
                            <p className="text-white/40 text-sm font-light italic line-clamp-2 max-w-2xl mb-6">{event.description}</p>
                         </div>

                         <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                               <Users size={16} className="text-brand-blue" />
                               <div className="text-[10px] font-bold uppercase tracking-widest">
                                  <span className="text-white/20 block">Performer</span>
                                  <span className="text-white">{event.artist || 'TBA'}</span>
                               </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <MapPin size={16} className="text-brand-gold" />
                               <div className="text-[10px] font-bold uppercase tracking-widest">
                                  <span className="text-white/20 block">Zone</span>
                                  <span className="text-white">Main Deck</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

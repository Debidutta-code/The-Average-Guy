'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2, Calendar, Loader2 } from 'lucide-react';
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

export default function AdminEventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    artist: '',
    description: '',
    coverImage: '',
    status: 'upcoming'
  });

  const fetchEvents = async () => {
    try {
      const response = await apiFetch('/events');
      setEvents(response.data);
    } catch (error) {
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingEvent) {
        await apiFetch(`/events/${editingEvent._id}`, {
          method: 'PATCH',
          body: JSON.stringify(formData)
        });
        toast.success("Event updated");
      } else {
        await apiFetch('/events', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        toast.success("Event created");
      }
      fetchEvents();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast.error("Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await apiFetch(`/events/${id}`, { method: 'DELETE' });
      toast.success("Event deleted");
      fetchEvents();
    } catch (error) {
      toast.error("Failed to delete event");
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      artist: '',
      description: '',
      coverImage: '',
      status: 'upcoming'
    });
    setEditingEvent(null);
  };

  const handleEdit = (event: any) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date?.split('T')[0] || '',
      artist: event.artist || '',
      description: event.description || '',
      coverImage: event.coverImage || '',
      status: event.status || 'upcoming'
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif font-bold tracking-tight">Events Management</h1>
          <p className="text-muted-foreground">Add, edit, or remove community events.</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-brand-gold hover:bg-foreground text-white font-bold px-8 h-12 rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/20">
              <Plus size={18} className="mr-2" /> Add New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white border-brand-latte/50 text-foreground sm:max-w-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif font-bold">
                {editingEvent ? 'Edit Event' : 'Create New Event'}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Event Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Jazz Night"
                    className="bg-brand-beige/20 border-brand-latte/50 h-12 rounded-xl focus:ring-brand-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="bg-brand-beige/20 border-brand-latte/50 h-12 rounded-xl focus:ring-brand-gold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="artist" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Artist/Performer</Label>
                <Input
                  id="artist"
                  value={formData.artist}
                  onChange={(e) => setFormData({...formData, artist: e.target.value})}
                  placeholder="Name of artist"
                  className="bg-brand-beige/20 border-brand-latte/50 h-12 rounded-xl focus:ring-brand-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="desc" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Description</Label>
                <Textarea
                  id="desc"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Event details..."
                  className="bg-brand-beige/20 border-brand-latte/50 rounded-xl focus:ring-brand-gold min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Cover Image URL</Label>
                <Input
                  id="image"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({...formData, coverImage: e.target.value})}
                  placeholder="https://..."
                  className="bg-brand-beige/20 border-brand-latte/50 h-12 rounded-xl focus:ring-brand-gold"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-brand-gold hover:bg-foreground text-white w-full h-14 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/20"
              >
                {saving ? <Loader2 className="animate-spin" /> : 'Save Event'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-brand-gold" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {events.length === 0 && <p className="text-muted-foreground/60 text-center py-20 italic">No events found.</p>}
          {events.map((event) => (
            <Card key={event._id} className="bg-white/50 backdrop-blur-md border-brand-latte/50 p-6 text-foreground flex items-center justify-between hover:shadow-xl hover:shadow-black/5 hover:border-brand-gold/30 transition-all duration-500 rounded-3xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-beige/50 border border-brand-latte/50 flex items-center justify-center text-brand-gold shadow-inner">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">{event.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{event.artist} • {new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => handleEdit(event)} variant="ghost" size="icon" className="text-muted-foreground/40 hover:text-foreground hover:bg-brand-beige/50 rounded-xl transition-all duration-300">
                  <Edit size={18} />
                </Button>
                <Button onClick={() => handleDelete(event._id)} variant="ghost" size="icon" className="text-muted-foreground/40 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all duration-300">
                  <Trash2 size={18} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

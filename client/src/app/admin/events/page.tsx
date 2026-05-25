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

interface Event {
  _id: string;
  title: string;
  date: string;
  artist?: string;
  description?: string;
  coverImage?: string;
  status: string;
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    artist: '',
    description: '',
    coverImage: '',
    status: 'upcoming'
  });

  useEffect(() => {
    let mounted = true;
    const fetchEvents = async () => {
      try {
        const response = await apiFetch('/events');
        if (mounted) {
          setEvents(response.data);
        }
      } catch {
        toast.error("Failed to fetch events");
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    fetchEvents();
    return () => { mounted = false; };
  }, []);

  const fetchEventsData = async () => {
    try {
      const response = await apiFetch('/events');
      setEvents(response.data);
    } catch {
      toast.error("Failed to fetch events");
    }
  };

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
      fetchEventsData();
      setIsDialogOpen(false);
      resetForm();
    } catch {
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
      fetchEventsData();
    } catch {
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

  const handleEdit = (event: Event) => {
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
          <h1 className="text-4xl font-black tracking-tighter uppercase">Events Management</h1>
          <p className="text-white/40">Add, edit, or remove community events.</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger>
            <Button className="bg-brand-gold hover:bg-white hover:text-black font-bold">
              <Plus size={18} className="mr-2" /> Add New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 border-white/5 text-white sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{editingEvent ? 'Edit Event' : 'Create New Event'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Jazz Night"
                    className="bg-black/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="bg-black/50 border-white/10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="artist">Artist/Performer</Label>
                <Input
                  id="artist"
                  value={formData.artist}
                  onChange={(e) => setFormData({...formData, artist: e.target.value})}
                  placeholder="Name of artist"
                  className="bg-black/50 border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea
                  id="desc"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Event details..."
                  className="bg-black/50 border-white/10 min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Cover Image URL</Label>
                <Input
                  id="image"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({...formData, coverImage: e.target.value})}
                  placeholder="https://..."
                  className="bg-black/50 border-white/10"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-brand-gold w-full h-12 font-bold"
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
          {events.length === 0 && <p className="text-white/20 text-center py-20">No events found.</p>}
          {events.map((event) => (
            <Card key={event._id} className="bg-zinc-900 border-white/5 p-6 text-white flex items-center justify-between hover:border-brand-gold/50 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-zinc-800 flex items-center justify-center text-brand-gold">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-white/40 text-sm">{event.artist} • {new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => handleEdit(event)} variant="ghost" size="icon" className="text-white/40 hover:text-white hover:bg-white/5">
                  <Edit size={18} />
                </Button>
                <Button onClick={() => handleDelete(event._id)} variant="ghost" size="icon" className="text-white/40 hover:text-red-500 hover:bg-red-500/10">
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

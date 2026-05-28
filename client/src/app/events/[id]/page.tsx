'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { apiFetch } from "@/lib/api";

interface EventData {
  title: string;
  description: string;
  date: string;
  artist?: string;
  coverImage?: string;
  status?: string;
}

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await apiFetch(`/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error("Failed to fetch event", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-brand-gold" size={40} />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold">Event not found</h1>
        <Button onClick={() => router.push('/events')} variant="outline">
          Back to Events
        </Button>
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/40 hover:text-brand-gold transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Events</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">
                {event.status || 'Upcoming'} Event
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                {event.title}
              </h1>
            </div>

            <p className="text-xl text-white/60 leading-relaxed">
              {event.description}
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Calendar size={18} />
                  <span className="font-bold uppercase text-xs tracking-wider">Date</span>
                </div>
                <p className="text-2xl font-bold">{new Date(event.date).toLocaleDateString()}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Users size={18} />
                  <span className="font-bold uppercase text-xs tracking-wider">Artist</span>
                </div>
                <p className="text-2xl font-bold">{event.artist || 'TBA'}</p>
              </div>
            </div>

            <div className="pt-4">
               <Button className="bg-brand-gold hover:bg-white hover:text-black text-black px-12 h-16 rounded-full text-lg font-bold transition-all duration-500 w-full sm:w-auto">
                  Book Your Spot
               </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5"
          >
            {event.coverImage ? (
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-white/10">
                <Calendar size={120} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

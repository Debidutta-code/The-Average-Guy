'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { apiFetch } from "@/lib/api";
import { Event } from "@/types";

export default function EventDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
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
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
        <Loader2 className="animate-spin text-brand-gold" size={40} />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-brand-ivory text-foreground flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-serif font-medium">Event not found</h1>
        <Button onClick={() => router.push('/events')} variant="outline" className="rounded-full px-8">
          Back to Events
        </Button>
      </div>
    );
  }

  return (
    <main className="bg-brand-ivory min-h-screen">
      <Navbar />

      <div className="pt-48 pb-20 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-foreground/40 hover:text-brand-gold transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Events</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">
                {event.status || 'Upcoming'} Experience
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight leading-[0.9]">
                {event.title}
              </h1>
            </div>

            <p className="text-xl text-foreground/60 font-light leading-relaxed italic">
              {event.description}
            </p>

            <div className="grid grid-cols-2 gap-12 py-12 border-y border-black/5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Calendar size={14} />
                  <span className="font-bold uppercase text-[9px] tracking-[0.2em]">Date</span>
                </div>
                <p className="text-2xl font-serif font-medium italic">{new Date(event.date).toLocaleDateString()}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Users size={14} />
                  <span className="font-bold uppercase text-[9px] tracking-[0.2em]">Artist / Curator</span>
                </div>
                <p className="text-2xl font-serif font-medium italic">{event.artist || 'TBA'}</p>
              </div>
            </div>

            <div className="pt-4">
               <Button className="bg-foreground hover:bg-brand-gold text-background px-12 h-16 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 w-full sm:w-auto shadow-xl shadow-black/5">
                  Book Your Spot
               </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-black/5"
          >
            {event.coverImage ? (
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-brand-latte/10 flex items-center justify-center text-brand-gold/20">
                <Calendar size={120} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

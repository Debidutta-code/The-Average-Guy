'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Phone, Mail, Clock, Loader2, Trash2, CheckCircle, Search, Filter, MoreVertical } from 'lucide-react';
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Reservation {
  _id: string;
  name: string;
  guests: number;
  date: string;
  time: string;
  phone: string;
  email?: string;
  status: string;
}

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let mounted = true;
    const fetchReservations = async () => {
      try {
        const response = await apiFetch('/reservations');
        if (mounted) {
          setReservations(response.data);
        }
      } catch {
        toast.error("Failed to fetch reservations");
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    fetchReservations();
    return () => { mounted = false; };
  }, []);

  const fetchReservationsData = async () => {
    try {
      const response = await apiFetch('/reservations');
      setReservations(response.data);
    } catch {
      toast.error("Failed to fetch reservations");
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await apiFetch(`/reservations/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
      toast.success(`Reservation ${status}`);
      fetchReservationsData();
    } catch {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this reservation?")) return;
    try {
      await apiFetch(`/reservations/${id}`, { method: 'DELETE' });
      toast.success("Reservation deleted");
      fetchReservationsData();
    } catch {
      toast.error("Failed to delete reservation");
    }
  };

  const filteredReservations = reservations.filter(res =>
    res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    res.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Guest Management</span>
          <h1 className="text-5xl font-serif text-white uppercase tracking-tight">Table <span className="text-brand-blue">Bookings</span></h1>
          <p className="text-white/40 mt-2 font-light italic">Confirm, modify, or track rooftop reservations.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
           <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 flex items-center gap-3 flex-grow md:w-64">
              <Search size={16} className="text-white/30" />
              <input
                type="text"
                placeholder="Search guest name or phone..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <Button variant="outline" className="bg-white/5 border-white/10 text-white/60 hover:text-white uppercase text-[10px] font-bold tracking-widest px-6 h-10">
              <Filter size={14} className="mr-2" /> Filter
           </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 className="animate-spin text-brand-blue" size={48} strokeWidth={1} />
          <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Accessing Records...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredReservations.length === 0 && (
            <div className="text-center py-32 border border-dashed border-white/5 rounded-sm">
               <p className="text-white/20 text-sm italic font-light">No bookings matching your criteria were found.</p>
            </div>
          )}

          <AnimatePresence mode="popLayout">
            {filteredReservations.map((res, i) => (
              <motion.div
                key={res._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="bg-[#030D1B] border-white/5 p-8 text-white grid grid-cols-1 md:grid-cols-5 gap-8 items-center hover:border-brand-blue/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold/20 group-hover:bg-brand-gold transition-colors" />

                  <div className="md:col-span-1">
                    <h3 className="text-xl font-serif text-white uppercase group-hover:text-brand-gold transition-colors">{res.name}</h3>
                    <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest mt-2">
                        <Users size={12} className="text-brand-blue" />
                        <span>{res.guests} Guests</span>
                    </div>
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                        <Calendar size={14} className="text-brand-gold" />
                        <span className="font-light">{new Date(res.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                        <Clock size={14} className="text-brand-gold" />
                        <span className="font-light">{res.time}</span>
                    </div>
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                        <Phone size={14} className="text-brand-blue" />
                        <span className="font-light">{res.phone}</span>
                    </div>
                    {res.email && (
                        <div className="flex items-center gap-3 text-white/60 text-sm">
                          <Mail size={14} className="text-brand-blue" />
                          <span className="font-light truncate max-w-[150px]">{res.email}</span>
                        </div>
                    )}
                  </div>

                  <div className="md:col-span-1 flex flex-col items-start md:items-center">
                    <Badge className={
                      res.status === 'confirmed' ? "bg-green-500/10 text-green-500 border-green-500/20 px-4 py-1 rounded-sm uppercase text-[9px] tracking-widest font-bold" :
                      res.status === 'cancelled' ? "bg-red-500/10 text-red-500 border-red-500/20 px-4 py-1 rounded-sm uppercase text-[9px] tracking-widest font-bold" :
                      "bg-brand-orange/10 text-brand-orange border-brand-orange/20 px-4 py-1 rounded-sm uppercase text-[9px] tracking-widest font-bold"
                    }>
                      {res.status}
                    </Badge>
                  </div>

                  <div className="md:col-span-1 flex justify-end gap-2">
                    {res.status !== 'confirmed' && (
                      <button
                        onClick={() => handleStatusChange(res._id, 'confirmed')}
                        className="p-3 bg-white/5 rounded-sm text-green-500 hover:bg-green-500 hover:text-white transition-all group/btn"
                        title="Confirm Booking"
                      >
                        <CheckCircle size={18} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(res._id)}
                      className="p-3 bg-white/5 rounded-sm text-white/30 hover:bg-red-500 hover:text-white transition-all"
                      title="Delete Entry"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button className="p-3 bg-white/5 rounded-sm text-white/30 hover:bg-brand-blue hover:text-white transition-all">
                       <MoreVertical size={18} />
                    </button>
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

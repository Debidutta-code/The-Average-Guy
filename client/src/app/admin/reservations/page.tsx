'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Phone, Mail, Clock, Loader2, Trash2, CheckCircle } from 'lucide-react';
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";
import { Button } from '@/components/ui/button';

interface ReservationItem {
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
  const [reservations, setReservations] = useState<ReservationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  const fetchReservations = useCallback(async () => {
    try {
      const response = await apiFetch('/reservations');
      startTransition(() => {
        setReservations(response.data);
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch reservations");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await apiFetch(`/reservations/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
      toast.success(`Reservation ${status}`);
      fetchReservations();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this reservation?")) return;
    try {
      await apiFetch(`/reservations/${id}`, { method: 'DELETE' });
      toast.success("Reservation deleted");
      fetchReservations();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete reservation");
    }
  };

  if (isPending && loading) return <Loader2 className="animate-spin" />;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tighter uppercase">Reservations</h1>
        <p className="text-white/40">Manage table bookings and guest inquiries.</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={40} />
        </div>
      ) : (
        <div className="space-y-4">
          {reservations.length === 0 && <p className="text-white/20 text-center py-20">No reservations found.</p>}
          {reservations.map((res) => (
            <Card key={res._id} className="bg-zinc-900 border-white/5 p-8 text-foreground grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="space-y-1">
                 <h3 className="text-xl font-bold">{res.name}</h3>
                 <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Users size={14} />
                    <span>{res.guests} Guests</span>
                 </div>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={16} />
                    <span className="font-medium">{new Date(res.date).toLocaleDateString()}</span>
                 </div>
                 <div className="flex items-center gap-2 text-white/60">
                    <Clock size={16} />
                    <span className="font-medium">{res.time}</span>
                 </div>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center gap-2 text-white/60">
                    <Phone size={16} />
                    <span className="text-sm">{res.phone}</span>
                 </div>
                 {res.email && (
                    <div className="flex items-center gap-2 text-white/60">
                      <Mail size={16} />
                      <span className="text-sm truncate max-w-[150px]">{res.email}</span>
                    </div>
                 )}
              </div>

              <div className="flex justify-end gap-3">
                 <Badge className={
                   res.status === 'confirmed' ? "bg-green-500/10 text-green-500 border-green-500/20" :
                   res.status === 'cancelled' ? "bg-red-500/10 text-red-500 border-red-500/20" :
                   "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                 }>
                   {res.status.toUpperCase()}
                 </Badge>

                 <div className="flex gap-1">
                    {res.status !== 'confirmed' && (
                      <Button onClick={() => handleStatusChange(res._id, 'confirmed')} variant="ghost" size="icon" className="h-8 w-8 text-green-500 hover:bg-green-500/10">
                        <CheckCircle size={16} />
                      </Button>
                    )}
                    <Button onClick={() => handleDelete(res._id)} variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-500/10">
                      <Trash2 size={16} />
                    </Button>
                 </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

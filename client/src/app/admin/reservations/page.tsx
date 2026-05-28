'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Phone, Mail, Clock, Loader2, Trash2, CheckCircle } from 'lucide-react';
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Reservation } from '@/types';

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = useCallback(async () => {
    try {
      const response = await apiFetch('/reservations');
      setReservations(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch reservations");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchReservations();
  }, [fetchReservations]);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await apiFetch(`/reservations/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
      toast.success(`Reservation ${status}`);
      await fetchReservations();
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
      await fetchReservations();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete reservation");
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-serif font-bold tracking-tight">Reservations</h1>
        <p className="text-muted-foreground">Manage table bookings and guest inquiries.</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-brand-gold" size={40} />
        </div>
      ) : (
        <div className="space-y-4">
          {reservations.length === 0 && <p className="text-muted-foreground/60 text-center py-20 italic">No reservations found.</p>}
          {reservations.map((res: Reservation) => (
            <Card key={res._id} className="bg-white/50 backdrop-blur-md border-brand-latte/50 p-8 text-foreground grid grid-cols-1 md:grid-cols-4 gap-8 items-center rounded-3xl hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
              <div className="space-y-1">
                 <h3 className="text-xl font-serif font-bold">{res.name}</h3>
                 <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Users size={14} />
                    <span>{res.guests} Guests</span>
                 </div>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center gap-2 text-muted-foreground/80">
                    <Calendar size={16} className="text-brand-gold" />
                    <span className="font-semibold text-sm">{new Date(res.date).toLocaleDateString()}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground/80">
                    <Clock size={16} className="text-brand-gold" />
                    <span className="font-semibold text-sm">{res.time}</span>
                 </div>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center gap-2 text-muted-foreground/80">
                    <Phone size={16} className="text-brand-gold" />
                    <span className="text-sm font-medium">{res.phone}</span>
                 </div>
                 {res.email && (
                    <div className="flex items-center gap-2 text-muted-foreground/80">
                      <Mail size={16} className="text-brand-gold" />
                      <span className="text-sm font-medium truncate max-w-[150px]">{res.email}</span>
                    </div>
                 )}
              </div>

              <div className="flex justify-end gap-3">
                 <Badge className={
                   res.status === 'confirmed' ? "bg-green-500/10 text-green-600 border-green-500/20" :
                   res.status === 'cancelled' ? "bg-red-500/10 text-red-500 border-red-500/20" :
                   "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                 }>
                   {res.status.toUpperCase()}
                 </Badge>

                 <div className="flex gap-1">
                    {res.status !== 'confirmed' && (
                      <Button onClick={() => handleStatusChange(res._id, 'confirmed')} variant="ghost" size="icon" className="h-9 w-9 text-green-600 hover:bg-green-500/5 rounded-xl">
                        <CheckCircle size={18} />
                      </Button>
                    )}
                    <Button onClick={() => handleDelete(res._id)} variant="ghost" size="icon" className="h-9 w-9 text-red-500 hover:bg-red-500/5 rounded-xl">
                      <Trash2 size={18} />
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

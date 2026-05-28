'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Users, Clock, Utensils } from 'lucide-react';

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  guests: z.string().min(1, "Number of guests is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  requests: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema)
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Reservation data:', data);
    toast.success("Table reserved! Check your email for confirmation.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Secure Your Spot</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tight leading-none">
            Reserve a <span className="text-primary italic">Table</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Join us for an unforgettable experience where comfort meets heritage. We'll have your favorite spot waiting.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FDFBF7] p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-serif text-foreground border-b border-primary/10 pb-2 flex items-center gap-2">
                   Personal Details
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Full Name</label>
                  <input
                    {...register('name')}
                    className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-bold uppercase">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs font-bold uppercase">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Phone Number</label>
                  <input
                    {...register('phone')}
                    className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-bold uppercase">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-serif text-foreground border-b border-primary/10 pb-2 flex items-center gap-2">
                   Reservation Details
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Number of Guests</label>
                  <select
                    {...register('guests')}
                    className={`w-full bg-white border ${errors.guests ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none`}
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="4">4 People</option>
                    <option value="6">6 People</option>
                    <option value="8+">8+ People</option>
                  </select>
                  {errors.guests && <p className="text-red-500 text-xs font-bold uppercase">{errors.guests.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-widest">Date</label>
                    <input
                      {...register('date')}
                      type="date"
                      className={`w-full bg-white border ${errors.date ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                    />
                    {errors.date && <p className="text-red-500 text-xs font-bold uppercase">{errors.date.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-widest">Time</label>
                    <input
                      {...register('time')}
                      type="time"
                      className={`w-full bg-white border ${errors.time ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                    />
                    {errors.time && <p className="text-red-500 text-xs font-bold uppercase">{errors.time.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Special Requests</label>
                  <textarea
                    {...register('requests')}
                    className="w-full bg-white border border-primary/20 rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                    rows={3}
                    placeholder="Anniversaries, allergies, preferred corner..."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-primary text-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg shadow-primary/10"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                <>
                  <Utensils size={20} />
                  Confirm Reservation
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

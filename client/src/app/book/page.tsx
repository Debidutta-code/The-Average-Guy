"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar as CalendarIcon, User, ChevronRight, CheckCircle2 } from 'lucide-react';
import { treatments } from '@/data/siteData';
import confetti from 'canvas-confetti';
import Link from 'next/link';

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  concern: z.string().min(1, "Please select a concern"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2F80ED', '#D7E7FD', '#FFFFFF']
    });
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  if (submitted) {
    return (
      <div className="pb-24 flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white rounded-[40px] p-12 text-center shadow-2xl border border-slate-100">
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Appointment Requested!</h2>
          <p className="text-slate-600 mb-12">Thank you for choosing SkinCare Clinic. Our team will contact you shortly to confirm your appointment details.</p>
          <Link href="/" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-600 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Easy Booking</span>
              <h1 className="text-4xl md:text-7xl font-playfair font-bold text-slate-900 leading-[1.1] mt-6">Schedule Your <span className="text-primary italic">Visit</span></h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium mt-6">
                Take the first step towards your skin goals. Our specialists are here to provide personalized care tailored to your needs.
              </p>
            </div>

            <div className="space-y-6 pt-4">
               <div className="flex items-center space-x-5 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <User size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Expert Consultation</p>
                    <p className="text-sm text-slate-500 font-medium">Detailed analysis of your skin concerns.</p>
                  </div>
               </div>
               <div className="flex items-center space-x-5 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
                    <CalendarIcon size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Flexible Scheduling</p>
                    <p className="text-sm text-slate-500 font-medium">Choose a time that works best for you.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
              <div className="flex h-3 bg-slate-50">
                <div
                  className="bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(47,128,237,0.5)]"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-10 md:p-16">
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="text-2xl font-playfair font-bold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input {...register("name")} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input {...register("phone")} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+1 (234) 567-890" />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input {...register("email")} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Age</label>
                          <input {...register("age")} type="number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="25" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Gender</label>
                          <select {...register("gender")} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="button" onClick={nextStep} className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all shadow-lg shadow-primary/20">
                      <span>Next Step</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="text-2xl font-playfair font-bold">Treatment Details</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Primary Concern</label>
                        <select {...register("concern")} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                          <option value="">Select a treatment</option>
                          {treatments.map(t => <option key={t.id} value={t.slug}>{t.title}</option>)}
                          <option value="other">Other / Consultation</option>
                        </select>
                        {errors.concern && <p className="text-red-500 text-xs mt-1">{errors.concern.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Additional Details (Optional)</label>
                        <textarea {...register("message")} rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Tell us more about your skin concerns..." />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-5 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                        Back
                      </button>
                      <button type="button" onClick={nextStep} className="flex-[2] bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all shadow-lg shadow-primary/20">
                        <span>Next Step</span>
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="text-2xl font-playfair font-bold">Preferred Time</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Select Date</label>
                        <input {...register("date")} type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Select Time Slot</label>
                        <select {...register("time")} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                          <option value="">Select Slot</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                          <option value="18:00">06:00 PM</option>
                        </select>
                        {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-5 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-[2] bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <span>Confirm Booking</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

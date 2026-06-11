"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Stethoscope, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

const formSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters"),
  patientPhone: z.string().min(10, "Please enter a valid phone number"),
  patientEmail: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  reason: z.string().min(1, "Please select a treatment type"),
  message: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof formSchema>;

interface BookingFormProps {
  onSubmit: (data: AppointmentFormData) => void;
  isLoading?: boolean;
}

const treatments = [
  "Dental Consultation",
  "Dental Implants",
  "Root Canal Treatment",
  "Smile Designing",
  "Teeth Whitening",
  "Braces & Aligners",
  "Tooth Extraction",
  "Kids Dentistry",
  "Preventive Dentistry",
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
];

export const BookingForm = ({ onSubmit, isLoading }: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <section id="book" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading
              badge="Book Now"
              title="Schedule Your Visit Today"
              description="Ready for a healthier smile? Fill out the form to request an appointment. Our team will contact you shortly to confirm your slot."
            />

            <div className="space-y-8">
              {[
                { icon: CheckCircle2, title: "Same Day Consultation", desc: "Available for urgent dental concerns" },
                { icon: CheckCircle2, title: "Flexible Timing", desc: "Appointments from 9AM to 9PM" },
                { icon: CheckCircle2, title: "Expert Diagnosis", desc: "Initial checkup with detailed analysis" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-[2.5rem] bg-white shadow-premium border border-slate-100 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Quick Booking</p>
                <a href="tel:+917008520133" className="text-2xl font-black text-slate-900 hover:text-primary transition-colors">
                  +91 70085 20133
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 shadow-2xl border-none">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      {...register("patientName")}
                      className={errors.patientName ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                    />
                    {errors.patientName && <p className="text-xs text-rose-500 font-bold ml-1">{errors.patientName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                      <Phone size={14} className="text-primary" /> Phone Number
                    </label>
                    <Input
                      placeholder="+91 00000 00000"
                      {...register("patientPhone")}
                      className={errors.patientPhone ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                    />
                    {errors.patientPhone && <p className="text-xs text-rose-500 font-bold ml-1">{errors.patientPhone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Email Address (Optional)
                  </label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    {...register("patientEmail")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Preferred Date
                    </label>
                    <Input
                      type="date"
                      {...register("date")}
                      className={errors.date ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                    />
                    {errors.date && <p className="text-xs text-rose-500 font-bold ml-1">{errors.date.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> Preferred Time
                    </label>
                    <select
                      {...register("time")}
                      className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-medium"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-xs text-rose-500 font-bold ml-1">{errors.time.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                    <Stethoscope size={14} className="text-primary" /> Treatment Required
                  </label>
                  <select
                    {...register("reason")}
                    className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-medium"
                  >
                    <option value="">Select Treatment</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.reason && <p className="text-xs text-rose-500 font-bold ml-1">{errors.reason.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 ml-1 flex items-center gap-2">
                    <MessageSquare size={14} className="text-primary" /> Message (Optional)
                  </label>
                  <textarea
                    placeholder="Tell us about your dental concern..."
                    {...register("message")}
                    className="flex min-h-[100px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-medium transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-2xl text-lg shadow-xl shadow-primary/20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm Appointment Request"
                  )}
                </Button>

                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Securely processed • Fast response guaranteed
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

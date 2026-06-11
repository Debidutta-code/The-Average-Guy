"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/Input";
import { services } from "@/data/services";
import { User, Phone, Mail, MessageSquare, Calendar, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const appointmentSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters"),
  patientPhone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  treatmentType: z.string().min(1, "Please select a treatment type"),
  message: z.string().min(5, "Please provide a brief message"),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/trigger-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          apiSecret: process.env.NEXT_PUBLIC_API_SECRET || "SECRET_KEY_FOR_JWT",
          clinicName: "Smile Planet Dental Care",
          doctorEmail: "smileplanetdental@gmail.com",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        toast.success("Appointment request submitted successfully!");
      } else {
        toast.error("Failed to submit appointment. Please try again or call us.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("An error occurred. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[40px] md:rounded-[60px] p-12 md:p-20 text-center shadow-2xl shadow-primary/5 border border-slate-100 max-w-3xl mx-auto animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-10 relative">
          <CheckCircle2 size={48} />
          <Sparkles className="absolute -top-2 -right-2 text-accent" size={24} />
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Thank You!</h3>
        <p className="text-foreground/60 text-lg md:text-xl leading-relaxed mb-12 max-w-md mx-auto">
          Appointment request submitted successfully. Our clinic will contact you shortly to confirm your visit.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn btn-primary h-16 px-12 text-lg shadow-2xl shadow-primary/30"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <section id="book" className="py-12 md:py-20 bg-[#F8FAFC] relative overflow-hidden min-h-[800px] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 space-y-2">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Calendar size={12} className="mb-0.5" />
              <span>Online Booking</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold">
              Reserve Your <span className="text-primary italic">Visit</span>
            </h3>
            <p className="text-foreground/50 text-base md:text-lg max-w-2xl mx-auto">
              Quickly fill out the form below and we&apos;ll handle the rest.
            </p>
          </div>

          <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="relative group">
                <Input
                  label="Patient Name"
                  placeholder="Full Name"
                  {...register("patientName")}
                  error={errors.patientName?.message}
                />
                <User className="absolute right-5 top-[44px] text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
              </div>

              <div className="relative group">
                <Input
                  label="Phone Number"
                  placeholder="10-digit number"
                  {...register("patientPhone")}
                  error={errors.patientPhone?.message}
                />
                <Phone className="absolute right-5 top-[44px] text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
              </div>

              <div className="relative group">
                <Input
                  label="Email Address"
                  placeholder="Optional"
                  type="email"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <Mail className="absolute right-5 top-[44px] text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
              </div>

              <div className="relative group">
                <Input
                  as="select"
                  label="Treatment Type"
                  className="appearance-none"
                  {...register("treatmentType")}
                  error={errors.treatmentType?.message}
                >
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="General Consultation">General Consultation</option>
                </Input>
                <div className="absolute right-5 top-[44px] pointer-events-none">
                   <Sparkles className="text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                </div>
              </div>

              <div className="relative group">
                <Input
                  label="Preferred Date"
                  type="date"
                  {...register("date")}
                  error={errors.date?.message}
                />
                <Calendar className="absolute right-5 top-[44px] text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
              </div>

              <div className="relative group">
                <Input
                  as="select"
                  label="Preferred Time"
                  className="appearance-none"
                  {...register("time")}
                  error={errors.time?.message}
                >
                  <option value="">Select Time Slot</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                </Input>
                <div className="absolute right-5 top-[44px] pointer-events-none">
                  <Clock className="text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                </div>
              </div>

              <div className="md:col-span-2 relative group">
                <Input
                  as="textarea"
                  label="Message (Optional)"
                  placeholder="How can we help?"
                  className="min-h-[80px]"
                  {...register("message")}
                  error={errors.message?.message}
                />
                <MessageSquare className="absolute right-5 top-[44px] text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full h-16 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Confirming...</span>
                    </div>
                  ) : (
                    "Confirm Appointment Request"
                  )}
                </button>
                <p className="text-center text-sm text-foreground/40 mt-8 font-medium italic">
                  * By clicking the button above, you agree to receive a callback from our team.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

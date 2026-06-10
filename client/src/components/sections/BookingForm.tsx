"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { services } from "@/data/services";
import { User, Phone, Mail, MessageSquare } from "lucide-react";

export const appointmentSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters"),
  patientPhone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  treatmentType: z.string().min(1, "Please select a treatment type"),
  reason: z.string().min(5, "Please provide a reason for your visit"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

interface BookingFormProps {
  onSubmit: (data: AppointmentFormData) => Promise<void>;
  isLoading: boolean;
}

export const BookingForm = ({ onSubmit, isLoading }: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  return (
    <section id="book" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Book Your Appointment"
            subtitle="Fill out the form below and our team will get back to you to confirm your visit."
          />

          <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Name */}
              <div className="relative">
                <Input
                  label="Patient Name"
                  placeholder="Enter full name"
                  {...register("patientName")}
                  error={errors.patientName?.message}
                />
                <User className="absolute right-4 top-[42px] text-slate-400" size={20} />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <Input
                  label="Phone Number"
                  placeholder="Enter 10-digit number"
                  {...register("patientPhone")}
                  error={errors.patientPhone?.message}
                />
                <Phone className="absolute right-4 top-[42px] text-slate-400" size={20} />
              </div>

              {/* Email */}
              <div className="relative">
                <Input
                  label="Email Address (Optional)"
                  placeholder="example@mail.com"
                  type="email"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <Mail className="absolute right-4 top-[42px] text-slate-400" size={20} />
              </div>

              {/* Treatment Type */}
              <div className="relative">
                <Input
                  as="select"
                  label="Treatment Type"
                  {...register("treatmentType")}
                  error={errors.treatmentType?.message}
                >
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </Input>
              </div>

              {/* Date */}
              <div className="relative">
                <Input
                  label="Preferred Date"
                  type="date"
                  {...register("date")}
                  error={errors.date?.message}
                />
              </div>

              {/* Time */}
              <div className="relative">
                <Input
                  as="select"
                  label="Preferred Time"
                  {...register("time")}
                  error={errors.time?.message}
                >
                  <option value="">Select Time Slot</option>
                  <option value="09:00 AM">09:00 AM</option>
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
              </div>

              {/* Reason */}
              <div className="md:col-span-2 relative">
                <Input
                  as="textarea"
                  label="Reason for Visit"
                  placeholder="Briefly describe your concern"
                  className="min-h-[120px] pt-4"
                  {...register("reason")}
                  error={errors.reason?.message}
                />
                <MessageSquare className="absolute right-4 top-[42px] text-slate-400" size={20} />
              </div>

              <div className="md:col-span-2 pt-4">
                <Button
                  type="submit"
                  className="w-full h-14 text-lg"
                  isLoading={isLoading}
                >
                  Confirm Appointment Request
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  * By submitting, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

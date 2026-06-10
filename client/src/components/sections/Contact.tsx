"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    console.log("Contact form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent successfully! We will get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have questions? Reach out to us and we'll be happy to assist you with your dental concerns."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 border-none bg-primary/5 dark:bg-primary/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Call Us</p>
                    <p className="text-lg font-bold">7008520133</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email Us</p>
                    <p className="text-lg font-bold">contact@modentalclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Visit Us</p>
                    <p className="text-lg font-bold leading-snug">
                      Plot No. 2405, Infront of Apollo Pharmacy,<br />
                      Golakha, Mancheswar, Bhubaneswar, 751010
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-[32px] overflow-hidden h-64 shadow-inner">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.578843930303!2d85.86125527420148!3d20.31769241182302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b84243e8da3%3A0xf52b34d4b754727f!2sMO%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1781091415684!5m2!1sen!2sin"
                className="w-full h-full rounded-[28px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    placeholder="9998887776"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    placeholder="General Inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-transparent focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full h-12 gap-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <><Send size={18} /> Send Message</>}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

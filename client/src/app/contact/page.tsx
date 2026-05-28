'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                Let's Start a <br /><span className="text-primary italic">Conversation</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md italic">
                Whether it's a query about our menu, an event inquiry, or just to say hi, we're all ears.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1 font-serif">Visit Us</h4>
                  <p className="text-muted-foreground">Plot No. 125, Patharagadia, Bhubaneswar, 751024</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1 font-serif">Call Us</h4>
                  <p className="text-muted-foreground">+91 97066 13566</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1 font-serif">Email Us</h4>
                  <p className="text-muted-foreground">hello@oldtowncafe.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#FDFBF7] p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-widest">Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                  />
                  {errors.name && <p className="text-red-500 text-xs font-bold uppercase">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-widest">Email</label>
                  <input
                    {...register('email')}
                    placeholder="john@example.com"
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                  />
                  {errors.email && <p className="text-red-500 text-xs font-bold uppercase">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-widest">Subject</label>
                <input
                  {...register('subject')}
                  placeholder="How can we help?"
                  className={`w-full bg-white border ${errors.subject ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground`}
                />
                {errors.subject && <p className="text-red-500 text-xs font-bold uppercase">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-widest">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Your message here..."
                  className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-primary/20'} rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs font-bold uppercase">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

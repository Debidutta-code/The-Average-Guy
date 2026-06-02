"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-8 italic">Get in <span className="text-primary not-italic">Touch</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              For appointments, emergencies, or general inquiries, our dedicated medical team is available to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-playfair mb-1">Our Location</h4>
                  <p className="text-muted-foreground leading-relaxed">Luxury Healthcare Hub, Block A, Bhubaneswar, Odisha 751001</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-playfair mb-1">Emergency Contact</h4>
                  <p className="text-muted-foreground leading-relaxed">+91-999-999-9999 (24/7 Availability)</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-playfair mb-1">Working Hours</h4>
                  <p className="text-muted-foreground leading-relaxed">Mon - Sat: 10:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 bg-green-600 hover:bg-green-700 gap-2 text-white">
                <MessageSquare size={20} />
                WhatsApp Us
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 glass gap-2">
                <Mail size={20} />
                Email Inquiries
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
          >
            {/* Map Placeholder with premium styling */}
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-primary mx-auto mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold font-playfair mb-2">Interactive Map Loading...</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Bhubaneswar Center</p>
              </div>

              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

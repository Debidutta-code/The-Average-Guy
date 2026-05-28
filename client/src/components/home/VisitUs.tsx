'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

export function VisitUs() {
  return (
    <section id="visit" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDFBF7] p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Visit Our <span className="text-primary italic">Heritage Haven</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed italic">
                Nestled in the historic lanes of Old Town Bhubaneswar, we are just a stone's throw away from the ancient Sidheswar Temple.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Address</h4>
                  <p className="text-muted-foreground text-sm">Plot No. 125, 200ft Road, near Sidheswar Temple, Patharagadia, Bhubaneswar, 751024</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Timings</h4>
                  <p className="text-muted-foreground text-sm">11:00 AM – 10:00 PM (Everyday)</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground text-sm">+91 97066 13566</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-foreground font-bold rounded-full hover:bg-primary/90 transition-all gap-2"
              >
                <Navigation size={18} />
                Get Directions
              </a>
              <a
                href="tel:+919706613566"
                className="inline-flex items-center px-6 py-3 border border-primary/20 text-foreground font-bold rounded-full hover:bg-primary/10 transition-all"
              >
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.115848243614!2d85.83685957592476!3d20.29541311311894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a96e95b0bb%3A0x6378e90d79d67576!2sSidheswar%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Old Town Cafe Location"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative leaf */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 pointer-events-none rotate-45">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B4513" d="M40,-62.1C53.3,-55.1,66.6,-47.1,75.1,-35.1C83.6,-23.1,87.3,-7.1,84.1,8.1C80.9,23.3,70.8,37.6,58.8,49C46.8,60.4,32.9,68.9,18,73.5C3.1,78.1,-12.8,78.8,-27.2,74C-41.6,69.2,-54.5,58.9,-64,46.1C-73.5,33.3,-79.6,18,-80.7,2.4C-81.8,-13.2,-77.9,-29.1,-68.8,-41.8C-59.7,-54.5,-45.4,-64,-31.2,-70.5C-17,-77,2.9,-80.5,14.6,-77.5C26.3,-74.5,26.7,-69.1,40,-62.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}

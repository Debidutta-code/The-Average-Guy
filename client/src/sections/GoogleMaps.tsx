"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const GoogleMaps = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="flex-1 w-full order-2 lg:order-1">
             <div className="relative w-full aspect-[16/9] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6663242006764!2d85.8268!3d20.2525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a71000000001%3A0x0!2zMjHCsDE1JzA5LjAiTiA4NcKwNDknMzYuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[0.2] contrast-[1.1]"
                />
             </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Location</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Visit Us in the Heart of <span className="text-primary">Bapuji Nagar</span>.
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Our Address</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">216, Bapuji Nagar, Near [Landmark], Bhubaneswar, Odisha 751009</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Navigation size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">How to Reach</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Easily accessible by public transport and offers ample parking space for private vehicles.</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=20.2525,85.8268"
                target="_blank"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl"
              >
                <Navigation size={20} />
                <span>Get Directions on Google Maps</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;

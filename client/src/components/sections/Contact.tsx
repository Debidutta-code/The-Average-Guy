"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation, ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 70085 20133",
    subtext: "Mon-Sun, 9AM - 9PM",
    link: "tel:+917008520133",
    actionLabel: "Call Now",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    details: "+91 70085 20133",
    subtext: "Quick chat support",
    link: "https://wa.me/917008520133",
    actionLabel: "Message",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@modentalclinic.com",
    subtext: "Online consultations",
    link: "mailto:info@modentalclinic.com",
    actionLabel: "Send Email",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "09:00 AM - 09:00 PM",
    subtext: "Open All 7 Days",
    link: "#book",
    actionLabel: "Book Slot",
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading
              badge="Get In Touch"
              title="Connect with Our Dental Experts"
              description="Have questions or ready to book your visit? Reach out to us through any of these channels. We're here to help you smile better."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 border-slate-50 shadow-premium hover:shadow-premium-hover transition-all duration-500 group border-none bg-slate-50">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-primary font-black text-sm mb-1">{item.details}</p>
                    <p className="text-slate-500 text-xs font-medium mb-6">{item.subtext}</p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors"
                    >
                      {item.actionLabel}
                      <ChevronRight size={14} className="ml-1" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-primary shadow-2xl shadow-primary/30 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Visit Our Clinic</h4>
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <p className="font-bold leading-relaxed text-white/90">
                    Plot No-2405, In Front of Apollo Pharmacy, Golakha, Mancheswar, Bhubaneswar, Odisha 751010
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="white" className="gap-2">
                      <Navigation size={18} />
                      Get Directions
                    </Button>
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:border-white gap-2">
                      <ExternalLink size={18} />
                      View on Map
                    </Button>
                  </a>
                </div>
              </div>
              <MapPin className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-premium-hover border-8 border-white group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.123!2d85.864!3d20.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b!2sMO%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] brightness-[1.05] group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Map Overlay Card */}
            <div className="absolute top-8 left-8 right-8 md:right-auto md:w-80 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Navigation size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">Located at</h4>
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest">Mancheswar, Bhubaneswar</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                Near Apollo Pharmacy, Golakha. Primary location for premium dental care in the Mancheswar region.
              </p>
              <a href="https://maps.google.com" className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                Open in Google Maps
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

"use client";

import { Phone, MessageSquare, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactCards = [
    {
      icon: <Phone size={24} />,
      label: "Call for Appointment",
      value: "+91 00000 00000",
      href: "tel:+910000000000",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <MessageSquare size={24} />,
      label: "WhatsApp Chat",
      value: "Chat with Us",
      href: "https://wa.me/910000000000",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Mail size={24} />,
      label: "Email Support",
      value: "contact@kapoordental.com",
      href: "mailto:contact@kapoordental.com",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Clock size={24} />,
      label: "Working Hours",
      value: "5:00 PM - Late Night",
      href: "#",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Get In Touch</h4>
            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ready to <span className="text-primary">Transform</span> Your Smile?
            </h2>
            <p className="text-lg text-slate-600">Reach out to us through any of the following channels. We&apos;re here to help you with your dental needs.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactCards.map((card, idx) => (
            <motion.a
              key={idx}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{card.value}</h4>
            </motion.a>
          ))}
        </div>

        <div className="bg-primary rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-xl text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Experience Gentle Dentistry Like Never Before.</h3>
                <p className="text-white/80 text-lg mb-0">Join our growing family of happy patients in Bhubaneswar. We look forward to seeing you at the clinic!</p>
             </div>
             <a
               href="#book"
               className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl"
             >
               Book Now <ArrowRight size={20} />
             </a>
           </div>

           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
        </div>

      </div>
    </section>
  );
};

export default Contact;

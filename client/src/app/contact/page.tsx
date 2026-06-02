"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight, MessageCircle, ShoppingBag, Map, Calendar } from "lucide-react";
import Link from "next/link";

const socialCards = [
  { name: "Instagram", icon: InstagramIcon, desc: "Follow our daily energy, DJ sets and sunset stories.", cta: "Follow Us", link: "#" },
  { name: "WhatsApp", icon: MessageCircle, desc: "Direct channel for table bookings and instant enquiries.", cta: "Chat Now", link: "https://wa.me/919090909090" },
  { name: "Google Maps", icon: MapPin, desc: "Find us in the heart of Chandrasekharpur, Bhubaneswar.", cta: "Get Directions", link: "#" },
  { name: "Zomato", icon: ShoppingBag, desc: "Order your favorite Embassy flavors at home.", cta: "Order Now", link: "#" },
  { name: "Swiggy", icon: ShoppingBag, desc: "Bhubaneswar's elite cuisine delivered to your doorstep.", cta: "Order Now", link: "#" },
  { name: "District", icon: Map, desc: "Check our venue highlights and elite community.", cta: "View Venue", link: "#" },
  { name: "Facebook", icon: FacebookIcon, desc: "Stay updated with our latest events and weekend specials.", cta: "Connect", link: "#" },
  { name: "BookMyShow", icon: Calendar, desc: "Get tickets for our upcoming music and DJ events.", cta: "Book Tickets", link: "#" }
];

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4 font-bold">Connect With Us</h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
            The <span className="text-white/20">Contact</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-brand-gold" />
                        <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Location</h3>
                    </div>
                    <p className="text-xl font-medium leading-relaxed text-white">
                        Chandrasekharpur, <br />
                        Bhubaneswar, Odisha <br />
                        751024
                    </p>
                    <Link href="#" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-white/30 hover:text-brand-gold transition-colors pt-4">
                        <span>Get Directions</span>
                        <ArrowUpRight size={14} />
                    </Link>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-brand-gold" />
                        <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Contact</h3>
                    </div>
                    <p className="text-xl font-medium text-white">
                        +91 9090909090 <br />
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Opening Hours</h3>
                <div className="grid grid-cols-1 gap-4 max-w-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Mon - Thu</span>
                        <span className="text-sm font-bold text-white">12:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Fri - Sun</span>
                        <span className="text-sm font-bold text-brand-gold text-glow-amber">12:00 - 01:00</span>
                    </div>
                </div>
                <p className="text-white/20 text-[10px] uppercase tracking-widest italic">Dress Code: Smart Casual Preferred</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="h-[500px] w-full relative rounded-sm overflow-hidden border border-white/5 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.785444853037!2d85.8166!3d20.3233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090909090909%3A0x9090909090909090!2sChandrasekharpur%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
          </div>
        </div>

        {/* Discover Everywhere Section */}
        <section className="pt-24 border-t border-white/5">
            <div className="mb-20">
                <h2 className="text-brand-gold text-xs uppercase tracking-[0.5em] mb-4 font-bold">Discover</h2>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
                    EMBASSY <span className="text-white/20">EVERYWHERE</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialCards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-brand-gold/30 transition-all duration-500 flex flex-col h-full"
                    >
                        <div className="w-10 h-10 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
                            <card.icon size={18} />
                        </div>
                        <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter mb-2">{card.name}</h4>
                        <p className="text-white/40 text-xs leading-relaxed flex-grow mb-8 italic">{card.desc}</p>
                        <Link
                            href={card.link}
                            className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-gold inline-flex items-center space-x-2 hover:text-white transition-colors"
                        >
                            <span>{card.cta}</span>
                            <ArrowUpRight size={12} />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}

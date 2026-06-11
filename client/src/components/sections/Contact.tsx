import { MapPin, Phone, MessageCircle, Clock, Navigation, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Contact Details */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-secondary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                <Send size={14} className="mb-0.5" />
                <span>Contact Us</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Have questions? <br />
                <span className="text-primary italic">Reach out to us</span>
              </h3>
              <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-xl">
                Reach out to us and we&apos;ll be happy to assist you with your dental concerns. Our team is always here to help.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={30} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-2">Our Clinic</h4>
                  <p className="text-xl font-bold leading-relaxed max-w-xs">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={30} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-2">Call Us</h4>
                  <p className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-foreground/60 font-medium mt-1 uppercase text-xs tracking-widest">Available 10:00 AM - 09:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={30} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-2">Working Hours</h4>
                  <ul className="space-y-1 text-lg font-bold">
                    {siteConfig.contact.businessHours.map((hour, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <span className="text-foreground/40 font-medium w-36 text-sm">{hour.day}</span>
                        <span className="text-foreground/80">{hour.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="btn btn-primary h-16 px-10 space-x-3 text-lg"
              >
                <Phone size={22} />
                <span>Call Now</span>
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-emerald-500 text-white hover:bg-emerald-600 h-16 px-10 space-x-3 shadow-xl shadow-emerald-500/20 text-lg border-0"
              >
                <MessageCircle size={22} />
                <span>WhatsApp</span>
              </a>
              <a
                href={siteConfig.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline h-16 px-10 space-x-3 text-lg border-slate-200 text-foreground hover:bg-slate-50"
              >
                <Navigation size={22} />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="relative min-h-[500px] lg:h-auto w-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12)] border-8 border-slate-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.592759230015!2d85.8354554!3d20.2757175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7597c4369e9%3A0xa33c63e848bcbbeb!2sSmile%20Planet%20Dental%20Care!5e0!3m2!1sen!2sin!4v1781105045922!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smile Planet Dental Care Location"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { MapPin, Phone, MessageCircle, Clock, Navigation, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contact Details */}
          <div className="flex flex-col justify-center py-2">
            <div className="space-y-3 mb-8">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Send size={12} className="mb-0.5" />
                <span>Contact Us</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Have questions? <br />
                <span className="text-primary italic">Reach out to us</span>
              </h3>
            </div>

            <div className="grid gap-6 mb-8">
              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Our Clinic</h4>
                  <p className="text-lg font-bold leading-snug max-w-xs">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Call Us</h4>
                  <p className="text-xl md:text-2xl font-display font-bold text-primary">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Working Hours</h4>
                  <ul className="space-y-0.5 text-base font-bold">
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

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="btn btn-primary h-12 px-6 space-x-2 text-sm"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-emerald-500 text-white hover:bg-emerald-600 h-12 px-6 space-x-2 shadow-lg shadow-emerald-500/10 text-sm border-0"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href={siteConfig.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline h-12 px-6 space-x-2 text-sm border-slate-200 text-foreground hover:bg-slate-50"
              >
                <Navigation size={18} />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border-4 border-slate-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.592759230015!2d85.8354554!3d20.2757175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7597c4369e9%3A0xa33c63e848bcbbeb!2sSmile%20Planet%20Dental%20Care!5e0!3m2!1sen!2sin!4v1781105045922!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "../ui/Button";

export const Location = () => {
  return (
    <section id="location" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Location</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              Visit us at our modern clinic in the heart of Bhubaneswar. Easy access and ample parking available.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Plot No. 2405, Infront of Apollo Pharmacy,<br />
                    Golakha, Mancheswar, Bhubaneswar, Odisha 751010
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+91 7008520133</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400">Open Daily: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/HVF9a5JVVySmXVTs5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <Navigation size={20} /> Get Directions
              </Button>
            </a>
          </div>

          <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.578843930303!2d85.86125527420148!3d20.31769241182302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b84243e8da3%3A0xf52b34d4b754727f!2sMO%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1781091415684!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

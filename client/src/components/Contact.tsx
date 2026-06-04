import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                Contact <span className="text-medical-500">Details</span>
              </h2>
              <p className="text-lg text-slate-600">
                Visit our clinic for a professional consultation. We are located in the heart of Bhubaneswar for your convenience.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-500 group-hover:bg-medical-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed max-w-md">
                    Room No. 9, KAR Clinic OPD Building,<br />
                    Near MLA Colony, Near Aakash Institute,<br />
                    Unit 4 area, Bhubaneswar, Odisha, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/FLP4osnz1JwATmBy5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-medical-600 hover:underline pt-2"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-500 group-hover:bg-medical-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600">Primary: <a href="tel:+919999999999" className="hover:text-medical-600 transition-colors font-medium">+91 99999 99999</a></p>
                  <p className="text-slate-600">Clinic: <a href="tel:+919999999998" className="hover:text-medical-600 transition-colors font-medium">+91 99999 99998</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-500 group-hover:bg-medical-500 group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-green-600 font-bold text-sm uppercase tracking-wider">Open Till 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24599.607901771047!2d85.79712371083983!3d20.2766154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a76cee1e8e6d%3A0x1f2cbecd1ed5d2ed!2z8J2Xl_Cdl78uKPCdkIzwnZCa8J2QoynwnZej8J2XrvCdl7_wnZiB8J2XtfCdl64g8J2XoPCdl7zwnZe18J2XrvCdl73wnZeu8J2YgfCdl7_wnZeu!5e1!3m2!1sen!2sin!4v1780574829885!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

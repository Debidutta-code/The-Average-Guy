import { CLINIC_DATA } from "@/data/constants";
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <FadeIn direction="right" className="space-y-12">
            <div>
              <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4">
                Visit Our Clinic
              </h2>
              <p className="text-slate-600 text-lg mt-6 leading-relaxed">
                We are conveniently located in the heart of Bhubaneswar, Nayapalli region. Easy access from Unit 4 and nearby landmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-500 text-sm mt-1">{CLINIC_DATA.phone}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-500 text-sm mt-1">{CLINIC_DATA.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-500 text-sm mt-1">{CLINIC_DATA.address}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-500 text-sm mt-1">{CLINIC_DATA.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href={`https://wa.me/${CLINIC_DATA.whatsapp.replace(/[\s+]/g, '')}`}
                className="flex-1 py-4 bg-green-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-100"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </Link>
              <button className="flex-1 py-4 bg-medical-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-medical-600 transition-colors shadow-lg shadow-medical-100">
                <Phone className="w-5 h-5" />
                Call Clinic
              </button>
            </div>
          </FadeIn>

          {/* Map Embed */}
          <FadeIn direction="left" className="h-[500px] lg:h-full min-h-[400px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex flex-col items-center justify-center text-center p-8">
               <MapPin className="w-12 h-12 text-slate-400 mb-4" />
               <p className="text-slate-500 font-medium">Google Maps Integration</p>
               <p className="text-xs text-slate-400 mt-2 max-w-xs">Map showing Nayapalli, Bhubaneswar region will be loaded here.</p>
            </div>
            {/* Actual Iframe (Placeholder URL for Nayapalli, Bhubaneswar) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m2!1m3!1d3742.123456789!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <Link
              href="https://maps.google.com"
              target="_blank"
              className="absolute bottom-6 right-6 bg-white px-6 py-3 rounded-xl shadow-xl border border-slate-100 text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors"
            >
              Get Directions <ExternalLink className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        {/* Local SEO Text */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <p className="text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
            Are you looking for the best dermatologist in Bhubaneswar? Radiance Skin & Hair Clinic, led by {CLINIC_DATA.name}, offers premium clinical dermatology services in Nayapalli and Unit 4 regions. We specialize in acne treatment, hair loss therapy, laser hair removal, and anti-aging care. Serving patients from Saheed Nagar, Jayadev Vihar, Khandagiri, and all across Odisha. Our clinic is recognized for high patient satisfaction and clinical excellence in the capital city.
          </p>
        </div>
      </div>
    </section>
  );
}

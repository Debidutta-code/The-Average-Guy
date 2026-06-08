import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations, treatments } from "@/data/siteData";
import { MapPin, Phone, Clock, Star, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import JSONLD from "@/components/JSONLD";
import CallbackForm from "@/components/CallbackForm";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) return { title: "Location Not Found" };

  return {
    title: `${location.title} | SkinCare Clinic`,
    description: location.description,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `SkinCare Clinic ${location.city}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.split(',')[0],
      "addressLocality": location.city,
      "addressRegion": "OR",
      "postalCode": "751001",
      "addressCountry": "IN"
    },
    "telephone": location.phone,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2961,
      "longitude": 85.8245
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    }
  };

  return (
    <div className="pt-20">
      <JSONLD data={localBusinessSchema} />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                 <MapPin size={16} />
                 <span>Serving Patients in {location.city}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-playfair font-bold text-slate-900 leading-tight">
                {location.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Experience the highest standard of dermatological care in {location.city}. Our clinic is equipped with the latest technology for all your skin and hair needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-primary-600 transition-all text-center shadow-xl shadow-primary/25">
                  Book Appointment in {location.city}
                </Link>
                <a href={`tel:${location.phone}`} className="border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2">
                   <Phone size={20} />
                   <span>{location.phone}</span>
                </a>
              </div>
            </div>
            <div className="relative">
               <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-square relative">
                  <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=800&fit=crop" alt={`Clinic in ${location.city}`} fill className="object-cover" />
               </div>
               <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="flex text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                     </div>
                     <span className="font-bold text-slate-900">4.9/5 Rating</span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium italic">&quot;Best dermatologist in {location.city}, highly recommended!&quot;</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in the City */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold">Specialized Care in {location.city}</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Providing advanced medical and aesthetic solutions for all age groups.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treatments.map((t) => (
                <Link key={t.id} href={`/treatments/${t.slug}`} className="group p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <ShieldCheck size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">{t.title}</h3>
                   <p className="text-sm text-slate-500 line-clamp-2 mb-6">{t.shortDescription}</p>
                   <div className="flex items-center text-primary font-bold text-sm">
                      <span>View Details</span>
                      <ArrowRight size={16} className="ml-2 group-hover:ml-4 transition-all" />
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Location Details & Map */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-4 space-y-8">
                  <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                     <h3 className="text-2xl font-playfair font-bold mb-8">Contact Information</h3>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <MapPin className="text-primary mt-1" size={20} />
                           <div>
                              <p className="font-bold text-slate-900">Address</p>
                              <p className="text-sm text-slate-600">{location.address}</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <Phone className="text-primary mt-1" size={20} />
                           <div>
                              <p className="font-bold text-slate-900">Phone</p>
                              <p className="text-sm text-slate-600">{location.phone}</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <Clock className="text-primary mt-1" size={20} />
                           <div>
                              <p className="font-bold text-slate-900">Hours</p>
                              <p className="text-sm text-slate-600">Mon-Sat: 10AM - 8PM</p>
                              <p className="text-sm text-slate-600">Sunday: Closed</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <CallbackForm />
               </div>
               <div className="lg:col-span-8 space-y-8">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-video relative border-8 border-white">
                     <iframe
                       src={location.mapUrl}
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                     />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><CheckCircle2 /></div>
                        <p className="font-bold text-slate-900">Easy Accessibility</p>
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 /></div>
                        <p className="font-bold text-slate-900">Parking Available</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Localized CTA */}
      <section className="py-24 bg-primary text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold">Trusted Skin Care in {location.city}</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">Join our {location.city} community of happy patients. Schedule your consultation today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
               <Link href="/book" className="bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all">
                  Book Online Now
               </Link>
               <a href={`tel:${location.phone}`} className="border-2 border-white/30 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                  Call {location.phone}
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}

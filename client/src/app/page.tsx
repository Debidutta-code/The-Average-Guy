import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Users, Award, Phone } from "lucide-react";
import { treatments, doctorProfile, testimonials } from "@/data/siteData";
import JSONLD from "@/components/JSONLD";

export default function Home() {
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "SkinCare Clinic",
    "alternateName": "SkinCare Dermatology & Aesthetics",
    "url": "https://www.skincareclinic.com",
    "logo": "https://www.skincareclinic.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Avenue",
      "addressLocality": "Wellness District",
      "addressRegion": "ST",
      "postalCode": "560001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  };

  return (
    <div className="overflow-hidden">
      <JSONLD data={medicalClinicSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider">
                <ShieldCheck size={18} />
                <span>Premium Dermatology Care</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-950 leading-[1.1]">
                Reveal Your <span className="text-primary italic">Natural</span> Radiance
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Advanced clinical dermatology and aesthetic treatments tailored to your unique skin needs. Expert care by board-certified specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/book" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-primary-600 transition-all shadow-lg shadow-primary/30 text-center">
                  Book Consultation
                </Link>
                <Link href="/treatments" className="border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all text-center">
                  Our Treatments
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                      <Image src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="Patient" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">2,000+ Patient Successes</p>
                </div>
              </div>
            </div>
            <div className="relative px-4 sm:px-0">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop"
                  alt="Dermatology Treatment"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:flex items-center space-x-4 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 leading-none">15+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Years Expert</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:flex items-center space-x-4 border border-slate-100">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 leading-none">10k+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-slate-100">
              <div className="text-center px-4">
                <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2">15+</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">Years Experience</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">Patients Treated</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2">20+</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">Medical Awards</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2">99%</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Our Specialties</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mt-4 mb-6">Featured Treatments</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover our most popular services designed to help you achieve your skin and hair goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-72">
                  <Image
                    src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop`}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    {treatment.category}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{treatment.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                    {treatment.shortDescription}
                  </p>
                  <Link href={`/treatments/${treatment.slug}`} className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
                    <span className="text-sm uppercase tracking-widest">Explore Details</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/treatments" className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-all inline-block">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&h=1000&fit=crop"
                  alt={doctorProfile.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full -z-10 blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl" />
            </div>
            <div className="space-y-10">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">The Specialist</span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 leading-tight mt-4">
                  Meet {doctorProfile.name}
                </h2>
                <p className="text-primary font-bold text-lg mt-2">{doctorProfile.title}</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed italic">
                &quot;{doctorProfile.philosophy}&quot;
              </p>
              <div className="grid grid-cols-1 gap-5">
                {doctorProfile.qualifications.slice(0, 3).map((q, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm leading-tight">{q}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center text-primary font-bold text-lg group">
                <span className="border-b-2 border-primary/20 group-hover:border-primary transition-all pb-1">View Professional Biography</span>
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4 mb-6">Patient Stories</h2>
            <div className="flex justify-center text-amber-400 space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">Rated 4.9/5 by 1,000+ happy patients on Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[2rem] hover:bg-white/[0.07] transition-all">
                <p className="text-xl italic text-slate-200 leading-relaxed mb-10">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-primary font-bold text-xl border border-white/10">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white">{t.name}</p>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">{t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary p-12 md:p-24 rounded-[3rem] text-center space-y-10 relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white max-w-3xl mx-auto leading-tight relative z-10">
              Ready to Begin Your Skin Transformation?
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto relative z-10">
              Schedule your consultation today and take the first step towards your healthiest, most radiant skin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link href="/book" className="bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-xl">
                Book Appointment
              </Link>
              <a href="tel:+1234567890" className="flex items-center justify-center space-x-3 text-white border-2 border-white/30 px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                <Phone size={24} />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

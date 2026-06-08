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
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <ShieldCheck size={18} />
                <span>Trusted Dermatology Clinic</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-950 leading-tight">
                Reveal Your <span className="text-primary italic">Natural</span> Radiance
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Advanced clinical dermatology and aesthetic treatments tailored to your unique skin needs. Expert care by board-certified specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-600 transition-all shadow-lg shadow-primary/30 text-center">
                  Book Your Consultation
                </Link>
                <Link href="/treatments" className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all text-center">
                  Explore Treatments
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden relative">
                      <Image src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="Patient" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-medium text-slate-600">Loved by 2,000+ Happy Patients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop"
                  alt="Dermatology Treatment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">15+</p>
                    <p className="text-sm text-slate-500 font-medium">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">10k+</p>
                    <p className="text-sm text-slate-500 font-medium">Patients Treated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-bold text-primary">15+</h3>
              <p className="text-slate-500 font-medium">Years of Experience</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-bold text-primary">10,000+</h3>
              <p className="text-slate-500 font-medium">Successful Procedures</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-bold text-primary">20+</h3>
              <p className="text-slate-500 font-medium">Expert Specialists</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-bold text-primary">99%</h3>
              <p className="text-slate-500 font-medium">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">Our Featured Treatments</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover our most popular services designed to help you achieve your skin and hair goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop`}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                    {treatment.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{treatment.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {treatment.shortDescription}
                  </p>
                  <Link href={`/treatments/${treatment.slug}`} className="inline-flex items-center text-primary font-bold hover:space-x-2 transition-all">
                    <span>Learn More</span>
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
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&h=1000&fit=crop"
                  alt={doctorProfile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full -z-10" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-50 rounded-full -z-10" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 leading-tight">
                Meet {doctorProfile.name}
              </h2>
              <p className="text-primary font-bold text-xl">{doctorProfile.title}</p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {doctorProfile.philosophy}
              </p>
              <div className="space-y-4">
                {doctorProfile.qualifications.map((q, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="font-medium">{q}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center text-primary font-bold text-lg hover:underline underline-offset-8">
                Read Full Biography
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 italic">Words from Our Patients</h2>
            <div className="flex justify-center text-amber-400 space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-slate-400 max-w-xl mx-auto">Average 4.9/5 stars based on 1,000+ Google Reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl">
                <p className="text-xl italic text-slate-300 leading-relaxed mb-8">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-slate-800 rounded-full" />
                  <div>
                    <p className="font-bold text-lg">{t.name}</p>
                    <p className="text-primary text-sm font-medium">{t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 p-12 md:p-20 rounded-[40px] backdrop-blur-sm border border-white/20 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold max-w-3xl mx-auto leading-tight">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto">
              Schedule your consultation today and take the first step towards your healthiest skin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/book" className="bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-2xl">
                Book Appointment
              </Link>
              <a href="tel:+1234567890" className="flex items-center justify-center space-x-3 text-white border-2 border-white/30 px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                <Phone size={24} />
                <span>Call +1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

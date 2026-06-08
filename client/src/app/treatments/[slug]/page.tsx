import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/data/siteData";
import { Clock, Shield, HelpCircle, Star, DollarSign, Zap } from "lucide-react";
import JSONLD from "@/components/JSONLD";
import CallbackForm from "@/components/CallbackForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: `${treatment.title} | Premium Skin Treatment`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": treatment.title,
    "description": treatment.fullDescription,
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dermatology"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": treatment.title,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": treatment.reviews?.length || 10
    },
    "review": treatment.reviews?.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author },
      "datePublished": r.date,
      "reviewBody": r.comment,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating }
    }))
  };

  return (
    <div className="">
      <JSONLD data={treatmentSchema} />
      <JSONLD data={reviewSchema} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">{treatment.category}</span>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 leading-tight">
                {treatment.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {treatment.fullDescription}
              </p>

              {/* Pricing & Session Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-slate-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600"><DollarSign size={20}/></div>
                    <div><p className="text-[10px] font-bold text-slate-400 uppercase">Starts At</p><p className="font-bold text-slate-900">{treatment.pricing?.startingAt}</p></div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Zap size={20}/></div>
                    <div><p className="text-[10px] font-bold text-slate-400 uppercase">Duration</p><p className="font-bold text-slate-900">{treatment.pricing?.duration}</p></div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600"><Clock size={20}/></div>
                    <div><p className="text-[10px] font-bold text-slate-400 uppercase">Sessions</p><p className="font-bold text-slate-900">{treatment.pricing?.sessions.split(' ')[0]} Sessions</p></div>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-600 transition-all text-center shadow-lg shadow-primary/25">
                  Book Your Appointment
                </Link>
                <a href="tel:+1234567890" className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all text-center">
                  Call to Inquire
                </a>
              </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden aspect-square md:aspect-video shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&h=800&fit=crop"
                alt={treatment.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Clinical Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treatment.symptoms && treatment.symptoms.length > 0 && (
                  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                    <h2 className="text-xl font-playfair font-bold mb-4 italic">Symptoms</h2>
                    <ul className="space-y-2">
                      {treatment.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {treatment.causes && treatment.causes.length > 0 && (
                  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                    <h2 className="text-xl font-playfair font-bold mb-4 italic">Causes</h2>
                    <ul className="space-y-2">
                      {treatment.causes.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {treatment.riskFactors && treatment.riskFactors.length > 0 && (
                  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                    <h2 className="text-xl font-playfair font-bold mb-4 italic">Risk Factors</h2>
                    <ul className="space-y-2">
                      {treatment.riskFactors.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {treatment.diagnosis && (
                  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                    <h2 className="text-xl font-playfair font-bold mb-4 italic">Diagnosis</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{treatment.diagnosis}</p>
                  </div>
                )}
              </div>

              <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100">
                <h2 className="text-3xl font-playfair font-bold mb-6 italic">Procedure Details</h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">{treatment.procedureDetails}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4 p-6 bg-slate-50 rounded-2xl">
                    <h3 className="font-bold flex items-center space-x-2 text-primary">
                      <Clock size={20} />
                      <span>Recovery Info</span>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{treatment.recovery}</p>
                  </div>
                  <div className="space-y-4 p-6 bg-slate-50 rounded-2xl">
                    <h3 className="font-bold flex items-center space-x-2 text-primary">
                      <Shield size={20} />
                      <span>Long-term Results</span>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{treatment.expectedResults}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4 italic">Benefits</h3>
                    <ul className="space-y-2">
                      {treatment.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-green-500 font-bold">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4 italic">Potential Risks</h3>
                    <ul className="space-y-2">
                      {treatment.risks.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-red-400 font-bold">!</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="space-y-8">
                 <h2 className="text-3xl font-playfair font-bold">Patient Experiences</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {treatment.reviews?.map((review, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                         <div className="flex text-amber-400 mb-4">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                         </div>
                         <p className="text-slate-600 italic mb-6">&quot;{review.comment}&quot;</p>
                         <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span>{review.author}</span>
                            <span>{review.date}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6">
                <h2 className="text-3xl font-playfair font-bold italic">Common Questions</h2>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center space-x-2">
                        <HelpCircle className="text-primary" size={18} />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <CallbackForm />

              <div className="bg-primary p-8 rounded-[40px] text-white">
                <h3 className="text-2xl font-playfair font-bold mb-4 italic">Next Available Slot</h3>
                <p className="text-primary-100 mb-8 leading-relaxed">Book today and get a personalized skin analysis worth $50 for free.</p>
                <Link href="/book" className="block w-full bg-white text-primary text-center py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all mb-4">
                  Book Slot Now
                </Link>
                <p className="text-center text-xs text-primary-100">Instant confirmation via email</p>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Related Services</h3>
                <div className="space-y-4">
                  {treatments.filter(t => t.slug !== slug).slice(0, 3).map((t) => (
                    <Link key={t.id} href={`/treatments/${t.slug}`} className="flex items-center group">
                      <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 relative">
                         <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=100&h=100&fit=crop" alt={t.title} fill className="object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-slate-900 group-hover:text-primary transition-colors text-sm">{t.title}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{t.pricing?.startingAt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

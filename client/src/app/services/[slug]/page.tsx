import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesContent } from "@/data/services-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, ChevronRight, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { JSONLD } from "@/components/seo/JSONLD";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent[slug as keyof typeof servicesContent];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | MO Dental Clinic`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesContent[slug as keyof typeof servicesContent];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.description,
    "procedureType": "Surgical",
    "bodyLocation": "Mouth",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "MO Dental Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No-2405, Golakha, Mancheswar",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751010",
        "addressCountry": "IN"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="pt-32 pb-20">
      <JSONLD data={serviceSchema} />
      <JSONLD data={faqSchema} />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <SectionHeading
              badge="Specialized Service"
              title={service.title}
              isH1={true}
              description={service.content}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/#book">
                <Button size="lg" className="rounded-2xl">
                  <Calendar size={18} className="mr-2" /> Book Appointment
                </Button>
              </Link>
              <a href="tel:+917008520133">
                <Button variant="outline" size="lg" className="rounded-2xl">
                  <Phone size={18} className="mr-2" /> Call Expert
                </Button>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-primary">
              <service.icon size={32} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <Card key={i} className="p-8 border-slate-100 shadow-premium">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-primary text-white border-none shadow-2xl shadow-primary/30">
              <h4 className="text-2xl font-black mb-6 leading-tight">Need a Consultation?</h4>
              <p className="text-white/80 font-medium mb-8">
                Our experts are here to help you understand the best treatment for your specific needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Phone</div>
                    <div className="font-bold">+91 70085 20133</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Schedule</div>
                    <div className="font-bold">Mon - Sun, 9AM - 9PM</div>
                  </div>
                </div>
              </div>
              <Link href="/#book">
                <Button variant="white" className="w-full h-14 rounded-2xl">Book Now</Button>
              </Link>
            </Card>

            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-6">Other Services</h4>
              <ul className="space-y-4">
                {Object.entries(servicesContent)
                  .filter(([s]) => s !== slug)
                  .map(([s, data]) => (
                    <li key={s}>
                      <Link href={`/services/${s}`} className="flex items-center justify-between text-sm font-bold text-slate-600 hover:text-primary transition-colors group">
                        {data.title.split('|')[0].replace('Best ', '').replace('Top ', '')}
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

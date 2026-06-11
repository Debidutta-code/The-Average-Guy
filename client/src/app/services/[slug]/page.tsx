import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { Metadata } from "next";
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Bhubaneswar`,
    description: `${service.description} Best ${service.title.toLowerCase()} in Bhubaneswar at Smile Planet Dental Care. Painless treatment with expert dentists.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);

  if (!service) notFound();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <nav className="flex items-center space-x-2 text-sm text-foreground/40 mb-4">
                <Link href="/" className="hover:text-primary transition-colors text-nowrap">Home</Link>
                <span>/</span>
                <span className="text-primary font-medium text-nowrap">{service.title}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                {service.title} in <span className="text-primary">Bhubaneswar</span>
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed">
                {service.description} We offer premium, painless, and affordable {service.title.toLowerCase()} at Smile Planet Dental Care, Kharvela Nagar.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#book" className="btn btn-primary h-14 px-8">Book Appointment</Link>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="btn btn-outline h-14 px-8">Call Now</a>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={service.image}
                alt={`${service.title} in Bhubaneswar`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-3xl font-display font-bold mb-6">About {service.title}</h2>
                <p className="text-foreground/60 leading-relaxed mb-8">
                  At Smile Planet Dental Care, we understand that a healthy smile is vital to your overall well-being. Our {service.title.toLowerCase()} is designed to be effective, painless, and tailored to your specific needs. Using modern technology and the latest clinical protocols, we ensure the best possible outcomes for every patient.
                </p>

                <h3 className="text-2xl font-bold mb-6">Why choose us for {service.title}?</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Experienced Specialists",
                    "Painless Treatment",
                    "Modern Digital X-rays",
                    "Sterilized Environment",
                    "Affordable Pricing",
                    "Patient-First Approach"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="text-primary shrink-0" size={24} />
                      <span className="font-medium text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-[32px] p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Common Questions about {service.title}</h3>
                <div className="space-y-6">
                  {[
                    { q: `Is ${service.title.toLowerCase()} painful?`, a: "We use advanced anesthesia and gentle techniques to ensure the process is as painless as possible." },
                    { q: `How long does the treatment take?`, a: "The duration depends on the complexity of the case, but we strive to complete the procedure efficiently without compromising quality." }
                  ].map((faq, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="font-bold text-foreground">{faq.q}</h4>
                      <p className="text-foreground/60 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-primary rounded-[32px] p-8 text-white shadow-xl shadow-primary/20">
                <h4 className="text-2xl font-bold mb-6">Book Your Visit</h4>
                <p className="mb-8 opacity-90 leading-relaxed">
                  Start your journey towards a healthier smile today.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center space-x-3 bg-white text-primary w-full py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    className="flex items-center justify-center space-x-3 bg-emerald-500 text-white w-full py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors border border-emerald-400"
                  >
                    <MessageSquare size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100">
                <h4 className="text-xl font-bold mb-6">Other Services</h4>
                <ul className="space-y-4">
                  {services.filter(s => s.slug !== `/services/${slug}`).slice(0, 5).map((s) => (
                    <li key={s.id}>
                      <Link
                        href={s.slug}
                        className="flex items-center justify-between group text-foreground/60 hover:text-primary font-medium transition-colors"
                      >
                        <span>{s.title}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

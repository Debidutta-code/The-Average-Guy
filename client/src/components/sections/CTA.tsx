import Link from "next/link";
import { Phone, Calendar, ArrowRight, Star } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-12 md:py-16 container-custom">
      <div className="bg-gradient-to-br from-primary to-secondary rounded-[40px] md:rounded-[60px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Star size={14} className="fill-current text-accent" />
              <span>Experience Premium Care</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Ready for a <span className="text-accent italic">Perfect</span> Smile?
            </h2>
            <p className="text-white/80 text-lg md:text-xl">
              Join 47+ happy patients in Bhubaneswar and experience painless, high-tech dental care tailored to your needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#book"
              className="bg-accent hover:bg-accent/90 text-primary h-16 px-10 rounded-2xl flex items-center justify-center space-x-3 font-bold text-lg transition-all shadow-xl shadow-black/10 hover:-translate-y-1 active:translate-y-0"
            >
              <Calendar size={20} />
              <span>Book Appointment</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+918249329033"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 h-16 px-10 rounded-2xl flex items-center justify-center space-x-3 font-bold text-lg transition-all hover:-translate-y-1 active:translate-y-0"
            >
              <Phone size={20} />
              <span>Call +91 82493 29033</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

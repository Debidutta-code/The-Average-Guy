import Link from "next/link";
import { Button } from "../ui/Button";
import { Phone, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-medical-gradient rounded-[50px] p-8 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Book Your Dental Consultation Today
            </h2>
            <p className="text-blue-50 text-lg mb-10">
              Take the first step towards a healthier, brighter smile. Our expert team is ready to provide you with the best dental care in Bhubaneswar.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#book">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 gap-2">
                  <Calendar size={20} /> Book Appointment
                </Button>
              </Link>
              <a href="tel:7008520133">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary gap-2">
                  <Phone size={20} /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

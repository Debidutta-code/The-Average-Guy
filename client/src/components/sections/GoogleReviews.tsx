import { Star, ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";

export const GoogleReviews = () => {
  return (
    <section className="py-16 bg-medical-gradient text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by 269+ Patients on Google
            </h2>
            <p className="text-blue-100 text-lg max-w-xl">
              We take pride in providing exceptional dental care. Read our patient reviews and see why we are Bhubaneswar&apos;s top-rated dental clinic.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/HVF9a5JVVySmXVTs5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 gap-2">
              View All Reviews <ExternalLink size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

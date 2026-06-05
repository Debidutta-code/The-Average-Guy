import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/sections/Reviews";
import FAQ from "@/sections/FAQ";
import GoogleMaps from "@/sections/GoogleMaps";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />

      {/* Booking Integration Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 lg:sticky lg:top-32">
              <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Book an Appointment</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Start Your Journey to a <span className="text-primary italic">Healthier</span> Smile Today.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Schedule your visit at Kapoor&apos;s Dental Care Centre. Whether it&apos;s a routine checkup or a specialized procedure, our expert team is here to provide the best care possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">1</div>
                   <h4 className="font-bold text-slate-900 mb-1">Fill the Form</h4>
                   <p className="text-xs text-slate-500">Provide your basic contact and treatment details.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">2</div>
                   <h4 className="font-bold text-slate-900 mb-1">Wait for Call</h4>
                   <p className="text-xs text-slate-500">Our clinic will call you to confirm the time slot.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Reviews />
      <FAQ />
      <GoogleMaps />
      <Contact />
    </div>
  );
}

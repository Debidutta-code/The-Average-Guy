import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Transformations } from "@/components/sections/Transformations";
import { MeetDoctor } from "@/components/sections/MeetDoctor";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { TreatmentProcess } from "@/components/sections/TreatmentProcess";
import { FAQ } from "@/components/sections/FAQ";
import { BookingForm } from "@/components/sections/BookingForm";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <CTA />
      <Transformations />
      <MeetDoctor />
      <Gallery />
      <Testimonials />
      <TreatmentProcess />
      <FAQ />
      <BookingForm />
      <Contact />
    </>
  );
}

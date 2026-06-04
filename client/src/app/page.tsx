import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutDoctor from "@/components/sections/AboutDoctor";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import BeforeAfter from "@/components/sections/BeforeAfter";
import AppointmentSystem from "@/components/sections/AppointmentSystem";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FloatingActions from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutDoctor />
      <Services />
      <Gallery />
      <BeforeAfter />
      <AppointmentSystem />
      <Reviews />
      <FAQ />
      <Contact />
      <FloatingActions />
    </>
  );
}

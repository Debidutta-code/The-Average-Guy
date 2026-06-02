import Hero from "@/components/sections/Hero";
import BrainShowcase from "@/components/sections/BrainShowcase";
import AboutDoctor from "@/components/sections/AboutDoctor";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Conditions from "@/components/sections/Conditions";
import Technology from "@/components/sections/Technology";
import SuccessStories from "@/components/sections/SuccessStories";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";
import BookingForm from "@/components/sections/BookingForm";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrainShowcase />
      <AboutDoctor />
      <ExperienceTimeline />
      <Conditions />
      <Technology />
      <SuccessStories />
      <Reviews />
      <Pricing />
      <Gallery />
      <BookingForm />
      <FAQ />
      <Contact />
      <div className="h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Premium Healthcare Experience</p>
      </div>
    </main>
  );
}

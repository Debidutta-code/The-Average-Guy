import Hero from "@/components/sections/Hero";
import Storytelling from "@/components/sections/Storytelling";
import About from "@/components/sections/About";
import Locations from "@/components/sections/Locations";
import MembershipPlans from "@/components/sections/MembershipPlans";
import Programs from "@/components/sections/Programs";
import Trainers from "@/components/sections/Trainers";
import TransformationShowcase from "@/components/sections/TransformationShowcase";
import EquipmentShowcase from "@/components/sections/EquipmentShowcase";
import LiveGymExperience from "@/components/sections/LiveGymExperience";
import MobileAppPromotion from "@/components/sections/MobileAppPromotion";
import Testimonials from "@/components/sections/Testimonials";
import BMITools from "@/components/sections/BMITools";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Storytelling />
      <About />
      <Programs />
      <TransformationShowcase />
      <MembershipPlans />
      <Locations />
      <Trainers />
      <EquipmentShowcase />
      <LiveGymExperience />
      <MobileAppPromotion />
      <Testimonials />
      <BMITools />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}

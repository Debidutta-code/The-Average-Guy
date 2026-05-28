import { Hero } from "@/components/home/Hero";
import { RooftopOdyssey } from "@/components/home/RooftopOdyssey";
import { AboutSection } from "@/components/home/AboutSection";
import { EventsSection } from "@/components/home/EventsSection";
import { MenuShowcase } from "@/components/home/MenuShowcase";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { OopreTable } from "@/components/home/OopreTable";
import { FloatingReservation } from "@/components/home/FloatingReservation";
import { CommunityBannerLoader } from "@/components/community/CommunityBannerLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark-blue">
      <Navbar />
      <Hero />
      <RooftopOdyssey />
      <AboutSection />
      <EventsSection />
      <MenuShowcase />
      <GalleryPreview />
      <ReviewsSection />
      <OopreTable />
      <CommunityBannerLoader />
      <Footer />
      <FloatingReservation />
    </main>
  );
}

import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { EventsSection } from "@/components/home/EventsSection";
import { MenuShowcase } from "@/components/home/MenuShowcase";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CommunityBannerLoader } from "@/components/community/CommunityBannerLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-ivory">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <MenuShowcase />
      <GalleryPreview />
      <ReviewsSection />
      <CommunityBannerLoader />
      <Footer />
    </main>
  );
}

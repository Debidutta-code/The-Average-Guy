import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { Bottle } from "@/components/animations/Bottle";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { FloatingParticles } from "@/components/animations/FloatingParticles";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-[200vh]">
        <BackgroundEffects />
        <FloatingParticles />
        <Bottle />

        <HeroSection />
        <ProductSection />
      </main>
    </SmoothScroll>
  );
}

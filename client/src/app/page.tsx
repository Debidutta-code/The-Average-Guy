import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { Bottle3D } from "@/components/animations/Bottle3D";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { FloatingParticles } from "@/components/animations/FloatingParticles";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-[200vh]">
        <BackgroundEffects />
        <FloatingParticles />
        <Bottle3D />

        <HeroSection />
        <ProductSection />
      </main>
    </SmoothScroll>
  );
}

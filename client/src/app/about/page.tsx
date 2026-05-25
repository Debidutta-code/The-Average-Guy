import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12">
          OUR <span className="text-brand-orange">STORY</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              The Average Guy was born from a simple idea: to create a space where everyone feels at home, yet experiences the extraordinary. Nestled in the heart of Patharagadia, Bhubaneswar, we are more than just a cafe—we are a community.
            </p>
            <p>
              Our space is designed for the modern individual. Whether you're looking for a quiet corner to work, a vibrant spot to meet friends, or a platform to showcase your talent, we've got you covered.
            </p>
            <p>
              We take pride in our coffee, sourcing the finest beans and crafting each cup with precision. Our menu is a fusion of global flavors and local favorites, all served in an atmosphere that's as premium as our offerings.
            </p>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80&w=2070&auto=format&fit=crop" alt="Cafe Culture" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </main>
  );
}

import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  );
}

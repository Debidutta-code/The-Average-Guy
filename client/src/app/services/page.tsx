import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Services />
      </main>
      <Footer />
    </>
  );
}

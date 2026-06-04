import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

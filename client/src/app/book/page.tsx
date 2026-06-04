import AppointmentForm from "@/components/AppointmentForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}

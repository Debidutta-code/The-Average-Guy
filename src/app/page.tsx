import Hero from "@/components/Hero";
import TreatmentHub from "@/components/TreatmentHub";
import TreatmentExplorer from "@/components/TreatmentExplorer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DoctorProfile from "@/components/DoctorProfile";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TreatmentHub />
      <TreatmentExplorer />
      <BeforeAfterSlider />
      <DoctorProfile />
      <BookingForm />
    </main>
  );
}

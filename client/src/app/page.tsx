"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { TreatmentProcess } from "@/components/sections/TreatmentProcess";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { BookingForm, AppointmentFormData } from "@/components/sections/BookingForm";
import { submitAppointment } from "@/app/actions/appointment";
import { Modal } from "@/components/ui/Modal";
import { CheckCircle2, XCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    message: string;
  }>({
    isOpen: false,
    type: "success",
    message: "",
  });

  const handleBookingSubmit = async (data: AppointmentFormData) => {
    setIsLoading(true);
    try {
      const result = await submitAppointment({
        patientName: data.patientName,
        patientPhone: data.patientPhone,
        patientEmail: data.patientEmail,
        date: data.date,
        time: data.time,
        reason: data.reason,
        message: data.message
      });

      if (result.success) {
        setModalState({
          isOpen: true,
          type: "success",
          message: "Appointment request submitted successfully. Our clinic will contact you shortly.",
        });
      } else {
        throw new Error(result.error || "Failed to submit appointment");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setModalState({
        isOpen: true,
        type: "error",
        message: "Something went wrong. Please try again or call us directly at 70085 20133.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative">
      <Hero />
      <TrustMetrics />
      <WhyChooseUs />
      <About />
      <Services />
      <BeforeAfter />
      <DoctorProfile />
      <TreatmentProcess />
      <Testimonials />
      <BookingForm onSubmit={handleBookingSubmit} isLoading={isLoading} />
      <Gallery />
      <FAQ />
      <Contact />
      <Location />

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-4 rounded-2xl bg-primary text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>

      {/* Success/Error Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.type === "success" ? "Notification" : "Attention"}
      >
        <div className="text-center">
          <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
            modalState.type === "success" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
          }`}>
            {modalState.type === "success" ? <CheckCircle2 size={40} /> : <XCircle size={40} />}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {modalState.type === "success" ? "Request Submitted!" : "Submission Failed"}
          </h3>
          <p className="text-slate-600 font-medium mb-8">
            {modalState.message}
          </p>
          <Button
            className="w-full h-14 rounded-2xl"
            onClick={() => setModalState({ ...modalState, isOpen: false })}
          >
            Close
          </Button>
        </div>
      </Modal>
    </main>
  );
}

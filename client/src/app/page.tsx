"use client";

import { useState } from "react";
import axios from "axios";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Location } from "@/components/sections/Location";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { BookingForm, AppointmentFormData } from "@/components/sections/BookingForm";
import { Modal } from "@/components/ui/Modal";
import { CheckCircle2, XCircle, Phone, ArrowUp } from "lucide-react";
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
      const apiUrl = process.env.NEXT_PUBLIC_APPOINTMENT_API_URL || "http://localhost:5000/api/trigger-appointment";
      const response = await axios.post(apiUrl, {
        apiSecret: process.env.NEXT_PUBLIC_API_SECRET || "SECRET_KEY_FOR_JWT",
        clinicName: "MO Dental Clinic",
        doctorEmail: "debiduttaacharya.dev@gmail.com",
        patientName: data.patientName,
        patientPhone: data.patientPhone,
        date: data.date,
        time: data.time,
        reason: data.reason,
      });

      if (response.status === 200 || response.status === 201) {
        setModalState({
          isOpen: true,
          type: "success",
          message: "Appointment request submitted successfully. Our clinic will contact you shortly.",
        });
      } else {
        throw new Error("Failed to submit appointment");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setModalState({
        isOpen: true,
        type: "error",
        message: "Something went wrong. Please try again or call us directly at 7008520133.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative">
      <Hero />
      <TrustMetrics />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Testimonials />
      <BookingForm onSubmit={handleBookingSubmit} isLoading={isLoading} />
      <DoctorProfile />
      <FAQ />
      <Gallery />
      <GoogleReviews />
      <Location />
      <Contact />
      <CTA />

      {/* Success/Error Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.type === "success" ? "Success!" : "Error"}
      >
        <div className="flex flex-col items-center text-center py-4">
          {modalState.type === "success" ? (
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={48} />
            </div>
          ) : (
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <XCircle size={48} />
            </div>
          )}
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            {modalState.message}
          </p>
          <Button
            className="w-full"
            onClick={() => setModalState({ ...modalState, isOpen: false })}
          >
            Close
          </Button>
        </div>
      </Modal>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a
          href="https://wa.me/917008520133"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a
          href="tel:7008520133"
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Phone size={28} />
        </a>
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-white dark:bg-slate-800 text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700"
          >
            <ArrowUp size={28} />
          </button>
        )}
      </div>
    </main>
  );
}

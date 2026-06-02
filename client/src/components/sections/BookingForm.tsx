"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Stethoscope,
  Calendar as CalendarIcon,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import confetti from "canvas-confetti";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    symptoms: "",
    date: "",
    time: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success step
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#64FFDA", "#ffffff"],
    });
  };

  const steps = [
    { title: "Personal Details", icon: User },
    { title: "Clinical Symptoms", icon: Stethoscope },
    { title: "Preferred Date", icon: CalendarIcon },
    { title: "Confirmation", icon: CheckCircle2 },
  ];

  return (
    <section id="book" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden">
          {/* Progress Bar */}
          {step < 5 && (
            <div className="mb-12">
              <div className="flex justify-between mb-4">
                {steps.map((s, i) => (
                  <div key={i} className={`flex flex-col items-center gap-2 ${step > i ? "text-primary" : "text-muted-foreground"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step > i ? "border-primary bg-primary/10" : "border-white/10"}`}>
                      <s.icon size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">{s.title}</span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold font-playfair mb-8">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="h-14 bg-white/5 border-white/10 rounded-xl"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-white/5 border-white/10 rounded-xl" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 99999 99999" className="h-14 bg-white/5 border-white/10 rounded-xl" required />
                      </div>
                    </div>
                  </div>
                  <Button type="button" onClick={nextStep} className="w-full h-14 rounded-xl text-lg font-bold group">
                    Next Step <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold font-playfair mb-8">Clinical Symptoms</h3>
                  <div className="space-y-4">
                    <Label htmlFor="symptoms">Describe your symptoms briefly</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Frequency of headaches, any numbness, dizziness etc."
                      className="min-h-[150px] bg-white/5 border-white/10 rounded-xl p-4"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-xl font-bold glass">
                      <ChevronLeft className="mr-2" /> Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex-[2] h-14 rounded-xl text-lg font-bold">
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold font-playfair mb-8">Preferred Schedule</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" className="h-14 bg-white/5 border-white/10 rounded-xl" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input id="time" type="time" className="h-14 bg-white/5 border-white/10 rounded-xl" required />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-xl font-bold glass">
                      <ChevronLeft className="mr-2" /> Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex-[2] h-14 rounded-xl text-lg font-bold">
                      Review & Confirm
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold font-playfair mb-8">Confirm Details</h3>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
                    <p className="flex justify-between"><span className="text-muted-foreground">Name:</span> <span className="font-bold">{formData.name || "N/A"}</span></p>
                    <p className="flex justify-between"><span className="text-muted-foreground">Service:</span> <span className="font-bold text-primary">Neurological Consultation</span></p>
                    <p className="text-xs text-muted-foreground pt-4 border-t border-white/5">
                      By clicking confirm, you agree to our privacy policy and clinical terms.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-xl font-bold glass">
                      <ChevronLeft className="mr-2" /> Edit
                    </Button>
                    <Button type="submit" className="flex-[2] h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90">
                      Confirm Appointment
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-bold font-playfair mb-4">Request Received!</h3>
                  <p className="text-muted-foreground text-lg mb-8">
                    Our medical concierge will contact you within 2 hours to confirm your final slot.
                  </p>
                  <Button type="button" onClick={() => setStep(1)} className="rounded-full px-12 h-12">
                    Book Another
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

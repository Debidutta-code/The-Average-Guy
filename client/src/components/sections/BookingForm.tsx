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
  ChevronLeft,
  Clock,
  Video,
  Users,
  MapPin,
  ShieldCheck
} from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import { TextReveal, FadeIn } from "@/components/ui/Animations";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [consultationType, setConsultationType] = useState("in-person");
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
    setStep(5);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#64FFDA", "#ffffff"],
    });
  };

  const steps = [
    { title: "Profile", icon: User },
    { title: "Symptoms", icon: Stethoscope },
    { title: "Schedule", icon: CalendarIcon },
    { title: "Review", icon: CheckCircle2 },
  ];

  return (
    <section id="book" className="bg-background">
      <div className="container">
        <div className="mb-16 text-center lg:text-left">
           <TextReveal>
             <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-4">Book Your <span className="text-primary italic">Consultation</span></h2>
           </TextReveal>
           <p className="text-muted-foreground text-base max-w-2xl">
             Schedule a session with Dr. Arpan Deep at our Bhubaneswar center or via video link.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: Doctor Card */}
          <div className="lg:col-span-4">
            <FadeIn>
              <div className="glass p-6 md:p-8 rounded-[2rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all" />

                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-lg">
                    <Image
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                        alt="Dr. Arpan"
                        fill
                        className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair">Dr. Arpan Deep</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">DM Neurology</p>
                    <div className="flex items-center gap-1.5 mt-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Available Today</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Consultation Fee</span>
                    <span className="font-bold text-lg text-white">₹3,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Duration</span>
                    <span className="font-bold text-white flex items-center gap-2">
                        <Clock size={14} className="text-primary" /> 45-60 Min
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Exp.</span>
                    <span className="font-bold text-white">15+ Years</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                        <Users size={16} className="mx-auto text-primary mb-2" />
                        <span className="text-[10px] font-bold block uppercase tracking-tighter">10k+ Treated</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                        <ShieldCheck size={16} className="mx-auto text-primary mb-2" />
                        <span className="text-[10px] font-bold block uppercase tracking-tighter">NABH Cert.</span>
                    </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-8">
            <FadeIn delay={0.2}>
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden min-h-[500px]">
                {step < 5 && (
                    <div className="mb-12">
                    <div className="flex justify-between mb-4">
                        {steps.map((s, i) => (
                        <div key={i} className={`flex flex-col items-center gap-2 ${step > i ? "text-primary" : "text-muted-foreground"}`}>
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-colors ${step > i ? "border-primary bg-primary/10 shadow-[0_0_10px_rgba(59,130,246,0.2)]" : "border-white/10"}`}>
                            <s.icon size={14} />
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
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
                        className="space-y-8"
                        >
                        <div>
                            <h3 className="text-2xl font-bold font-playfair mb-2">Consultation Type</h3>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setConsultationType("in-person")}
                                    className={`p-4 rounded-2xl border transition-all flex items-center gap-4 ${consultationType === "in-person" ? "border-primary bg-primary/10 shadow-lg" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${consultationType === "in-person" ? "bg-primary text-white" : "bg-white/10 text-muted-foreground"}`}>
                                        <MapPin size={18} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-sm font-bold block">In-Clinic</span>
                                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Bhubaneswar</span>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setConsultationType("video")}
                                    className={`p-4 rounded-2xl border transition-all flex items-center gap-4 ${consultationType === "video" ? "border-primary bg-primary/10 shadow-lg" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${consultationType === "video" ? "bg-primary text-white" : "bg-white/10 text-muted-foreground"}`}>
                                        <Video size={18} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-sm font-bold block">Video Call</span>
                                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Global Access</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold font-playfair mb-2">Personal Information</h3>
                            <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-1 ring-primary transition-all px-6"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
                                    <Input id="email" type="email" placeholder="email@address.com" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-1 ring-primary transition-all px-6" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="+91 00000 00000" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-1 ring-primary transition-all px-6" required />
                                </div>
                            </div>
                            </div>
                        </div>
                        <Button type="button" onClick={nextStep} className="w-full h-14 rounded-2xl text-base font-bold group shadow-xl">
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
                        className="space-y-8"
                        >
                        <div>
                            <h3 className="text-2xl font-bold font-playfair mb-2">Clinical Symptoms</h3>
                            <p className="text-sm text-muted-foreground mb-6 font-medium italic">Briefly describe what you&apos;re experiencing for a better initial assessment.</p>
                            <div className="space-y-4">
                                <Textarea
                                id="symptoms"
                                placeholder="Headaches, dizziness, motor issues, etc."
                                className="min-h-[200px] bg-white/5 border-white/10 rounded-[2rem] p-8 focus:ring-1 ring-primary transition-all text-base leading-relaxed"
                                required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button type="button" variant="ghost" onClick={prevStep} className="flex-1 h-14 rounded-2xl font-bold hover:bg-white/5">
                            <ChevronLeft className="mr-2" /> Back
                            </Button>
                            <Button type="button" onClick={nextStep} className="flex-[2] h-14 rounded-2xl text-base font-bold shadow-xl">
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
                        className="space-y-10"
                        >
                        <div>
                            <h3 className="text-2xl font-bold font-playfair mb-6">Preferred Schedule</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="grid gap-2">
                                    <Label htmlFor="date" className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Select Date</Label>
                                    <Input id="date" type="date" className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus:ring-1 ring-primary" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="time" className="text-xs uppercase tracking-widest text-muted-foreground ml-1">Preferred Time</Label>
                                    <Input id="time" type="time" className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus:ring-1 ring-primary" required />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-4 block">Available Slots Today</span>
                                <div className="flex flex-wrap gap-3">
                                    {["11:00 AM", "12:30 PM", "04:00 PM", "06:30 PM"].map((t) => (
                                        <div key={t} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button type="button" variant="ghost" onClick={prevStep} className="flex-1 h-14 rounded-2xl font-bold hover:bg-white/5">
                            <ChevronLeft className="mr-2" /> Back
                            </Button>
                            <Button type="button" onClick={nextStep} className="flex-[2] h-14 rounded-2xl text-base font-bold shadow-xl">
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
                        className="space-y-8"
                        >
                        <h3 className="text-2xl font-bold font-playfair mb-2">Review Appointment</h3>
                        <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">Patient</span>
                                    <span className="font-bold text-white">{formData.name || "N/A"}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">Type</span>
                                    <span className="font-bold text-primary capitalize">{consultationType} Session</span>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">Clinic Address</span>
                                <span className="text-xs font-medium text-muted-foreground italic leading-relaxed block">
                                    Luxury Healthcare Hub, Block A, Bhubaneswar, Odisha 751001
                                </span>
                            </div>
                            <p className="text-[10px] text-muted-foreground pt-4 border-t border-white/5 uppercase tracking-widest text-center">
                                Guaranteed privacy & clinical excellence
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button type="button" variant="ghost" onClick={prevStep} className="flex-1 h-14 rounded-2xl font-bold hover:bg-white/5">
                            <ChevronLeft className="mr-2" /> Edit
                            </Button>
                            <Button type="submit" className="flex-[2] h-14 rounded-2xl text-base font-bold bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
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
                        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-bold font-playfair mb-4 tracking-tight">Request Received!</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm mx-auto font-medium italic">
                            Our medical concierge will contact you within 2 hours to confirm your priority slot.
                        </p>
                        <Button type="button" onClick={() => setStep(1)} className="rounded-full px-12 h-12 text-xs font-bold uppercase tracking-widest">
                            Book Another Session
                        </Button>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </form>
                </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

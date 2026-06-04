"use client";

import { useState } from "react";
import { format, addDays, startOfDay, isSameDay } from "date-fns";
import { Companion } from "@/types";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatCurrency } from "@/lib/utils";

interface BookingFlowProps {
  companion: Companion;
}

type Step = "date" | "time" | "services" | "payment" | "success";

export function BookingFlow({ companion }: BookingFlowProps) {
  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<Date>(startOfDay(addDays(new Date(), 1)));
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<keyof typeof companion.rates>("hourly");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const timeSlots = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const totalPrice = companion.rates[selectedDuration];

  return (
    <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
      {/* Progress Bar */}
      <div className="h-1 bg-accent w-full">
        <motion.div
          className="h-full bg-amber-500"
          initial={{ width: "0%" }}
          animate={{
            width: step === "date" ? "20%" :
                   step === "time" ? "40%" :
                   step === "services" ? "60%" :
                   step === "payment" ? "80%" : "100%"
          }}
        />
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {step === "date" && (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-playfair flex items-center gap-2">
                <CalendarIcon size={20} className="text-amber-500" /> Select a Date
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((offset) => {
                  const date = addDays(new Date(), offset);
                  const isSelected = isSameDay(date, selectedDate);
                  return (
                    <button
                      key={offset}
                      onClick={() => setSelectedDate(startOfDay(date))}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        isSelected ? "bg-amber-500 border-amber-500 text-white" : "border-border hover:border-amber-500/50"
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold opacity-70">{format(date, "EEE")}</span>
                      <span className="text-lg font-bold">{format(date, "dd")}</span>
                    </button>
                  );
                })}
              </div>
              <Button onClick={() => setStep("time")} variant="premium" className="w-full h-12 rounded-xl text-lg">
                Continue
              </Button>
            </motion.div>
          )}

          {step === "time" && (
            <motion.div
              key="time"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-playfair flex items-center gap-2">
                <Clock size={20} className="text-amber-500" /> Select Time & Duration
              </h3>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Available Slots</p>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedTime === time ? "bg-amber-500 border-amber-500 text-white" : "border-border hover:border-amber-500/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Duration</p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(companion.rates) as Array<keyof typeof companion.rates>).map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setSelectedDuration(rate)}
                      className={`p-3 rounded-xl border flex flex-col items-start transition-all ${
                        selectedDuration === rate ? "bg-amber-500/10 border-amber-500" : "border-border hover:border-amber-500/50"
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-bold ${selectedDuration === rate ? "text-amber-500" : "text-muted-foreground"}`}>
                        {rate.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold">{formatCurrency(companion.rates[rate])}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep("date")} className="flex-1 h-12 rounded-xl">Back</Button>
                <Button disabled={!selectedTime} onClick={() => setStep("services")} variant="premium" className="flex-2 h-12 rounded-xl px-8">Continue</Button>
              </div>
            </motion.div>
          )}

          {step === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-playfair flex items-center gap-2">
                <CheckCircle2 size={20} className="text-amber-500" /> Included Services
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {companion.services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      selectedServices.includes(service) ? "bg-amber-500/10 border-amber-500" : "border-border"
                    }`}
                  >
                    <span className="font-medium">{service}</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedServices.includes(service) ? "bg-amber-500 border-amber-500 text-white" : "border-muted-foreground"}`}>
                      {selectedServices.includes(service) && <CheckCircle2 size={12} />}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep("time")} className="flex-1 h-12 rounded-xl">Back</Button>
                <Button onClick={() => setStep("payment")} variant="premium" className="flex-2 h-12 rounded-xl px-8">Review & Pay</Button>
              </div>
            </motion.div>
          )}

          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-playfair flex items-center gap-2">
                <CreditCard size={20} className="text-amber-500" /> Reservation Summary
              </h3>

              <div className="bg-accent/30 p-4 rounded-2xl space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Companion</span>
                  <span className="font-bold">{companion.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date & Time</span>
                  <span className="font-bold">{format(selectedDate, "PPP")} at {selectedTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-bold capitalize">{selectedDuration.replace(/([A-Z])/g, ' $1')}</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between items-center">
                  <span className="font-bold">Total Amount</span>
                  <span className="text-2xl font-bold text-amber-500">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-bold pt-2">
                  <span>Pay 20% Deposit Now</span>
                  <span className="text-white">{formatCurrency(totalPrice * 0.2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" /> Secure SSL Encrypted Payment
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep("services")} className="flex-1 h-12 rounded-xl">Back</Button>
                  <Button onClick={() => setStep("success")} variant="premium" className="flex-2 h-12 rounded-xl px-8">Confirm Reservation</Button>
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-8"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-playfair">Reservation Confirmed!</h3>
                <p className="text-muted-foreground">
                  Your booking with {companion.name} for {format(selectedDate, "MMM do")} has been secured.
                </p>
              </div>
              <div className="p-4 bg-accent/30 rounded-xl text-left text-sm space-y-2">
                <p><strong>Booking ID:</strong> LUM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                <p className="text-muted-foreground text-xs italic">A confirmation email has been sent to your registered address.</p>
              </div>
              <Button asChild variant="premium" className="w-full h-12 rounded-xl">
                <a href="/dashboard">Go to My Bookings</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

"use server";

import axios from "axios";
import { config } from "@/config";

export interface AppointmentData {
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  date: string;
  time: string;
  reason: string;
  message?: string;
}

export async function submitAppointment(formData: AppointmentData) {
  try {
    const { url, secret } = config.appointmentApi;
    const { doctorEmail, clinicName } = config;

    const response = await axios.post(url, {
      apiSecret: secret,
      clinicName: clinicName,
      doctorEmail: doctorEmail,
      ...formData
    });

    if (response.status === 200 || response.status === 201) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to submit appointment" };
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Booking error in server action:", errorMessage);
    return { success: false, error: errorMessage };
  }
}

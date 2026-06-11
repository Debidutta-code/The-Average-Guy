export const config = {
  clinicName: "MO Dental Clinic",
  doctorEmail: process.env.DOCTOR_EMAIL || "debiduttaacharya.dev@gmail.com",
  phone: "+91 70085 20133",
  address: "Plot No-2405, In Front of Apollo Pharmacy, Golakha, Mancheswar, Bhubaneswar, Odisha – 751010",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.972365448375!2d85.8647087!3d20.3014167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e455555555%3A0x7d6f555555555555!2sMO%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1717981234567!5m2!1sen!2sin",
  appointmentApi: {
    url: process.env.APPOINTMENT_API_URL || "http://localhost:5000/api/trigger-appointment",
    secret: process.env.APPOINTMENT_API_SECRET || "SECRET_KEY_FOR_JWT"
  }
};

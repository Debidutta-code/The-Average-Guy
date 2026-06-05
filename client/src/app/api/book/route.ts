import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Save to JSON file
    const filePath = path.join(process.cwd(), "data", "appointments.json");

    // Ensure data directory exists
    const dataDir = path.dirname(filePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let appointments = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      appointments = JSON.parse(fileContent);
    }

    const newAppointment = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    appointments.push(newAppointment);
    fs.writeFileSync(filePath, JSON.stringify(appointments, null, 2));

    // 2. Optional: Send Email (using placeholder config)
    // Note: In a real production env, you'd use env vars for SMTP
    if (process.env.EMAIL_HOST) {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Kapoor Dental" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `New Appointment Request: ${data.name}`,
            text: `Name: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nDate: ${data.date}\nMessage: ${data.message}`,
        });
    }

    return NextResponse.json({ success: true, message: "Appointment saved" });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

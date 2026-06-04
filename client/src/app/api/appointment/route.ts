import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Mock SMTP configuration - Clinic staff should update this with real credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "user@example.com",
    pass: process.env.EMAIL_PASS || "password",
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Server-side validation
    const { name, phone, service, date, email, time, message } = data;

    if (!name || !phone || !service || !date) {
      return NextResponse.json({
        success: false,
        message: 'Required fields are missing: name, phone, service, and date are mandatory.'
      }, { status: 400 });
    }

    if (!/^\d{10}$/.test(phone.replace(/[^0-9]/g, ''))) {
      return NextResponse.json({
        success: false,
        message: 'Invalid phone number format. 10 digits required.'
      }, { status: 400 });
    }

    // Save to a JSON file as per functional requirements
    const appointmentsDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(appointmentsDir)) {
      fs.mkdirSync(appointmentsDir, { recursive: true });
    }

    const filePath = path.join(appointmentsDir, 'appointments.json');
    let appointments = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      appointments = JSON.parse(fileContent);
    }

    const newAppointment = {
      name,
      phone,
      email: email || 'Not provided',
      service,
      date,
      time: time || 'Not specified',
      message: message || 'No message',
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    appointments.push(newAppointment);
    fs.writeFileSync(filePath, JSON.stringify(appointments, null, 2));

    // Email Notification logic
    const mailOptions = {
      from: '"Clinic Website" <noreply@drparthamohapatra.com>',
      to: 'clinic@example.com', // Clinic's email address
      subject: `New Appointment Request: ${name}`,
      text: `
        New Appointment Details:
        Name: ${name}
        Phone: ${phone}
        Email: ${email || 'Not provided'}
        Service: ${service}
        Preferred Date: ${date}
        Preferred Time: ${time || 'Not specified'}
        Message: ${message || 'No message'}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2F80ED;">New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${time || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message || 'No message'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">This notification was generated from the clinic website.</p>
        </div>
      `,
    };

    // Send email (handling potential errors silently for demo purposes, but logging)
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent for:', name);
    } catch (mailError) {
      console.error('Failed to send email notification:', mailError);
      // We don't fail the request if just the email fails, as the data is saved
    }

    return NextResponse.json({
      success: true,
      message: 'Your appointment request has been received.'
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process appointment request.'
    }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In a real application, you would save this to a database
    // or send an email notification here.
    console.log('New Appointment Request:', data);

    // Save to a JSON file as per functional requirements
    const appointmentsDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(appointmentsDir)) {
      fs.mkdirSync(appointmentsDir);
    }

    const filePath = path.join(appointmentsDir, 'appointments.json');
    let appointments = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      appointments = JSON.parse(fileContent);
    }

    appointments.push({
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });

    fs.writeFileSync(filePath, JSON.stringify(appointments, null, 2));

    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 1000));

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

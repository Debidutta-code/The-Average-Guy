const { google } = require('googleapis');
const config = require('../config/env');

const createCalendarEvent = async (appointmentData) => {
  const {
    clinicName,
    patientName,
    date,
    time,
    reason
  } = appointmentData;

  const auth = new google.auth.JWT(
    config.google.clientEmail,
    null,
    config.google.privateKey.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar']
  );

  const calendar = google.calendar({ version: 'v3', auth });

  // Assuming 30 minutes duration for appointment
  const startDateTime = new Date(`${date}T${time}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 30 * 60000);

  const event = {
    summary: `Appointment - ${patientName}`,
    description: `Reason: ${reason}\nClinic: ${clinicName}`,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'UTC',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'UTC',
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: config.google.calendarId,
      resource: event,
    });
    console.log('Calendar event created: ' + response.data.htmlLink);
    return { success: true };
  } catch (error) {
    console.error('Calendar error: ', error);
    return { success: false, error: error.message };
  }
};

module.exports = { createCalendarEvent };

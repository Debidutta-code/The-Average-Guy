const AppointmentLog = require('../models/AppointmentLog');
const { sendEmail } = require('../services/email.service');
const { sendWhatsAppMessage } = require('../services/whatsapp.service');
const { createCalendarEvent } = require('../services/calendar.service');

const triggerAppointment = async (req, res) => {
  const {
    clinicName,
    doctorEmail,
    doctorWhatsapp,
    patientName,
    patientPhone,
    date,
    time,
    reason
  } = req.body;

  // 1. Create initial log entry
  const log = new AppointmentLog({
    clinicName,
    doctorEmail,
    doctorWhatsapp,
    patientName,
    patientPhone,
    date,
    time,
    reason,
    status: 'processing'
  });

  try {
    await log.save();

    // 2. Trigger services (with retry logic as a placeholder or simple execution)
    const emailPromise = sendEmail(req.body);
    const whatsappPromise = sendWhatsAppMessage(req.body);
    const calendarPromise = createCalendarEvent(req.body);

    const [emailRes, whatsappRes, calendarRes] = await Promise.all([
      emailPromise,
      whatsappPromise,
      calendarPromise
    ]);

    // 3. Update log with results
    log.emailStatus = emailRes.success ? 'sent' : 'failed';
    log.whatsappStatus = whatsappRes.success ? 'sent' : 'failed';
    log.calendarStatus = calendarRes.success ? 'created' : 'failed';

    log.status = (emailRes.success && whatsappRes.success && calendarRes.success)
      ? 'success'
      : 'failed';

    await log.save();

    return res.status(200).json({
      success: true,
      message: log.status === 'success' ? 'Appointment processed' : 'Appointment processed with some failures',
      logId: log._id,
      details: {
        email: log.emailStatus,
        whatsapp: log.whatsappStatus,
        calendar: log.calendarStatus
      }
    });

  } catch (error) {
    console.error('Controller Error:', error);

    // Attempt to mark as failed if log was created
    if (log._id) {
      log.status = 'failed';
      await log.save();
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing appointment',
      error: error.message
    });
  }
};

module.exports = { triggerAppointment };

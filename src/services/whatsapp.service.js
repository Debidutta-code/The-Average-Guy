const twilio = require('twilio');
const config = require('../config/env');

const sendWhatsAppMessage = async (appointmentData) => {
  const {
    clinicName,
    doctorWhatsapp,
    patientName,
    patientPhone,
    date,
    time,
    reason
  } = appointmentData;

  const client = twilio(config.twilio.sid, config.twilio.authToken);

  const messageBody = `*New Appointment Booked*

*Clinic:* ${clinicName}
*Patient:* ${patientName}
*Phone:* ${patientPhone}
*Date:* ${date}
*Time:* ${time}
*Reason:* ${reason}`;

  try {
    const message = await client.messages.create({
      body: messageBody,
      from: `whatsapp:${config.twilio.whatsappNumber}`,
      to: `whatsapp:${doctorWhatsapp}`
    });
    console.log('WhatsApp message sent: ' + message.sid);
    return { success: true };
  } catch (error) {
    console.error('WhatsApp error: ', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendWhatsAppMessage };

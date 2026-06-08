const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

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

  const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

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
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
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

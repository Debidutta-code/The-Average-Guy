const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendEmail = async (appointmentData) => {
  const {
    clinicName,
    doctorEmail,
    patientName,
    patientPhone,
    date,
    time,
    reason
  } = appointmentData;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Clinic Appointment Service" <${process.env.EMAIL_USER}>`,
    to: doctorEmail,
    subject: `New Appointment Booked - ${clinicName}`,
    html: `
      <h2>New Appointment Details</h2>
      <p><strong>Clinic:</strong> ${clinicName}</p>
      <p><strong>Patient Name:</strong> ${patientName}</p>
      <p><strong>Patient Phone:</strong> ${patientPhone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <br>
      <p>Please prepare for the session.</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { success: true };
  } catch (error) {
    console.error('Email error: ', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };

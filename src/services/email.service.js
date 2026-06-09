const nodemailer = require('nodemailer');
const config = require('../config/env');

const getStyledEmailTemplate = (appointmentData) => {
  const {
    clinicName,
    patientName,
    patientPhone,
    date,
    time,
    reason
  } = appointmentData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f4f7f9;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        .header {
          background-color: #2F80ED;
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content {
          padding: 40px;
        }
        .appointment-card {
          background-color: #f8fbff;
          border: 1px solid #e1e8f0;
          border-radius: 8px;
          padding: 25px;
          margin-bottom: 30px;
        }
        .info-row {
          display: flex;
          margin-bottom: 15px;
          border-bottom: 1px solid #f0f4f8;
          padding-bottom: 10px;
        }
        .info-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .label {
          font-weight: 600;
          color: #64748b;
          width: 140px;
          flex-shrink: 0;
        }
        .value {
          color: #1e293b;
          font-weight: 500;
        }
        .footer {
          padding: 20px;
          text-align: center;
          font-size: 13px;
          color: #94a3b8;
          background-color: #fcfdfe;
          border-top: 1px solid #f1f5f9;
        }
        .badge {
          display: inline-block;
          background: #e1effe;
          color: #1e429f;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Appointment Notification</h1>
          <p style="margin: 5px 0 0; opacity: 0.9;">${clinicName}</p>
        </div>
        <div class="content">
          <p style="font-size: 16px; margin-top: 0;">Hello Doctor,</p>
          <p>A new appointment has been scheduled via your clinic's automation system. Here are the details:</p>

          <div class="appointment-card">
            <div class="info-row">
              <div class="label">Patient Name</div>
              <div class="value">${patientName}</div>
            </div>
            <div class="info-row">
              <div class="label">Phone Number</div>
              <div class="value">${patientPhone}</div>
            </div>
            <div class="info-row">
              <div class="label">Date</div>
              <div class="value">${date}</div>
            </div>
            <div class="info-row">
              <div class="label">Time</div>
              <div class="value">${time}</div>
            </div>
            <div class="info-row">
              <div class="label">Reason</div>
              <div class="value">${reason}</div>
            </div>
          </div>

          <p style="margin-bottom: 0;">The event has also been added to your Google Calendar.</p>
          <span class="badge">Automatic Log Created</span>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} ${clinicName} • Appointment Automation Backend
        </div>
      </div>
    </body>
    </html>
  `;
};

const sendEmail = async (appointmentData) => {
  const { clinicName, doctorEmail } = appointmentData;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });

  const mailOptions = {
    from: `"${clinicName} Appointments" <${config.email.user}>`,
    to: doctorEmail,
    subject: `📅 New Appointment: ${appointmentData.patientName} - ${appointmentData.date}`,
    html: getStyledEmailTemplate(appointmentData)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Styled Email sent: ' + info.response);
    return { success: true };
  } catch (error) {
    console.error('Email error: ', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };

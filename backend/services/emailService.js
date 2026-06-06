const nodemailer = require('nodemailer');

const sendColdEmail = async (to, subject, text, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Lead Gen System" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    return info;
  } catch (err) {
    console.error('Email error:', err);
    throw err;
  }
};

module.exports = { sendColdEmail };

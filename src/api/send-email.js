import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,   // e.g. smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587 , // usually 465 or 587
      secure: true,                  // true for port 465, false for 587
      auth: {
        user: "info@effred.com", // your SMTP user/email
        pass: process.env.SMTP_PASS, // your SMTP password
      },
      tls: {
    rejectUnauthorized: false // Add this if needed
    }
    });

    await transporter.sendMail({
      from: 'info@effred.com',   // sender info
      to: 'info@effred.com',  // your receiving email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

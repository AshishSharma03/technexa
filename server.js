import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post("/api/send-email", async (req, res) => {
  const { name, email, company, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.VITE_SMTP_HOST || "smtp.hostinger.com",
      port: Number.parseInt(process.env.VITE_SMTP_PORT) || 465,
      secure: true, // true for port 465 (SSL)
      auth: {
        user: process.env.VITE_SMTP_USER,
        pass: process.env.VITE_SMTP_PASS,
      },
    })

    // Send email to company inbox
    await transporter.sendMail({
      from: process.env.VITE_SMTP_USER,
      to: "hr@effred.com", // Changed from variable to fixed email
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DC2626; border-bottom: 3px solid #DC2626; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #DC2626;">${email}</a></p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #333; background: white; padding: 10px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
            This email was sent via the TechNexra contact form.
          </p>
        </div>
      `,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.VITE_SMTP_USER,
      to: email,
      subject: "We received your message - TechNexra",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DC2626;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>We have received your message and will get back to you within 24 business hours.</p>
          <p>Our team at TechNexra is committed to providing you with the best service possible.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 14px;">
            <strong>Your Message:</strong><br />
            <div style="background: #f5f5f5; padding: 10px; border-radius: 4px; margin-top: 10px;">
              ${message}
            </div>
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            <strong>Contact Information:</strong><br />
            Email: <a href="mailto:info@effred.com" style="color: #DC2626;">info@effred.com</a><br />
            Phone: <a href="tel:5869242234" style="color: #DC2626;">(586) 924-2234</a><br />
            Address: 13010 Brokers Tip Lane, Frisco, TX 75035
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending error:", error)
    return res.status(500).json({ error: "Failed to send email. Please try again later." })
  }
})

app.listen(PORT, () => {
  console.log(`Email API server running on port ${PORT}`)
})

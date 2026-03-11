const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '.env') });

const app = express();

// Debug
console.log("=== SERVER STARTING ===");
console.log("EMAIL_USER:", process.env.EMAIL_USER ? `✅ Found (${process.env.EMAIL_USER})` : "❌ Not found");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Found" : "❌ Not found");
console.log("========================");

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing email credentials in .env file");
  process.exit(1);
}

// Create transporter for Hostinger
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP Connection Error:", error.message);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("📨 Received contact form submission from:", name);

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Name, email, and message are required" 
    });
  }

  try {
    // Send email to both office and sales (using the alias)
    const info = await transporter.sendMail({
      from: `"Bondmaxx Website" <${process.env.EMAIL_USER}>`,
      to: "office@bondmaxx.com, sales@bondmaxx.com",
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    });

    console.log("✅ Email sent successfully. Message ID:", info.messageId);

    // Send auto-reply to customer
    await transporter.sendMail({
      from: `"Bondmaxx" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Bondmaxx",
      text: `
Dear ${name},

Thank you for reaching out to Bondmaxx. We have received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
The Bondmaxx Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank You for Contacting Bondmaxx!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f5f5f5; padding: 15px; margin: 15px 0; border-left: 4px solid #007bff;">
            <p><strong>Your message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,<br>The Bondmaxx Team</p>
        </div>
      `
    });

    console.log("✅ Auto-reply sent to customer:", email);

    res.json({ 
      success: true, 
      message: "Email sent successfully" 
    });

  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email. Please try again." 
    });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ 
    success: true, 
    message: "Server is running",
    email: process.env.EMAIL_USER
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Sending emails from: ${process.env.EMAIL_USER}`);
});
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

// Direct SMTP configuration - no environment variables
const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'zyradigitalsofficial@gmail.com',
    pass: 'raqcxkbeugqanrpl'
  },
  tls: {
    rejectUnauthorized: false
  }
};

const EMAIL_CONFIG = {
  adminEmail: 'info@chakrabyte.com',
  fromName: 'Chakrabyte Security'
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

console.log('=== SMTP CONFIG V2 (TLS FIXED) ===');
console.log('Host:', SMTP_CONFIG.host);
console.log('Port:', SMTP_CONFIG.port);
console.log('User:', SMTP_CONFIG.auth.user);
console.log('Pass:', SMTP_CONFIG.auth.pass ? '***' : 'MISSING');
console.log('================');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const leadData = req.body;

    if (!leadData?.name || !leadData?.email || !leadData?.phone || !leadData?.type || !leadData?.timestamp) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Validate SMTP config early
    await transporter.verify();

    const subject = `New Lead: ${String(leadData.type).toUpperCase()} - ${leadData.name}`;

    const adminText = [
      `Type: ${leadData.type}`,
      `Name: ${leadData.name}`,
      `Email: ${leadData.email}`,
      `Phone: ${leadData.phone}`,
      leadData.course ? `Course: ${leadData.course}` : undefined,
      leadData.service ? `Service: ${leadData.service}` : undefined,
      leadData.source ? `Source: ${leadData.source}` : undefined,
      leadData.message ? `Message: ${leadData.message}` : undefined,
      `Timestamp: ${leadData.timestamp}`,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: `${EMAIL_CONFIG.fromName} <${SMTP_CONFIG.auth.user}>`,
      to: EMAIL_CONFIG.adminEmail,
      replyTo: leadData.email,
      subject,
      text: adminText,
    });

    await transporter.sendMail({
      from: `${EMAIL_CONFIG.fromName} <${SMTP_CONFIG.auth.user}>`,
      to: leadData.email,
      subject: 'Thank you - Chakrabyte Security',
      text: `Hi ${leadData.name},\n\nThanks for contacting Chakrabyte Security. We received your message and will get back to you soon.\n\nRegards,\nChakrabyte Security`,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Email send failed';
    console.error('Contact API error:', err);
    return res.status(500).json({ success: false, message });
  }
});

const port = 5050;
app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});

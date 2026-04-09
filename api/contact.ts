import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

type LeadData = {
  name: string;
  email: string;
  phone: string;
  message?: string;
  course?: string;
  service?: string;
  type: 'contact' | 'course-enquiry' | 'service-enquiry';
  source?: string;
  timestamp: string;
};

const requiredEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const leadData = req.body as LeadData;

    if (!leadData?.name || !leadData?.email || !leadData?.phone || !leadData?.type || !leadData?.timestamp) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_SECURE = String(process.env.SMTP_SECURE || 'false') === 'true';
    const SMTP_USER = requiredEnv('SMTP_USER');
    const SMTP_PASS = requiredEnv('SMTP_PASS');

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@chakrabyte.com';
    const FROM_NAME = process.env.FROM_NAME || 'Chakrabyte Security';

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const subject = `New Lead: ${leadData.type.toUpperCase()} - ${leadData.name}`;

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
      from: `${FROM_NAME} <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: leadData.email,
      subject,
      text: adminText,
    });

    await transporter.sendMail({
      from: `${FROM_NAME} <${SMTP_USER}>`,
      to: leadData.email,
      subject: 'Thank you - Chakrabyte Security',
      text: `Hi ${leadData.name},\n\nThanks for contacting Chakrabyte Security. We received your message and will get back to you soon.\n\nRegards,\nChakrabyte Security`,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Email send failed';
    return res.status(500).json({ success: false, message });
  }
}

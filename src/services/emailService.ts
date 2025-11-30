import { toast } from "@/components/ui/use-toast";

// Email configuration - Using environment variables for security
const EMAIL_CONFIG = {
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_ADMIN: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
  EMAILJS_TEMPLATE_ID_USER: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
  EMAILJS_USER_ID: import.meta.env.VITE_EMAILJS_USER_ID,
  
  // SMTP2GO Configuration (Alternative)
  SMTP2GO_API_KEY: import.meta.env.VITE_SMTP2GO_API_KEY,
  
  // Email Addresses
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL || 'admin@chakrabyte.com',
  FROM_EMAIL: import.meta.env.VITE_FROM_EMAIL || 'noreply@chakrabyte.com',
  FROM_NAME: import.meta.env.VITE_FROM_NAME || 'Chakrabyte Security',
  WEBSITE_URL: import.meta.env.VITE_WEBSITE_URL || 'https://chakrabyte.com',
  COMPANY_PHONE: import.meta.env.VITE_COMPANY_PHONE || '+91-XXXXXXXXXX'
};

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  course?: string;
  service?: string;
  type: 'contact' | 'course-enquiry' | 'service-enquiry';
  source?: string;
  timestamp: string;
}

class EmailService {
  private async sendEmailViaEmailJS(templateId: string, templateParams: any): Promise<boolean> {
    try {
      if (!EMAIL_CONFIG.EMAILJS_SERVICE_ID || !EMAIL_CONFIG.EMAILJS_USER_ID) {
        console.warn('EmailJS not configured. Please set up environment variables.');
        return false;
      }

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAIL_CONFIG.EMAILJS_SERVICE_ID,
          template_id: templateId,
          user_id: EMAIL_CONFIG.EMAILJS_USER_ID,
          template_params: templateParams
        })
      });

      if (response.ok) {
        console.log('Email sent successfully via EmailJS');
        return true;
      } else {
        console.error('EmailJS failed:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      return false;
    }
  }

  private async sendEmailViaSMTP2GO(emailData: EmailData): Promise<boolean> {
    try {
      if (!EMAIL_CONFIG.SMTP2GO_API_KEY) {
        console.warn('SMTP2GO not configured. Please set up environment variables.');
        return false;
      }

      const response = await fetch('https://api.smtp2go.com/v3/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${EMAIL_CONFIG.SMTP2GO_API_KEY}`
        },
        body: JSON.stringify({
          sender: `${EMAIL_CONFIG.FROM_NAME} <${EMAIL_CONFIG.FROM_EMAIL}>`,
          recipients: [emailData.to],
          subject: emailData.subject,
          html_body: emailData.html,
          reply_to: emailData.replyTo || emailData.from
        })
      });

      return response.ok;
    } catch (error) {
      console.error('SMTP2GO error:', error);
      return false;
    }
  }

  // Generate admin email HTML
  private generateAdminEmail(leadData: LeadData): string {
    const typeColors = {
      'contact': '#3B82F6',
      'course-enquiry': '#10B981',
      'service-enquiry': '#F59E0B'
    };

    const typeLabels = {
      'contact': 'General Contact',
      'course-enquiry': 'Course Enquiry',
      'service-enquiry': 'Service Enquiry'
    };

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead - ${leadData.type}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #6B46C1, #9333EA); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .lead-type { display: inline-block; background: ${typeColors[leadData.type]}; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
          .info-item { background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #6B46C1; }
          .info-label { font-weight: 600; color: #6B46C1; margin-bottom: 5px; font-size: 12px; text-transform: uppercase; }
          .info-value { color: #333; font-size: 14px; }
          .message-box { background: #f8f9fa; padding: 20px; border-radius: 6px; margin-top: 20px; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .timestamp { color: #999; font-size: 11px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Lead Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Chakrabyte Security - Lead Notification</p>
          </div>
          
          <div class="content">
            <div class="lead-type">${typeLabels[leadData.type]}</div>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${leadData.name}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${leadData.email}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${leadData.phone}</div>
              </div>
              
              ${leadData.course ? `
              <div class="info-item">
                <div class="info-label">Course</div>
                <div class="info-value">${leadData.course}</div>
              </div>
              ` : ''}
              
              ${leadData.service ? `
              <div class="info-item">
                <div class="info-label">Service</div>
                <div class="info-value">${leadData.service}</div>
              </div>
              ` : ''}
              
              ${leadData.source ? `
              <div class="info-item">
                <div class="info-label">Source</div>
                <div class="info-value">${leadData.source}</div>
              </div>
              ` : ''}
            </div>
            
            ${leadData.message ? `
            <div class="message-box">
              <div class="info-label">Message</div>
              <div class="info-value" style="white-space: pre-line;">${leadData.message}</div>
            </div>
            ` : ''}
            
            <div class="timestamp">
              Received on: ${new Date(leadData.timestamp).toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent automatically from Chakrabyte Security website.</p>
            <p>Please respond to this lead as soon as possible.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Generate user confirmation email HTML
  private generateUserConfirmationEmail(leadData: LeadData): string {
    const typeMessages = {
      'contact': 'We have received your message and will get back to you within 24 hours.',
      'course-enquiry': 'We have received your course enquiry and our academic counselor will contact you soon.',
      'service-enquiry': 'We have received your service enquiry and our team will reach out to discuss your requirements.'
    };

    const referenceId = Date.now().toString(36).toUpperCase();

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Chakrabyte Security</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #6B46C1, #9333EA); color: white; padding: 40px 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; }
          .header p { margin: 10px 0 0 0; opacity: 0.9; }
          .content { padding: 40px 30px; }
          .thank-you { text-align: center; margin-bottom: 30px; }
          .thank-you h2 { color: #6B46C1; font-size: 24px; margin-bottom: 10px; }
          .message-box { background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6B46C1; }
          .info-item { margin: 15px 0; }
          .info-label { font-weight: 600; color: #6B46C1; margin-bottom: 5px; font-size: 14px; }
          .info-value { color: #333; font-size: 16px; }
          .cta-button { display: inline-block; background: #6B46C1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 30px; text-align: center; }
          .footer p { color: #666; font-size: 14px; margin: 5px 0; }
          .social-links { margin: 20px 0; }
          .social-links a { margin: 0 10px; color: #6B46C1; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🛡️ Chakrabyte Security</h1>
            <p>Empowering Your Digital Defense</p>
          </div>
          
          <div class="content">
            <div class="thank-you">
              <h2>Thank You, ${leadData.name}!</h2>
              <p>We've received your enquiry successfully.</p>
            </div>
            
            <div class="message-box">
              <p>${typeMessages[leadData.type]}</p>
            </div>
            
            <div class="info-item">
              <div class="info-label">Your Enquiry Details:</div>
              <div class="info-value">
                ${leadData.type === 'course-enquiry' ? `Course: ${leadData.course}` : ''}
                ${leadData.type === 'service-enquiry' ? `Service: ${leadData.service}` : ''}
                ${leadData.type === 'contact' ? 'General Contact Enquiry' : ''}
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-label">Reference ID:</div>
              <div class="info-value">#${referenceId}</div>
            </div>
            
            <div style="text-align: center;">
              <a href="${EMAIL_CONFIG.WEBSITE_URL}" class="cta-button">Visit Our Website</a>
            </div>
            
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>Important:</strong> Please add <strong>${EMAIL_CONFIG.FROM_EMAIL}</strong> to your contacts to ensure our emails don't land in your spam folder.
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Chakrabyte Security</strong></p>
            <p>📞 ${EMAIL_CONFIG.COMPANY_PHONE} | 📧 ${EMAIL_CONFIG.FROM_EMAIL}</p>
            <p>🌐 ${EMAIL_CONFIG.WEBSITE_URL}</p>
            <div class="social-links">
              <a href="#">LinkedIn</a> | 
              <a href="#">Twitter</a> | 
              <a href="#">Instagram</a>
            </div>
            <p style="font-size: 12px; margin-top: 20px;">
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Main method to send lead notifications
  async sendLeadNotification(leadData: LeadData): Promise<{ success: boolean; message: string }> {
    try {
      // Try EmailJS first
      if (EMAIL_CONFIG.EMAILJS_SERVICE_ID) {
        // Send email to admin via EmailJS
        const adminTemplateParams = {
          to_email: EMAIL_CONFIG.ADMIN_EMAIL,
          subject: `🚀 New Lead: ${leadData.type.toUpperCase()} - ${leadData.name}`,
          html_message: this.generateAdminEmail(leadData),
          from_name: EMAIL_CONFIG.FROM_NAME,
          reply_to: leadData.email,
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          course: leadData.course || '',
          service: leadData.service || '',
          message: leadData.message || '',
          type: leadData.type,
          source: leadData.source || '',
          timestamp: new Date(leadData.timestamp).toLocaleString()
        };

        const adminEmailSent = await this.sendEmailViaEmailJS(
          EMAIL_CONFIG.EMAILJS_TEMPLATE_ID_ADMIN || 'admin_notification',
          adminTemplateParams
        );

        // Send confirmation email to user via EmailJS
        const userTemplateParams = {
          to_email: leadData.email,
          subject: 'Thank You - Chakrabyte Security',
          html_message: this.generateUserConfirmationEmail(leadData),
          from_name: EMAIL_CONFIG.FROM_NAME,
          reply_to: EMAIL_CONFIG.ADMIN_EMAIL,
          name: leadData.name,
          course: leadData.course || '',
          service: leadData.service || '',
          type: leadData.type,
          reference_id: Date.now().toString(36).toUpperCase()
        };

        const userEmailSent = await this.sendEmailViaEmailJS(
          EMAIL_CONFIG.EMAILJS_TEMPLATE_ID_USER || 'user_confirmation',
          userTemplateParams
        );

        if (adminEmailSent && userEmailSent) {
          return {
            success: true,
            message: 'Your enquiry has been sent successfully! You will receive a confirmation email shortly.'
          };
        }
      }

      // Fallback to SMTP2GO if EmailJS fails or not configured
      if (EMAIL_CONFIG.SMTP2GO_API_KEY) {
        const adminEmailData: EmailData = {
          to: EMAIL_CONFIG.ADMIN_EMAIL,
          subject: `🚀 New Lead: ${leadData.type.toUpperCase()} - ${leadData.name}`,
          html: this.generateAdminEmail(leadData),
          replyTo: leadData.email
        };

        const userEmailData: EmailData = {
          to: leadData.email,
          subject: 'Thank You - Chakrabyte Security',
          html: this.generateUserConfirmationEmail(leadData)
        };

        const adminEmailSent = await this.sendEmailViaSMTP2GO(adminEmailData);
        const userEmailSent = await this.sendEmailViaSMTP2GO(userEmailData);

        if (adminEmailSent && userEmailSent) {
          return {
            success: true,
            message: 'Your enquiry has been sent successfully! You will receive a confirmation email shortly.'
          };
        }
      }

      // If no email service is configured
      if (!EMAIL_CONFIG.EMAILJS_SERVICE_ID && !EMAIL_CONFIG.SMTP2GO_API_KEY) {
        console.warn('No email service configured. Please set up EmailJS or SMTP2GO.');
        return {
          success: false,
          message: 'Email service not configured. Please contact administration.'
        };
      }

      return {
        success: false,
        message: 'Failed to send email. Please try again or contact us directly.'
      };

    } catch (error) {
      console.error('Lead notification error:', error);
      return {
        success: false,
        message: 'An error occurred while sending your enquiry. Please try again.'
      };
    }
  }

  // Quick test method
  async testEmailService(): Promise<boolean> {
    const testData: LeadData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message',
      type: 'contact',
      timestamp: new Date().toISOString()
    };

    const result = await this.sendLeadNotification(testData);
    return result.success;
  }
}

export const emailService = new EmailService();

// Export for easy use in components
export default emailService;

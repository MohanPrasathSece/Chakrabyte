# Email Service Setup Guide

This guide will help you set up the email functionality for Chakrabyte Security website. The email service sends lead notifications to the admin and confirmation emails to users.

## 🚀 Quick Setup (Recommended: EmailJS)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account
4. Note down your **Service ID**

### Step 3: Create Email Templates

#### Admin Notification Template
1. Click "Create New Template"
2. Template ID: `admin_notification`
3. Subject: `🚀 New Lead: {{type}} - {{name}}`
4. Content:
```html
<h2>New Lead Received</h2>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Course:</strong> {{course}}</p>
<p><strong>Message:</strong> {{message}}</p>
<p><strong>Type:</strong> {{type}}</p>
<p><strong>Source:</strong> {{source}}</p>
<p><strong>Time:</strong> {{timestamp}}</p>
```

#### User Confirmation Template
1. Create another template
2. Template ID: `user_confirmation`
3. Subject: `Thank You - Chakrabyte Security`
4. Content:
```html
<h2>Thank You, {{name}}!</h2>
<p>We've received your enquiry successfully.</p>
<p>Reference ID: {{reference_id}}</p>
<p>We'll get back to you within 24 hours.</p>
```

### Step 4: Get Your Credentials
1. From EmailJS dashboard, note down:
   - **Service ID**
   - **User ID** (from Account -> API Keys)
   - **Template IDs** (admin_notification, user_confirmation)

### Step 5: Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Add your EmailJS credentials:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID_ADMIN=your_admin_template_id
VITE_EMAILJS_TEMPLATE_ID_USER=your_user_template_id
VITE_EMAILJS_USER_ID=your_user_id_here

# Email Configuration
VITE_ADMIN_EMAIL=admin@chakrabyte.com
VITE_FROM_EMAIL=noreply@chakrabyte.com
VITE_FROM_NAME=Chakrabyte Security
```

## 📧 Alternative Setup (SMTP2GO)

If you prefer SMTP over EmailJS:

### Step 1: Create SMTP2GO Account
1. Go to [SMTP2GO.com](https://www.smtp2go.com/)
2. Sign up for a free account (10,000 emails/month free)

### Step 2: Get API Key
1. Go to Settings -> API Keys
2. Generate a new API key
3. Add to your `.env.local`:

```bash
VITE_SMTP2GO_API_KEY=your_api_key_here
VITE_ADMIN_EMAIL=admin@chakrabyte.com
VITE_FROM_EMAIL=noreply@chakrabyte.com
VITE_FROM_NAME=Chakrabyte Security
```

## 🔧 Testing the Setup

### Test Email Service
1. Open the browser console
2. Run: `emailService.testEmailService()`
3. Check if test emails are received

### Test Form Submission
1. Fill out the contact form
2. Submit with valid data
3. Check:
   - Admin email received
   - User confirmation email received
   - No console errors

## 📱 Features Included

### ✅ What's Working
- **Contact Form**: Sends to admin + user confirmation
- **Course Enquiries**: Auto-detects course from URL
- **Structured Emails**: Beautiful HTML templates
- **Error Handling**: Comprehensive error messages
- **Loading States**: Visual feedback during submission
- **Validation**: Email, phone, and required field validation
- **Responsive**: Works on all devices

### 🎯 Email Templates Features
- **Admin Email**: 
  - Lead type badges
  - Structured information grid
  - Timestamp and source tracking
  - Professional design
  
- **User Email**:
  - Personalized greeting
  - Reference ID generation
  - Contact information
  - Professional branding

## 🚨 Important Notes

### Security
- All credentials are in environment variables
- No sensitive data in client-side code
- Emails sent via secure APIs

### Rate Limits
- EmailJS Free: 200 emails/month
- SMTP2GO Free: 10,000 emails/month
- Consider upgrading for higher volume

### Email Deliverability
- Add `noreply@chakrabyte.com` to contacts
- Monitor spam folder initially
- Use professional email templates

## 🛠️ Troubleshooting

### Common Issues

#### 1. "Email not sent" Error
- Check environment variables are set
- Verify EmailJS credentials
- Check network connection

#### 2. "Template not found" Error
- Verify template IDs in EmailJS
- Check template variables match
- Ensure templates are active

#### 3. No emails received
- Check spam folder
- Verify email addresses
- Check EmailJS delivery logs

#### 4. Course not auto-detected
- Check URL format: `/contact?course=course-name`
- Verify useEffect is running
- Check browser console for errors

### Debug Mode
Add this to your `.env.local` for debugging:
```bash
VITE_DEBUG_EMAIL=true
```

## 📊 Monitoring

### What to Track
- Form submission rate
- Email delivery success rate
- Course enquiry breakdown
- Response time

### EmailJS Dashboard
- Monitor monthly usage
- Check delivery status
- View error logs

## 🔄 Production Deployment

### Environment Setup
1. Set all environment variables in hosting platform
2. Test email functionality in production
3. Monitor email deliverability

### Domain Configuration
1. Add SPF records for your domain
2. Configure DKIM if available
3. Set up DMARC policies

## 💡 Pro Tips

1. **Test Thoroughly**: Test all form scenarios
2. **Monitor Spam**: Check spam folders initially
3. **Backup Service**: Have secondary email service ready
4. **User Experience**: Add clear success/error messages
5. **Analytics**: Track form conversion rates

## 🆘 Support

If you need help:
1. Check EmailJS documentation
2. Review SMTP2GO guides
3. Check browser console for errors
4. Test with different email providers

---

**Your email service is now ready!** 🎉

Test it by submitting the contact form and checking both admin and user emails.

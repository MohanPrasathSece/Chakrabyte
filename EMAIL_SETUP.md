# Email Service Setup Guide - SMTP2GO Only

This guide will help you set up the email functionality for Chakrabyte Security website using SMTP2GO. The email service sends lead notifications to the admin and confirmation emails to users.

## 🚀 Quick Setup (SMTP2GO)

### Step 1: Create SMTP2GO Account
1. Go to [SMTP2GO.com](https://www.smtp2go.com/)
2. Sign up for a free account (10,000 emails/month free)
3. Verify your email address

### Step 2: Get API Key
1. In SMTP2GO dashboard, go to **Settings** → **API Keys**
2. Click **Generate New API Key**
3. Copy the API key
4. Note down your **API Key**

### Step 3: Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Add your SMTP2GO credentials:

```bash
# SMTP2GO Configuration (Required)
VITE_SMTP2GO_API_KEY=your_api_key_here

# Email Addresses
VITE_ADMIN_EMAIL=admin@chakrabyte.com
VITE_FROM_EMAIL=noreply@chakrabyte.com
VITE_FROM_NAME=Chakrabyte Security

# Website Configuration
VITE_WEBSITE_URL=https://chakrabyte.com
VITE_COMPANY_PHONE=+91-XXXXXXXXXX
```

### Step 4: Test the Setup
1. Open the browser console
2. Run: `emailService.testEmailService()`
3. Check if test emails are received

### Step 5: Test Form Submission
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
- SMTP2GO Free: 10,000 emails/month
- Higher volume plans available for scaling

### Email Deliverability
- Add `noreply@chakrabyte.com` to contacts
- Monitor spam folder initially
- Use professional email templates

## 🛠️ Troubleshooting

### Common Issues

#### 1. "Email not sent" Error
- Check environment variables are set
- Verify SMTP2GO API key
- Check network connection

#### 2. "API Key invalid" Error
- Verify API key is correct
- Check API key is active
- Ensure proper permissions

#### 3. No emails received
- Check spam folder
- Verify email addresses
- Check SMTP2GO delivery logs

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

### SMTP2GO Dashboard
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
1. Check SMTP2GO documentation
2. Review SMTP2GO guides
3. Check browser console for errors
4. Test with different email providers

---

**Your SMTP2GO email service is now ready!** 🎉

Test it by submitting the contact form and checking both admin and user emails.

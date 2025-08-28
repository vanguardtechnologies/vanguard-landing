# Email Configuration Setup

## Overview
The contact form now uses a custom backend API route (`/app/api/contact/route.ts`) instead of Formspree, giving you full control over email handling and professional auto-replies.

## Setup Instructions

### 1. Create Environment File
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

### 2. Configure cPanel Email (Recommended for your setup)
1. **Find your SMTP settings** in cPanel:
   - Login to your cPanel
   - Go to "Email Accounts" 
   - Find your `defence@vguardtech.com` email
   - Note your SMTP settings (usually shown as "Mail Server Settings")

2. **Common cPanel SMTP settings**:
   - SMTP Host: `mail.vguardtech.com` (or `mail.yourdomain.com`)
   - Port: `587` (recommended) or `465` (if SSL required)
   - Security: STARTTLS for port 587, SSL/TLS for port 465

3. **Update `.env.local`**:
```env
EMAIL_USER=defence@vguardtech.com
EMAIL_PASS=your-email-password
SMTP_HOST=mail.vguardtech.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Note**: Use `SMTP_SECURE=true` if using port 465 with SSL.

### 3. Alternative: Gmail Configuration
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
   - Copy the 16-character app password

3. **Update `.env.local`** (remove SMTP_HOST to use Gmail):
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
# Don't include SMTP_HOST - it will auto-use Gmail
```

### 4. Other Email Providers

#### SendGrid
```env
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```
Update the transporter in `/app/api/contact/route.ts`:
```typescript
const transporter = nodemailer.createTransporter({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.EMAIL_PASS,
  },
})
```

#### Custom SMTP
```env
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
```
Update the transporter:
```typescript
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

## Features Implemented

### ✅ Professional Email System
- **Business emails** sent to `defence@vguardtech.com`
- **Auto-reply** sent to customer with professional styling
- **Rate limiting** (5 requests per 15 minutes per IP)
- **HTML email templates** with Vanguard branding

### ✅ Enhanced Contact Form
- Improved error handling and validation
- Professional success/error messages
- Updated to use custom API endpoint

### ✅ Updated Contact Information
- All email addresses changed to `defence@vguardtech.com`
- Social media links updated with actual URLs:
  - X: https://twitter.com/VanguardTech_bd
  - LinkedIn: https://www.linkedin.com/company/107561584/
  - WhatsApp: https://wa.me/8801769510645

### ✅ Visual Enhancements
- Color-coded social media hover effects
- WhatsApp integration with proper branding
- Professional email templates with dark theme

## Testing
1. Set up your `.env.local` file
2. Run `npm run dev`
3. Test the contact form at `http://localhost:3000/#contact`
4. Check both your business email and the customer's email for confirmation

## Security Features
- Rate limiting to prevent spam
- Email validation
- Proper error handling
- Environment variables for sensitive data

## Support
If you encounter issues:
1. Check your email provider's SMTP settings
2. Verify your app password/credentials
3. Check the browser console for errors
4. Review the Next.js server logs
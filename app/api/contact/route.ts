import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map()

// Simple HTML escaping to prevent XSS in email templates
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (char) => map[char] || char)
}

function rateLimit(ip: string) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // max 5 requests per window

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  const userData = rateLimitStore.get(ip)
  
  if (now > userData.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (userData.count >= maxRequests) {
    return false
  }

  userData.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // Apply rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, company, country, inquiryType, message } = body

    // Escape HTML for safe email rendering
    const safeName = escapeHtml(name || '')
    const safeEmail = escapeHtml(email || '')
    const safeCompany = escapeHtml(company || '')
    const safeCountry = escapeHtml(country || '')
    const safeInquiryType = escapeHtml(inquiryType || 'General')
    const safeMessage = escapeHtml(message || '')

    // Validate required fields
    if (!name || !email || !company || !country || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing: EMAIL_USER or EMAIL_PASS not set')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at defence@vguardtech.com' },
        { status: 503 }
      )
    }

    // Create transporter - supports both cPanel and Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE !== 'false', // true for 465 (default), false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Additional options for cPanel compatibility
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates common on shared hosting
      },
      // Fallback to Gmail service if no SMTP_HOST is provided
      ...(process.env.SMTP_HOST ? {} : { service: 'gmail' }),
    })

    // Email content for the business
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1a1f2e; padding: 30px; border-radius: 8px; color: white;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ff9500; margin: 0; font-size: 24px; font-weight: bold;">🛡️ VANGUARD TECHNOLOGY</h1>
            <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 14px;">New DGDP Inquiry Received</p>
          </div>
          
          <div style="background-color: #374151; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #ff9500; margin-top: 0; font-size: 18px;">Contact Details</h2>
            <table style="width: 100%; color: #e5e7eb;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #ff9500; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #ff9500;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #60a5fa; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #ff9500;">Company:</td>
                <td style="padding: 8px 0;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #ff9500;">Country:</td>
                <td style="padding: 8px 0;">${safeCountry}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #ff9500;">Inquiry:</td>
                <td style="padding: 8px 0;">${safeInquiryType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #374151; padding: 20px; border-radius: 6px;">
            <h3 style="color: #ff9500; margin-top: 0; font-size: 16px;">Message:</h3>
            <p style="color: #e5e7eb; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #4b5563; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This inquiry was submitted via the Vanguard Technology website.<br/>
              Please respond within 24 hours to maintain professional standards.
            </p>
          </div>
        </div>
      </div>
    `

    // Auto-reply email for the customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1a1f2e; padding: 30px; border-radius: 8px; color: white;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ff9500; margin: 0; font-size: 24px; font-weight: bold;">🛡️ VANGUARD TECHNOLOGY</h1>
            <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 14px;">Your Trusted DGDP Agent in Bangladesh</p>
          </div>
          
          <div style="background-color: #374151; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #ff9500; margin-top: 0; font-size: 18px;">Thank You for Your Inquiry</h2>
            <p style="color: #e5e7eb; line-height: 1.6; margin: 0;">
              Dear ${safeName},<br/><br/>
              Thank you for contacting Vanguard Technology regarding DGDP services in Bangladesh. 
              We have received your inquiry and our certified DGDP agents will review your requirements.
            </p>
          </div>
          
          <div style="background-color: #10b981; background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <p style="color: #10b981; font-weight: bold; margin: 0; font-size: 14px;">
              ✅ Your inquiry has been received successfully
            </p>
          </div>
          
          <div style="background-color: #374151; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #ff9500; margin-top: 0; font-size: 16px;">What Happens Next?</h3>
            <ul style="color: #e5e7eb; line-height: 1.8; padding-left: 20px;">
              <li>Our DGDP specialists will review your requirements</li>
              <li>We'll respond within <strong>24 hours</strong> with initial guidance</li>
              <li>Schedule a consultation to discuss your specific needs</li>
              <li>Receive a customized DGDP registration plan</li>
            </ul>
          </div>
          
          <div style="background-color: #374151; padding: 20px; border-radius: 6px;">
            <h3 style="color: #ff9500; margin-top: 0; font-size: 16px;">Need Immediate Assistance?</h3>
            <p style="color: #e5e7eb; margin-bottom: 15px;">Contact our Dhaka office directly:</p>
            <table style="width: 100%; color: #e5e7eb;">
              <tr>
                <td style="padding: 5px 0; font-weight: bold; color: #ff9500; width: 80px;">📧 Email:</td>
                <td style="padding: 5px 0;"><a href="mailto:defence@vguardtech.com" style="color: #60a5fa; text-decoration: none;">defence@vguardtech.com</a></td>
              </tr>
              <tr>
                <td style="padding: 5px 0; font-weight: bold; color: #ff9500;">📱 WhatsApp:</td>
                <td style="padding: 5px 0;"><a href="https://wa.me/8801769510645" style="color: #10b981; text-decoration: none;">+880 176 951 0645</a></td>
              </tr>
              <tr>
                <td style="padding: 5px 0; font-weight: bold; color: #ff9500;">⏰ Hours:</td>
                <td style="padding: 5px 0;">Sunday - Thursday: 9:00 AM - 6:00 PM (BST)</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #4b5563; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              <strong style="color: #ff9500;">Vanguard Technology</strong><br/>
              Your Certified DGDP Agent • Dhaka, Bangladesh<br/>
              Connecting Defence Manufacturers with Bangladesh Opportunities
            </p>
          </div>
        </div>
      </div>
    `

    // Verify SMTP connection before sending
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email server connection failed. Please try again later or contact us directly at defence@vguardtech.com' },
        { status: 503 }
      )
    }

    // Send email to business
    await transporter.sendMail({
      from: `"Vanguard Technology Website" <${process.env.EMAIL_USER}>`,
      to: 'defence@vguardtech.com',
      subject: `New DGDP Inquiry from ${safeCompany} (${safeCountry})`,
      html: businessEmailHtml,
      replyTo: email, // Use original email for replyTo functionality
    })

    // Send auto-reply to customer
    await transporter.sendMail({
      from: `"Vanguard Technology" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your DGDP Inquiry Received - Vanguard Technology',
      html: customerEmailHtml,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
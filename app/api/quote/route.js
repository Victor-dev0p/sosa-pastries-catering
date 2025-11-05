// app/api/quotes/route.js - FIXED VERSION
import { connectToDB } from '@/lib/mongodb';
import Quote from '@/lib/models/Quote';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- UTILITY FUNCTIONS ---
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const rateLimitStore = new Map();

function getClientIP(headers) {
  const xForwardedFor = headers.get('x-forwarded-for');
  const realIP = headers.get('x-real-ip');
  return xForwardedFor ? xForwardedFor.split(',')[0].trim() : realIP || 'unknown';
}

function isRateLimited(ip, maxRequests = 5, windowMs = 10 * 60 * 1000) {
  const currentTime = Date.now();
  const entry = rateLimitStore.get(ip) || { count: 0, timestamp: currentTime };
  
  if (currentTime - entry.timestamp > windowMs) {
    rateLimitStore.set(ip, { count: 1, timestamp: currentTime });
    return false;
  }
  
  if (entry.count >= maxRequests) {
    return true;
  }
  
  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
}

// --- EMAIL TRANSPORTER ---
const initializeTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error("❌ Missing EMAIL_USER or EMAIL_PASS in environment variables");
    return null;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass.replace(/"/g, '').trim(), // Remove quotes from app password
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 20000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
    
    console.log('✅ Email transporter initialized');
    return transporter;
  } catch (error) {
    console.error("❌ Failed to initialize email transporter:", error);
    return null;
  }
};

const transporter = initializeTransporter();

async function sendEmails(quote) {
  if (!transporter) {
    console.error('❌ No email transporter available');
    throw new Error("Email service not configured");
  }

  try {
    await transporter.verify();
    console.log('✅ Email server connection verified');
  } catch (verifyError) {
    console.error('❌ Email verification failed:', verifyError);
    throw new Error(`Email server unreachable: ${verifyError.message}`);
  }

  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  // Admin email content
  const adminDetails = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <p><strong>👤 Name:</strong> ${quote.name}</p>
      <p><strong>📧 Email:</strong> ${quote.email}</p>
      <p><strong>📞 Phone:</strong> ${quote.phone || 'N/A'}</p>
      <p><strong>🛠️ Services Requested:</strong> ${quote.service}</p>
      <p><strong>📝 Event Details:</strong></p>
      <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0; border-radius: 4px;">
        ${quote.projectDetails.replace(/\|/g, '<br>')}
      </div>
      ${quote.message ? `
        <p><strong>💬 Additional Message:</strong></p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #28a745; margin: 10px 0; border-radius: 4px;">
          ${quote.message}
        </div>
      ` : ''}
    </div>
  `;

  // Send admin notification
  try {
    await transporter.sendMail({
      from: `"Quote System" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `🎉 New Quote Request - ${quote.service.split(',')[0].trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 20px;">
            New Quote Request Received
          </h2>
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            ${adminDetails}
          </div>
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
            Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}
          </p>
        </div>
      `,
    });
    console.log('✅ Admin email sent successfully');
  } catch (adminError) {
    console.error("❌ Admin email failed:", adminError);
    throw new Error(`Admin email failed: ${adminError.message}`);
  }

  // Send client confirmation
  try {
    await transporter.sendMail({
      from: `"DWHome & Crafts" <${process.env.EMAIL_USER}>`,
      to: quote.email,
      subject: '✅ Quote Request Received - DWHome & Crafts',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${quote.name.split(' ')[0]}! 🎉</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Your detailed quote request has been received</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              We've received your request for <strong style="color: #007bff;">${quote.service.split(',')[0].trim()}</strong> and our team will review your details carefully.
            </p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #666;"><strong>⏰ Response Time:</strong> 24-48 hours</p>
              <p style="margin: 5px 0; color: #666;"><strong>📞 Contact:</strong> ${quote.phone}</p>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              In the meantime, feel free to reach out if you have any questions or need to update your request.
            </p>
            <p style="border-top: 1px solid #dee2e6; padding-top: 20px; margin-top: 30px; color: #333;">
              Best regards,<br>
              <strong style="color: #007bff;">DWHome & Crafts Team</strong>
            </p>
          </div>
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
            © ${new Date().getFullYear()} DWHome & Crafts. All rights reserved.
          </p>
        </div>
      `,
    });
    console.log('✅ Client confirmation email sent successfully');
  } catch (clientError) {
    console.error("⚠️ Client email failed (non-critical):", clientError);
    // Don't throw - admin email succeeded
  }
}

// --- POST HANDLER ---
export async function POST(request) {
  console.log('📨 Quote submission received');
  
  try {
    // Rate limiting
    const ip = getClientIP(request.headers);
    console.log(`🌐 Request from IP: ${ip}`);
    
    if (isRateLimited(ip)) {
      console.warn(`⚠️ Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again in 10 minutes.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, service, projectDetails, message, budget, currency } = body;

    console.log('📋 Form data received:', { name, email, phone, service });

    // Validation
    if (!name || !email || !phone || !service || !projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, service, or projectDetails.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDB();

    // Prepare quote data
    const numericBudget = budget ? Number(budget) : 0;
    const quoteData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      service: service.trim(),
      projectDetails: projectDetails.trim(),
      message: message ? message.trim() : '',
      currency: currency || 'NGN',
      budgetRaw: numericBudget,
    };

    // Save to database
    console.log('💾 Saving quote to database...');
    const newQuote = await Quote.create(quoteData);
    console.log('✅ Quote saved successfully:', newQuote._id);

    // Send emails
    let emailStatus = 'success';
    try {
      console.log('📧 Sending confirmation emails...');
      await sendEmails(newQuote);
      console.log('✅ Emails sent successfully');
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      emailStatus = 'failed';
    }

    return NextResponse.json({
      success: true,
      message: 'Quote submitted successfully',
      data: {
        id: newQuote._id,
        name: newQuote.name,
        service: newQuote.service
      },
      emailStatus
    }, { status: 200 });

  } catch (error) {
    console.error('❌ FULL ERROR:', error);
    return NextResponse.json({
      error: 'Failed to submit quote',
      details: error.message,
      type: error.name
    }, { status: 500 });
  }
}

// --- GET HANDLER ---
export async function GET() {
  try {
    console.log('📖 Fetching all quotes...');
    await connectToDB();
    
    const quotes = await Quote.find({})
      .sort({ createdAt: -1 })
      .lean()
      .exec();
    
    console.log(`✅ Retrieved ${quotes.length} quotes`);
    return NextResponse.json(quotes, { status: 200 });
  } catch (error) {
    console.error('❌ ERROR fetching quotes:', error);
    return NextResponse.json({
      error: 'Failed to fetch quotes',
      details: error.message
    }, { status: 500 });
  }
}
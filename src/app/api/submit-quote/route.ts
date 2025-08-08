import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- 1. QUOTATION ENGINE ---
// This function calculates the price based on the form data.
// These values are examples; you should adjust them to match your pricing.
const calculateQuote = (formData: Record<string, any>): { total: number; breakdown: string[] } => {
  let total = 15000; // Base price in HKD for a simple site
  const breakdown: string[] = ['Base Website Setup: HK$15,000'];

  // Question 7: Number of pages
  const pages = formData['7'];
  if (pages === '6-15 Pages (A standard business site)') {
    total += 7500;
    breakdown.push('Additional Pages (6-15): +HK$7,500');
  } else if (pages === '16-30 Pages (A larger site)') {
    total += 15000;
    breakdown.push('Additional Pages (16-30): +HK$15,000');
  } else if (pages === '30+ Pages (A content-heavy site)') {
    total += 25000;
    breakdown.push('Additional Pages (30+): +HK$25,000');
  }

  // Question 8: Key features (checkbox)
  const features = formData['8'] || [];
  if (features.includes('E-commerce Store')) {
    total += 20000;
    breakdown.push('E-commerce Functionality: +HK$20,000');
  }
  if (features.includes('Membership System (User accounts)')) {
    total += 30000;
    breakdown.push('Membership & User Accounts: +HK$30,000');
  }
  if (features.includes('Booking / Appointments System')) {
    total += 20000;
    breakdown.push('Booking/Appointments System: +HK$25,000');
  }
  if (features.includes('Multilingual Support')) {
    total += 10000;
    breakdown.push('Multilingual Support: +HK$10,000');
  }

  // Question 9: Content help
  const contentHelp = formData['9'] || [];
  if (contentHelp.includes('I need professional copywriting services.')) {
    total += 4000;
    breakdown.push('Professional Copywriting: +HK$4,000');
  }
  if (contentHelp.includes('I need help sourcing professional photos.')) {
    total += 4000;
    breakdown.push('Stock Photography Sourcing: +HK$4,000');
  }

  // Question 10: Branding
  if (formData['10'] === 'No, I will need a new logo and brand identity designed.') {
    total += 15000;
    breakdown.push('Logo & Brand Identity Design: +HK$15,000');
  }

  // Question 11: Timeline (Rush fee)
  if (formData['11'] === 'Urgent: Within 4 weeks') {
    const rushFee = total * 0.25; // 25% rush fee
    total += rushFee;
    breakdown.push(`Urgent Delivery Rush Fee (25%): +HK$${rushFee.toLocaleString()}`);
  }

  return { total, breakdown };
};


// --- 2. EMAIL SENDING LOGIC ---
const sendQuoteEmail = async (formData: Record<string, any>, quote: { total: number; breakdown: string[] }) => {
  const userEmail = formData['2'];
  const userName = formData['1'];

  // IMPORTANT: Use environment variables for your email credentials
  // Create a .env.local file in your project root and add these:
  // EMAIL_SERVER_USER=your-email@example.com
  // EMAIL_SERVER_PASSWORD=your-email-password
  // EMAIL_SERVER_HOST=smtp.example.com
  // EMAIL_FROM=Your Name <your-email@example.com>

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .header { font-size: 24px; font-weight: bold; color: #2c3e50; text-align: center; margin-bottom: 20px; }
            .total { font-size: 28px; font-weight: bold; color: #2980b9; text-align: center; margin: 20px 0; padding: 10px; background-color: #f0f8ff; border-radius: 5px; }
            .breakdown { margin-top: 20px; }
            .breakdown h3 { font-size: 18px; color: #34495e; border-bottom: 2px solid #ecf0f1; padding-bottom: 5px; }
            .breakdown ul { list-style-type: none; padding: 0; }
            .breakdown li { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #ecf0f1; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #7f8c8d; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">Your Website Project Quotation</div>
            <p>Hi ${userName},</p>
            <p>Thank you for your interest in working with us! Based on the information you provided, we've generated a preliminary quotation for your website project.</p>
            <div class="total">Estimated Total: HK$${quote.total.toLocaleString()}</div>
            <div class="breakdown">
                <h3>Cost Breakdown:</h3>
                <ul>
                    ${quote.breakdown.map(item => `<li>${item.split(':')[0]}<span>${item.split(':')[1]}</span></li>`).join('')}
                </ul>
            </div>
            <div class="footer">
                <p>This is an automated estimate. Prices may vary based on a more detailed project discussion. We will be in touch shortly to discuss the next steps!</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: userEmail,
    bcc: process.env.EMAIL_SERVER_USER, // Send a copy to yourself
    subject: `Your Website Quotation from Enclave Studios`,
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
};

// --- 3. THE API ROUTE HANDLER ---
export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Step 1: Calculate the quote
    const quote = calculateQuote(formData);

    // Step 2: Send the email
    await sendQuoteEmail(formData, quote);

    return NextResponse.json({ success: true, message: 'Quotation sent successfully!' });

  } catch (error) {
    console.error('API Error:', error);
    // In a real app, you'd want more specific error messages
    return NextResponse.json({ success: false, message: 'An error occurred.' }, { status: 500 });
  }
}

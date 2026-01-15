import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, product, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !product || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email configuration for info@timbersouq.com
    // You can use services like:
    // 1. Nodemailer with SMTP
    // 2. SendGrid
    // 3. Resend
    // 4. AWS SES

    // For now, we'll log the inquiry and return success
    // In production, integrate with your email service

    const inquiryData = {
      to: "info@timbersouq.com",
      subject: `Product Inquiry: ${product}`,
      timestamp: new Date().toISOString(),
      data: {
        name,
        email,
        phone,
        product,
        message,
      },
    };

    console.log("New Product Inquiry:", JSON.stringify(inquiryData, null, 2));

    // Option 1: Using fetch to send to an email API service
    // Uncomment and configure based on your email provider

    /*
    // Example with Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TimberSouq <noreply@timbersouq.com>",
        to: ["info@timbersouq.com"],
        subject: `Product Inquiry: ${product}`,
        html: `
          <h2>New Product Inquiry</h2>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });
    
    if (!resendResponse.ok) {
      throw new Error("Failed to send email");
    }
    */

    /*
    // Example with SendGrid
    const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "info@timbersouq.com" }] }],
        from: { email: "noreply@timbersouq.com", name: "TimberSouq" },
        subject: `Product Inquiry: ${product}`,
        content: [{
          type: "text/html",
          value: `
            <h2>New Product Inquiry</h2>
            <p><strong>Product:</strong> ${product}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }],
      }),
    });
    
    if (!sendgridResponse.ok) {
      throw new Error("Failed to send email");
    }
    */

    // For a quick solution without external services,
    // you can use a simple mailto link approach or
    // integrate with a form service like Formspree

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully",
        recipient: "info@timbersouq.com",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}

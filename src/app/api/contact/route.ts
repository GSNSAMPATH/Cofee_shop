import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Configure Gmail transporter (use app password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "sumalnadira123@gmail.com",
        pass: process.env.EMAIL_PASS || "yjkg szyr iwwy igcb",
      },
    });

    // ✅ Define email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO || "aidacoffeeshop@gmail.com",
      subject: `☕ New Message from ${name} - Coffee Shop Contact Form`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; padding: 40px;">
          <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background-color: #3b2a22; padding: 20px; text-align: center; color: #fff;">
              <img src="https://res.cloudinary.com/diatamf9x/image/upload/v1760798950/logocofee_pjh43r.png" 
                   alt="Coffee Logo" 
                   style="width: 200px; border-radius: 10px; margin-bottom: 10px;" />
              <h1 style="margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            </div>

            <!-- Body -->
            <div style="padding: 30px;">
              <h2 style="color: #3b2a22; margin-top: 0;">Contact Details</h2>
              <table width="100%" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="font-weight: bold; width: 120px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Email:</td>
                  <td><a href="mailto:${email}" style="color: #b73e3e;">${email}</a></td>
                </tr>
              </table>

              <h2 style="color: #3b2a22; margin-top: 30px;">Message</h2>
              <div style="background: #f9f9f9; border-left: 4px solid #b73e3e; padding: 15px; margin-top: 10px; line-height: 1.6; color: #333;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; color: #777;">
              <p style="margin: 0;">This message was sent from your Coffee Shop website contact form.</p>
              <p style="margin: 5px 0;">© ${new Date().getFullYear()} Coffee Haven. All rights reserved.</p>
              <div style="margin-top: 10px;">
                <a href="https://aidacoffee.com" style="color: #b73e3e; text-decoration: none; margin: 0 5px;">Website</a> |
                <a href="mailto:youremail@gmail.com" style="color: #b73e3e; text-decoration: none; margin: 0 5px;">Email Us</a> |
                <a href="https://facebook.com/aidacoffee" style="color: #b73e3e; text-decoration: none; margin: 0 5px;">Facebook</a>
              </div>
            </div>

          </div>
        </div>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}

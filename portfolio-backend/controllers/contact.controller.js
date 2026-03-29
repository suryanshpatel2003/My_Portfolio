import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    /* ==============================
       1️⃣ Mail to You (Admin)
    ============================== */

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "suryansh30patel@gmail.com",
      reply_to: email,
      subject: `New Message from ${name}`,
      html: `
        <h2>📩 New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* ==============================
       2️⃣ Auto Reply to User (SAME DESIGN 🔥)
    ============================== */

    await resend.emails.send({
      from: "Suryansh Patel <onboarding@resend.dev>",
      to: email,
      subject: "🚀 Thanks for contacting Suryansh",
      html: `
    <div style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            
            <table width="600" cellpadding="0" cellspacing="0" style="margin:40px auto;background:#111827;border-radius:12px;overflow:hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(90deg,#3b82f6,#06b6d4,#f97316);padding:30px;text-align:center;">
                  <h1 style="color:white;margin:0;font-size:28px;">Suryansh Patel</h1>
                  <p style="color:white;margin:5px 0 0 0;font-size:14px;letter-spacing:2px;">FULL STACK DEVELOPER</p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px;color:#e5e7eb;">
                  <h2 style="margin-top:0;color:#ffffff;">Hey ${name} 👋</h2>
                  
                  <p style="line-height:1.6;font-size:15px;">
                    Thank you for reaching out through my portfolio website.
                  </p>

                  <p style="line-height:1.6;font-size:15px;">
                    I’ve received your message and will respond as soon as possible.
                    I truly appreciate your interest!
                  </p>

                  <div style="margin:30px 0;text-align:center;">
                    <a href="https://github.com/" 
                       style="background:#3b82f6;color:white;padding:12px 24px;
                       text-decoration:none;border-radius:30px;font-size:14px;
                       display:inline-block;">
                      View My Projects
                    </a>
                  </div>

                  <p style="font-size:14px;color:#9ca3af;">
                    If your message was urgent, feel free to reply directly to this email.
                  </p>

                  <p style="margin-top:30px;">
                    Best Regards,<br/>
                    <strong style="color:white;">Suryansh Patel</strong><br/>
                    <span style="color:#9ca3af;">Full Stack Developer 🚀</span>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#0b1220;padding:20px;text-align:center;color:#6b7280;font-size:12px;">
                  © ${new Date().getFullYear()} Suryansh Patel. All rights reserved.
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </div>
      `,
    });

    res.status(200).json({ message: "Email sent successfully 🚀" });

  } catch (error) {
    console.error("RESEND ERROR:", error);
    res.status(500).json({ message: "Email failed ❌" });
  }
};
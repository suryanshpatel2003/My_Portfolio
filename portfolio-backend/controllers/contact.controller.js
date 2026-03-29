import { Resend } from "resend";

export const sendContactMail = async (req, res) => {
  try {
    // 🔥 IMPORTANT: yahan banana hai (top pe nahi)
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    /* ==============================
       1️⃣ Mail to YOU
    ============================== */

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "suryansh30patel@gmail.com",
      reply_to: email,
      subject: `New Message from ${name}`,
      html: `
        <h2>📩 New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    /* ==============================
       2️⃣ Auto Reply (optional)
    ============================== */

    try {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: email,
        subject: "Thanks for contacting 🚀",
        html: `<p>Hey ${name}, I will reply soon.</p>`,
      });
    } catch (err) {
      console.log("Auto reply failed:", err.message);
    }

    res.status(200).json({ message: "Email sent successfully 🚀" });

  } catch (error) {
    console.error("RESEND ERROR:", error);

    res.status(500).json({
      message: "Email failed ❌",
      error: error.message,
    });
  }
};
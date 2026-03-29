import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Mail to YOU
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "suryansh30patel@gmail.com",
      reply_to: email,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    // ✅ Auto reply to USER
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting 🚀",
      html: `
        <h2>Hey ${name} 👋</h2>
        <p>Thanks for contacting me. I will reply soon.</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.log("RESEND ERROR:", error);
    res.status(500).json({ success: false });
  }
};
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // sender
      to: "suryansh30patel@gmail.com", // tera email
      reply_to: email, // 🔥 IMPORTANT (user ka email)
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.log("RESEND ERROR:", error);
    res.status(500).json({ success: false });
  }
};
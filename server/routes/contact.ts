import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export const handleContact: RequestHandler = async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid input",
    });
  }

  const { name, email, message } = parsed.data;

  try {
    console.log("EMAIL USER:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
  from: `"Asmaa Portfolio" <${process.env.EMAIL_USER}>`,
  to: "asmaachreih@gmail.com",
  replyTo: email, // so you can reply directly to the sender
  subject: `New message from ${name}`,
  text: `From: ${name}\nEmail: ${email}\n\n${message}`,
});


    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
};

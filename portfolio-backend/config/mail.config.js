import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config(); // IMPORTANT: load env here also

console.log("MAIL USER:", process.env.EMAIL_USER);
console.log("MAIL PASS:", process.env.EMAIL_PASS);

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
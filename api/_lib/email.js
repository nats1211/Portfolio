import { config } from "dotenv";
import { Resend } from "resend";
import { contactEmailTemplate } from "./email-template.js";

config({ path: ".env.local" });

export async function sendContactEmail({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;
  if (!apiKey || !from || !to) {
    throw new Error(
      "RESEND_API_KEY, EMAIL_FROM, and EMAIL_TO must be configured on the server",
    );
  }

  const { subject, html, text } = contactEmailTemplate({
    name,
    email,
    message,
  });
  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }
}

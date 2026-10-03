import { sendContactEmail } from "./_lib/email.js";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 10_000;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = request.body ?? {};
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return response
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  const sender = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
  if (
    !sender.name ||
    sender.name.length > MAX_NAME_LENGTH ||
    !sender.email ||
    sender.email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender.email) ||
    !sender.message ||
    sender.message.length > MAX_MESSAGE_LENGTH
  ) {
    return response
      .status(400)
      .json({ error: "Please provide a valid name, email, and message." });
  }

  try {
    await sendContactEmail(sender);
    return response.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return response.status(500).json({
      error: "Your message could not be sent. Please try again or email me directly.",
    });
  }
}

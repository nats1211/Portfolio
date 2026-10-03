export async function sendContactMessage({ name, email, message }) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || "Your message could not be sent. Please try again.",
    );
  }
}

const escapeHtml = (value = "") =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export function contactEmailTemplate({ name, email, message }) {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const subject = `New portfolio message from ${name.replace(/[\r\n]+/g, " ")}`;

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light dark" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f5f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
 
            <!-- Header -->
            <tr>
              <td style="background-color:#111827;padding:24px 32px;">
                <p style="margin:0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;">Portfolio Contact</p>
                <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;color:#ffffff;">You have a new message</h1>
              </td>
            </tr>
 
            <!-- Sender details -->
            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:16px;">
                      <p style="margin:0 0 4px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Name</p>
                      <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">${safeName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0 0 4px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Email</p>
                      <p style="margin:0;font-size:16px;color:#111827;">${safeEmail}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
 
            <!-- Divider -->
            <tr>
              <td style="padding:16px 32px 0;">
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" />
              </td>
            </tr>
 
            <!-- Message -->
            <tr>
              <td style="padding:20px 32px 32px;">
                <p style="margin:0 0 10px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Message</p>
                <div style="background-color:#f9fafb;border-left:3px solid #111827;border-radius:6px;padding:16px 18px;font-size:15px;line-height:1.65;color:#1f2937;">
                  ${safeMessage}
                </div>
              </td>
            </tr>
 
            <!-- Footer -->
            <tr>
              <td style="background-color:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Sent from your portfolio contact form</p>
              </td>
            </tr>
 
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    // Keep a plain-text alternative for text-only mail clients.
    const text = `New portfolio message
 
Name: ${name}
Email: ${email}
 
Message:
${message}
 
--
Sent from your portfolio contact form`;

    return { subject, html, text };
}
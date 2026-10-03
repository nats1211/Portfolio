import { Mail } from "lucide-react";
import Reveal from "./reveal.jsx";
import { resumeUrl, socialLinks } from "../data/socialLinks.js";
import ContactForm from "./contact-form.jsx";

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface px-4 py-16 sm:px-6 sm:py-20"
    >
      <Reveal className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <h2 id="contact-heading" className="mb-3 text-3xl font-semibold tracking-tight">
            Contact
          </h2>
          <p className="mb-6 max-w-[65ch] text-muted">
            I’m open to frontend, backend, Odoo and full-stack opportunities. Send me a note or find me here.
          </p>
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer noopener" : undefined}
                  className="inline-flex items-center gap-2 font-medium text-accent underline-offset-4 hover:underline"
                >
                  {link.label === "Email" && <Mail aria-hidden="true" size={18} />}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            download
            className="mt-6 inline-block font-medium text-accent underline-offset-4 hover:underline"
          >
            Download résumé
          </a>
        </div>
        <ContactForm />
      </Reveal>
    </section>
  );
}

export default Contact;

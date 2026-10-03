import Button from "./ui/button.jsx";
import Spinner from "./ui/spinner.jsx";
import useContactForm from "../hooks/useContactForm.js";

const fieldClassName =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted";

function ContactForm() {
  const { formData, isSending, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} aria-busy={isSending} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block font-medium">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block font-medium">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="How can I help?"
        />
      </div>
      <Button
        type="submit"
        disabled={isSending}
        aria-busy={isSending}
        className="w-full gap-2"
      >
        {isSending && <Spinner />}
        {isSending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export default ContactForm;

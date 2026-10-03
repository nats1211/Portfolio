import { useState } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "../services/contactService.js";

const emptyForm = { name: "", email: "", message: "" };

function useContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    try {
      await sendContactMessage(formData);
      setFormData(emptyForm);
      toast.success("Your message was sent. Thank you!");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please email me directly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return { formData, isSending, handleChange, handleSubmit };
}

export default useContactForm;

import { useCallback } from "react";
import { toast } from "sonner";
import { DEFAULT_WHATSAPP_NUMBER } from "@/config/whatsapp";
import { normalizeFormData, openWhatsApp } from "@/lib/whatsapp";

// React hook to send WhatsApp messages
// Usage:
// const { sendMessage, sendForm } = useWhatsApp();
// sendMessage("Hello there");
// sendForm(formData, { title: "Painting Service Request", labels: { fullName: "Name" } });
export default function useWhatsApp(defaultNumber = DEFAULT_WHATSAPP_NUMBER) {
  const sendMessage = useCallback(
    (text, number = defaultNumber) => {
      if (!text || !String(text).trim()) {
        toast.error("Message is empty");
        return false;
      }
      const ok = openWhatsApp({ number, text });
      if (!ok) toast.error("Failed to open WhatsApp");
      return ok;
    },
    [defaultNumber]
  );

  const sendForm = useCallback(
    (form, options = {}, number = defaultNumber) => {
      try {
        const text = normalizeFormData(form, options);
        if (!text) {
          toast.error("Form has no content to send");
          return false;
        }
        return sendMessage(text, number);
      } catch (e) {
        console.error(e);
        toast.error("Failed to prepare WhatsApp message");
        return false;
      }
    },
    [defaultNumber, sendMessage]
  );

  return { sendMessage, sendForm };
}

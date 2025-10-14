// Centralized WhatsApp configuration
// Pull number from environment if provided, else use a sensible default.
// Example: add this to your .env (Vite):
// VITE_WHATSAPP_NUMBER=905550004000

export const DEFAULT_WHATSAPP_NUMBER =
  import.meta.env?.VITE_WHATSAPP_NUMBER || "00963933993929";

export const WHATSAPP_DEFAULT_GREETING = "Hello! I'd like to learn more.";

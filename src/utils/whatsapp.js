// WhatsApp utility to build URLs and open the chat in a new tab/window
// Also provides helpers to normalize form data into a message string.

import { DEFAULT_WHATSAPP_NUMBER } from "@/config/whatsapp";

export function isMobile() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|iemobile|blackberry|bada|mobile/i.test(ua);
}

export function sanitizeNumber(number) {
  if (!number) return "";
  return String(number).replace(/[^0-9]/g, "");
}

export function buildWhatsAppUrl({ number = DEFAULT_WHATSAPP_NUMBER, text = "" } = {}) {
  const num = sanitizeNumber(number);
  const encoded = encodeURIComponent(text || "");
  // Use wa.me for general case; some environments prefer api.whatsapp.com
  const base = isMobile() ? "https://wa.me" : "https://api.whatsapp.com/send";
  if (base.includes("wa.me")) {
    return `${base}/${num}?text=${encoded}`;
  }
  return `${base}?phone=${num}&text=${encoded}`;
}

export function openWhatsApp({ number = DEFAULT_WHATSAPP_NUMBER, text = "" } = {}) {
  try {
    const url = buildWhatsAppUrl({ number, text });
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      // Popup blocked
      window.location.href = url;
    }
    return true;
  } catch (e) {
    console.error("Failed to open WhatsApp", e);
    return false;
  }
}

// Convert a generic form object into a readable WhatsApp message
// options: { title?: string, labels?: Record<string,string>, order?: string[] }
export function normalizeFormData(form, options = {}) {
  if (!form || typeof form !== "object") return "";
  const { title, labels = {}, order } = options;

  const keys = Array.isArray(order) && order.length ? order : Object.keys(form);

  const lines = [];
  if (title) lines.push(title);

  keys.forEach((key) => {
    const rawLabel = labels[key] || key;
    let value = form[key];
    if (value === undefined || value === null || value === "") return;
    if (Array.isArray(value)) value = value.join(", ");
    if (typeof value === "object") value = JSON.stringify(value);
    lines.push(`${rawLabel}: ${value}`);
  });

  return lines.join("\n");
}

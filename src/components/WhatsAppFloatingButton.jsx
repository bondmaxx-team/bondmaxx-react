import React from "react";
import useWhatsApp from "@/hooks/useWhatsApp";
import { WHATSAPP_DEFAULT_GREETING } from "@/config/whatsapp";

export default function WhatsAppFloatingButton({
  message = WHATSAPP_DEFAULT_GREETING,
  number,
  position = "br", // br (bottom-right), bl (bottom-left)
}) {
  const { sendMessage } = useWhatsApp(number);

  const posClass = position === "bl" ? "left-4" : "right-4";

  return (
    <button
      onClick={() => sendMessage(message)}
      className={`fixed ${posClass} bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400`}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-5 h-5 fill-current"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 224.7 32 106.9 32 12 126.9 12 244.7c0 41.9 11 82.8 31.9 118.8L0 480l120.6-43.3c34.4 18.8 73.2 28.8 113.1 28.8h.1c117.7 0 212.6-94.9 212.6-212.7 0-58.5-23.1-113.8-65.5-155.7zM224 438.7h-.1c-35.6 0-70.4-9.6-100.7-27.8l-7.2-4.3-71.6 25.7 24.7-69.8-4.7-7.3c-19.5-30.4-29.8-65.5-29.8-101.4 0-104.9 85.4-190.3 190.4-190.3 50.8 0 98.6 19.8 134.4 55.7 35.8 35.9 55.5 83.7 55.5 134.6 0 105-85.4 190.2-190.4 190.2zm101.6-138.2c-5.6-2.8-33.1-16.2-38.2-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.5 21.7-3.2 3.7-6.5 4.2-12.1 1.4-33.1-16.2-54.7-28.9-76.6-65.4-5.8-10 5.8-9.3 16.6-31 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 38.9 59.4 94.2 83.4 35 15.1 48.7 16.4 66.3 13.8 10.7-1.6 33.1-13.5 37.7-26.6 4.6-13.1 4.6-24.3 3.2-26.6-1.3-2.4-5-3.8-10.6-6.6z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  );
}

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918980200401?text=Hello%20Explore%20The%20Gujarat%2C%20I%20want%20to%20plan%20a%20trip."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center rounded-full bg-[oklch(0.72_0.18_145)] text-white shadow-royal hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[oklch(0.72_0.18_145)]/40" />
    </a>
  );
}
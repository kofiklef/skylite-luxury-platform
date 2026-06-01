import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/233592012888"
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] shadow-lg shadow-black/20 hover:bg-[var(--color-accent-bright)] hover:scale-105 transition-all"
    >
      <MessageCircle size={22} />
    </a>
  );
}

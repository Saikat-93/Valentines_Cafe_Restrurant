import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a href="https://wa.me/918116375655" target="_blank" rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-rustic text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-110 transition">
      <span className="absolute inset-0 rounded-full bg-rustic animate-ping opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}

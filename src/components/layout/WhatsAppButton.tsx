import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const WhatsAppButton = () => {
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;

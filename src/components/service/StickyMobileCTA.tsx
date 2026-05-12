import { Phone, MessageCircle, FileText } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface StickyMobileCTAProps {
  serviceTitle: string;
}

const StickyMobileCTA = ({ serviceTitle }: StickyMobileCTAProps) => {
  const wa = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in ${serviceTitle}. Please share more details.`,
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-px bg-border/60">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 bg-[hsl(142,70%,40%)] text-primary-foreground active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex flex-col items-center justify-center py-2.5 bg-primary text-primary-foreground active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center justify-center py-2.5 gradient-gold text-accent-foreground active:scale-95 transition-transform"
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-semibold">Get Quote</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;

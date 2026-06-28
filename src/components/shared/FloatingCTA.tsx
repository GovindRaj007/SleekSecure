import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS } from "@/lib/constants";
import { trackWhatsAppClick, trackCallClick } from "@/lib/gtm-tracking";

const whatsappHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in your invisible grills and safety solutions services.")}`;
const callHref = `tel:${BUSINESS.phone}`;

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappHref}
        data-track="whatsapp"
        onClick={() => trackWhatsAppClick("floating_cta", "button")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>

      <a
        href={callHref}
        data-track="call"
        onClick={() => trackCallClick("floating_cta", "button")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(38_85%_55%)] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}

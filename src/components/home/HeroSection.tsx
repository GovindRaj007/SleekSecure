import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import heroImage from "@/assets/hero-luxury-balcony.jpg";

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;
  return (
    <section className="relative h-[80svh] min-h-[560px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern apartment balcony with invisible safety grills"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10 h-full flex flex-col items-center justify-center">
        <div className="max-w-2xl text-center">
          {/* Trust Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <p className="text-xs md:text-sm font-semibold text-slate-900 uppercase tracking-wider">
              ✓ Trusted Invisible Grill Specialists
            </p>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-4 animate-fade-in">
            Invisible Grills in Hyderabad for Balconies & Windows Serving Telangana & Andhra Pradesh
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in font-light" style={{ animationDelay: "0.05s" }}>
            Get Premium SS316 Stainless Steel Invisible Grill & Ceiling Cloth Hanger Installation Services
          </p>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-gold text-accent-foreground border-0 font-semibold gap-2 text-base px-8">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

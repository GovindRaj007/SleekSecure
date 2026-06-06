import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { trackCallClick } from "@/lib/gtm-tracking";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="gradient-primary rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Secure Your Home?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Get a free consultation and quote for invisible grills installation. Our experts are just a call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-gold text-accent-foreground border-0 font-semibold gap-2 text-base px-8">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${BUSINESS.phone}`} onClick={() => trackCallClick('cta_section', 'call_button')}>
              <Button size="lg" className="bg-primary/80 hover:bg-primary text-primary-foreground font-semibold gap-2 text-base px-8">
                <Phone className="w-5 h-5" /> {BUSINESS.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

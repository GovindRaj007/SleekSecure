import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Heart, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES, TELANGANA_LOCATIONS, ANDHRA_PRADESH_LOCATIONS } from "@/lib/constants";
import { trackCallClick } from "@/lib/gtm-tracking";
import { useState } from "react";
import logo from "@/assets/sleek-secure-invisible-grills-logo.jpg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState<string>("");

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0 }), 50);
    }
  };

  const LocationListItem = ({ name, slug }: { name: string; slug: string }) => (
    <li className="flex items-center gap-2">
      <span 
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-gold"
      ></span>
      <Link to={`/invisible-grills-${slug}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
        {name}
      </Link>
    </li>
  );

  const AccordionSection = ({ 
    title, 
    id, 
    locations
  }: { 
    title: string; 
    id: string; 
    locations: typeof TELANGANA_LOCATIONS;
  }) => {
    const isExpanded = expandedSection === id;
    const halfLength = Math.ceil(locations.length / 2);
    const col1 = locations.slice(0, halfLength);
    const col2 = locations.slice(halfLength);

    return (
      <div className="border-b border-primary-foreground/10">
        <button
          onClick={() => setExpandedSection(isExpanded ? "" : id)}
          className="w-full flex items-center justify-between p-[1rem] text-lg font-heading font-semibold text-gold hover:text-accent transition-colors group"
        >
          {title}
          <ChevronDown 
            className={`w-5 h-5 text-gold transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
        
        {isExpanded && (
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              <ul className="space-y-2.5">
                {col1.map((loc) => (
                  <LocationListItem key={loc.slug} {...loc} />
                ))}
              </ul>
              <ul className="space-y-2.5">
                {col2.map((loc) => (
                  <LocationListItem key={loc.slug} {...loc} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 mb-4 cursor-pointer">
              <img 
                src={logo}
                alt="Sleek Secure Logo"
                className="h-16 w-auto "
              />
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Premium invisible grills and safety solutions for modern homes and apartments. Trusted by thousands of families.
            </p>
            <div className="space-y-3">
              <a href={`tel:${BUSINESS.phone}`} onClick={() => trackCallClick('footer', 'phone_link')} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {BUSINESS.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4" /> {BUSINESS.workingHours}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id} className="flex items-center gap-2">
                  <span 
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-gold"
                  ></span>
                  <Link to={s.path} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Accordion */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-lg mb-4">Service Areas</h4>
            <div className="border border-primary-foreground/20 rounded-lg overflow-hidden">
              <AccordionSection 
                title="Telangana" 
                id="telangana" 
                locations={TELANGANA_LOCATIONS}
              />
              <AccordionSection 
                title="Andhra Pradesh" 
                id="andhra-pradesh" 
                locations={ANDHRA_PRADESH_LOCATIONS}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy-policy" },
              ].map((link) => (
                <li key={link.path} className="flex items-center gap-2">
                  <span 
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-gold"
                  ></span>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-4 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

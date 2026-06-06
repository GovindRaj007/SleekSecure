import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, BUSINESS, TELANGANA_LOCATIONS, ANDHRA_PRADESH_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { trackCallClick } from "@/lib/gtm-tracking";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import logo from "@/assets/sleek-secure-invisible-grills-logo.jpg";
import logoAlt from "@/assets/sleek-secure-invisible-grills-logo2.jpg";
import heroImage from "@/assets/hero-balcony-invisible-grills.jpg";

// Menu Icon
const MenuIcon = ({ className = "h-7 w-7" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
  </svg>
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedLocationCategory, setExpandedLocationCategory] = useState<string | null>(null);
  const [expandedDesktopLocationCategory, setExpandedDesktopLocationCategory] = useState<string | null>(null);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const announcementHeight = 40; // Must match TopAnnouncementBar height

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Calculate how much navbar should scroll with announcement
      // Once announcement is hidden (scrollY >= announcementHeight), navbar stays at top
      const offset = Math.min(window.scrollY, announcementHeight);
      setScrollOffset(offset);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
    setActiveDropdown(null);
    setExpandedDesktopLocationCategory(null);
    setIsLocationsDropdownOpen(false);
  }, [location]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0 }), 50);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-colors duration-300 rounded-t-3xl ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
      style={{
        top: 0,
        transform: `translateY(${announcementHeight - scrollOffset}px)`,
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <img 
              src={scrolled ? logoAlt : logo}
              alt="Sleek Secure Logo"
              className={`h-[4rem] w-auto transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-90"}`}
              loading="lazy"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div 
                  key={link.label} 
                  className="relative group"
                  {...(link.label === "Locations" ? {
                    onMouseEnter: () => setIsLocationsDropdownOpen(true),
                    onMouseLeave: () => setIsLocationsDropdownOpen(false)
                  } : {})}
                >
                  <button
                    onClick={() => link.label === "Locations" && setIsLocationsDropdownOpen(!isLocationsDropdownOpen)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      scrolled
                        ? "text-foreground/80 hover:text-primary hover:bg-secondary"
                        : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {link.label === "Locations" ? (
                    <div 
                      className={`absolute top-full left-0 mt-1 w-96 bg-card rounded-xl shadow-xl border border-border/50 transition-all duration-200 translate-y-2 z-50 ${isLocationsDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >
                      <div className="p-3 space-y-2">
                        {/* Andhra Pradesh Accordion */}
                        <div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedDesktopLocationCategory(
                                expandedDesktopLocationCategory === "andhra" ? null : "andhra"
                              );
                            }}
                            className="w-full flex items-center justify-between py-2 px-3 text-sm font-semibold text-gold hover:bg-secondary rounded-lg transition-colors"
                          >
                            Andhra Pradesh
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                expandedDesktopLocationCategory === "andhra" ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {expandedDesktopLocationCategory === "andhra" && (
                            <div className="px-3 py-2 grid grid-cols-2 gap-2">
                              {ANDHRA_PRADESH_LOCATIONS.map((loc) => (
                                <Link
                                  key={loc.slug}
                                  to={`/invisible-grills-${loc.slug}`}
                                  className="px-2 py-1.5 text-xs text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors text-center"
                                >
                                  {loc.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Telangana Accordion */}
                        <div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedDesktopLocationCategory(
                                expandedDesktopLocationCategory === "telangana" ? null : "telangana"
                              );
                            }}
                            className="w-full flex items-center justify-between py-2 px-3 text-sm font-semibold text-gold hover:bg-secondary rounded-lg transition-colors"
                          >
                            Telangana
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                expandedDesktopLocationCategory === "telangana" ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {expandedDesktopLocationCategory === "telangana" && (
                            <div className="px-3 py-2 grid grid-cols-2 gap-2">
                              {TELANGANA_LOCATIONS.map((loc) => (
                                <Link
                                  key={loc.slug}
                                  to={`/invisible-grills-${loc.slug}`}
                                  className="px-2 py-1.5 text-xs text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors text-center"
                                >
                                  {loc.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-xl border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? location.pathname === link.path
                        ? "text-primary bg-secondary"
                        : "text-foreground/80 hover:text-primary hover:bg-secondary"
                      : location.pathname === link.path
                        ? "text-primary-foreground bg-primary-foreground/15"
                        : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${BUSINESS.phone}`} onClick={() => trackCallClick('navbar', 'desktop_call_button')}>
              <Button size="sm" className={`gap-2 ${scrolled ? "bg-primary/80 text-primary-foreground hover:bg-primary" : "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 border border-primary-foreground/30" }`}>
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="sm" className="gradient-primary text-primary-foreground border-0">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle - Drawer Trigger */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button
                className={`lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`}
                aria-label="Toggle menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </DrawerTrigger>

            {/* Drawer Content - Slides up from bottom with background image */}
            <DrawerContent className="border-t border-white/10 rounded-t-3xl p-0 overflow-hidden">
              {/* Background with Image and Gradient Overlay */}
              <div className="absolute inset-0">
                <img src={heroImage} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-primary/85" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>

                {/* Drag Handle */}
                <div className="mx-auto h-[5px] w-[55px] rounded-full bg-white/30 flex-shrink-0" />

                {/* Menu Items */}
                <div className="px-4 py-3 space-y-2">
                  {NAV_LINKS.map((link, index) =>
                    link.children ? (
                      link.label === "Locations" ? (
                        // Special rendering for Locations with nested categories
                        <motion.div
                          key={link.label}
                          initial={fadeUp.initial}
                          animate={fadeUp.animate}
                          transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                        >
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === "Locations" ? null : "Locations"
                              )
                            }
                            className="w-full flex items-center justify-between py-2 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                          >
                            Locations
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === "Locations" ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === "Locations" && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-2 overflow-hidden"
                              >
                                {/* Telangana Category Accordion */}
                                <div className="border-b border-white/10">
                                  <button
                                    onClick={() =>
                                      setExpandedLocationCategory(
                                        expandedLocationCategory === "telangana" ? null : "telangana"
                                      )
                                    }
                                    className="w-full flex items-center justify-between py-2 px-4 rounded-lg text-gold hover:bg-white/5 transition-colors text-sm font-semibold"
                                  >
                                    Telangana
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        expandedLocationCategory === "telangana" ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>
                                  <AnimatePresence>
                                    {expandedLocationCategory === "telangana" && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-4 pb-2 grid grid-cols-2 gap-2 overflow-hidden"
                                      >
                                        {TELANGANA_LOCATIONS.map((loc) => (
                                          <Link
                                            key={loc.slug}
                                            to={`/invisible-grills-${loc.slug}`}
                                            onClick={() => setIsDrawerOpen(false)}
                                            className="text-xs text-white/70 hover:text-gold transition-colors"
                                          >
                                            {loc.name}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                {/* Andhra Pradesh Category Accordion */}
                                <div>
                                  <button
                                    onClick={() =>
                                      setExpandedLocationCategory(
                                        expandedLocationCategory === "andhra" ? null : "andhra"
                                      )
                                    }
                                    className="w-full flex items-center justify-between py-2 px-4 rounded-lg text-gold hover:bg-white/5 transition-colors text-sm font-semibold"
                                  >
                                    Andhra Pradesh
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        expandedLocationCategory === "andhra" ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>
                                  <AnimatePresence>
                                    {expandedLocationCategory === "andhra" && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-4 pb-2 grid grid-cols-2 gap-2 overflow-hidden"
                                      >
                                        {ANDHRA_PRADESH_LOCATIONS.map((loc) => (
                                          <Link
                                            key={loc.slug}
                                            to={`/invisible-grills-${loc.slug}`}
                                            onClick={() => setIsDrawerOpen(false)}
                                            className="text-xs text-white/70 hover:text-gold transition-colors"
                                          >
                                            {loc.name}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ) : (
                        // Standard rendering for Services and other dropdown items
                        <motion.div key={link.label} initial={fadeUp.initial} animate={fadeUp.animate} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === link.label ? null : link.label
                              )
                            }
                            className="w-full flex items-center justify-between py-2 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                          >
                            {link.label}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === link.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {link.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="block py-2 px-4 text-sm text-white/70 hover:text-sky-400 transition-colors rounded-lg"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    ) : (
                      <motion.div key={link.label} initial={fadeUp.initial} animate={fadeUp.animate} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
                        <Link
                          to={link.path}
                          onClick={() => setIsDrawerOpen(false)}
                          className="block py-2 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Action Buttons */}
                <motion.div 
                  className="pt-6 pb-8 space-y-2 flex flex-col px-4"
                  initial={fadeUp.initial} 
                  animate={fadeUp.animate} 
                  transition={{ ...fadeUp.transition, delay: NAV_LINKS.length * 0.05 }}
                >
                  <a href={`tel:${BUSINESS.phone}`} onClick={() => { trackCallClick('navbar', 'mobile_call_button'); setIsDrawerOpen(false); }}>
                    <button className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4" />
                      Call: {BUSINESS.phone}
                    </button>
                  </a>
                  <Link to="/contact" onClick={() => setIsDrawerOpen(false)}>
                    <button className="w-full py-3 px-4 bg-gold text-white font-semibold rounded-xl hover:bg-gold/90 transition-colors">
                      Get Free Quote
                    </button>
                  </Link>
                </motion.div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
